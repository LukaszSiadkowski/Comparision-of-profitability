
var slider = document.getElementById("myRange");
var slider2 = document.getElementById("myRange2");
var output = document.getElementById("demo");
var output2 = document.getElementById("demo2");



const fuel = {
  price: 5, 
  // 5 to jest cena za 1 l benzyny
  conbustion:{
    upstate: 5,
  // 5 to jest ilosc litrow na 100 km poza miastem
    city: 8,
  // 8 to ilosc litrow na 100 km w miescie
  },
  hybrid: {
    upstate: 7,
    // 7 to ilosc litrow na 100 km poza miastem 
    city: 4,
    // 4 to ilosc litrow na 100 km w miescie
    }
    }
  
// Zalozenie: jesli jezdzimy wiecej w miescie to bardziej oplacalna jest hybryda, jesli jezdzimy wiecej w trasie to bardziej oplacalny jest spalinowy
    
output.innerHTML = slider.value;
output2.innerHTML = slider2.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  return this.value
}

slider2.oninput = function() {
  output2.innerHTML = this.value;
  return this.value
}



function calculateFuelPrice () {
  let prices = {
    conbustion: " ",
    hybrid: " ",
  }
  prices.conbustion = (slider.oninput()/100 * fuel.conbustion.city) + (slider2.oninput()/100 * fuel.conbustion.upstate) * fuel.price
  prices.hybrid = (slider.oninput()/100 * fuel.hybrid.city) + (slider2.oninput()/100 * fuel.hybrid.upstate) * fuel.price
  return prices
  }
  
