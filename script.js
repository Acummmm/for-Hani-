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

    // Kalau lagi di Slide 6, simpan isi textarea
    if (currentSlide === 6) {

        const text = document.querySelector("#slide6 textarea");

        answers.saran = text.value.trim();

    }

    if (currentSlide < totalSlide) {

        currentSlide++;

        showSlide(currentSlide);

        window.scrollTo({
            top:0,
            behavior:"smooth"
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

    const options = button.parentElement.querySelectorAll(".option");

    options.forEach(option => {
        option.classList.remove("selected");
    });

    button.classList.add("selected");

    answers["slide" + currentSlide] = button.innerText;

    setTimeout(() => {
        nextSlide();
    }, 350);

}

function finishSurvey(){

    let hasil = "";

    hasil += "🤍 Jawaban Hani 🤍\n\n";

    hasil += "Overall : " + (answers.slide3 || "-") + "\n";

    hasil += "Happy : " + (answers.slide4 || "-") + "\n";

    hasil += "Favorit : " + (answers.slide5 || "-") + "\n";

    hasil += "Saran : " + (answers.saran || "-") + "\n";

    hasil += "Second Date : " + (answers.slide7 || "-");

    alert(hasil);

}
