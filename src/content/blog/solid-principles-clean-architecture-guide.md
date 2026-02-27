---
title: "اصول SOLID در معماری نرم‌افزار"
description: "راهنمای Senior‑Level و کاربردی برای درک و پیاده‌سازی اصول SOLID در طراحی نرم‌افزار و معماری تمیز."
publishDate: "2026-02-27"
author: "امیررضا مقدم پور"
category: "technical"
tags: ["SOLID", "معماری تمیز", "OOP", "طراحی نرم‌افزار", "بک‌اند"]
---

## SOLID چیست؟
SOLID مجموعه‌ای از **۵ اصل طراحی شی‌گرا** برای ساخت نرم‌افزار **قابل توسعه، تست‌پذیر و کم‌هزینه در تغییر** است.

> Reference: Robert C. Martin (Uncle Bob)



## Single Responsibility Principle (SRP)
هر کلاس فقط **یک مسئولیت** و **یک دلیل برای تغییر** دارد.  
**نتیجه:** کد تمیز و Refactor امن



## Open / Closed Principle (OCP)
کلاس‌ها **برای توسعه باز** و **برای تغییر بسته** هستند.  
**نتیجه:** افزودن فیچر بدون Regression



## Liskov Substitution Principle (LSP)
Child باید **بدون مشکل جای Parent** استفاده شود.  
**نتیجه:** Polymorphism واقعی



## Interface Segregation Principle (ISP)
Interface بزرگ نشانه Design بد است.  
**نتیجه:** Coupling کمتر، تست ساده‌تر



## Dependency Inversion Principle (DIP)
وابستگی به **Abstraction** نه **Implementation**.  
**نتیجه:** کد قابل Mock و Enterprise‑Ready



## SOLID در پروژه‌های واقعی
- Dependency Injection Container  
- Interface Binding  
- Strategy / Factory / Observer  
- Clean Architecture  


امیررضا، قاطع و **با مثال واقعی (Laravel‑محور)** توضیح می‌دم؛ دقیقاً همونی که تو معماری و مصاحبه ازت انتظار می‌ره 👇



# SOLID با مثال عملی (Laravel / PHP)

## 1️⃣ SRP – Single Responsibility
**هر کلاس فقط یک مسئولیت**

❌ بد
```php
class OrderService {
    public function create() {}
    public function sendSms() {}
    public function generateInvoice() {}
}
```

✅ درست
```php
class OrderService {
    public function create() {}
}

class SmsNotifier {
    public function send() {}
}

class InvoiceGenerator {
    public function generate() {}
}
```

**نتیجه:** تغییر در SMS → OrderService نمی‌شکنه



## 2️⃣ OCP – Open / Closed
**توسعه بدون تغییر کد موجود**

❌ بد
```php
if ($payment === 'zarinpal') {}
else if ($payment === 'stripe') {}
```

✅ درست (Strategy)
```php
interface PaymentGateway {
    public function pay(int $amount): bool;
}
```

```php
class ZarinpalGateway implements PaymentGateway {
    public function pay(int $amount): bool { return true; }
}
```

```php
class PaymentService {
    public function __construct(
        private PaymentGateway $gateway
    ) {}
}
```

**نتیجه:** Gateway جدید بدون دست زدن به Service



## 3️⃣ LSP – Liskov Substitution
**Child باید جای Parent بدون Bug بنشیند**

❌ بد
```php
class Bird {
    public function fly() {}
}

class Penguin extends Bird {
    public function fly() {
        throw new Exception('I can’t fly');
    }
}
```

✅ درست
```php
interface Flyable {
    public function fly();
}

class Sparrow implements Flyable {}
class Penguin {}
```

**نتیجه:** Polymorphism واقعی



## 4️⃣ ISP – Interface Segregation
**Interface چاق = Design بد**

❌ بد
```php
interface Worker {
    public function work();
    public function eat();
    public function sleep();
}
```

✅ درست
```php
interface Workable {
    public function work();
}

interface Eatable {
    public function eat();
}
```

**نتیجه:** هر کلاس فقط چیزی که نیاز داره Implement می‌کنه



## 5️⃣ DIP – Dependency Inversion
**وابستگی به Abstraction، نه Implementation**

❌ بد
```php
class OrderService {
    private SmsService $sms;

    public function __construct() {
        $this->sms = new SmsService();
    }
}
```

✅ درست (Laravel Style)
```php
interface Notifier {
    public function notify();
}
```

```php
class SmsNotifier implements Notifier {
    public function notify() {}
}
```

```php
class OrderService {
    public function __construct(
        private Notifier $notifier
    ) {}
}
```

```php
$this->app->bind(Notifier::class, SmsNotifier::class);
```

**نتیجه:** تست‌پذیر، قابل Mock، Enterprise‑Ready



## SOLID در دنیای واقعی Laravel
| اصل | پیاده‌سازی |
|---|---|
| SRP | Service Class |
| OCP | Strategy / Events |
| LSP | Polymorphism |
| ISP | Interfaceهای کوچک |
| DIP | Service Container |

---
