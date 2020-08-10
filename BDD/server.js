
function dbconnect (){
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : '51.210.149.38',
    port     : '3306',
    user     : 'max',
    password : 'lambert',
    database : 'mybase'
  });

  connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
  });
  return connection
}
insertUser();
function insertUser(){
  var connection=dbconnect();

  //creation de panier
  connection.query("INSERT INTO panier VALUES (null,0,0)", function (err, result,fields) {
      if (err) throw err;
      createUser();
  });

//creation utilisateur
}

function createUser(){
  var connection=dbconnect();
  var id_users=null
  var username= "nouveau"
  var password= "azerty"
  var email= "nik@yopmail.com"
  var full_name= "nick test"
  var created_at=null


  var ville='Braine-Le-Château'
  var data=[ville];
  connection.query("select id_habitation as id from habitation where ville =?",data, function (err, result){
      if (err) throw err;     //dire au front que la ville n'est pas dans la bdd
      var id_habitation=result[0].id
      connection.query("select max(id_panier)as id from panier ", function (err, result) {
            if (err) throw err;
            var id_panier= result[0].id
            var data =[id_users,username,password,email,full_name,created_at,id_habitation,id_panier];
            var sql = "INSERT INTO users SET id_users=?,username=?,password=?,email=?,full_name=?,created_at=?,id_habitation=?,id_panier=?";
            connection.query(sql,data, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
            });
      });
  });
}


/*function Insertuser(){
  var db=dbconnect();


  var username= "nicky"
  var password= "azerty123"
  var email= "nick@yopmail.com"
  var full_name= "nicky riat"
  var id_habitation= "1"
  var id_panier="1"


  let crypto = require('crypto');
  const hash = crypto.createHmac('sha256',password)
                .update('whateverrr')
                .digest('hex');

  var data = [username,password,email,full_name,id_habitation,id_panier]


    });
}*/
