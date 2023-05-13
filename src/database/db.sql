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
    kelas_jenjang int(2),
);

-- Real data
INSERT INTO kelas (kelas_id, kelas_name, kelas_jenjang) VALUES 



drop table students;
CREATE TABLE IF NOT EXISTS students (
    username VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INT,
    birthdate DATE CHECK(birthdate <= CURRENT_DATE),
    password VARCHAR(100) NOT NULL,
    jenjangPendidikan INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- Dummy Data
INSERT INTO students (username, name, email, age, birthdate, password, jenjangPendidikan)
VALUES 
    ('john_doe', 'John Doe', 'john_doe@example.com', 25, '1998-05-01', 'password123', 3),
    ('jane_doe', 'Jane Doe', 'jane_doe@example.com', 28, '1993-03-12', 'password456', 4),
    ('bob_smith', 'Bob Smith', 'bob_smith@example.com', 30, '1991-11-23', 'password789', 2),
    ('alice_wong', 'Alice Wong', 'alice_wong@example.com', 22, '1999-08-07', 'passwordabc', 1);


-- CREATE TABLE data_siswa (
--    id SERIAL PRIMARY KEY,
--    nama_lengkap VARCHAR(255) NOT NULL,
--    tempat_lahir VARCHAR(255) NOT NULL,
--    tanggal_lahir DATE NOT NULL,
--    jenis_kelamin VARCHAR(10) NOT NULL,
--    alamat VARCHAR(255) NOT NULL,
--    nomor_telepon VARCHAR(20) NOT NULL,
--    email VARCHAR(255) NOT NULL,
--    riwayat_pendidikan TEXT,
--    riwayat_akademik TEXT,
--    data_keuangan TEXT,
--    data_kesehatan TEXT,
--    data_kepribadian TEXT,
--    kontak_darurat TEXT
-- );
