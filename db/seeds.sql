USE food_db;

INSERT INTO user_auth (email, password_hash) VALUES 
	('kristen@test.com', ')15#$@%^'),
	('khoa@test.com', '*059#$%%^@!'),
	('nader@test.com', '!@#$!%%');


INSERT INTO foods (food_name, expiry_counter, expiry_fridge) VALUES
	('Milk', NULL, 5),
	('Egg', NULL, 21),
	('Apple', 14, 30),
	('Avocado', 3, 7),
	('Banana', 2, 2),
	('Blueberry', 2, 5),
	('Lemon', 14, 30),
	('Tomato', 7, 14),
	('Strawberry', 1, 5),
	('Broccoli', NULL, 7),
	('Mushroom', NULL, 7),
	('Potato', 21, 90),
	('Carrot', NULL, 28),
	('Bread', 2, NULL),
	('Beef', NULL, 1),
	('Chicken', NULL, 1),
	('Salmon', NULL, 1);


INSERT INTO user_data (id, food_name, purchase_time) VALUES
	(1, 'Apple', '2019-04-10 12:00:00'),
	(1, 'Strawberry', '2019-04-10 12:00:15'),
	(2, 'Broccoli', '2019-04-10 12:01:03'),
	(2, 'Bread', '2019-04-10 12:01:05'),
	(3, 'Salmon', '2019-04-10 12:15:55'),
	(3, 'Apple', '2019-04-10 12:17:39');





