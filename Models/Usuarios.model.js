const mongoose = require("mongoose");
const UsuarioSchema = mongoose.Schema({

   Correo_usuario:{
      type: String,
      require: true
   },
   Contraseña_usuario:{
      type:String,
      require:true
   },
   Usuario:[
      {
         Nombre:String,
         Apellido:String,
         Fecha_nacimiento:String
      },
   ],
   
});

module.exports = mongoose.model("Usuario", UsuarioSchema);