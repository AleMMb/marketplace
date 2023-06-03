
CREATE DATABASE market;
\c market;
CREATE TABLE usuarios ( 
    id SERIAL,
    nombre VARCHAR (50) NOT NULL,
    apellido VARCHAR (50) NOT NULL,
    email VARCHAR(50) NOT NULL, 
    password VARCHAR(60) NOT NULL 
);


SELECT * FROM usuarios;