function art(name, price, image) {
	this.name = name;
	this.price = price;
	this.image = image;
}


function displayImages() {
 	for (var i = 0; i < artArray.length; i++) {
    	document.write("<li class='smallImage' id='" + i + "'><img src='" + artArray[i].image + "' width='160' height='120'/></li>");
	}
}

function makeInfoList() {
	for (var i = 0; i < artArray.length; i++) {
		document.write("<li class='info' id='0" + i + "'>" + artArray[i].name + ", " + artArray[i].price + "</li>");
	}
}

function hideAllInfo() {
	$("#00").hide();
	$("#01").hide();
	$("#02").hide();
	$("#03").hide();
	$("#04").hide();
}


var art0 = new art("Mona Lisa", "$21", "small_Mona_Lisa.jpg");
var art1 = new art("Starry Night", "$22", "starry.jpg");
var art2 = new art("American Gothic", "$100", "gothic.jpg");
var art3 = new art("The Last Supper", "$23", "supper.jpg");
var art4 = new art("Guernica", "$24", "guernica.jpg");

var artArray = [art0, art1, art2, art3, art4];

