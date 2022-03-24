var allListings = [];

function LoadListings(filter) {
    ClearListings();
    var container = document.querySelector(".listing-container");
    allListings.forEach(function(listing) {
        //if(matchesFilter(filter))
            InsertListing(listing);
    });
}

function ClearListings() {
    var container = document.querySelector(".listing-container");
    if(container) {
        while(container.firstChild) {
            container.removeChild(container.lastChild);
        }
    }
}

function InsertListing(listing) {
    var newListing = Handlebars.templates.listing({
        seller: listing.seller,
        productName: listing.productName,
        description: listing.description,
        price: listing.price,
        numRemaning: listing.numRemaning,
        rating: listing.rating,
        imgSource: listing.imgSource
    });

    document.querySelector("main.listing-container").insertAdjacentHTML("beforeend", newListing);
}

function SetActiveLink() {
    var path = window.location.href;
}

var buy = document.getElementById('create-buy-button')
var curURL = window.location.href
var index = curURL.substr(31, curURL.length - 31)
console.log(index)
var itemID = index
if(buy) {
    buy.addEventListener('click', function(){
        axios.post('/buy', {
            id: itemID
        })
        document.getElementById('buy-button').style.display = "block"
    })
}

var back = document.getElementById('create-back-button')
if(back) {
    back.addEventListener('click', function(){
        window.location.href = 'http://localhost:3000/'
    })
}

var remove = document.getElementById('create-remove-button')
if(remove) {
    remove.addEventListener('click', function(){
        axios.post('/remove', {
            id: itemID
        })
        document.getElementById('remove-button').style.display = "block"
    })
}

function pop() {
    document.getElementById('buy-button').style.display = "none"
    document.getElementById('remove-button').style.display = "none"
}
function redirect () {
    window.location.href = "http://localhost:3000/cart" 
}

SetActiveLink();
