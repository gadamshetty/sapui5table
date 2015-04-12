sap.ui.controller("sapui5table.app", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapui5table.app
*/
	onInit: function() {

		//Define some sample data 
		var aData = [
			{lastName: "Dente", name: "Al", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 4},
			{lastName: "Friese", name: "Andy", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person2.gif", gender: "male", rating: 2},
			{lastName: "Mann", name: "Anita", checked: false, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 3},
			{lastName: "Schutt", name: "Doris", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 4},
			{lastName: "Open", name: "Doris", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 2},
			{lastName: "Dewit", name: "Kenya", checked: false, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 3},
			{lastName: "Zar", name: "Lou", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 1},
			{lastName: "Burr", name: "Tim", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person2.gif", gender: "male", rating: 2},
			{lastName: "Hughes", name: "Tish", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 5},
			{lastName: "Town", name: "Mo", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 3},
			{lastName: "Case", name: "Justin", checked: false, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 3},
			{lastName: "Time", name: "Justin", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 4},
			{lastName: "Barr", name: "Sandy", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 2},
			{lastName: "Poole", name: "Gene", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person2.gif", gender: "male", rating: 1},
			{lastName: "Ander", name: "Corey", checked: false, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 5},
			{lastName: "Early", name: "Brighton", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 3},
			{lastName: "Noring", name: "Constance", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 4},
			{lastName: "O'Lantern", name: "Jack", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 2},
			{lastName: "Tress", name: "Matt", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person2.gif", gender: "male", rating: 4},
			{lastName: "Turner", name: "Paige", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 3}
		];
     
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData({modelData: aData});
		
		sap.ui.getCore().setModel(oModel,'cm');

		
	},


	del : function(){
		console.log("fired...");
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapui5table.app
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapui5table.app
*/
	onAfterRendering: function() {
	     debugger;
			var tab1 = sap.ui.getCore().byId('tb111')
			var varpage = tab1._oPaginator;
			varpage.attachPage(function(){ 
				console.log(tab1.getFirstVisibleRow())
				});
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapui5table.app
*/
//	onExit: function() {
//
//	}

});