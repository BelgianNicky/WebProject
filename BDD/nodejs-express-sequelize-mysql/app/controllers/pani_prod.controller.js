const db = require("../models");
const Pani_prod= db.pani_prod;

//récupère tous les produits correspondant à un certain panierId
exports.findAllProduitByPanierId = (req,res) => {
    const panierId = req.params.panierId

    Pani_prod.findAll({ where: { panierId : panierId }})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving produits based on param 'panierId'"
        });
    });
};

//supprime un produit lié à un panier de la table pani_prod sur base d'un id de panier et d'un id de produit
exports.deleteProduitByPanierId = (req,res) => {
    const panierId = req.body.panierId
    const produitId = req.body.produitId

    Pani_prod.findOne({
        where: { 
            panierId: panierId,
            produitId: produitId
        }
    })
    .then(data => {
        if(data.quantite > 1 ){
            const pani_prod_updated = {
                panierId: panierId,
                produitId: produitId,
                quantite: data.quantite-1,
                montant_tot: (data.montant_tot) - ((data.montant_tot)/(data.quantite))
            }
            Pani_prod.update(pani_prod_updated, {
                where: { 
                    panierId: panierId,
                    produitId: produitId
                }
            })
            .then(num => {
                if (num == 1) {
                res.send({
                    message: "Pani_prod was updated successfully."
                });
                } else {
                res.send({
                    message: `Cannot update pani_prod with panierId=${panierId} and produitId=${produitId}. Maybe panierId and produitId were not found or req.body is empty!`
                });
                }
            })
            .catch(err => {
                res.status(500).send({
                message: "Error updating pani_prod with panierId=" + panierId 
                });
            });
        }
        else{
            Pani_prod.destroy({
                where: { 
                    panierId: panierId,
                    produitId: produitId
                }
            })
            .then(num => {
                if (num == 1) {
                res.send({
                    message: "Produit was deleted successfully!"
                });
                } else {
                res.send({
                    message: `Cannot delete Produit with panierId=${panierId} and produitId=${produitId}. Maybe panierId and produitId were not found !`
                });
                }
            })
            .catch(err => {
                res.status(500).send({
                message: "Could not delete Produit with panierId=" + panierId 
                });
            });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Could not find pani_prod with panierId=" + panierId
        });
    });
};

exports.createPaniProd = (req,res) => {
    const panierproduit = {
        panierId: req.body.panierId,
        produitId: req.body.produitId,
        quantite: req.body.quantite,
        montant_tot: req.body.montant_tot,
    };

    Pani_prod.create(panierproduit)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the pani_prod"
        });
    });
}


