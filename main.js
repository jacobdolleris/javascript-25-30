//                          Opgave 25


let element1 = document.getElementsByClassName("num1");

let element2 = document.querySelector(".num2");

let element3 = document.getElementById("num3");

let element4 = document.getElementsByTagName("h3");

let element5 = document.querySelector("#num5");

let element6 = document.querySelector("#num6");


console.log(element1.innerHTML);
console.log(element2.innerHTML);
console.log(element3.innerHTML);
console.log(element4.innerHTML);
console.log(element5.innerHTML);
console.log(element6.innerHTML);


//                          Opgave 25.2

let tomP = document.querySelector("#tom-p");
let navn25 = "Jacob Dolleris";

let femogtyve = function(){
    tomP.innerHTML = navn25;
}
femogtyve();



//                          Opgave 26

let knap26 = document.querySelector("#knap26");


    knap26.addEventListener("click", function(){
        alert(knap26.innerHTML);
    })


//                          Opgave 27
let button1 = document.querySelector("#ID1");
button1.addEventListener("click",function(){
    document.body.style.backgroundColor = "black";

})

let button2 = document.querySelector("#ID2");
button2.addEventListener("click",function(){
    document.body.style.backgroundColor = "White";

})



//                          Opgave 28
let knapper28 = document.querySelectorAll(".knapper28")
knapper28.forEach(function(knap) {
    knap.addEventListener("click", function() {
        alert(knap.innerText)
        
    })
})


//                          Opgave 28.1
let RipRapRup = document.querySelectorAll(".ripraprup")
let array = Array.from(RipRapRup);

array.forEach(function(){
    console.log(array);
    array[1].addEventListener("click", function(){
        document.querySelector(".rap").style.fontSize = "2em";
    })
        
    array[2].addEventListener("click", function(){
            alert(array[2].innerText)
            

    })




 
// Alert popper op 3 gange.

/*    */

} )


//                          Opgave 28.2

let navnearray = ["Martin", "Jacob", "Bobby", "Carsten", "Lone"]
let tomDiv = document.querySelector(".tomdiv")

navnearray.forEach(function(navne){


     tomDiv.innerHTML +=  `<p class=”className”> ${navne}</p>`;
})

//                          Opgave 29




let input = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let select = document.querySelector("#operation")
let knap = document.querySelector("#knap1")
let resultat = document.querySelector("#result")

knap.addEventListener("click", function(){
    
    let værdi1 = Number(input.value);
    let værdi2 = Number(input2.value);
    
    switch (select.value) {
        case "+":
            resultat.innerHTML = værdi1 + værdi2;
            
            break;
            case "-":
                resultat.innerHTML = værdi1 - værdi2;

            break;
            case "*":
                resultat.innerHTML = værdi1 * værdi2;

            break;
            case "/":
                resultat.innerHTML = værdi1 / værdi2;
        default:
            break;
    }
})

