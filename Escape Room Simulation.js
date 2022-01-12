
var readlineSync = require('readline-sync');

const escapeartistName = readlineSync.question("Please state your name. ");
console.log(`${escapeartistName}, welcome to the Escape Room Simulation!`);

//Boolean Flags
var hasKey = false;
var isAlive = true;

while (isAlive == true){
    const menuID = readlineSync.keyIn('Option 1 to Put your hand in the hole, or, Option 2 to Find the key, or, Option 3 to Open the door: ', {limit: '$<1-3>'});
    if (menuID == 1){
        //Escape artist puts hand in the hold
        //Escape artist has died.  Game Over.
        console.log(`${escapeartistName}, you put your hand in the hole and died.  GAME OVER!`);
        isAlive = false;
    
    } else if(menuID == 2 && hasKey == false){
        //Escape artist selected option 2 and has not found the key yet.
        console.log(`${escapeartistName}, well done you found the key. Move on to option 3!!`);
        hasKey = true; 
   
    } else if (menuID == 2 && hasKey == true){
        //Escape artist selected option 2 and already has the key in their possession.
        console.log(`${escapeartistName}, you have already found the key, hurry and proceed to option 3!!`);
    
    } else if (menuID == 3 && hasKey == false){
        //Escape artist chose option 3 but has not found the key.
        console.log(`${escapeartistName}, you have not found the key yet.  You must select option 2 first and select this option again later.`);
    
    } else if (menuID == 3 && hasKey == true){
        //Escape artist chose option 3 but has not found the key.
        console.log(`${escapeartistName}, you found the key and opened the door to escape!  Congratulations, you WIN!!`);
        isAlive = false; 
    }
}