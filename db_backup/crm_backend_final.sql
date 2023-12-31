toc.dat                                                                                             0000600 0004000 0002000 00000041454 14450232415 0014447 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP       1                    {         
   crmsistema %   12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)    15.3 9    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         �           1262    16995 
   crmsistema    DATABASE     v   CREATE DATABASE crmsistema WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
    DROP DATABASE crmsistema;
                postgres    false         �           0    0    DATABASE crmsistema    ACL     4   GRANT ALL ON DATABASE crmsistema TO crmsistema_grp;
                   postgres    false    3008                     2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false         �           0    0    SCHEMA public    ACL     Y   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO crmsistema_grp;
                   postgres    false    7         �            1259    16997    groups    TABLE     m  CREATE TABLE public.groups (
    id integer NOT NULL,
    study_field integer NOT NULL,
    teacher character varying(50) NOT NULL,
    assistant_teacher integer NOT NULL,
    image text,
    daysisjuft character varying,
    "time" time without time zone,
    room character varying,
    created_at timestamp without time zone DEFAULT now(),
    tg_groups text
);
    DROP TABLE public.groups;
       public         heap 	   excellend    false    7         �            1259    17004    groups_id_seq    SEQUENCE     �   CREATE SEQUENCE public.groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.groups_id_seq;
       public       	   excellend    false    7    202         �           0    0    groups_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.groups_id_seq OWNED BY public.groups.id;
          public       	   excellend    false    203         �            1259    17006    homework_answers    TABLE     C  CREATE TABLE public.homework_answers (
    id integer NOT NULL,
    homeworks_id integer,
    students_id integer,
    github_link text,
    note text,
    ball character varying,
    assistant_id integer,
    edited_at timestamp without time zone DEFAULT now(),
    created_at timestamp without time zone DEFAULT now()
);
 $   DROP TABLE public.homework_answers;
       public         heap 	   excellend    false    7         �            1259    17014    homework_answers_id_seq    SEQUENCE     �   CREATE SEQUENCE public.homework_answers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.homework_answers_id_seq;
       public       	   excellend    false    204    7         �           0    0    homework_answers_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.homework_answers_id_seq OWNED BY public.homework_answers.id;
          public       	   excellend    false    205         �            1259    17016 	   homeworks    TABLE     �   CREATE TABLE public.homeworks (
    id integer NOT NULL,
    group_id integer,
    title text NOT NULL,
    description text,
    created_at timestamp without time zone DEFAULT now()
);
    DROP TABLE public.homeworks;
       public         heap 	   excellend    false    7         �            1259    17023    homeworks_id_seq    SEQUENCE     �   CREATE SEQUENCE public.homeworks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.homeworks_id_seq;
       public       	   excellend    false    206    7         �           0    0    homeworks_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.homeworks_id_seq OWNED BY public.homeworks.id;
          public       	   excellend    false    207         �            1259    17025    students    TABLE     B  CREATE TABLE public.students (
    id integer NOT NULL,
    firstname character varying(50) NOT NULL,
    lastname character varying(50) NOT NULL,
    age integer,
    phone character varying(12) NOT NULL,
    t_username character varying(255),
    image text,
    jinsi integer,
    tg_id bigint,
    group_id integer
);
    DROP TABLE public.students;
       public         heap 	   excellend    false    7         �            1259    17031    students_id_seq    SEQUENCE     �   CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.students_id_seq;
       public       	   excellend    false    7    208         �           0    0    students_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.students_id_seq OWNED BY public.students.id;
          public       	   excellend    false    209         �            1259    17033    study_fields    TABLE     �   CREATE TABLE public.study_fields (
    id integer NOT NULL,
    name character varying(255),
    price integer,
    created_at timestamp without time zone DEFAULT now()
);
     DROP TABLE public.study_fields;
       public         heap 	   excellend    false    7         �            1259    17037    study_fields_id_seq    SEQUENCE     �   CREATE SEQUENCE public.study_fields_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.study_fields_id_seq;
       public       	   excellend    false    7    210         �           0    0    study_fields_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.study_fields_id_seq OWNED BY public.study_fields.id;
          public       	   excellend    false    211         �            1259    17039    users    TABLE     �  CREATE TABLE public.users (
    id integer NOT NULL,
    firstname character varying(50) NOT NULL,
    lastname character varying(50) NOT NULL,
    age integer,
    phone character varying(12) NOT NULL,
    password text NOT NULL,
    role character varying(30),
    image text,
    t_username character varying(255),
    field_id integer,
    jinsi integer,
    created_at timestamp without time zone DEFAULT now()
);
    DROP TABLE public.users;
       public         heap 	   excellend    false    7         �            1259    17046    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public       	   excellend    false    212    7         �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public       	   excellend    false    213                    2604    17048 	   groups id    DEFAULT     f   ALTER TABLE ONLY public.groups ALTER COLUMN id SET DEFAULT nextval('public.groups_id_seq'::regclass);
 8   ALTER TABLE public.groups ALTER COLUMN id DROP DEFAULT;
       public       	   excellend    false    203    202                    2604    17049    homework_answers id    DEFAULT     z   ALTER TABLE ONLY public.homework_answers ALTER COLUMN id SET DEFAULT nextval('public.homework_answers_id_seq'::regclass);
 B   ALTER TABLE public.homework_answers ALTER COLUMN id DROP DEFAULT;
       public       	   excellend    false    205    204                    2604    17050    homeworks id    DEFAULT     l   ALTER TABLE ONLY public.homeworks ALTER COLUMN id SET DEFAULT nextval('public.homeworks_id_seq'::regclass);
 ;   ALTER TABLE public.homeworks ALTER COLUMN id DROP DEFAULT;
       public       	   excellend    false    207    206                    2604    17051    students id    DEFAULT     j   ALTER TABLE ONLY public.students ALTER COLUMN id SET DEFAULT nextval('public.students_id_seq'::regclass);
 :   ALTER TABLE public.students ALTER COLUMN id DROP DEFAULT;
       public       	   excellend    false    209    208                    2604    17052    study_fields id    DEFAULT     r   ALTER TABLE ONLY public.study_fields ALTER COLUMN id SET DEFAULT nextval('public.study_fields_id_seq'::regclass);
 >   ALTER TABLE public.study_fields ALTER COLUMN id DROP DEFAULT;
       public       	   excellend    false    211    210                    2604    17053    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public       	   excellend    false    213    212         �          0    16997    groups 
   TABLE DATA           �   COPY public.groups (id, study_field, teacher, assistant_teacher, image, daysisjuft, "time", room, created_at, tg_groups) FROM stdin;
    public       	   excellend    false    202       2991.dat �          0    17006    homework_answers 
   TABLE DATA           �   COPY public.homework_answers (id, homeworks_id, students_id, github_link, note, ball, assistant_id, edited_at, created_at) FROM stdin;
    public       	   excellend    false    204       2993.dat �          0    17016 	   homeworks 
   TABLE DATA           Q   COPY public.homeworks (id, group_id, title, description, created_at) FROM stdin;
    public       	   excellend    false    206       2995.dat �          0    17025    students 
   TABLE DATA           r   COPY public.students (id, firstname, lastname, age, phone, t_username, image, jinsi, tg_id, group_id) FROM stdin;
    public       	   excellend    false    208       2997.dat �          0    17033    study_fields 
   TABLE DATA           C   COPY public.study_fields (id, name, price, created_at) FROM stdin;
    public       	   excellend    false    210       2999.dat �          0    17039    users 
   TABLE DATA           �   COPY public.users (id, firstname, lastname, age, phone, password, role, image, t_username, field_id, jinsi, created_at) FROM stdin;
    public       	   excellend    false    212       3001.dat �           0    0    groups_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.groups_id_seq', 16, true);
          public       	   excellend    false    203         �           0    0    homework_answers_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.homework_answers_id_seq', 3, true);
          public       	   excellend    false    205         �           0    0    homeworks_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.homeworks_id_seq', 10, true);
          public       	   excellend    false    207         �           0    0    students_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.students_id_seq', 27, true);
          public       	   excellend    false    209         �           0    0    study_fields_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.study_fields_id_seq', 11, true);
          public       	   excellend    false    211         �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 21, true);
          public       	   excellend    false    213                    2606    17055    groups groups_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.groups DROP CONSTRAINT groups_pkey;
       public         	   excellend    false    202                    2606    17057 &   homework_answers homework_answers_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.homework_answers
    ADD CONSTRAINT homework_answers_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.homework_answers DROP CONSTRAINT homework_answers_pkey;
       public         	   excellend    false    204                     2606    17059    homeworks homeworks_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.homeworks
    ADD CONSTRAINT homeworks_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.homeworks DROP CONSTRAINT homeworks_pkey;
       public         	   excellend    false    206         "           2606    17061    students students_phone_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_phone_key UNIQUE (phone);
 E   ALTER TABLE ONLY public.students DROP CONSTRAINT students_phone_key;
       public         	   excellend    false    208         $           2606    17063    students students_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.students DROP CONSTRAINT students_pkey;
       public         	   excellend    false    208         &           2606    17065    study_fields study_fields_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.study_fields
    ADD CONSTRAINT study_fields_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.study_fields DROP CONSTRAINT study_fields_pkey;
       public         	   excellend    false    210         (           2606    17067    users users_phone_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_phone_key UNIQUE (phone);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_phone_key;
       public         	   excellend    false    212         *           2606    17069    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public         	   excellend    false    212         +           2606    17102    groups group_assistant_teacher    FK CONSTRAINT     �   ALTER TABLE ONLY public.groups
    ADD CONSTRAINT group_assistant_teacher FOREIGN KEY (assistant_teacher) REFERENCES public.users(id) ON DELETE SET NULL NOT VALID;
 H   ALTER TABLE ONLY public.groups DROP CONSTRAINT group_assistant_teacher;
       public       	   excellend    false    212    2858    202         ,           2606    17070    groups groups_study_field_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_study_field_fkey FOREIGN KEY (study_field) REFERENCES public.study_fields(id);
 H   ALTER TABLE ONLY public.groups DROP CONSTRAINT groups_study_field_fkey;
       public       	   excellend    false    210    2854    202         -           2606    17075 3   homework_answers homework_answers_homeworks_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.homework_answers
    ADD CONSTRAINT homework_answers_homeworks_id_fkey FOREIGN KEY (homeworks_id) REFERENCES public.homeworks(id);
 ]   ALTER TABLE ONLY public.homework_answers DROP CONSTRAINT homework_answers_homeworks_id_fkey;
       public       	   excellend    false    204    2848    206         .           2606    17080 2   homework_answers homework_answers_students_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.homework_answers
    ADD CONSTRAINT homework_answers_students_id_fkey FOREIGN KEY (students_id) REFERENCES public.students(id);
 \   ALTER TABLE ONLY public.homework_answers DROP CONSTRAINT homework_answers_students_id_fkey;
       public       	   excellend    false    2852    208    204         /           2606    17085 !   homeworks homeworks_group_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.homeworks
    ADD CONSTRAINT homeworks_group_id_fkey FOREIGN KEY (group_id) REFERENCES public.groups(id);
 K   ALTER TABLE ONLY public.homeworks DROP CONSTRAINT homeworks_group_id_fkey;
       public       	   excellend    false    2844    202    206         0           2606    17107     students students_group_id_fkeys    FK CONSTRAINT     �   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_group_id_fkeys FOREIGN KEY (group_id) REFERENCES public.groups(id) ON DELETE SET NULL NOT VALID;
 J   ALTER TABLE ONLY public.students DROP CONSTRAINT students_group_id_fkeys;
       public       	   excellend    false    202    208    2844                                                                                                                                                                                                                            2991.dat                                                                                            0000600 0004000 0002000 00000001273 14450232415 0014261 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        12	3	Anvar Narzullayev	12	84246a72-c953-4aed-af6d-ac0268515ad9.jpeg	\N	18:40:00	facebook	2023-06-30 07:56:24.82515	https://t.me/najottalim_discuss
