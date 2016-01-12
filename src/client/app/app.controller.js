(function(){
	'use strict';

	angular.module('bud')
	.controller('appCtrl', appCtrl);

	function appCtrl () {
		var vm = this;
		
		////////////////////////////
		activate();
		function activate() {
			console.log('activated app ctrl!');
		}
				
	}
})();