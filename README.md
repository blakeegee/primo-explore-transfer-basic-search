# primo-explore-transfer-basic-search
Transfer your Primo basic search query to WorldCat Discovery or Google Scholar
# Prerequisites:
This code is for the ExLibris product Primo Explore (aka, Primo New UI). You will need to have downloaded your Primo UI Customization Package from the Primo Back Office. For more information on using the Package Manager, see https://knowledge.exlibrisgroup.com/Primo/Product_Documentation/Back_Office_Guide/090Primo_Utilities/The_UI_Customization_Package_Manager.
#Installation:
Add this code snippet to the custom.js file of your Primo UI Customization Package:
app.controller('prmFacetRangeAfterController', [function(){
	  try {
	  this.query = this.parentCtrl.facetService.$location.$$search.query.split(",")[2];
  } catch (e) {
    this.query = "";
  }
}]);
app.component('prmFacetRangeAfter', {
  bindings: { parentCtrl: '<' },
  controller: 'prmFacetRangeAfterController',
  template: '<p>Other Places to Search</p><p><a href="[Your WorldCat Discovery base URL]/search?queryString={{$ctrl.query}}" target="_blank">WORLDCAT DISCOVERY</a><br/><a href="https://scholar.google.com/scholar?q={{$ctrl.query}}" target="_blank">GOOGLE SCHOLAR</a></p>'
});
#What is Does:
The controller locates the search query and splits it into its constituent elements. The search string is element [2].
The component inserts a link to Worldcat and Google Scholar into the facets panel.
#Notes:
This component is specifically inserted immediately after the date range facet.
You will need to replace the WorldCat link with one that is appropriate to your institution.
This search transfer only works in Basic Search. The search query in Advanced Search is constructed differently.
Add this code snippet after the opening:
(function(){
"use strict";
'use strict';
var app = angular.module('viewCustom', ['angularLoad']);
and before the closing:
})();