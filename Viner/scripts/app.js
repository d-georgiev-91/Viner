var app = app || {};

(function() {
    
    document.addEventListener("deviceready", function() {
        app.servicesBaseUrl = "http://vinescopecustomservices.apphb.com/api/";
        
        var kendoApp = new kendo.mobile.Application(document.body);
    });    
}());