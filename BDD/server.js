function dbconnect (){
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'maximilien',
    password : 'root',
    database : 'mybase'
  });

  connection.connect();

  return connection
}

function Insertuser(){
  var db=dbconnect();

  //données à récup normalement
  var username= "nicky"
  var password= "azerty123"
  var email= "nick@yopmail.com"
  var full_name= "nicky riat"
  var id_habitation= "1"
  var id_panier="2"

  let crypto = require('crypto');
  const hash = crypto.createHmac('sha256',password)
                .update('whateverrr')
                .digest('hex');
  db.query('INSERT INTO user SET username=?, password=?, email=?, full_name=?, id_habitation=?, id_panier=?',data,(err, user, field)=>{
  }
}
