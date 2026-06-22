SPEC-5 — FishThread OS Project Bootstrap Authority

Purpose

This document defines the mandatory project structure, naming conventions, routing rules, module boundaries, and development standards for FishThread OS.

All future code must follow this document.

No generated code may violate SPEC-1, SPEC-2, SPEC-3, or SPEC-4.

Project Structure

fishthread-os/

docs/

public/
├── icons/
├── manifest.json

src/

├── app/
│   ├── router/
│   ├── providers/

├── pages/
│   ├── Dashboard/
│   ├── Purchase/
│   ├── Sale/
│   ├── Invoices/
│   ├── Customers/
│   ├── Reports/
│   ├── Settings/

├── components/
│   ├── common/
│   ├── forms/
│   ├── cards/
│   ├── modals/
│   ├── tables/
│   ├── navigation/

├── features/
│   ├── purchase/
│   ├── sale/
│   ├── customer/
│   ├── reports/
│   ├── backup/
│   ├── recycle-bin/

├── database/
│   ├── indexeddb/
│   ├── repositories/
│   ├── migrations/

├── stores/
│   ├── purchaseStore.ts
│   ├── saleStore.ts
│   ├── customerStore.ts
│   ├── settingsStore.ts

├── services/
│   ├── backupService.ts
│   ├── invoiceService.ts
│   ├── profitService.ts

├── hooks/

├── utils/

├── types/

└── main.tsx

Routing Rules

Routes:

/
→ Dashboard

/purchase
→ Purchase

/sale
→ Sale

/invoices
→ Invoices

/customers
→ Customers

/reports
→ Reports

/settings
→ Settings

Unknown routes:

Redirect → Dashboard

Component Rules

Components must be:

Small
Reusable
Single Responsibility

Bad:

One file = 1000+ lines

Good:

InvoiceCard.tsx
CustomerCard.tsx
AmountField.tsx
FishTypeSelector.tsx

Naming Convention

Components:

PascalCase

Example:

PurchaseInvoiceForm.tsx

Stores:

camelCase

Example:

purchaseStore.ts

Types:

PascalCase

Example:

Customer.ts
PurchaseInvoice.ts

Invoice Engine

Purchase Invoice Engine:

Responsible for:

Create
Edit
Lock
Delete
Restore
Archive

Sale Invoice Engine:

Responsible for:

Create
Edit
Lock
Delete
Restore
Archive
Due Calculation
Advance Calculation

Customer Engine

Responsible for:

Create
Edit
Delete
Restore
Archive
Balance Calculation

Profit Engine

Formula:

Total Sale
-
Total Purchase
=
Profit/Loss

Must calculate from invoice data only.

Never use cached profit values.

Backup Engine

Export:

Single JSON

Import:

Single JSON

Restore must restore:

Customers
Purchase Invoices
Sale Invoices
Settings
Recycle Bin

Recycle Bin Engine

Supported Entities:

Customer
Purchase Invoice
Sale Invoice

Retention:

15 Days

Expired items:

Permanent Delete

UI System

Primary Language:

Bangla

Secondary Language:

English

All user-facing text should be translatable.

Mobile Rules

Target:

iPhone 8
375px Width

Requirements:

No horizontal scroll
One-hand operation
44px minimum touch target

Development Rules

Every feature must include:

UI
Business Logic
Storage Layer
Validation
Error Handling

No feature is complete without all five.

Completion Rule

FishThread OS can only be considered complete when:

SPEC-1 implemented
SPEC-2 implemented
SPEC-3 implemented
SPEC-4 implemented
SPEC-5 implemented

and all modules pass manual testing.
