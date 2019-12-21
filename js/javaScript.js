//Homework 9 Java Script
//Name: Wyatt LaRose
//Student Email: Wyatt_LaRose@student.uml.edu
//Computer Science Email: wlarose@cs.uml.edu
//Affiliation: UMass Lowell Computer Science, Junior Year
//Scrabble using jquery
var score = 0;//var for score
var totalScore = 0;
var doubleScore = 1;
var randomArray = [0,0,0,0,0,0,0,0,0,1,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,5,5,6,6,6,7,7,8,8,8,8,8,8,8,8,8,9,10,11,11,11,11,12,12,13,13,13,13,13,13,14,14,14,14,14,14,14,14,15,15,16,17,17,17,17,17,17,18,18,18,18,19,19,19,19,19,19,20,20,20,20,21,21,22,22,23,24,24,25,26,26]
var totalTiles = 100;
var word1 = "";
var word2 = "";
	/*The data set of tiles to inspiration from https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse.js however modified
    	to include the img associated with them and use numbers instead of letters in the array*/
	var scrabbleTiles = [];
	scrabbleTiles[0] =  {"Val" : "A", "Score" : 1,"NumRemain" : 9 , "Img" : "images/Scrabble_Tile_A.jpg"};
	scrabbleTiles[1] =  {"Val" : "B", "Score" : 3,"NumRemain" : 2 , "Img" : "images/Scrabble_Tile_B.jpg"};
	scrabbleTiles[2] =  {"Val" : "C", "Score" : 3,"NumRemain" : 2 , "Img" : "images/Scrabble_Tile_C.jpg"};
	scrabbleTiles[3] =  {"Val" : "D", "Score" : 2,"NumRemain" : 4 , "Img" : "images/Scrabble_Tile_D.jpg"};
	scrabbleTiles[4] =  {"Val" : "E", "Score" : 1,"NumRemain" : 12, "Img" : "images/Scrabble_Tile_E.jpg"};
	scrabbleTiles[5] =  {"Val" : "F", "Score" : 4,"NumRemain" : 2 , "Img" : "images/Scrabble_Tile_F.jpg"};
	scrabbleTiles[6] =  {"Val" : "G", "Score" : 2,"NumRemain" : 3 , "Img" : "images/Scrabble_Tile_G.jpg"};
	scrabbleTiles[7] =  {"Val" : "H", "Score" : 4,"NumRemain" : 2 , "Img" : "images/Scrabble_Tile_H.jpg"};
	scrabbleTiles[8] =  {"Val" : "I", "Score" : 1,"NumRemain" : 9 , "Img" : "images/Scrabble_Tile_I.jpg"};
	scrabbleTiles[9] =  {"Val" : "J", "Score" : 8,"NumRemain" : 1 , "Img" : "images/Scrabble_Tile_J.jpg"};
	scrabbleTiles[10] =  {"Val" : "K", "Score" : 5,"NumRemain" : 1 , "Img" : "images/Scrabble_Tile_K.jpg"};
	scrabbleTiles[11] =  {"Val" : "L", "Score" : 1,"NumRemain" : 4 , "Img" : "images/Scrabble_Tile_L.jpg"};
	scrabbleTiles[12] =  {"Val" : "M", "Score" : 3,"NumRemain" : 2 , "Img" : "images/Scrabble_Tile_M.jpg"};
	scrabbleTiles[13] =  {"Val" : "N", "Score" : 1,"NumRemain" : 6 , "Img" : "images/Scrabble_Tile_N.jpg"};
	scrabbleTiles[14] =  {"Val" : "O", "Score" : 1,"NumRemain" : 8 , "Img" : "images/Scrabble_Tile_O.jpg"};
	scrabbleTiles[15] =  {"Val" : "P", "Score" : 3,"NumRemain" : 2 , "Img" : "images/Scrabble_Tile_P.jpg"};
	scrabbleTiles[16] =  {"Val" : "Q", "Score" : 10,"NumRemain" : 1 , "Img" : "images/Scrabble_Tile_Q.jpg"};
	scrabbleTiles[17] =  {"Val" : "R", "Score" : 1,"NumRemain" : 6 , "Img" : "images/Scrabble_Tile_R.jpg"};
	scrabbleTiles[18] =  {"Val" : "S", "Score" : 1,"NumRemain" : 4 , "Img" : "images/Scrabble_Tile_S.jpg"};
	scrabbleTiles[19] =  {"Val" : "T", "Score" : 1,"NumRemain" : 6 , "Img" : "images/Scrabble_Tile_T.jpg"};
	scrabbleTiles[20] =  {"Val" : "U", "Score" : 1,"NumRemain" : 4 , "Img" : "images/Scrabble_Tile_U.jpg"};
	scrabbleTiles[21] =  {"Val" : "V", "Score" : 4,"NumRemain" : 2 , "Img" : "images/Scrabble_Tile_V.jpg"};
	scrabbleTiles[22] =  {"Val" : "W", "Score" : 4,"NumRemain" : 2 , "Img" : "images/Scrabble_Tile_W.jpg"};
	scrabbleTiles[23] =  {"Val" : "X", "Score" : 8,"NumRemain" : 1 , "Img" : "images/Scrabble_Tile_X.jpg"};
	scrabbleTiles[24] =  {"Val" : "Y", "Score" : 4,"NumRemain" : 2 , "Img" : "images/Scrabble_Tile_Y.jpg"};
	scrabbleTiles[25] =  {"Val" : "Z", "Score" : 10,"NumRemain" : 1 , "Img" : "images/Scrabble_Tile_Z.jpg"};
	scrabbleTiles[26] =  {"Val" : "B", "Score" : 10,"NumRemain" : 2 , "Img" : "images/Scrabble_Tile_Blank.jpg"};
