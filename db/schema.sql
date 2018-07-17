DROP DATABASE IF EXISTS bookclub_db;
CREATE DATABASE bookclub_db;
USE bookclub_db;

CREATE TABLE books (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(500) NOT NULL,
	readbook BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);