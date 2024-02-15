// ==UserScript==
// @name         minesweeper solver
// @namespace    http://tampermonkey.net/
// @version      2023-12-27
// @description  try to take over the world!
// @author       You
// @match        https://minesweeper.online/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=minesweeper.online
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let intervalId = setInterval(convert, 1000);
})();

function convert() {
	// Find the div with id 'g64'
    let div = document.getElementById('G64');

    // Get all button elements within the div
    let buttons = div.getElementsByTagName('button');

    // Loop backwards through the list of buttons and remove each one
    for (let i = buttons.length - 1; i >= 0; i--) {
        buttons[i].parentNode.removeChild(buttons[i]);
    }

    // Get the elements
    let hundredsElement = document.getElementById('top_area_mines_100');
    let tensElement = document.getElementById('top_area_mines_10');
    let onesElement = document.getElementById('top_area_mines_1');

    if(hundredsElement == null || hundredsElement == undefined) {
        return;
    }
    // Extract the numbers from the class names
    let hundreds = getNumberFromClassName(hundredsElement.className);
    let tens = getNumberFromClassName(tensElement.className);
    let ones = getNumberFromClassName(onesElement.className);

    // Calculate the total value
    let mines = hundreds * 100 + tens * 10 + ones;

   	let result = "";
   	let rows = document.getElementsByClassName("clear").length
   	var cells = document.getElementsByClassName("cell")
	var columns = cells.length / rows

	for (var i = 0; i < cells.length; i++) {
   		if(i % rows == 0 && i !== 0) {
			result += ":"
		}
		if (cells[i].classList.contains('hd_closed')) {
                    result += 'x';
		}
		if (cells[i].classList.contains('hd_flag')) {
                    mines += 1;
		}
		if (cells[i].classList.contains('hd_type0')) {
                    result += '.';
		}
		if (cells[i].classList.contains('hd_type1')) {
                    result += '1';
		}
		if (cells[i].classList.contains('hd_type2')) {
                    result += '2';
		}
		if (cells[i].classList.contains('hd_type3')) {
                    result += '3';
		}
		if (cells[i].classList.contains('hd_type4')) {
                    result += '4';
		}
		if (cells[i].classList.contains('hd_type5')) {
		    result += '5';
		}
		if (cells[i].classList.contains('hd_type6')) {
		    result += '6';
		}
		if (cells[i].classList.contains('hd_type7')) {
 			result += '7';
		}
		if (cells[i].classList.contains('hd_type8')) {
		    result += '8';
		}
	}
    	var link = `https://mrgris.com/projects/minesweepr/demo/analyzer/?w=${columns}&h=${rows}&mines=${mines}&board=${result}`;


	let button = document.createElement('button');
	button.innerHTML = 'Click me';
	button.onclick = function() {
  	  window.open(link, '_blank'); // Replace with your URL
	};
	let div2 = document.getElementById('G64');
	div2.appendChild(button);
}

function getNumberFromClassName(className) {
    let match = className.match(/hd_top-area-num(\d)/);
    return match ? parseInt(match[1]) : 0;
}
