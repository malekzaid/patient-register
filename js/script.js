
var Imagebin;

//add styles of modl to variables
m1 = document.getElementById('newPatientModal').style;
m2 = document.getElementById('patientModal2').style;
m3 = document.getElementById('patientModal3').style;
m4 = document.getElementById('patientModal4').style;

//called when user clicks close
function close1() {
    if (confirm("Are you sure you want to cancel patient registeration") == true) {

        m1.display = "none";
        m2.display = "none";
        m3.display = "none";
        m4.display = "none";
        document.getElementById('patientForm').reset();
    }
}

//when user clicks Register new patient 
function newPatient() {
    m1.display = "block";
}

// After data input in modal 1
function ShowModal2() {
    pdata = {}
    patientName = document.getElementById("patientName").value;
    patientAge = document.getElementById("patientAge").value;
    genderRadios = document.querySelectorAll('input[name="patientGender"]');
    if (document.querySelector('input[name="patientGender"]:checked')) {
        patientGender = document.querySelector('input[name="patientGender"]:checked').value;
    }
    else {
        document.getElementById("patientGenderError").innerHTML = "Please Select Appropriate Gender of Patient";
    }
    patientContact = document.getElementById("patientContact").value;
    patientImage = document.getElementById("patientImage").value;

    if (patientName == "" || patientImage == "" || patientAge == "" || patientGender == "") {
        if (patientName == "") {
            document.getElementById("patientNameError").innerHTML = "Please Enter Patient Name";
        }
        if (patientImage == "") {
            document.getElementById("patientImageError").innerHTML = "No Image Selected";
        }
        if (patientAge == "") {
            document.getElementById("patientAgeError").innerHTML = "Please Enter Patient Age";
        }
        // if (patientContact) {
        //     if (patientContact < 6000000000 | patientContact > 9999999999) {
        //         document.getElementById("patientContactError").innerHTML = "Contact Number Must be 10 digits";
        //     }
        // }
    }
    else {
        pdata.name = patientName;
        pdata.age = patientAge;
        pdata.gender = patientGender;
        if (patientContact) {
            pdata.contact = patientContact;
        }
        pdata.image = Imagebin;

        m2.display = "block";
        m1.display = "none";
    }
}

// After data input in modal 2
function ShowModal3() {
    patientAddress1 = document.getElementById("patientAddress1").value;
    patientAddress2 = document.getElementById("patientAddress2").value;
    patientPincode = document.getElementById("patientPincode").value;
    patientCity = document.getElementById("patientCity").value;

    if (patientAddress1 == "" || patientAddress2 == "" || patientPincode == "" || patientCity == "") {
        if (patientAddress1 == "") {
            document.getElementById("patientAddress1Error").innerHTML = "Please Enter Address";
        }
        if (patientAddress2 == "") {
            document.getElementById("patientAddress2Error").innerHTML = "Please Enter Address";
        }
        if (patientPincode == "") {
            document.getElementById("patientPincodeError").innerHTML = "Please Enter Proper PinCode";
        }
        if (patientCity == "") {
            document.getElementById("patientCityError").innerHTML = "Please Enter City Name";
        }
    }
    else {
        pdata.address = patientAddress1 + "," + patientAddress2;
        pdata.pincode = patientPincode;
        pdata.city = patientCity;
        m3.display = "block";
        m2.display = "none";
    }
}
// After data input in modal 3
function ShowModal4() {
    patientChronic = document.getElementById("patientChronic").value;
    patientCMed = document.getElementById("patientCMed").value;
    patientHistory = document.getElementById("patientHistory").value;
    patientFHistory = document.getElementById("patientFHistory").value;

    if (patientHistory == "" || patientFHistory == "") {
        if (patientHistory == "") {
            document.getElementById("patientHistoryError").innerHTML = "Please Enter Patient History";
        }
        if (patientFHistory == "") {
            document.getElementById("patientFHistoryError").innerHTML = "Please Enter Family History";
        }
    }
    else {
        if (patientChronic) {
            pdata.chronic = patientChronic;
        }
        if (patientCMed) {
            pdata.chMed = patientCMed;
        }
        pdata.history = patientHistory;
        pdata.family = patientFHistory;

        m4.display = "block";
        m3.display = "none";
    }
}
// After data input in modal 4
function ShowData() {
    CaseCharge = document.getElementById("CaseCharge").value;
    Doctor = document.getElementById("Doctor").value;
    PresentIllness = document.getElementById("PresentIllness").value;
    AppointmentDate = document.getElementById("AppointmentDate").value;

    if (PresentIllness == "" || AppointmentDate == "" || CaseCharge == "" || Doctor == "") {
        if (PresentIllness == "") {
            document.getElementById("PresentIllnessError").innerHTML = "Please Enter Patient's Illness";
        }
        if (AppointmentDate == "") {
            document.getElementById("AppointmentDateError").innerHTML = "Please Select Appointment Date";
        }
        if (Doctor == "") {
            document.getElementById("DoctorError").innerHTML = "Please Select Doctor";
        }
        if (CaseCharge == "") {
            document.getElementById("CaseChargeError").innerHTML = "Please Enter Case Charge";
        }
    }
    else {
        pdata.appointment = AppointmentDate;
        pdata.illness = PresentIllness;
        pdata.doctor = Doctor;
        pdata.charge = CaseCharge;

        m4.display = "none";
        document.getElementById('patientForm').reset();
        Show();
    }
}

