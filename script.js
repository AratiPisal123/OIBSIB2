function convertTemp() {
    const tempinput = document.getElementById("temperature").value;
    const typeselect = document.getElementById("type").value;
    const resultis = document.getElementById("result");
    
  
    if (isNaN(tempinput)) {
      resultis.textContent = "Please enter a valid number.";
      return;
    }
    const temperature = parseFloat(tempinput);
    if (typeselect === "Celsius") {
      const fahrenheit = (temperature * 9/5) + 32;
      const kelvin = temperature + 273.15;
      resultis.textContent = `${temperature}°C = ${fahrenheit.toFixed(2)}°F And ${temperature}°C = ${kelvin.toFixed(2)}K.`;
    } 
    else if (typeselect === "Fahrenheit") {
      const celsius = (temperature - 32) * 5/9;
      const kelvin = (temperature - 32) * 5/9 + 273.15;
      resultis.textContent = `${temperature}°F = ${celsius.toFixed(2)}°C And ${temperature}°F = ${kelvin.toFixed(2)}K.`;
    } 
    else if (typeselect === "Kelvin") {
      const celsius = temperature - 273.15;
      const fahrenheit = (temperature - 273.15) * 9/5 + 32;
      resultis.textContent = `${temperature}K = ${celsius.toFixed(2)}°C And ${temperature}K = ${fahrenheit.toFixed(2)}°F.`;
    }
  }
  