function oldCarList(invent,year){
    const List = [];
    for (i=0; i<invent.length; i++){
        if(!invent[i].hasOwnProperty('car_year'))  {
            continue;
        }
        if (invent[i].car_year<2000){
            List.push(invent[i].car_year);
        }
    }
    console.log("The number of Cars older than the year 2000: " + List.length + "\nThe list of cars older then the year 2000: " + List);
} 

module.exports = oldCarList;