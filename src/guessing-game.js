class GuessingGame {
    constructor() {
        this.arr = [];
        this.i;
        this.min;
        this.max;
        this.mid;
    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        return (this.mid = Math.round((this.min + this.max) / 2));
    }

    lower() {
        this.max = this.mid;
    }

    greater() {
        this.min = this.mid;
    }
}

module.exports = GuessingGame;
