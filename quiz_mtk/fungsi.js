////////////////Soal////////////////
var soal	= document.getElementsByClassName('inputan');
var a_nya	= [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
var a_nya2	= ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10'];
var soalnya	=
[
"2 x 1 = ",
"7 x 4 = ",
"56 + 124 = ",
"14 - 12",
"10 x 3 : 6 = ",
"20 x 4 : 2 = ",
"12 + 4 x 6 = ",
"1256 + 6521 = ",
"43 + 34 = ",
"15 x 3 = "
];

	for(var i = 0; i < a_nya.length; i++)
	{a_nya[i] = soal[i]; document.getElementById(a_nya2[i]).innerHTML = soalnya[i];}

//Jwbn//
var b = 0, s = 0;
var Jawaban		= [2, 28, 180, 2, 5, 40, 36, 7777, 77, 45];

//kluar//
var Lihat_Hasil = document.getElementById('akhir');
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
		"<br>-------------------------------------------------<br>" +
		hasilakhir + hasilbenar + hasilsalah +
		"<br>-------------------------------------------------<br>";

	 b = 0; s = 0;
};
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