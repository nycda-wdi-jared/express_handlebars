--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Animals; Type: TABLE; Schema: public; Owner: jaredthomas
--

CREATE TABLE "Animals" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    class character varying(255) NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    description text
);


ALTER TABLE "Animals" OWNER TO jaredthomas;

--
-- Name: Animals_id_seq; Type: SEQUENCE; Schema: public; Owner: jaredthomas
--

CREATE SEQUENCE "Animals_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Animals_id_seq" OWNER TO jaredthomas;

--
-- Name: Animals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jaredthomas
--

ALTER SEQUENCE "Animals_id_seq" OWNED BY "Animals".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: jaredthomas
--

CREATE TABLE "SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE "SequelizeMeta" OWNER TO jaredthomas;

--
-- Name: Animals id; Type: DEFAULT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Animals" ALTER COLUMN id SET DEFAULT nextval('"Animals_id_seq"'::regclass);


--
-- Data for Name: Animals; Type: TABLE DATA; Schema: public; Owner: jaredthomas
--

COPY "Animals" (id, name, class, "createdAt", "updatedAt", description) FROM stdin;
1	Komodo Dragon	Reptilia	\N	\N	Komodo Dragons are super big lizards, and they can eat humans. Do your best not to mess with one.
2	Chameleon	Reptilia	\N	\N	I know these guys disguise themselves, and have a super cool way of catching their prey.
3	Gecko	Reptilia	\N	\N	Geico, and a playstation one game i used to play.
4	Poison Dart Frog	Amphibia	\N	\N	I heard their poison is lethal. Do your best not to mess with one
5	Salamander	Amphibia	\N	\N	I think they can swim. Can do they do things on land? Whatever, they're pretty ugly but pretty cool too.
6	Common Reed Frog	Amphibia	\N	\N	No idea what these are. Probably a boring ribbiting frog
7	Black Widow	Arachnida	\N	\N	I heard they're poisonous. Steve-O once put one in his mouth, and he didn't know that. Yea!
8	Goliath Birdeater	Arachnida	\N	\N	You can guess what this spider does.
9	Tarantula	Arachnida	\N	\N	Remember Daniel Stern's scream in Home Alone. That was because of a tarantula. Kevin Durant's nickname is Durantula.
\.


--
-- Name: Animals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jaredthomas
--

SELECT pg_catalog.setval('"Animals_id_seq"', 1, false);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: jaredthomas
--

COPY "SequelizeMeta" (name) FROM stdin;
20171224042410-unnamed-migration.js
\.


--
-- Name: Animals Animals_pkey; Type: CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Animals"
    ADD CONSTRAINT "Animals_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- PostgreSQL database dump complete
--

