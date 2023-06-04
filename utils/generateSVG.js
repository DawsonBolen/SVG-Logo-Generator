class Shapes {
    constructor(shapecolor, name, textcolor) {
        this.shapecolor = shapecolor;
        this.textcolor = textcolor;
        this.name = name;
    }
}

class Triangle extends Shapes {
    constructor(shapecolor, name, textcolor) {
        super(shapecolor, name, textcolor);
    };
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.shapeColor}"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textcolor}">${this.name}</text>
    </svg>`
    }
}


class Circle extends Shapes {
    constructor(shapecolor, name, textcolor) {
        super(shapecolor, name, textcolor);

    };

    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" width="200" height="200" fill="${this.shapecolor}"/>
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textcolor}">${this.name}</text>
    </svg>`
    }
}

class Square extends Shapes {
    constructor(shapecolor, name, textcolor) {
        super(shapecolor, name, textcolor);

    };

    render() {
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect  width="200" height="200" fill="${this.shapecolor}"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textcolor}">${this.name}</text>
    </svg>
    `
    }
}







module.exports = { Triangle, Square, Circle };

