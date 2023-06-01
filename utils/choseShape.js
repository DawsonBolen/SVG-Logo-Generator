


function chooseShape(response) {
    let chosenShape;
    if (response.shape === "Triangle") {
       chosenShape = new Triangle(response.shapecolor, response.name, response.textcolor);
       return chosenShape.render();
    } else if (response.shape === "Circle") {
        chosenShape = new Circle(response.shapecolor, response.name, response.textcolor);
        return chosenShape.render();
    } else if (response.shape === "Square") {
        chosenShape = new Square(response.shapecolor, response.name, response.textcolor);
        return chosenShape.render();
    } else {
        return "error";
    }
}
