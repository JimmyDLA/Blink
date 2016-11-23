CREATE DATABASE blinkdb;
DROP DATABASE IF blinkdb EXISTS;

DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS userEventRefrence CASCADE;

CREATE TABLE events (
  id VARCHAR PRIMARY KEY,
  name VARCHAR NOT NULL,
  formatted_address VARCHAR NOT NULL,
  icon VARCHAR NOT NULL,
  rating DECIMAL NOT NULL
);

CREATE TABLE users (
  email_id VARCHAR(50) SERIAL PRIMARY KEY,
  token_id TEXT NOT NULL,
  name VARCHAR NOT NULL,
-- date of birth in format dd-month-yyyy
  bday INT(2) NOT NULL,
  bmonth VARCHAR NOT NULL CHECK (bmonth IN ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')),
  byear INT(4) NOT NULL,
  gender VARCHAR(6) NOT NULL CHECK (gender IN ('Male', 'Female')),
  country VARCHAR NOT NULL,
);

CREATE TABLE userEventRefrence(
  user_id REFERENCES users(email_id,
  event_id REFERENCES events(id)
);
