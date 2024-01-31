-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 31, 2024 at 09:03 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_management_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `weather_data`
--

CREATE TABLE `weather_data` (
  `id` int(11) NOT NULL,
  `location` varchar(255) NOT NULL,
  `time` timestamp NULL DEFAULT current_timestamp(),
  `temp` varchar(300) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `description` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `weather_data`
--

INSERT INTO `weather_data` (`id`, `location`, `time`, `temp`, `icon`, `description`) VALUES
(151, 'Madrid', '2024-01-31 19:49:41', '7.04', '01n', 'clear sky'),
(152, 'Madrid', '2024-01-31 19:50:07', '7.04', '01n', 'clear sky'),
(153, 'Madrid', '2024-01-31 19:50:17', '7.04', '01n', 'clear sky'),
(154, 'Madrid', '2024-01-31 19:51:55', '7.04', '01n', 'clear sky'),
(155, 'Madrid', '2024-01-31 19:53:27', '7.04', '01n', 'clear sky'),
(156, 'Madrid', '2024-01-31 19:54:04', '7.04', '01n', 'clear sky'),
(157, 'London', '2024-01-31 19:54:38', '11.45', '04n', 'broken clouds'),
(158, 'London', '2024-01-31 19:55:04', '11.45', '04n', 'broken clouds'),
(159, 'London', '2024-01-31 19:55:13', '11.45', '04n', 'broken clouds'),
(160, 'Madrid', '2024-01-31 19:56:27', '7.04', '01n', 'clear sky'),
(161, 'Barcelona', '2024-01-31 19:56:33', '11.54', '01n', 'clear sky'),
(162, 'Glasgow', '2024-01-31 19:56:45', '5.09', '02n', 'few clouds'),
(163, 'Glasgow', '2024-01-31 19:59:00', '5.03', '02n', 'few clouds'),
(164, 'York', '2024-01-31 19:59:11', '4.84', '04d', 'overcast clouds'),
(165, 'Glasgow', '2024-01-31 19:59:32', '5.03', '02n', 'few clouds'),
(166, 'York', '2024-01-31 19:59:36', '4.84', '04d', 'overcast clouds'),
(167, 'Glasgow', '2024-01-31 20:00:50', '5.04', '02n', 'few clouds'),
(168, 'York', '2024-01-31 20:00:53', '4.84', '04d', 'overcast clouds'),
(169, 'Miami', '2024-01-31 20:01:00', '22.29', '01d', 'clear sky');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `weather_data`
--
ALTER TABLE `weather_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `weather_data`
--
ALTER TABLE `weather_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=170;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
