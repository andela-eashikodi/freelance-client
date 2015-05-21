'use strict';

describe('Freelance App Contrl', function(){
  var homeScope, jobScope, jobSingleScope, myJobsScope, homeCtrl, jobCtrl, job_singleCtrl, myJobsCtrl, profileCtrl, userCtrl;
  beforeEach(module('freelanceApp'));

  beforeEach(inject(function($controller, $rootScope, _$httpBackend_, $http){
    $httpBackend = _$httpBackend_;
    homeScope = $rootScope.$new();
    homeCtrl = $controller('homeCtrl', {
      $scope: homeScope
    });
    jobScope = $rootScope.$new();
    homeCtrl = $controller('jobCtrl', {
      $scope: jobScope
    });
    jobSingleScope = $rootScope.$new();
      job_singleCtrl = $controller('job_singleCtrl', {
        $scope: jobSingleScope
    });
    myJobsScope = $rootScope.$new();
      myJobsCtrl = $controller('myJobsCtrl', {
        $scope: scope
    });
    homeScope = $rootScope.$new();
      homeCtrl = $controller('homeCtrl', {
        $scope: scope
    });
    homeScope = $rootScope.$new();
      homeCtrl = $controller('homeCtrl', {
        $scope: scope
      });

  }));

  it('should be defined', function() {
    expect(controller).toBeDefined();
  });
});


/*'use strict';

describe('Enroll App', function(){
  var AdminScope, LoginScope, StudentScope;
  var http, $httpBackend, service;
  var AdminCtrl, LoginCtrl, StudentCtrl;
  beforeEach(function(){
    module('Enroll');
    inject(function($controller, $rootScope, _$httpBackend_, $http, ApiService){
      service = ApiService;
      $httpBackend = _$httpBackend_;
      AdminScope = $rootScope.$new();
      LoginScope = $rootScope.$new();
      StudentScope = $rootScope.$new();
      AdminCtrl = $controller('AdminCtrl', {$scope:AdminScope, $http: http});
      LoginCtrl = $controller('LoginCtrl', {$scope:LoginScope, $http: http});
      StudentCtrl = $controller('StudentCtrl', {$scope:StudentScope, $http: http});
    });
  });

  it('Controllers should be defined...', function(){
    expect(AdminCtrl).toBeDefined();
    expect(LoginCtrl).toBeDefined();
    expect(StudentCtrl).toBeDefined();
    expect(AdminScope).toBeDefined();
    expect(LoginScope).toBeDefined();
    expect(StudentScope).toBeDefined();
  });

  describe('Admin Ctrl', function(){
    it('should load user profile', function(){
      expect(AdminScope.loadProfile).toBeDefined();
    });

    it('should remove user profile', function(){
      expect(AdminScope.removeUser).toBeDefined();
    });
  });

  describe('Api Service', function(){
    it('should be defined', function(){
     expect(service.getStudents()).toBeDefined();
    });

    it('should successfully make http GET students request', function(){
      var students;
      $httpBackend.whenGET("/api/v1/students").respond([{
        id: 1,
        name: "john"
      }]);
      service.getStudents().then(function(res){
        students = res;
        $httpBackend.flush();
        expect(students instanceof Array).toBeTruthy();
      });
    });
  });

});*/
