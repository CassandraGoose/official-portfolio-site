angular
  .module("app")
  .controller("HomeController", HomeController)

function HomeController($http, $stateParams, $state) {
  const vm = this

  vm.$onInit = function() {
    console.static("It's like everyone tells a story about themselves inside their own head.")
    console.static("Always. All the time.");
    console.static("That story makes you what you are.")
    console.static("We build ourselves out of that story.")
    console.static("(Patrick Rothfuss)")
  }

}
