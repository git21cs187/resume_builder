//alert("loading");
function addNewWEField(){
    //console.log("Adding new field");

let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("weField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder","Enter here");

let weOb=document.getElementById("we");
let weAddButtonOb=document.getElementById("weAddButton");

weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAQField(){
    
let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("eqField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder","Enter here");

let aqOb=document.getElementById("aq");
let aqAddButtonOb=document.getElementById("aqAddButton");

aqOb.insertBefore(newNode,aqAddButtonOb);

}

function addNewIPField(){
    
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("ipField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter here");
    
    let ipOb=document.getElementById("intsprojs");
    let ipAddButtonOb=document.getElementById("ipAddButton");
    
    ipOb.insertBefore(newNode,ipAddButtonOb);
    
    }

//generating CV
function generateCV(){
    //console.log("Generating CV");

    let nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById("nameT1");

    nameT1.innerHTML=nameField;

    //direct
    document.getElementById("nameT2").innerHTML=nameField;


    //contacts
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    //address

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;

    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

    document.getElementById("linkedInT").innerHTML=document.getElementById("LinkedInField").value;

    document.getElementById("hob1T").innerHTML=document.getElementById("hobbiesField").value;
    

    //objective

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    //we

    let wes=document.getElementsByClassName("weField");

    let str =" ";

    for (let e of wes) {
        str= str+`<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML= str;

    //aq

    let aqs=document.getElementsByClassName("eqField");

    let str1="";

    for(let e of aqs){
        str1+=`<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML=str1;

    //ints and projects

    let ints=document.getElementsByClassName("ipField");

    let str2="";

    for(let e of ints){
        str2+=`<li> ${e.value} </li>`;
    }

    document.getElementById("intT").innerHTML=str2;

    

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";



}

//printing cv
function printCV(){
    window.print();
}
