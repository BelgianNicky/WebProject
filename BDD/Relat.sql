CREATE TABLE `users` (
  `id_users` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255),
  `password` varchar(255),
  `email` varchar(255),
  `full_name` varchar(255),
  `created_at` timestamp,
  `id_habitation` int NOT NULL,
  `id_panier` int NOT NULL
);

CREATE TABLE `habitation` (
  `id_habitation` int PRIMARY KEY AUTO_INCREMENT,
  `adresse` varchar(255),
  `ville` varchar(255),
  `code_postal` varchar(255)
);

CREATE TABLE `panier` (
  `id_panier` int PRIMARY KEY AUTO_INCREMENT,
  'quantite' int,
  'montant_tot' int
);

CREATE TABLE `pani_prod` (
  `id_panier` int NOT NULL,
  `id_produit` int NOT NULL
);

CREATE TABLE `type` (
  `id_type` int PRIMARY KEY AUTO_INCREMENT,
  `nom_type` varchar(255),
  `id_categorie` int NOT NULL
);

CREATE TABLE `categorie` (
  `id_categorie` int PRIMARY KEY AUTO_INCREMENT,
  `nom_categorie` varchar(255)
);

CREATE TABLE `produit` (
  `id_produit` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `prix` int,
  `stock` int,
  `description` varchar(255),
  `id_type` int NOT NULL
);

CREATE TABLE `objet` (
  `id_objet` int PRIMARY KEY AUTO_INCREMENT,
  `id_produit` int NOT NULL
);

CREATE TABLE `com_obj` (
  `id_objet` int NOT NULL,
  `id_commande` int NOT NULL
);

CREATE TABLE `commande` (
  `id_commande` int PRIMARY KEY AUTO_INCREMENT,
  `date` date,
  `mode_paiement` varchar(255),
  `id_panier` int NOT NULL
);

ALTER TABLE `users` ADD FOREIGN KEY (`id_habitation`) REFERENCES `habitation` (`id_habitation`);

ALTER TABLE `users` ADD FOREIGN KEY (`id_panier`) REFERENCES `panier` (`id_panier`);

ALTER TABLE `pani_prod` ADD FOREIGN KEY (`id_panier`) REFERENCES `panier` (`id_panier`);

ALTER TABLE `pani_prod` ADD FOREIGN KEY (`id_produit`) REFERENCES `produit` (`id_produit`);

ALTER TABLE `produit` ADD FOREIGN KEY (`id_type`) REFERENCES `type` (`id_type`);

ALTER TABLE `type` ADD FOREIGN KEY (`id_categorie`) REFERENCES `categorie` (`id_categorie`);

ALTER TABLE `objet` ADD FOREIGN KEY (`id_produit`) REFERENCES `produit` (`id_produit`);

ALTER TABLE `com_obj` ADD FOREIGN KEY (`id_objet`) REFERENCES `objet` (`id_objet`);

ALTER TABLE `com_obj` ADD FOREIGN KEY (`id_commande`) REFERENCES `commande` (`id_commande`);

ALTER TABLE `commande` ADD FOREIGN KEY (`id_panier`) REFERENCES `panier` (`id_panier`);
