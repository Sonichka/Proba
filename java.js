$(document).ready(() => {
const $proba = $('#morning');
const $night = $('#sleep');


$proba.on('click', () =>{
	$proba.hide();
	$night.show();
})

$night.on('click', () =>{
	$night.hide();
	$proba.show();
})


});