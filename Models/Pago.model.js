const mongoose = require("mongoose");
const PagoSchema = mongoose.Schema({

  Detalles_Facturacion:[{
   Nombre_y_apellido:String,
   Email:String,
   Telefono:Number
  }],
  Direccion:[{
   Pais_Region:String,
   Municipio:String,
   Codigo_Postal:Number,
   Calle:String,
   Numero_ext:Number
  }]
   
});

module.exports = mongoose.model("Pago", PagoSchema);