SPEC-1 — FishThread OS Build Authority

# Background

FishThread OS একটি Offline-First Fish Trading Operating System।

এটি মাছ ও চিংড়ি ব্যবসার জন্য তৈরি, যেখানে ক্রয়, বিক্রয়, গ্রাহক হিসাব, চালান, পাওনা, অগ্রিম, লাভ-লোকসান, ব্যাকআপ এবং রিপোর্টিং একটি একক সিস্টেমে পরিচালিত হবে।

সিস্টেমটি iPhone 8 স্ক্রিনকে বেসলাইন ধরে Mobile-First UI-তে তৈরি হবে।

# Core Principles

## Principle 1

সিস্টেমের প্রধান ব্যবসায়িক ইউনিট:

- Purchase Invoice
- Purchase Lot
- Sale Invoice

Purchase Invoice একটি Container।

Purchase Lot (দাগ) হলো Inventory-এর মূল Unit।

Inventory Tracking, Availability, Sold Status এবং Sale Linking সবকিছু Purchase Lot ভিত্তিক হবে।

একটি Purchase Invoice-এর মধ্যে এক বা একাধিক Purchase Lot থাকতে পারবে।

## Principle 2

সিস্টেম:

Offline First

হবে।

Internet সংযোগ ছাড়াই পূর্ণ কার্যকর থাকতে হবে।

## Principle 3

কোনো Screen-এ Horizontal Scroll থাকবে না।

Up / Down Scroll Only

## Principle 4

Primary Currency:

৳ (Bangladeshi Taka)

## Principle 5

Dark Mode / Light Mode:

System Follow

Default।

# Main Navigation

Bottom Navigation:

- Dashboard
- Purchase
- Sale
- Invoices
- Customers
- Reports
- Settings

# Purchase Module

## Create Purchase Invoice

Button:

কিনুন

চাপলে নতুন Purchase Invoice তৈরি হবে।

## Invoice Number

Auto Generated:

PUR-2026-000001

PUR-2026-000002

## Creation Time

Invoice Creation DateTime:

Auto Generated

Immutable

Edit করলে পরিবর্তন হবে না।

## Supplier

Supplier না দিলে:

সাধারণ বিক্রেতা

Auto Create / Auto Select হবে।

## Purchase Lots

একটি চালানে একাধিক Lot (দাগ) থাকবে।

Button:

+ দাগ যোগ করুন

## Lot Fields

প্রতিটি Lot:

- মাছের ধরন
- পরিশোধিত মূল্য
- দর
- ওজন
- মোট দাম

## Fish Type

Dropdown:

- গলদা
- বাগদা
- সাদা
- অন্যান্য

Default:

গলদা

## Required Fields

শুধুমাত্র:

পরিশোধিত মূল্য

Required।

## Optional Fields

- দর
- ওজন

Optional।

## Lot Total

যদি:

দর × ওজন

থাকে তাহলে Calculate করবে।

নাহলে Manual Value গ্রহণ করবে।

## Invoice Total

সব Lot-এর পরিশোধিত মূল্য

এর যোগফল।

## Edit Rule

Invoice Edit Allowed:

Creation Date

↓

11:59 PM

পর্যন্ত।

তারপর Locked।

# Sale Module

## Create Sale Invoice

Button:

বেচুন

## Source Selection

এক বা একাধিক:

Available Purchase Lots

Select করা যাবে।

## Restriction

একবার Lot Sell হলে:

Sold

Status হবে।

পুনরায় Select করা যাবে না।

## Customer

Top Field:

গ্রাহক

## Customer Selection

Options:

- Saved Customer
- সাধারণ ক্রেতা
- নতুন গ্রাহক যোগ করুন

## Inline Customer Creation

নতুন গ্রাহক যোগ করুন চাপলে:

Modal/Open Sheet

Open হবে।

Page Change হবে না।

## Sale Rows

Fields:

- মাছের ধরন
- গ্রাহক
- প্রাপ্য মূল্য
- দর
- ওজন
- মোট দাম

## Required Field

প্রাপ্য মূল্য

Only Required।

## Invoice Due Calculation

সব Row-এর প্রাপ্য মূল্য

=

মোট প্রাপ্য

## Previous Balance

Display:

পূর্বের বকেয়া

বা

পূর্বের অগ্রিম

## Grand Total

মোট প্রাপ্য

+

পূর্বের বকেয়া

-

পূর্বের অগ্রিম

## Cash Received

Field:

নগদ প্রাপ্ত

## Final Balance

সর্বমোট প্রাপ্য

-

নগদ প্রাপ্ত

ধনাত্মক:

বকেয়া

ঋণাত্মক:

অগ্রিম

# Invoice Module

Sections:

- ক্রয় চালান
- বিক্রয় চালান

Statuses:

- Available
- Sold
- Archived
- Deleted

## Delete

Delete করলে:

Recycle Bin

এ যাবে।

# Customers Module

## Required Field

শুধু:

গ্রাহকের নাম

Required।

## Optional Fields

- ছবি
- মোবাইল
- ঠিকানা
- ব্যবসার ধরন
- মন্তব্য

## Default Customers

Auto Created:

- সাধারণ ক্রেতা
- সাধারণ বিক্রেতা

## Delete

Customer Delete:

Recycle Bin

# Reports Module

## Profit / Loss

Formula:

Total Sale

-

Total Purchase

ধনাত্মক:

লাভ

ঋণাত্মক:

ক্ষতি

# Recycle Bin

Retention:

15 Days

## Restore

Allowed।

## Permanent Delete

Allowed।

# Backup & Restore

## Backup

Export:

Single File

## Restore

Full Restore Supported।

# Calculator

Floating Button।

Open করলে:

Full Screen

## Functions

- M+
- M-
- MR
- MC
- Copy Result

সব কার্যকর হতে হবে।

# UI Rules

## Device Baseline

iPhone 8

375px Width

## Scrolling

Vertical Only

## Touch Target

Minimum:

44px

## Theme

Default:

System Theme
