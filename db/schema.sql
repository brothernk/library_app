CREATE DATABASE bookclub_db;
USE bookclub_db;

CREATE TABLE books (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	readbook BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);