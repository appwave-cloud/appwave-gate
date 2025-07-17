# �� AppWave Gate

> **A modern platform for managing OpnSense Firewalls**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.5.0-2D3748)](https://www.prisma.io/)

## 📋 Overview

AppWave Gate is a modern web platform that enables centralized management of OpnSense Firewalls. The platform provides an intuitive user interface for managing certificates, OpenVPN profiles, and firewall configurations.

## ✨ Features

### 🔒 Certificate Management
- **Creation and management of SSL/TLS certificates**
- **Automatic certificate generation** for OpenVPN profiles
- **Centralized certificate management** for all connected firewalls

### 🌐 OpenVPN Profiles
- **Creation of OpenVPN client profiles**
- **Automatic integration of client certificates**
- **Export functionality** for ready-to-use OpenVPN configuration files
- **Secure authentication** with certificates

### 🛡️ Firewall Management
- **Centralized management** of multiple OpnSense firewalls
- **Status monitoring** and connection testing
- **API integration** with OpnSense REST API
- **User-friendly interface** for firewall configurations

### 🔐 Authentication & Security
- **Modern authentication** with Better-Auth
- **Secure API communication** with OpnSense firewalls
- **Session management** and user administration

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React Framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS Framework
- **Shadcn/ui** - Modern UI components
- **Lucide React** - Beautiful icons

### Backend & API
- **tRPC** - End-to-end type-safe APIs
- **Prisma** - Modern database ORM
- **Better-Auth** - Authentication solution
- **Zod** - Schema validation

### Database
- **PostgreSQL** - Robust relational database
- **Prisma Migrations** - Database schema management

### Development Tools
- **Biome** - Linter and formatter
- **pnpm** - Fast package manager

## 🚀 Installation

### Prerequisites

- **Node.js** (Version 18 or higher)
- **pnpm** (Package manager)
- **PostgreSQL** database
- **Docker** (optional, for local development)

### 1. Clone repository

```bash
git clone https://github.com/your-username/appwave-gate.git
cd appwave-gate
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Fill in the required environment variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/appwave_gate"

# Authentication
BETTER_AUTH_SECRET="your-secret-key-here"

# Environment
NODE_ENV="development"
```

### 4. Set up database

#### Option A: With Docker (recommended)

```bash
# Start database container
./start-database.sh

# Run database migrations
pnpm db:generate
```

#### Option B: Local PostgreSQL installation

```bash
# Run database migrations
pnpm db:generate
```

### 5. Start development server

```bash
pnpm dev
```

The application is now available at `http://localhost:3000`.

## 📁 Project Structure

```
appwave-gate/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API Routes
│   │   │   ├── auth/          # Authentication
│   │   │   └── trpc/          # tRPC API
│   │   └── firewalls/         # Firewall Management
│   ├── components/            # React Components
│   │   ├── ui/               # Shadcn/ui Components
│   │   └── sidebar/          # Sidebar Navigation
│   ├── lib/                  # Utility Functions
│   ├── server/               # Server-side Logic
│   │   ├── api/             # tRPC Routers
│   │   └── opnsense-api.ts  # OpnSense API Client
│   └── trpc/                # tRPC Configuration
├── prisma/                  # Database Schema
├── public/                  # Static Assets
└── styles/                  # Global Styles
```

## 🔧 Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Create production build
pnpm start            # Start production server
pnpm preview          # Preview build

# Database
pnpm db:generate      # Generate Prisma client
pnpm db:migrate       # Run migrations
pnpm db:push          # Push schema to database
pnpm db:studio        # Open Prisma Studio

# Code Quality
pnpm check            # Check code with Biome
pnpm check:write      # Auto-format code
pnpm typecheck        # Check TypeScript types
```

## 🔌 OpnSense Integration

AppWave Gate communicates with your firewalls via the OpnSense REST API. Make sure that:

1. **API access is enabled** in your OpnSense installation
2. **API key** and **API secret** are correctly configured
3. **HTTPS** is used for secure communication

### API Configuration in OpnSense

1. Go to **System > Access > Users**
2. Create a new API user
3. Enable **API access** for the user
4. Note down the **API key** and **API secret**

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Setting up development environment

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/your-username/appwave-gate/issues)
- **Documentation**: [Wiki](https://github.com/your-username/appwave-gate/wiki)
- **Email**: support@appwave.com

## 🙏 Acknowledgments

- **OpnSense** - For the excellent firewall software
- **Shadcn/ui** - For the beautiful UI components
- **tRPC** - For type-safe APIs
- **Vercel** - For the Next.js framework

---

**Built with ❤️ by AppWave**
