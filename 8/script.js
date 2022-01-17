
class loginfo
{
	constructor(valuedate, valueValue, valueinfo, valuestatus)
	{
		this.date = valuedate;
		this.value = valueValue;
		this.info = valueinfo;
		this.status = valuestatus;
	}

	information()
	{
		let list = document.getElementById("listlog");
		let div = document.createElement("div");
		let label = document.createElement("label");
		label.textContent = 'date: ' + this.date + ' , value: ' + this.value + ' , info: ' + this.info + ' , status: ' + this.status;
		label.classList.add('label-size')
		list.appendChild(div);
		div.appendChild(label);
	}
}

let arri = [];

function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
	  currentDate = Date.now();
	} while (currentDate - date < milliseconds);
  }

function getdata() {
	setTimeout(getdata1, 1000);
	setTimeout(getdata2, 2000);
	setTimeout(getdata3, 3000);
}

function getdata1() {
	var request;
	let strin = '';
	let date = '';
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'somejson.json');
	request.onreadystatechange = function () {
		if ((request.readyState === 4) && (request.status === 200)) {
			var items = JSON.parse(request.responseText);
			var output = '<ul>';
			for (var key in items) {
				strin += items[key].name;
				output += '<li>' + items[key].name + '</li>';
			}
			output += '</ul>';

			arri.push(new loginfo(new Date(), strin, request.status, request.statusText));
		}
		console.log(request.status + ' , ' + request.statusText);

		let list = document.getElementById("list");
		let div = document.createElement("div");
		let label = document.createElement("label");
		label.textContent = strin;
		label.classList.add('label-size')
		div.appendChild(label);
		list.appendChild(div);

		arri[0].information();
	}
	request.send();
}

function getdata2() {
	var request;
	let strin = '';
	let date = '';
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'somejson.json');
	request.onreadystatechange = function () {
		if ((request.readyState === 4) && (request.status === 200)) {
			var items = JSON.parse(request.responseText);
			var output = '<ul>';
			for (var key in items) {
				strin += items[key].file;
				output += '<li>' + items[key].file + '</li>';
			}
			output += '</ul>';

			arri.push(new loginfo(new Date(), strin, request.status, request.statusText));
		}
		console.log(request.status + ' , ' + request.statusText);

		let list = document.getElementById("list");
		let div = document.createElement("div");
		let label = document.createElement("label");
		label.textContent = strin;
		label.classList.add('label-size')
		div.appendChild(label);
		list.appendChild(div);

		arri[1].information();
	}
	request.send();
}

function getdata3() {
	var request;
	let strin = '';
	let date = '';
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'somejson.json');
	request.onreadystatechange = function () {
		if ((request.readyState === 4) && (request.status === 200)) {
			var items = JSON.parse(request.responseText);
			var output = '<ul>';
			for (var key in items) {
				strin += items[key].filesome;
				output += '<li>' + items[key].filesome + '</li>';
			}
			output += '</ul>';
			arri.push(new loginfo(new Date(), strin, request.status, request.statusText));
		}
		console.log(request.status + ' , ' + request.statusText);

		let list = document.getElementById("list");
		let div = document.createElement("div");
		let label = document.createElement("label");
		label.textContent = strin;
		label.classList.add('label-size')
		div.appendChild(label);
		list.appendChild(div);

		arri[2].information();
	}
	request.send();
}
