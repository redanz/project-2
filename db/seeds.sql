USE food_db;

INSERT INTO user_auth (userName, email, password_hash) VALUES 
	('Kristen','kristen@test.com', ')15#$@%^'),
	('Khoa', 'khoa@test.com', '*059#$%%^@!'),
	('Nader', 'nader@test.com', '!@#$!%%');


INSERT INTO foods (food_name, expiry_time, custom_user_id) VALUES
	('Milk', 5, 0),
	('Egg', 21, 0),
	('Apple', 14, 0),
	('Avocado', 3, 0),
	('Banana', 2, 0),
	('Blueberry', 5, 0),
	('Lemon', 30, 0),
	('Tomato', 7, 0),
	('Strawberry', 5, 0),
	('Broccoli', 7, 0),
	('Mushroom', 7, 0),
	('Potato', 21, 0),
	('Carrot', 28, 0),
	('Bread', 2, 0),
	('Beef', 1, 0),
	('Chicken', 1, 0),
	('Salmon', 1, 0);


INSERT INTO user_data (user_id, food_id, purchase_time) VALUES
	(1, 3, '2019-04-10 12:00:00'),
	(1, 9, '2019-04-10 12:00:15'),
	(2, 10, '2019-04-10 12:01:03'),
	(2, 14, '2019-04-10 12:01:05'),
	(3, 17, '2019-04-10 12:15:55'),
	(3, 3, '2019-04-10 12:17:39');

-- Custom food per user
-- INSERT INTO foods (food_name, expiry_time, custom_user_id) VALUES ('Tangerine', 5, 1);




