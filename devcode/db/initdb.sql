-- CREATE USER 'root'@'%' IDENTIFIED BY 'password'; GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;

CREATE TABLE IF NOT EXISTS `activites` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `activites` (`id`, `email`, `title`, `created_at`, `updated_at`, `deleted_at`) VALUES 
(1, 'test@gmail.com', 'TEST', NULL, NULL, NULL);


CREATE TABLE IF NOT EXISTS `todo` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `activity_group_id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `is_active` varchar(255) DEFAULT NULL,
  `priority` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;

INSERT INTO `todo` (`id`, `activity_group_id`, `title`, `is_active`, `priority`, `created_at`, `updated_at`, `deleted_at`) VALUES 
(1, '1', 'TEST', 'true', 'very-high', NULL, NULL, NULL);

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'secret'; 
flush privileges;