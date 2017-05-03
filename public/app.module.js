(function() {

  angular.module('app', ['ui.router'])
    .component('home', {
      templateUrl: '/home.html',
      controller: "HomeController"
    }).component('about', {
      templateUrl: '/about.html',
      controller: "AboutController"
    }).component('projects', {
      templateUrl: '/projects.html',
      controller: "ProjectsController"
    }).component('contact', {
      templateUrl: '/contact.html',
      controller: "ContactController"
    }).component('imageinspire', {
      templateUrl: '/imageinspire.html',
      controller: "ImageInspireController"
    }).component('ronme', {
      templateUrl: 'ronme.html',
      controller: "RonMeController"
    }).component('secrets', {
      templateUrl: 'secrets.html',
      controller: "SecretsController"
    }).component('shouldi', {
      templateUrl: 'shouldi.html',
      controller: "ShouldIController"
    }).component('textsense', {
      templateUrl: 'textsense.html',
      controller: 'TextSenseController'
    }).component('uxplor', {
      templateUrl: 'uxplor.html',
      controller: 'UxplorController'
    }).component('tinydev', {
      templateUrl: 'tinydev.html',
      controller: 'TinyDevController'
    })
}())
