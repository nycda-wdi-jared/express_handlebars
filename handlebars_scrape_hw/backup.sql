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
-- Name: Posts; Type: TABLE; Schema: public; Owner: jaredthomas
--

CREATE TABLE "Posts" (
    id integer NOT NULL,
    message character varying(255) NOT NULL,
    stat_id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    name text
);


ALTER TABLE "Posts" OWNER TO jaredthomas;

--
-- Name: Posts_id_seq; Type: SEQUENCE; Schema: public; Owner: jaredthomas
--

CREATE SEQUENCE "Posts_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Posts_id_seq" OWNER TO jaredthomas;

--
-- Name: Posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jaredthomas
--

ALTER SEQUENCE "Posts_id_seq" OWNED BY "Posts".id;


--
-- Name: Stats; Type: TABLE; Schema: public; Owner: jaredthomas
--

CREATE TABLE "Stats" (
    id integer NOT NULL,
    team character varying(255),
    ypg character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    ppg numeric DEFAULT 0,
    abbr character varying(255),
    color character varying(255)
);


ALTER TABLE "Stats" OWNER TO jaredthomas;

--
-- Name: Stats_id_seq; Type: SEQUENCE; Schema: public; Owner: jaredthomas
--

CREATE SEQUENCE "Stats_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Stats_id_seq" OWNER TO jaredthomas;

--
-- Name: Stats_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jaredthomas
--

ALTER SEQUENCE "Stats_id_seq" OWNED BY "Stats".id;


--
-- Name: Posts id; Type: DEFAULT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Posts" ALTER COLUMN id SET DEFAULT nextval('"Posts_id_seq"'::regclass);


--
-- Name: Stats id; Type: DEFAULT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Stats" ALTER COLUMN id SET DEFAULT nextval('"Stats_id_seq"'::regclass);


--
-- Data for Name: Posts; Type: TABLE DATA; Schema: public; Owner: jaredthomas
--

COPY "Posts" (id, message, stat_id, "createdAt", "updatedAt", name) FROM stdin;
8	i hate the patriots	1	2018-01-08 22:04:34.085-05	2018-01-08 22:04:34.085-05	Joey
9	Drew Bress rocks	2	2018-01-08 22:04:50.646-05	2018-01-08 22:04:50.646-05	Jobin
11	matt stafford rocks	13	2018-01-08 22:46:32.36-05	2018-01-08 22:46:32.36-05	Jared
\.


--
-- Name: Posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jaredthomas
--

SELECT pg_catalog.setval('"Posts_id_seq"', 11, true);


--
-- Data for Name: Stats; Type: TABLE DATA; Schema: public; Owner: jaredthomas
--

COPY "Stats" (id, team, ypg, "createdAt", "updatedAt", ppg, abbr, color) FROM stdin;
13	Detroit Lions	337.8	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.893-05	25.6	DET	047de8
17	Denver Broncos	324.1	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.899-05	18.1	DEN	d16200
14	Dallas Cowboys	331.9	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.896-05	22.1	DAL	4c81c7
15	Seattle Seahawks	330.4	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.895-05	22.9	SEA	4c81c7
16	Washington Redskins	324.9	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.896-05	21.4	WAS	cf6244
18	Oakland Raiders	324.1	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.898-05	18.8	OAK	bfbdbd
20	Houston Texans	320.0	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.897-05	21.1	HOU	ba2102
19	Carolina Panthers	323.7	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.895-05	22.7	CAR	4ee3e8
31	Indianapolis Colts	284.6	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.9-05	16.4	IND	4775ff
21	New York Giants	314.2	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.9-05	15.4	NYG	5b84ff
23	Tennessee Titans	314.0	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.897-05	20.9	TEN	76d4de
30	Chicago Bears	287.4	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.9-05	16.5	CHI	010157
32	Cincinnati Bengals	280.5	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.899-05	18.1	CIN	ff6600
26	Green Bay Packers	305.7	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.897-05	20	GB	19ad02
24	Cleveland Browns	308.9	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.9-05	14.6	CLE	e07f00
2	New Orleans Saints	391.2	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.892-05	28	NO	c2a523
11	Minnesota Vikings	356.9	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.894-05	23.9	MIN	7040c4
6	Jacksonville Jaguars	365.9	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.892-05	26.1	JAX	4e9bc7
1	New England Patriots	394.2	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.891-05	28.6	NE	435ed6
3	Pittsburgh Steelers	377.9	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.894-05	25.4	PIT	ffec1e
29	Buffalo Bills	302.6	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.898-05	18.9	BUF	d95e38
28	New York Jets	305.2	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.898-05	18.6	NYJ	018505
27	Baltimore Ravens	305.4	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.894-05	24.7	BAL	5b1c78
25	Miami Dolphins	307.7	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.899-05	17.6	MIA	47d6d4
10	Los Angeles Rams	361.5	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.887-05	29.9	LA	416ead
22	Arizona Cardinals	314.1	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.899-05	18.4	ARI	b33600
7	Philadelphia Eagles	365.8	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.892-05	28.6	PHI	2bb302
4	Los Angeles Chargers	376.6	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.896-05	22.2	LAC	f2ea51
9	Tampa Bay Buccaneers	363.5	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.897-05	20.9	TB	ab371e
8	Atlanta Falcons	364.8	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.896-05	22.1	ATL	7a0010
12	San Francisco 49ers	349.2	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.897-05	20.7	SF	b03b1e
5	Kansas City Chiefs	375.4	2018-01-08 20:19:38.565-05	2018-01-08 22:37:26.893-05	25.9	KC	f50400
\.


--
-- Name: Stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jaredthomas
--

SELECT pg_catalog.setval('"Stats_id_seq"', 64, true);


--
-- Name: Posts Posts_pkey; Type: CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Posts"
    ADD CONSTRAINT "Posts_pkey" PRIMARY KEY (id);


--
-- Name: Stats Stats_pkey; Type: CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Stats"
    ADD CONSTRAINT "Stats_pkey" PRIMARY KEY (id);


--
-- Name: Posts Posts_stat_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Posts"
    ADD CONSTRAINT "Posts_stat_id_fkey" FOREIGN KEY (stat_id) REFERENCES "Stats"(id);


--
-- PostgreSQL database dump complete
--

