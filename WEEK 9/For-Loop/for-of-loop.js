var weathers = ["sunny", "rainy", "cloudy"]
var words = ""

for(weather of weathers ) {
    if(weather == "cloudy") {
        words += weather;
        break;
    }
words += weather + "\n"
}
  
console.log(words);


