let doctor;
$(document).ready(function () {
    doctor = JSON.parse(localStorage.getItem('selectedDoctor'));
    const schedule=JSON.parse(localStorage.getItem('schedule'));
    const summaryDiv = $("#order-summary")
    console.log(summaryDiv)
    summaryDiv.find(".dr-name").html(doctor.name);
    summaryDiv.find(".specialization").html(doctor.specialization);
    summaryDiv.find("img").attr("src", "/images/" + doctor.image);
    summaryDiv.find(".date").html(schedule.date);
    summaryDiv.find(".time").html(schedule.time);
})