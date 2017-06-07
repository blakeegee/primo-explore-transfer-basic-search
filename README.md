# primo-explore-transfer-basic-search
Transfer your Primo Basic Search query to WorldCat Discovery or Google Scholar
## prerequisites:
* this code is for the ExLibris product Primo Explore (aka, Primo New UI)
* you will need to have downloaded your Primo UI Customization Package from the Primo Back Office
* for more information on using the Package Manager, see https://knowledge.exlibrisgroup.com/Primo/Product_Documentation/Back_Office_Guide/090Primo_Utilities/The_UI_Customization_Package_Manager
## installation:
add this code snippet to the `custom.js` file of your Primo UI Customization Package:

```javascript
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
```

## what is does:
* the controller locates the search query and splits it into its constituent elements
	* the search string is element [2]
* the component inserts a link to Worldcat Discovery and Google Scholar into the facets panel
## notes:
* this component is inserted immediately after the Date Range facet
* you will need to replace the WorldCat Discovery base URL with one that is appropriate for your institution
* this search transfer only works in Basic Search
	* the search query in Advanced Search is constructed differently
* add the code snippet after the opening:

```javascript
(function(){
"use strict";
'use strict';
var app = angular.module('viewCustom', ['angularLoad']);
```

and before the closing:

```javascript
})();
```
* this code is modeled after the code used in the Primo New UI Cookbook
