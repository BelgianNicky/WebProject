const produitController = require("./app/controllers/produit.controller");
const typeController = require("./app/controllers/type.controller");
const categorieController = require("./app/controllers/categorie.controller");

exports.dataDb = () => {

const produit1 = await produitController.createProduit({
    "prix": 62,
    "stock": 19,
    "nom": "Amd Athlon 3000G 3.5GHz 2Core 5MB 35W",
    "description": "Référence Amd : YD3000C6FHBOX",
    "image": "http://logistick.be/p/Amd_Athlon_3000G.jpg",
    "typeId": 1
  })

}