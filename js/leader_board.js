var db = [];
var dataUrl = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";   // recent

function init() {
fetch("json/data_recent_small.json")
.then(response => response.json())
.then(function(data) {
db = data;                     // place the database in the global variable db
console.log(data);
})
.catch(error => console.log("There was an error: ", error));
}

init();
