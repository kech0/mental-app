let doctor;

$(document).ready(function () {
    doctor = JSON.parse(localStorage.getItem('selectedDoctor'));
    console.log(doctor)
    const cardDiv = $("#dr-card")
    console.log(cardDiv)
    cardDiv.find("h5.card-title").html(doctor.name);
    cardDiv.find(".card-text").html(doctor.description);
    cardDiv.find("img").attr("src", "/images/" + doctor.image);
    $("#booking-form").on("submit", function (evt) {
        evt.preventDefault()
        if (!this.checkValidity()) {
            $(this).addClass("was-validated");
        }

        const schedule = {
            date: this.date.value,
            time: this.hour.value
        }
        localStorage.setItem("schedule", JSON.stringify(schedule))
        window.location = "/payment.html"
    })
})