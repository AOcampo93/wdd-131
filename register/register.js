// register.js

import { participantTemplate, successTemplate } from './Templates.js';

let participantCount = 1; 

document.addEventListener("DOMContentLoaded", () => {

    const addParticipantButton = document.getElementById("add");
    addParticipantButton.addEventListener("click", addParticipant);


    const form = document.querySelector("form");
    form.addEventListener("submit", submitForm);
});


function addParticipant() {
    participantCount++; 


    const newParticipantHTML = participantTemplate(participantCount);


    const addParticipantButton = document.getElementById("add");
    addParticipantButton.insertAdjacentHTML("beforebegin", newParticipantHTML);
}


function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements]; 

    // Suma todas las tarifas
    const total = feeElements.reduce((sum, element) => {
        return sum + parseFloat(element.value || 0); 
    }, 0);

    return total;
}


function submitForm(event) {
    event.preventDefault(); 

    const adultName = document.getElementById("adult_name").value;

    const totalFee = totalFees();

    const form = document.querySelector("form");
    form.style.display = "none";

    const summaryElement = document.getElementById("summary");
    summaryElement.innerHTML = successTemplate({
        name: adultName,
        participants: participantCount,
        totalFee: totalFee
    });
    summaryElement.style.display = "block";
}
