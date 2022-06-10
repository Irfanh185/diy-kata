const reachDestination = (distance, speed) => {
  const destinationTime = distance / speed;
  const result = Math.round(destinationTime / 0.5) * 0.5;
  return `I should be there in ${result} hours.`;
};
console.log(Math.round(4.4 / 0.5) * 0.5);
console.log(reachDestination(80, 56));
module.exports = reachDestination;
