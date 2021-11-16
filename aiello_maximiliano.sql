-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-11-2021 a las 01:43:44
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `aiello_maximiliano`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aimproductos`
--

CREATE TABLE `aimproductos` (
  `id_producto` int(3) NOT NULL,
  `nombre_producto` varchar(25) NOT NULL,
  `precio_producto` int(7) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `precio_calibracion` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `aimproductos`
--

INSERT INTO `aimproductos` (`id_producto`, `nombre_producto`, `precio_producto`, `descripcion`, `precio_calibracion`) VALUES
(1, 'Sound Examiner 400', 15000, 'El Sound Examiner está diseñado para medir con precisión los niveles de ruido en entornos muy variables, incluidos aquellos que requieren seguridad intrínseca.', 3000),
(2, 'Questemp', 30000, 'Los monitores de estrés térmico QUESTemp están diseñados para evaluar de forma rápida y precisa los posibles entornos de estrés por calor. Estos instrumentos brindan monitoreo de alto rendimiento util', 2400),
(4, ' Luxómetro SPER 840020', 14000, 'Controle los niveles de luz visible en cualquier lugar con una respuesta rápida, estable y precisa. Los resultados se leen fácilmente en la pantalla LCD extra grande (38.1 mm de alto) con gráficos de ', 1500);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aimproductos`
--
ALTER TABLE `aimproductos`
  ADD PRIMARY KEY (`id_producto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aimproductos`
--
ALTER TABLE `aimproductos`
  MODIFY `id_producto` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
