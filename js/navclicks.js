function blockshow(mh, ms) {
    ms.display = "block";
    mh.display = "none";
    console.log("herasfhj2");
}


$('#patientDetailsbtn2').click(function () { blockshow(m2, m1) });
$('#patientDetailsbtn3').click(function () { blockshow(m3, m1) });
$('#patientDetailsbtn4').click(function () { blockshow(m4, m1) });
$('#addressDetailsbtn3').click(function () { blockshow(m3, m2) });
$('#addressDetailsbtn4').click(function () { blockshow(m4, m2) });
$('#patientHistorybtn4').click(function () { blockshow(m4, m3) });


