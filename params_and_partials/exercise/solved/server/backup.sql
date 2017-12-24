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
-- Name: Cars; Type: TABLE; Schema: public; Owner: jaredthomas
--

CREATE TABLE "Cars" (
    id integer NOT NULL,
    make character varying(255) NOT NULL,
    model character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Cars" OWNER TO jaredthomas;

--
-- Name: Cars_id_seq; Type: SEQUENCE; Schema: public; Owner: jaredthomas
--

CREATE SEQUENCE "Cars_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Cars_id_seq" OWNER TO jaredthomas;

--
-- Name: Cars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jaredthomas
--

ALTER SEQUENCE "Cars_id_seq" OWNED BY "Cars".id;


--
-- Name: Cars id; Type: DEFAULT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Cars" ALTER COLUMN id SET DEFAULT nextval('"Cars_id_seq"'::regclass);


--
-- Data for Name: Cars; Type: TABLE DATA; Schema: public; Owner: jaredthomas
--

COPY "Cars" (id, make, model, "createdAt", "updatedAt") FROM stdin;
1	Ferrari	Auto Avio Costruzioni 815	2017-12-24 00:31:51.389-05	2017-12-24 00:31:51.389-05
2	Aston Martin	Aston Martin DB5	2017-12-24 00:31:51.389-05	2017-12-24 00:31:51.389-05
3	Morgan	Morgan Plus 8	2017-12-24 00:31:51.389-05	2017-12-24 00:31:51.389-05
\.


--
-- Name: Cars_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jaredthomas
--

SELECT pg_catalog.setval('"Cars_id_seq"', 6, true);


--
-- Name: Cars Cars_pkey; Type: CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Cars"
    ADD CONSTRAINT "Cars_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

