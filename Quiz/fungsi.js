////////////////Soal////////////////
var soal	= document.getElementsByClassName('tengah1');
var a_nya	= [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
var a_nya2	= ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10'];
var soalnya	=
[
"4 x 8 = ?",
"5 x 2 = 10 maka 10 : 2 = ?",
"Nisa membeli buku tulis 2 bungkus setiap bungkus berisi 10 buah buku. Berapa jumlah buku Nisa semuanya?",
"Ibu mempunyai 3 bungkus lilin, masing - masing bungkus berisi 15 batang lilin. Berapa batang jumlah lilin ibu semuanya?",
"10 x 3 : 6 = ?",
"20 x 4 : 2 = ?",
"Tanji mempunyai 35 butir kelereng, di bagikan dengan rata kepada 5 orang temannya. Berapa butir kelereng yang di dapat masing - masing temannya?",
"Ventri mempunyi 5 kantong kelereng, masing - masing kantong berisi 10 butir kelereng, kemudian dia membagi rata kepada temannya Doni dan Tegar. Berapa butir kelereng yang didapat Doni dan Tegar?",
"Jumlah sisi segitiga adalah?",
"Jumlah sudut lancip pada bangun segitiga adalah?"
];

	for(var i = 0; i < a_nya.length; i++)
	{a_nya[i] = soal[i]; document.getElementById(a_nya2[i]).innerHTML = soalnya[i];}

////////////////Jawaban////////////////
var b = 0, s = 0;
var Jawaban		= [32, 5, 20, 45, 5, 40, 7, 25, 3, 3];

////////////////Keluaran////////////////
var Lihat_Hasil = document.getElementById('END');
var Hasil 		= document.getElementById('keluaran');

Lihat_Hasil.onclick = function()
{
	for(var i = 0; i < a_nya.length; i++)
	{
		if(soal[i].value == Jawaban[i]){b++;}
		else {s++}
	}

	var total_nilai	= b*10;
	var hasilakhir	= "Nilai : "		+ total_nilai + "/100";
	var hasilbenar	= "<br>Benar : "	+ b + " Soal";
	var hasilsalah	= "<br>Salah : "	+ s + " Soal";

	Hasil.innerHTML =
			"Jawaban No 1 : " + a_nya[0].value +
		"<br>Jawaban No 2 : " + a_nya[1].value +
		"<br>Jawaban No 3 : " + a_nya[2].value +
		"<br>Jawaban No 4 : " + a_nya[3].value +
		"<br>Jawaban No 5 : " + a_nya[4].value +
		"<br>Jawaban No 6 : " + a_nya[5].value +
		"<br>Jawaban No 7 : " + a_nya[6].value +
		"<br>Jawaban No 8 : " + a_nya[7].value +
		"<br>Jawaban No 9 : " + a_nya[8].value +
		"<br>Jawaban No 10 : " + a_nya[9].value +
		"<br>-------------------------------------------------<br>" +
		hasilakhir + hasilbenar + hasilsalah;

	 b = 0; s = 0;
};



/*
var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('wadahQuiz');
var questionEl = document.getElementById('soale');
var opt1 = document.getElementById('pil1');
var opt2 = document.getElementById('pil2');
var opt3 = document.getElementById('pil3');
var opt4 = document.getElementById('pil4');
var answer1 = document.getElementById('pilih1');
var answer2 = document.getElementById('pilih2');
var answer3 = document.getElementById('pilih3');
var answer4 = document.getElementById('pilih4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '.' +  q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Harus diisi ya dek..');
		return;
	}
	answer1.style.backgroundColor = "transparent";
	answer2.style.backgroundColor = "transparent";
	answer3.style.backgroundColor = "transparent";
	answer4.style.backgroundColor = "transparent";
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer) {
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score:' + score;
		return;
	}
	loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);

function selectOption() {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	var answer = selectedOption.value;

	if (answer==1) {
		answer1.style.backgroundColor = "rgba(255,255,255,0.5)";
		answer2.style.backgroundColor = "transparent";
		answer3.style.backgroundColor = "transparent";
		answer4.style.backgroundColor = "transparent";
	}else if (answer == 2) {
		answer1.style.backgroundColor = "transparent";
		answer2.style.backgroundColor = "rgba(255,255,255,0.5)";
		answer3.style.backgroundColor = "transparent";
		answer4.style.backgroundColor = "transparent";
	}else if (answer == 3) {
		answer1.style.backgroundColor = "transparent";
		answer2.style.backgroundColor = "transparent";
		answer3.style.backgroundColor = "rgba(255,255,255,0.5)";
		answer4.style.backgroundColor = "transparent";
	}else if (answer == 4) {
		answer1.style.backgroundColor = "transparent";
		answer2.style.backgroundColor = "transparent";
		answer3.style.backgroundColor = "transparent";
		answer4.style.backgroundColor = "rgba(255,255,255,0.5)";
	}
}
*/

//materi
function fungsiklik()
{
	 
	 document.getElementById('materi').style.display='block';
	 document.getElementById('mulai').style.display='none';
}


//kembali
function kembali()
{
	
	 document.getElementById('materi').style.display='none';
	 document.getElementById('mulai').style.display='block';
}