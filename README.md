# Hrev Dev — Monorepo

Production-grade Turborepo monorepo for building modern Next.js apps and reusable packages.

## Overview

This repository hosts Hrev Dev’s web apps and packages, including a public docs site, a design system powered by shadcn/ui, and a growing library of pro templates.

## Structure

```text
.
├─ apps/
│  ├─ api/                 # API routes / server functions
│  ├─ app/                 # Client portal / SaaS shell
│  ├─ docs/                # Documentation and component showcase
│  ├─ email/               # Email previews
│  ├─ storybook/           # Design system QA
│  ├─ studio/              # CMS studio
│  └─ web/                 # Marketing website
│
├─ packages/
│  ├─ analytics/           # Web/product analytics helpers
│  ├─ auth/                # Auth providers and helpers
│  ├─ cms/                 # CMS integration glue
│  ├─ collaboration/       # Realtime/collab helpers
│  ├─ database/            # Prisma/ORM & data access
│  ├─ design-system/       # Shared shadcn/ui components and tokens
│  ├─ email/               # React Email templates
│  ├─ feature-flags/       # Flags and experimentation
│  ├─ internationalization/# i18n utilities
│  ├─ next-config/         # Shared Next.js config
│  ├─ notifications/       # Notifications plumbing
│  ├─ observability/       # Logs, traces, metrics
│  ├─ payments/            # Billing utilities
│  ├─ rate-limit/          # Rate limiting
│  ├─ security/            # Security middleware
│  ├─ seo/                 # SEO helpers
│  ├─ storage/             # Blob/object storage
│  ├─ testing/             # Test utils
│  ├─ typescript-config/   # Shared TS configs
│  └─ webhooks/            # Inbound/outbound webhooks
│
├─ turbo.json              # Turborepo pipeline
├─ pnpm-workspace.yaml     # Workspace settings
└─ tsconfig.json           # Root TS config
```

## Getting Started

Install dependencies:

```sh
pnpm install
```

Run the docs app:

```sh
cd docs && pnpm dev
```

## Licensing

MIT License © Hrev Dev
