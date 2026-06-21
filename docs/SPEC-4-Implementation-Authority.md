SPEC-4 — FishThread OS Implementation Authority

Implementation Objective

Build a production-ready Offline-First Progressive Web App (PWA) called FishThread OS according to SPEC-1, SPEC-2 and SPEC-3.

No business rule may contradict previous specifications.

Mandatory Technology Stack

Frontend:
	•	React
	•	TypeScript
	•	Vite

State:
	•	Zustand

Storage:
	•	IndexedDB

Styling:
	•	Tailwind CSS

PWA:
	•	Service Worker
	•	Manifest

Prohibited Technologies

Do NOT use:
	•	Firebase
	•	Supabase
	•	MongoDB
	•	MySQL
	•	PostgreSQL
	•	Remote database dependencies

FishThread OS must operate completely offline.

Folder Structure

src/
	•	app/
	•	pages/
	•	components/
	•	features/
	•	database/
	•	services/
	•	stores/
	•	hooks/
	•	utils/
	•	types/

public/
	•	icons/
	•	manifest.json

docs/
	•	SPEC-1
	•	SPEC-2
	•	SPEC-3
	•	SPEC-4

Pages

Required Pages:
	•	Dashboard
	•	Purchase
	•	Sale
	•	Invoices
	•	Customers
	•	Reports
	•	Settings

No placeholder pages allowed.

Purchase Module Requirements

Must support:
	•	Create invoice
	•	Edit invoice
	•	Delete invoice
	•	Archive invoice
	•	Recycle bin restore

Must enforce:
	•	Edit lock after same-day 11:59 PM

Sale Module Requirements

Must support:
	•	Multi-invoice selection
	•	Invoice sale creation
	•	Customer assignment
	•	Due calculation
	•	Advance calculation

Must enforce:
	•	Sold purchase invoices cannot be sold again

Customer Module Requirements

Must support:
	•	Add
	•	Edit
	•	Archive
	•	Delete
	•	Restore

Customer name required.

All other fields optional.

Reports Module Requirements

Must calculate:
	•	Purchase totals
	•	Sale totals
	•	Profit
	•	Loss
	•	Outstanding balances
	•	Advances

Calculations must use stored invoice data.

Backup System

Must support:

Export:
	•	JSON backup file

Import:
	•	JSON restore file

Restore must replace existing database after confirmation.

Recycle Bin

Must support:
	•	Customer restore
	•	Purchase restore
	•	Sale restore

Retention:

15 days

Calculator

Must be implemented.

Required:
	•	M+
	•	M-
	•	MR
	•	MC
	•	Copy Result

Fullscreen modal.

UI Constraints

No horizontal scrolling.

Target width:

375px

All forms must remain usable on iPhone 8.

Performance Targets

Application startup:

< 2 seconds

Page transitions:

< 200ms

Invoice creation:

Instant

Offline operation:

100%

Testing Requirements

Manual testing required for:
	•	Purchase workflow
	•	Sale workflow
	•	Backup/Restore
	•	Recycle Bin
	•	Edit Lock
	•	Profit/Loss

No feature may be marked complete without testing.

Acceptance Criteria

FishThread OS is considered complete only when:
	1.	All specifications are implemented.
	2.	Backup and Restore work correctly.
	3.	Recycle Bin works correctly.
	4.	Invoice locking works correctly.
	5.	Purchase → Sale workflow works correctly.
	6.	Profit/Loss calculations are correct.
	7.	Application works offline.
	8.	Application installs as a PWA.
