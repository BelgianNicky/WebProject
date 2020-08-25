const db = require("../models");
const Pani_prod = db.pani_prod;
const Produit = db.produit;
const Panier = db.panier;

//récupère tous les produits correspondant à un certain panierId
exports.findAllProduitByPanierId = (req, res) => {
  const panierId = req.params.panierId;

  Panier.findAll({
    where: { id: panierId },
    include: [
      {
        model: Produit,
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving produits based on param 'panierId'",
      });
    });
};

//supprime un produit lié à un panier de la table pani_prod sur base d'un id de panier et d'un id de produit
exports.deleteProduitByPanierId = (req, res) => {
  const panierId = req.query.panierId;
  const produitId = req.query.produitId;

  Pani_prod.findOne({
    where: {
      panierId: panierId,
      produitId: produitId,
    },
  })
    .then((data) => {
      // delete (update) dans panier
      Produit.findOne({ where: { id: data.produitId } })
        .then((produitData) => {
          Panier.findOne({ where: { id: data.panierId } })
            .then((panierData) => {
              const pani_updated = {
                quantite: panierData.quantite - 1,
                montant_tot: panierData.montant_tot - produitData.prix,
              };
              Panier.update(pani_updated, {
                where: {
                  id: data.panierId,
                },
              })
                .then((num) => {
                  if (num == 1) {
                    res.send({
                      message: "Panier was updated successfully.",
                    });
                  } else {
                    res.send({
                      message: `Cannot update panier with panierId=${data.panierId}. Maybe panierid were not found or req.body is empty!`,
                    });
                  }
                })
                .catch((err) => {
                  res.status(500).send({
                    message:
                      "Error updating panier with panierId=" + data.panierId,
                  });
                });
            })
            .catch((err) => {
              res.status(500).send({
                message:
                  err.message ||
                  "Some error occurred while finding panier with panierId",
              });
            });
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message ||
              "Some error occurred while finding produit with produitId",
          });
        });

      // delete (update) dans panier_prod
      if (data.quantite > 1) {
        const pani_prod_updated = {
          panierId: data.panierId,
          produitId: data.produitId,
          quantite: data.quantite - 1,
          montant_tot: data.montant_tot - data.montant_tot / data.quantite,
        };
        Pani_prod.update(pani_prod_updated, {
          where: {
            panierId: data.panierId,
            produitId: data.produitId,
          },
        })
          .then((num) => {
            if (num == 1) {
              res.send({
                message: "Pani_prod was updated successfully.",
              });
            } else {
              res.send({
                message: `Cannot update pani_prod with panierId=${data.panierId} and produitId=${data.produitId}. Maybe panierId and produitId were not found or req.body is empty!`,
              });
            }
          })
          .catch((err) => {
            res.status(500).send({
              message:
                "Error updating pani_prod with panierId=" + data.panierId,
            });
          });
      } else {
        Pani_prod.destroy({
          where: {
            panierId: data.panierId,
            produitId: data.produitId,
          },
        })
          .then((num) => {
            if (num == 1) {
              res.send({
                message: "Produit was deleted successfully from Panier!",
              });
            } else {
              res.send({
                message: `Cannot delete Produit with panierId=${data.panierId} and produitId=${data.produitId}. Maybe panierId and produitId were not found !`,
              });
            }
          })
          .catch((err) => {
            res.status(500).send({
              message:
                "Could not delete Produit with panierId=" + data.panierId,
            });
          });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while finding pani_prod with produitId and panierId",
      });
    });
};
//ajoute un produitId lier a un panierId dans la table(passé dans le body) . le montant_tot et quantite sont mis a jour en conséquence
exports.ajoutPaniProd = (req, res) => {
  const panierId = req.body.panierId;
  const produitId = req.body.produitId;
  //update panier
  Produit.findOne({ where: { id: produitId } })
    .then((produitData) => {
      Panier.findOne({ where: { id: panierId } })
        .then((panierData) => {
          const pani_updated = {
            quantite: panierData.quantite + 1,
            montant_tot: panierData.montant_tot + produitData.prix,
          };
          Panier.update(pani_updated, {
            where: {
              id: panierId,
            },
          })
            .then((num) => {
              if (num == 1) {
                res.send({
                  message: "Panier was updated successfully.",
                });
              } else {
                res.send({
                  message: `Cannot update panier with panierId=${panierId}. Maybe panierid were not found or req.body is empty!`,
                });
              }
            })
            .catch((err) => {
              res.status(500).send({
                message: "Error updating panier with panierId=" + panierId,
              });
            });
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message ||
              "Some error occurred while finding panier with panierId",
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while finding produit with produitId",
      });
    });
  //update de pani_prod
  Pani_prod.findAll({
    where: {
      panierId: panierId,
      produitId: produitId,
    },
  })
    .then((data) => {
      if (data != null && data.length > 0) {
        const pani_prod_updated = {
          panierId: panierId,
          produitId: produitId,
          quantite: data[0].quantite + 1,
          montant_tot:
            data[0].montant_tot + data[0].montant_tot / data[0].quantite,
        };
        Pani_prod.update(pani_prod_updated, {
          where: {
            panierId: panierId,
            produitId: produitId,
          },
        })
          .then((num) => {
            if (num == 1) {
              res.send({
                message: "Pani_prod was updated successfully.",
              });
            } else {
              res.send({
                message: `Cannot update pani_prod with panierId=${panierId} and produitId=${produitId}. Maybe panierId and produitId were not found or req.body is empty!`,
              });
            }
          })
          .catch((err) => {
            res.status(500).send({
              message: "Error updating pani_prod with panierId=" + panierId,
            });
          });
      } else {
        Produit.findOne({ where: { id: produitId } })
          .then((produitData) => {
            const panierproduit = {
              panierId: panierId,
              produitId: produitId,
              quantite: 1,
              montant_tot: produitData.prix,
            };
            Pani_prod.create(panierproduit)
              .then((data) => {
                res.send(data);
              })
              .catch((err) => {
                res.status(500).send({
                  message:
                    err.message ||
                    "Some error occurred while creating the pani_prod",
                });
              });
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message ||
                "Some error occurred while finding produit with id",
            });
          });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not find pani_prod",
      });
    });
};
