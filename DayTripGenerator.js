//Day Trip Generator project
//Make a generator that will randomly select things 
//for a vacation, and give the user an option to change 
//options to a different random output

//This function will be used to generate a random number
//from 0 - how ever long the array is
function getRandom(array){
    return array[Math.floor(Math.random()*array.length)];
}

//Destination examples
let destinationArray = ["Colorado", "Florida", "Georgia", "Illinois", "California", "Alabama", "Canada", "Gilead", ];

//This function will randomly select
//a destination for the day trip
//by calling the getRandom
function randomDestination(array){
    getRandom(array);
}

//Restaurant examples
let restaurantArray = ["T.G.I. Fridays", "Wings n Rings", "Bar Louie", "Mcdonalds", "Culvers", "Wingstop", "Pizzahut"];

//This function will randomly select
//a restaurant for the day trip 
function randomRestaurant(array){
    getRandom(array);
}

//Transportation examples
let transportationArray = ["Walk", "Bike", "Plane", "Car", "Bus", "Boat", "Horse"];

//This function will randomly select
//a method of transportation for the day trip 
function randomTransportation(array){
    getRandom(array);
}

//Entertainment examples
let entertainmentArray = ["Movie", "Beach", "Baseball game", "Football game", "Volleyball game", "Arcade", "Waterpark", "Theme park", "Museum", "Go-kart", ];

//This function will randomly select
//an entertainment for the day trip
function randomEntertainment(array){
    getRandom(array);
}

//This function will allow the user to re-select 
//Dest, Restr,transp, entertain
function randomReselect(string){
    if(string === "1"){
        let newDestination = getRandom(destinationArray);
        while(currentDestination == newDestination){
            newDestination = getRandom(destinationArray);
        }
        if(currentDestination != newDestination){
            currentDestination = newDestination;
        } 
    }
    else if(string === "2"){
        let newRestaurant = getRandom(restaurantArray);
        while(currentRestaurant == newRestaurant){
            newRestaurant = getRandom(restaurantArray);
        }    
        if(currentRestaurant != newRestaurant){
            currentRestaurant = newRestaurant;
        }
    }
    else if(string === "3"){
        let newTransportation = getRandom(transportationArray);
        while(currentTransportation == newTransportation){
            newTransportation = getRandom(transportationArray);
        }
        if(currentTransportation != newTransportation){
            currentTransportation = newTransportation;
        }
    }
    else if(string === "4"){
        let newEntertainment = getRandom(entertainmentArray);
        while(currentEntertainment == newEntertainment){
            newEntertainment = getRandom(entertainmentArray);
        }
        if(currentEntertainment != newEntertainment){
            currentEntertainment = newEntertainment
        }
    }
}


//This part of the code will allow user prompts to select the proper options

//First random set of options
let currentDestination = getRandom(destinationArray);
let currentRestaurant = getRandom(restaurantArray);
let currentTransportation = getRandom(transportationArray);
let currentEntertainment = getRandom(entertainmentArray);
let userChoice = "No";

while (userChoice == "No" || userChoice == "no"){
    
    userChoice = prompt(`Destination:   ${currentDestination} \nRestaurant:   ${currentRestaurant} \nTransportation:   ${currentTransportation} \nEntertainment:   ${currentEntertainment} \nAre you happy with these options? \nPlease enter Yes or No.`);
    
    if(userChoice == "No" || userChoice == "no"){
        randomReselect(prompt("Which of the following you would like to change; \nEnter '1' for Destination, \n'2' for Restaurant, \n'3' for Transportation, \n'4' for Entertainment?"));
    }
    else if(userChoice == "Yes" || userChoice == "yes"){
        console.log(`Your day trip is complete! Your destination will be ${currentDestination}. You will be eating at ${currentRestaurant}. Your mode of transportation will be ${currentTransportation}. And your form of entertainment will be ${currentEntertainment}. I hope you enjoy your trip!`);
        break;
    }
}




