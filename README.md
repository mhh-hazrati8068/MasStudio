This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.


- RoadMap of the project -->

src/
├── pages/               # Next.js routes
│   ├── api/             # API routes (server-side)
│   └── index.tsx        # Home page
│   └── _app.tsx         # App entry point
│   └── _document.tsx    # Custom document (for SSR and Emotion)
│
├── components/          # UI (View) components
│   └── common/          # Reusable UI components (e.g., Button, Modal)
│   └── user/            # User-related components (e.g., UserCard)
│
├── viewmodels/          # ViewModel hooks (logic between view & model)
│   └── useUserViewModel.ts
│
├── models/              # TypeScript interfaces/types
│   └── user.ts
│
├── services/            # API service functions
│   └── userService.ts
│
├── store/               # Redux Toolkit setup
│   ├── index.ts         # Store config
│   └── slices/
│       └── userSlice.ts
│
├── hooks/               # Reusable custom hooks (not tied to ViewModel)
│   └── useDebounce.ts
│
├── styles/              # Global styles and theme setup
│   ├── globals.scss
│   └── theme.ts         # MUI theme config
│
├── utils/               # Utility functions
│   └── formatDate.ts
│
├── tests/               # Unit and integration tests
│   └── components/
│   └── viewmodels/
│
├── __mocks__/           # Mock files for tests
│   └── handlers.ts
│
├── storybook/           # Storybook setup and stories
│   └── preview.ts
│
├── types/               # Global TypeScript definitions (optional)
│   └── env.d.ts