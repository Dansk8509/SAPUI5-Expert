sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageBox",
        "sap/m/MessageToast"
    ],
    function(Controller, MessageToast, MessageBox) {
      "use strict";
      return Controller.extend("b23c234.controller.App", {

        oninit: function(){
          const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle(); 
          console.log(oResourceBundle);

          const oButton = this.byId("button");
              oButton.setText("Texto Redefindo");
              console.log(oButton.get());

          // Obtiene todas las propiedades del boton en este caso y las muestra en consola
          console.log(this.byId("button"));
          console.log(this.getView.byId("button"));
        },
        onBeforeRendering: function(){

        },
        onAfterRendering: function(){
        
        },
        onExitRendering: function(){
        
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
                  MessageToast.show("Action selected: " + sAction);
                }

            });

        }
      });
    }
  );
  