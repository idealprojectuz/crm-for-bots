CREATE TABLE users (
  id serial PRIMARY KEY,
  firstname varchar(50) NOT NULL,
  lastname varchar(50) NOT NULL,
  age integer,
  phone varchar(12) UNIQUE NOT NULL,
  password text NOT NULL,
  role varchar(50) NOT NULL,
  image text,
  t_username varchar(255),
  field_id integer,
  jinsi integer,
  created_at timestamp DEFAULT (now())
);

CREATE TABLE Groups (
  id serial PRIMARY KEY,
  study_field integer NOT NULL,
  teacher varchar(50) NOT NULL,
  assistant_teacher integer NOT NULL,
  image text DEFAULT null,
  daysisjuft boolean,
  time time,
  room varchar,
  created_at timestamp DEFAULT (now())
);

CREATE TABLE students (
  id serial PRIMARY KEY,
  firstname varchar(50) NOT NULL,
  lastname varchar(50) NOT NULL,
  age integer,
  phone varchar(12) UNIQUE NOT NULL,
  t_username varchar(255),
  image text DEFAULT null,
  jinsi integer,
  tg_id integer DEFAULT null,
  group_id integer DEFAULT null
);

CREATE TABLE study_fields (
  id serial PRIMARY KEY,
  name varchar(255),
  price integer,
  created_at timestamp DEFAULT (now())
);

CREATE TABLE homeworks (
  id serial PRIMARY KEY,
  group_id integer,
  title text NOT NULL,
  description text DEFAULT null,
  created_at timestamp DEFAULT (now())
);

CREATE TABLE homework_answers (
  id serial PRIMARY KEY,
  homeworks_id integer,
  students_id integer,
  github_link text DEFAULT null,
  note text DEFAULT null,
  ball varchar DEFAULT null,
  assistant_id integer DEFAULT null,
  edited_at timestamp DEFAULT (now()),
  created_at timestamp DEFAULT (now())
);
