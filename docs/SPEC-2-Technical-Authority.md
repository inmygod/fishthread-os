SPEC-2 — FishThread OS Technical Authority

Technology Stack

Frontend
	•	React
	•	TypeScript
	•	Vite
	•	PWA

State Management
	•	Zustand

Local Database
	•	IndexedDB

Styling
	•	Tailwind CSS

Target Devices
	•	iPhone 8 (375px baseline)
	•	Android phones
	•	Tablets

Database Architecture

FishThread OS is Offline First.

All business data must be stored locally in IndexedDB.

No internet connection is required for daily operation.

Core Tables

customers

Fields:
	•	id
	•	name
	•	photo
	•	phone
	•	address
	•	businessType
	•	notes
	•	createdAt
	•	updatedAt
	•	deletedAt

Rules:
	•	name required
	•	all other fields optional

Default Records:
	•	সাধারণ ক্রেতা
	•	সাধারণ বিক্রেতা

purchase_invoices

Fields:
	•	id
	•	invoiceNumber
	•	supplierId
	•	createdAt
	•	lockedAt
	•	totalPaid
	•	status
	•	notes
	•	deletedAt

Status:
	•	available
	•	sold
	•	archived
	•	deleted

purchase_invoice_rows

Fields:
	•	id
	•	purchaseInvoiceId
	•	fishType
	•	paidAmount
	•	rate
	•	weight
	•	calculatedTotal
	•	rowOrder

Rules:
	•	paidAmount required
	•	rate optional
	•	weight optional

sale_invoices

Fields:
	•	id
	•	invoiceNumber
	•	customerId
	•	createdAt
	•	lockedAt
	•	totalDue
	•	previousBalance
	•	grandTotal
	•	cashReceived
	•	finalBalance
	•	status
	•	deletedAt

sale_invoice_rows

Fields:
	•	id
	•	saleInvoiceId
	•	sourcePurchaseInvoiceId
	•	fishType
	•	dueAmount
	•	rate
	•	weight
	•	calculatedTotal
	•	rowOrder

Rules:
	•	dueAmount required

recycle_bin

Fields:
	•	id
	•	entityType
	•	entityId
	•	deletedAt
	•	expiresAt

Retention:

15 days

app_settings

Fields:
	•	id
	•	themeMode
	•	editOverrideEnabled
	•	backupVersion
	•	updatedAt

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

Inventory Rules

Purchase Invoice

available
↓
selected for sale
↓
sold

Sold purchase invoices cannot be selected again.

Delete Rules

Delete
↓
Recycle Bin
↓
15 Days
↓
Permanent Delete

Restore must be supported.

Backup Format

Single JSON file.

Contains:
	•	customers
	•	purchaseInvoices
	•	purchaseRows
	•	saleInvoices
	•	saleRows
	•	settings

Restore replaces current database after confirmation.

Calculator

Full Screen Modal

Functions:
	•	M+
	•	M-
	•	MR
	•	MC
	•	Copy Result

Responsive Rules

No horizontal scrolling.

All screens must work within:

375px width

Primary interaction:

Vertical scrolling only.

## Invoice Validation Authority

Purchase Invoice

Required:

- Total Amount

Optional:

- Supplier Name
- Supplier Phone
- Weight
- Rate

Validation Rules:

- Invoice creation must never require Weight.
- Invoice creation must never require Rate.
- Invoice creation must never require Supplier.
- Total Amount is the only mandatory financial field.


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
