var app = app || {};

(function(a) {
    var viewModel = kendo.observable({
        vine:{},
    });
    
    function init(e) {
        var vineUrl = e.view.params.vineUrl;
        console.log(vineUrl);
        kendo.bind(e.view.element, viewModel);
        httpRequester.getJSON(app.servicesBaseUrl + "vines/vine?url=" + vineUrl)
        .then(function (vine) {
            viewModel.set("vine", vine);   
            console.log(vine);
        });        
    }
    
    a.vineViewModel = {
        init:init          
    };
}(app));