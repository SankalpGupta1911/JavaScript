function lastCar(invent){
    last = invent.length - 1;
    console.log("Last car is a " + invent[last].car_make + " " + invent[last].car_model );
}

module.exports = lastCar;