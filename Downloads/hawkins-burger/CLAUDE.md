# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hawkins Hamburgueria is a React + TypeScript restaurant application built with Vite. The project uses modern web technologies including Supabase for backend services, Cloudinary for image management, and TailwindCSS for styling with a Vice City theme.

## Development Commands

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (runs TypeScript compilation then Vite build)
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## Architecture

### Core Technologies
- **Frontend**: React 19, TypeScript, Vite
- **Backend**: Supabase (database, auth, real-time)
- **Image Management**: Cloudinary
- **Styling**: TailwindCSS with custom Vice City theme
- **State Management**: Redux Toolkit (store setup in `src/app/store/`)
- **Routing**: React Router DOM

### Project Structure

The application follows a feature-based architecture:

```
src/
├── app/                    # Application-level configuration
│   ├── App.tsx            # Main application component
│   └── store/             # Redux store configuration
├── features/              # Feature modules
│   ├── admin/             # Admin panel functionality
│   ├── cart/              # Shopping cart feature
│   ├── gallery/           # Image gallery and Instagram feed
│   ├── menu/              # Menu display and filtering
│   └── orders/            # Order management
├── pages/                 # Route-level page components
├── shared/                # Shared utilities and components
│   ├── components/        # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # External service integrations
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Helper functions and constants
└── styles/                # Global styles and theme
```

### Feature Module Pattern

Each feature follows a consistent structure:
- `components/` - Feature-specific React components
- `hooks/` - Custom hooks for the feature
- `services/` - API calls and external integrations
- `store/` - Redux slices (where applicable)
- `types/` - TypeScript interfaces and types
- `utils/` - Feature-specific helper functions

### Key Integrations

1. **Supabase**: Configuration in `Supabase/config.toml`, client setup in `src/shared/lib/supabase.ts`
2. **Cloudinary**: Image upload and management via `src/shared/lib/cloudinary.ts`
3. **TailwindCSS**: Custom Vice City theme defined in `src/styles/vice-city-theme.css`

### State Management

- Redux Toolkit for global state management
- Feature-specific slices (e.g., `src/features/cart/store/cartSlice.ts`)
- Custom hooks for feature state (e.g., `useCart`, `useMenu`, `useOrders`)

### Development Notes

- The project uses SWC for fast refresh via `@vitejs/plugin-react-swc`
- TypeScript configuration split between `tsconfig.app.json` and `tsconfig.node.json`
- ESLint configuration in `eslint.config.js`
- Many files are currently empty stubs indicating active development

### Testing and Deployment

- Check `docs/` directory for deployment and API documentation
- Supabase migrations located in `Supabase/migrations/`
- Database seeding script available at `Supabase/seed.sql`

## 🎯 DEVELOPMENT BACKLOG & STATUS

### ✅ COMPLETED TASKS
- **Environment Variables Setup**: `.env.example` and `.env.local` files configured with all required variables

### 🔄 CURRENT STATUS
- Project has been **successfully migrated** from Next.js to Vite + React + TypeScript
- **✅ WORKING**: Development server, production builds, Vice City theme
- **✅ CLEANED**: Removed all Next.js dependencies and unused components
- **✅ ORGANIZED**: Feature-based architecture implemented
- Ready for feature development according to project scope

### 📋 NEXT TASKS BACKLOG (Priority Order)

**IMPORTANT**: When user asks "what do I have to do next?", provide step-by-step instructions for the current top priority task.

#### 🚨 PRIORITY 1: Complete Environment Setup
**Status**: User needs to fill in API keys
**Action Required**:
1. Go to [supabase.com](https://supabase.com) → Create project → Copy URL and anon key
2. Go to [cloudinary.com](https://cloudinary.com) → Dashboard → Copy cloud name, API key, secret  
3. Fill these values in `.env.local`
4. Test by running `npm run dev`

#### 🚨 PRIORITY 2: Set up Supabase Database Schema
**Status**: Waiting for Priority 1 completion
**Action Required**:
1. Open Supabase project dashboard → SQL Editor
2. Create database tables: `menus`, `orders`, `users`, `categories`, `menu_images`
3. Set up Row Level Security (RLS) policies
4. Configure authentication settings
5. Update `Supabase/config.toml` and create migrations

#### 🚨 PRIORITY 3: Initialize Service Clients
**Status**: Depends on database setup
**Action Required**:
1. Implement `src/shared/lib/supabase.ts` - Supabase client with auth
2. Implement `src/shared/lib/cloudinary.ts` - Image upload service
3. Create `src/shared/lib/api.ts` - Centralized API functions
4. Test all connections work

#### 🚨 PRIORITY 4: Fix Build System
**Status**: Critical for development
**Action Required**:
1. Fix `src/main.tsx` - Create React app entry point
2. Fix `src/app/App.tsx` - Remove template code, add routing
3. Add missing asset files or remove references
4. Ensure `npm run build` works without errors

#### 🚨 PRIORITY 5: Create Core Redux Store
**Status**: Required for state management
**Action Required**:
1. Implement `src/app/store/index.ts` - Configure Redux Toolkit
2. Create basic slices: `authSlice`, `cartSlice`, `menuSlice`
3. Connect store to App component with Provider
4. Test store functionality

#### 🚨 PRIORITY 6: Build Basic Layout & Routing
**Status**: Foundation for all features
**Action Required**:
1. Implement shared components: `Header`, `Footer`, `Layout`
2. Set up React Router with main pages: `HomePage`, `MenuPage`, etc.
3. Create basic UI components: `Button`, `Card`, `Input`
4. Apply Vice City theme styling

### 🚧 KNOWN ISSUES
- **Environment Setup**: User needs to add Supabase and Cloudinary API keys to `.env.local`
- **Database**: Schema not created, no migrations yet
- **Features**: Only homepage implemented, need to build menu/cart/orders functionality

### 📝 FOR FUTURE CLAUDE INSTANCES
**When user asks "what's next?"**: Always check this backlog section and provide specific step-by-step instructions for the highest priority incomplete task. Start with Priority 1 if environment variables aren't filled in yet.