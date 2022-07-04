-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Jul 04, 2022 at 12:38 PM
-- Server version: 5.7.37
-- PHP Version: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fnstyle`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `address_line1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_line2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zip_code` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(48) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `address_line1`, `address_line2`, `zip_code`, `city_name`, `phone_number`) VALUES
(1, 'no address', 'no address', 'no zip', 'no city', '0000'),
(2, 'Sun view', '', 'T23X400', 'Ballincollig', '514 432123'),
(3, '', NULL, '', '', NULL),
(4, '', NULL, '', '', NULL),
(5, '', NULL, '', '', NULL),
(6, '', NULL, '', '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `name` varchar(48) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`id`, `name`) VALUES
(1, 'iEiffel'),
(2, 'Jack Ritton'),
(3, 'Browon'),
(4, 'Simwood'),
(5, 'LangBeaar'),
(6, 'Milan'),
(7, 'Karram'),
(8, 'Madextreme'),
(9, 'Paws'),
(10, 'Cheeheart');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `lft` int(11) NOT NULL,
  `rgt` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `removable` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `lft`, `rgt`, `name`, `removable`) VALUES
(1, 2, 46, 'Clothes', 0),
(2, 3, 16, 'Womens', 0),
(3, 4, 5, 'Dresses', 1),
(4, 6, 7, 'Blouses', 1),
(5, 8, 9, 'T-shirts', 1),
(6, 18, 19, 'Tops', 1),
(7, 25, 26, 'Pants', 1),
(8, 14, 15, 'Skirts', 1),
(9, 17, 38, 'Men', 0),
(10, 20, 29, 'Outerwear', 0),
(11, 21, 22, 'Jackets', 1),
(12, 23, 24, 'Winter coats', 1),
(13, 27, 28, 'Shorts', 1),
(14, 30, 31, 'Knitwear', 1),
(15, 32, 37, 'Underwear', 0),
(16, 33, 34, 'Underpants', 1),
(17, 35, 36, 'Socks', 1),
(18, 39, 46, 'Shoes', 0),
(19, 40, 41, 'Boots', 1),
(20, 42, 43, 'Sandals', 1),
(21, 44, 45, 'Flats', 1),
(22, 47, 62, 'Beauty', 0),
(23, 48, 49, 'Tools', 1),
(24, 50, 51, 'Make up', 1),
(25, 52, 61, 'Personal Care', 0),
(26, 55, 56, 'Skin care', 1),
(27, 57, 58, 'Hair care', 1),
(28, 59, 60, 'Body care', 1),
(29, 53, 54, 'Accessories', 1),
(30, 62, 67, 'Kids', 0),
(31, 63, 64, 'Shirts', 1),
(32, 65, 66, 'Kids pants', 0);

-- --------------------------------------------------------

--
-- Table structure for table `color`
--

CREATE TABLE `color` (
  `id` int(11) NOT NULL,
  `name` varchar(48) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `color`
--

INSERT INTO `color` (`id`, `name`) VALUES
(1, 'Blue'),
(2, 'Green'),
(3, 'Red'),
(4, 'Orange'),
(5, 'Violet'),
(6, 'Indigo'),
(7, 'Yellow'),
(8, 'Black');

-- --------------------------------------------------------

--
-- Table structure for table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20220524163906', '2022-05-24 16:39:22', 264),
('DoctrineMigrations\\Version20220605083111', '2022-06-05 08:31:26', 137);

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_item`
--

