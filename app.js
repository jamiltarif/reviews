// store reviews data
const reviews = [
    {
        id:1,
        name: "Raiyan",
        job: "Full-stack developer",
        img: "images/img-review1.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus fugit libero odit atque, saepe idquaerat nesciunt molestiae perferendis dolor!"
    },
    {
        id:2,
        name: "Faiyaz",
        job: "Front-end developer",
        img: "images/img-review2.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus fugit libero odit atque, saepe idquaerat nesciunt molestiae perferendis dolor!"
    },
    {
        id:3,
        name: "Tisha",
        job: "Back-end developer",
        img: "images/img-review3.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus fugit libero odit atque, saepe idquaerat nesciunt molestiae perferendis dolor!"
    },
    {
        id:4,
        name: "Arosh",
        job: "Intern",
        img: "images/img-review2.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus fugit libero odit atque, saepe idquaerat nesciunt molestiae perferendis dolor!"
    }
];

// select item
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn"); 
const nextBtn = document.querySelector(".next-btn"); 
const randomBtn = document.querySelector(".random-btn"); 
// set starting item
let currrentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded",function(){
    showPerson();
});

//show person base item
function showPerson(){
const item = reviews[currrentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
}		

//next person show
nextBtn.addEventListener("click", function (){
	currrentItem++;
	if (currrentItem > reviews.length -1){
		currrentItem = 0; 
	}
	showPerson();
});

//prev person show
prevBtn.addEventListener("click", function (){
	currrentItem--;
	if (currrentItem < 0){
		currrentItem = reviews.length -1; 
	}
	showPerson();
});

//random button show
randomBtn.addEventListener("click", function(){
	currrentItem = Math.floor(Math.random()*reviews.length);
	showPerson();
});

