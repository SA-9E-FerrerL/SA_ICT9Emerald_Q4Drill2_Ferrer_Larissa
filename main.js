function HeatIndex() {

    let temp = parseFloat(document.getElementById("temp").value);
    let humidity = parseFloat(document.getElementById("humid").value);
    let HI, status;

    if (isNaN(temp) || isNaN(humidity)) {
        document.getElementById("message1").innerHTML = "Please enter valid values!";
        return;
    }

    HI = temp + (0.33 * humidity) - 4;

    if (HI <= 27) {
        status = "Comfortable / Cool";
    } else if (HI <= 32) {
        status = "Warm";
    } else if (HI <= 37) {
        status = "Hot";
    } else if (HI <= 41) {
        status = "Very Hot / Caution";
    } else {
        status = "Extreme Heat / Danger";
    }

    alert("Heat Index: " + HI.toFixed(1) + "°C\nStatus: " + status);
}

function instruct() {
    document.getElementById("note").innerHTML =
    "Enter temperature and humidity, then click Check.";
}