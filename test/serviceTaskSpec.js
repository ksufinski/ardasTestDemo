describe(' taskService', function(){
	var taskService, httpBackend;
	var tasks = [
		{
			"id": 1,
			"name": "Today_task1"
		},
		{
			"id": 11
		}];

	beforeEach(module('taskService'));

	beforeEach(inject(function(_taskService_, $httpBackend){
		taskService = _taskService_;
		httpBackend = $httpBackend;
	}));

	it('should return array of tasks', function(){
		httpBackend.whenGET('/tasks').respond(tasks);
		taskService.getTasks().then(function(el){
			expect(el.data[0].id).toBe(tasks[0].id);
		});
		httpBackend.flush();
	});

});