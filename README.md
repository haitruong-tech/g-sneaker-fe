# Golden Owl JS Intern Assignment: G-Sneaker
From: Hai Truong

Please note that the deployed website may not render the our product section because the deployed backend need time to boot up (sometimes, refresh the page can help).

## Getting Started

First, run the installation script:
```bash
npm install
# or
yarn
```

Second, copy `.env.example` to `.env` (if you modify the BE port please also change the port on `.env`)

Third, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The project is deployed on Vercel, here is the link: [https://g-sneaker-fe-haitruong.vercel.app/](https://g-sneaker-fe-haitruong.vercel.app/)

## Edit after deadline (16:00 Friday 08 December, 2023)

After deadline:
- I've refactored the code to fix some "Lighthouse issues".
- Optimize images' size.
- Fix Jotai multiple instances warning.
- Fix `"Uncaught Error: Hydration failed because the initial UI does not match what was rendered on the server."`
- Add semantic elements
