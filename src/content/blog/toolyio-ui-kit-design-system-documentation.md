---
title: "Website UI Kit v1 | Design System Documentation"
description: "مستندات رسمی Design System و UI Kit برند Website برای وب‌سایت‌های SaaS، توسعه نرم‌افزار و SEO با پشتیبانی Light/Dark Mode."
publishDate: "2026-02-25"
author: "امیررضا مقدم پور"
category: "web-design"
tags:
  - "Design System"
  - "UI Kit"
  - "UX"
  - "SaaS Design"
  - "SEO"
  - "Nuxt"
---



# 🧭 Website UI Kit v1 — Design System Documentation

> **Brand DNA:** تکنیکال، قابل اعتماد، منعطف (Light / Dark)  
> **UX Goals:** نگهداشت کاربر، افزایش مشاوره، هدایت به ابزارها  



## 🧩 1. Foundational Design Principles

| اصل | توضیح |
| --- | --- |
| **Simplicity over Drama** | تمرکز روی قابلیت استفاده — نه فانتزی. |
| **Consistency builds trust** | ساختار رنگ، تایپوگرافی و فاصله ثابت در همه‌جا. |
| **SEO Semantic Structure** | هر المان معنا دارد؛ هر متن تگ درست خودش را. |
| **Responsive by DNA** | طراحی از mobile شروع می‌شود و به desktop گسترش می‌یابد. |



## 🎨 2. Color System — Light / Dark

| Role | Light Mode | Dark Mode | توضیح |
| --- | --- | --- | --- | 
| **Primary** | `#0F172A` | `#F8FAFC` | تیترها، اجزای برند |
| **Accent**  | `#2563EB` | `#3B82F6` | CTAها، لینک‌ها |
| **Secondary** | `#64748B` | `#CBD5E1` | متن‌های توضیحی و غیرفعال |
| **Surface** | `#FFFFFF` | `#1E293B` | پس‌زمینه کارت‌ها |
| **Border** | `#E2E8F0` | `#334155` | خطوط جداکننده |
| **Success / Error** | `#16A34A` / `#DC2626` | `#22C55E` / `#F87171` | اعلان‌ها و فرم‌ها |

📌 **Gradient Action (Brand Motion):**  
‌از `#2563EB` → `#16A34A` برای CTAها و Hero overlay  
(نمایانگر رشد، تکنولوژی، و سرعت)



## 🔤 3. Typography System

| Type | Font | Size | Weight | کارکرد |
| --- | --- | --- | --- | --- |
| **H1** | Vazirmatn Bold | 44px | 700 | عنوان اصلی صفحه |
| **H2** | Vazirmatn SemiBold | 32px | 600 | تیتر بخش‌ها |
| **H3** | Vazirmatn Medium | 24px | 500 | کارت‌ها، ساب‌سکشن‌ها |
| **Body** | Vazirmatn Regular | 18px | 400 | متن‌ها |
| **Caption** | Vazirmatn Medium | 14px | 500 | متا، زیرنویس‌ها |
| **EN / Code** | Inter | 16px | 400 | متون فنی / عددی |

✅ دسترس‌پذیری بالا (Contrast + clarity)  
✅ مناسب SEO و سرعت لود بالا (Google Fonts CDN)  



## 📐 4. Layout System

| نوع | مقدار | توضیح |
| --- | --- | --- |
| **Container Max‑Width** | 1280px | محدوده محتوای صفحه |
| **Grid Columns** | 12 | چینش responsive استاندارد |
| **Gutter** | 24px | فاصله بین ستون‌ها |
| **Global Padding** | 16/24/48px | Mobile / Tablet / Desktop |
| **Border Radius** | 12px | پایه برای کارت‌ها و دکمه‌ها |
| **Shadow** | 0 4px 12px rgba(0,0,0,0.05) | برای hover subtle |



## 📲 5. Responsive Breakpoints

| نام | محدوده (px) | الگو |
| --- | --- | --- |
| **Mobile** | ≤ 640 | عمودی، Drawer برای منو |
| **Tablet** | ≤ 1024 | دو ستونه، Collapseها |
| **Desktop** | ≥ 1280 | full grid layout |
| **XL** | ≥ 1536 | مانیتورهای عریض، حاشیه‌های بازتر |

✅ Mobile‑First  
✅ CTA در موبایل همیشه در دید کاربر (bottom fixed)