1	6	Masanov	6	916efa72-287e-4390-9e41-1863e77683b7.png	true	14:30:00	instagram	2023-06-27 15:18:30.678338	https://t.me/najottalim_discuss
2	8	Akmal kadirov	6	6f173e83-40b7-4347-ac47-3c09770f1ef4.png	null	18:40:00	Youtube	2023-06-27 15:18:30.678338	https://t.me/najottalim_discuss
9	9	Muhammadjavohir Suratov	6	90250f58-4987-42d7-8f2e-e9a77fcb55d5.png	\N	18:40:00	Youtube	2023-06-28 13:18:21.278484	https://t.me/najottalim_discuss
16	3	Aliev Davlat	8	294daede-7abe-4b67-8e6f-2ac1195ecfe9.jpeg	null	14:20:00	twiter	2023-07-01 18:55:31.238285	nodejs
\.


                                                                                                                                                                                                                                                                                                                                     2993.dat                                                                                            0000600 0004000 0002000 00000000344 14450232415 0014261 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        2	9	24	https://github.com/idealprojectuz/nodejs-uz-battle	\N	\N	\N	2023-07-02 09:12:04.854965	2023-07-02 09:12:04.854965
3	10	24	https://kun.uz/test	malades lekin	10	10	2023-07-02 09:57:52.317334	2023-07-02 09:57:52.317334
\.


                                                                                                                                                                                                                                                                                            2995.dat                                                                                            0000600 0004000 0002000 00000001045 14450232415 0014262 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        5	1	Nodejs da crm sistema qilib keliylar	Juda zo'r qilib keliylar sotamiza	2023-06-28 17:42:24.644707
