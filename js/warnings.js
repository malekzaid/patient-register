
//whenever data is added to element error for that element is removed
function removeWarning() {
    document.getElementById(this.id + "Error").innerHTML = "";
}
function removeGenderWarning() {
    document.getElementById("patientGenderError").innerHTML = "";
}
document.getElementById("patientName").onkeyup = removeWarning;
document.getElementById("patientAge").onkeyup = removeWarning;
document.getElementById("patientImage").onkeyup = removeWarning;
document.getElementById("patientAddress1").onkeyup = removeWarning;
document.getElementById("patientAddress2").onkeyup = removeWarning;
document.getElementById("patientPincode").onkeyup = removeWarning;
document.getElementById("patientCity").onkeyup = removeWarning;
document.getElementById("patientHistory").onkeyup = removeWarning;
document.getElementById("patientFHistory").onkeyup = removeWarning;
document.getElementById("PresentIllness").onkeyup = removeWarning;
document.getElementById("AppointmentDate").onkeyup = removeWarning;
document.getElementById("Doctor").onkeyup = removeWarning;
document.getElementById("CaseCharge").onkeyup = removeWarning;
document.querySelectorAll('input[name="patientGender"]')[0].onchange = removeGenderWarning;
document.querySelectorAll('input[name="patientGender"]')[1].onchange = removeGenderWarning;
document.querySelectorAll('input[name="patientGender"]')[2].onchange = removeGenderWarning;

