const data = {
    locations: [],
    get location() {
        return this._location;
    },
    set location(value) {
        value = value.trim();
        this._location = value.trim();
        this.locations.push(this._location);
    }
};

//code that uses the data object

data.location = '     Philadelphia             ';
data.location = ' New York';
console.log(data);