7	9	Test ishlash	Test description	2023-07-01 21:51:41.624087
8	9	Test ishlash new	Test description	2023-07-01 21:57:42.38684
9	9	Test ishlash new	Test description	2023-07-01 22:10:50.462589
10	9	React js da hook yaratib kelish 	kelasi darsgacha hamma usemodal useaxios usedebaunse kabi hooklarni yaratib kelsin 	2023-07-02 09:56:44.906378
6	1	Reactjs da crm sistema qilib keliylar	Juda zo'r qilib keliylar sotamiza	2023-06-29 07:46:58.951798
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           2997.dat                                                                                            0000600 0004000 0002000 00000000165 14450232415 0014266 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        24	Hayotbekjon	Samandarov	30	998900860011	excellend_boy	bf580b37-4d9a-4e61-b786-d6e45105367c.png	1	5288136119	9
\.


                                                                                                                                                                                                                                                                                                                                                                                                           2999.dat                                                                                            0000600 0004000 0002000 00000000677 14450232416 0014301 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Frontend	1200000	2023-06-26 18:04:12.834523
2	backend	1200000	2023-06-26 18:08:19.042369
3	full stack	1200000	2023-06-26 18:08:24.710408
4	Devops	1000000	2023-06-27 10:27:55.020591
5	Go	1000000	2023-06-27 10:28:04.671793
6	Php	1000000	2023-06-27 10:28:09.007585
7	C++	1000000	2023-06-27 10:28:12.945788
8	Flutter	1000000	2023-06-27 10:28:20.458776
9	Dart	1000000	2023-06-27 10:28:24.74935
11	updated course	50000	2023-07-01 21:20:13.674269
\.


                                                                 3001.dat                                                                                            0000600 0004000 0002000 00000004520 14450232416 0014237 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        8	user2	demo	20	998900000000	$2b$10$sjgh11nUVUHzbQMImA8J.OoN3zkMR0kAxFamXXggUW.ynA9w5Lbui	assistants	8b472ea3-c11d-4a53-8504-12221860ad83.png	masanov_j	4	1	2023-06-27 10:23:18.200457
