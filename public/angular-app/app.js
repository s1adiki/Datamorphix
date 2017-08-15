angular.module('meanchat', ['ngRoute', 'angular-jwt']).config(config).run(run);

function config($httpProvider, $routeProvider, $locationProvider) {

  $httpProvider.interceptors.push('AuthInterceptor');
  $locationProvider.html5Mode(false).hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/main/main.html',
      controller: mainController,
      controllerAs: 'vm',
      access: {
        restricted: false
      }

    })
    /*.when('/hotels', {
      templateUrl: 'angular-app/hotel-list/hotels.html',
      controller: HotelsController,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })
    .when('/hotel/:id', {
      templateUrl: 'angular-app/hotel-display/hotel.html',
      controller: HotelController,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })*/
    .when('/register', {
      templateUrl: 'angular-app/register/register.html',
      controller: RegisterController,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })
    .when('/home', {
      templateUrl: 'angular-app/main/main.html',
      controller: mainController,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })
    .when('/home_loggedin', {
      templateUrl: 'angular-app/main_loggedin/main_loggedin.html',
      controller: mainloggedinController,
      controllerAs: 'vm',
      access: {
        restricted: true
      }
    })
    .when('/dashboard', {
      templateUrl: 'angular-app/dashboard/dashboard.html',
      controller: dashboardController,
      controllerAs: 'vm',
      access: {
        restricted: true
      }
    })
    .when('/password', {
      templateUrl: 'angular-app/forget_password/forget_password.html',
      controller: userpasswordController,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })
    .when('/login', {
      templateUrl: 'angular-app/login/login.html',
      controller: userloginController,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })
    .when('/profile', {
      templateUrl: 'angular-app/profile/profile.html',
      controller: PLoginController,
      controllerAs: 'vm',
      access: {
        restricted: true
      }
    })
    .when('/contactUs', {
      templateUrl: 'angular-app/contact_us/contact_us.html',
      controller: contactController,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })
    .when('/scrape', {
      templateUrl: 'angular-app/scrape/scrape.html',
      controller: Scrapecontroller,
      controllerAs: 'vm',
      access: {
        restricted: true
      }
    })
    .when('/scrape_url', {
      templateUrl: 'angular-app/scrape/scrape_url.html',
      controller: Scrapecontroller_url,
      controllerAs: 'vm',
      access: {
        restricted: true
      }
    })
    .when('/store', {
      templateUrl: 'angular-app/Bot-Store/botstore.html',
      controller: BotstoreController,
      controllerAs: 'vm',
      access: {
        restricted: true
      }
    })
    .when('/integration', {
      templateUrl: 'angular-app/integration/integration.html',
      controller: integrationcontroller,
      controllerAs: 'vm',
      access: {
        restricted: true
      }
    })
    .when('/final_store', {
      templateUrl: 'angular-app/final_store/final_store.html',
      controller: deploycontroller,
      controllerAs: 'vm',
      access: {
        restricted: true
      }
    })
    .when('/forget', {
      templateUrl: 'angular-app/forget_password/forget_email.html',
      controller: forgetemailcontroller,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })
    .when('/plan', {
      templateUrl: 'angular-app/plan/plan.html',
      controller: plancontroller,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })
    .when('/support', {
      templateUrl: 'angular-app/support/support.html',
      controller: supportcontroller,
      controllerAs: 'vm',
      access: {
        restricted: true
      }
    })
    
    .otherwise({
      redirectTo: '/'
    });
}

function run($rootScope, $location, $window, AuthFactory) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
      //event.preventDefault();
      $location.path('/home');
     /* window.history.forward();*/
    }
    if(nextRoute.access.restricted === false  && AuthFactory.isLoggedIn){
      //event.preventDefault();
      //$location.path('/login');
      $location.path('/dashboard');
      /*$location.path('/store');
      $location.path('/infostore');
      $location.path('/final_store');
      $location.path('/profile');
      $location.path('/scrape');*/
    }
  });
}
