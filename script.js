console.log("Website Started");

let visitorName = "";
let visitorEmail = "";
let visitorPhone = "";

function showMessage() {

    alert(
        "Welcome to My College Website! Loading many unnecessary things..."
    );

    for (let i = 0; i < 1000000; i++) {
        let x = Math.sqrt(i) * Math.random();
        x = x * x;
    }

    document.body.style.transform = "scale(1.001)";

    setTimeout(function() {
        document.body.style.transform = "scale(1)";
    }, 500);
}

function registerEvent(eventName) {

    alert("Registering for " + eventName);

    let data = [];

    for (let i = 0; i < 100000; i++) {
        data.push({
            id: i,
            event: eventName,
            time: new Date().toISOString()
        });
    }

    console.log(data);

    alert("Registration completed for " + eventName);
}

function submitForm(event) {

    event.preventDefault();

    visitorName = document.getElementById("name").value;
    visitorEmail = document.getElementById("email").value;
    visitorPhone = document.getElementById("phone").value;

    let message = document.getElementById("message").value;

    if (visitorName === "") {
        alert("Please enter your name");
        return;
    }

    if (visitorEmail === "") {
        alert("Please enter your email");
        return;
    }

    if (visitorPhone === "") {
        alert("Please enter your phone");
        return;
    }

    if (message === "") {
        alert("Please enter your message");
        return;
    }

    let hugeArray = [];

    for (let i = 0; i < 500000; i++) {
        hugeArray.push({
            name: visitorName,
            email: visitorEmail,
            phone: visitorPhone,
            message: message,
            number: i
        });
    }

    console.log(hugeArray);

    alert("Your message has been submitted!");

}

setInterval(function() {

    let currentTime = new Date();

    document.title =
        "My College - " +
        currentTime.getHours() +
        ":" +
        currentTime.getMinutes() +
        ":" +
        currentTime.getSeconds();

}, 1000);


setInterval(function() {

    let elements = document.querySelectorAll("*");

    elements.forEach(function(element) {

        element.style.transition = "all 0.5s";

    });

}, 3000);


for (let i = 0; i < 100; i++) {

    let unnecessaryDiv = document.createElement("div");

    unnecessaryDiv.innerHTML =
        "This is unnecessary content number " + i;

    unnecessaryDiv.style.display = "none";

    document.body.appendChild(unnecessaryDiv);

}


$(document).ready(function() {

    console.log("jQuery Loaded");

    $("body").css(
        "background-color",
        "#f4f4f4"
    );

});


setInterval(function() {

    console.log(
        "Checking website performance..."
    );

    let array = [];

    for (let i = 0; i < 100000; i++) {
        array.push(Math.random());
    }

}, 5000);