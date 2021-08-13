// JavaScript Document
$(document).ready(function(){
	/*----- banner -----*/
	$("#banner").owlCarousel({
		items:1, nav:false, dots:false,
		loop:true, 
		autoplay:true,
		smartSpeed:1000,
		autoplayTimeout:3600
		
	})
	/*----- danh-muc -----*/
	$("#danhmuc").owlCarousel({
		items:3,
		margin:30, loop:true, 
		autoplay:true,
		smartSpeed:1000,
		autoplayTimeout:3000
		
	})
	/*----- banner -----*/
	$("#cnkh").owlCarousel({
		items:1, 
		
		
	})	
})