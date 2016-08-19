var express = require('express');
var fs=require('fs');
var path = require('path');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
  var nombre=req.body.archivo.name;
  var ruta=req.body.archivo.path;
  var tipo=req.body.archivo.type;
  if(tipo=='image/png' || tipo=='image/jpg' || tipo=='image/jpeg' ){
    //Si es de tipo png jpg o jpeg

    var target_path=path.join(__dirname, '../public/avatar/'+nombre);// hacia donde subiremos nuestro archivo dentro de nuestro servidor
    console.log(ruta);
    console.log(tipo);
    console.log(target_path);
    fs.rename(ruta,target_path,function (err) {//Escribimos el archivo
      //fs.unlink(ruta,function (err) {//borramos el archivo tmp
        //damos una respuesta al cliente
        res.send('<p>El archivo se subio correctamente por '+req.body.nombre+'</p></br><img  src="/avatar/'+nombre+'"/>');
      //});
    });

  }else{
    res.send('Tipo de archivo no soportado');
  }
});

module.exports = router;
