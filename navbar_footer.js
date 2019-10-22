function BuildNavBar() {
	var list = document.createElement("ul");
	list.classList.add("nav");
	for (var i = 0; i < 7; i++) {
		var listEl = document.createElement("li");
		listEl.classList.add("nav");
		switch (i) {
			case 0:
				var text = document.createTextNode("Home");
				var link = document.createElement("a");
				link.appendChild(text);
				link.setAttribute("href", "#");
				break;
			case 1:
				var text = document.createTextNode("Dates");
				var link = document.createElement("a");
				link.appendChild(text);
				link.setAttribute("href", "#");
				break;
			case 2:
				var text = document.createTextNode("FAQ");
				var link = document.createElement("a");
				link.appendChild(text);
				link.setAttribute("href", "#");
				break;
			case 3:
				var text = document.createTextNode("About Us");
				var link = document.createElement("a");
				link.appendChild(text);
				link.setAttribute("href", "#");
				break;
			case 4:
				var text = document.createTextNode("Contact Us");
				var link = document.createElement("a");
				link.appendChild(text);
				link.setAttribute("href", "#");
				break;
			case 5:
				var text = document.createTextNode("Status");
				var link = document.createElement("a");
				link.appendChild(text);
				link.setAttribute("href", "#");
				break;
			case 6:
				var text = document.createTextNode("Get involved");
				var link = document.createElement("a");
				link.appendChild(text);
				link.setAttribute("href", "#");
				break;
		}
		listEl.appendChild(link);
		list.appendChild(listEl);
	}
	document.body.appendChild(list);
}

function BuildFooter() {
	var foot = document.createElement("footer");
	var logo = document.createElement("img");
	logo.src = "VoteNewEnglandLogo-01.png";
	logo.classList.add("logoSmall");
	var crContainer = document.createElement("div");
	var crString = "All rights reserved &copy Vote New Endland";
	var cr = document.createTextNode(crString);
	crContainer.appendChild(cr);
	foot.appendChild(logo);
	foot.appendChild(crContainer);
	document.body.appendChild(foot);
}