9	user3	demo	20	998900000001	$2b$10$ff4iwWidAb2am//FXkn3c.3qsxdOdRqKeN2M3BRH9nnV9M0k3uQdm	assistants	f4b29346-396e-4a8f-a6e8-5ccbc39fbcd9.png	masanov_j	4	1	2023-06-27 10:23:25.563666
10	user4	demo	20	998900000002	$2b$10$oFCx6uZId5KTtYn7WHOUmegAmNsswMvjpxH0nlcmK9PvuQLJSgCE.	assistants	5803f81f-b911-437b-bb07-dfa8942f2d13.png	masanov_j	3	1	2023-06-27 10:23:35.11484
12	user5	demo	20	998900000005	$2b$10$JUUq42yFSKLlJsUy6igVY.cW4tEBFESVNC088WaK639qKf2tgX7du	assistants	7db622bd-89a2-419c-94a4-c8da7d516bbb.png	masanov_j	2	1	2023-06-27 10:23:44.836397
6	Hayotbek	Samandarov	22	998991234567	$2b$10$aHcRHmmf2/Mw.GJVjeCg9uqE3TKehs2tS9Tx/n4n.plLEEAWQiRHa	assistants	b5e7bb08-863e-4153-9f74-1b9c783edc5f.png	test_user	5	0	2023-06-27 09:49:34.350256
1	Hayotbek	Samandarov	20	998900860011	$2b$10$aHcRHmmf2/Mw.GJVjeCg9uqE3TKehs2tS9Tx/n4n.plLEEAWQiRHa	administrator	https://media.licdn.com/dms/image/D4D03AQG7hXD2HqQLKw/profile-displayphoto-shrink_200_200/0/1685215858099?e=1693440000&v=beta&t=le7NRmgq3dNS_PVf626BGjVRXN7SR7pmxfDfyArw2CE	excellend_boy	1	1	2023-06-26 15:43:38.709661
13	demo	demo	20	998944223167	$2b$10$/7vq7ARKJ5W.rNXh.8obouDM173IOoaTnRAU2Evu8NuqGI2tFb3KG	assistants	c6aced7c-3d78-4520-a89e-6adc0741b753.png	masanov_j	4	1	2023-07-01 07:29:35.478953
15	demo	demo	20	998945556558	$2b$10$wSXzXBpIitSWOu6n1mwiaePu85OSqfqT5xuz8Mj9S7ZotDLjR5sqG	assistants	329e1a58-7a1a-4493-8f4a-c12a47c9a4f0.png	masanov_j	4	1	2023-07-01 07:30:09.468441
16	Hayotbek	Samandarov	20	998944142404	$2b$10$Q2iou55fHY24i1V0/BCQGuSlrWS7o1Tm0TWYWvvfseLcXoCIYmmm2	assistants	e6fdd503-3d3b-487f-be00-cd2865be88e5.png	excellend_boy	6	1	2023-07-01 11:49:41.268307
17	davlat	aliev	21	998999331564	$2b$10$QDOBwwqsWzJGnvn3AYgDsOiYQIjMWQcQs7HM7GJ7OndzlXMPaJoa2	assistants	2743d25e-e798-4b2d-9321-73e8d17b6e2d.jpeg	aliev17	1	1	2023-07-01 13:52:30.123762
20	dacron	raimjonov	22	998970088990	$2b$10$px6LAAObUPeAAvJPxT/Y8OYUyGONUDrZvb/4ewQr81hDJIkK3n1hG	assistants	2bdcf2cd-7009-488d-a0b2-a4a026f1d824.jpeg	raimjono17	12	1	2023-07-01 14:03:32.820012
21	husya	musya	23	998988889009	$2b$10$EVSY6GoZ9sjX5tQmQ9j.8u.TbWT2VTBO5TBLwV3uIEYoMWz3OYsb2	assistants	9151759e-da29-4d5a-8148-a97f5904dfc6.jpeg	husy23	3	1	2023-07-01 14:06:47.018484
\.


                                                                                                                                                                                restore.sql                                                                                         0000600 0004000 0002000 00000033332 14450232416 0015371 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 15.3

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

