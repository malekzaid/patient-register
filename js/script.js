// let table = new DataTable('#myTable', {
//     responsive: true,
//     scrollX: true,
//     scrollY: 400,
//     dom: 'Bfrtip',
//     buttons: [
//         'colvis'
//     ]
// });
// $(function () {
//     $('#patientDetails').DataTable();
// });
var Imagebin;
window.onload = Show();
//add styles of modal to variables
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
    pdata = {};
    phregex = /^[6-9][0-9]{9}/;
    nameregex = /^[a-zA-Z][a-zA-Z\s]{3,}/;
    ageregex = /^[0-9]{1,2}$/;
    c = 0;
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

    if (!nameregex.test(patientName)) {
        document.getElementById("patientNameError").innerHTML = "Please Enter Proper Patient Name ";
        c = 1;
    }
    if (!ageregex.test(patientAge)) {
        document.getElementById("patientAgeError").innerHTML = "Please Enter Patient Age between 0-99";
        c = 1;
    }
    if (!phregex.test(patientContact)) {
        document.getElementById("patientContactError").innerHTML = "Enter appropriate contact number";
        c = 1;
    }
    if (patientImage == "") {
        document.getElementById("patientImageError").innerHTML = "No Image Selected";
        c = 1;
    }
    if (c == 0) {

        pdata.name = patientName;
        pdata.age = patientAge;
        pdata.gender = patientGender;
        pdata.contact = patientContact;
        pdata.image = Imagebin;
        // insertData();
        // Show();
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
    c = 0;

    addregex = /^[A-Za-z0-9\s,-]{10,}/;
    pinregex = /^[0-9]{6}$/;
    cityregex = /^[A-Za-z()\s]+$/;
    if (!addregex.test(patientAddress1)) {
        document.getElementById("patientAddress1Error").innerHTML = "Address Line 1 must be of minimum 10 carachters containing alphabets numbers '-' and ','";
        c = 1;
    }
    if (!addregex.test(patientAddress2)) {
        document.getElementById("patientAddress2Error").innerHTML = "Address Line 2 must be of minimum 10 carachters containing alphabets numbers '-' and ','";
        c = 1;
    }
    if (!pinregex.test(patientPincode)) {
        document.getElementById("patientPincodeError").innerHTML = "Pincode Must be of 6 digits";
        c = 1;
    }
    if (!cityregex.test(patientCity)) {
        document.getElementById("patientCityError").innerHTML = "Invalid City Name";
        c = 1;
    }
    if (c == 0) {
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
    c = 0;
    chregex = /^[A-Za-z0-9\s,]+$/;
    phistoryregex = /^(?=.*\n).*\S.{29,}$/;
    if (!chregex.test(patientChronic)) {
        document.getElementById("patientChronicError").innerHTML = "Please enter patient's chronic disease and N/A if none";
        c = 1;
    }
    if (!chregex.test(patientCMed)) {
        document.getElementById("patientCMedError").innerHTML = "Please enter patient's chronic medicines and N/A if none";
        c = 1;
    }
    if (patientHistory.length < 30) {
        document.getElementById("patientHistoryError").innerHTML = "Patient history must be minimum 30 characters";
        c = 1;
    }
    if (patientFHistory.length < 30) {
        document.getElementById("patientFHistoryError").innerHTML = "Patient family history must be minimum 30 characters";
        c = 1;
    }
    if (c == 0) {

        pdata.chronic = patientChronic;
        pdata.chMed = patientCMed;
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
    c = 0;
    PrIllregex = /^.+$/;
    Caseregex = /^[0-9]+$/;
    if (!PrIllregex.test(PresentIllness)) {
        document.getElementById("PresentIllnessError").innerHTML = "Please Enter Patient's Present Disease/Illness";
        c = 1;
    }
    if (AppointmentDate == "") {
        document.getElementById("AppointmentDateError").innerHTML = "Please Select Appointment Date";
        c = 1;
    }
    if (!Caseregex.test(CaseCharge)) {
        document.getElementById("CaseChargeError").innerHTML = "Enter Case Charge (in Rupees)";
        c = 1;
    }
    if (Doctor == "") {
        document.getElementById("DoctorError").innerHTML = "Please Select Doctor";
        c = 1;
    }


    if (c == 0) {
        pdata.appointment = AppointmentDate;
        pdata.illness = PresentIllness;
        pdata.doctor = Doctor;
        pdata.charge = CaseCharge;

        m4.display = "none";
        insertData();
        document.getElementById('patientForm').reset();
    }
}
function insertData() {

    $.ajax({
        method: "POST",
        url: "insert.php",
        dataType: "json",
        data: pdata,
        success: function (data) {
            // debugger;
            if (data == 1) {
                Show()
            }
            else {
                console.log(data)
            }
        },
        error: function () {
            console.log(pdata);
        }
    });
}
function Show() {
    $.ajax({
        method: "POST",
        url: "getdata.php",

        success: function (n) {
            d = JSON.parse(n);
            patienttable = document.querySelector(".table tbody");
            patienttable.innerHTML = "";

            d.forEach((data) => {
                tr = document.createElement("tr");
                td = document.createElement("td");
                td.textContent = data.PatientName;
                td.className = "td-center";
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = data.PatientAge;
                td.className = "td-center";
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = data.PatientGender;
                td.className = "td-center";
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = data.PatientContact;
                td.className = "td-center";
                tr.appendChild(td);
                td = document.createElement("td");
                td.className = "td-center";
                tr.appendChild(td);
                const imageDataURL = "data:image/png;base64," + data.PatientImage;
                imgtag = document.createElement("img");
                imgtag.className = "image-zoom";
                imgtag.src = imageDataURL;
                td.appendChild(imgtag)
                td = document.createElement("td");
                td.textContent = data.PatientAddress;
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = data.PatientPincode;
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = data.PatientCity;
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = data.ChronicIllness;
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = data.ChronicMedicine;
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = data.PatientHistory;
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = data.PatientFHistory;
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = data.PresentIllness;
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = data.AppointmentDate;
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = data.CaseCharge;
                tr.appendChild(td);
                td = document.createElement("td");
                td.textContent = data.Doctor;
                tr.appendChild(td);

                tdUpdateButton = document.createElement("td");
                tr.appendChild(tdUpdateButton);
                // create an update button element
                btnupdate = document.createElement("button");
                btnupdate.textContent = "Update";
                btnupdate.className = "btn btnupdate";
                btnupdate.id = data.PatientId;
                // btnupdate.onclick = updatePatient;
                tdUpdateButton.appendChild(btnupdate);

                // // create a delete button element
                // btndelete = document.createElement("button");
                // btndelete.textContent = "Delete";
                // btndelete.className = "btn btndelete";
                // btndelete.id = data.PatientId;
                // btndelete.onclick = deletePatient;
                // tdUpdateButton.appendChild(btndelete);


                patienttable.appendChild(tr);
            });
            $('#patientDetails').DataTable();

        },
        error: function (data) {
            window.alert(" Failed");
        }
    });

}
const fileInput = document.getElementById("patientImage");
fileInput.addEventListener("change", (event) => {
    imageconvert(event);
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
