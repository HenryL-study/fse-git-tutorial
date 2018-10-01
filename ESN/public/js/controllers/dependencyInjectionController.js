"use strict";
angular.module("fse-recitation")
.controller("dependencyInjectionController", function($scope, ngNotify /* add dependency here */) {
	$scope.showNotification = () => {
		// add code here
		ngNotify.set("Test Notification", "error");
	};
});
