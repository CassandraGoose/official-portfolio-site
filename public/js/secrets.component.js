angular
  .module("app")
  .controller("SecretsController", SecretsController)

function SecretsController($http, $stateParams, $state) {
  const vm = this
    //base urL?

  vm.$onInit = function() {
  }
}
