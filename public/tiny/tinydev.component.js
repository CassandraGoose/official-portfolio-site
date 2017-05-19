angular
  .module("app")
  .controller("TinyDevController", TinyDevController)

function TinyDevController($http, $stateParams, $state) {
  const vm = this
    //base urL?

  vm.$onInit = function() {
  }
}
