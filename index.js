const wrapper = document.querySelector(".surveySlider");
const menuItems = document.querySelectorAll(".listItems");

menuItems.forEach((item, index)=> {
    item.addEventListener("click", () => {
        // change the current slide
        console.log("you clicked" + index);
        wrapper.style.transform =`translateX(${-100 * index}vw)`;
       
           
        });
    });


 var foodDetails = document.querySelectorAll(".foodSubmitDetailsButton");


 document.getElementById("loader").style.display = "none";
    function foodSubmitLoader() {
        foodDetails = setTimeout(showPage, 1000);
        document.getElementById("loader").style.display = "block";

    }
    function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("foodDetails").style.display = "none";
        document.getElementById("foodQuestions").style.display="block";
        document.getElementById("submitfoodQuestions").style.display="none";
        document.getElementById("foodQuestions2").style.display="none";
    }

//for second part
    var foodPageOne = document.querySelectorAll("#firstSubmitButton");
    function foodSubmitLoader1() {
        foodPageOne = setTimeout(showPage1, 1000);
        document.getElementById("loader").style.display = "block";

    }
    function showPage1() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("foodQuestions").style.display = "none";
        document.getElementById("foodQuestions2").style.display="block";
        document.getElementById("submitfoodQuestions").style.display="none";
    }
//for third part
    var foodPageTwo = document.querySelectorAll("#firstSubmitButton2");
    function foodSubmitLoader2() {
        foodPageOne = setTimeout(showPage2, 1000);
        document.getElementById("loader").style.display = "block";

    }
    function showPage2() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("foodQuestions2").style.display = "none";
        document.getElementById("foodQuestions").style.display = "none";
        document.getElementById("submitfoodQuestions").style.display="block";
    }

    
  // close foodresponse 
 
const submitfoodQuestions = document.querySelector("#submitfoodQuestions");
const closeFoodResponse = document.querySelector(".closesubmissionResponse");

closeFoodResponse.addEventListener("click", ()=>{
    submitfoodQuestions.style.display = "flex";
});

closeFoodResponse.addEventListener("click", ()=> {
    submitfoodQuestions.style.display = "none";
});
