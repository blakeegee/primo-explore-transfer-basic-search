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
  template: '<hr/><p style="font-weight: 600; color: black;">Other Places to Search</p><p><a href="https://washingtonstate.on.worldcat.org/search?queryString={{$ctrl.query}}" target="_blank">WORLDCAT DISCOVERY</a><br/><a href="https://scholar.google.com/scholar?q={{$ctrl.query}}" target="_blank">GOOGLE SCHOLAR</a></p><hr/>'
});