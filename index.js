class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        console.log(`1: ${this.name}, ${this.age} years old.`)
    }
}

const personOne = new Person('John', 19);
personOne.describe();

/* class Clock {
    constructor ({ template }) {
        this.template = template;
    }

    render() {
        this.date = new Date();
        let hours = this.date.getHours();
        if (hours < 10) hours = '0' + hours;
        
        let mins = this.date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        
        let secs = this.date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        let output = this.template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    };
    
    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    };
}

let clock = new Clock({template: 'h:m:s'});
clock.start(); */

class TV {
    constructor (brand, channel = 1, volume = 50) {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }

    status() {
        console.log(`${this.brand} at channel ${this.channel}, volume ${this.volume}`);
    }

    volumeUp(increment = 1) {
        if (this.volume + increment <= 100) {
            this.volume = this.volume + increment;
        }
    }

    volumeDown(increment = 1) {
        if (this.volume - increment >= 0) {
            this.volume = this.volume - increment;
        }
    }

    shuffleChannel() {
        this.channel = Math.floor(Math.random() * 50 + 1);
    }

    reset() {
        this.channel = 1;
        this.volume = 50;
    }
}

const panasonic = new TV('Panasonic', 8, 75);
panasonic.status();
panasonic.shuffleChannel();
panasonic.status();
panasonic.volumeUp();
panasonic.status();
panasonic.volumeDown(76);
panasonic.status();

class Cylinder {
    constructor (height, diameter) {
        this.height = height;
        this.diameter = diameter;
        this.volume = (Math.PI * (diameter / 2) ** 2 * height).toFixed(4);
    }

    showVolume() {
        console.log(`The volume of the cylinder is ${this.volume}`)
    }
}

const cylinder = new Cylinder(4, 3);
console.log(cylinder);
cylinder.showVolume();