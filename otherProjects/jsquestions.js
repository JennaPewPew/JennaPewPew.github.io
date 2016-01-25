
var degFahren = function(degCent){
     return (9.0/5.0) * degCent + 32;
}

var celsius = prompt("Enter temperature in Centigrade");
var fahren = degFahren(celsius);

console.log("The temperature is" + "" + fahren + "F");
