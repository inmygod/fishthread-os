SPEC-3 — FishThread OS UI Authority

Design Philosophy

FishThread OS is:
	•	Mobile First
	•	Bengali First
	•	Offline First
	•	One-Hand Friendly
	•	Fast Data Entry Focused

The UI must prioritize speed over decoration.

Global Layout

Device Baseline

iPhone 8

Width:

375px

No horizontal scrolling allowed.

Navigation

Bottom Navigation Bar

Items:
	•	Dashboard
	•	Purchase
	•	Sale
	•	Invoices
	•	Customers
	•	Reports
	•	Settings

Always visible.

Floating Calculator

Floating Button

Position:

Bottom Right

Tap:

Open Full Screen Calculator

Functions:
	•	M+
	•	M-
	•	MR
	•	MC
	•	Copy Result

Close Button required.

Dashboard Page

Summary Cards

Show:
	•	Today’s Purchase
	•	Today’s Sale
	•	Current Due
	•	Current Advance
	•	Estimated Profit/Loss

Quick Actions

Buttons:
	•	কিনুন
	•	বেচুন
	•	নতুন গ্রাহক

Recent Activity

Latest:
	•	Purchase Invoices
	•	Sale Invoices

Purchase Page

Primary Action

Button:

কিনুন

Purchase Invoice Screen

Header:
	•	Invoice Number
	•	Creation Date Time

Supplier Section

Dropdown:
	•	Saved Supplier
	•	সাধারণ বিক্রেতা
	•	নতুন বিক্রেতা যোগ করুন

New Supplier must open inline modal.

Purchase Rows

Each Row Contains:
	•	মাছের ধরন
	•	পরিশোধিত মূল্য
	•	দর
	•	ওজন
	•	মোট দাম

Fish Type

Dropdown:
	•	গলদা
	•	বাগদা
	•	সাদা
	•	অন্যান্য

Default:

গলদা

Row Management

Buttons:
	•		•	দাগ যোগ করুন
	•	Delete Row

Invoice Footer

Show:
	•	মোট ক্রয়মূল্য
	•	Save
	•	Save & Close

Sale Page

Primary Action

Button:

বেচুন

Purchase Selection

User can select:

One or Multiple Available Purchase Invoices

Sold invoices cannot appear.

Customer Section

Dropdown:
	•	Saved Customer
	•	সাধারণ ক্রেতা
	•	নতুন গ্রাহক যোগ করুন

New Customer opens inline modal.

Sale Rows

Each Row:
	•	মাছের ধরন
	•	গ্রাহক
	•	প্রাপ্য মূল্য
	•	দর
	•	ওজন
	•	মোট দাম

Financial Summary

Show:
	•	মোট প্রাপ্য
	•	পূর্বের বকেয়া
	•	পূর্বের অগ্রিম
	•	সর্বমোট প্রাপ্য
	•	নগদ প্রাপ্ত
	•	বাকি/অগ্রিম

Footer Actions
	•	Save
	•	Save & Close

Invoices Page

Tabs:
	•	ক্রয় চালান
	•	বিক্রয় চালান

Invoice Card

Display:
	•	Invoice Number
	•	Customer/Supplier
	•	Date
	•	Amount
	•	Status

Status Badge

Purchase:
	•	Available
	•	Sold

Sale:
	•	Open
	•	Settled

Invoice Actions
	•	View
	•	Edit
	•	Archive
	•	Delete

Customers Page

Customer List

Card View

Show:
	•	Photo
	•	Name
	•	Phone
	•	Current Balance

Add Customer

Floating Button

Customer Form

Required:
	•	Name

Optional:
	•	Photo
	•	Phone
	•	Address
	•	Business Type
	•	Notes

Reports Page

Sections:
	•	Daily
	•	Weekly
	•	Monthly
	•	Custom Range

Metrics

Show:
	•	Purchase Total
	•	Sale Total
	•	Profit
	•	Loss
	•	Outstanding Due
	•	Advance Balance

Settings Page

Sections:

Appearance
	•	System Theme
	•	Light
	•	Dark

Data
	•	Backup
	•	Restore

Security
	•	Enable Edit Override
	•	Disable Edit Override

Recycle Bin

Show:
	•	Deleted Customers
	•	Deleted Purchase Invoices
	•	Deleted Sale Invoices

Actions:
	•	Restore
	•	Permanent Delete

Modal Rules

All inline creation screens must use:

Bottom Sheet Modal

Never navigate away from current screen.

Examples:
	•	Add Customer
	•	Add Supplier

UX Rules

Maximum:

2 taps to reach common actions.

Minimum touch target:

44px

Primary actions must remain reachable with one hand.

No page may require horizontal scrolling.


Mobile Numeric Input Authority

FishThread OS is designed for fast mobile-first business operations.

All business-critical numeric fields must use a mobile numeric keypad optimized for one-handed operation.

Applicable Fields
	•	Weight (Kg)
	•	Purchase Rate
	•	Sale Rate
	•	Purchase Total
	•	Sale Total
	•	Payment Amount
	•	Advance Amount
	•	Due Amount
	•	Quantity
	•	Any other numeric business field

Input Requirements
	•	Mobile keyboard must open as a numeric keypad.
	•	Decimal values must be supported.
	•	Alphabetic characters must be rejected.
	•	Multiple decimal points must be rejected.
	•	Empty values may be allowed where business rules permit.

Supported Examples

0.3
1
1.25
15.750
250
250.50

Unsupported Examples

abc
12kg
100tk
1..5

Technical Standard

React Inputs:

inputMode=“decimal”

Phone Number Inputs:

type=“tel”
inputMode=“numeric”

Weight Precision

Weight values must support up to 3 decimal places.

Examples:

0.300 Kg
1.250 Kg
15.750 Kg

Authority

This rule is mandatory across the entire application and may not be overridden by future implementations.

## Mobile Safe Area Authority

FishThread OS is optimized for iPhone 8.

Requirements:

- Bottom Navigation must remain fixed.
- Page content must never be hidden behind navigation.
- All screens must provide bottom spacing.
- Minimum bottom safe area: 80px.
- All primary workflows must be operable with one hand.

## Dashboard Authority

Dashboard is the default landing screen.

Dashboard must provide:

- New Purchase Shortcut
- New Sale Shortcut
- Customer Shortcut
- Reports Shortcut

Dashboard actions must be reachable with one thumb.

Large touch targets are required.

Minimum touch target height:

48px
