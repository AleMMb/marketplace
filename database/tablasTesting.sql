
CREATE DATABASE market;
\c market;
CREATE TABLE usuario ( 
    id SERIAL PRIMARY KEY,
    nombre VARCHAR (50) NOT NULL,
    apellido VARCHAR (50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL, 
    password VARCHAR(150) NOT NULL 
);



CREATE TABLE producto (
    id SERIAL PRIMARY KEY NOT NULL,
    id_usuario SERIAL, 
    nombre VARCHAR (70) NOT NULL,
    descripcion TEXT NOT NULL,
    precio INT NOT NULL,
    imagen VARCHAR (6000) NOT NULL, 
    CONSTRAINT fk_productos_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id)
);


CREATE TABLE direccion (
    id_usuario SERIAL,
    calle VARCHAR (40),
    numero INTEGER,
    comuna VARCHAR (40),
    region VARCHAR (40),
    CONSTRAINT fk_direccion_usuario FOREIGN KEY(id_usuario) REFERENCES usuario (id)
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
    'verano',
    'aro en color rojo y negro',
    7990,
    'https://acortar.link/W0qjGr'
);

INSERT INTO producto VALUES(
    8,
    1,
    'Catus, pinchosus',
    'Los cactus estan de moda',
    7990,
    'https://acortar.link/vQn4rw'
);


INSERT INTO producto VALUES(
    DEFAULT,
    1,
    'cospus',
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
    7990,
    'https://acortar.link/zdJwYt'
);


INSERT INTO producto VALUES(
    DEFAULT,
    1,
    'Orange flames',
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
    4590,
    'https://acortar.link/Hm7hsV' /// mala imagen 
);


Leopard

 Animal print para todos los momentos.

 5990
https://acortar.link/pA3DPB

