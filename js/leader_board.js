/*   Author: Richard Myatt
     Date: 30 May 2018

     An exercise in data visualization and a first use of materialize.
*/

// main vue.js instance
new Vue({
  el: "#app",
  data: {
    recentEnabled: true,
    urlRecent: "https://fcctop100.herokuapp.com/api/fccusers/top/recent",
    urlAlltime: "https://fcctop100.herokuapp.com/api/fccusers/top/alltime",
    userData: []
  },
  methods: {
    // helper method to fetch remote data
    getData: function(url) {
      fetch(url)
      .then(response => response.json())
      .then(data => {this.userData = data})
      .catch(error => console.log("There was an error: ", error));
    },
    // retrieve data relating to recent activity
    getRecent: function() {
      if(!this.recentEnabled) {
        this.getData(this.urlRecent);
        this.recentEnabled = true;
      }
    },
    // retrieve data relating to all time scores
    getAlltime: function() {
      if(this.recentEnabled) {
        this.getData(this.urlAlltime);
        this.recentEnabled = false;
      }
    }
  },
  // set up initial view of board by retrieving recent scores data
  created: function() {
    this.getData(this.urlRecent);
  }
});
