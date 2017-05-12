angular
  .module("app")
  .controller("HomeController", HomeController)

function HomeController($http, $stateParams, $state) {
  const vm = this

  vm.$onInit = function() {
    console.rand("It's like everyone tells a story about themselves inside their own head.")
    console.rand("Always. All the time.");
    console.rand("That story makes you what you are.")
    console.rand("We build ourselves out of that story.")
    console.rand("(Patrick Rothfuss)")
  }

}
