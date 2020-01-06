-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 06 Jan 2020 pada 03.35
-- Versi server: 10.4.8-MariaDB
-- Versi PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_hiring_app`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `company`
--

CREATE TABLE `company` (
  `id_company` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `logo` text NOT NULL,
  `location` varchar(100) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `company`
--

INSERT INTO `company` (`id_company`, `id_user`, `name`, `logo`, `location`, `description`) VALUES
(1, 3, 'PT Jaya Sentosa', 'Gambar  21', 'Surabaya', 'Perusahaan Air Minum'),
(2, 4, 'CV Hutang Abadi', 'Gambar  47', 'Jakarta', 'Koperasi Simpan Pinjam'),
(4, 6, 'PT Kamar Indah', 'Gambar  109', 'Magelang', 'Perabotan Kamar'),
(5, 13, 'PT Kencana Muda', 'Gambar  32', 'Jambi', 'Persuhaan Alat Olah Raga'),
(6, 14, 'PT Cahaya Perkasa', 'Gambar  32', 'Malang', 'Persahaan Telekomunikasi'),
(7, 16, 'PT Aryo Utomo ', 'Gambar  8978', 'Kepanjen', 'Persahaan Kelapa Sawit'),
(8, 20, 'Marlian Usaha', '', 'Bekais', 'Pabrik Tempe'),
(9, 17, 'Radio Mayangkara', 'Gambar URL', 'Maluku', 'Stasiun Radio');

-- --------------------------------------------------------

--
-- Struktur dari tabel `engineer`
--

CREATE TABLE `engineer` (
  `id_engineer` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `location` varchar(100) NOT NULL,
  `birth` date NOT NULL,
  `e_salary` int(11) NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `engineer`
--

INSERT INTO `engineer` (`id_engineer`, `id_user`, `name`, `description`, `location`, `birth`, `e_salary`, `date_created`, `date_updated`) VALUES
(1, 1, 'Ahmad Baequni', 'Software Developer', 'Bandung', '1985-08-11', 0, '2019-12-04 00:00:00', '2019-12-15 18:09:36'),
(2, 7, 'Adi Andi', 'Seorang Frontend', 'Malang', '2019-12-03', 0, '2019-12-02 00:00:00', '2019-12-01 00:00:00'),
(4, 2, 'Kiko', 'Backend Dev', 'Jepara', '1995-08-12', 0, '2019-12-15 17:52:36', '2019-12-15 17:52:36'),
(5, 8, 'Arka', 'Front-End Dev', 'Tulungagug', '1998-11-10', 0, '2019-12-16 10:31:52', '2019-12-16 10:31:52'),
(6, 0, 'Demy', 'Web Dev', 'Jambi', '2000-11-10', 0, '2019-12-16 17:54:42', '2019-12-16 17:54:42'),
(8, 0, 'Malika', 'Freelance Programmer', 'Jakarta', '1998-03-12', 0, '2019-12-16 18:05:32', '2019-12-16 18:05:32'),
(9, 0, 'Kimnbu', 'Freelance Programmer', 'Tasikmalaya', '1987-02-12', 0, '2019-12-16 18:06:05', '2019-12-16 18:06:05'),
(10, 15, 'Satrio Utomo', 'Freelance Programmer', 'Blitar', '2002-07-11', 0, '2019-12-21 10:02:24', '2019-12-21 10:02:24'),
(11, 12, 'Budi Hartanto', 'Pegawai Telkom', 'Bandung', '1991-10-11', 0, '2019-12-26 20:43:14', '2019-12-26 20:43:14'),
(12, 22, 'Nunu Sumarti', 'Data Analyst', 'Johor', '2019-12-13', 0, '2019-12-28 07:41:27', '2019-12-28 07:41:27');

-- --------------------------------------------------------

--
-- Struktur dari tabel `project`
--

CREATE TABLE `project` (
  `id_project` int(11) NOT NULL,
  `name_project` varchar(100) NOT NULL,
  `status` varchar(50) NOT NULL,
  `id_company` int(11) NOT NULL,
  `id_engineer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `project`
--

