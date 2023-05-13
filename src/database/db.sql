CREATE TABLE IF NOT EXISTS teachers (
    id serial primary key,
    username varchar(255) not null,
    name varchar(255) not null,
    email varchar(255) unique not null,
    age int check (age >= 18),
    birthdate date check(birthdate <= current_date),
    password varchar(100) not null check(length(password) >= 8),
    gelarTerakhir varchar(255) not null,
    jenjangDiajar integer,
    kelasDiajar int,
    created_at timestamp default current_timestamp
);
-- Dummy daya
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




create table students (
    id serial primary key,
    name varchar(50) not null,
    email varchar(100) unique not null,
    age int check (age >= 18),
    birthdate date check(birthdate <= current_date),
    password varchar(100) not null,
    jenjangPendidikan int(2),
    created_at timestamp default current_timestamp
);

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
