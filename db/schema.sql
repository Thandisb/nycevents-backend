DROP DATABASE IF EXISTS nycevents_dev;

CREATE DATABASE nycevents_dev;

\c nycevents_dev;


CREATE TABLE events(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    time VARCHAR(50),
    location TEXT NOT NULL,
    type TEXT NOT NULL,
    is_free BOOLEAN, 
    photo TEXT,
    url TEXT
    );