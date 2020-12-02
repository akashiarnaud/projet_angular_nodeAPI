create table utilisateur(
	id int,
	username varchar(100),
	password varchar(100),
	token varchar(300),
	PRIMARY KEY(id)
);
create table classe(
	id int,
	nom varchar(100),
	image varchar(100),
	PRIMARY KEY(id)
);

create table personnage(
	id int,
	nom varchar(100),
	sexe varchar(10),
	idClasse int,
	PRIMARY KEY(id),
	FOREIGN KEY(idClasse) REFERENCES classe(id)
);

create table item{
	id int,
	nom varchar(100),
	prix varchar(100),
	PRIMARY KEY(id)
};
