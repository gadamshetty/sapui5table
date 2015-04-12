sap.ui.jsview("sapui5table.app", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5table.app
	*/ 
	getControllerName : function() {
		return "sapui5table.app";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapui5table.app
	*/ 
	createContent : function(oController) {
		
		
		//Create an instance of the table control
		var oTable = new sap.ui.table.Table('tb111',{
			title: "Table Example",
			visibleRowCount: 7,
			navigationMode : sap.ui.table.NavigationMode.Paginator,
			filter: function(evt){
				alert("row selec");
			}
		});
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Name"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "cm>name")
		}));
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "ID"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "cm>lastName")
		}));
		
//debugger;
		//var thismodel = sap.ui.getCore().getModel('cm');
		//oTable.setModel(thismodel);
		oTable.bindRows("cm>/modelData");
		
		
		//oTable.addEventDelegate(oController.del, oTable);
		
		return oTable;
	}

});
