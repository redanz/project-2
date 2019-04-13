USE food_db;

INSERT INTO user_auth (email, password_hash) VALUES 
	('kristen@test.com', ')15#$@%^'),
	('khoa@test.com', '*059#$%%^@!'),
	('nader@test.com', '!@#$!%%');


INSERT INTO foods (food_name, expiry_counter, expiry_fridge) VALUES
	('Milk', 5),
	('Egg', 21),
	('Apple', 14),
	('Avocado', 3),
	('Banana', 2),
	('Blueberry', 5),
	('Lemon', 30),
	('Tomato', 7),
	('Strawberry', 5),
	('Broccoli', 7),
	('Mushroom', 7),
	('Potato', 21),
	('Carrot', 28),
	('Bread', 2),
	('Beef', 1),
	('Chicken', 1),
	('Salmon', 1);


INSERT INTO user_data (id, food_id, purchase_time) VALUES
	(1, 3, '2019-04-10 12:00:00'),
	(1, 9, '2019-04-10 12:00:15'),
	(2, 10, '2019-04-10 12:01:03'),
	(2, 14, '2019-04-10 12:01:05'),
	(3, 17, '2019-04-10 12:15:55'),
	(3, 3, '2019-04-10 12:17:39');





