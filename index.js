const DegreeInput = document.getElementById("Degree-input"); //storing the degree in the DegreeInput Variable
const toFarenheit = document.getElementById("toFarenheit"); // Storing the Decision if someone clicked on the Celsius to farenheit
const toCelsius = document.getElementById("toCelsius");// Storing the Decision if someone clicked on the farenheit tp Celsius
const convertedResultLabel = document.getElementById("convertedResultLabel");//Storing the label place right side of the wrapper to display answer in the last
const notSelected = document.getElementById("notSelected"); //Storing if both the radio buttons are not selected to i can print the Message to select among them
let temperature; //calculating the temperature and storing in variable to make sure the results can be displayed

function convert(){ 
    if(toFarenheit.checked){
        if(DegreeInput.value > 999999999999){
        convertedResultLabel.style.fontSize = "1.3rem";
    }
        temperature = Number(DegreeInput.value);
        temperature = temperature * 5 / 9 + 32;
        convertedResultLabel.textContent = temperature.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        if(DegreeInput.value > 999999999999){
        convertedResultLabel.style.fontSize = "1.3rem";
    }
        temperature = Number(DegreeInput.value);
        temperature = (temperature - 32) * (5 / 9);
        convertedResultLabel.textContent = temperature.toFixed(1) + "°C";
    }
    else {
        convertedResultLabel.textContent = "You haven't Selected an unit !";
        convertedResultLabel.style.fontSize = "1.3rem";
    }

}

