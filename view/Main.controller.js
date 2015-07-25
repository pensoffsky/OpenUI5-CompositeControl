sap.ui.controller("view.Main", {

	onAddLeftItem: function() {
		var oCompositeControl2 = this.getView().byId("idCompositeControl2");
		var oButton = new sap.m.Button({
			text: "remove",
			press: function(){
				var iIndex = oCompositeControl2.getLeftItems().length;
				oCompositeControl2.removeLeftItem(iIndex - 1);
			}
		});
		oCompositeControl2.addLeftItem(oButton);
	}
	
});