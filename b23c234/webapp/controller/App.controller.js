sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        // "sap/m/MessageBox",
        // "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel"
    ],
    function(Controller, JSONModel,) {
      "use strict";
      return Controller.extend("b23c234.controller.App", {

         onInit: function(){
          //Acceder a los textos i18n desde el Controller 
          // const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle(); 
          // const oButton = this.byId("button");
          // oButton.setText(oResourceBundle.getText("hello2"));

          // Se llama el modelo desde que se carga la vista onInit
          this._loadModel();

          // Obtiene todas las propiedades del boton en este caso y las muestra en consola
          // console.log(this.byId("button"));
          // console.log(this.getView.byId("button"));
          
        },
        // Creacion de metodo privado para el MODELO
        _loadModel: function(){
            let oData={
              "Name": "Daniel",
              "SubName": "Hdez",
              "Age": "38",
              "Nationality": "MX",
              "Details": [
                {
                  "Course":"Course #1",
                  "Location":"COL",
                  "Details":[
                    ]
                },
                {  
                  "Course":"Course #2",
                  "Location":"VEN",
                  "Details":[
                  ]
                } 
              ]
            };
            // Se crea una instancia del modelo
            let oModel = new JSONModel(oData);
            // Se asocia a la vista y se nombra el modelo
            this.getView().setModel(oModel,"Modelo");
        },

        onBeforeRendering: function(){

        },
        onAfterRendering: function(){
        
        },
        onExitRendering: function(){
        
        },

        // onShowMessage: function() {
        //     //   MessageToast.show("This message should appear in the message toast",{
        //     //    duration: 2000
        //     //   });
            
        //     MessageBox.confirm("Approve purchase order 12345?",{
        //           actions:[ 
        //             sap.m.MessageBox.Action.OK,
        //             sap.m.MessageBox.Action.CANCEL 
        //         ],
        //         emphasizedAction: sap.m.MessageBox.Action.CANCEL,
        //         onClose: function (sAction) {
        //           console.log(sAction);
        //           MessageToast.show("Action selected: " + sAction);
        //         }

        //     });

        // }
      });
    }
  );
  