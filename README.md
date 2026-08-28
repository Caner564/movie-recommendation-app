# Movie Recommendation System

## Proje Hakkında

Movie Recommendation System, kullanıcıların filmleri görüntüleyebildiği, film arayabildiği ve kategorilere göre filtreleyebildiği bir web uygulamasıdır. Kullanıcılar ayrıca filmlere puan verebilir, favorilerine ekleyebilir ve seçtikleri kategoriye göre film önerileri alabilir.

## Kullanılan Teknolojiler

* HTML
* CSS
* JavaScript
* Node.js
* Express.js
* MySQL
* Python
* Draw.io

## Özellikler

* Film listeleme
* Film detaylarını görüntüleme
* Film arama
* Kategoriye göre film filtreleme
* Kategoriye göre film önerileri
* Film puanlama
* Ortalama puan görüntüleme
* Filmleri favorilere ekleme
* Favorilerden film çıkarma
* Kullanıcı kayıt olma
* Kullanıcı giriş yapma
* Dark Mode

## Veritabanı

Projede MySQL veritabanı kullanılmıştır.

Kullanılan tablolar:

* `users` – Kullanıcı bilgileri
* `movies` – Film bilgileri
* `ratings` – Film puanları
* `favorites` – Favori filmler

## Projeyi Çalıştırma

1. Proje klasörünü açın.

2. Gerekli Node.js paketlerini yükleyin:

```bash
npm install
```

3. MySQL üzerinde `movie_recommendation` veritabanını oluşturun.

4. Veritabanı bağlantı bilgilerini `backend/db/database.js` dosyasına göre ayarlayın.

5. Node.js sunucusunu başlatın:

```bash
node index.js
```

6. Tarayıcıdan aşağıdaki adresi açın:

```text
http://localhost:3000
```

## Proje Yapısı

```text
movie-recommendation-app/
│
├── backend/
│   ├── db/
│   │   └── database.js
│   └── routes/
│       ├── movies.js
│       ├── ratings.js
│       └── favorites.js
│
├── index.html
├── movie-detail.html
├── login.html
├── register.html
├── favorites.html
├── style.css
├── script.js
├── login.js
├── register.js
├── favorites.js
├── index.js
├── package.json
└── README.md
```
