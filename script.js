
"use strict";

// LATIHAN 1 - Menampilkan output
function latihan1() {
    document.getElementById("pesan").textContent = "Hello World";
    console.log("Hello World");
}

// LATIHAN 2 - Alert dan prompt
function latihan2() {
    const nama2 = prompt("Masukkan nama Anda:", "");

    if (nama2 !== null && nama2.trim() !== "") {
        alert("Halo, " + nama2 + "!");
        document.getElementById("hasilNama").textContent =
            "Selamat datang, " + nama2;
    } else {
        alert("Nama belum diisi.");
        document.getElementById("hasilNama").textContent =
            "Nama belum diisi.";
    }
}

// LATIHAN 3 - Operasi aritmetika
function latihan3() {
    const inputA3 = document.getElementById("angkaA").value;
    const inputB3 = document.getElementById("angkaB").value;
    const hasil3 = document.getElementById("hasilAritmetika");

    if (inputA3.trim() === "" || inputB3.trim() === "") {
        hasil3.textContent = "Kedua bilangan wajib diisi.";
        return;
    }

    const a3 = Number(inputA3);
    const b3 = Number(inputB3);

    hasil3.textContent =
        "Penjumlahan: " + (a3 + b3) + "\n" +
        "Pengurangan: " + (a3 - b3) + "\n" +
        "Perkalian: " + (a3 * b3) + "\n" +
        "Pembagian: " +
        (b3 !== 0 ? a3 / b3 : "Tidak dapat dibagi nol") + "\n" +
        "Modulus: " +
        (b3 !== 0 ? a3 % b3 : "Tidak dapat dibagi nol");
}

// LATIHAN 4 - If else
function latihan4() {
    const input4 = document.getElementById("nilaiIf").value;
    const nilai4 = Number(input4);
    const hasil4 = document.getElementById("hasilIf");

    if (input4.trim() === "" || nilai4 < 0 || nilai4 > 100) {
        hasil4.textContent = "Input nilai tidak valid.";
    } else if (nilai4 >= 60) {
        hasil4.textContent = "Lulus";
    } else {
        hasil4.textContent = "Belum lulus";
    }
}

// LATIHAN 5 - Switch
function latihan5() {
    const pilihan5 = document.getElementById("pilihanSwitch").value;
    const hasil5 = document.getElementById("hasilSwitch");

    switch (pilihan5) {
        case "1": hasil5.textContent = "Bilangan satu"; break;
        case "2": hasil5.textContent = "Bilangan dua"; break;
        case "3": hasil5.textContent = "Bilangan tiga"; break;
        case "4": hasil5.textContent = "Bilangan empat"; break;
        case "5": hasil5.textContent = "Bilangan lima"; break;
        default: hasil5.textContent = "Pilihan tidak tersedia";
    }
}

// LATIHAN 6 - Genap atau ganjil
function latihan6() {
    const input6 = document.getElementById("bilangan").value;
    const angka6 = Number(input6);
    const hasil6 = document.getElementById("hasilBilangan");

    if (input6.trim() === "" || !Number.isInteger(angka6)) {
        hasil6.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka6 % 2 === 0) {
        hasil6.textContent = "Bilangan genap";
    } else {
        hasil6.textContent = "Bilangan ganjil";
    }
}

// LATIHAN 7 - Mengubah warna halaman
function ubahWarna(warna) {
    document.body.style.backgroundColor = warna;
}

// LATIHAN 8 DAN EKSPERIMEN 10 - Total menu makanan
const semuaMenu = document.querySelectorAll(".menu");

function hitungTotalMenu() {
    let totalMenu = 0;

    semuaMenu.forEach(function(item) {
        if (item.checked) {
            totalMenu += Number(item.value);
        }
    });

    document.getElementById("total").textContent =
        totalMenu.toLocaleString("id-ID");
}

semuaMenu.forEach(function(item) {
    item.addEventListener("change", hitungTotalMenu);
});

// EKSPERIMEN 1 - Aritmetika dengan prompt
function eksperimen1() {
    const inputA = prompt("Masukkan bilangan pertama:");
    if (inputA === null || inputA.trim() === "") return;

    const inputB = prompt("Masukkan bilangan kedua:");
    if (inputB === null || inputB.trim() === "") return;

    const a = Number(inputA);
    const b = Number(inputB);

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        alert("Masukkan bilangan yang valid.");
        return;
    }

    document.getElementById("hasilEksperimen1").textContent =
        "Penjumlahan: " + (a + b) + "\n" +
        "Pengurangan: " + (a - b) + "\n" +
        "Perkalian: " + (a * b) + "\n" +
        "Pembagian: " + (b !== 0 ? a / b : "Tidak dapat dibagi nol") +
        "\nModulus: " + (b !== 0 ? a % b : "Tidak dapat dibagi nol");
}

// EKSPERIMEN 7 - Perkalian angka 7
function eksperimen7() {
    let hasil7 = "";

    for (let i = 1; i <= 10; i++) {
        hasil7 += "7 x " + i + " = " + (7 * i) + "\n";
    }

    document.getElementById("hasilPerkalian").textContent = hasil7;
}

// EKSPERIMEN 8 - Function cek genap
function cekGenap(angka) {
    return angka % 2 === 0;
}

function eksperimen8() {
    const input8 = document.getElementById("angkaGenap").value;
    const angka8 = Number(input8);
    const hasil8 = document.getElementById("hasilGenap");

    if (input8.trim() === "" || !Number.isInteger(angka8)) {
        hasil8.textContent = "Masukkan bilangan bulat yang valid.";
    } else {
        hasil8.textContent = cekGenap(angka8)
            ? "true - Bilangan genap"
            : "false - Bilangan ganjil";
    }
}

// EKSPERIMEN 9 - Validasi nama
document.getElementById("formEksperimen").addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        const nama9 = document.getElementById("namaEksperimen").value.trim();

        document.getElementById("hasilEksperimen9").textContent =
            nama9 === ""
                ? "Nama tidak boleh kosong."
                : "Nama berhasil diisi: " + nama9;
    }
);

// EKSPERIMEN 11 - Sembunyikan atau tampilkan teks
function eksperimen11() {
    const teks = document.getElementById("teksTambahan");

    teks.style.display =
        teks.style.display === "none" ? "block" : "none";
}

// MINI PROJECT - Kalkulator nilai mahasiswa
function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

document.getElementById("formNilai").addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        const inputTugas = document.getElementById("nilaiTugas").value;
        const inputUTS = document.getElementById("nilaiUTS").value;
        const inputUAS = document.getElementById("nilaiUAS").value;
        const hasil = document.getElementById("hasilNilai");

        if (
            inputTugas.trim() === "" ||
            inputUTS.trim() === "" ||
            inputUAS.trim() === ""
        ) {
            hasil.textContent = "Semua nilai wajib diisi.";
            return;
        }

        const tugas = Number(inputTugas);
        const uts = Number(inputUTS);
        const uas = Number(inputUAS);

        if ([tugas, uts, uas].some(
            n => !Number.isFinite(n) || n < 0 || n > 100
        )) {
            hasil.textContent = "Nilai harus berada pada rentang 0-100.";
            return;
        }

        const akhir = hitungNilaiAkhir(tugas, uts, uas);
        const predikat = tentukanPredikat(akhir);
        const status = akhir >= 60 ? "Lulus" : "Belum lulus";

        hasil.textContent =
            "Nilai akhir: " + akhir.toFixed(2) +
            " | Predikat: " + predikat +
            " | Status: " + status;
    }
);
