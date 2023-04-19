function seeMore(){
	let seeP = document.getElementById("see");
	let showP = document.getElementById("show");
	let nameP = document.getElementById("name");
	
	if (nameP.innerHTML == "See More"){
		showP.classList.remove("hidden");
		nameP.innerHTML = "See Less";
	}
	else {
		showP.classList.add("hidden");
		nameP.innerHTML = "See More";
	}
}

function seeMoree(){
	let seeP = document.getElementById("see-two");
	let showP = document.getElementById("show-two");
	let nameP = document.getElementById("name-two");
	
	if (nameP.innerHTML == "See More"){
		showP.classList.remove("hidden");
		nameP.innerHTML = "See Less";
	}
	else {
		showP.classList.add("hidden");
		nameP.innerHTML = "See More";
	}
}

function submitQuiz(){
	let sectionResults = document.getElementById("result");
	sectionResults.classList.remove("hidden");
	let Q1 = document.getElementById("txt-Q1").value;
	let Q2 = document.getElementById("txt-Q2").value;
	let Q3 = document.getElementById("txt-Q3").value;
	let Q4 = document.getElementById("txt-Q4").value;
	let correct = 0;
	
	if(document.getElementById("txt-Q1").value=="h1"){
		document.getElementById("para-1").innerHTML = "Question 1- Correct";
		correct=correct+1;
	} 
	else{
		document.getElementById("para-1").innerHTML = "Question 1- Incorrect";
	}

	if(document.getElementById("txt-Q2").value=="table"){
		document.getElementById("para-2").innerHTML = "Question 2- Correct";
		correct=correct+1;
	} 
	else{
		document.getElementById("para-2").innerHTML = "Question 2- Incorrect";
	}

	if(document.getElementById("txt-Q3").value=="ol"){
		document.getElementById("para-3").innerHTML = "Question 3- Correct";
		correct=correct+1;
	} 
	else{ 
		document.getElementById("para-3").innerHTML = "Question 3- Incorrect";
	}

	if(document.getElementById("txt-Q4").value=="br"){
		document.getElementById("para-4").innerHTML = "Question 4- Correct";
		correct=correct+1;
	} 
	else{
		document.getElementById("para-4").innerHTML = "Question 4- Incorrect";
	}

	document.getElementById("score").innerHTML = score;
	var score = "score " + correct + "/4";
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
