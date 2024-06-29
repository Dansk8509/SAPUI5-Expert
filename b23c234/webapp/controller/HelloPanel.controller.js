sap.ui.define([

    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"

], function(Controller, MessageBox, MessageToast, Fragment) {
    'use strict';

    return Controller.extend("b23c234.controller.HelloPanel",{
        
        onInit: function(){
          //Acceder a los textos i18n desde el Controller 
          const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle(); 
          const oButton = this.byId("button");
          oButton.setText(oResourceBundle.getText("hello2"));
        },

       

        onShowMessage: function() {
          //   MessageToast.show("This message should appear in the message toast",{
          //    duration: 2000
          //   });
          
          MessageBox.confirm("Approve purchase order 12345?",{
                actions:[ 
                  sap.m.MessageBox.Action.OK,
                  sap.m.MessageBox.Action.CANCEL 
              ],
              emphasizedAction: sap.m.MessageBox.Action.CANCEL,
              onClose: function (sAction) {
                console.log(sAction);
                MessageToast.show("Action selected: " + sAction);
              }

          });

      },

      onOpenDialog: function (){

        let oView = this.getView();

        if(!this._pDialog) {
          this._pDialog = Fragment.load({
            id: oView.getId(),
            name: "b23c234.fragment.HelloDialog",
            controller: this
          }).then(function (oDialog) {
            oView.addDependent(oDialog);
            return oDialog;
          });
        }

        this._pDialog.then(function (oDialog){
          oDialog.open();
        });
      },

      onCancel: function(){
        this._pDialog.then(function (oDialog) {
          oDialog.close();
        });
      },

    });
});