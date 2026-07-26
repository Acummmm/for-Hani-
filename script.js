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

    let hasil = "";

    hasil += "🤍 Jawaban Hani 🤍\n\n";

    hasil += "Overall : " + (answers.slide3 || "-") + "\n";
    hasil += "Happy : " + (answers.slide4 || "-") + "\n";
    hasil += "Favorit : " + (answers.slide5 || "-") + "\n";

    alert(hasil);

}
