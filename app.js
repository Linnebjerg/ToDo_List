//jshint esversion:6
 const express = require ("express");
 const bodyParser = require ("body-parser");

 const app = express();

 app.set('view engine', 'ejs');
 app.use(bodyParser.urlencoded {extended:true}));
 app.use(express.static("public"));

 app.get("/", function(req, res){

var items = [];
 var today = new Date();

var options {
  weekday: "long",
  day:"numeric",
  month:"long"
};

var day = today.toLocaleDateString("en-GB", options);

 }
  res.render("list", {kindOfDay: day, newListItems: items});
 });

// --- NOTE: Remember to initialize 'bodyParser'-constant before this.          ---
// --- It is initialized by writing the following, before this "POST"-request:  ---
// --- " app.use(bodyParser.urlencoded {extended:true})); "                     ---
 app.post("/", function(req, res){
   var item = req.body.newItems;

   items.push(item);
 }

  res.redirect("/");
 });


 app.listen(3000, function() {
  console.log ("Server is now running on port 3000");
 });

 app.get("/work", function(req, res){
   res.render("list" + {listTitle: "Work List", newListItems: items});
  });

 app.post("/work", function(req, res){
   let item = req.body.newItems;

   workItems.push(item);
 }
  res.redirect("/work");
 });
