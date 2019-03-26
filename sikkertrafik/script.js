//JS for pie-chart

document.addEventListener("DOMContentLoaded", hentJson);


let valueArray = [];
let offsetArray = [0];
let omkreds = 200 * Math.PI;
let myData;



async function hentJson() {
    let myJson = await fetch("pie.json");
    myData = await myJson.json();
    //console.log(myData);
    lavArray();
}
document.querySelector(".pie1").addEventListener("click", pie1show);
document.querySelector(".pie2").addEventListener("click", pie2show);

function pie1show() {
    console.log("Vis text");
    document.querySelector("#tekstboks1").classList.remove("hidden");
    document.querySelector("#close1").addEventListener("click", close1)
}

function close1() {
    document.querySelector("#tekstboks1").classList.add("hidden");
}

function pie2show() {
    console.log("Vis text");

    document.querySelector("#tekstboks2").classList.add("show");
    document.querySelector("#close2").addEventListener("click", close2);
}

function close2() {
    document.querySelector("#tekstboks2").classList.remove("show");
}

function lavArray() {
    myData.forEach(data => {

        offsetArray.push(data.value + offsetArray[offsetArray.length - 1]);
        valueArray.push(data.value);



    })
    //console.log(valueArray);
    //console.log(offsetArray);
    animer();
}


function animer() {

    document.querySelectorAll(".piechart circle").forEach((pie, i) => {
        pie.style.strokeDasharray = valueArray[i] + " " + omkreds;
        pie.style.strokeDashoffset = -offsetArray[i];
        pie.setAttribute("data-value", valueArray[i]);
        // console.log(pie);
    });


}

document.querySelector(".piechart").addEventListener("mouseover", e => {

    let valgt = e.target.getAttribute("data-value");
    if (valgt) {
        console.log(valgt);
    }
});
