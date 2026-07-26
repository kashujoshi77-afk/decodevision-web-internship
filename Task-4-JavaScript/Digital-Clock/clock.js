function updateClock() {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // AM / PM
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert 24-hour format to 12-hour format
    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    // Add 0 before single digit
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("clock").innerText =
        hours + ":" + minutes + ":" + seconds + " " + ampm;


    // Date
    let date = now.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    document.getElementById("date").innerText = date;
}

// Update immediately
updateClock();

// Update every 1 second
setInterval(updateClock, 1000);