

//Destination examples
let destinationArray = ["Colorado", "Florida", "Georgia", "Illinois", "California", "Alabama", "Canada", "Gilead", ];

//This function will randomly select
//a destination for the day trip 
function randomDestination(array){
    return array[Math.floor(Math.random()*array.length)];
}

//Restaurant examples
let restaurantArray = ["T.G.I. Fridays", "Wings n Rings", "Bar Louie", "Mcdonalds", "Culvers", "Wingstop", "Pizzahut"];

//This function will randomly select
//a restaurant for the day trip 
function randomRestaurant(array){
    return array[Math.floor(Math.random()*array.length)];
}

//Transportation examples
let transportationArray = ["Walk", "Bike", "Plane", "Car", "Bus", "Boat", "Horse"];

//This function will randomly select
//a method of transportation for the day trip 
function randomTransportation(array){
    return array[Math.floor(Math.random()*array.length)];
}

//Entertainment examples
let entertainmentArray = ["Movie", "Beach", "Baseball game", "Football game", "Volleyball game", "Arcade", "Waterpark", "Theme park", "Museum", "Go-kart", ];

//This function will randomly select
//an entertainment for the day trip
function randomEntertainment(array){
    return array[Math.floor(Math.random()*array.length)];
}

//This function will allow the user to re-select 
//Dest, Restr,transp, entertain
function randomReselect(string){
    if(string === "Destination"){
        let newDestination = randomDestination(destinationArray);
        while(currentDestination == newDestination){
            newDestination = randomDestination(destinationArray);
        }
        if(currentDestination != newDestination){
            currentDestination = newDestination;
        } 
    }
    else if(string === "Restaurant"){
        let newRestaurant = randomRestaurant(restaurantArray);
        while(currentRestaurant == newRestaurant){
            newRestaurant = randomRestaurant(restaurantArray);
        }    
        if(currentRestaurant != newRestaurant){
            currentRestaurant = newRestaurant;
        }
    }
    else if(string === "Transportation"){
        let newTransportation = randomTransportation(transportationArray);
        while(currentTransportation == newTransportation){
            newTransportation = randomTransportation(transportationArray);
        }
        if(currentTransportation != newTransportation){
            currentTransportation = newTransportation;
        }
    }
    else if(string === "Entertainment"){
        let newEntertainment = randomEntertainment(entertainmentArray);
        while(currentEntertainment == newEntertainment){
            newEntertainment = randomEntertainment(entertainmentArray);
        }
        if(currentEntertainment != newEntertainment){
            currentEntertainment = newEntertainment
        }
    }
}


//This part of the code will allow user prompts to select the proper options

//First random set of options
let currentDestination = randomDestination(destinationArray);
let currentRestaurant = randomRestaurant(restaurantArray);
let currentTransportation = randomTransportation(transportationArray);
let currentEntertainment = randomEntertainment(entertainmentArray);
let userChoice = "No";

while (userChoice === "No"){
    
    userChoice = prompt(`Destination:   ${currentDestination} \nRestaurant:   ${currentRestaurant} \nTransportation:   ${currentTransportation} \nEntertainment:   ${currentEntertainment} \nAre you happy with these options? \nPlease enter Yes or No.`);
    
    if(userChoice === "No"){
        randomReselect(prompt("Please enter one of the following you would like to change; Destination, Restaurant, Transportation, or Entertainment?"));
    }
    else if(userChoice === "Yes"){
        console.log(`Your day trip is complete! Your destination will be ${currentDestination}. You will be eating at ${currentRestaurant}. Your mode of transportation will be ${currentTransportation}. And your form of entertainment will be ${currentEntertainment}. I hope you enjoy your trip!`);
        break;
    }
}