## ⚙️ 6. Core Components (Essentials)

| بخش | جزئیات |
| --- | --- |
| **Header** | منو ساده + لوگو + CTA مشاوره |  
| **Hero Section** | H1 سئو محور + متن کوتاه + دو CTA (مشاوره / ابزار) |  
| **Services Cards** | آیکون Outline + تیتر + متن + Hover subtle |  
| **Solutions Section** | نمایش ساختار خدمات با Iconography فنی |  
| **Tools** | کارت‌های ابزار با CTA «برو به ابزار» |  
| **Blog Cards** | تصویر بالا + تیتر + خلاصه (با داده meta برای SEO) |  
| **Contact Form** | فیلدها ساده، پیام تأیید + رنگ Success |  
| **Footer** | لینک‌ها، Copyright، Trust‑mark |



## 🧭 7. UX Flow (Behavioral Blueprint)

1. **Hero:** معرفی، اعتبار اولیه  
2. **Services:** نمایش سرویس‌ها با استدلال منطقی  
3. **Solutions/Tools:** ایجاد تعامل و کلیک  
4. **Blog:** آموزش → افزایش اعتماد  
5. **CTA ثابت:** «دریافت مشاوره رایگان»  

## Buttons

### Primary Button
- Height: 48px
- Padding: 24px
- Font: 16px Medium
- Radius: 12px
- Background: Accent / Gradient
- Usage: Main CTA only

### Secondary Button
- Height: 44px
- Padding: 20px
- Border: 1px Border Color
- Usage: Secondary Actions

### States
- Hover: Darker shade + shadow
- Active: No shadow
- Disabled: Opacity 40%

### Typography Rules
- Only one H1 per page
- H2 for sections
- H3 for cards
- Body text max width: 65–75ch

### Responsive Rules
- Touch Target ≥ 44px
- Buttons on mobile never smaller than 44px height
- Section padding:
  Mobile: 24px
  Tablet: 32px
  Desktop: 48px

## Component Contracts
- Button: no custom color allowed
- Card: radius fixed (12px)
- Shadow only on hover
- Spacing only from spacing tokens


اصول تعامل:
- Animation بسیار subtle (fade + slide)
- Transition 150–250ms
- Feedback رنگی در Hover و Focus  
- مسیر روشن: Hero → Services → CTA / Tools  



## 🧮 8. Design Tokens (JSON ready)

```json
{
  "colors": {
    "primary": "#0F172A",
    "accent": "#2563EB",
    "accent-gradient": ["#2563EB", "#16A34A"],
    "surface": "#FFFFFF",
    "border": "#E2E8F0"
  },
  "radius": 12,
  "shadow": "0 4px 12px rgba(0,0,0,0.05)",
  "spacing": [4, 8, 16, 24, 48],
  "breakpoints": {
    "sm": 640,
    "md": 1024,
    "lg": 1280,
    "xl": 1536
  },
  "typography": {
    "fontFa": "Vazirmatn",
    "fontEn": "Inter",
    "scale": {
      "h1": 44,
      "h2": 32,
      "h3": 24,
      "body": 18,
      "caption": 14
    }
  }
}
```



## 📘 9. Accessibility & SEO Integration
- رنگ‌های دارای کنتراست بالا (WCAG‑AA)
- برچسب aria برای دکمه‌ها و لینک‌ها  
- ساختار Semantic: `<main>`، `<section>`، `<article>`  
- تیتر صفحات: `H1` منحصر به فرد در هر صفحه  
- تصاویر با `alt` هدفمند  



## 🧱 10. Component Hierarchy Overview

```
Website-ui/
 ├── layout/
 │    ├── Header.vue
 │    ├── Footer.vue
 │    ├── Container.vue
 │    └── SectionWrapper.vue
 ├── components/
 │    ├── Button.vue
 │    ├── CardService.vue
 │    ├── CardBlog.vue
 │    ├── CTA.vue
 │    └── Drawer.vue
 ├── tokens/
 │    ├── colors.json
 │    ├── typography.json
 │    ├── spacing.json
 │    └── breakpoints.json
 └── styles/
      └── variables.css
```



## ⚡ نتیجه نهایی
🔹 **طراحی قابل نگهداری** برای تیم فنی  
🔹 **سازگار با SEO و UX Conversion**  
🔹 **Dual Theme** بدون افت خوانایی  
🔹 **مستند کامل برای بلاگ Website**



