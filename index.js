// Code your solution in this file!

const HQ = 42;

function distanceFromHqInBlocks(someValue) {
    return Math.abs(HQ - someValue);

}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;

}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    return Math.abs(startingBlock - endingBlock) * 264;

}

function calculatesFarePrice(start, destination){
    let thisTrip = distanceTravelledInFeet(start,destination)

    if (thisTrip < 400) {
        return 0;

    }else if (thisTrip >= 400 && thisTrip < 2000){
        return .02 * (thisTrip - 400);

    }else if (thisTrip >= 2000 && thisTrip < 2500){
        return 25;

    }else{
        return 'cannot travel that far';
    }

}

done();