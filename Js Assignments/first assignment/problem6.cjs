function BMWAndAudi(invent){
    const List = [];
    for (i=0; i<invent.length; i++){
        if(!invent[i].hasOwnProperty('car_year'))  {
            continue;
        }
        if (invent[i].car_make=="Audi" || invent[i].car_make=="BMW"){
            List.push(invent[i]);
        }
    }
    console.log(JSON.stringify(List));
}

module.exports = BMWAndAudi;