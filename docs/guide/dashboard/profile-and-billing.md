---
title: Profile, Billing Info and API
hide_title: false
hide_table_of_contents: false
description: videosdk.live dashboard will help you to get real-time updates of all the meetings, live streams and videos. It will also help you to monitor services.
sidebar_label: Profile, Billing and API
pagination_label: Profile, Billing and API
keywords:
  - dashboard
  - video API
  - monitor usage
  - realtime query
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: profile-and-billing
---

:::caution

**This page has been deprecated. Please follow this [link](https://docs.videosdk.live/) or ping us on [Discord](https://discord.gg/videosdk-live-876774498798551130)**

:::

Dashboard setting page is all about your basic profile, total number of invoices, generated API keys & secrets and billing details.

## 1. Profile

This section contains the basic information of user such as **User Name**, **User Email**, **Mobile number**, **Company name**, **Job Title** and **Country**. You can modify them except email by pressing save button on bottom.

For Mobile number verification, you have to be verified via OTP.

![Video SDK Home Dashboard](/img/dashboard/setting-profile.png)

## 2. API Keys

This section contains listing of API keys in tabular format, which contains below property :

1. **Project Name** - Name of your project, which you specified while creating API.
2. **Added at** - Creation date.
3. **API Key** - Your project API key, which you can use in any Video SDK products. You can create API key at [How to create API Key](/docs/guide/dashboard/create-api-key).
4. **Domains** - Whitelisting of domains. You can whitelist domain at [How to Whitelist Domain](/docs/guide/dashboard/domain-whitelisting)
5. **Secret Key** - Your project Secret key. For accessing Secret key, you have to click on eye icon button on right side of key then popup will appear, in popup you will be able to copy secret key by pressing copy icon button.
6. **Domains** - By Pressing globe icon, you can add domain for restricting API key for other. You can add domains at LINK REQUIRED.

![Video SDK Home Dashboard](/img/dashboard/setting-apikey.png)

## 3. Invoices

This section contains listing of invoices in tabular format, which contains below property :

1. **Invoice No** - Invoicing Number.
2. **Status** - Billing status,
   - **Due** - For unpaid invoices.
   - **Paid** - For Paid invoices.
3. **Month** - Invoice generation month.
4. **Due Date** - The last date of payment.
5. **Payment Method** - The mode of transaction(Credit Card, Debit Card, etc.), if you had done payment, otherwise dash(-) will appear.
6. **Amount** - The amount to be paid.
7. **Actions** - Actions can be,
   - **Pay now** - This button will appear, if your invoice is unpaid. By clicking, you will be redirect to payment page.
   - **Download PDF** - This button will appear, if your invoice is paid. By clicking, you can download invoice PDF.

![Video SDK Home Dashboard](/img/dashboard/setting-invoice.png)

## 4. Billing details

In this section, we store your billing related information such as **Account id** (Automatically generated), **Country** ,**States**, **City**, **Address Line 1**(Mandatory), **Address Line 2**(Optional) and **Pincode**.

For Indian customer, they have to additionally provide **Pancard** and **GSTIN number** and for other country customer, they do not require such things.

![Video SDK Home Dashboard](/img/dashboard/setting-billing.png)

**"Please update your billing details"** bar appear on top of the site, if you don't provide any billing information.

![Video SDK Home Dashboard](/img/dashboard/update-billing.png)

## 5. Logout

Clicking the logout button should popup window for your confirmation if Yes, then terminate the session and redirect you to the login page.

![Video SDK Home Dashboard](/img/dashboard/logout.png)
