import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';
import path from 'path';
import axios from 'axios';
import sharp from 'sharp';

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'colleges');
const IMAGE_WIDTH = 1200;
const IMAGE_QUALITY = 80;

async function downloadAndCompressImages() {
  console.log('Starting college image download and compression process...');
  
  try {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}`);
  } catch (err) {
    console.log(`Output directory already exists: ${OUTPUT_DIR}`);
  }
  
  const prisma = new PrismaClient();
  
  try {
    const colleges = await prisma.college.findMany({
      select: {
        id: true,
        name: true,
        coverImage: true,
      },
      where: {
        coverImage: {
          not: null,
        },
      },
    });
    
    console.log(`Found ${colleges.length} colleges with cover images`);
    
    for (const [index, college] of colleges.entries()) {
      try {
        if (!college.coverImage) continue;
        
        console.log(`[${index + 1}/${colleges.length}] Processing: ${college.name}`);
        
        const safeFileName = `${college.id}.jpg`;
        const outputPath = path.join(OUTPUT_DIR, safeFileName);
        
        try {
          await fs.access(outputPath);
          console.log(`  Image already exists, skipping: ${safeFileName}`);
          continue;
        } catch (err) {
        }
        
        console.log(`  Downloading from: ${college.coverImage}`);
        const response = await axios({
          method: 'GET',
          url: college.coverImage,
          responseType: 'arraybuffer',
          timeout: 10000,
        });
        
        await sharp(response.data)
          .resize({ width: IMAGE_WIDTH, withoutEnlargement: true })
          .jpeg({ quality: IMAGE_QUALITY })
          .toFile(outputPath);
        
        console.log(`  ✓ Saved to: ${safeFileName}`);
        
        await prisma.college.update({
          where: { id: college.id },
          data: { 
            coverImage: `/colleges/${safeFileName}` 
          },
        });
        
        console.log(`  ✓ Updated database record`);
        
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (error) {
        console.error(`  ✗ Error processing ${college.name}: ${error.message}`);
      }
    }
    
    console.log('Image download and compression completed!');
  } catch (error) {
    console.error(`Error in main process: ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
}

downloadAndCompressImages().catch(error => {
  console.error('Unhandled error:', error);
  process.exit(1);
});