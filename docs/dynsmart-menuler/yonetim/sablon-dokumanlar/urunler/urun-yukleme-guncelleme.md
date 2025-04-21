---
sidebar_position: 1
---

# Ürün Yükleme - Güncelleme

## Zorunlu Alanlar
Aşağıdaki alanlar doldurulmadan ürün yüklenemez:
- **Stok Kodu**
- **Üretici Kodu**
- **Başlık**
- **Marka**
- **Kategori**

## Örnek Excel dosyası

![Ürün Yükleme](/img/ayarlar/urun-yukleme.png)
![Ürün Yükleme 2](/img/ayarlar/urun-yukleme-2.png)

## Güncelleme Kuralları
- DynSmart, yüklenen excel dosyası içerisinde önceden mevcut bir ürünü tespit ederse her bir alanı kontrol eder.
- Eşleşen alanlar için güncelleme işlemi gerçekleştirilir.

## Marka ve Kategori Ön Tanımları
- Ürünlerin kaydedilebilmesi için **Marka** ve **Kategori** bilgisi önceden tanımlanmış olmalıdır.
- Örneğin, `'Deneme'` markasına sahip bir ürünü XLS ile yüklemek için sistemde önceden `'Deneme'` markasının kayıtlı olması gerekmektedir.

### Kategori Tanımlama Kuralları
- Kategoriler, hiyerarşik bir yapı içinde tanımlanmalıdır.
- **Kategori 1** en üst seviyede olup, **Kategori 2, Kategori 3** gibi alt kategoriler sıralı şekilde eklenmelidir.

#### Örnek Kategori Yapısı:
Eğer ürünün kategorisi aşağıdaki gibiyse:
- **Kategori 1** = A
- **Kategori 2** = B
- **Kategori 3** = C

Bu ürünün sisteme yüklenebilmesi için **Kategori 1 (A)** altında **Kategori 2 (B)** ve onun altında **Kategori 3 (C)** tanımlı olmalıdır.