function Show() {
    document.getElementById("tr1").innerHTML = " <td class='table-head-item'>Full Name</td> <td >" + pdata.name + "</td>";
    document.getElementById("tr2").innerHTML = "<td class='table-head-item'>Age</td>   <td id=>" + pdata.age + "</td>";
    document.getElementById("tr3").innerHTML = "<td class='table-head-item'>Gender</td><td id=>" + pdata.gender + "</td>";
    if (pdata.contact) {
        document.getElementById("tr4").innerHTML = "<td class='table-head-item'>Mobile Number</td><td id=>" + pdata.contact + "</td>";
    }
    document.getElementById("tr5").innerHTML = "<td class='table-head-item'>Image</td><td id=> <img src='data:image/png;base64," + pdata.image + "' height='200px' width='200px' alt='Patient Image'></td>";
    document.getElementById("tr6").innerHTML = "<td class='table-head-item'>Address</td><td id=>" + pdata.address + "</td>";
    document.getElementById("tr7").innerHTML = "<td class='table-head-item'>Pin Code</td><td id=>" + pdata.pincode + "</td>";
    document.getElementById("tr8").innerHTML = "<td class='table-head-item'>City</td><td id=>" + pdata.city + "</td>";
    if (pdata.chronic) {
        document.getElementById("tr9").innerHTML = "<td class='table-head-item'>Chronic Illness</td><td id=>" + pdata.chronic + "</td>";
    }
    if (pdata.chMed) {
        document.getElementById("tr10").innerHTML = "<td class='table-head-item'>Chronic Medicinea</td><td id=>" + pdata.chMed + "</td>";
    }
    document.getElementById("tr11").innerHTML = "<td class='table-head-item'>Patient History</td><td id=>" + pdata.history + "</td>";
    document.getElementById("tr12").innerHTML = "<td class='table-head-item'>Family History</td><td id=>" + pdata.family + "</td>";
    document.getElementById("tr13").innerHTML = "<td class='table-head-item'>Present Illness</td><td id=>" + pdata.illness + "</td>";
    document.getElementById("tr14").innerHTML = "<td class='table-head-item'>Appoinment Date</td><td id=>" + pdata.appointment + "</td>";
    document.getElementById("tr15").innerHTML = "<td class='table-head-item'>Doctor</td><td id=>" + pdata.doctor + "</td>";
    document.getElementById("tr16").innerHTML = "<td class='table-head-item'>Case Charge</td><td id=>" + pdata.charge + "</td>";

}
const fileInput = document.getElementById("patientImage");
fileInput.addEventListener("change", (event) => {
    imageconvert(event)
});

function imageconvert(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
        const fileData = event.target.result;

        // encode fileData as base64 string
        const encodedData = btoa(fileData);

        // store encodedData in local storage
        Imagebin = encodedData
    };
    reader.readAsBinaryString(file);
}
