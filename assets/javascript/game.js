$(document).ready(function(){

var Wins = 0; 
var Losses = 0; 
var startRandomN = ""; 
var achieveScore = 0; 
var totalScore = 0; 
var imgRanN = []; 
var sum = 0; 
function generateRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  
};


function resetGame(){
	totalScore = 0;
	$(".totalScore").html(totalScore); 
	achieveScore = generateRandom(100, 120); 
	$(".randomNBox").html( "Score Needed to Win <br>" + achieveScore); 
}; 


resetGame(); 



$('.image1').on("click", function() {
	 var img1Rand = generateRandom(1, 30)
	 $(".img1Score").html(img1Rand);
		imgRanN.push(img1Rand);
		var totalSum0 = imgRanN.reduce(add, 0); 
	 	function add(a, b) {
    return a + b;
};
$('#totalCurrentScore').html(totalSum0);
	 console.log(imgRanN); 
	 console.log(img1Rand); 
	  console.log(totalSum0);
});

$('.image2').on("click", function() {
	 var img2Rand = generateRandom(1, 15);
	 $(".img2Score").html(img2Rand);
	 imgRanN.push(img2Rand);
	 	var totalSum1 = imgRanN.reduce(add, 0); 
	 	function add(a, b) {
    return a + b;
};
 $('#totalCurrentScore').html(totalSum1); 
	 console.log(imgRanN); 
	 console.log(img2Rand); 
	 console.log(totalSum1);
});

$('.image3').on("click", function() {
	 var img3Rand = generateRandom(1, 30);
	 $(".img3Score").html(img3Rand);
	 imgRanN.push(img3Rand);
	 	var totalSum2 = imgRanN.reduce(add, 0); 
	 	function add(a, b) {
    return a + b;
};
 $('#totalCurrentScore').html(totalSum2); 
	 console.log(imgRanN); 
	 console.log(img3Rand); 
	 console.log(totalSum2);
});

// $('.image3').on("click", function() {
// 	 var img3Rand = generateRandom(1, 20);
// 	 $(".img3Score").html(img3Rand);
// 		imgRanN.push(img3Rand);
// 	 console.log(imgRanN); 
// 	 console.log(img3Rand); 
// });
 
 $('.image4').on('click', function(){
 	var img4Rand = achieveScore - (imgRanN[0] + imgRanN[1] + imgRanN[2]);
  	$(".img4Score").html(img4Rand);
 	console.log(img4Rand); 




 }); 






















}); 