describe('services', function(){


	beforeEach(module('ardasApp'));

	it('check for factory', inject(function(Task){
				expect(Task).toBeDefined();
	}));

});