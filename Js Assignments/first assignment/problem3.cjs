const invent = require("./cars");

function sortListByModel(invent){
    
    const sortedList = invent.sort((a, b) =>
    a.car_model.localeCompare(b.car_model));
    console.log(sortedList);

}

module.exports = sortListByModel;