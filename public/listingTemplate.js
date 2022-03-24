(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['listing'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"listing\">\r\n    <a href=\"/listings/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":23},"end":{"line":2,"column":29}}}) : helper)))
    + "\">\r\n        <div class=\"listing-content\">\r\n            <div class=\"listing-image-container\">\r\n                <img class=\"listing-image\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"imgSource") || (depth0 != null ? lookupProperty(depth0,"imgSource") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgSource","hash":{},"data":data,"loc":{"start":{"line":5,"column":48},"end":{"line":5,"column":61}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"productName") || (depth0 != null ? lookupProperty(depth0,"productName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"productName","hash":{},"data":data,"loc":{"start":{"line":5,"column":68},"end":{"line":5,"column":83}}}) : helper)))
    + "\">\r\n            </div>\r\n            <p class=\"listing-name\">\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"productName") || (depth0 != null ? lookupProperty(depth0,"productName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"productName","hash":{},"data":data,"loc":{"start":{"line":8,"column":16},"end":{"line":8,"column":31}}}) : helper)))
    + "\r\n            </p>\r\n            <p class=\"listing-description\">\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":11,"column":16},"end":{"line":11,"column":31}}}) : helper)))
    + "\r\n            </p>\r\n            <p class=\"listing-price\">\r\n                Buy $"
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":14,"column":21},"end":{"line":14,"column":30}}}) : helper)))
    + "\r\n            </p>\r\n            <p class=\"listing-stock\">\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"numRemaning") || (depth0 != null ? lookupProperty(depth0,"numRemaning") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numRemaning","hash":{},"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":17,"column":31}}}) : helper)))
    + " left in stock\r\n            </p>\r\n            <p class=\"listing-rating\">\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"rating") || (depth0 != null ? lookupProperty(depth0,"rating") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":26}}}) : helper)))
    + "/5\r\n            </p>\r\n        </div>\r\n    </a>\r\n</article>";
},"useData":true});
})();