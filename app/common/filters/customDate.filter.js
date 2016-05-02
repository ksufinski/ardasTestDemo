angular.module('angularFilter', []).filter('customDate', function(){
	return function (input) {
		var res = undefined;
		var date = [];

		if(input){
			date[0] = String(input.substr(0,4));
			date[1] = String(input.substr(4,3));
			date[2] = String(input.substr(7,3));
			res = date.join('-')
		}

		return res;
	}
});