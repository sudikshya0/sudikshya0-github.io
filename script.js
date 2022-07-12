// const hobbies = ["Freelancer", "Software Developer", "Cricket Lover"];

// let count = 0;
// let index = 0;
// let currentHobby = "";
// let letter = "";

// const typing = () => {
//   if (count === hobbies.length) {
//     count = 0;
//   }

//   currentHobby = hobbies[count];
//   letter = currentHobby.slice(0, ++index);

//   document.querySelector(".hero__text__dynamic").textContent = letter;

//   if (letter.length === currentHobby.length) {
//     count++;
//     index = 0;
//   }

//   setTimeout(typing, 150);
// };

// typing();

//button click
//about click
document.querySelector(".header__about").addEventListener("click",()=>
{
    console.log('click');
    document.querySelector(".about__container").scrollIntoView();

});
//contact click
document.querySelector(".header__contact").addEventListener("click",()=>
{
    console.log('click');
    document.querySelector(".contact__container").scrollIntoView();
})
//download click
document.querySelector(".header__download").addEventListener("click", () => 
{
  consoole.log('click');
  window.open("E:\JavaScript\PORTFOLIO\cv\Sudikshya - Resume.pdf", "_blank");
});
//facebook click
document.querySelector(".footer__facebook").addEventListener("click",()=>
{
    console.log('click');
    window.open("https://www.facebook.com/rajad.shakya", "_blank");
})
//instagram click
document.querySelector(".footer__insta").addEventListener("click",()=>
{
    console.log('click');
    window.open("https://www.instagram.com/rajadshakya/", "_blank");
})
//linkedin click
document.querySelector(".footer__linkedin").addEventListener("click",()=>
{
    console.log('click');
    window.open("https://www.linkedin.com/in/rajad-shakya-671649159/", "_blank");
})
//form handle
const onSubmit = () => {
  const name = document.querySelector(".contact__name");
  const email = document.querySelector(".contact__email");
  const message = document.querySelector(".contact__message");

  if (name.value === "") {
    alert("name is required");
  } else if (email.value === "") {
    alert("email is required");
  } else if (message.value === "") {
    alert("message is required");
  } else {
    alert("mail sent successfully");
  }
};

document.querySelector(".contact__submit").addEventListener("click", onSubmit);