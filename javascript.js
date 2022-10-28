// ==UserScript==
// @name        New script
// @namespace   Violentmonkey Scripts
// @match       https://www.midjourney.com/rate/aazto/
// @grant       none
// @version     1.0
// @author      -
// @description 28/10/2022
// ==/UserScript==

function saveCurrentImg() {
    img = document.getElementsByClassName("aspect-auto z-10 rendering-contrast w-full h-full")[0].src
	download(img)
}

function reloadButtons() {
	console.log("Reloading buttons")
	// Add downloader to Love button
	butt = document.getElementsByClassName("hover:bg-uiBlue-600/80 active:bg-slate-800 active:ring-uiBlue-600 flex justify-center items-center py-2 px-2 w-full text-base font-medium text-white bg-opacity-80 rounded-md focus:outline-none active:ring-2   shadow-sm hover:text-white hover:bg-slate-600/30 active:bg-emerald-500/10 group hoverUp transition border border-dashed border-slate-500 duration-100 ease-in-out rounded-lg font-mono !text-2xl leading-none h-28 max-h-[8vh] null false")[3]
	butt.addEventListener("click", saveCurrentImg)

	// For each button except 4th, add event listener to update
	buttons = document.getElementsByClassName("hover:bg-uiBlue-600/80 active:bg-slate-800 active:ring-uiBlue-600 flex justify-center items-center py-2 px-2 w-full text-base font-medium text-white bg-opacity-80 rounded-md focus:outline-none active:ring-2   shadow-sm hover:text-white hover:bg-slate-600/30 active:bg-emerald-500/10 group hoverUp transition border border-dashed border-slate-500 duration-100 ease-in-out rounded-lg font-mono !text-2xl leading-none h-28 max-h-[8vh] null false")
	for (var i = 0; i < buttons.length-1; i++) {
		buttons[i].addEventListener('click', event => {
			setTimeout(reloadButtons, 500)
		});
	}
}

function download(url) {
    // Encode the url using base 64
    url = "http://127.0.0.1:5001/" + btoa(url);
    window.open(url);

	setTimeout(reloadButtons, 500)
}

setTimeout(reloadButtons, 500)