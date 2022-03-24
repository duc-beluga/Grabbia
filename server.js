var express = require('express');
var handlebars = require('express-handlebars');
var fs = require("fs");
var bodyParser = require("body-parser");
var multer = require("multer");

var upload = multer();
var app = express();
var port = process.env.PORT || 3000;

const seedDataPath = "/SeedData.json";
const cartDataPath = "/CartItem.json"
var seedData = require("."+seedDataPath);
var cartData = require('./CartItem.json')

app.engine("handlebars", handlebars({defaultLayout: "pageSkeleton"}));
app.set("view engine", "handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(upload.array());
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.status(200).render("main", {//add title to these for the page header
        listings: seedData,
        shop: true,
        afterClicked: true
    });
});

app.get("/listings/:id", function(req, res) {
    var listingId = req.params.id;
    var listingData = seedData[listingId];
    if(listingId >= 0 && listingId < seedData.length) {
        res.status(200).render("singleListing", {
            listings: [listingData]        
        });
    } else {
        res.status(404).render("404");
    }
});

app.get("/create", function(req, res) {
    res.status(200).render("newListing", {
        create: true
    });
    //res.send("get method");
});

app.post("/create/submit", function(req, res, next) {
    var body = req.body;
    if(body && body.seller && body.productName && body.description && body.price && body.numRemaining && body.rating && body.imgSource) {//rating and id shouldnt be input by user. seller probably shouldnt be either
        //add listing to seed data
        seedData.push({
            seller: body.seller,
            productName: body.productName,
            description: body.description,
            price: body.price,
            numRemaning: body.numRemaning,
            rating: body.rating,
            imgSource: body.imgSource,
            id: seedData.length
        });//need to calculate raiting somewhere
        //write data to seed Data
        fs.writeFile(
            __dirname + seedDataPath,
            JSON.stringify(seedData, null, 1),
            function(err) {
                if(err) {
                    res.status(500).send("Error while adding new listing. Try again later");
                    console.error("Error while adding new listing: ", err);
                    seedData.pop();
                } else {
                    res.status(200).redirect("/listings/"+(seedData.length-1));
                }
            }
        );
    } else {
        next();
    }
});

app.post("/buy", function(req, res, next) {
    data = seedData[req.body.id]
    cartData.push(data)
    fs.writeFile(
        __dirname + cartDataPath, 
        JSON.stringify(cartData, null, 1), 
        function(err) {
            if(err) {
                res.status(500).send("Error while adding new item into Cart. Try again later");
                console.error("Error while adding new item into Cart: ", err);
                seedData.pop();
            } else {
                res.status(200).redirect("/listings/"+(cartData.length-1));
            }
        }
    )
});

app.post("/remove", function(req, res, next) {
    console.log(cartData.length)
    for (var i = 0; i < cartData.length; ++i) {
        console.log(cartData[i].id + " and " + req.body.id)
        if (cartData[i].id == req.body.id) {
            console.log("found it")
            cartData.splice(i, 1)
            break;
        }
        else {
            console.log("not found")
        }
    }
    fs.writeFile(
        __dirname + cartDataPath, 
        JSON.stringify(cartData, null, 1), 
        function(err) {
            if(err) {
                res.status(500).send("Error while adding new item into Cart. Try again later");
                console.error("Error while adding new item into Cart: ", err);
                seedData.pop();
            } else {
                res.status(200).redirect("/listings/"+(cartData.length-1));
            }
        }
    )
})

app.get("/cart", function(req, res) {
    res.status(200).render("main", {
        listings: cartData,
        cart: true
    });
});

app.get("/explore", function(req, res) {
    res.status(200).render("explore", {
        explore: true
    });
});

app.get("*", function(req, res) {
    res.status(404).render("404");
});

app.listen(port, function() {
    console.log("Server is listening on port:", port);
    if(!seedData) {
        console.error("Server had trouble loading the SeedData");
    }
});