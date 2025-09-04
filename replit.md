# Overview

This is a full-stack web application that appears to be a job recruitment platform featuring two distinct services: "baltek business" for companies/employers and "Asman" for job seekers. The application is built with a modern React frontend using TypeScript and Vite, with an Express.js backend server. The platform emphasizes AI-powered candidate matching and streamlined hiring processes.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **UI Library**: Comprehensive shadcn/ui component system built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming and dark mode support
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation through @hookform/resolvers

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build Process**: esbuild for production bundling
- **API Design**: RESTful API structure with /api prefix for all endpoints

## Data Storage Architecture
- **Database**: PostgreSQL with Neon Database as the serverless provider
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Current Implementation**: In-memory storage with interface abstraction for easy database integration
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

## Styling and Design System
- **Design Language**: "New York" style from shadcn/ui
- **Theme System**: CSS variables with light/dark mode support
- **Typography**: Inter font family with fallbacks
- **Component Architecture**: Atomic design with reusable UI components
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Development Tools and Quality
- **Type Safety**: Strict TypeScript configuration with comprehensive type checking
- **Code Quality**: ESLint and Prettier integration (implied by the setup)
- **Development Experience**: Hot module replacement and runtime error overlay
- **Build Optimization**: Vite for fast development and optimized production builds

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **express**: Web application framework for Node.js
- **react** and **react-dom**: Core React libraries
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight routing library

## UI and Design Dependencies
- **@radix-ui/***: Comprehensive suite of unstyled, accessible UI components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility
- **lucide-react**: Icon library

## Development and Build Tools
- **vite**: Frontend build tool and development server
- **typescript**: Static type checking
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript bundler for production builds
- **drizzle-kit**: Database schema management and migrations

## Form and Validation
- **react-hook-form**: Performant forms with easy validation
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **zod**: TypeScript-first schema validation (via drizzle-zod)

## Utility Libraries
- **date-fns**: Date manipulation library
- **nanoid**: URL-safe unique string ID generator
- **cmdk**: Command palette component

## Replit-Specific Integrations
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment