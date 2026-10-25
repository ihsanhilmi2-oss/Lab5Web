# Lab5Web

# Praktikum 5 — JavaScript Dasar dan Manipulasi HTML

## 1. Deskripsi Praktikum

Praktikum ini membahas dasar-dasar JavaScript dan penerapannya untuk membuat halaman web yang interaktif. Materi meliputi variabel, operator, percabangan, perulangan, function, DOM, validasi input, serta manipulasi elemen HTML.

Proyek ini dibuat menggunakan HTML, CSS, dan JavaScript dengan Visual Studio Code.

## 2. Tujuan Praktikum

1. Memahami sintaks dasar JavaScript.
2. Menggunakan variabel, tipe data, dan operator.
3. Memahami percabangan `if-else` dan `switch`.
4. Menggunakan perulangan dan function.
5. Menampilkan output melalui Console, Alert, Prompt, dan elemen HTML.
6. Memanipulasi elemen HTML menggunakan DOM.
7. Membuat form dan melakukan validasi input.
8. Membuat kalkulator nilai mahasiswa sederhana.

## 3. Tools yang Digunakan

- Visual Studio Code
- Google Chrome atau Microsoft Edge
- HTML
- CSS
- JavaScript
- GitHub

## 4. Struktur Folder

```text
Lab5Web/
├── index.html
├── script.js
├── README.md
└── screenshots/
    ├── latihan1.png
    ├── latihan2.png
    ├── latihan3.png
    ├── latihan4.png
    ├── latihan5.png
    ├── latihan6.png
    ├── latihan7.png
    ├── latihan8.png
    ├── eksperimen1.png
    ├── eksperimen7.png
    ├── eksperimen8.png
    ├── eksperimen9.png
    ├── eksperimen10.png
    ├── eksperimen11.png
    └── mini-project.png
```

## 5. Langkah Kerja

1. Membuat folder proyek bernama `Lab5Web`.
2. Membuat file `index.html` untuk struktur dan tampilan halaman web.
3. Membuat file `script.js` untuk logika JavaScript.
4. Menghubungkan file JavaScript dengan HTML menggunakan tag `<script src="script.js"></script>`.
5. Menulis kode program sesuai latihan pada modul.
6. Menjalankan program melalui browser.
7. Menguji setiap fungsi dan mengambil screenshot hasilnya.
8. Menyimpan seluruh file dan mengunggahnya ke repository GitHub.

## 6. Hasil Praktikum

### Latihan 1 — Menampilkan Output

Menggunakan `textContent` untuk mengubah teks pada halaman dan `console.log()` untuk menampilkan pesan pada Console browser.

**Hasil:** Teks Hello World ditampilkan pada halaman web dan Console.

![Hasil Latihan 1](Screenshots/latihan1.png)

### Latihan 2 — Alert dan Prompt

Menggunakan `prompt()` untuk meminta nama pengguna dan `alert()` untuk menampilkan pesan.

**Hasil:** Program menampilkan sapaan jika nama diisi dan pesan peringatan jika nama kosong atau pengguna membatalkan input.

![Hasil Latihan 2](Screenshots/latihan2.png)

### Latihan 3 — Function dan Operasi Aritmetika

Menggunakan function untuk menghitung penjumlahan, pengurangan, perkalian, pembagian, dan modulus dari dua bilangan.

**Hasil:** Program menampilkan hasil operasi aritmetika pada halaman web.

![Hasil Latihan 3](Screenshots/latihan3.png)

### Latihan 4 — Percabangan If-Else

Menggunakan `if-else` untuk menentukan kelulusan mahasiswa berdasarkan nilai minimal 60 dan memvalidasi rentang nilai 0–100.

**Hasil:** Program menampilkan status Lulus, Belum lulus, atau Input nilai tidak valid.

![Hasil Latihan 4](Screenshots/latihan4.png)

### Latihan 5 — Percabangan Switch

Menggunakan `switch` untuk menampilkan nama bilangan berdasarkan pilihan angka 1 sampai 5.

**Hasil:** Program menampilkan nama bilangan sesuai pilihan pengguna.

![Hasil Latihan 5](Screenshots/latihan5.png)

### Latihan 6 — Bilangan Genap atau Ganjil

Menggunakan operator modulus (`%`) untuk memeriksa apakah bilangan yang dimasukkan termasuk genap atau ganjil.

**Hasil:** Program menampilkan keterangan bilangan genap atau ganjil dan memvalidasi input bilangan bulat.

