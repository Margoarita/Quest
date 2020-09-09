let vm = new Vue({
  el: "#app",
  data: {
    login: '',
    password: ''
  },
  methods: {
    regClicked: function (event) {
      let self = this;
      let params = {
        login: self.login,
        password: self.password,
      };
      axios.post('/users/registration', params)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
});