DROP DATABASE crmsistema;
--
-- Name: crmsistema; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE crmsistema WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';


ALTER DATABASE crmsistema OWNER TO postgres;

\connect crmsistema

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
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: groups; Type: TABLE; Schema: public; Owner: excellend
--

CREATE TABLE public.groups (
    id integer NOT NULL,
    study_field integer NOT NULL,
    teacher character varying(50) NOT NULL,
    assistant_teacher integer NOT NULL,
    image text,
    daysisjuft character varying,
    "time" time without time zone,
    room character varying,
    created_at timestamp without time zone DEFAULT now(),
    tg_groups text
);


ALTER TABLE public.groups OWNER TO excellend;

--
-- Name: groups_id_seq; Type: SEQUENCE; Schema: public; Owner: excellend
--

CREATE SEQUENCE public.groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.groups_id_seq OWNER TO excellend;

--
-- Name: groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: excellend
--

ALTER SEQUENCE public.groups_id_seq OWNED BY public.groups.id;


--
-- Name: homework_answers; Type: TABLE; Schema: public; Owner: excellend
--

CREATE TABLE public.homework_answers (
    id integer NOT NULL,
    homeworks_id integer,
    students_id integer,
    github_link text,
    note text,
    ball character varying,
    assistant_id integer,
    edited_at timestamp without time zone DEFAULT now(),
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.homework_answers OWNER TO excellend;

--
-- Name: homework_answers_id_seq; Type: SEQUENCE; Schema: public; Owner: excellend
--

CREATE SEQUENCE public.homework_answers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.homework_answers_id_seq OWNER TO excellend;

--
-- Name: homework_answers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: excellend
--

ALTER SEQUENCE public.homework_answers_id_seq OWNED BY public.homework_answers.id;


--
-- Name: homeworks; Type: TABLE; Schema: public; Owner: excellend
--

CREATE TABLE public.homeworks (
    id integer NOT NULL,
    group_id integer,
    title text NOT NULL,
    description text,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.homeworks OWNER TO excellend;

--
-- Name: homeworks_id_seq; Type: SEQUENCE; Schema: public; Owner: excellend
--

CREATE SEQUENCE public.homeworks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.homeworks_id_seq OWNER TO excellend;

--
-- Name: homeworks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: excellend
--

ALTER SEQUENCE public.homeworks_id_seq OWNED BY public.homeworks.id;


--
-- Name: students; Type: TABLE; Schema: public; Owner: excellend
--

CREATE TABLE public.students (
    id integer NOT NULL,
    firstname character varying(50) NOT NULL,
    lastname character varying(50) NOT NULL,
    age integer,
    phone character varying(12) NOT NULL,
    t_username character varying(255),
    image text,
    jinsi integer,
    tg_id bigint,
    group_id integer
);


ALTER TABLE public.students OWNER TO excellend;

--
-- Name: students_id_seq; Type: SEQUENCE; Schema: public; Owner: excellend
--

CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.students_id_seq OWNER TO excellend;

--
-- Name: students_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: excellend
--

ALTER SEQUENCE public.students_id_seq OWNED BY public.students.id;


--
-- Name: study_fields; Type: TABLE; Schema: public; Owner: excellend
--

CREATE TABLE public.study_fields (
    id integer NOT NULL,
    name character varying(255),
    price integer,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.study_fields OWNER TO excellend;

--
-- Name: study_fields_id_seq; Type: SEQUENCE; Schema: public; Owner: excellend
--

CREATE SEQUENCE public.study_fields_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.study_fields_id_seq OWNER TO excellend;

--
-- Name: study_fields_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: excellend
--

ALTER SEQUENCE public.study_fields_id_seq OWNED BY public.study_fields.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: excellend
--

CREATE TABLE public.users (
    id integer NOT NULL,
    firstname character varying(50) NOT NULL,
    lastname character varying(50) NOT NULL,
    age integer,
    phone character varying(12) NOT NULL,
    password text NOT NULL,
    role character varying(30),
    image text,
    t_username character varying(255),
    field_id integer,
    jinsi integer,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO excellend;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: excellend
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO excellend;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: excellend
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: groups id; Type: DEFAULT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.groups ALTER COLUMN id SET DEFAULT nextval('public.groups_id_seq'::regclass);


--
-- Name: homework_answers id; Type: DEFAULT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.homework_answers ALTER COLUMN id SET DEFAULT nextval('public.homework_answers_id_seq'::regclass);


--
-- Name: homeworks id; Type: DEFAULT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.homeworks ALTER COLUMN id SET DEFAULT nextval('public.homeworks_id_seq'::regclass);


--
-- Name: students id; Type: DEFAULT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.students ALTER COLUMN id SET DEFAULT nextval('public.students_id_seq'::regclass);


--
-- Name: study_fields id; Type: DEFAULT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.study_fields ALTER COLUMN id SET DEFAULT nextval('public.study_fields_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: groups; Type: TABLE DATA; Schema: public; Owner: excellend
--

COPY public.groups (id, study_field, teacher, assistant_teacher, image, daysisjuft, "time", room, created_at, tg_groups) FROM stdin;
\.
COPY public.groups (id, study_field, teacher, assistant_teacher, image, daysisjuft, "time", room, created_at, tg_groups) FROM '$$PATH$$/2991.dat';

--
-- Data for Name: homework_answers; Type: TABLE DATA; Schema: public; Owner: excellend
--

COPY public.homework_answers (id, homeworks_id, students_id, github_link, note, ball, assistant_id, edited_at, created_at) FROM stdin;
\.
COPY public.homework_answers (id, homeworks_id, students_id, github_link, note, ball, assistant_id, edited_at, created_at) FROM '$$PATH$$/2993.dat';

--
-- Data for Name: homeworks; Type: TABLE DATA; Schema: public; Owner: excellend
--

COPY public.homeworks (id, group_id, title, description, created_at) FROM stdin;
\.
COPY public.homeworks (id, group_id, title, description, created_at) FROM '$$PATH$$/2995.dat';

--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: excellend
--

COPY public.students (id, firstname, lastname, age, phone, t_username, image, jinsi, tg_id, group_id) FROM stdin;
\.
COPY public.students (id, firstname, lastname, age, phone, t_username, image, jinsi, tg_id, group_id) FROM '$$PATH$$/2997.dat';

--
-- Data for Name: study_fields; Type: TABLE DATA; Schema: public; Owner: excellend
--

COPY public.study_fields (id, name, price, created_at) FROM stdin;
\.
COPY public.study_fields (id, name, price, created_at) FROM '$$PATH$$/2999.dat';

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: excellend
--

COPY public.users (id, firstname, lastname, age, phone, password, role, image, t_username, field_id, jinsi, created_at) FROM stdin;
\.
COPY public.users (id, firstname, lastname, age, phone, password, role, image, t_username, field_id, jinsi, created_at) FROM '$$PATH$$/3001.dat';

--
-- Name: groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: excellend
--

SELECT pg_catalog.setval('public.groups_id_seq', 16, true);


--
-- Name: homework_answers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: excellend
--

SELECT pg_catalog.setval('public.homework_answers_id_seq', 3, true);


--
-- Name: homeworks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: excellend
--

SELECT pg_catalog.setval('public.homeworks_id_seq', 10, true);


--
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: excellend
--

SELECT pg_catalog.setval('public.students_id_seq', 27, true);


--
-- Name: study_fields_id_seq; Type: SEQUENCE SET; Schema: public; Owner: excellend
--

SELECT pg_catalog.setval('public.study_fields_id_seq', 11, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: excellend
--

SELECT pg_catalog.setval('public.users_id_seq', 21, true);


--
-- Name: groups groups_pkey; Type: CONSTRAINT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_pkey PRIMARY KEY (id);


--
-- Name: homework_answers homework_answers_pkey; Type: CONSTRAINT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.homework_answers
    ADD CONSTRAINT homework_answers_pkey PRIMARY KEY (id);


--
-- Name: homeworks homeworks_pkey; Type: CONSTRAINT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.homeworks
    ADD CONSTRAINT homeworks_pkey PRIMARY KEY (id);


--
-- Name: students students_phone_key; Type: CONSTRAINT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_phone_key UNIQUE (phone);


--
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);


--
-- Name: study_fields study_fields_pkey; Type: CONSTRAINT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.study_fields
    ADD CONSTRAINT study_fields_pkey PRIMARY KEY (id);


--
-- Name: users users_phone_key; Type: CONSTRAINT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_phone_key UNIQUE (phone);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: groups group_assistant_teacher; Type: FK CONSTRAINT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.groups
    ADD CONSTRAINT group_assistant_teacher FOREIGN KEY (assistant_teacher) REFERENCES public.users(id) ON DELETE SET NULL NOT VALID;


--
-- Name: groups groups_study_field_fkey; Type: FK CONSTRAINT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_study_field_fkey FOREIGN KEY (study_field) REFERENCES public.study_fields(id);


--
-- Name: homework_answers homework_answers_homeworks_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.homework_answers
    ADD CONSTRAINT homework_answers_homeworks_id_fkey FOREIGN KEY (homeworks_id) REFERENCES public.homeworks(id);


--
-- Name: homework_answers homework_answers_students_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.homework_answers
    ADD CONSTRAINT homework_answers_students_id_fkey FOREIGN KEY (students_id) REFERENCES public.students(id);


--
-- Name: homeworks homeworks_group_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.homeworks
    ADD CONSTRAINT homeworks_group_id_fkey FOREIGN KEY (group_id) REFERENCES public.groups(id);


--
-- Name: students students_group_id_fkeys; Type: FK CONSTRAINT; Schema: public; Owner: excellend
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_group_id_fkeys FOREIGN KEY (group_id) REFERENCES public.groups(id) ON DELETE SET NULL NOT VALID;


--
-- Name: DATABASE crmsistema; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON DATABASE crmsistema TO crmsistema_grp;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO crmsistema_grp;


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      