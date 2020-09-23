var flippedCounter = 0;
var newTileID = "";
var firstTileID = "";

var pictures = [""]; //contains the list of assignable pictures 

function flip(tileID) { //onclick of tiles calls this function, with it's own id (for example: b4), that's stored in tileID
    flippedCounter++;
    newTileID = tileID; //got tileID gets stored in newTileID. This is needed to check it against the previous tile.

    if (flippedCounter == 1) {
        firstTileID = newTileID; //if this is the first tile clicked, store it as the one to compare to

        console.log("first click");
        console.log("first:" + firstTileID);
        console.log("current:" + newTileID); //? I think this was for debugging but I'll leave them in here
    }

    if (flippedCounter == 2) {
        //TODO add checker logic. This needs the pictures and the randomiser to be done. 
        console.log("second click");
        flippedCounter = 0;

        if (newTileID == firstTileID) { //if the first and second click ids match, seemingly nothing happens, but I do a log just to be sure
            console.log("clicked the same tile twice. this...does nothing.");
            flippedCounter = 1; //! this should work but it needs some testing 
        }
        console.log("first:" + firstTileID);
        console.log("current:" + newTileID); //? I think this was for debugging but I'll leave them in here
    }
}