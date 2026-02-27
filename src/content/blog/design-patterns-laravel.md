---
title: "Design Patterns در Laravel با مثال‌های واقعی"
description: "بررسی Design Patterns پرکاربرد در Laravel همراه با مثال‌های عملی Backend"
publishDate: "2026-02-27"
author: "Amirreza"
category: "technical"
tags: ["Laravel", "Design Patterns", "Backend", "PHP", "Architecture"]
---

# Design Patterns در Laravel — توضیح + مثال واقعی

## مقدمه
Design Patterns راه‌حل‌های تست‌شده برای مسائل تکرارشونده در طراحی نرم‌افزار هستند.  
در Laravel، این الگوها مستقیماً برای **کاهش Coupling، افزایش Maintainability و Scalability** استفاده می‌شوند.



## Subsystem چیست؟
Subsystem یک بخش مستقل از سیستم با مسئولیت مشخص است که جزئیات پیاده‌سازی آن پنهان می‌شود.

### Subsystemهای واقعی در Laravel
- Auth (Guards, Providers)
- Cache (Drivers)
- Queue
- Mail

> Laravel مجموعه‌ای از Subsystemهاست که از طریق APIهای ساده در دسترس‌اند.



## Facade Pattern
### هدف
پنهان‌سازی Complexity یک Subsystem پشت یک API ساده.

### استفاده واقعی در Laravel
```php
Cache::remember('users', 60, fn () => User::all());
DB::transaction(fn () => $this->store());
Auth::user();
```

### توضیح
Facadeها در Laravel Proxyهایی هستند که به Service Container متصل‌اند.

**نتیجه**
- API ساده
- Coupling کمتر

## Strategy Pattern
### هدف
تعویض الگوریتم در Runtime بدون if/else.

### مثال واقعی (Payment)
```php
interface PaymentStrategy {
    public function pay(int $amount): bool;
}
```

```php
class ZarinpalStrategy implements PaymentStrategy {
    public function pay(int $amount): bool {
        return true;
    }
}
```

```php
class PaymentService {
    public function __construct(
        private PaymentStrategy $strategy
    ) {}

    public function pay(int $amount) {
        return $this->strategy->pay($amount);
    }
}
```

### Bind در Service Container
```php
$this->app->bind(
    PaymentStrategy::class,
    ZarinpalStrategy::class
);
```

**نتیجه**
- Open/Closed Principle
- تست‌پذیری بالا



## Factory Pattern
### هدف
متمرکز کردن منطق ساخت Object.

### مثال واقعی
```php
class PaymentFactory {
    public static function make(): PaymentStrategy {
        return match (config('payment.driver')) {
            'zarinpal' => app(ZarinpalStrategy::class),
            'stripe'   => app(StripeStrategy::class),
        };
    }
}
```

**نتیجه**
- Coupling کمتر
- کنترل Lifecycle



## Observer Pattern
### هدف
جدا کردن Side Effectها از Core Logic.

### مثال واقعی (Model Observer)
```php
class OrderObserver {
    public function created(Order $order) {
        Log::info('Order created');
    }
}
```

```php
Order::observe(OrderObserver::class);
```

**نتیجه**
- Event‑Driven Architecture
- کد تمیزتر



## ارتباط Patternها با Subsystemها
| Pattern | استفاده در Laravel |
| --- | --- |
| Facade | Cache, DB, Auth |
| Strategy | Payment, Notification |
| Factory | Driver, ModelFactory |
| Observer | Model Events |
| Subsystem | Auth, Cache, Queue |



## جمع‌بندی نهایی
Design Patterns ابزار نیستند؛ **تصمیم‌های معماری آگاهانه** هستند.  
استفاده درست = کد قابل توسعه  
استفاده افراطی = Over‑Engineering



Applied GoF Design Patterns within Laravel to build scalable, maintainable backend systems.
