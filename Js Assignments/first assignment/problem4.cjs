function yearList(invent){
    const List = [];
    for (i=0; i<invent.length; i++){
        if(!invent[i].hasOwnProperty('car_year'))  {
            continue;
        }
        List.push(invent[i].car_year);
    }
    console.log(List);
}

module.exports = yearList;