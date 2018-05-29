var main = new Vue({
  el: "#app",
  data: {
    recentEnabled: true,
    urlRecent: "https://fcctop100.herokuapp.com/api/fccusers/top/recent",
    urlAlltime: "https://fcctop100.herokuapp.com/api/fccusers/top/alltime",
    userData: []
  },
  methods: {
    getData: function(url) {
      fetch(url)
      .then(response => response.json())
      .then(function(data) {
      main.userData = data;
      })
      .catch(error => console.log("There was an error: ", error));
    },
    getRecent: function() {
      if(!this.recentEnabled) {
        this.getData(this.urlRecent);
        this.recentEnabled = true;
      }
    },
    getAlltime: function() {
      if(this.recentEnabled) {
        this.getData(this.urlAlltime);
        this.recentEnabled = false;
      }
    }
  },
  created: function() {
    this.getData(this.urlRecent);
  }
});
