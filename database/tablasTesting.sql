
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
    imagen VARCHAR (150) NOT NULL,   /*cambiar a muchos*/
    CONSTRAINT fk_productos_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id)
);

INSERT INTO producto VALUES(
    1,
    3,
    'Animal',
    'Aro animal print en color beige y negro',
    10000,
    'https://acortar.link/WSPCmI'
);

INSERT INTO producto VALUES(
    2,
    3,
    'flores',
    'Diseño floreado primaveral',
    3500,
    'https://acortar.link/NZyrK3'
);


INSERT INTO producto VALUES(
    3,
    2,
    'aro',
    'aro en color rojo y negro',
    7990,
    'https://acortar.link/W0qjGr'
);

INSERT INTO producto VALUES(
    4,
    2,
    'Catus, pinchosus',
    'Los cactus estan de moda',
    7990,
    'https://acortar.link/vQn4rw'
);