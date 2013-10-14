var app = app || {};

(function(a) {
    var viewModel = kendo.observable({
        vines:[],
    });
    
    function init(e) {
        kendo.bind(e.view.element, viewModel);
        httpRequester.getJSON(app.servicesBaseUrl + "vines/all")
        .then(function (vines) {
            viewModel.set("vines", vines);            
        });        
    }
    
    a.homeViewModel = {
        init:init          
    };
}(app));