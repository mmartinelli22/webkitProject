export default class Trips {
    constructor(trips) {
        this.tripsData = trips;
    }
    getAllTrips(user) {
        const allTrips = this.tripsData.filter(data => {
            return data.userID === user.id
        })
        const sortTrips = allTrips.sort((trip1, trip2) => {
            const firstDate = new Date(trip1.date)
            const secondDate = new Date(trip2.date)
            return firstDate - secondDate;
        })
        return sortTrips;
    }
    getPreviousTrips(usersTrip, date) {
        return usersTrip.filter(trip => {
            let today = new Date(date)
            let tripDate = new Date(trip.date)
            return tripDate < today;
        })
    }
    getFutureTrips(userTrips, date) {
        return userTrips.filter(trip => {
            let today = new Date(date);
            let tripDate = new Date(trip.date)
            return tripDate > today
        })
    }

    getPendingTrips(userTrips) {
        let pendingTrips = userTrips.filter(trip => {
            return trip.status === "pending"
        })
        if (!pendingTrips) {
            return false;
        } else {
            return pendingTrips;
        }
    }

    getTotalSpent(userTrips, destinations, date) {
        let tripsForYear = userTrips.filter(trip => {
            return parseInt(trip.date.split("/")[0]) === parseInt(date.split("/")[0])
        })
        return tripsForYear.reduce((total, data) => {
            destinations.destinationsData.forEach(destination => {
                if (data.destinationID === destination.id) {
                    let costOfTrip = (data.duration * destination.estimatedLodgingCostPerDay) +
                        (data.travelers * destination.estimatedFlightCostPerPerson);
                    total += costOfTrip
                    total += Math.round((costOfTrip * .10))
                };
            })
            return total;
        }, 0)
    }
}