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
    })
}())
