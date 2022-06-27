const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };


let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 73,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;

    },
    seatParty: function (newGuests) {
        // let seated = this.guestCount + newGuests; ---- my code
        this.guestCount = this.guestCount + newGuests;
    },
    removeParty: function (finished) {
        // let tableTurned = this.guestCount - finished; ---- my code
        this.guestCount = this.guestCount - finished;
    }
};

// seatParty
// removeParty



restaurant.seatParty(2);


console.log(restaurant.checkAvailability(4));

restaurant.removeParty(5);

console.log(restaurant.checkAvailability(4));