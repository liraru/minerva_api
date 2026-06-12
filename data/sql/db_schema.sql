-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: minerva
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `author_books`
--

DROP TABLE IF EXISTS `author_books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author_books` (
  `authorId` varchar(36) NOT NULL,
  `bookId` varchar(36) NOT NULL,
  PRIMARY KEY (`authorId`,`bookId`),
  KEY `IDX_43d2c30a3b587ac731a91bef06` (`authorId`),
  KEY `IDX_2c8b381c6ecaa4aa10d6830899` (`bookId`),
  CONSTRAINT `FK_2c8b381c6ecaa4aa10d6830899a` FOREIGN KEY (`bookId`) REFERENCES `authors` (`id`),
  CONSTRAINT `FK_43d2c30a3b587ac731a91bef06f` FOREIGN KEY (`authorId`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `author_manga`
--

DROP TABLE IF EXISTS `author_manga`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author_manga` (
  `authorId` varchar(36) NOT NULL,
  `mangaId` varchar(36) NOT NULL,
  PRIMARY KEY (`authorId`,`mangaId`),
  KEY `IDX_d495be0b02c85e4a5bb0dfacd9` (`authorId`),
  KEY `IDX_53561ef59d3c25188ba14a8e36` (`mangaId`),
  CONSTRAINT `FK_53561ef59d3c25188ba14a8e36b` FOREIGN KEY (`mangaId`) REFERENCES `authors` (`id`),
  CONSTRAINT `FK_d495be0b02c85e4a5bb0dfacd94` FOREIGN KEY (`authorId`) REFERENCES `mangas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `author_series`
--

DROP TABLE IF EXISTS `author_series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author_series` (
  `authorId` varchar(36) NOT NULL,
  `serieId` varchar(36) NOT NULL,
  PRIMARY KEY (`authorId`,`serieId`),
  KEY `IDX_475ff3643bc2dfaf79dd6f1a4a` (`authorId`),
  KEY `IDX_caed9f24b578df637164c9754a` (`serieId`),
  CONSTRAINT `FK_475ff3643bc2dfaf79dd6f1a4a8` FOREIGN KEY (`authorId`) REFERENCES `series` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_caed9f24b578df637164c9754a4` FOREIGN KEY (`serieId`) REFERENCES `authors` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `id` varchar(36) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `biography` varchar(255) DEFAULT NULL,
  `birthdate` varchar(10) DEFAULT NULL,
  `deceasedDate` varchar(10) DEFAULT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  `countryId` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` varchar(36) NOT NULL,
  `title` varchar(150) NOT NULL,
  `isbn` varchar(13) DEFAULT NULL,
  `isDigital` tinyint NOT NULL DEFAULT '0',
  `format` varchar(50) NOT NULL,
  `language` varchar(3) NOT NULL,
  `originalLanguage` varchar(3) NOT NULL,
  `publicationDate` varchar(10) NOT NULL,
  `edition` int DEFAULT NULL,
  `downloadLink` varchar(150) DEFAULT NULL,
  `cover` varchar(150) DEFAULT NULL,
  `buyDate` varchar(10) DEFAULT NULL,
  `ownerId` varchar(50) NOT NULL,
  `borrowed` varchar(50) DEFAULT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  `notes` varchar(255) DEFAULT NULL,
  `locationId` varchar(36) DEFAULT NULL,
  `genreId` varchar(36) DEFAULT NULL,
  `serieId` varchar(36) DEFAULT NULL,
  `editorialId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_c8f30cf56cbaec50fb4c19711b7` (`locationId`),
  KEY `FK_331478ffd59f87a68b1255b2b6a` (`genreId`),
  KEY `FK_09a62e92aafd130db79f578b981` (`serieId`),
  KEY `FK_43544134dc729a520094737d137` (`editorialId`),
  CONSTRAINT `FK_09a62e92aafd130db79f578b981` FOREIGN KEY (`serieId`) REFERENCES `series` (`id`),
  CONSTRAINT `FK_331478ffd59f87a68b1255b2b6a` FOREIGN KEY (`genreId`) REFERENCES `genres` (`id`),
  CONSTRAINT `FK_43544134dc729a520094737d137` FOREIGN KEY (`editorialId`) REFERENCES `editorials` (`id`),
  CONSTRAINT `FK_c8f30cf56cbaec50fb4c19711b7` FOREIGN KEY (`locationId`) REFERENCES `locations` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `editorials`
--

DROP TABLE IF EXISTS `editorials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `editorials` (
  `id` varchar(36) NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `id` varchar(36) NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations` (
  `id` varchar(36) NOT NULL,
  `address` varchar(50) NOT NULL,
  `room` varchar(50) NOT NULL,
  `shelf` varchar(50) NOT NULL,
  `observations` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `manga_chapters`
--

DROP TABLE IF EXISTS `manga_chapters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manga_chapters` (
  `id` varchar(36) NOT NULL,
  `pages` int NOT NULL,
  `folder` varchar(50) NOT NULL,
  `publicationDate` varchar(50) DEFAULT NULL,
  `mangaId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_18f6909ae9e0e6cf204c10cee25` (`mangaId`),
  CONSTRAINT `FK_18f6909ae9e0e6cf204c10cee25` FOREIGN KEY (`mangaId`) REFERENCES `mangas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mangas`
--

DROP TABLE IF EXISTS `mangas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mangas` (
  `id` varchar(36) NOT NULL,
  `title` varchar(150) NOT NULL,
  `synopsis` varchar(255) DEFAULT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'ongoing',
  `isDigital` tinyint NOT NULL,
  `cover` varchar(150) DEFAULT NULL,
  `volumes` int NOT NULL,
  `firstVolumeDate` varchar(10) NOT NULL,
  `lastVolumeDate` varchar(10) DEFAULT NULL,
  `originalLanguage` varchar(3) NOT NULL,
  `language` varchar(3) NOT NULL,
  `editorialId` varchar(36) DEFAULT NULL,
  `genreId` varchar(36) DEFAULT NULL,
  `locationId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_33c919121aeca8c3d722ce0e4ac` (`editorialId`),
  KEY `FK_21dd0f0a19acfce2e3f6be58472` (`genreId`),
  KEY `FK_209778d42293291d1b7b107c411` (`locationId`),
  CONSTRAINT `FK_209778d42293291d1b7b107c411` FOREIGN KEY (`locationId`) REFERENCES `locations` (`id`),
  CONSTRAINT `FK_21dd0f0a19acfce2e3f6be58472` FOREIGN KEY (`genreId`) REFERENCES `genres` (`id`),
  CONSTRAINT `FK_33c919121aeca8c3d722ce0e4ac` FOREIGN KEY (`editorialId`) REFERENCES `editorials` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `series`
--

DROP TABLE IF EXISTS `series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `series` (
  `id` varchar(36) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `volumes` int NOT NULL,
  `releaseDate` varchar(10) DEFAULT NULL,
  `finishDate` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-12 11:39:17
