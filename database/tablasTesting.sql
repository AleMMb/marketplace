
CREATE DATABASE market;
\c market;
CREATE TABLE usuario ( 
    id SERIAL PRIMARY KEY,
    nombre VARCHAR (50) NOT NULL,
    apellido VARCHAR (50) NOT NULL,
    email VARCHAR(50) NOT NULL, 
    password VARCHAR(150) NOT NULL 
);



CREATE TABLE producto (
    id SERIAL PRIMARY KEY NOT NULL,
    id_usuario SERIAL,
    nombre VARCHAR (70) NOT NULL,
    descripcion TEXT NOT NULL,
    precio INT NOT NULL,
    imagen VARCHAR (150) NOT NULL,
    CONSTRAINT fk_productos_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id)
);

INSERT INTO producto VALUES(
    1,
    3,
    'Camiseta Azul',
    'Camiseta Azul en color azul y negro',
    100,
    'https://i.ibb.co/VcYym0s/camiseta-azul.jpg'
);