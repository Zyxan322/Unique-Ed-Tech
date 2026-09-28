# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploy to Vercel

This project uses TanStack Start with Nitro's Vercel preset. Import `Zyxan322/Unique-Ed-Tech` in Vercel; `vercel.json` declares the TanStack Start framework, and `bun.lock` lets Vercel select Bun.

Use `bun run build` as the build command and leave the output directory on automatic detection. Do not configure this as a static site: Vercel needs the server output for TanStack Start routes.

The app currently requires no environment variables. If that changes, add secrets in Vercel Project Settings rather than committing them.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
