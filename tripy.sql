CREATE TABLE restaurants (
	id SERIAL PRIMARY KEY,
	name VARCHAR(150),
	adress VARCHAR(1000),
	city VARCHAR(100),
	country VARCHAR(150),
	stars INTEGER,
	cuisine VARCHAR(200),
	price_category INTEGER	
);
CREATE TABLE hotels(
		id SERIAL PRIMARY KEY,
	name VARCHAR(150),
	adress VARCHAR(1000),
	city VARCHAR(100),
	country VARCHAR(150),
	stars INTEGER,
	has_spa BOOLEAN,
	has_pool BOOLEAN,
	price_category INTEGER	
);
INSERT INTO restaurants(name, adress, city, country, stars, cuisine, price_category) VALUES ('les 3 mousquetaires', '22 av des champs Elysées', 'Paris', 'France', 4, 'french', 3);
INSERT INTO restaurants(name, adress, city, country, stars, cuisine, price_category) VALUES ('The fat guy', '47 Jackson Boulevard', 'New York', 'US', 5, 'burger', 1);
INSERT INTO restaurants(name, adress, city, country, stars, cuisine, price_category) VALUES ('Veggies', '77 Avenir Street', 'Sydney', 'Australia', 5, 'vegan', 2);
INSERT INTO hotels(name, adress, city, country, stars, has_spa, has_pool, price_category) VALUES ('Imperial Hotel', '84 av des Champs-Élysées', 'Paris', 'France', 5, 'true', 'true', 3);
INSERT INTO hotels(name, adress, city, country, stars, has_spa, has_pool, price_category) VALUES ('The Queen', '3 Darwin Street', 'London', 'England', 4, 'true', 'false', 3);
INSERT INTO hotels(name, adress, city, country, stars, has_spa, has_pool, price_category) VALUES ('Kiwi land', '4587 George St.', 'Auckland', 'New-Zealand', 3, 'false', 'true', 2);

SELECT * FROM hotels;
SELECT * FROM restaurants;
SELECT * FROM hotels WHERE id=1;

