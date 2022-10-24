let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 40,
    rareCars: 2
};
for(let x in statistics){
    if(x[0] == 'r' || statistics[x] % 2 == 1){
        console.log(x + ": "+ statistics[x]);
    }
}
