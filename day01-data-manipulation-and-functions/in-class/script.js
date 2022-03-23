// Helper function
let fahrenheitToCelsius = function (fahrenheit) {
  let celcius = ((fahrenheit - 32) * 5) / 9;
  return celcius;
};

var fahrenheitToCelsiusMain = function (input) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var myOutputValue =
    "The temperature in Celsius is " + fahrenheitToCelsius(input);
  return myOutputValue;
};

// Convert km to miles
let convertKmToMiles = function (distanceInKm) {
  let distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

// Calc fuel cost for Ferrari
let calculateTotalFuelCostForFerrari = function (triplengthInMiles) {
  let price = 2.2;
  let fuelCost = price * triplengthInMiles;
  return fuelCost;
};

var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  let distanceInMiles = convertKmToMiles(input);
  let fuelCost = calculateTotalFuelCostForFerrari(distanceInMiles);
  var myOutputValue = `Total fuel cost for the trip is $${fuelCost}`;
  return myOutputValue;
};

// Calc fuel cost for Train
let calculateTotalFuelCostComfortable = function (
  triplengthInMiles,
  costPerLitreOfFuel
) {
  let fuelCost = costPerLitreOfFuel * triplengthInMiles;
  return fuelCost;
};

var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  let distanceInMiles = convertKmToMiles(input);
  let fuelCostforTrain = calculateTotalFuelCostComfortable(
    distanceInMiles,
    2.0
  );
  let fuelCostforFerrari = calculateTotalFuelCostForFerrari(distanceInMiles);
  let savings = fuelCostforFerrari - fuelCostforTrain;
  var myOutputValue = `User saves $${savings}.`;
  return myOutputValue;
};

var durationIceMachine = function (guest) {
  var drinksPerGuest = 2;
  var iceCubesPerDrink = 4;
  var iceCubeWeightInPounds = 1.5 * 0.00220462;
  var duration =
    5 / (drinksPerGuest * iceCubesPerDrink * iceCubeWeightInPounds);
  return duration;
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.

  var myOutputValue =
    "Total duration is " + durationIceMachine(input) + " hours";
  return myOutputValue;
};

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
