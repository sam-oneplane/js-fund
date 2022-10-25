const linkCategory = document.getElementById("linkCategory");
const submitButton = document.getElementById("submitButton");
const addBtn = document.getElementById("addBtn");
const cancelButton = document.getElementById("cancelButton");
const addLinkPanel = document.getElementById("addLinkPanel");
const linksList = document.getElementById("linksList");
const addedCategories = document.querySelector("#addedCategories");
const addLinkContainer = document.querySelector("#addLinkContainer");

let editIndex = -1;
let linkCategories=[];
let links = [
    {
		title: 'Wes Bos Courses',
		url: 'http://wesbos.com/courses/',
		categories: ['Node', 'ES6', 'Flexbox', 'React'],
		date: new Date()
	},
	{
		title: 'Traversy Media',
		url: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
		categories: ['Node', 'CSS', 'Javscript', 'Angular'],
		date: new Date()
	},
	{
		title: 'Colt Steele',
		url: 'https://www.udemy.com/user/coltsteele/',
		categories: ['Node', 'Javascript', 'React', 'MEAN', 'Mongo'],
		date: new Date()
	},
];

displayLinksList();
// Service functions


// display all written link categories 
function displayLinkCategories() {
    addedCategories.innerHTML = "";
    for (let category of linkCategories) {
        categoryHtmlString = `<span class="category">${category}</span>`;
        addedCategories.innerHTML += categoryHtmlString ;
    }
}

function hideFormPanel() {
	addLinkContainer.classList.add('hidden');
    clearLinkForm();
}

function showFormPanel() {
	addLinkContainer.classList.remove('hidden');
    displayLinkCategories();
}

function deleteLink(index) {
    links.splice(index,1);
    displayLinksList();
}

function editLink(index) {
    editIndex = index;
    linkTitle.value = links[index].title;
    linkUrl.value = links[index].url;
    linkCategories = links[index].categories;
    showFormPanel();

}


function displayLinksList() {
    // reset documents viewd lists
    linksList.innerHTML = "";
    let index = 0;
    for (let link of links) {
        let linkHtmlString = `
        <div class="flex-item">
		    <div class="link panel">
				<div class="link-options">
					<button class="btn-sm" onclick="deleteLink(${index})">Delete</button>
					<button class="btn-sm" onclick="editLink(${index})">Edit</button>
				</div>
				<a href="${link.url}">
					<h1 class="header">${link.title}</h1>
				</a>
				<p class="link-date">${link.date}</p>
				<div class="categories">
					Categories:`;
		        for (let category of link.categories) {
			        linkHtmlString += `<span class="category">${category}</span>`;
		        }

		linkHtmlString += `	
			    </div>	
		    </div>
        </div>`;
        linksList.innerHTML += linkHtmlString;
        index++;
    }
}

function clearLinkForm() {
    // clear all add link form fields
    linkTitle.value = "";
    linkUrl.value = "" ;
    linkCategory.value = "";
    linkCategories = [];
    addedCategories.innerHTML = "";
}

// Handlers

// open add link pannel when add button is clicked
addBtn.addEventListener('click', (event) => {
	showFormPanel();
});

// hide add link pannel when cancel is clicked
cancelButton.addEventListener('click', (event) => {
	event.preventDefault();
	hideFormPanel();
});

// create link comma seperate categories n to categories list 
linkCategory.addEventListener('keydown', function(event) {
    if (event.key === ","){
        event.preventDefault();
        linkCategories.push(linkCategory.value);
        // reset all text from category class
        linkCategory.value = "";
        // display all categories on screen
        displayLinkCategories();
    }
});

// Submite form {title, link , categories} to linksList 
submitButton.addEventListener("click", function(event) {

    event.preventDefault();
    // recognize linkTitel & linkUrl
    const title = linkTitle.value;
    const url = linkUrl.value;
    const categories = linkCategories;

    const newLink = {
        title,
        url,
        categories,
        date: new Date(),
    };
    if(editIndex === -1) {
        links.unshift(newLink);
    }else {
        links[editIndex] = newLink;
        editIndex = -1 ;
    }

    clearLinkForm();

    displayLinkCategories() ;

    // hide the addLinkPannel whem submited
    hideFormPanel();
    // itterate over links list and present  
    displayLinksList();
    
});

