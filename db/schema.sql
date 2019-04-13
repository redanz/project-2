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
	expiry_time INT,
	PRIMARY KEY(id)
);


CREATE TABLE user_data (
	id INT NOT NULL,
	food_id VARCHAR(255) NOT NULL,
	purchase_time TIMESTAMP NOT NULL,
	FOREIGN KEY (id) REFERENCES user_auth(id),	
	FOREIGN KEY (food_id) REFERENCES foods(id)
);








