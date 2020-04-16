Página web donde tú puedas registrar links de internet que son de interes.
Por ejemplo puedes guardar links de videos de youtube, imagenes, páginas.
Los datos a ingresar son url(obligatorio), nombre(obligatorio), descripción(opcional)




// Script base de datos

-- Database: apimarcadores,  password: "admin"

-- DROP DATABASE apimarcadores;

CREATE DATABASE apimarcadores
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Mexico.1252'
    LC_CTYPE = 'Spanish_Mexico.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	
	
	
	
// Script tabla de marcadores	
	
	-- Table: public.marcadores

-- DROP TABLE public.marcadores;

CREATE TABLE public.marcadores
(
    id integer NOT NULL DEFAULT nextval('marcadores_id_seq'::regclass),
    url text COLLATE pg_catalog."default",
    nombre character varying COLLATE pg_catalog."default",
    descripcion text COLLATE pg_catalog."default",
    CONSTRAINT marcadores_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.marcadores
    OWNER to postgres;