$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});

const destinoInput = document.getElementById("destinoInput");

const fechaInput = document.getElementById("fechaInput");
const nochesBtn = document.getElementById("nochesBtn");
const roomsBtn = document.getElementById("roomsBtn");


function asignValues() {

    getToday(fechaInput);

    setNoches(nochesBtn);

    setRoom(roomsBtn);
}

function getToday(fechaInput) {
    var now = new Date();

    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);

    var today = now.getFullYear() + "-" + (month) + "-" + (day);

    fechaInput.setAttribute("value", today);
    fechaInput.setAttribute("min", today);
}

function setNoches(nochesBtn) {
    const numNoches = [4, 7, 10, 14];
    const numDiarias = [1, 2, 3, 4, 5, 6, 7, 8];

    const numNocheTitle = document.createTextNode("COMUNES");
    const numDiariasTitle = document.createTextNode("DIARIAS");

    const nocheDiv = document.createElement("div");
    nocheDiv.setAttribute("id", "nocheDiv");

    setNochesNums(numNoches, nocheDiv, numNocheTitle);
    setNochesNums(numDiarias, nocheDiv, numDiariasTitle);


    createPopover(nochesBtn, nocheDiv);


}
function setNochesNums(numArray, nocheDiv, title) {

    var titleEle = document.createElement("h5");

    titleEle.appendChild(title);
    nocheDiv.appendChild(titleEle);
    numArray.forEach(numero => {
        const btn = document.createElement("input");
        btn.setAttribute("class", "nghtOptions");
        btn.setAttribute("type", "text");
        btn.setAttribute("readonly", "true");
        if (numero == 1) {
            var btnText = document.createTextNode(numero + " Noche");
        } else {
            var btnText = document.createTextNode(numero + " Noches");
        }

        btn.appendChild(btnText);
        nocheDiv.appendChild(btn);
    });
}

function setRoom(roomsBtn) {

    var roomDiv = document.createElement("div");
    roomDiv.setAttribute("id", "roomDiv");

    var title = document.createElement("h4");
    var titleTxt = document.createTextNode("Habitación");
    title.appendChild(titleTxt);
    roomDiv.appendChild(title);

    var adultoSpan = document.createElement("div");

    var adultoLabel = document.createElement("label");
    var adultoLabelTxt = document.createTextNode("Adultos");


    var numMaxAdultos = "4"
    var numMinAdultos = "1"

    setGuestData(adultoLabel, adultoLabelTxt, adultoSpan, numMaxAdultos, numMinAdultos, roomDiv);

    var kidsSpan = document.createElement("div");

    var kidsLabel = document.createElement("label");
    var kidsLabelTxt = document.createTextNode("Niños");

    var numMaxkids = "3"
    var numMinkids = "0"

    setGuestData(kidsLabel, kidsLabelTxt, kidsSpan, numMaxkids, numMinkids, roomDiv);

    var SuperDiv = document.createElement("div");
    SuperDiv.setAttribute("id", "superDiv");

    SuperDiv.appendChild(roomDiv);
    addRoom(SuperDiv);

    createPopover(roomsBtn, SuperDiv);


}
function setGuestData(label, labelTxt, span, max, min, div) {

    span.setAttribute("class", "guestDivs");
    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("min", min);
    input.setAttribute("value", min);
    input.setAttribute("max", max);
    input.setAttribute("step", "1");

    label.appendChild(labelTxt);
    span.appendChild(label);
    span.appendChild(input);
    div.appendChild(span);
}
function addRoom(SuperDiv) {

    var addRoomDiv = document.createElement("div");
    addRoomDiv.setAttribute("id", "addRoomDiv");

    var addRoomSection = document.createElement("div");
    addRoomSection.setAttribute("id", "addRoomSection");

    var addRoomIconP = document.createElement("span");
    addRoomIconP.setAttribute("id", "roomIconP")

    var addRoomIcon = document.createTextNode("+");
    addRoomIconP.appendChild(addRoomIcon);

    var addRoomTxtSpan = document.createElement("p");
    var addRoomTxt = document.createTextNode("ADD ROOM");
    addRoomTxtSpan.appendChild(addRoomTxt);

    var addRoomDoneSpan = document.createElement("p");
    var addRoomDoneTxt = document.createTextNode("DONE");
    addRoomDoneSpan.appendChild(addRoomDoneTxt);

    addRoomSection.appendChild(addRoomIconP);

    addRoomSection.appendChild(addRoomTxtSpan);

    addRoomDiv.appendChild(addRoomSection);
    addRoomDiv.appendChild(addRoomDoneSpan);

    SuperDiv.appendChild(addRoomDiv);
}
function createPopover(btn, data) {

    $(btn).popover({
        placement: "bottom",
        content: data,
        html: true
    });
    var nightOptions = document.getElementsByClassName("nghtOptions");

    
}

asignValues();

function logValues() {
    console.log("DESTINO: "+ destinoInput.value);
    console.log("FECHA DE LLEGADA: "+ fechaInput.value);
    console.log("NÚMERO DE NOCHES: "+ nochesBtn.value);
    console.log("HABITACIONES: "+ roomsBtn.value);
}
document.getElementById("btnSearch").addEventListener("click", () => {
    logValues();
});
// $(".nghtOptions").on('click', ()=>{
//     console.log("hello");
// });
