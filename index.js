function distanceFromHqInBlocks(streetNumber) {
  const distance = Math.abs(streetNumber - 42);
  return distance;
}

console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(manhattanBlocks) {
  const hq = 42;
  const distance = Math.abs(manhattanBlocks - hq) * 264;
  return distance;
}

console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(start, destination) {
  const company = 264;
  const distance = Math.abs(start - destination) * company;
  return distance;
}

console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));

function calculatesFarePrice(start, destination) {
  const totalFeet = Math.abs(destination - start) * 264;
  const remainingFeet = totalFeet - 400;

  if (start >= 0 && destination >= 0 && remainingFeet <= 0) {
    return 0;
  } else if (remainingFeet <= 1600) {
    const farePrice = remainingFeet * 0.02;
    return farePrice;
  } else if (remainingFeet <= 2000) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
