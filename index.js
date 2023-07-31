// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(){
    return function(fare){
       return (fare)*5
    }
}

function fareDoubler(fare){
    return fare * 2
}

function fareTripler(fare){
    return fare * 3
}

function selectDifferentDrivers(drivers,selection){
     if(selection === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers)
     } else if (selection === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers)
     }
}