function gantiTema() {
    let option = document.getElementById("tema");
  
  if (option.options[option.selectedIndex].value == "black") {
    document.body.style.background = "black";
    document.body.style.color = "white";
  }
  else if (option.options[option.selectedIndex].value == "white") {
        document.body.style.background = "white";
        document.body.style.color = "black";
    
  }
  }
  
  function gantiCuaca() {
    let option = document.getElementById("cuaca");
  
  if (option.options[option.selectedIndex].value == "sunny") {
        document.getElementById("iklim").innerHTML = "It is nice and sunny outside today. Wear shorts! Goto the beach, or park, and get an ice cream";
  }
  else if (option.options[option.selectedIndex].value == "rainy") {
        document.getElementById("iklim").innerHTML = "Rain is falling outside, take a rain coat and a brolly, and don't stay out for too long";
    
  }
  }
  
  function rumus (){
  let number =  document.getElementById("factorial");
  
  let result = 1;
  
    for(let i = 1; i <= number.value; i++) {
      result *= i;
    }
  
    document.getElementById("result").innerHTML = `${result} `;
  
  }