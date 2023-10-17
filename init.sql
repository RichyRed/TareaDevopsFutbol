USE formplayer;

CREATE TABLE IF NOT EXISTS contentplayer (
  id INT AUTO_INCREMENT PRIMARY KEY,
  names VARCHAR(255),
  nickname VARCHAR(255),
  age INT,
  team VARCHAR(255)
);
