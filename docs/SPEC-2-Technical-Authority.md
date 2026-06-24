SPEC-2 — FishThread OS Technical Authority

Technology Stack

Frontend
• React
• TypeScript
• Vite
• PWA

State Management
• Zustand

Local Database
• IndexedDB

Styling
• Tailwind CSS

Target Devices
• iPhone 8 (375px baseline)
• Android phones
• Tablets

Database Architecture

FishThread OS is Offline First.

All business data must be stored locally in IndexedDB.

No internet connection is required for daily operation.

Core Tables

customers

Fields:
• id
• name
• photo
• phone
• address
• businessType
• notes
• createdAt
• updatedAt
• deletedAt

Rules:
• name required
• all other fields optional

Default Records:
• সাধারণ ক্রেতা
• সাধারণ বিক্রেতা

purchase_invoices

Fields:
• id
• invoiceNumber
• supplierId
• createdAt
• lockedAt
• totalPaid
• status
• notes
• deletedAt

Status:
• available
• partially_sold
• sold
• archived
• deleted

purchase_lots

Fields:
• id
• purchaseInvoiceId
• lotNumber
• fishType
• paidAmount
• rate
• weight
• calculatedTotal
• status
• saleInvoiceId
• soldAt
• rowOrder
• createdAt
• updatedAt
• deletedAt

Status:
• available
• sold
• archived
• deleted

Rules:
• paidAmount required
• rate optional
• weight optional

sale_invoices

Fields:
• id
• invoiceNumber
• customerId
• createdAt
• lockedAt
• totalDue
• previousBalance
• grandTotal
• cashReceived
• finalBalance
• status
• deletedAt

sale_invoice_rows

Fields:
• id
• saleInvoiceId
• sourcePurchaseLotId
• fishType
• dueAmount
• rate
• weight
• calculatedTotal
• rowOrder

Rules:
• dueAmount required

recycle_bin

Fields:
• id
• entityType
• entityId
• deletedAt
• expiresAt

Retention:

15 days

app_settings

Fields:
• id
• themeMode
• editOverrideEnabled
• backupVersion
• updatedAt

Inventory Authority

Inventory tracking SHALL operate
at PurchaseLot level.

PurchaseInvoice is a container.

PurchaseLot is the inventory unit.

SaleInvoice SHALL link
PurchaseLot records.

Sold status SHALL be managed
at PurchaseLot level.

PurchaseInvoice SHALL store
lotIds.

PurchaseInvoice acts as a
container for PurchaseLot records.

Inventory state SHALL NOT be
calculated from PurchaseInvoice.

Inventory state SHALL be
calculated from PurchaseLot.

PurchaseLot records SHALL be
stored independently.

PurchaseLotStore SHALL be the
source of truth for inventory.

Sale operations SHALL update
PurchaseLot status.

Inventory availability SHALL be
determined from PurchaseLot.

Lot Status Rules

PurchaseLot status values:

• available
• sold
• archived
• deleted

available
↓
sold

A sold lot cannot be selected
for another sale invoice.

Sale Linking Rules

Each PurchaseLot SHALL store:

• saleInvoiceId
• soldAt

when sold.

SaleInvoice SHALL store:

• purchaseLotIds

Inventory lookup SHALL use
purchaseLotIds only.

Purchase Workflow Authority

Purchase Invoice creation flow:

Purchase Invoice
↓
One or More Purchase Lots
↓
Save Invoice
↓
Save Lots

Invoice total SHALL equal:

SUM(PurchaseLot.totalAmount)

Sale Workflow Authority

Sale creation flow:

Select Available PurchaseLots
↓
Create Sale Invoice
↓
Mark Lots Sold
↓
Persist Sale Invoice

SaleInvoice SHALL NOT change
PurchaseLot purchase values.

Historical purchase values must remain immutable.

Invoice Status Authority

PurchaseInvoice status SHALL be derived.

PurchaseInvoice SHALL NOT be the source of truth.

Derived rules:

If all active lots are sold
→ sold

If at least one active lot is available
→ available

Archived lots SHALL NOT affect status calculation.

Deleted lots SHALL NOT affect status calculation.

Invoice Numbering

Purchase:

PUR-YYYY-000001

Sale:

SAL-YYYY-000001

Numbers must never be reused.

Edit Lock Rules

Invoice editable:

Creation Date
↓
11:59 PM
↓
Locked

Unlock only from Settings.

Inventory Authority

PurchaseInvoice is a container only.

PurchaseLot is the inventory unit.

Inventory tracking SHALL operate
at PurchaseLot level.

SaleInvoice SHALL link
PurchaseLot records.

Sold status SHALL be managed
at PurchaseLot level.

PurchaseInvoice SHALL store
lotIds.

PurchaseInvoice acts as a
container for PurchaseLot records.

Inventory state SHALL NOT be
calculated from PurchaseInvoice.

Inventory state SHALL be
calculated from PurchaseLot.

PurchaseLot records SHALL be
stored independently.

PurchaseLotStore SHALL be the
source of truth for inventory.

Sale operations SHALL update
PurchaseLot status.

Inventory availability SHALL be
determined from PurchaseLot.

Purchase Invoice Status Rules

PurchaseInvoice status SHALL NOT
be directly changed by SaleInvoice.

PurchaseInvoice status SHALL be
derived from its child PurchaseLots.

Rules:

If all active PurchaseLots are
available:

PurchaseInvoice Status
=
available

If all active PurchaseLots are
sold:

PurchaseInvoice Status
=
sold

If some PurchaseLots are sold
and some are available:

PurchaseInvoice Status
=
available

Reason:

Inventory exists at lot level.

Invoice is only a container.

Therefore PurchaseInvoice status
must be computed from PurchaseLots.

Sale Authority

SaleInvoice SHALL store:

- purchaseLotIds

SaleInvoice SHALL NOT use:

- sourcePurchaseInvoiceId
- purchaseInvoice status

Inventory selection SHALL be:

Available PurchaseLots only.

Sold PurchaseLots SHALL NOT be selectable.

Archive Rules

Archive SHALL NOT modify inventory status.

Archived PurchaseLots retain:

- available
or
- sold

Deleted records SHALL move to:

recycle_bin

Recycle Bin Rules

Delete
↓
Recycle Bin
↓
15 Days
↓
Permanent Delete

Restore must restore:

- PurchaseInvoice
- PurchaseLot
- SaleInvoice
- Customer

Backup Format

Single JSON file.

Contains:

- customers
- purchaseInvoices
- purchaseLots
- saleInvoices
- recycleBin
- settings

Restore replaces current database after confirmation.

Calculator

Full Screen Modal

Functions:

- M+
- M-
- MR
- MC
- Copy Result

Responsive Rules

No horizontal scrolling.

All screens must work within:

375px width

Primary interaction:

Vertical scrolling only.
