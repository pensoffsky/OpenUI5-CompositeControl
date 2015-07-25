// Provides control view.CompositeControl.
sap.ui.define(['jquery.sap.global',
		'sap/ui/core/Control',
		'sap/m/HBox',
		'sap/m/VBox',
		'sap/m/FlexBox',
		'sap/m/FlexItemData',
		'sap/m/FlexDirection',
		'sap/m/FlexAlignItems',
		'sap/m/FlexJustifyContent'
	],
	function(jQuery,
		Control,
		HBox,
		VBox,
		FlexBox,
		FlexItemData,
		FlexDirection,
		FlexAlignItems,
		FlexJustifyContent) {
		"use strict";

		var CompositeControl = Control.extend("view.CompositeControl", {
			metadata: {

				properties: {

				},
				defaultAggregation: "content",
				aggregations: {
					leftItems: {
						type: "sap.ui.core.Control",
						multiple: true,
						singularName: "leftItem"
					},
					content: {
						type: "sap.ui.core.Control",
						multiple: false
					}
				}
			}
		});

		// /////////////////////////////////////////////////////////////////////////////
		// /// Members
		// /////////////////////////////////////////////////////////////////////////////

		CompositeControl.prototype._oLeftHBox = null;

		CompositeControl.prototype._oContentVBox = null;

		CompositeControl.prototype._oControlToRender = null;

		// /////////////////////////////////////////////////////////////////////////////
		// /// Control Overrides
		// /////////////////////////////////////////////////////////////////////////////

		CompositeControl.prototype.getContent = function() {
			return this._oContentVBox.getItems();
		};
		CompositeControl.prototype.setContent = function(oContent) {
			this._oContentVBox.removeAllItems();
			this._oContentVBox.addItem(oContent);
			this.invalidate();
			return this;
		};

		CompositeControl.prototype.getLeftItems = function() {
            return this._oLeftHBox.getItems();
        };
        CompositeControl.prototype.insertLeftItem = function(oItem, iIndex) {
            this._oLeftHBox.insertItem(oItem, iIndex);
			this.invalidate();
            return this;
        };
        CompositeControl.prototype.addLeftItem = function(oItem) {
            this._oLeftHBox.addItem(oItem);
			this.invalidate();
            return this;
        };
        CompositeControl.prototype.removeLeftItem = function(vIndex) {
            this.invalidate();
			return this._oLeftHBox.removeItem(vIndex);
        };
        CompositeControl.prototype.removeAllLeftItems = function() {
            this.invalidate();
			return this._oLeftHBox.removeAllItems();
        };
        CompositeControl.prototype.destroyLeftItems = function() {
            this._oLeftHBox.destroyItems();
			this.invalidate();
            return this;
        };
        CompositeControl.prototype.indexOfLeftItem = function(oItem) {
            return this._oLeftHBox.indexOfItem(oItem);
        };

		CompositeControl.prototype.init = function() {
			this._oLeftHBox = new HBox({
				layoutData: new FlexItemData({
					growFactor: 0
				})
			});

			this._oContentVBox = new VBox({
				layoutData: new FlexItemData({
					growFactor: 1
				})
			});

			this._oControlToRender = new FlexBox({
				layoutData: new FlexItemData({
					growFactor: 0
				}),
				alignItems: FlexAlignItems.Center,
				justifyContent: FlexJustifyContent.End,
				items: [this._oLeftHBox, this._oContentVBox]
			});
		};

		// /////////////////////////////////////////////////////////////////////////////
		// /// Public functions
		// /////////////////////////////////////////////////////////////////////////////

		CompositeControl.prototype.getControlToRender = function() {
			return this._oControlToRender;
		};

		// /////////////////////////////////////////////////////////////////////////////
		// /// Private functions
		// /////////////////////////////////////////////////////////////////////////////

		return CompositeControl;

	}, /* bExport= */ true);