-- Database name
treats
-- Document your create tables SQL here
CREATE TABLE treats(
id SERIAL PRIMARY KEY,
name VARCHAR(40) NOT NULL,
description VARCHAR(260) NOT NULL,
pic VARCHAR(260) NOT NULL);

INSERT INTO treats (name, description, pic)
VALUES
('Cupcake', 'A delicious cupcake', '/assets/cupcake.jpg'),
('Donuts', 'Mmmm donuts', '/assets/donuts.jpg');
