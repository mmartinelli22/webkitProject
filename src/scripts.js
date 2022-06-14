// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import Traveler from "../src/Traveler.js"
import Trips from "../src/TripsRepo.js"


console.log('This is the JavaScript entry file - your code begins here.');
let allTravelersData;
let allTripsData;

const tripsPromise = fetchApiData('http://localhost:3001/api/v1/trips');



const durationInput = document.querySelector("#trip-duration");
const destinationInput = document.querySelector("#trip-destination");
const travelersInput = document.querySelector("#travelers");
const displayTripCost = document.querySelector("#trip-cost");




const buildPage = (data) => {
    tripsData = new Trips(data[2].trips);
    thisUser = new Traveler(data[1]);
    travlersData = new Travelers(data[0].travelers);

}

const createUserTrips = () => {
    userTrips = allTripsData.getAllTrips(currentUser);
    pastUserTrips = allTripsData.getPastTrips(userTrips, currentDate);
    futureUserTrips = allTripsData.getFutureTrips(userTrips, currentDate);
    pendingUserTrips = allTripsData.getPendingTrips(userTrips)
}