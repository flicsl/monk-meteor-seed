(function(){
	angular.module('bud', ['angular-meteor']);

	function onReady() {
		angular.bootstrap(document, ['bud']);
	}
 
	if (Meteor.isCordova)
		angular.element(document).on('deviceready', onReady);
	else
		angular.element(document).ready(onReady);
})();