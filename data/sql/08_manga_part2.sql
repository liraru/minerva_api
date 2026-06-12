-- ============================================================
-- MINERVA - INSERCIÓN DE MANGA (Parte 2 de 2)
-- Fichero: 08_manga_part2.sql
-- Descripción: Resto de series manga + artbooks de videojuego
-- ============================================================

SET NAMES utf8mb4;

INSERT INTO `mangas`
  (`id`, `title`, `isDigital`, `cover`, `volumes`, `firstVolumeDate`,
   `lastVolumeDate`, `originalLanguage`, `language`, `editorialId`,
   `genreId`, `locationId`, `synopsis`, `status`)
VALUES

-- ============================================================
-- BUEN AUGURIO (Inio Asano)
-- ============================================================
('m0000001-0000-0000-0000-000000000038',
 'Buen Augurio', 0, NULL,
 2, '2018-01-01', '2019-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000112',
 NULL,
 'Manga de Inio Asano. Una joven actriz en decadencia y su vecino comparten un edificio lleno de vidas entrelazadas. Con la maestría habitual de Asano, retrata el vacío existencial y los pequeños momentos de conexión humana en el Tokio contemporáneo.',
 'completed'),

-- ============================================================
-- GOODNIGHT PUNPUN (Inio Asano) - si figura en el CSV
-- ============================================================
('m0000001-0000-0000-0000-000000000039',
 'Goodnight Punpun', 0,
 'https://covers.openlibrary.org/b/isbn/9788418940927-M.jpg',
 4, '2020-01-01', '2022-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000112',
 NULL,
 'Manga de Inio Asano. La historia de Punpun Onodera, representado como un pájaro esquemático, desde su infancia hasta la adultez. Una obra desgarradora e incómoda que explora la depresión, el trauma, el abuso y la búsqueda de identidad con una honestidad brutal. Considerada una de las mejores obras del manga contemporáneo.',
 'completed'),

-- ============================================================
-- PANDORA HEARTS: MOCHIZUKI JUN ARTWORKS
-- ============================================================
('m0000001-0000-0000-0000-000000000040',
 'Pandora Hearts: Mochizuki Jun Artworks', 0, NULL,
 1, '2015-01-01', '2015-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000115',
 NULL,
 'Libro de arte oficial de Pandora Hearts con ilustraciones originales de Jun Mochizuki. Incluye arte de color, bocetos y comentarios de la autora sobre la serie.',
 'completed'),

-- ============================================================
-- BUNGO STRAY DOGS: DEAD APPLE (Art book / extra)
-- ============================================================
('m0000001-0000-0000-0000-000000000041',
 'Bungo Stray Dogs: Official Anthology', 0, NULL,
 1, '2019-01-01', '2019-01-01', 'jp', 'en',
 'e0000001-0000-0000-0000-000000000109',
 'g0000001-0000-0000-0000-000000000111',
 NULL,
 'Antología oficial de Bungo Stray Dogs publicada en inglés por Yen Press. Reúne historias cortas del universo BSD dibujadas por distintos artistas.',
 'completed'),

-- ============================================================
-- BUNGO STRAY DOGS: WAN! (chibi spin-off)
-- ============================================================
('m0000001-0000-0000-0000-000000000042',
 'Bungo Stray Dogs: WAN!', 0, NULL,
 16, '2018-01-01', NULL, 'jp', 'en',
 'e0000001-0000-0000-0000-000000000109',
 'g0000001-0000-0000-0000-000000000112',
 NULL,
 'Spin-off chibi y cómico de Bungo Stray Dogs. Los personajes de la Agencia de Detectives y el Port Mafia protagonizan gags y situaciones cotidianas desenfadadas. Publicado en inglés por Yen Press.',
 'ongoing'),

-- ============================================================
-- SOUL EATER: ED. ESPECIAL (tomo coleccionista)
-- ============================================================
('m0000001-0000-0000-0000-000000000043',
 'Soul Eater: Ed. Especial', 0, NULL,
 4, '2015-01-01', '2018-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000106',
 NULL,
 'Edición especial de gran formato de Soul Eater de Atsushi Ohkubo. Recopila múltiples volúmenes originales con extras y arte adicional. Publicada por ECC Ediciones en España.',
 'completed'),

-- ============================================================
-- DEATH NOTE: ALL-IN-ONE EDITION
-- ============================================================
('m0000001-0000-0000-0000-000000000044',
 'Death Note: All-in-One Edition', 0,
 'https://covers.openlibrary.org/b/isbn/9781421591674-M.jpg',
 1, '2020-01-01', '2020-01-01', 'jp', 'en',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000111',
 NULL,
 'Edición integral en un solo volumen de toda la serie Death Note. Publicada en inglés por Viz Media / ECC.',
 'completed'),

-- ============================================================
-- BAKUMAN: ED. KANZENBAN
-- ============================================================
('m0000001-0000-0000-0000-000000000045',
 'Bakuman: Ed. Kanzenban', 0, NULL,
 10, '2015-01-01', '2017-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000101',
 NULL,
 'Edición especial kanzenban (edición definitiva) de Bakuman. Reúne dos volúmenes originales en uno con extras.',
 'completed'),

-- ============================================================
-- FULLMETAL ALCHEMIST: ED. KANZENBAN
-- ============================================================
('m0000001-0000-0000-0000-000000000046',
 'Fullmetal Alchemist: Ed. Kanzenban', 0,
 'https://covers.openlibrary.org/b/isbn/9788467913309-M.jpg',
 18, '2012-01-01', '2016-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000106',
 NULL,
 'Edición kanzenban de Fullmetal Alchemist que reúne los 27 volúmenes originales en 18 tomos de gran formato con papel de color y contenido extra.',
 'completed'),

-- ============================================================
-- FULLMETAL ALCHEMIST: 20TH ANNIVERSARY BOOK
-- ============================================================
('m0000001-0000-0000-0000-000000000047',
 'Fullmetal Alchemist: 20th Anniversary Book', 0, NULL,
 1, '2021-01-01', '2021-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000115',
 NULL,
 'Libro conmemorativo del 20 aniversario de Fullmetal Alchemist. Incluye arte exclusivo de Hiromu Arakawa, entrevistas y material inédito.',
 'completed'),

-- ============================================================
-- NORAGAMI: ED. NORMA (incluye tomos sueltos)
-- ============================================================
('m0000001-0000-0000-0000-000000000048',
 'Noragami: Ed. Norma', 0, NULL,
 27, '2014-01-01', NULL, 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000111',
 NULL,
 'Edición estándar de Noragami publicada en España por Norma Editorial. Sigue la misma numeración que la edición japonesa original.',
 'ongoing'),

-- ============================================================
-- GENSHIN IMPACT: ARTBOOK OFICIAL (manga)
-- ============================================================
('m0000001-0000-0000-0000-000000000049',
 'Genshin Impact: The Art of Genshin Impact', 0, NULL,
 3, '2021-01-01', '2023-01-01', 'cn', 'cn',
 'e0000001-0000-0000-0000-000000000111',
 'g0000001-0000-0000-0000-000000000115',
 NULL,
 'Colección oficial de artbooks de Genshin Impact (versión manga/artbook). Incluye arte conceptual de personajes, entornos, enemigos y elementos del lore del videojuego de miHoYo/HoYoverse. Edición en chino distribuida por Kadokawa.',
 'ongoing');

