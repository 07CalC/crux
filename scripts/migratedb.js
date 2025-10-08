
import { PrismaClient as SqliteClient } from './client-sqlite'
import { PrismaClient as PostgresClient } from '@prisma/client'

const sqlite = new SqliteClient({
  datasources: { db: { url: 'file:../dev.db' } }
})
const postgres = new PostgresClient()

async function main() {
  console.log('Fetching colleges from SQLite...')
  const colleges = await sqlite.college.findMany({
    include: {
      images: true,
      orcrs: true,
      reviews: true,
      placements: true,
    },
  })

  console.log(`Found ${colleges.length} colleges. Starting migration...\n`)

  for (const college of colleges) {
    try {
      const {
        images,
        orcrs,
        reviews,
        placements,
        id,
        ...collegeData
      } = college

      await postgres.college.create({
        data: {
          id,
          ...collegeData,

          images: {
            create: images.map(({ id, collegeId, ...img }) => img)
          },

          orcrs: {
            create: orcrs.map(({ id, collegeId, ...o }) => o)
          },

          reviews: {
            create: reviews.map(({ id, collegeId, ...r }) => r)
          },

          placements: {
            create: placements.map(({ id, collegeId, ...p }) => p)
          },
        }
      })

      console.log(`✅ Migrated: ${college.name} | ORCR: ${orcrs.length}, Reviews: ${reviews.length}, Images: ${images.length}, Placements: ${placements.length}`)

    } catch (err) {
      console.error(`❌ Error migrating ${college.name}:`, err)
    }
  }

  console.log('\n🎉 Migration complete.')
}

main()
  .catch((e) => {
    console.error('Unhandled Error:', e)
  })
  .finally(async () => {
    await sqlite.$disconnect()
    await postgres.$disconnect()
  })