![Hasil Latihan 6](Screenshots/latihan6.png)

### Latihan 7 — Mengubah Warna Halaman

Menggunakan function dengan parameter untuk mengubah warna latar halaman web.

**Hasil:** Warna latar berubah sesuai tombol yang dipilih pengguna.

![Hasil Latihan 7](Screenshots/latihan7.png)

### Latihan 8 — DOM dan Checkbox Menu Makanan

Menggunakan checkbox, `querySelectorAll()`, `addEventListener()`, dan DOM untuk menghitung total harga menu yang dipilih.

Daftar menu:
- Ayam Goreng: Rp5.000
- Tempe: Rp500
- Telur Dadar: Rp2.500

**Hasil:** Total harga berubah otomatis ketika checkbox dicentang atau dilepas.

![Hasil Latihan 8](Screenshots/latihan8.png)

## 7. Eksperimen Mandiri

### Eksperimen 1 — Operasi Aritmetika dengan Prompt

Meminta dua bilangan melalui `prompt()`, mengonversi input menjadi number, kemudian menghitung operasi aritmetika.

![Hasil Eksperimen 1](Screenshots/eksperimen1.png)

### Eksperimen 7 — Tabel Perkalian Angka 7

Menggunakan perulangan `for` untuk menampilkan tabel perkalian angka 7 dari 1 sampai 10.

![Hasil Eksperimen 7](Screenshots/eksperimen7.png)

### Eksperimen 8 — Function Cek Genap

Membuat function `cekGenap(angka)` yang mengembalikan `true` jika bilangan genap dan `false` jika bilangan ganjil.

![Hasil Eksperimen 8](Screenshots/eksperimen8.png)

### Eksperimen 9 — Validasi Nama

Memeriksa input nama agar tidak boleh kosong sebelum dinyatakan valid.

![Hasil Eksperimen 9](Screenshots/eksperimen9.png)

### Eksperimen 10 — Menambahkan Pilihan Menu

Menambahkan dua menu makanan, yaitu Nasi Putih dan Es Teh. Kedua menu menggunakan sistem perhitungan total harga yang sama dengan Latihan 8.

![Hasil Eksperimen 10](Screenshots/eksperimen10.png)

### Eksperimen 11 — Menyembunyikan dan Menampilkan Elemen

Menggunakan JavaScript untuk menyembunyikan atau menampilkan teks melalui tombol.

![Hasil Eksperimen 11](Screenshots/eksperimen11.png)

## 8. Mini Project — Kalkulator Nilai Mahasiswa

Mini project ini menerima nilai tugas, UTS, dan UAS, kemudian menghitung nilai akhir berdasarkan bobot berikut:

- Tugas: 30%
- UTS: 30%
- UAS: 40%

Rumus:

```text
Nilai Akhir = (Tugas × 0,30) + (UTS × 0,30) + (UAS × 0,40)
```

Predikat ditentukan berdasarkan nilai akhir:
- A: Nilai minimal 85
- B: Nilai minimal 75
- C: Nilai minimal 60
- D: Nilai minimal 50
- E: Nilai di bawah 50

Status kelulusan ditentukan dengan batas nilai akhir minimal 60.

**Hasil:** Program menampilkan nilai akhir, predikat, dan status kelulusan serta memvalidasi nilai agar berada pada rentang 0–100.

![Hasil Mini Project](Screenshots/mini-project.png)

## 9. Cara Menjalankan Program

1. Clone atau unduh repository `Lab5Web`.
2. Buka folder proyek menggunakan Visual Studio Code.
3. Pastikan `index.html` dan `script.js` berada di folder yang sama.
4. Pastikan file HTML terhubung dengan JavaScript.
5. Buka `index.html` melalui browser atau menggunakan ekstensi Live Server.
6. Uji setiap latihan dengan memasukkan data dan menekan tombol yang tersedia.
7. Buka Console browser jika ingin memeriksa pesan JavaScript.

## 10. Kesimpulan

Melalui praktikum ini, saya mempelajari penggunaan dasar JavaScript untuk membuat halaman web yang interaktif. Saya memahami penggunaan variabel, operator, percabangan, perulangan, function, manipulasi DOM, validasi input, serta event listener. Saya juga menerapkan materi tersebut dalam pembuatan kalkulator nilai mahasiswa sederhana.

## 11. Repository

Repository GitHub: [https://github.com/ihsanhilmi2-oss/Lab5Web.git]
