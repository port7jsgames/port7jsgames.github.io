$(document).ready(function(){

//Welcome
//Run Sequence
	$('#welcomesprite').css('left','calc(50% - 50px)');

	$('#run1').css('display','block');
	
	$('#welcomesprite').ready(function() {
		setTimeout(function () {
			$('#run1').css('display','none');
			$('#run2').css('display','block');
		}, 100);
	});
	
	$('#welcomesprite').ready(function() {
		setTimeout(function () {
			$('#run2').css('display','none');
			$('#run3').css('display','block');
		}, 200);
	});
	
	$('#welcomesprite').ready(function() {
		setTimeout(function () {
			$('#run3').css('display','none');
			$('#run4').css('display','block');
		}, 300);
	});

	$('#welcomesprite').ready(function() {
		setTimeout(function () {
			$('#run4').css('display','none');
			$('#run1').css('display','block');
		}, 400);
	});
	
	$('#welcomesprite').ready(function() {
		setTimeout(function () {
			$('#run1').css('display','none');
			$('#run2').css('display','block');
		}, 500);
	});
	
	$('#welcomesprite').ready(function() {
		setTimeout(function () {
			$('#run2').css('display','none');
			$('#run3').css('display','block');
		}, 600);
	});
	
	$('#welcomesprite').ready(function() {
		setTimeout(function () {
			$('#run3').css('display','none');
			$('#run4').css('display','block');
		}, 700);
	});

	$('#welcomesprite').ready(function() {
		setTimeout(function () {
			$('#run4').css('display','none');
			$('#run1').css('display','block');
		}, 800);
	});
	
	$('#welcomesprite').ready(function() {
		setTimeout(function () {
			$('#run1').css('display','none');
			$('#run2').css('display','block');
		}, 900);
	});

	$('#welcomesprite').ready(function() {
		setTimeout(function () {
			$('#run2').css('display','none');
			$('#run5').css('display','block');
		}, 1000);
	});

	$('#welcomesprite').ready(function() {
		setTimeout(function () {
			$('#run5').css('display','none');
			$('#stand1').css('display','block');
		}, 2000);
	});
	
//Welcome Text
	$("#welcomedoyou").ready(function() {
		setTimeout(function () {
			$('#welcomedoyou').css('color','#053969');
		}, 2300);
	});

	$("#welcomeyes").ready(function() {
		$('#welcomeyes').hide(0);
		setTimeout(function () {
			$('#welcomeyes').show(300);
		}, 3300);
	});
	
	$("#welcomeno").ready(function() {
		$('#welcomeno').hide(0);
		setTimeout(function () {
			$('#welcomeno').show(300);
		}, 3500);
	});

	$('#welcomeyes').click(function(){
		$('#welcomesprite').css('transition','top 0.8s ease-out');
		$('.welcometxt').css('color','white');
		$('#stand1').css('display','none');
		$('#jump1').css('display','block');
		setTimeout(function () {
			$('#welcomesprite').css('top','-140px');
		}, 200);
		
		setTimeout(function () {
			$('#jump1').css('display','none');
			$('#jump2').css('display','block');
		}, 200);
		
		setTimeout(function () {
			$('#jump2').css('display','none');
			$('#jump3').css('display','block');
		}, 300);
		
		setTimeout(function () {
			$('#jump3').css('display','none');
			$('#jump4').css('display','block');
		}, 400);
		
		setTimeout(function () {
			window.location.href = "home.html";
		}, 1700);
	});
	
	$('#welcomeno').click(function(){
		$("#welcomedoyou").css('font-size','38px');
		$("#welcomedoyou").css('left','calc(50% - 146px)');
		$("#welcomedoyou").css('lineHeight','38px');
		$("#welcomedoyou").html('No?<br/>You\'re no fun...<br/>Press \"Yes\"<br/>for some fun!');
	});

//Home
	$("#headline1").ready(function(){
		setTimeout(function () {
			$("#headline1").css('width','90%');
		}, 1400);
	});

	$("#headline2").css('width','70%');
	$("#headline3").css('width','80%');
	$("#headline4").css('width','30%');
	
	$("#headline5").ready(function(){
		setTimeout(function () {
			$("#headline5").css('width','100%');
		}, 800);
	});
	
	$("#headline6").css('width','60%');
	$("#headline7").css('width','70%');

	$("#headline8").ready(function(){
		setTimeout(function () {
			$("#headline8").css('width','40%');
		}, 1000);
	});
	
	$("header h1").ready(function(){
		setTimeout(function () {
			$('header h1').css('color','#053969');
		}, 600);
	});
	$("header h2").ready(function(){
		setTimeout(function () {
			$('header h2').css('color','#053969');
		}, 1200);
	});
	
	$('#gamebox1').css('backgroundColor','#053969');
	
	$('#gamebox2').ready(function(){
		setTimeout(function () {
			$('#gamebox2').css('backgroundColor','#053969');
		}, 300);
	});
	
	$('#gamebox3').ready(function(){
		setTimeout(function () {
			$('#gamebox3').css('backgroundColor','#053969');
		}, 600);
	});
	
	$('#gamebox4').ready(function(){
		setTimeout(function () {
			$('#gamebox4').css('backgroundColor','#053969');
		}, 900);
	});
	
	$('#gamebox1').click(function(){
		window.location.href = "pong.html";
	});
	
	$('#gamebox2').click(function(){
		window.location.href = "memory.html";
	});
	
	$('#gamebox3').click(function(){
		window.location.href = "spaceinvaders.html";
	});
	
	$('#gamebox4').click(function(){
		window.location.href = "snake.html";
	});


});