CREATE TABLE `order_item` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_ref_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `brand_id` int(11) NOT NULL,
  `price` double NOT NULL,
  `model` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` json DEFAULT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `category_id`, `brand_id`, `price`, `model`, `images`, `date`) VALUES
(3, 12, 10, 199, 'Funnel Hybrid', '[\"m5020436266721-blue-xl-628e7d4a961d0.webp\"]', '2022-05-25 19:02:34'),
(4, 12, 10, 94.99, 'Quilt Jacket', '[\"abb11325-camel-xl-628e7d9128b94.webp\"]', '2022-05-25 19:03:45'),
(5, 10, 1, 299.99, 'Camel Jacket', '[\"abb11325-camel-xl-628e7dbc7337f.webp\"]', '2022-05-25 19:04:28'),
(6, 10, 2, 49.99, 'Hoddie', '[\"m5059404181223-mid-grey-xl-628e7df2acb3a.webp\"]', '2022-05-25 19:05:22'),
(7, 12, 9, 299.99, 'Quilt Gilet', '[\"m5059404261642-navy-xl-628e7e1e235de.webp\"]', '2022-05-25 19:06:06'),
(8, 12, 4, 199.49, 'Leather Jacket', '[\"m5059404302949-beige-xl-6297ae587160f.webp\", \"m5059404302949-beige-xl-628e7e3d802ea.webp\"]', '2022-05-25 19:06:37'),
(9, 14, 6, 49.99, 'Christmas jumper', '[\"1631931077ea5760037a484f7f11ec3c4e0d55b8b2-thumbnail-900x-628e7f43abb5e.jpg\"]', '2022-05-25 19:10:59'),
(10, 14, 8, 29.99, 'Christmas jumper', '[\"abb10047-cream-xl-628e7f6e1380f.webp\"]', '2022-05-25 19:11:42'),
(11, 10, 7, 19.99, 'Hoddie jumper', '[\"bbb00474-grey-xl-628e7f872d311.webp\"]', '2022-05-25 19:12:07'),
(12, 10, 3, 34.99, 'Beiger', '[\"bbb00535-beige-xl-628e7fa61c1bd.webp\"]', '2022-05-25 19:12:38'),
(13, 4, 3, 79.99, 'Classic slim', '[\"pdd06250-black-xl-62b4c1fd985cf.webp\", \"bbb00536-khaki-xl-628e7fbef221d.webp\"]', '2022-05-25 19:13:03'),
(14, 10, 5, 14.99, 'Modern sweatshirt', '[\"edd00762-pale-blue-xl-628e7ff546a80.webp\"]', '2022-05-25 19:13:57'),
(15, 10, 2, 9.99, 'Stripper', '[\"m7625914006479-burgundy-xl-628e80d7ed00d.webp\"]', '2022-05-25 19:17:43'),
(16, 10, 2, 9.99, 'Abbey shirt', '[\"abb09153-navy-xl-628e810ab4f0d.webp\"]', '2022-05-25 19:18:34'),
(17, 17, 2, 1.99, 'Classic socks', '[\"ddd00399-white-xl-628e8133c17bd.webp\"]', '2022-05-25 19:19:15'),
(18, 10, 8, 9.99, 'Classic top', '[\"rdd00014-tan-xl-628e8153b3a43.webp\"]', '2022-05-25 19:19:47'),
(19, 23, 4, 4.99, 'Brush set', '[\"ydd00665-black-xl-628e850a3bc6b.webp\"]', '2022-05-25 19:35:38'),
(20, 23, 3, 14.99, 'XL Brush set', '[\"ydd00698-black-xl-628e852560afb.webp\"]', '2022-05-25 19:36:05'),
(21, 23, 7, 19.99, 'Golden brush set', '[\"ydd00827-multi-xl-628e853e8240d.webp\"]', '2022-05-25 19:36:30'),
(22, 23, 3, 49.99, 'Braun remover', '[\"ydd01682-white-xl-628e856072081.webp\"]', '2022-05-25 19:37:04'),
(23, 22, 4, 19.99, 'Multi tool set', '[\"ydd03425-multi-xl-628e8577c4783.webp\"]', '2022-05-25 19:37:27'),
(24, 3, 8, 39.99, 'Gardens dress', '[\"mdd06477-navy-xl-6292846da15fd.webp\"]', '2022-05-25 19:38:46'),
(25, 3, 6, 39.99, 'Textured black', '[\"pdd06717-black-xl-628e85eedcf9a.webp\"]', '2022-05-25 19:39:26'),
(26, 3, 1, 19.99, 'Cherry Berry', '[\"pdd02128-berry-xl-628e862aca648.webp\"]', '2022-05-25 19:40:26'),
(27, 3, 10, 199.99, 'Abstract dress', '[\"pdd07176-brown-xl-628e86652862a.webp\"]', '2022-05-25 19:41:25'),
(28, 6, 5, 14.99, 'Easy top', '[\"mdd06293-light-blue-xl-628e86a33a954.webp\"]', '2022-05-25 19:42:08'),
(29, 6, 3, 39.99, 'Broderie top', '[\"pdd06251-apricot-xl-628e86c7b75ef.webp\"]', '2022-05-25 19:43:03'),
(30, 6, 7, 29.99, 'Pocket V Neck', '[\"mdd06193-royal-xl-628e86e8f3be0.webp\"]', '2022-05-25 19:43:37'),
(31, 7, 2, 29.99, 'Loose pants', '[\"pdd06826-black-xl-628e873a1130b.webp\"]', '2022-05-25 19:44:58'),
(32, 7, 6, 49.99, 'Floral pants', '[\"mdd06796-off-white-xl-628e880f1463f.webp\"]', '2022-05-25 19:48:31'),
(33, 18, 8, 99.99, 'Brown sandal', '[\"mdd00658-tan-xl-628e888b540e6.webp\"]', '2022-05-25 19:50:35'),
(34, 20, 7, 19.99, 'Artcic sea', '[\"xdd06391-white-xl-628e88a20a5e7.webp\"]', '2022-05-25 19:50:58'),
(35, 18, 1, 199.99, 'Heritage brown', '[\"mdd01303-brown-xl-628e88c9e045a.webp\"]', '2022-05-25 19:51:37'),
(36, 18, 3, 39.99, 'Barnes suede', '[\"edd06200-brown-xl-628e88eb6850a.webp\"]', '2022-05-25 19:52:11'),
(37, 29, 8, 29.99, 'Lily stitch bag', '[\"mdd06108-natural-xl-62931375b36e0.webp\"]', '2022-05-29 06:32:21'),
(38, 29, 6, 99.99, 'Scoop Zip Hobo', '[\"mdd06045-navy-xl-6293139f8a8c6.webp\"]', '2022-05-29 06:33:03'),
(39, 29, 3, 49.99, 'Steph leader', '[\"pdd06236-black-xl-629313e20509b.webp\"]', '2022-05-29 06:34:10'),
(40, 29, 3, 34.99, 'Lakeland bag', '[\"m5055873550331-brown-xl-629316f7deb49.webp\"]', '2022-05-29 06:47:19'),
(41, 29, 3, 23.75, 'Keswick bag', '[\"m5055873550348-brown-xl-6293171f85a54.webp\"]', '2022-05-29 06:47:59'),
(42, 32, 4, 9.99, 'Kiwi', '[\"m5057538083918-dark-blue-xl-62b54290874bc.webp\"]', '2022-06-24 04:49:59'),
(43, 32, 3, 39.99, 'Reprise II', '[\"m5059404397136-dark-grey-xl-62b543887319f.webp\"]', '2022-06-24 04:54:32'),
(44, 32, 5, 23.44, 'Qikpack Bench', '[\"m5059556202067-grey-xl-62b543af19498.webp\"]', '2022-06-24 04:55:11'),
(45, 32, 7, 19.99, 'Hikiing', '[\"m5059699417762-dark-grey-xl-62b543c8bf7bf.webp\"]', '2022-06-24 04:55:36'),
(46, 22, 6, 23.44, 'Fire', '[\"ydd06233-005-beige-ivoire-xl-62c2d985d6071.webp\"]', '2022-07-04 12:13:22'),
(47, 22, 4, 9.99, 'Beyond lash', '[\"ydd03439-jet-black-xl-62c2d9b661547.webp\"]', '2022-07-04 12:14:46'),
(48, 22, 1, 13.99, 'Stila', '[\"ydd06916-multi-xl-62c2d9caddd07.webp\"]', '2022-07-04 12:15:06'),
(49, 22, 2, 12.99, 'Magnet', '[\"ydd03437-black-xl-62c2d9e18b1b5.webp\"]', '2022-07-04 12:15:29'),
(50, 22, 10, 4.99, 'Naked', '[\"ydd01747-multi-xl-62c2d9f420d9d.webp\"]', '2022-07-04 12:15:48');

-- --------------------------------------------------------

--
-- Table structure for table `size`
--

CREATE TABLE `size` (
  `id` int(11) NOT NULL,
  `size` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `size`
--

INSERT INTO `size` (`id`, `size`) VALUES
(1, '32'),
(2, '34'),
(3, '36'),
(4, '38'),
(5, '40'),
(6, '42'),
(7, '44'),
(8, '46'),
(9, '48'),
(10, '50'),
(11, 'XS'),
(12, 'S'),
(13, 'M'),
(14, 'ML'),
(15, 'L'),
(16, 'XL'),
(17, 'XXL'),
(18, 'Default');

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `color_id` int(11) DEFAULT NULL,
  `size_id` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stock`
