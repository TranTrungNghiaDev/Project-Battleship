class Ship {
    constructor(length) {
        this.length = length;
        this.numberOfHit = 0;
        this.sunk = false;
    }
    hit() {
        this.numberOfHit++;
    }
    isSunk(){
        if(this.length == this.numberOfHit) {
            this.sunk = true;
        }
        else {
            this.sunk = false;
        }
        return this.sunk
    }
}

export {Ship}