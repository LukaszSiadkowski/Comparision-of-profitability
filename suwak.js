
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
    
// let prices = {
//       conbustion: "",
//       hybrid: "",
// }
 
output.innerHTML = slider.value;
output2.innerHTML = slider2.value;

slider.oninput = function() {
  output.innerHTML = this.value;

// console.log(this.value)
}

// console.log(slider.oninput());
// console.log(slider.oninput(this.value))

slider2.oninput = function() {
  output2.innerHTML = this.value;
  console.log(this.value)

}
// console.log(slider2.oninput(this.value));

// function dodawanie () {
//   (slider.oninput(this.value)) + (slider2.oninput(this.value))
// }

// dodawanie();

// console.log((slider.oninput(this.value))+(slider2.oninput(this.value)));

function calculateFuelPrice () {
  let prices = {
    conbustion: " ",
    hybrid: " ",
  }
  prices.conbustion = (slider.oninput(this.value)/100 * fuel.conbustion.city) + (slider2.oninput(this.value)/100 * fuel.conbustion.upstate) * fuel.price
  prices.hybrid = (slider.oninput(this.value)/100 * fuel.hybrid.city) + (slider2.oninput(this.value)/100 * fuel.hybrid.upstate) * fuel.price
  
  
  // console.log("silnik spalinwy", prices.conbustion , "silnik hybrydowy", prices.hybrid)
  }
  




















// const iloscKm = document.getElementById("textPrzebiegu");

// const textPrzebiegu = document.getElementById("przebieg");
// const textInInput2 = document.getElementById("textInput2");


// function updateTextInput(val) {
//     document.getElementById('textInput').value=val; 
//   }

//   function updateTextInput2(val) {
//       let tmpText

//       textInInput2.value=val;
//     // document.getElementById('textInput2').value=val; 
//     if (textInInput2.value > 1) {tmpText = `Samochod przejechal`}

//     textPrzebiegu.innerHTML = tmpText;
// }
