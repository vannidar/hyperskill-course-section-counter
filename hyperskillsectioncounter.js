//The start and end of the range of courses you want to analyze
const searchStart = "Computer programming";
const searchEnd = "Paradigms";
//---------------------------------------------------------------

//Query element with attributes corresponding with container of courses
const containerElem = document.querySelector(" div[data-v-5e241a4d=''][data-component-name='transition'] ");

//Convert HTML to array and filter out elements in the div that aren't course containers
const topicList = Array.from(containerElem.children).filter((elem) => 
	elem.classList.contains('learning-activity')
);

let minuteCount = 0;

let startIndex;
let endIndex;

//Loop until beginning of the course range is reached
let x = 0;
for( ; x < topicList.length; x++) {
	const title = topicList[x].querySelector("span.mr-1[data-v-3f0932ad='']").innerText;

	if(title == searchStart) {
		console.log("Found start search:", title);
		startIndex = x;
		break;
	}
}

//Add up minutes and course count until end of range
for(let i = x; i < topicList.length; i++) {
	const query = topicList[i].querySelector("span.separate-by-comma:last-child");
	
	const title = topicList[i].querySelector("span.mr-1[data-v-3f0932ad='']").innerText;

	const minutes = Number(query.innerHTML.match(/[0-9]+/)[0]);
	minuteCount += minutes;	

	console.log(`${i}: ${title} | ${minutes} minutes`);

	//Break loop after reaching end of range
	if(title == searchEnd) {
		console.log("Found end course:", title);
		endIndex = i;
		break;
	}
}

if(startIndex === undefined) {
	console.log("Could not find start course");
} 
else if(endIndex === undefined) {
	console.log("Could not find end course");
}
else {
	const courseCount = endIndex - startIndex + 1;
	console.log(`There are ${courseCount} courses and a total of ${minuteCount} minutes between start (inclusive) and end (inclusive).`);
}