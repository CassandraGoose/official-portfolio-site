angular
  .module("app")
  .controller("ShouldIController", ShouldIController)

function ShouldIController($http, $stateParams, $state) {
  const vm = this
    //base urL?

  vm.$onInit = function() {
  }
}
