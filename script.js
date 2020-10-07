var flippedCounter = 0;
var newTileID = "";
var firstTileID = "";

var pictureTitles = ["calculator", "diamond", "fish", "hotdog", "orange", "pyramid", "sun", "viking"];
var tileIdTable = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var pictureAssignmentTable = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

newGame();

function flip(tileID) { //onclick of tiles calls this function, with it's own id (for example: b4), that's stored in tileID

    flippedCounter++;
    newTileID = tileID; //got tileID gets stored in newTileID. This is needed to check it against the previous tile.

    if (flippedCounter == 1) {
        showImg(tileID);
        firstTileID = newTileID; //if this is the first tile clicked, store it as the one to compare to

        console.log("first click");
        console.log("first:" + firstTileID);
        console.log("current:" + newTileID); //? I think this was for debugging but I'll leave them in here
    }

    if (flippedCounter == 2) {
        showImg(tileID);
        //TODO add checker logic. This needs the pictures and the randomiser to be done. 
        console.log("second click");
        setTimeout(hideAllImgs, 500);
        console.log("first:" + firstTileID);
        console.log("current:" + newTileID); //? I think this was for debugging but I'll leave them in here
    }
}

function showImg(tileID) {
    var i = tileID.charAt(1);
    document.getElementById(tileID).setAttribute("style", "transform: rotate3d(0, 1, 0, -180deg); background-image:url('images/" + pictureAssignmentTable[i] + ".png');");
}

function hideImg(tileID) {
    document.getElementById(tileID).style.backgroundColor = "#443737";
    document.getElementById(tileID).style.backgroundImage = "";
}

function hideAllImgs() {
    for (var i = 0; i < 16; i++) {
        try {
            document.getElementById('b' + i).style.backgroundColor = "#443737";
            // document.getElementById('b' + i).setAttribute("style", "background-image:url(''); rotate3d(0, 1, 0, 180deg");
            document.getElementById('b' + i).setAttribute("style", "transform: rotate3d(0, 1, 0, 180deg;)");
            document.getElementById('b' + i).style.backgroundImage = "";
        } catch (e) {
            continue;
        }
    }
    flippedCounter = 0;
}


function checkStatus(tileID, counter) {
    if (newTileID == firstTileID) {
        //console.log("clicked the same tile twice. this...does nothing.");
        return true;
    }
}

function newGame() {
    recoverTiles();
    hideAllImgs();
    generatePairs();
}

function hideTile(tileID) {
    var element = document.getElementById(tileID);
    var hiddenPlaceholder = document.createElement("div");
    hiddenPlaceholder.className = "hiddenBox";
    //    hiddenPlaceholder.setAttribute("style", "")
    element.parentNode.replaceChild(hiddenPlaceholder, element);
}


function generatePairs() {
    var assignmentIndexHelper = 0;
    var tableIndexHelper = 0;

    for (var i = 0; i < tileIdTable.length; i++) {
        tileIdTable[i] = 'b' + i;
        console.log(tileIdTable[i]);
    }

    shuffle(tileIdTable);
    tileIdTable.forEach(element => {
        console.log(element);
    });

    do {
        tableIndexHelper++;

        pictureAssignmentTable[tableIndexHelper - 1] = pictureTitles[assignmentIndexHelper];
        tableIndexHelper++;
        pictureAssignmentTable[tableIndexHelper - 1] = pictureTitles[assignmentIndexHelper];

        assignmentIndexHelper++;
    }
    while (tableIndexHelper < 16);

    console.log("---------------------");
    tileIdTable.forEach(element => {
        console.log(element);
    });

    console.log("---------------------");
    pictureAssignmentTable.forEach(element => {
        console.log(element);
    });


}

//Fisher-Yates shuffle
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function recoverTiles() {
    const wrapper = document.getElementById("wrapper");
    wrapper.innerHTML = '';
    for (var i = 0; i < 16; i++) {
        wrapper.innerHTML += "<div class=box id=b" + i + " onclick=flip('b" + i + "')></div>"
    }
}

function hideTesting() {
    var element = document.getElementById('b1');
    var hiddenPlaceholder = document.createElement("div");
    hiddenPlaceholder.className = "hiddenBox";
    //    hiddenPlaceholder.setAttribute("style", "")
    element.parentNode.replaceChild(hiddenPlaceholder, element);
}