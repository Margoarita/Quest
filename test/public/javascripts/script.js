let vm = new Vue({
    el:  "#app",
    data: {
        cats: [],
        input:""
    },
    mounted: function () {
            let self=this;
  
            axios.get("https://api.thecatapi.com/v1/images/search")
            .then(function (response){
              self.cat = response.data;
            })
    }
});