INSERT INTO `project` (`id_project`, `name_project`, `status`, `id_company`, `id_engineer`) VALUES
(1, 'Website Dagang', 'ongoing', 2, 4),
(2, 'SIM Organisasi', 'Complete', 4, 1),
(3, 'Sulfur App', 'Ongoing', 7, 1),
(4, 'Kasuari Air', 'Sent', 7, 2),
(5, 'Material Web', 'Complete', 8, 1),
(6, 'Web Dagang', 'ongoing', 8, 1),
(7, 'SI Provider Internet', 'Complete', 6, 1),
(8, 'SI-Hutang', 'Complete', 2, 1),
(9, 'Malabar Express', 'Engineer Needed', 0, 0),
(10, 'SI Kertaya', 'Engineer Needed', 0, 0),
(11, 'Project Kapal Pesiar', 'Sent', 7, 1),
(12, '', 'Sent', 0, 1),
(13, '', 'Sent', 0, 2),
(14, '', 'Sent', 0, 1),
(15, 'SI Titanic', 'Sent', 7, 4);

-- --------------------------------------------------------

--
-- Struktur dari tabel `showcase`
--

CREATE TABLE `showcase` (
  `id_showcase` int(11) NOT NULL,
  `showcase` varchar(255) NOT NULL,
  `id_engineer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `showcase`
--

INSERT INTO `showcase` (`id_showcase`, `showcase`, `id_engineer`) VALUES
(1, 'github.com/baequni', 1),
(2, 'github.com/lord', 4),
(3, 'linkedin.com/baequni', 1),
(4, 'drive.google.com/eh1o23ehonnde', 1),
(5, 'hackerrank.com/kikomanopo', 4),
(6, 'drive.google.com/dgwuqdh98wqu', 10);

-- --------------------------------------------------------

--
-- Struktur dari tabel `skill`
--

CREATE TABLE `skill` (
  `id_skill` int(11) NOT NULL,
  `skill_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `skill`
--

INSERT INTO `skill` (`id_skill`, `skill_name`) VALUES
(1, 'Python'),
(2, 'Java'),
(3, 'PHP'),
(4, 'Javascript'),
(6, 'C'),
(7, 'Ruby'),
(8, 'Delphi'),
(9, 'Qotlin'),
(10, 'Dart'),
(11, 'SQL');

-- --------------------------------------------------------

--
-- Struktur dari tabel `skills`
--

CREATE TABLE `skills` (
  `id_skills` int(11) NOT NULL,
  `id_engineer` int(11) NOT NULL,
  `id_skill` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `skills`
--

INSERT INTO `skills` (`id_skills`, `id_engineer`, `id_skill`) VALUES
(1, 1, 2),
(2, 1, 1),
(3, 1, 7),
(4, 2, 1),
(5, 2, 5),
(6, 5, 8),
(7, 8, 7),
(8, 8, 4),
(9, 8, 5),
(10, 10, 4);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id_user`, `email`, `password`, `role`) VALUES
(1, 'baequni@abc.com', '$2a$10$x4faTWkBBfFPoflmDz1LauJlsrmMse4u6rnhHw1/ReP12Q/bLBaS2', 2),
(2, 'kiko@abc.com', '$2a$10$Kpc.cpC/YOk4GO2B8AWTKehNDePnmi9IXo4Kv5B/Cjcoo81Jp3k2C', 2),
(3, 'hrd@jaya.com', '$2a$10$/KprQD5fqlt8MfD6P0m7ee6RJv7HKFooYUdC.bYoobCGcRXgXp1L6', 1),
(4, 'manto@abadi.com', '$2a$10$1/L.gZUcVXMyBpZnEOA8Y.d945k5Mg1E9.guF.bLMlffujGZPDigq', 1),
(6, 'hrd@indah.com', '$2a$10$rEKEQS5E9ucJwnsQJTPpquOyj9sZJ1lo/ZcGfkMu1wNNw83N.leKm', 1),
(7, 'adiandi@abc.ck', '$2a$10$xIRISpjMYcGd4vCDMSnlEu3sUTXuZGpO10J42C/6AczHcbwECNIDa', 2),
(8, 'arka@abc.ck', '$2a$10$Cian5WnBQpcIvyuvBVJEjuskzKAk20.GboauCil7RjbclkzHG9FIO', 2),
(9, 'demy@abc.ck', '$2a$10$7nsDvKJjqaMUhKtgB58htOxgHng7ugnc9VahOopwmfkiXIzekDQJS', 2),
(10, 'malika@abc.com', '$2a$10$hKUiR9tAbIIRHxcHWOg1Ye42XiXgAUkTxnH7O5p06e3u86WYDv2Sm', 2),
(11, 'jono@abc.com', '$2a$10$48KiyEc8lifx8NOGdhWffu8l1nBmZgAx8fvkN27TYS47/HfzMo9ky', 2),
(12, 'budi@abc.com', '$2a$10$6z.WLkpctJ0op1Pw6spMB.qHdrH3KRfGY6ApQWMq3Gh/klsdDd/PG', 2),
(13, 'hrd@kencana.com', '$2a$10$8njx3L4otbNRvm3PJFbdsu2ueZuctINehuGL8JA0vheouUNREhze2', 1),
(14, 'hrd@perkasa.com', '$2a$10$MI0Ddm52jfOPasbD/QXbAe9wAp/K8htJVKKgLx7iHSwbyIopoOYd2', 1),
(15, 'satrio@abc.com', '$2a$10$tA.J7LQC48TsuJ90rfT4MOG7s3pJ3RhlL.GnxmV5V/kCooSurnnOy', 2),
(16, 'hrd@utomo.com', '$2a$10$d.Ldz.x5FjXnI/zXrtwHBebwmxMMtVE.zk.yObysWbVuDTew4enqu', 1),
(17, 'hrd@mayangkara.com', '$2a$10$CYI9uarp3WCmSVoPF9qBcO54cOBxtHcZhbkbXd85cpuZK9hJ2IUDC', 1),
(18, 'burhan@abc.com', '$2a$10$ISb7B.eOLM2yj1FJsUcSH.iKINa7VcL0bMUl11YEwlqcx1htBpOOe', 1),
(19, 'ramlan@abc.com', '$2a$10$W8QXQhx8hhrseXeTW82.NuZ8Im5eII95dI0z34WM284mVNJ6dMVIe', 1),
(20, 'marlian@abc.com', '$2a$10$FwjhP0wOkbmp8WzTolX1tOU.br6oDqUqEeK2tfcIqxQBnJXwDW0bi', 1),
(21, 'naryo@abc.com', '$2a$10$higRdKwN3I4tayFXokNGG.VJB1IfHL2RISJ5FJadmguNr0L575rqm', 1),
(22, 'nuu@abc.com', '$2a$10$MjyMlKmr0yBHL73KTubLKec69BFf6W5jIERH7vy8XlH1A1IUdQpZa', 2),
(23, 'baguvix@abc.com', '$2a$10$7jeuopQ6kIHlHk78hBRjdekQV6KVw1lHzbX1Bh0GojZQg8UkPHLLS', 2),
(24, 'wagu@abc.com', '$2a$10$Yl2m8M1FLtD4ti8KRm0R5ehu4G0io9S34wQmOHbAshd3dQYndUZzG', 2),
(25, 'jokowi@abc.com', '$2a$10$53Di0POFPUnJnHOOjfsMC.0AarbcuatKgpx93xgfFE4asfvHBWS0i', 2),
(26, 'soulja@abc.com', '$2a$10$StrdcpGNQahB95NTCTCOg.2WWbXDA1eeItnaNDsHY9Q9xWpvJmKU6', 2);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id_company`);

--
-- Indeks untuk tabel `engineer`
--
ALTER TABLE `engineer`
  ADD PRIMARY KEY (`id_engineer`);

--
-- Indeks untuk tabel `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id_project`);

--
-- Indeks untuk tabel `showcase`
--
ALTER TABLE `showcase`
  ADD PRIMARY KEY (`id_showcase`);

--
-- Indeks untuk tabel `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`id_skill`);

--
-- Indeks untuk tabel `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id_skills`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `company`
--
ALTER TABLE `company`
  MODIFY `id_company` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `engineer`
--
ALTER TABLE `engineer`
  MODIFY `id_engineer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `project`
--
ALTER TABLE `project`
  MODIFY `id_project` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT untuk tabel `showcase`
--
ALTER TABLE `showcase`
  MODIFY `id_showcase` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `skill`
--
ALTER TABLE `skill`
  MODIFY `id_skill` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `skills`
--
ALTER TABLE `skills`
  MODIFY `id_skills` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
