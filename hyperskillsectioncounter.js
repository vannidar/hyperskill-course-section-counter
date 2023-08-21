//The start and end of the range of courses you want to analyze
const searchStart = "Computer programming";
const searchEnd = "Paradigms";
//---------------------------------------------------------------

const containerElem = document.querySelector(" div[data-v-5e241a4d=''][data-component-name='transition'] ");

//console.log(Array.from(containerElem.children));

const topicList = Array.from(containerElem.children).filter((elem) => 
	elem.classList.contains('learning-activity')
);
//console.log("filtered topic list", topicList);

let minCount = 0;

let startIndex;
let endIndex;

let x = 0;
for( ; x < topicList.length; x++) {
	const title = topicList[x].querySelector("span.mr-1[data-v-3f0932ad='']").innerText;

	if(title == searchStart) {
		console.log("Found start search:", title);
		startIndex = x;
		break;
	}
}

for(let i = x; i < topicList.length; i++) {
	const query = topicList[i].querySelector("span.separate-by-comma:last-child");
	
	const title = topicList[i].querySelector("span.mr-1[data-v-3f0932ad='']").innerText;

	

	const minutes = Number(query.innerHTML.match(/[0-9]+/)[0]);
	minCount += minutes;	

	console.log(`${i}: ${title} | ${minutes} minutes`);

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
	console.log(`There are ${courseCount} courses and a total of ${minCount} minutes between start (inclusive) and end (inclusive).`);
}