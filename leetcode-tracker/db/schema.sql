
CREATE TABLE problems (
  id serial PRIMARY KEY,
  name VARCHAR(150) UNIQUE,
  category VARCHAR(50),
  level VARCHAR(10),
  target_duration INT,
  last_duration INT DEFAULT 0,
  link TEXT UNIQUE,
  familiarity VARCHAR(20)
);

COPY problems(name, category, level, target_duration, last_duration, link, familiarity) FROM '/Users/boyiqu/Desktop/Immersive/MVP/Blind75-2.csv' DELIMITER ',' CSV HEADER;
