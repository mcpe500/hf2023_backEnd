drop table teachers;
CREATE TABLE IF NOT EXISTS teachers (
    username varchar(255) not null primary key,
    name varchar(255) not null,
    email varchar(255) unique not null,
    age int check (age >= 18),
    birthdate date check(birthdate <= current_date),
    password varchar(100) not null check(length(password) >= 8),
    gelarTerakhir varchar(255) not null,
    jenjangDiajar integer,
    kelasDiajar int,
    tier int default 1 check(tier >= 1 and tier <= 3),
    created_at timestamp default current_timestamp
);

-- Dummy data
INSERT INTO teachers (username, name, email, age, birthdate, password, gelarTerakhir, jenjangDiajar, kelasDiajar)
VALUES 
    ('teacher1', 'John Smith', 'john.smith@example.com', 30, '1992-06-15', 'password123', 'S.Pd', 1, 7),
    ('teacher2', 'Jane Doe', 'jane.doe@example.com', 35, '1986-03-28', 'password456', 'S.Pd', 2, 8),
    ('teacher3', 'Bob Johnson', 'bob.johnson@example.com', 25, '1996-01-01', 'password789', 'S.Pd', 3, 9);


create table kelas (
    kelas_id int primary key,
    kelas_name varchar(50) not null,
    kelas_jenjang int
);

-- Real data
INSERT INTO kelas (kelas_id, kelas_name, kelas_jenjang) VALUES 
(1,"",""),
(2,"",""),
(3,"",""),
(4,"",""),
(5,"",""),
(6,"",""),
(7,"",""),
(8,"",""),
(9,"","");


drop table students;
CREATE TABLE IF NOT EXISTS students (
    students_id int primary key,
    username VARCHAR(100) unique NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INT,
    birthdate DATE CHECK(birthdate <= CURRENT_DATE),
    password VARCHAR(100) NOT NULL,
    jenjangPendidikan INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- Dummy Data
INSERT INTO students (students_id, username, name, email, age, birthdate, password, jenjangPendidikan) 
VALUES 
    (1, 'john_doe', 'John Doe', 'john.doe@example.com', 25, '1998-06-10', 'password123', 3),
    (2, 'jane_smith', 'Jane Smith', 'jane.smith@example.com', 21, '2000-02-15', '123456', 2),
    (3, 'jimmy_williams', 'Jimmy Williams', 'jimmy.williams@example.com', 19, '2002-12-05', 'pass123', 1),
    (4, 'sara_johnson', 'Sara Johnson', 'sara.johnson@example.com', 27, '1994-10-22', 'test123', 4),
    (5, 'adam_brown', 'Adam Brown', 'adam.brown@example.com', 22, '1999-08-17', '123test', 2);


create table history_prompt(
    id_prompt int primary key,
    prompt text not null,
    result text not null,
    students_id int,
    kelas_id int
);
