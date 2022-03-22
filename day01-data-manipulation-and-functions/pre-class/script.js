var main = function (input) {
  var myOutputValue = "i like cheese and macaroni. <br/>the area is " + input;
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue = `hello ${input}, you look great today`;
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  const miles = 0.62;
  var distanceInMiles = input * miles;
  var roundedDistance = Math.floor(distanceInMiles);
  var myOutputValue = `Hi silly one! ${input} is equal to ${distanceInMiles} miles and rounded to ${roundedDistance}.`;
  return myOutputValue;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  let totalDelay = input;
  let totalTime = 2;
  const totalDistance = 400;
  let timeRequired = totalTime - totalDelay;
  let speed = totalDistance / timeRequired;
  var myOutputValue = speed;
  return myOutputValue;
};

var currentHourAngle = function (hour) {
  let hourAngle = (hour / 12) * 360;
  console.log(hourAngle);

  return hourAngle;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  let hourAngle = currentHourAngle(1);
  let minuteAngle = (input / 60) * 360;
  var myOutputValue = minuteAngle - hourAngle;
  return myOutputValue;
};
