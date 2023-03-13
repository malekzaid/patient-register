function deletePatient(id) {
    // var id = $(this).attr("id");
    // console.log(id);
    $.ajax({
        method: "POST",
        url: "delete.php",
        dataType: 'json',
        data: { id: id },
        success: function (n) {
            if (n == 1) {
                window.alert("Deletion Successful");
                Show();
            }
            else {
                window.alert(n);

            }

        },
        error: function () {
            window.alert("Deletion Failed");
        }
    });

}

function updatePatient(id) {
    $.ajax({
        method: "POST",
        url: "getdata.php",
        dataType: 'json',
        data: { id: id },
        success: function (data) {
            // console.log(data.PatientName);
            // d = JSON.parse(n);
            // console.log(d);
            $('#upatientId').val(data.PatientId);
            $('#upatientName').val(data.PatientName);
            $('#upatientAge').val(data.PatientAge);
            $('#upatientContact').val(data.PatientContact);
            $('#upatientAddress').val(data.PatientAddress);
            $('#upatientPincode').val(data.PatientPincode);
            $('#upatientCity').val(data.PatientCity);
            $('#upatientChronic').val(data.ChronicIllness);
            $('#upatientCMed').val(data.ChronicMedicine);
            $('#upatientHistory').val(data.PatientHistory);
            $('#upatientFHistory').val(data.PatientFHistory);
            $('#uPresentIllness').val(data.PresentIllness);
            $('#uCaseCharge').val(data.CaseCharge);
            $('#uAppointmentDate').val(data.AppointmentDate);
            $('#uDoctor').val(data.Doctor);
            if (data.PatientGender == 'male') {
                $('#upatientGenderM').attr("checked", true);
            } else if (data.PatientGender == 'female') {
                $('#upatientGenderF').attr("checked", true);
            } else if (data.PatientGender == 'other') {
                $('#upatientGenderO').attr("checked", true);
            }
            oldimage = data.PatientImage;
            mupdate.display = "block";
        },
        error: function () {
            window.alert("Update Failed");
        }
    });
}
const ufileInput = document.getElementById("upatientImage");
ufileInput.addEventListener("change", (event) => {
    uimageconvert(event);
});

function uimageconvert(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
        const fileData = event.target.result;

        // encode fileData as base64 string
        const encodedData = btoa(fileData);

        // store encodedData in local storage
        uImagebin = encodedData
    };
    reader.readAsBinaryString(file);
}
function update() {
    udata = {}

    c = 0;
    upatientId = document.getElementById("upatientId").value;
    upatientName = document.getElementById("upatientName").value;
    upatientAge = document.getElementById("upatientAge").value;
    ugenderRadios = document.querySelectorAll('input[name="upatientGender"]');
    upatientContact = document.getElementById("upatientContact").value;
    upatientAddress = document.getElementById("upatientAddress").value;
    upatientPincode = document.getElementById("upatientPincode").value;
    upatientCity = document.getElementById("upatientCity").value;
    upatientChronic = document.getElementById("upatientChronic").value;
    upatientCMed = document.getElementById("upatientCMed").value;
    upatientHistory = document.getElementById("upatientHistory").value;
    upatientFHistory = document.getElementById("upatientFHistory").value;
    uCaseCharge = document.getElementById("uCaseCharge").value;
    uDoctor = document.getElementById("uDoctor").value;
    uPresentIllness = document.getElementById("uPresentIllness").value;
    uAppointmentDate = document.getElementById("uAppointmentDate").value;

    if (document.querySelector('input[name="upatientGender"]:checked')) {
        upatientGender = document.querySelector('input[name="upatientGender"]:checked').value;
    }
    else {
        document.getElementById("upatientGenderError").innerHTML = "Please Select Appropriate Gender of Patient";
    }

    if (!nameregex.test(upatientName)) {
        document.getElementById("upatientNameError").innerHTML = "Please Enter Proper Patient Name ";
        c = 1;
    }
    if (!ageregex.test(upatientAge)) {
        document.getElementById("upatientAgeError").innerHTML = "Please Enter Patient Age between 0-99";
        c = 1;
    }
    if (!phregex.test(upatientContact)) {
        document.getElementById("upatientContactError").innerHTML = "Enter appropriate contact number";
        c = 1;
    }
    if (!addregex.test(upatientAddress)) {
        document.getElementById("upatientAddressError").innerHTML = "Address must be of minimum 10 carachters containing alphabets numbers '-' and ','";
        c = 1;
    }
    if (!pinregex.test(upatientPincode)) {
        document.getElementById("upatientPincodeError").innerHTML = "Pincode Must be of 6 digits";
        c = 1;
    }
    if (!cityregex.test(upatientCity)) {
        document.getElementById("upatientCityError").innerHTML = "Invalid City Name";
        c = 1;
    }
    if (!chregex.test(upatientChronic)) {
        document.getElementById("upatientChronicError").innerHTML = "Please enter patient's chronic disease and N/A if none";
        c = 1;
    }
    if (!chregex.test(upatientCMed)) {
        document.getElementById("upatientCMedError").innerHTML = "Please enter patient's chronic medicines and N/A if none";
        c = 1;
    }
    if (upatientHistory.length < 30) {
        document.getElementById("upatientHistoryError").innerHTML = "Patient history must be minimum 30 characters";
        c = 1;
    }
    if (upatientFHistory.length < 30) {
        document.getElementById("upatientFHistoryError").innerHTML = "Patient family history must be minimum 30 characters";
        c = 1;
    }
    if (!PrIllregex.test(uPresentIllness)) {
        document.getElementById("uPresentIllnessError").innerHTML = "Please Enter Patient's Present Disease/Illness";
        c = 1;
    }
    if (uAppointmentDate == "") {
        document.getElementById("uAppointmentDateError").innerHTML = "Please Select Appointment Date";
        c = 1;
    }
    if (!Caseregex.test(uCaseCharge)) {
        document.getElementById("uCaseChargeError").innerHTML = "Enter Case Charge (in Rupees)";
        c = 1;
    }
    if (uDoctor == "") {
        document.getElementById("uDoctorError").innerHTML = "Please Select Doctor";
        c = 1;
    }
    if (uImagebin) {
        upatientImage = uImagebin;
    }
    else {
        upatientImage = oldimage;
    }

    if (c == 0) {
        udata.id = upatientId;
        udata.name = upatientName;
        udata.age = upatientAge;
        udata.gender = upatientGender;
        udata.contact = upatientContact;
        udata.image = upatientImage;
        udata.address = upatientAddress;
        udata.pincode = upatientPincode;
        udata.city = upatientCity;
        udata.chronic = upatientChronic;
        udata.chMed = upatientCMed;
        udata.history = upatientHistory;
        udata.family = upatientFHistory;
        udata.appointment = uAppointmentDate;
        udata.illness = uPresentIllness;
        udata.doctor = uDoctor;
        udata.charge = uCaseCharge;
        // console.log(udata)
        mupdate.display = "none";
        $.ajax({
            method: "POST",
            url: "update.php",
            dataType: "json",
            data: udata,
            success: function (data) {
                // debugger;
                if (data == 1) {
                    Show()
                    document.getElementById('patientUpdateForm').reset();
                }
                else {
                    console.log(data)
                }
            },
            error: function () {
                console.log(udata);
            }
        });


    }
}