--

INSERT INTO `stock` (`id`, `product_id`, `color_id`, `size_id`, `qty`) VALUES
(1, NULL, NULL, NULL, 4),
(3, 3, 1, 2, 77),
(4, 3, 4, 2, 89),
(6, 3, 5, 9, 9),
(7, 4, 1, 1, 11),
(8, 37, 2, 1, 10),
(9, 37, 5, 1, 5),
(25, 25, 1, 1, 22),
(26, 5, 2, 15, 12),
(27, 6, 4, 5, 2),
(28, 5, 4, 16, 8),
(29, 7, 1, 15, 22),
(30, 8, 5, 13, 4),
(31, 8, 6, 15, 8),
(32, 8, 1, 16, 2),
(33, 9, 4, 15, 8),
(34, 9, 4, 16, 7),
(35, 10, 7, 12, 2),
(36, 10, 7, 13, 8),
(37, 11, 5, 14, 2),
(38, 11, 2, 15, 3),
(39, 12, 1, 14, 7),
(40, 12, 4, 15, 8),
(41, 12, 1, 17, 1),
(42, 13, 1, 5, 10),
(43, 17, 1, 13, 12),
(44, 17, 1, 14, 4),
(45, 24, 5, 15, 8),
(46, 41, 2, 18, 5),
(47, 40, 1, 18, 8),
(48, 23, 7, 18, 10),
(49, 26, 7, 15, 4),
(50, 26, 5, 17, 8),
(51, 42, 1, 11, 5),
(52, 42, 4, 12, 7),
(53, 43, 1, 12, 6),
(54, 43, 2, 13, 4),
(55, 44, 1, 12, 7),
(56, 44, 7, 11, 3),
(57, 45, 5, 13, 3),
(58, 34, 1, 18, 4),
(59, 46, 8, 18, 3),
(60, 47, 8, 18, 66),
(61, 48, 1, 18, 87),
(62, 49, 1, 18, 45),
(63, 50, 1, 18, 22);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `address_id` int(11) DEFAULT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `address_id`, `email`, `roles`, `password`, `first_name`, `last_name`) VALUES
(1, 1, 'admin@admin.com', '[\"ROLE_ADMIN\"]', '$2y$13$6d9qh.sh/ZJDeAlfVTPLyuNZZPKPkSUINKv0B9S7kWMxtvWaceKQS', 'Admin', 'Admin'),
(2, 2, 'user@user.com', '[\"ROLE_USER\"]', '$2y$13$IhrcIEAkMk9N2dbH9E8X8eTOw.Nq.R7bhxueLBCYDPTX6wZBGblEC', 'John', 'Rock'),
(3, 3, 'user2@user2.com', '[\"ROLE_CUSTOMER\"]', '$2y$13$vqR0JdghW.4woZ1z0K8OUeas9Y0tkFXA0TxlJWdey51ludyO5NnOy', NULL, NULL),
(4, 4, 'user2@user.com', '[\"ROLE_CUSTOMER\"]', '$2y$13$7q0zElp7O9L7yBIorD6SUek4k2PooL7DP0Pybk7FlqvtTUcUpzh5G', NULL, NULL),
(5, 5, 'user3@user.com', '[\"ROLE_CUSTOMER\"]', '$2y$13$giF..nG8sN4w4jlwnAGwSuhDhU.EG3yzY/fYfAXgcu6qXgVYrwGOW', NULL, NULL),
(6, 6, 'user4@user.com', '[\"ROLE_CUSTOMER\"]', '$2y$13$k.EayijVuFudR6Y9xVfy4e2FPjkV03uDftEfC5Y88ywv80wzWBJ92', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_item`
--
ALTER TABLE `order_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_52EA1F094584665A` (`product_id`),
  ADD KEY `IDX_52EA1F09E238517C` (`order_ref_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_D34A04AD12469DE2` (`category_id`),
  ADD KEY `IDX_D34A04AD44F5D008` (`brand_id`);

--
-- Indexes for table `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_4B3656604584665A` (`product_id`),
  ADD KEY `IDX_4B3656607ADA1FB5` (`color_id`),
  ADD KEY `IDX_4B365660498DA827` (`size_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`),
  ADD KEY `IDX_8D93D649F5B7AF75` (`address_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `color`
--
ALTER TABLE `color`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_item`
--
ALTER TABLE `order_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `size`
--
ALTER TABLE `size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order_item`
--
ALTER TABLE `order_item`
  ADD CONSTRAINT `FK_52EA1F094584665A` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `FK_52EA1F09E238517C` FOREIGN KEY (`order_ref_id`) REFERENCES `order` (`id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK_D34A04AD12469DE2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `FK_D34A04AD44F5D008` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`);

--
-- Constraints for table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `FK_4B3656604584665A` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `FK_4B365660498DA827` FOREIGN KEY (`size_id`) REFERENCES `size` (`id`),
  ADD CONSTRAINT `FK_4B3656607ADA1FB5` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_8D93D649F5B7AF75` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
