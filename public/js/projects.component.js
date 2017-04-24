angular
  .module("app")
  .controller("ProjectsController", ProjectsController)

function ProjectsController($http, $stateParams, $state) {
  const vm = this
    //base urL?

  vm.$onInit = function() {
    console.log("what up from projects");
  }
}
