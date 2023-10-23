const mongoose = require("mongoose");
const ProductoSchema = mongoose.Schema({

   Cantidad_producto: Number,
   Costo: Number,
   Tipo:String,
   Producto:[
      {
         Marca_Producto:String,
         Nombre_Porducto:String,
      }
   ],
   
});

module.exports = mongoose.model("Producto", ProductoSchema);