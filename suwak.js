
var slider = document.getElementById("myRange");
var slider2 = document.getElementById("myRange2");
var output = document.getElementById("demo");
var output2 = document.getElementById("demo2");



const fuel = {
  price: 5, 
  // 5 to jest cena za 1 l benzyny .... 5 is a price for a 1 liter of petrol
  conbustion:{
    upstate: 5,
  // 5 to jest ilosc litrow na 100 km poza miastem ... 5 is a amount of petrol liters for a 100 km outside of a city
    city: 8,
  // 8 to ilosc litrow na 100 km w miescie .... 8 is a amount of petrol liters for a 100 km in the city
  },
  hybrid: {
    upstate: 7,
    // 7 to ilosc litrow na 100 km poza miastem ... 7 is a amount of petrol liters for a 100 km outside of a city
    city: 4,
    // 4 to ilosc litrow na 100 km w miescie ... 4 is a amount of petrol liters for a 100 km in the city
    }
    }
  
// Zalozenie: jesli jezdzimy wiecej w miescie to bardziej oplacalna jest hybryda, jesli jezdzimy wiecej w trasie to bardziej oplacalny jest spalinowy... 
// Assumption: if we drive more in the city then more proficient is car with hybrid engine, if we drive more outside of the city more pro
    
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
    conbustion: '',
    hybrid: '',
  }
  prices.conbustion = (slider.oninput()/100 * fuel.conbustion.city) + (slider2.oninput()/100 * fuel.conbustion.upstate) * fuel.price
  prices.hybrid = (slider.oninput()/100 * fuel.hybrid.city) + (slider2.oninput()/100 * fuel.hybrid.upstate) * fuel.price
  
  let a = parseInt(prices.conbustion);
  let b = parseInt(prices.hybrid);

  if (a > b) {
    console.log("Car with hybrid engine is cheaper in exploitation then a car with conbustion engine with given data")
  }
  else {
    console.log("Car with conbustion engine is cheaper in exploitation then a car with hybrid engine with given data")
  }
 }
  