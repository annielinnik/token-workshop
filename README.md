This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Copy .env file

```bash
cp .env.example .env
```

Install dependencies

```bash
npm i
```

Generate Prisma client and create database

```bash
npx prisma migrate dev
npx prisma generate
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

(THIS STEP WE WILL DO TOGETHER DURING THE WORKSHOP) To generate contract bindings, run

```bash
npx hardhat compile
```
