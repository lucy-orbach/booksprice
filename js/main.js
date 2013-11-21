/*$(document).ready(function() {
  
}); */

// ********  F  U  N  C  T  I  O  N  :  switchMYdiv ************
//Switches Div with a slide up and dowm motion
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

//CUSTOM:switch basic search to advanced search
var goAdv = $( '#adv' );
var goBasic = $ ( '#base' );
var searchBox = $ ( 'form.srch-basic' ); 
var searchAdv = $ ( 'form.srch-adv' );
//call Function
switchMYdiv (searchBox,searchAdv,goAdv,goBasic)
switchMYdiv (searchAdv,searchBox,goBasic,goAdv)


// ********  F  U  N  C  T  I  O  N  :  scrollToAnchor ****************
//performs an slow motion scroll to Anchor
var linkToAnchor = [];
var myAnchor = [];

function scrollToAnchor (linkToAnchor,myAnchor) {
	linkToAnchor.click( function(){
		 $('html,body').animate( {scrollTop: myAnchor.offset().top} , 1000 );
	});

};
//CUSTOM: for Link to Browse by Categories
var goCat = $('#linkCat');
var anchorCat = $ ("a[name=BrowseByCategories]")
console.log(goCat);
//CALL FUNCTIONS
scrollToAnchor (goCat,anchorCat)

//********  F  U  N  C  T  I  O  N  :  slideMYdiv *************
// slides back and forth two divs inside a visible area

var linkToslideA = [];
var linkToslideB = [];
var slideA = [];
var slideB = [];

function slideMYdiv ( linkToslideA, slideA, linkToslideB, slideB  ) {
	linkToslideA.click( function() {
		linkToslideA.toggleClass('active');
		linkToslideB.toggleClass('active');
		slideA.removeClass('slide-out').addClass('slide-in');
		slideB.removeClass('slide-in').addClass('slide-out');
	}); 
};
//CUSTOM: Textbooks & Books Category Lists
var txtLink = $('#txtlink');
var bksLink = $('#bkslink');
var txtList = $('.txt-slide');
var bksList = $('.bks-slide');

console.log (txtLink);
console.log (bksLink);
console.log (txtList);
console.log (bksList);

slideMYdiv ( txtLink, txtList, bksLink, bksList )
slideMYdiv ( bksLink, bksList, txtLink, txtList )

//CUSTOM: Preference Box and Alert Box

var prefLink = $('#prefLink');
var alertLink = $('#alertLink');
var prefBox = $('.pref');
var alertBox = $('.alert-op');

slideMYdiv ( prefLink, prefBox, alertLink, alertBox )
slideMYdiv ( alertLink, alertBox, prefLink, prefBox )

// ********  F  U  N  C  T  I  O  N  :  fixMYbar **********************
//fixes the top bar on scroll

function fixMYbar( myBar, classToAdd ) {
	$( 'window' ).scroll( function() {
  		myBar.addClass('classToAdd')
	});
}

var headBar = $('.fixed');

fixMYbar( headBar, 'fixed-animation' )


// ********  F  U  N  C  T  I  O  N  :  removePriority *************
//removes class when user hover into a specific area

/* The hover() method specifies two functions to run when the mouse pointer hovers over the selected elements.

If only one function is specified, it will be run for both the mouseenter and mouseleave events.

Syntax
$(selector).hover(inFunction,outFunction)
*/

var selectedArea = [];
var targetedElement = [];
var classToRemove = [];

function removePriority (selectedArea, targetedElement, classToRemove) {
	selectedArea.hover( function() {
			targetedElement.removeClass( classToRemove );
		}, function() {
			targetedElement.addClass( classToRemove );
		}
	)	
};

//CUSTOM: remove First Class from the firs result of Price Comparison
var chart = $('.body-wrapper');
var topResult = $('#FirstRow');

removePriority (chart, topResult, 'first' );



//********  F  U  N  C  T  I  O  N  :   readMore   ***************
// SHOW MORE
var moreBtn = [];
var infoDiv = $('li.more');
var divToOpen = [];
var btnContainer = [];

console.log ("show " + infoDiv);

function readMore(moreBtn) {
	//when the "+" btn is clicked we make the li.more appear
	moreBtn.click ( function(){
		//gets the "li" that contains the "+"
		btnContainer = $(this).parent();    	
		 //gets the "li.more"
		sectionToOpen = btnContainer.siblings('.more'); 
		console.log( divToOpen )
		if ( sectionToOpen.hasClass( 'more-hidden' ) ) {   
			//now we try to close it
			moreBtn.text('-')
			sectionToOpen.removeClass('more-hidden')
		} else {
			//now we try to close it
			moreBtn.text('+')
			sectionToOpen.addClass('more-hidden')
		}
		
	});//divCloseBtn	
};

var moreInfo = $('.sup');
		
readMore(moreInfo);

$('.row').mouseleave( function() {
	var more = $( this ).find('.more');
console.log( more )
	if ( more.length > 0 ) {
		more.addClass( 'more-hidden' );
		$( this ).find('.sup').text('+');
	}
})

//********* F  U  N  C  T  I  O  N  :  showThisTab   *****************
//show and close tab with buttons/links
var tabLink = [];
var closeLink = $('.hide-this');
var tabName = [];
var tabToOpen = [];
console.log(closeLink);

function showThisTab(tabLink,tabName) {
	tabLink.click ( function () {
		
		var myLink = $(this);
		var btnContainer = myLink.parent();
		var allTabs= btnContainer.siblings();
		var tabContainer = btnContainer.siblings( tabName );

		allTabs.removeClass('unwrap');
		tabContainer.addClass('unwrap');
		myLink.addClass('active');
		/*$( 'window' ).scroll ( function() {
			allTabs.removeClass('unwrap');
		});*/
		closeLink.click ( function(){
			tabContainer.removeClass('unwrap');
			myLink.removeClass('active');
		});	
	});
};
var revLink = $('.revLink');
var revTab = '.review'
var formatLink = $('.formatLink');
var formatTab = '.formats';
var discussLink = $('.discussLink');
var discussTab = '.discuss';

showThisTab( revLink, revTab )
showThisTab( formatLink, formatTab )
showThisTab( discussLink, discussTab )

//********* F  U  N  C  T  I  O  N  :  switchMYview   *****************
//
var clickedIcon = [];
var classToAdd = [];
var classToRemove = [];
/**/
var viewASgrid = $('.view-grid');
var viewASlist = $('.view-list');
var gridView = 'grid-view' ;
var listView = 'list-view' ;
var myBooks = $('.bk-results');

function switchMYview (clickedIcon, classToAdd, classToRemove, otherIcon) {
	clickedIcon.click ( function() { 
			myBooks.removeClass( classToRemove );
			myBooks.addClass( classToAdd );
			otherIcon.removeClass( ' active ');
			clickedIcon.addClass ('active');
		}
	);
};

switchMYview( viewASgrid, gridView, listView, viewASlist )
switchMYview( viewASlist, listView, gridView, viewASgrid )









