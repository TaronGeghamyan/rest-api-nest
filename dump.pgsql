--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: testone; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA testone;


ALTER SCHEMA testone OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: case_history; Type: TABLE; Schema: testone; Owner: postgres
--

CREATE TABLE testone.case_history (
    id integer NOT NULL,
    check_date date NOT NULL,
    cases_total integer,
    cases_new integer,
    cases_confirm integer,
    cases_probable integer,
    state_id integer NOT NULL,
    status integer DEFAULT 1 NOT NULL
);


ALTER TABLE testone.case_history OWNER TO postgres;

--
-- Name: case_history_id_seq; Type: SEQUENCE; Schema: testone; Owner: postgres
--

ALTER TABLE testone.case_history ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME testone.case_history_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: states; Type: TABLE; Schema: testone; Owner: postgres
--

CREATE TABLE testone.states (
    id integer NOT NULL,
    code character varying NOT NULL,
    name character varying NOT NULL,
    status integer NOT NULL
);


ALTER TABLE testone.states OWNER TO postgres;

--
-- Name: states_id_seq; Type: SEQUENCE; Schema: testone; Owner: postgres
--

ALTER TABLE testone.states ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME testone.states_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: case_history; Type: TABLE DATA; Schema: testone; Owner: postgres
--

COPY testone.case_history (id, check_date, cases_total, cases_new, cases_confirm, cases_probable, state_id, status) FROM stdin;
1	2022-12-01	100	20	70	10	1	1
3	2022-12-01	100	20	70	10	2	1
2	2022-12-02	100	20	70	10	1	1
4	2022-12-02	100	20	70	10	2	1
5	2022-12-03	100	20	70	10	2	1
\.


--
-- Data for Name: states; Type: TABLE DATA; Schema: testone; Owner: postgres
--

COPY testone.states (id, code, name, status) FROM stdin;
2	AK	Alaska	1
3	AZ	Arizona	1
4	AR	Arkansas	1
5	CA	California	1
6	CO	Colorado	1
7	CT	Connecticut	1
8	DE	Delaware	1
9	FL	Florida	1
10	GA	Georgia	1
11	HI	Hawaii	1
12	ID	Idaho	1
13	IL	Illinois	1
14	IN	Indiana	1
15	IA	Iowa	1
16	KS	Kansas	1
17	KY	Kentucky	1
18	LA	Louisiana	1
19	ME	Maine	1
20	MD	Maryland	1
21	MA	Massachusetts	1
22	MI	Michigan	1
23	MN	Minnesota	1
24	MS	Mississippi	1
25	MO	Missouri	1
26	MT	Montana	1
27	NE	Nebraska	1
28	NV	Nevada	1
29	NH	New Hampshire	1
30	NJ	New Jersey	1
31	NM	New Mexico	1
32	NY	New York	1
33	NC	North Carolina	1
34	ND	North Dakota	1
35	OH	Ohio	1
36	OK	Oklahoma	1
37	OR	Oregon	1
38	PA	Pennsylvania	1
39	RI	Rhode Island	1
40	SC	South Carolina	1
41	SD	South Dakota	1
42	TN	Tennessee	1
43	TX	Texas	1
44	UT	Utah	1
45	VT	Vermont	1
46	VA	Virginia	1
47	WA	Washington	1
48	WV	West Virginia	1
49	WI	Wisconsin	1
50	WY	Wyoming	1
1	AL	Alabama	1
\.


--
-- Name: case_history_id_seq; Type: SEQUENCE SET; Schema: testone; Owner: postgres
--

SELECT pg_catalog.setval('testone.case_history_id_seq', 5, true);


--
-- Name: states_id_seq; Type: SEQUENCE SET; Schema: testone; Owner: postgres
--

SELECT pg_catalog.setval('testone.states_id_seq', 50, true);


--
-- Name: case_history case_history_pkey; Type: CONSTRAINT; Schema: testone; Owner: postgres
--

ALTER TABLE ONLY testone.case_history
    ADD CONSTRAINT case_history_pkey PRIMARY KEY (id);


--
-- Name: states states_pkey; Type: CONSTRAINT; Schema: testone; Owner: postgres
--

ALTER TABLE ONLY testone.states
    ADD CONSTRAINT states_pkey PRIMARY KEY (id);


--
-- Name: case_history unique_constraint_data; Type: CONSTRAINT; Schema: testone; Owner: postgres
--

ALTER TABLE ONLY testone.case_history
    ADD CONSTRAINT unique_constraint_data UNIQUE (check_date, state_id);


--
-- PostgreSQL database dump complete
--

