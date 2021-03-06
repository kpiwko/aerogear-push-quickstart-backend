'use strict';

var prodoctor = angular.module('prodoctor', [ 'prodoctor.filters' ]).config(
		[ '$routeProvider', function($routeProvider) {
			$routeProvider.when('/Leads', {
				templateUrl : 'partials/Lead/search.html',
				controller : SearchLeadController
			}).when('/Leads/new', {
				templateUrl : 'partials/Lead/detail.html',
				controller : NewLeadController
			}).when('/Leads/edit/:LeadId', {
				templateUrl : 'partials/Lead/detail.html',
				controller : EditLeadController
			}).when('/Leads/show/:LeadId', {
				templateUrl : 'partials/Lead/show.html',
				controller : ShowLeadController
			}).when('/SaleAgents', {
				templateUrl : 'partials/SaleAgent/search.html',
				controller : SearchSaleAgentController
			}).when('/SaleAgents/new', {
				templateUrl : 'partials/SaleAgent/detail.html',
				controller : NewSaleAgentController
			}).when('/SaleAgents/edit/:SaleAgentId', {
				templateUrl : 'partials/SaleAgent/detail.html',
				controller : EditSaleAgentController
			}).otherwise({
				templateUrl : 'partials/Lead/search.html',
				controller : SearchLeadController
			});
		} ]);
