'use strict';

/**
 * @ngdoc function
 * @name vacationCalendarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vacationCalendarApp
 */
angular.module('vacationCalendarApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    /*this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/
    var today = new Date();
    var selectStartDate = "";
    var selectEndDate = "";

    this.today = today;
    this.daysInMonth = getDaysInMonth(today.getMonth(), today.getFullYear());

    function getDaysInMonth(month, year) {
    	var date = new Date(year, month, 1);
    	var days = [];
    	while (date.getMonth() === month) {
    		var day = {
    			number: date.getDate(),
    			dayOfWeek: 0 < date.getDay() && date.getDay() < 6 ? 'weekday' : 'weekend'
    		}
    		days.push(day);
    		date.setDate(date.getDate() + 1);
    	}
    	return days;
    }

    function getEmployees(currTeam) {
    	var employees = [
    		{
    			name: 'Marek Juhar',
    			email: 'marchegianni@gmail.com',
    			country: 'SK',
    			team: 'AT/SK'
    		},
    		{
    			name: 'Sofiia Juhar',
    			email: 'sofia.march21@gmail.com',
    			country: 'SK',
    			team: 'AT/SK'
    		},
    		{
    			name: 'Lukas Fries',
    			email: 'hokejmanazer@gmail.com',
    			country: 'AT',
    			team: 'AT/SK'
    		},
    		{
    			name: 'Strange Guy',
    			email: 'blabla@gmail.com',
    			country: 'SK',
    			team: 'Other'
    		}
    	];
    	return employees.filter(employee => employee.team == currTeam);
    }

    function getTypes() {
    	var types = [
    		{
    			name: 'Vacation',
    			color: 'vacation'
    		},
    		{
    			name: 'Home Office',
    			color: 'home-office'
    		},
    		{
    			name: 'Training',
    			color: 'training'
    		},
    		{
    			name: 'Another Office',
    			color: 'another-office'
    		}
    	];
    	return types;
    }
    //console.log(this);
    //console.log($scope);
    $scope.changeMonth = function(change) {
    	//console.log($scope);
    	var newMonth, newYear;
    	var currMonth = $scope.main.today;
    	if (currMonth.getMonth() + change == 0) {
    		newMonth = 12;
    		newYear = currMonth.getFullYear() - 1;
    	}
    	else if (currMonth.getMonth() + change == 13) {
    		newMonth = 1;
    		newYear = currMonth.getFullYear() + 1;
    	}
    	else {
    		newMonth = currMonth.getMonth() + change;
    		newYear = currMonth.getFullYear();
    	}
    	$scope.main.today = new Date(newYear, newMonth, 1);
    	$scope.main.daysInMonth = getDaysInMonth(newMonth, newYear);
    	//console.log($scope);
    }

    $scope.setSelectStartDate = function(date, employee) {
    	console.log(date, employee);
    	selectStartDate = date;
    }

    $scope.setSelectEndDate = function(date, employee) {
    	console.log(date, employee);
    	selectEndDate = date;
    }

    $scope.setColor = function(bool) {
    	//console.log(date, employee);
    	$scope.isOver = bool;
    }
    
    
    this.employees = getEmployees('AT/SK');
    this.types = getTypes();
  }]);
