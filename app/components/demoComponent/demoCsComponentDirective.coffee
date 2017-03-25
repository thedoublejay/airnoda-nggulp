try
  module = angular.module 'airnodaAppComp'
catch e
  module = angular.module 'airnodaAppComp', []

module.directive 'demoCsComponent', [ () ->
    restrict: 'A',
    templateUrl: 'components/demoComponent/demoCsComponent.html'
 ]
