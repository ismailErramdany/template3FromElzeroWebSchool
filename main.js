
let dayOfEvent = new Date("Nov 23, 2022 19:59:59").getTime(); // date Of Match between Morocco And Croatia
let dayNow = new Date().getTime();

let seconds = document.querySelector(".last-events .meet .timer .seconds span:first-child");
let minutes = document.querySelector(".last-events .meet .timer .minutes span:first-child");
let hours = document.querySelector(".last-events .meet .timer .hourss span:first-child");
let days = document.querySelector(".last-events .meet .timer .days span:first-child");

let timeBetweenDayOfEventAndDayNow = parseInt((dayOfEvent - dayNow) / 1000);
let count = setInterval(function(){
	timeBetweenDayOfEventAndDayNow -= 1;
	if(timeBetweenDayOfEventAndDayNow === 0){
		clearInterval(count)
	}
	let time = timeBetweenDayOfEventAndDayNow
	days.textContent = parseInt(time / (24 * 3600));
	time %= 24 * 3600;
	hours.textContent = parseInt(time / (3600));
	time %= 3600;
	minutes.textContent =  parseInt(time / 60);
	time %= 60
	seconds.textContent = time;
},1000)

// end of countdown
// start stats
let numberOftimeOfRepetationOfload = 0;
window.addEventListener("load",(event) => {
	document.querySelector(".stats").addEventListener("mouseenter",function(event){
		document.querySelectorAll(".stats .grid .box h2").forEach((header) => {
			if(numberOftimeOfRepetationOfload <= 3){
				let i = +header.textContent;
				header.textContent = 0;
				let stop = setInterval(() => {
					header.textContent = +header.textContent + 1;
					if(+header.textContent === i){
						clearInterval(stop)
					}
				},10)
				numberOftimeOfRepetationOfload++;
			}
		})
	})
})
// end stats