// =====================================
// FIRST DATE HANI
// Script.js - Sprint 1 (Revisi)
// =====================================

let currentSlide = 1;
const totalSlide = 8;
let answers = {};

// Menampilkan slide tertentu
function showSlide(number) {

    // Sembunyikan semua slide
    document.querySelectorAll(".slide").forEach(slide => {
        slide.classList.remove("active");
    });

    // Tampilkan slide yang dipilih
    const target = document.getElementById("slide" + number);

    if (target) {
        target.classList.add("active");
    }

}

// Tombol lanjut
function nextSlide() {

    if (currentSlide < totalSlide) {

        currentSlide++;

        showSlide(currentSlide);

        // Scroll ke atas biar nyaman di HP
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}

// Tombol kembali (dipakai nanti kalau diperlukan)
function previousSlide() {

    if (currentSlide > 1) {

        currentSlide--;

        showSlide(currentSlide);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}

// Menyimpan pilihan user
function selectOption(button) {

    // Cari semua tombol dalam grup yang sama
    const options = button.parentElement.querySelectorAll(".option");

    // Hilangkan pilihan sebelumnya
    options.forEach(option => {
        option.classList.remove("selected");
    });

    // Aktifkan pilihan baru
    button.classList.add("selected");

    // Simpan jawaban sementara
    answers["slide" + currentSlide] = button.innerText;

}

function showResult(){

    console.log(answers);

}
