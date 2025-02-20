function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    let timeString = `${hours}:${minutes}:${seconds} ${amPm}`;

    document.getElementById("clock").textContent = timeString;

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let day = days[now.getDay()];
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    let dateString = `${day}, ${month}, ${year}`
    document.getElementById("date").textContent = dateString;
}


setInterval(updateClock, 1000);
updateClock();

