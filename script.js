
let card = document.querySelector(".card");

if (window.matchMedia("(min-width: 1000px)").matches) {


    card.addEventListener('mouseover', () => {
        mouseover();


    });
}


card.addEventListener('mouseleave', () => {
    mouseleave();
});

function mouseover() {
    let about = document.querySelector(".about_me");
    let skill = document.querySelector(".skills");
    about.style.left = "20%";
    skill.style.left = "80%";

}

function mouseleave() {
    let about = document.querySelector(".about_me");
    let skill = document.querySelector(".skills");
    about.style.left = "var(--center-x)";
    skill.style.left = "var(--center-x)";

}



function about_me() {
    let card1 = document.querySelector(".card");
    let about1 = document.querySelector(".about_me");
    let skill1 = document.querySelector(".skills");


    card1.style.display = "none";
    skill1.style.display = "none";
    about1.style.display = "block";



}


function edu_skills() {

    let card1 = document.querySelector(".card");
    let about1 = document.querySelector(".about_me");
    let skill1 = document.querySelector(".skills");


    card1.style.display = "none";
    skill1.style.display = "block";
    about1.style.display = "none";




}



function close1() {
    let card1 = document.querySelector(".card");
    let about1 = document.querySelector(".about_me");
    let skill1 = document.querySelector(".skills");



    card1.style.display = "block";
    skill1.style.display = "none";
    about1.style.display = "none";


}


function projects() {

    alert("This feature was under development.")
    
}


function isFacebookInAppBrowser() {
    return /FBAN|FBAV/i.test(navigator.userAgent);
  }

  // Check if opened in Facebook's internal browser
  if (isFacebookInAppBrowser()) {

    alert("This website cannot be opened in the Facebook internal browser. Please select an external browser to continue.");
    card.style.visibility="hidden";
    // Create a link to force the page open in an external browser
    window.location.href = "intent://subhra12356789.github.io/SubhraPrakash/#Intent;scheme=https;package=com.android.chrome;end";
    setTimeout(showAlertAndRefresh, 10000);
  }


  function showAlertAndRefresh() {
    
    window.location.reload();
  }