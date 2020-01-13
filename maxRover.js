// Rover Object Goes Here
// ======================

let rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
};

//console.log(rover);

// ======================

function turnLeft(rover) {
    console.log("turnLeft was called!");

    switch (rover) {
        case "N": rover = "W";
            console.log("Rover is now facing West");
            break;
        case "W": rover = "S"
            console.log("Rover is now facing South");
            break;
        case "S": rover = "E"
            console.log("Rover is now facing East");
            break;
        case "E": rover = "N"
            console.log("Rover is now facing North");
            break;
    }
}

//console.log(turnLeft);
//turnLeft("W");


function turnRight(rover) {
    console.log("turnRight was called!")

    switch (rover) {
        case "N": rover = "E";
            console.log("Rover is now facing East");
            break;
        case "E": rover = "S";
            console.log("Rover is now facing South");
            break;
        case "S": rover = "W";
            console.log("Rover is now facing West");
            break;
        case "W": rover = "N";
            console.log("Rover is now facing North");
            break;
    }
}

//console.log(turnRight);
turnRight("W");

function moveForward(rover) {
    console.log("moveForward was called")

    switch (rover) {
        case "N": rover.y--;
            console.log("Rover is moving forward to the north");
            break;
        case "W": rover.x--;
            console.log("Rover is moving forward to the west");
            break;
        case "S": rover.y++;
            console.log("Rover is moving forward to the south");
            break;
        case "E": rover.x++;
            console.log("Rover is moving forward to the east");
            break;
    }
}

//console.log(moveForward);

//moveForward("S");

function moveBackward(rover) {
    console.log("moveBackward was called")

    switch (rover) {
        case "N": rover.y++;
            console.log("Rover is moving backward to the north");
            break;
        case "W": rover.x++;
            console.log("Rover is moving backward to the west");
            break;
        case "S": rover.y--;
            console.log("Rover is moving backward to the south");
            break;
        case "E": rover.x--;
            console.log("Rover is moving backward to the east");
            break;
    }
}

//console.log(moveBackward);
//moveBackward("S");

function command(l, r, f, b) {

    for (let i = 0; i < command.length; i++) {
        let command = commands[i];
        switch (command) {
            case "l": turnLeft(rover);
                break;
            case "r": turnRight(rover);
                break;
            case "f": moveForward(rover);
                break;
            case "b": moveBackward(rover);
                break;
        }
    }
};

