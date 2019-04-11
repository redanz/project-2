DROP DATABASE IF EXISTS food_db;
CREATE DATABASE food_db;
USE food_db;


CREATE TABLE user_auth (
	id INT NOT NULL AUTO_INCREMENT,
	email VARCHAR(255) NOT NULL UNIQUE,
	password_hash VARCHAR(255) NOT NULL,
	PRIMARY KEY(id)
);


CREATE TABLE foods (
	id INT NOT NULL AUTO_INCREMENT,
	food_name VARCHAR(255) NOT NULL UNIQUE,
	expiry_counter INT,
	expiry_fridge INT,
	PRIMARY KEY(id)
);


CREATE TABLE user_data (
	id INT NOT NULL,
	FOREIGN KEY (id) REFERENCES user_auth(id),
	food_name VARCHAR(255) NOT NULL,
	purchase_time TIMESTAMP NOT NULL
);








