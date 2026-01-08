Next.js application with user authentication, GraphQL integration, and paginated data display.

**Challenge Version:** 3.5

[Hosted on Vercel](https://nextjs-boilerplate-wine-tau-12.vercel.app/)

## Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI primitives (shadcn/ui pattern)
- **GraphQL:** Apollo Client 4.0
- **State Management:** React Context API + localStorage
- **Data Persistence:** localStorage

## Features

### 1. User Authentication Flow
- Blocking landing page requires username and job title before accessing any content
- Data persists across browser sessions via localStorage
- Users can view and edit their profile at any time via the Profile page
- Hydration-safe auth check prevents flash of unauthenticated content

### 2. GraphQL Data Integration
- Queries the public [Rick and Morty API](https://rickandmortyapi.com/graphql)
- Displays character data with images
- Protected route ensures data is only accessible after authentication

### 3. Paginated Information Page
- Server-side pagination with 20 items per page
- Direct URL access to any page (`/information/1`, `/information/2`, etc.)
- Custom pagination component with ellipsis for large page counts
- Click any character to view details in a modal dialog

## Project Structure

```
app/
├── (authenticated)/         # Protected route group
│   ├── AuthGate.tsx         # Client-side auth guard
│   ├── layout.tsx           # Authenticated layout with nav
│   ├── information/         # Paginated character list
│   │   ├── page.tsx         # Server component with data fetch
│   │   ├── pageContent.tsx  # Client component with interactivity
│   │   └── [page]/          # Dynamic pagination routes
│   └── profile/             # User profile view/edit
├── actions/                 # Server actions
│   └── auth.ts              # Auth cookie management
├── layout.tsx               # Root layout with footer
├── page.tsx                 # Login/registration (server component)
└── pageContent.tsx          # Login/registration (client component)

components/
├── ui/                      # Radix UI primitives
│   ├── avatar.tsx
│   ├── badge.tsx
│   ├── button.tsx
│   ├── card.tsx
│   ├── dialog.tsx
│   ├── field.tsx
│   ├── input.tsx
│   ├── label.tsx
│   ├── pagination.tsx
│   ├── separator.tsx
│   ├── sheet.tsx
│   └── spinner.tsx
├── CharacterCard/           # Character display card
├── CharacterModal/          # Character detail modal
├── Navbar.tsx               # Navigation with mobile menu
├── ProfileForm/             # Username/job title form
└── ProfileBlock/            # Profile display/edit container

contexts/
└── UserContext.tsx          # Auth state management

graphql/
└── queries.ts               # GraphQL query definitions

lib/
├── apolloClient.ts          # Apollo Client configuration
├── rickAPI.ts               # Data fetching utilities
└── utils.ts                 # Helper functions
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Notes

- **Server Components** handle data fetching for optimal performance
- **Client Components** manage interactivity (modals, forms, navigation)
- Route groups `(authenticated)` separate protected from public routes
