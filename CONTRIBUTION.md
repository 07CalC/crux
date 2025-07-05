# Contributing to Crux

Welcome, and thanks for your interest in contributing to **Crux**! 🚀  
Crux is a tool to explore previous year college cutoffs and more, built using **Next.js**, **Prisma**, and **PostgreSQL**.

---

## 🛠️ Getting Started

### fork the repo

### Clone the repo

```bash
git clone https://github.com/<yourusername>/crux.git
cd crux
```

### Install dependencies

install the dependencies via any package manager of your choice
(bun is recommended)
```bash
bun install
````

### Set up your .env

```bash
cp .env.example .env
```

**Get `DATABASE_URL` and cloudinary keys from us**

To prevent misuse, we don’t publish the database connection string publicly.

Message me on (**discord**)[https://discord.com/users/notcalc] to get the dev env keys
Make sure to:
- mention your github username
- link your fork or PR if you've already started contributing.

### Setup the database

```bash
bunx prisma generate
```
This will generate the client.

### Run the dev server

```bash
bun dev
```
app should be running at `http://localhost:3000`

## 🔧 Project Structure

```bash
crux/
├── src/
    ├── app/           # Next.js App Router pages
        ├── api/       # Next.js api routes
        ├── components # reusable react comonents
    ├── context/       # contexts
    ├── lib/           # helper functions
    ├── types/         # types
    ├── constants/     # all constant data like available years of cutoff
├── prisma/            # Prisma schema and migrations
├── cachedOrcr/        # Compressed JSON files (cutoffs)
├── public/            # Static assets
└── scripts/           # One-time utility scripts
```

## 📦 Making a Contribution

1. Create a new branch
```
git checkout -b feat/my-feature
```

2. Make your changes

3. lint your code

```
bun lint
```

4. Commit

```bash
git commit -m "feat: added filter by placement"
```

5. Push and open a PR

```bash
git push origin feat/my-feature
```

## 🙋‍♀️ Questions or Help?

- Open an issue: (Github issues)[https://github.com/07CalC/crux/issues]
- Ping @07calc


## Thanks for helping make Crux better! 🎯
