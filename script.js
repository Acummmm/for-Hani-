let currentSlide = 1;
const totalSlide = 8;
let answers = {};


function showSlide(number) {

    document.querySelectorAll(".slide").forEach(slide => {
        slide.classList.remove("active");
    });

    const target = document.getElementById("slide" + number);

    if(target){
        target.classList.add("active");
    }

}


function nextSlide(){

    if(currentSlide < totalSlide){

        currentSlide++;

        showSlide(currentSlide);

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }

}


function previousSlide(){

    if(currentSlide > 1){

        currentSlide--;

        showSlide(currentSlide);

    }

}


function selectOption(button){

    const options = button.parentElement.querySelectorAll(".option");

    options.forEach(option=>{
        option.classList.remove("selected");
    });

    button.classList.add("selected");

    answers["slide"+currentSlide] = button.innerText;


    setTimeout(()=>{
        nextSlide();
    },350);

}


function finishSurvey(){

    let pesan = 
`🤍 Jawaban First Date Hani 🤍

⭐ 1. Overall First Date
Jawaban:
${answers.slide3 || "-"}

🥹 2. Happy Meter
Jawaban:
${answers.slide4 || "-"}

📸 3. Momen Favorit
Jawaban:
${answers.slide5 || "-"}

💌 4. Saran Next Date
Jawaban:
${answers.saran || "-"}

🤍 5. Second Date?
Jawaban:
${answers.slide7 || "-"}

Makasih ya udah isi semuanya 🌷
`;


    const nomor = "62895323147678";

const url = "https://wa.me/" + nomor + "?text=" 
            + encodeURIComponent(pesan);

window.location.href = url;

}

    hasil += "🤍 Jawaban Hani 🤍\n\n";

    hasil += "Overall : " + (answers.slide3 || "-") + "\n";
    hasil += "Happy : " + (answers.slide4 || "-") + "\n";
    hasil += "Favorit : " + (answers.slide5 || "-") + "\n";

    alert(hasil);

}
