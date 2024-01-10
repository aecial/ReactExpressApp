-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 10, 2024 at 02:49 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `simplecom`
--

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `image` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `type` enum('ITIK','PORK','BEEF','CHICKEN','SEAFOODS','VEGETABLES','DRINK','OTHERS') NOT NULL,
  `class` enum('FOOD','DRINK','OTHERS') NOT NULL DEFAULT 'FOOD',
  `price` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `image`, `name`, `type`, `class`, `price`) VALUES
(1, 'https://ispweb.pcaarrd.dost.gov.ph/wp-content/uploads/2022/04/itik4life-2-1024x680.png', 'Fried Itik', 'ITIK', 'FOOD', 285),
(2, 'https://joysputocake.com/cdn/shop/products/Coke.jpg?v=1617678361', 'Coke(1.5)', 'DRINK', 'DRINK', 100),
(3, 'https://static01.nyt.com/images/2018/02/21/dining/00RICEGUIDE8/00RICEGUIDE8-superJumbo.jpg', 'Rice', 'OTHERS', 'OTHERS', 15),
(4, 'https://cookandsavor.com/wp-content/uploads/AirFryerLechonKawali-scaled.jpg', 'Lechon Kawali', 'PORK', 'FOOD', 190),
(5, 'https://theskinnypot.com/wp-content/uploads/2023/06/Sinigang-na-Salmon-Belly.jpg', 'Salmon Sinigang', 'SEAFOODS', 'FOOD', 180),
(6, '/images/dinakdakan.jpg', 'Dinakdakan', 'PORK', 'FOOD', 180),
(7, '/images/sisig.jpg', 'Sisig', 'PORK', 'FOOD', 180),
(8, '/images/kasalo.png', 'Coke(Kasalo)', 'DRINK', 'FOOD', 50),
(13, '/images/HiponSinigang.jpg', 'Shrimp Sinigang', 'SEAFOODS', 'FOOD', 180),
(14, '/images/BuffaloWings.jpg', 'Buffalo Wings', 'CHICKEN', 'FOOD', 180);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Menu_image_key` (`image`),
  ADD UNIQUE KEY `Menu_name_key` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