function randomTile(){ //Gives the random tile for creating hands, this returns a random number between 0-26 for the index of the actual array. the weights are based on how many tiles you have to choose from so if theres 9 A's theres 9 0's in the randomArray which then there will only be 8 0's after one has been chosen and the total number of tiles goes down.
n = (Math.floor(Math.random() * totalTiles));//gets random number between 0 and 99 (Which there are 99 positions in the array)
var temp;
temp = randomArray[n];
randomArray.splice(n, 1);//removes element from the array
totalTiles -= 1; //subtract 1 because you took away 1
return temp;
}
function findLetter(letter){ //This finds a letter when you pass it one, it is only really used for when the player enters a letter for the blank space, it finds the position in the array that would be the correct letter to get the right attributes from it
	var i =0;
	for(i=0;i<26;i++){
		if(scrabbleTiles[i].Val == letter){
			return i;
		}
	}

}
$(document).ready(function() {
	
    $( function() {
    	/*Give the player a random hand of tiles*/
    	var i;
		var tileIndex;
		var givenTiles = [];
		for(i = 1;i<=7;i++){
			tileIndex = randomTile();//random index to give from the object array
			if(scrabbleTiles[tileIndex].NumRemain > 0){ //tests to make sure you still have avalible tiles to give to the player, this should never happen because you are getting them from the random tile function which knows how many of each there are but its an extra saftey measure
				$("#letterTileImg"+i).attr("src", scrabbleTiles[tileIndex].Img); //set the imgs to the propper letters
				$("#letterTileImg"+i).attr("score", scrabbleTiles[tileIndex].Score); //set the score attribute to be refrenced later for the score
				$("#letterTileImg"+i).attr("letter", scrabbleTiles[tileIndex].Val);//set the letter attribute to refrence later for setting the board img correctly
				scrabbleTiles[tileIndex].NumRemain = scrabbleTiles[tileIndex].NumRemain - 1; //remove an avalible tile
			}else{
				i--;//decrease i incase you need another tile because you were out of the random
			}
		}
		/*-------------------------------------*/
		$("#letterTile1").draggable({revert: true}); // Makes the img tags dragable
		$("#letterTile2").draggable({revert: true});
		$("#letterTile3").draggable({revert: true});
		$("#letterTile4").draggable({revert: true});
		$("#letterTile5").draggable({revert: true});
		$("#letterTile6").draggable({revert: true});
		$("#letterTile7").draggable({revert: true});
		
		$("#boardSpace1").droppable({ //makes the board space a  object
      		drop: function( event, ui ) {
      			var activeTile = ui.draggable; //var for which tile to remove and add score of
      			if($(activeTile).children().attr("src") == "images/Scrabble_Tile_Blank.jpg"){
      				var replaceBlank = prompt("Please enter the letter you wish to use: ", "");
              replaceBlank = replaceBlank.toUpperCase(); 
      				var tileLoc = findLetter(replaceBlank);
      				$(activeTile).children().attr("src", scrabbleTiles[tileLoc].Img); //set the imgs to the propper letters
    					$(activeTile).children().attr("score", scrabbleTiles[tileLoc].Score); //set the score attribute to be refrenced later for the score
    					$(activeTile).children().attr("letter", scrabbleTiles[tileLoc].Val);//set the letter attribute to refrence later for setting the board img correctly
    					scrabbleTiles[tileLoc].NumRemain = scrabbleTiles[tileLoc].NumRemain - 1; //remove an avalible tile
            }
            word1 = word1+$(activeTile).children().attr("letter"); //this is what i would use for the word check but didnt implement it, this keeps track of what your word is for the horizontal line
        		
            $(this).attr("src",$(activeTile).children().attr("src"));//gets the img to set to based on the childs img source element THIS IS WHAT IDENTIFIES WHAT TILE WAS DROPPED ONTO THE BOARD
        		$(this).droppable({disabled:true});//re-enables the dropper
        		score += parseInt($(activeTile).children().attr("score"));//adds to the score
        		$(activeTile).children().remove()//removes the tile img tag so its off the screen. it will be added back when the user submits a word
        		$("#Score").text(score); //displays the current score of the word
      		}
    	});
    	$("#boardSpace2").droppable({ //makes the board space a  object
      		drop: function( event, ui ) {
      			var activeTile = ui.draggable; //var for which tile to remove and add score of
      			if($(activeTile).children().attr("src") == "images/Scrabble_Tile_Blank.jpg"){
      				var replaceBlank = prompt("Please enter the letter you wish to use: ", "");
              replaceBlank = replaceBlank.toUpperCase(); 
              var tileLoc = findLetter(replaceBlank);
      				$(activeTile).children().attr("src", scrabbleTiles[tileLoc].Img); //set the imgs to the propper letters
    					$(activeTile).children().attr("score", scrabbleTiles[tileLoc].Score); //set the score attribute to be refrenced later for the score
    					$(activeTile).children().attr("letter", scrabbleTiles[tileLoc].Val);//set the letter attribute to refrence later for setting the board img correctly
    					scrabbleTiles[tileLoc].NumRemain = scrabbleTiles[tileLoc].NumRemain - 1; //remove an avalible tile
            }
            word1 = word1+$(activeTile).children().attr("letter");
        		
            $(this).attr("src",$(activeTile).children().attr("src"));//gets the img to set to based on the childs img source element
        		$(this).droppable({disabled:true});
        		score += parseInt($(activeTile).children().attr("score"));
        		$(activeTile).children().remove()
        		$("#Score").text(score);
        		doubleScore = 2;
      		}
    	});
    	$("#boardSpace3").droppable({ //makes the board space a  object
      		drop: function( event, ui ) {
      			var activeTile = ui.draggable; //var for which tile to remove and add score of
      			if($(activeTile).children().attr("src") == "images/Scrabble_Tile_Blank.jpg"){
      				var replaceBlank = prompt("Please enter the letter you wish to use: ", "");
              replaceBlank = replaceBlank.toUpperCase(); 
              var tileLoc = findLetter(replaceBlank);
      				$(activeTile).children().attr("src", scrabbleTiles[tileLoc].Img); //set the imgs to the propper letters
    					$(activeTile).children().attr("score", scrabbleTiles[tileLoc].Score); //set the score attribute to be refrenced later for the score
    					$(activeTile).children().attr("letter", scrabbleTiles[tileLoc].Val);//set the letter attribute to refrence later for setting the board img correctly
    					scrabbleTiles[tileLoc].NumRemain = scrabbleTiles[tileLoc].NumRemain - 1; //remove an avalible tile
            }
            word1 = word1+$(activeTile).children().attr("letter");
        		
            $(this).attr("src",$(activeTile).children().attr("src"));//gets the img to set to based on the childs img source element
        		$(this).droppable({disabled:true});
        		score += parseInt($(activeTile).children().attr("score"));
        		$(activeTile).children().remove()
        		$("#Score").text(score);
      		}
    	});
    	$("#boardSpace4").droppable({ //makes the board space a  object
      		drop: function( event, ui ) {
      			var activeTile = ui.draggable; //var for which tile to remove and add score of
      			if($(activeTile).children().attr("src") == "images/Scrabble_Tile_Blank.jpg"){
      				var replaceBlank = prompt("Please enter the letter you wish to use: ", "");
              replaceBlank = replaceBlank.toUpperCase(); 
              var tileLoc = findLetter(replaceBlank);
      				$(activeTile).children().attr("src", scrabbleTiles[tileLoc].Img); //set the imgs to the propper letters
    					$(activeTile).children().attr("score", scrabbleTiles[tileLoc].Score); //set the score attribute to be refrenced later for the score
    					$(activeTile).children().attr("letter", scrabbleTiles[tileLoc].Val);//set the letter attribute to refrence later for setting the board img correctly
    					scrabbleTiles[tileLoc].NumRemain = scrabbleTiles[tileLoc].NumRemain - 1; //remove an avalible tile
            }
            word1 = word1+$(activeTile).children().attr("letter"); 
            word2 = word2+$(activeTile).children().attr("letter"); //this would be the start of word 2 so it is the first letter for word 2 and the fourth letter for word 1
            $(this).attr("src",$(activeTile).children().attr("src"));//gets the img to set to based on the childs img source element
        		$(this).droppable({disabled:true});
        		score += parseInt($(activeTile).children().attr("score"));
        		$(activeTile).children().remove()
        		$("#Score").text(score);
      		}
    	});
    	$("#boardSpace5").droppable({ //makes the board space a  object
      		drop: function( event, ui ) {
      			var activeTile = ui.draggable; //var for which tile to remove and add score of
      			if($(activeTile).children().attr("src") == "images/Scrabble_Tile_Blank.jpg"){
      				var replaceBlank = prompt("Please enter the letter you wish to use: ", "");
              replaceBlank = replaceBlank.toUpperCase(); 
              var tileLoc = findLetter(replaceBlank);
      				$(activeTile).children().attr("src", scrabbleTiles[tileLoc].Img); //set the imgs to the propper letters
    					$(activeTile).children().attr("score", scrabbleTiles[tileLoc].Score); //set the score attribute to be refrenced later for the score
    					$(activeTile).children().attr("letter", scrabbleTiles[tileLoc].Val);//set the letter attribute to refrence later for setting the board img correctly
    					scrabbleTiles[tileLoc].NumRemain = scrabbleTiles[tileLoc].NumRemain - 1; //remove an avalible tile
            }
            word1 = word1+$(activeTile).children().attr("letter");
        		
            $(this).attr("src",$(activeTile).children().attr("src"));//gets the img to set to based on the childs img source element
        		$(this).droppable({disabled:true});
        		score += parseInt($(activeTile).children().attr("score"));
        		$(activeTile).children().remove()
        		$("#Score").text(score);
      		}
    	});
    	$("#boardSpace6").droppable({ //makes the board space a  object
      		drop: function( event, ui ) {
      			var activeTile = ui.draggable; //var for which tile to remove and add score of
      			if($(activeTile).children().attr("src") == "images/Scrabble_Tile_Blank.jpg"){
      				var replaceBlank = prompt("Please enter the letter you wish to use: ", "");
              replaceBlank = replaceBlank.toUpperCase(); 
              var tileLoc = findLetter(replaceBlank);
      				$(activeTile).children().attr("src", scrabbleTiles[tileLoc].Img); //set the imgs to the propper letters
    					$(activeTile).children().attr("score", scrabbleTiles[tileLoc].Score); //set the score attribute to be refrenced later for the score
    					$(activeTile).children().attr("letter", scrabbleTiles[tileLoc].Val);//set the letter attribute to refrence later for setting the board img correctly
    					scrabbleTiles[tileLoc].NumRemain = scrabbleTiles[tileLoc].NumRemain - 1; //remove an avalible tile
            }
            word1 = word1+$(activeTile).children().attr("letter");
        		
            $(this).attr("src",$(activeTile).children().attr("src"));//gets the img to set to based on the childs img source element
        		$(this).droppable({disabled:true});
        		score += parseInt($(activeTile).children().attr("score"));
        		$(activeTile).children().remove()
        		$("#Score").text(score);
        		doubleScore = 4;
      		}
    	});
    	$("#boardSpace7").droppable({ //makes the board space a  object
      		drop: function( event, ui ) {
      			var activeTile = ui.draggable; //var for which tile to remove and add score of
      			if($(activeTile).children().attr("src") == "images/Scrabble_Tile_Blank.jpg"){
      				var replaceBlank = prompt("Please enter the letter you wish to use: ", "");
              replaceBlank = replaceBlank.toUpperCase(); 
              var tileLoc = findLetter(replaceBlank);
      				$(activeTile).children().attr("src", scrabbleTiles[tileLoc].Img); //set the imgs to the propper letters
    					$(activeTile).children().attr("score", scrabbleTiles[tileLoc].Score); //set the score attribute to be refrenced later for the score
    					$(activeTile).children().attr("letter", scrabbleTiles[tileLoc].Val);//set the letter attribute to refrence later for setting the board img correctly
    					scrabbleTiles[tileLoc].NumRemain = scrabbleTiles[tileLoc].NumRemain - 1; //remove an avalible tile
            }
            word1 = word1+$(activeTile).children().attr("letter");
        		
            $(this).attr("src",$(activeTile).children().attr("src"));//gets the img to set to based on the childs img source element
        		$(this).droppable({disabled:true});
        		score += parseInt($(activeTile).children().attr("score"));
        		$(activeTile).children().remove()
        		$("#Score").text(score);
      		}
    	});
    	$("#boardSpace8").droppable({ //makes the board space a  object
      		drop: function( event, ui ) {
      			var activeTile = ui.draggable; //var for which tile to remove and add score of
      			if($(activeTile).children().attr("src") == "images/Scrabble_Tile_Blank.jpg"){
      				var replaceBlank = prompt("Please enter the letter you wish to use: ", "");
              replaceBlank = replaceBlank.toUpperCase(); 
              var tileLoc = findLetter(replaceBlank);
      				$(activeTile).children().attr("src", scrabbleTiles[tileLoc].Img); //set the imgs to the propper letters
    					$(activeTile).children().attr("score", scrabbleTiles[tileLoc].Score); //set the score attribute to be refrenced later for the score
    					$(activeTile).children().attr("letter", scrabbleTiles[tileLoc].Val);//set the letter attribute to refrence later for setting the board img correctly
    					scrabbleTiles[tileLoc].NumRemain = scrabbleTiles[tileLoc].NumRemain - 1; //remove an avalible tile
      			}
            word2 = word2+$(activeTile).children().attr("letter");
            $(this).attr("src",$(activeTile).children().attr("src"));//gets the img to set to based on the childs img source element
        		$(this).droppable({disabled:true});
        		score += parseInt($(activeTile).children().attr("score"));
        		$(activeTile).children().remove()
        		$("#Score").text(score);
      		}
    	});
    	$("#boardSpace9").droppable({ //makes the board space a  object
      		drop: function( event, ui ) {
      			var activeTile = ui.draggable; //var for which tile to remove and add score of
      			if($(activeTile).children().attr("src") == "images/Scrabble_Tile_Blank.jpg"){
      				var replaceBlank = prompt("Please enter the letter you wish to use: ", "");
              replaceBlank = replaceBlank.toUpperCase(); 
              var tileLoc = findLetter(replaceBlank);
      				$(activeTile).children().attr("src", scrabbleTiles[tileLoc].Img); //set the imgs to the propper letters
    					$(activeTile).children().attr("score", scrabbleTiles[tileLoc].Score); //set the score attribute to be refrenced later for the score
    					$(activeTile).children().attr("letter", scrabbleTiles[tileLoc].Val);//set the letter attribute to refrence later for setting the board img correctly
    					scrabbleTiles[tileLoc].NumRemain = scrabbleTiles[tileLoc].NumRemain - 1; //remove an avalible tile
      			}
            word2 = word2+$(activeTile).children().attr("letter");
            $(this).attr("src",$(activeTile).children().attr("src"));//gets the img to set to based on the childs img source element
        		$(this).droppable({disabled:true});
        		score += parseInt($(activeTile).children().attr("score"));
        		$(activeTile).children().remove()
        		$("#Score").text(score);
      		}
    	});
    	$("#boardSpace10").droppable({ //makes the board space a  object
      		drop: function( event, ui ) {
      			var activeTile = ui.draggable; //var for which tile to remove and add score of
      			if($(activeTile).children().attr("src") == "images/Scrabble_Tile_Blank.jpg"){
      				var replaceBlank = prompt("Please enter the letter you wish to use: ", "");
              replaceBlank = replaceBlank.toUpperCase(); 
              var tileLoc = findLetter(replaceBlank);
      				$(activeTile).children().attr("src", scrabbleTiles[tileLoc].Img); //set the imgs to the propper letters
    					$(activeTile).children().attr("score", scrabbleTiles[tileLoc].Score); //set the score attribute to be refrenced later for the score
    					$(activeTile).children().attr("letter", scrabbleTiles[tileLoc].Val);//set the letter attribute to refrence later for setting the board img correctly
    					scrabbleTiles[tileLoc].NumRemain = scrabbleTiles[tileLoc].NumRemain - 1; //remove an avalible tile
      			}
            word2 = word2+$(activeTile).children().attr("letter");
            $(this).attr("src",$(activeTile).children().attr("src"));//gets the img to set to based on the childs img source element
        		$(this).droppable({disabled:true});
        		score += parseInt($(activeTile).children().attr("score"));
        		$(activeTile).children().remove()
        		$("#Score").text(score);
      		}
    	});
    	$("#boardSpace11").droppable({ //makes the board space a  object
      		drop: function( event, ui ) {
      			var activeTile = ui.draggable; //var for which tile to remove and add score of
      			if($(activeTile).children().attr("src") == "images/Scrabble_Tile_Blank.jpg"){
      				var replaceBlank = prompt("Please enter the letter you wish to use: ", "");
              replaceBlank = replaceBlank.toUpperCase(); 
              var tileLoc = findLetter(replaceBlank);
      				$(activeTile).children().attr("src", scrabbleTiles[tileLoc].Img); //set the imgs to the propper letters
    					$(activeTile).children().attr("score", scrabbleTiles[tileLoc].Score); //set the score attribute to be refrenced later for the score
    					$(activeTile).children().attr("letter", scrabbleTiles[tileLoc].Val);//set the letter attribute to refrence later for setting the board img correctly
    					scrabbleTiles[tileLoc].NumRemain = scrabbleTiles[tileLoc].NumRemain - 1; //remove an avalible tile
      			}
            word2 = word2+$(activeTile).children().attr("letter");
            $(this).attr("src",$(activeTile).children().attr("src"));//gets the img to set to based on the childs img source element
        		$(this).droppable({disabled:true});
        		score += parseInt($(activeTile).children().attr("score"));
        		$(activeTile).children().remove()
        		$("#Score").text(score);
      		}
    	});
	});
});
function submit(){
		$("#boardSpace1").attr("src","images/singleTile.png");
		$("#boardSpace2").attr("src","images/doubleTile.png");
		$("#boardSpace3").attr("src","images/singleTile.png");
		$("#boardSpace4").attr("src","images/singleTile.png");
		$("#boardSpace5").attr("src","images/singleTile.png");
		$("#boardSpace6").attr("src","images/doubleTile.png");
		$("#boardSpace7").attr("src","images/singleTile.png");
		$("#boardSpace8").attr("src","images/singleTile.png");
		$("#boardSpace9").attr("src","images/singleTile.png");
		$("#boardSpace10").attr("src","images/singleTile.png");
		$("#boardSpace11").attr("src","images/singleTile.png");
	
	for(i=0;i<=7;i++){
		if($("#letterTile"+i).children().length == 0){ //checking to see how many new tiles we need and where to put them
			var imgTag ="<img id='letterTileImg" + i +  "'letter='' score='' class='letterTile' src='images/Scrabble_Tile_Blank.jpg'>"; //adds back the default img tag 
			$("#letterTile"+i).append(imgTag);
			tileIndex = randomTile();
			if(scrabbleTiles[tileIndex].NumRemain > 0){ 
				$("#letterTileImg"+i).attr("src", scrabbleTiles[tileIndex].Img); //same as random hand code from above but will only create tiles for missing tiles
				$("#letterTileImg"+i).attr("score", scrabbleTiles[tileIndex].Score);
				$("#letterTileImg"+i).attr("letter", scrabbleTiles[tileIndex].Val);
				scrabbleTiles[tileIndex].NumRemain = scrabbleTiles[tileIndex].NumRemain - 1;
			}else{
				i--;//decrease i incase you need another tile because you were out of the random
			}
		}
	}
  for(i=0;i<=11;i++){
     $("#boardSpace"+i).droppable({disabled:false});//re-enable all the droppable squares for the board
  }
	score = (score*doubleScore);
	totalScore = score + totalScore;
	$("#TotalScore").text(totalScore);//multiple score by multiplers
	//reset word score
	score = 0;
	$("#score").text(score); 
	doubleScore = 1; //reset double score
}
function clearBoard(){
		$("#boardSpace1").attr("src","images/singleTile.png");
		$("#boardSpace2").attr("src","images/doubleTile.png");
		$("#boardSpace3").attr("src","images/singleTile.png");
		$("#boardSpace4").attr("src","images/singleTile.png");
		$("#boardSpace5").attr("src","images/singleTile.png");
		$("#boardSpace6").attr("src","images/doubleTile.png");
		$("#boardSpace7").attr("src","images/singleTile.png");
		$("#boardSpace8").attr("src","images/singleTile.png");
		$("#boardSpace9").attr("src","images/singleTile.png");
		$("#boardSpace10").attr("src","images/doubleTile.png");
		$("#boardSpace11").attr("src","images/singleTile.png");
		
		for(i=0;i<=7;i++){
				var imgTag ="<img id='letterTileImg" + i +  "'letter='' score='' class='letterTile' src='images/Scrabble_Tile_Blank.jpg'>"; //adds back the default img tag 
				$("#letterTile"+i).children().remove();
        $("#letterTile"+i).append(imgTag);
				tileIndex = randomTile();
				if(scrabbleTiles[tileIndex].NumRemain > 0){ 
					$("#letterTileImg"+i).attr("src", scrabbleTiles[tileIndex].Img); //same as random hand code from above but will only create tiles for missing tiles
					$("#letterTileImg"+i).attr("score", scrabbleTiles[tileIndex].Score);
					$("#letterTileImg"+i).attr("letter", scrabbleTiles[tileIndex].Val);
					scrabbleTiles[tileIndex].NumRemain = scrabbleTiles[tileIndex].NumRemain - 1;
				}else{
					i--;//decrease i incase you need another tile because you were out of the random
				}
		}
    for(i=0;i<=11;i++){
     $("#boardSpace"+i).droppable({disabled:false});//re-enable all the droppable squares for the board
    }
		
		score = 0;//reset all the varibales
    totalScore = 0;
    doubleScore = 1;
    randomArray = [0,0,0,0,0,0,0,0,0,1,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,5,5,6,6,6,7,7,8,8,8,8,8,8,8,8,8,9,10,11,11,11,11,12,12,13,13,13,13,13,13,14,14,14,14,14,14,14,14,15,15,16,17,17,17,17,17,17,18,18,18,18,19,19,19,19,19,19,20,20,20,20,21,21,22,22,23,24,24,25,26,26]
    totalTiles = 100;
    word1 = "";
    word2 = "";
		
	}