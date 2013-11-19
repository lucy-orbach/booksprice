
// F U N C T I O N : S W I T C H  M Y  D I V

var fromDiv1 = [];
var toDiv2 = [];
var linkToFirst = [];
var linkToSecond = [];

function switchMYdiv (fromDiv,toDiv,linkToFirst,linkToSecond) {
	linkToFirst.click(function() {
		fromDiv.slideUp ("slow", function() {});
		toDiv.slideDown ("slow", function() {});
		linkToFirst.toggleClass('hide');
		linkToSecond.toggleClass('hide');
	});
};

// SWITCH MY DIV: CUSTOMIZED FOR SEARCH BASIC - ADVANCED
var goAdv = $( '#adv' );
var goBasic = $ ( '#base' );
var searchBox = $ ( 'form.srch-basic' ); 
var searchAdv = $ ( 'form.srch-adv' );
//CALL FUNCTIONS
switchMYdiv (searchBox,searchAdv,goAdv,goBasic)
switchMYdiv (searchAdv,searchBox,goBasic,goAdv)

// F U N C T I O N:  S C R O L L  T  O  A N C H O R
var linkToAnchor = [];
var myAnchor = [];

function scrollToAnchor (linkToAnchor,myAnchor) {
	linkToAnchor.click( function(){
		 $('html,body').animate( {scrollTop: myAnchor.offset().top} , 1000 );
	});

};
//Customize for Link to Browse by Categories
var goCat = $('#linkCat');
var anchorCat = $ ("a[name=BrowseByCategories]")
console.log(goCat);
//CALL FUNCTIONS
scrollToAnchor (goCat,anchorCat)


// S L I D E  B E T W E E N 2
var linkToslideA = [];
var linkToslideB = [];
var slideA = [];
var slideB = [];

function slideMYdiv ( linkToslideA, slideA, slideB, linkToslideB ) {
	linkToslideA.click( function() {
		linkToslideA.toggleClass('active');
		linkToslideB.toggleClass('active');
		slideA.removeClass('out').addClass('in');
		slideB.removeClass('in').addClass('out');
	}); 
};
var txtLink = $('#txtlink');
var bksLink = $('#bkslink');
var txtList = $('.txt-slide');
var bksList = $('.bks-slide');

console.log (txtLink);
console.log (bksLink);
console.log (txtList);
console.log (bksList);

slideMYdiv ( txtLink, txtList, bksList, bksLink)
slideMYdiv (bksLink, bksList, txtList, txtLink)











