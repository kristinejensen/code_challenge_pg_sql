-- Database name
treats
-- Document your create tables SQL here
CREATE TABLE treats(
id SERIAL PRIMARY KEY,
treat_name VARCHAR(40) NOT NULL,
description VARCHAR(260) NOT NULL,
image_path VARCHAR(260) NOT NULL);

INSERT INTO treats (treat_name, description, image_path)
VALUES
('Cupcake', 'A delicious cupcake', '/assets/cupcake.jpg'),
('Donuts', 'Mmmm donuts', '/assets/donuts.jpg');
