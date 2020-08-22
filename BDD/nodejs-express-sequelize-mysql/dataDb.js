const produitController = require("./app/controllers/produit.controller");
const typeController = require("./app/controllers/type.controller");
const categorieController = require("./app/controllers/categorie.controller");

exports.launchDataDb = async () => {

    //
    //                    CATEGORIES
    //

    const categorie1 = await categorieController.createCategorieForDb({
        "name": "Composants PC"
    })

    const categorie2 = await categorieController.createCategorieForDb({
        "name": "Périphériques"
    })

    const categorie3 = await categorieController.createCategorieForDb({
        "name": "Accessoires"
    })

    //
    //                    TYPES
    //

    const type1 = await typeController.createTypeForDb({
        "name": "processeur",
        "image": "http://logistick.be/p/processeur.jpg",
        "categorieId": categorie1.id
    })

    const type2 = await typeController.createTypeForDb({
        "name": "disque dur",
        "image": "http://logistick.be/p/disque_dur.jpg",
        "categorieId": categorie1.id
    })

    const type3 = await typeController.createTypeForDb({
        "name": "ram",
        "image": "http://logistick.be/p/ram.jpg",
        "categorieId": categorie1.id
    })

    const type4 = await typeController.createTypeForDb({
        "name": "clavier",
        "image": "http://logistick.be/p/clavier.jpg",
        "categorieId": categorie2.id
    })

    const type5 = await typeController.createTypeForDb({
        "name": "souris",
        "image": "http://logistick.be/p/souris.jpg",
        "categorieId": categorie2.id
    })

    const type6 = await typeController.createTypeForDb({
        "name": "moniteur",
        "image": "http://logistick.be/p/moniteur.png",
        "categorieId": categorie2.id
    })

    const type7 = await typeController.createTypeForDb({
        "name": "multiprise",
        "image": "http://logistick.be/p/multiprise.jpg",
        "categorieId": categorie3.id
    })

    const type8 = await typeController.createTypeForDb({
        "name": "chaise",
        "image": "http://logistick.be/p/chaise.jpg",
        "categorieId": categorie3.id
    })

    const type9 = await typeController.createTypeForDb({
        "name": "tapis souris",
        "image": "http://logistick.be/p/tapis_souris.jpg",
        "categorieId": categorie3.id
    })

    //
    //                    PRODUITS 
    //

    const processeur1 = await produitController.createProduitForDb({
        "prix": 62,
        "stock": 19,
        "nom": "Amd Athlon 3000G 3.5GHz 2Core 5MB 35W",
        "description": "Référence Amd : YD3000C6FHBOX",
        "image": "http://logistick.be/p/Amd_Athlon_3000G.jpg",
        "typeId": type1.id
    })
    const processeur2 = await produitController.createProduitForDb({
        "prix": 145,
        "stock": 18,
        "nom": "Intel s1200 10xxx - 4 Core i3 10100 6MB Cache 3.6Ghz/4.3Ghz - Intel",
        "description": "Référence Intel : BX8070110100",
        "image": "http://logistick.be/p/intel_i3.jpg",
        "typeId": type1.id
    })
    const processeur3 = await produitController.createProduitForDb({
        "prix": 529,
        "stock": 6,
        "nom": "Intel s1151 9xxx - 8 Core I9 9900K - 3.6GHz/5Ghz 16MB Cache - Intel",
        "description": "Référence Intel : BX80684I99900K",
        "image": "http://logistick.be/p/intel_i9.jpg",
        "typeId": type1.id
    })

    const disque_dur1 = await produitController.createProduitForDb({
        "prix": 46,
        "stock": 26,
        "nom": "Toshiba 500Gb P300 High-Performance Hard Drive - Toshiba",
        "description": "Référence Toshiba : HDWD105UZSVA",
        "image": "http://logistick.be/p/toshiba_500gb.jpg",
        "typeId": type2.id
    })
    const disque_dur2 = await produitController.createProduitForDb({
        "prix": 66,
        "stock": 16,
        "nom": "Disque dur Externe Western Digital Elements Portable SE 500GB USB 3.0 2.5In - Western Digital",
        "description": "Référence Western Digital : WDBUZG5000ABK-WESN",
        "image": "http://logistick.be/p/western_digital_500gb.jpg",
        "typeId": type2.id
    })
    const disque_dur3 = await produitController.createProduitForDb({
        "prix": 314,
        "stock": 7,
        "nom": "Disque Dur Seagate SKYHAWK 10TB SURVEILLANCE 7200RPM 256MB",
        "description": "Référence Seagate : ST10000VE0008",
        "image": "http://logistick.be/p/seagate_10tb.jpg",
        "typeId": type2.id
    })

    const ram1 = await produitController.createProduitForDb({
        "prix": 16,
        "stock": 13,
        "nom": "G.Skill DDR3 2GB PC 1333 CL9 G.Skill 2GBNS retail - G.Skill",
        "description": "Référence G.Skill : F3-10600CL9S-2GBNS",
        "image": "http://logistick.be/p/g_skill_ram_2gb.jpg",
        "typeId": type3.id
    })
    const ram2 = await produitController.createProduitForDb({
        "prix": 25,
        "stock": 21,
        "nom": "Mémoire Corsair DDR3 4GB PC 1600 CL9 XMS3 retail - Corsair",
        "description": "Référence Corsair : CMX4GX3M1A1600C9",
        "image": "http://logistick.be/p/corsair_ram_4gb.jpg",
        "typeId": type3.id
    })
    const ram3 = await produitController.createProduitForDb({
        "prix": 121,
        "stock": 12,
        "nom": "Mémoire G.Skill D4 32GB 2400-17 AEGIS K2 GSK - G.Skill",
        "description": "Référence G.Skill : F4-2400C17D-32GIS",
        "image": "http://logistick.be/p/g_skill_ram_32gb.jpg",
        "typeId": type3.id
    })

    const clavier1 = await produitController.createProduitForDb({
        "prix": 18,
        "stock": 28,
        "nom": "Clavier Logitech Classic K120 Wired BE - Logitech",
        "description": "Référence Logitech : 920-002482",
        "image": "http://logistick.be/p/logitech_k120.jpg",
        "typeId": type4.id
    })
    const clavier2 = await produitController.createProduitForDb({
        "prix": 41,
        "stock": 13,
        "nom": "Clavier Logitech Tas Cordless Desktop MK270 - Logitech",
        "description": "Référence Logitech : 920-004511",
        "image": "http://logistick.be/p/logitech_mk270.jpg",
        "typeId": type4.id
    })
    const clavier3 = await produitController.createProduitForDb({
        "prix": 125,
        "stock": 3,
        "nom": "Clavier Logitech Wireless Illuminated K800 BE - Logitech",
        "description": "Référence Logitech : 920-002379",
        "image": "http://logistick.be/p/logitech_k800.jpg",
        "typeId": type4.id
    })

    const souris1 = await produitController.createProduitForDb({
        "prix": 15,
        "stock": 6,
        "nom": "Asus UX300 Pro optical 1600dpi black",
        "description": "Référence Asus : 90XB04B0-BMU000",
        "image": "http://logistick.be/p/asus_ux300.jpg",
        "typeId": type5.id
    })
    const souris2 = await produitController.createProduitForDb({
        "prix": 28,
        "stock": 2,
        "nom": "Logitech B220 Silent Mouse Black - Logitech",
        "description": "Référence Logitech : 910-004881",
        "image": "http://logistick.be/p/logitech_b220.jpg",
        "typeId": type5.id
    })
    const souris3 = await produitController.createProduitForDb({
        "prix": 99,
        "stock": 4,
        "nom": "Corsair Scimitar Pro RGB PC Gaming Mouse Optical Yellow - Corsair",
        "description": "Référence Corsair : CH-9304011-EU",
        "image": "http://logistick.be/p/corsair_scimitar.jpg",
        "typeId": type5.id
    })

    const moniteur1 = await produitController.createProduitForDb({
        "prix": 103,
        "stock": 2,
        "nom": "Moniteur Samsung MONITOR LS24R350FHUXEN",
        "description": "Référence Samsung : LS24R350FHU",
        "image": "http://logistick.be/p/samsung_ls24.jpg",
        "typeId": type6.id
    })
    const moniteur2 = await produitController.createProduitForDb({
        "prix": 111,
        "stock": 10,
        "nom": "Moniteur Acer K242HQLCbid - 60cm / 23.6i LED TN+ Filmpanel - 1920x1080 - 16:9 - VGA + DVI + HDMI - 1ms - VESA - Black Glossy - ES 6.0 - Acer",
        "description": "http://logistick.be/p/acer_60cm.jpg",
        "image": "http://logistick.be/p/acer_60cm.jpg",
        "typeId": type6.id
    })
    const moniteur3 = await produitController.createProduitForDb({
        "prix": 145,
        "stock": 7,
        "nom": "Moniteur Philips 27.0 inch - 273V7QDAB/00 - IPS 1920x1080 - Philips",
        "description": "Référence Philips : 273V7QDAB/00",
        "image": "http://logistick.be/p/philips_27inch.jpg",
        "typeId": type6.id
    })
    const moniteur4 = await produitController.createProduitForDb({
        "prix": 163,
        "stock": 9,
        "nom": "Moniteur Asus 27.0 inch - Essential VA27EHE",
        "description": "Référence Asus : 90LM0550-B01170",
        "image": "http://logistick.be/p/asus_27inch.jpg",
        "typeId": type6.id
    })

    const multiprise1 = await produitController.createProduitForDb({
        "prix": 10,
        "stock": 27,
        "nom": "LOGON 3-WAY POWER STRIP: Black - ON/OFF SWITCH - 1.5M CABLE",
        "description": "Référence LOGON ELECTRICAL : LPS125",
        "image": "http://logistick.be/p/logon_3way.jpg",
        "typeId": type7.id
    })
    const multiprise2 = await produitController.createProduitForDb({
        "prix": 11,
        "stock": 21,
        "nom": "LOGON 4-WAY POWER STRIP: Black - WITH ON/OFF SWITCH - 1.5M",
        "description": "Référence Cable Company : LPS050",
        "image": "http://logistick.be/p/logon_4way.png",
        "typeId": type7.id
    })

    const chaise1 = await produitController.createProduitForDb({
        "prix": 201,
        "stock": 9,
        "nom": "Arozzi Monza Gaming Chair Red",
        "description": "Référence Arozzi : MONZA-RD",
        "image": "http://logistick.be/p/arozzi_red.jpg",
        "typeId": type8.id
    })
    const chaise2 = await produitController.createProduitForDb({
        "prix": 392,
        "stock": 15,
        "nom": "Arozzi Gaming Chair Torretta Soft Fabric Ash",
        "description": "Référence Arozzi : TORRETTA-SFB-ASH",
        "image": "http://logistick.be/p/arozzi_ash.jpg",
        "typeId": type8.id
    })

    const tapis_souris1 = await produitController.createProduitForDb({
        "prix": 13,
        "stock": 24,
        "nom": "Tapis souris Sharkoon Mousepad 1337 Mat 'Black' M - Sharkoon",
        "description": "Référence Sharkoon : 4044951019175",
        "image": "http://logistick.be/p/sharkoon_1337.jpg",
        "typeId": type9.id
    })
    const tapis_souris2 = await produitController.createProduitForDb({
        "prix": 27,
        "stock": 9,
        "nom": "Tapis souris Corsair MM250 X-Large Champion Performance",
        "description": "Référence Corsair : CH-9412560-WW",
        "image": "http://logistick.be/p/corsair_mm250.png",
        "typeId": type9.id
    })
    const tapis_souris3 = await produitController.createProduitForDb({
        "prix": 56,
        "stock": 11,
        "nom": "Tapis souris Asus ROG Sheath BLK",
        "description": "Référence Asus : 90MP00K3-B0UA00",
        "image": "http://logistick.be/p/asus_sheath.jpg",
        "typeId": type9.id
    })


}