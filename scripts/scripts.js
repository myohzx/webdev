//Colors (dark side)
var primaryBackgroundColor = "#323245";
var boxShadowStyle =  "1px 2px 25px 3px rgba(0, 0, 0, 0.258)";
var secondaryBackgroundColor = "#232330";
var borderColor = "#313131";
var titlesColor = "#8A8A8A";
var primaryColor = "#6A71C5";



function switchSide(){

    /*Variabels to change all selectors*/
    var card = document.querySelectorAll(".card");
    var cardHeader = document.querySelectorAll(".card-header");
    var cardBody = document.querySelectorAll(".card-body");
    var subsecitonTitle = document.querySelectorAll(".subseciton-title");
    var formCheckLabel = document.querySelectorAll(".form-check-label");
    var checkmark = document.querySelectorAll(".checkmark");
    var input = document.querySelectorAll("input[placeholder]");

    /*Incremental variable to change all selectors*/
    var i;


    if (localStorage.getItem('side') === 'light') {
        //default colors
        location.reload();
        
    } else if(localStorage.getItem('side') === 'dark') {

        //Html / body / background
        document.querySelector("html").style.backgroundColor = primaryBackgroundColor;
        document.querySelector("body").style.backgroundColor = primaryBackgroundColor;
        document.getElementById('content-page').style.backgroundColor = primaryBackgroundColor;

        //Error msg
        document.getElementById("checkboxes-error-msn").style.color = primaryColor; 
        document.getElementById("emailErrorMsn").style.color = primaryColor; 
        document.getElementById("passErrorMsn").style.color = primaryColor; 
        document.getElementById("phoneNumberErrorMsn").style.color = primaryColor; 

        //Buttons
        document.getElementById('cancelButton').style.backgroundColor = primaryBackgroundColor;

        //Sidebar
        document.querySelector(".navbar-nav").style.background = secondaryBackgroundColor;
        document.querySelector(".navbar-nav").style.boxShadow = boxShadowStyle;
        document.querySelector(".link-navbar-active").style.backgroundColor = primaryBackgroundColor;

        //Titles
        document.querySelector("h2").style.color = "white";
        document.querySelector(".subseciton-title").style.color = titlesColor; 
        document.querySelector(".form-check-label").style.color = titlesColor; 

        //Cards
        document.querySelector(".card").style.boxShadow = boxShadowStyle; // delete -----| all down bellow
        document.querySelector(".card-header").style.backgroundColor = secondaryBackgroundColor; 
        document.querySelector(".card-header").style.borderColor = borderColor; 
        document.querySelector(".card-body").style.backgroundColor = secondaryBackgroundColor; 
        document.querySelector(".card-body").style.borderColor = secondaryBackgroundColor; 



        //cycle to go throw all the selectors (length = 2)
        for (i = 0; i < card.length; i++) {
            //.card selector
            card[i].style.boxShadow = boxShadowStyle;

            //.card-header selector
            cardHeader[i].style.backgroundColor = secondaryBackgroundColor;
            cardHeader[i].style.borderColor = borderColor;

            //.card-body selector
            cardBody[i].style.backgroundColor = secondaryBackgroundColor;
            cardBody[i].style.borderColor = secondaryBackgroundColor;

            //.subseciton-title selector
            subsecitonTitle[i].style.color = titlesColor;
        }


        //cycle to go throw all the selectors (length = 3)
        for (i = 0; i < formCheckLabel.length; i++) {
            //.form-check-label selector
            formCheckLabel[i].style.color = titlesColor;   

            //.form-check-label selector
            checkmark[i].style.backgroundColor = primaryBackgroundColor;

            //input[placeholder] selector
            input[i].style.backgroundColor = primaryBackgroundColor;
            input[i].style.color = "white";

        }

        
    }
}


function lightSide() {
    localStorage.setItem('side', 'light');
    switchSide();
}


function darkSide(){
    localStorage.setItem('side', 'dark');
    switchSide();
}

