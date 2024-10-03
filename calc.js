const display = document.getElementById("display");
function appendToDisplay(value) {
    if (value === "=") {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "";
}