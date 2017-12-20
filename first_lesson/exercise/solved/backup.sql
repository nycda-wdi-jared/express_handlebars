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
-- Name: Songs; Type: TABLE; Schema: public; Owner: jaredthomas
--

CREATE TABLE "Songs" (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    artist character varying(255) NOT NULL,
    lyrics text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Songs" OWNER TO jaredthomas;

--
-- Name: Songs_id_seq; Type: SEQUENCE; Schema: public; Owner: jaredthomas
--

CREATE SEQUENCE "Songs_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Songs_id_seq" OWNER TO jaredthomas;

--
-- Name: Songs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jaredthomas
--

ALTER SEQUENCE "Songs_id_seq" OWNED BY "Songs".id;


--
-- Name: Songs id; Type: DEFAULT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Songs" ALTER COLUMN id SET DEFAULT nextval('"Songs_id_seq"'::regclass);


--
-- Data for Name: Songs; Type: TABLE DATA; Schema: public; Owner: jaredthomas
--

COPY "Songs" (id, title, artist, lyrics, "createdAt", "updatedAt") FROM stdin;
1	Unsung	Helmet	Your contribution left unnoticed some\nAssociation with an image\nJust credit time for showing up again\nAttention wandered I'm left with it\n\nGone by sin too slowly\nCan't pass it up\nThen I thought nothing is right\nI turned it off\n\nTo die unsung would really bring you down\nAlthough wet eyes would never suit you\nWalk through no archetypal suicide to\nDie young is far too boring these days\n\nYour will to speak clearly\nExposed too much\nUnsung once too often\nCould not rub off	2017-12-20 12:57:13.229-05	2017-12-20 12:57:13.229-05
2	When Worlds Collide	Powerman 5000	Now this is what it's like when worlds collide\nNow this is what it's like\nNow this is what it's like when worlds collide\nNow this is what it's like\n\nWhat is it really\nThat's going on here\nYou've got your system for total control\nNow is there really anybody out there\nNow watch us suffer cause we can't go\nWhat is it really that is in your head\nWhat little life that you had just died\nI'm gonna be the one that's taking over\nNow this is what it's like when worlds collide\n\nAre you ready to go\n'Cause I'm ready to go\nWhat you gonna do baby, baby\nAre you going with me\n'Cause I'm going with you\nIt's the end of all time\n\nWhat is it really that motivates you\nThe need to fly or this fear to stop\nI'll go along when you realize\nWhen we get there I say nine of ten drop\nNow who's the light and who is the devil\nYou can't decide so I'll be your guide\nAnd one by one they will be hand chosen\nNow this is what it's like when worlds collide\n\nAre you ready to go\nCause I'm ready to go\nWhat you gonna do baby, baby\nAre you going with me\nCause I'm going with you\nIt's the end of all time\n\nYou are a robot\n\nNow this is what it's like when worlds collide\nNow this is what it's like\nNow this is what it's like when worlds collide\nNow this is what it's like\n\nWhat is it really when they're falling over\nEverything that you thought is denied\nI'm gonna be the one that's taking over\nNow this is what it's like when worlds collide\n\nAre you ready to go\n'Cause I'm ready to go\nWhat you gonna do baby, baby\nAre you going with me\n'Cause I'm going with you\nIt's the end of all time\n\nAre you ready to go\n'Cause I'm ready to go\nWhat you gonna do baby, baby\nAre you going with me\n'Cause I'm going with you\nIt's the end of all time\n\nAre you ready\n'Cause I'm ready\nIt's the end of all time\nAre you going\nYeah I'm going\nIt's the end of all time	2017-12-20 12:58:51.163-05	2017-12-20 12:58:51.163-05
3	Blurry	Puddle of Mudd	Everything's so blurry\nAnd everyone's so fake\nAnd everybody's empty\nAnd everything is so messed up\nPre-occupied without you\nI cannot live at all\nMy whole world surrounds you\nI stumble then I crawl\n\nYou could be my someone\nYou could be my scene\nYou know that I'll protect you\nFrom all of the obscene\nI wonder what you're doing\nImagine where you are\nThere's oceans in between us\nBut that's not very far\n\nCan you take it all away\nCan you take it all away\nWell ya shoved it in my face\nThis pain you gave to me\nCan you take it all away\nCan you take it all away\nWell ya shoved it in my face\n\nEveryone is changing\nThere's none left that's real\nTo make up your own ending\nAnd let me know just how you feel\nCause I am lost without you\nI cannot live at all\nMy whole world surrounds you\nI stumble then I crawl\n\nYou could be my someone\nYou could be my scene\nYou know that I will save you\nFrom all of the unclean\nI wonder what you're doing\nI wonder where you are\nThere's oceans in between us\nBut that's not very far\n\nCan you take it all away\nCan you take it all away\nWell ya shoved it in my face\nThis pain you gave to me\nCan you take it all away\nCan you take it all away\nWell ya shoved it in my face\nThis pain you gave to me\n\nNobody told me what you thought\nNobody told me what to say\nEveryone showed you where to turn\nTold you when to runaway\nNobody told you where to hide\nNobody told you what to say\nEveryone showed you where to turn\nShowed you when to runaway\n\nCan you take it all away\nCan you take it all away\nWell ya shoved it in my face\nThis pain you gave to me\nCan you take it all away\nCan you take it all away\nWell ya shoved it in my face\nThis pain you gave to me\n\nThis pain you gave to me\n\nYou take it all\nYou take it all away\nThis pain you gave to me\nYou take it all away\nThis pain you gave to me\nTake it all away\nThis pain you gave to me	2017-12-20 12:59:15.4-05	2017-12-20 12:59:15.4-05
\.


--
-- Name: Songs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jaredthomas
--

SELECT pg_catalog.setval('"Songs_id_seq"', 3, true);


--
-- Name: Songs Songs_pkey; Type: CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Songs"
    ADD CONSTRAINT "Songs_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

