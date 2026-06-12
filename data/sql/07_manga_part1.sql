-- ============================================================
-- MINERVA - INSERCIÓN DE MANGA (Parte 1 de 2)
-- Fichero: 07_manga_part1.sql
-- Descripción: Series de manga con metadatos
-- Columnas: id, title, isDigital, cover, volumes, firstVolumeDate,
--           lastVolumeDate, originalLanguage, language, editorialId,
--           genreId, locationId, synopsis, status
-- Notas:
--   - status: 'ongoing' si continúa, 'completed' si terminado
--   - cover: URL de Open Library o imagen canónica cuando disponible
-- ============================================================

SET NAMES utf8mb4;

INSERT INTO `mangas`
  (`id`, `title`, `isDigital`, `cover`, `volumes`, `firstVolumeDate`,
   `lastVolumeDate`, `originalLanguage`, `language`, `editorialId`,
   `genreId`, `locationId`, `synopsis`, `status`)
VALUES

-- ============================================================
-- NO. 6 (adaptación manga)
-- ============================================================
('m0000001-0000-0000-0000-000000000001',
 'No. 6', 0,
 'https://covers.openlibrary.org/b/isbn/9781612629162-M.jpg',
 9, '2013-01-01', '2014-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000101',
 'g0000001-0000-0000-0000-000000000110',
 NULL,
 'Adaptación manga de la novela de Atsuko Asano. En una ciudad utópica llamada No. 6, Shion descubre las oscuras verdades que se esconden bajo la aparente perfección de la sociedad y conoce a Nezumi, un chico del exterior.',
 'completed'),

-- ============================================================
-- IDOLiSH7 - Re:member (Hakusensha / jp)
-- ============================================================
('m0000001-0000-0000-0000-000000000002',
 'IDOLiSH7 - Re:member', 0, NULL,
 3, '2019-01-01', '2021-01-01', 'jp', 'jp',
 'e0000001-0000-0000-0000-000000000102',
 'g0000001-0000-0000-0000-000000000113',
 NULL,
 'Manga spin-off del juego de ritmo IDOLiSH7. Dibujado por Arina Tanemura y guionizado por Bunta Tsushimi, narra las historias de los idols del grupo. Edición japonesa de Hakusensha.',
 'completed'),

-- ============================================================
-- IDOLiSH7 (ECC / spa)
-- ============================================================
('m0000001-0000-0000-0000-000000000003',
 'IDOLISH7', 0, NULL,
 2, '2021-01-01', '2022-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000103',
 'g0000001-0000-0000-0000-000000000113',
 NULL,
 'Versión en castellano del manga IDOLiSH7, publicada por ECC. Sigue a los grupos de idols masculinos de la franquicia en sus aventuras musicales y personales.',
 'completed'),

-- ============================================================
-- IDOLiSH7 - TRIGGER (ECC / spa)
-- ============================================================
('m0000001-0000-0000-0000-000000000004',
 'IDOLISH7 - TRIGGER', 0, NULL,
 1, '2022-01-01', '2022-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000103',
 'g0000001-0000-0000-0000-000000000113',
 NULL,
 'Spin-off del manga IDOLiSH7 centrado en el grupo TRIGGER. Publicado por ECC en castellano.',
 'completed'),

-- ============================================================
-- SOLANIN integral
-- ============================================================
('m0000001-0000-0000-0000-000000000005',
 'SOLANIN integral', 0,
 'https://covers.openlibrary.org/b/isbn/9788467925616-M.jpg',
 1, '2021-01-01', '2021-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000112',
 NULL,
 'Edición integral del manga Solanin de Inio Asano. Una joven tokiota trabaja en una empresa sin ilusión y su novio abandona su trabajo para dedicarse a la música. Un relato generacional sobre la búsqueda de sentido en la vida adulta.',
 'completed'),

-- ============================================================
-- LOS APUNTES DE VÁNITAS
-- ============================================================
('m0000001-0000-0000-0000-000000000006',
 'Los Apuntes de Vánitas', 0,
 'https://covers.openlibrary.org/b/isbn/9788467929867-M.jpg',
 18, '2016-01-01', NULL, 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000107',
 NULL,
 'En un París steampunk del siglo XIX, Noé busca el legendario Libro de Vánitas, un grimorio que supuestamente maldice a los vampiros. Jun Mochizuki construye un universo lleno de intriga, humor y momentos emotivos.',
 'ongoing'),

-- ============================================================
-- QUALIA BAJO LA NIEVE
-- ============================================================
('m0000001-0000-0000-0000-000000000007',
 'Qualia bajo la Nieve', 0, NULL,
 1, '2020-01-01', '2020-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000105',
 'g0000001-0000-0000-0000-000000000105',
 NULL,
 'Historia de amor BL de Kanna Kii. Dos jóvenes se reencuentran años después de un amor de infancia truncado por la distancia y el silencio.',
 'completed'),

-- ============================================================
-- AUNQUE NO PUEDA HACER MAGIA
-- ============================================================
('m0000001-0000-0000-0000-000000000008',
 'Aunque no Pueda Hacer Magia', 0, NULL,
 1, '2021-01-01', '2021-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000105',
 'g0000001-0000-0000-0000-000000000105',
 NULL,
 'One-shot de Kanna Kii. Historia romántica BL sobre un joven de una familia de magos que no tiene magia y el chico que lo acepta tal y como es.',
 'completed'),

-- ============================================================
-- UN EXTRAÑO A LA ORILLA DEL MAR
-- ============================================================
('m0000001-0000-0000-0000-000000000009',
 'Un Extraño a la Orilla del Mar', 0, NULL,
 1, '2019-01-01', '2019-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000105',
 'g0000001-0000-0000-0000-000000000105',
 NULL,
 'One-shot de Kanna Kii. Historia de amor BL entre un joven pescador y un forastero que llega a su pueblo costero.',
 'completed'),

-- ============================================================
-- UN EXTRAÑO EN PRIMAVERA
-- ============================================================
('m0000001-0000-0000-0000-000000000010',
 'Un Extraño en Primavera', 0, NULL,
 6, '2020-01-01', '2023-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000105',
 'g0000001-0000-0000-0000-000000000105',
 NULL,
 'Serie de manga BL de Kanna Kii. Continuación del universo de Un Extraño a la Orilla del Mar, con nuevas historias de amor entre hombres en entornos costeros y rurales.',
 'completed'),

-- ============================================================
-- YOU ARE IN THE BLUE SUMMER
-- ============================================================
('m0000001-0000-0000-0000-000000000011',
 'You Are in the Blue Summer', 0, NULL,
 1, '2022-01-01', '2022-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000105',
 'g0000001-0000-0000-0000-000000000105',
 NULL,
 'One-shot de Nagisa Furuya. Historia de amor BL entre dos chicos durante un verano en la costa.',
 'completed'),

-- ============================================================
-- BANANA FISH
-- ============================================================
('m0000001-0000-0000-0000-000000000012',
 'Banana Fish', 0,
 'https://covers.openlibrary.org/b/isbn/9788413418810-M.jpg',
 1, '2021-01-01', '2021-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000106',
 'g0000001-0000-0000-0000-000000000108',
 NULL,
 'Akimi Yoshida. Edición omnibus en España del clásico manga de acción y drama. El joven líder de una banda callejera de Nueva York, Ash Lynx, investiga la misteriosa droga "Banana Fish" mientras se forja un vínculo con el joven japonés Eiji.',
 'completed'),

-- ============================================================
-- BAKUMAN
-- ============================================================
('m0000001-0000-0000-0000-000000000013',
 'Bakuman', 0,
 'https://covers.openlibrary.org/b/isbn/9788468472461-M.jpg',
 20, '2010-01-01', '2014-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000101',
 NULL,
 'Dos estudiantes de secundaria, Moritaka Mashiro y Akito Takagi, sueñan con crear un manga de éxito para la revista Weekly Shonen Jump. Un apasionante relato sobre el mundo editorial del manga japonés, la amistad y la perseverancia.',
 'completed'),

-- ============================================================
-- SOUL EATER
-- ============================================================
('m0000001-0000-0000-0000-000000000014',
 'Soul Eater', 0,
 'https://covers.openlibrary.org/b/isbn/9788467479553-M.jpg',
 25, '2007-01-01', '2018-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000106',
 NULL,
 'En la Academia DWMA, parejas de estudiantes compuestas por un Maestro de la Muerte y su arma humana deben recolectar 99 almas malvadas y una de bruja para crear una Death Scythe. Acción, humor y momentos épicos en un universo único.',
 'completed'),

-- ============================================================
-- PANDORA HEARTS
-- ============================================================
('m0000001-0000-0000-0000-000000000015',
 'Pandora Hearts', 0,
 'https://covers.openlibrary.org/b/isbn/9788467478419-M.jpg',
 24, '2008-01-01', '2016-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000107',
 NULL,
 'El joven Oz Vessalius es arrojado al Abismo durante su ceremonia de mayoría de edad. Allí hace un contrato con Alice, una Cadena que se llama a sí misma la Coneja Negra. De regreso al mundo real, Oz trata de descubrir el misterio de su pasado en este oscuro y laberíntico manga de Jun Mochizuki.',
 'completed'),

-- ============================================================
-- WIND BREAKER
-- ============================================================
('m0000001-0000-0000-0000-000000000016',
 'Wind Breaker', 0,
 'https://covers.openlibrary.org/b/isbn/9788411402743-M.jpg',
 15, '2021-01-01', NULL, 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000107',
 'g0000001-0000-0000-0000-000000000117',
 NULL,
 'Haruka Sakura llega a un nuevo instituto buscando peleas y fuerza, pero acaba formando parte del Bofurin, el grupo que protege la ciudad. Manga de acción urbana con corazón, trabajo en equipo y rivalidades emocionantes.',
 'ongoing'),

-- ============================================================
-- GIVEN
-- ============================================================
('m0000001-0000-0000-0000-000000000017',
 'Given', 0,
 'https://covers.openlibrary.org/b/isbn/9788418940996-M.jpg',
 10, '2019-01-01', NULL, 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000105',
 'g0000001-0000-0000-0000-000000000113',
 NULL,
 'Ritsuka Uenoyama, guitarrista de una banda indie, encuentra a Mafuyu Sato durmiendo con una guitarra rota. A medida que le enseña a tocar, surge entre ellos una conexión musical y emocional. Manga BL de Natsuki Kizu con adaptación al anime.',
 'ongoing'),

-- ============================================================
-- ALGO ENTRE NOSOTROS
-- ============================================================
('m0000001-0000-0000-0000-000000000018',
 'Algo entre Nosotros', 0, NULL,
 1, '2022-01-01', '2022-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000105',
 'g0000001-0000-0000-0000-000000000105',
 NULL,
 'One-shot de Hagi. Historia de amor BL contemporáneo publicada por Milky Way Ediciones.',
 'completed'),

-- ============================================================
-- EL DIOS Y EL MENSAJERO INCAPAZ DE VOLAR
-- ============================================================
('m0000001-0000-0000-0000-000000000019',
 'El Dios y el Mensajero Incapaz de Volar', 0, NULL,
 1, '2022-01-01', '2022-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000105',
 'g0000001-0000-0000-0000-000000000105',
 NULL,
 'One-shot de Hagi. Historia de fantasía y romance BL con elementos de mitología.',
 'completed'),

-- ============================================================
-- LINK CLICK
-- ============================================================
('m0000001-0000-0000-0000-000000000020',
 'Link Click', 0,
 'https://covers.openlibrary.org/b/isbn/9788467952926-M.jpg',
 5, '2022-01-01', NULL, 'cn', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000116',
 NULL,
 'Manhua de Li Haoling. Cheng Xiaoshi puede entrar en fotografías y vivir los momentos del pasado. Junto a Lu Guang, que puede ver el futuro de esas fotos, trabajan en un estudio de revelado fotográfico resolviendo casos misteriosos. Adaptado a una exitosa serie de anime.',
 'ongoing'),

-- ============================================================
-- PUEDO OÍR EL SOL
-- ============================================================
('m0000001-0000-0000-0000-000000000021',
 'Puedo Oír el Sol', 0, NULL,
 9, '2018-01-01', '2022-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000105',
 'g0000001-0000-0000-0000-000000000105',
 NULL,
 'Manga BL de Yuki Fumino. Satoru Yoshino, sordo, trabaja en una cafetería y entabla amistad con el universitario Kohei Sugihara, que se ofrece a ayudarle. Una historia emotiva sobre comunicación, confianza y amor.',
 'completed'),

-- ============================================================
-- ANTIGUOS ALUMNOS
-- ============================================================
('m0000001-0000-0000-0000-000000000022',
 'Antiguos Alumnos', 0, NULL,
 2, '2020-01-01', '2021-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000108',
 'g0000001-0000-0000-0000-000000000105',
 NULL,
 'Manga BL de Asumiko Nakamura. Dos excompañeros de clase se reencuentran años después y descubren que los sentimientos del pasado siguen presentes.',
 'completed'),

-- ============================================================
-- EN LA MISMA CLASE
-- ============================================================
('m0000001-0000-0000-0000-000000000023',
 'En la Misma Clase', 0,
 'https://covers.openlibrary.org/b/isbn/9788419600134-M.jpg',
 3, '2021-01-01', '2022-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000108',
 'g0000001-0000-0000-0000-000000000105',
 NULL,
 'Manga BL de Asumiko Nakamura. Historia de amor entre dos estudiantes de secundaria: el popular Rihito Sajou y el líder de la clase Hikaru Kusakabe. Su adaptación al anime fue un fenómeno internacional.',
 'completed'),

-- ============================================================
-- SEVEN DAYS
-- ============================================================
('m0000001-0000-0000-0000-000000000024',
 'Seven Days', 0, NULL,
 2, '2021-01-01', '2021-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000108',
 'g0000001-0000-0000-0000-000000000105',
 NULL,
 'Manga BL de Venio Tachibana. El popular Touji Seryo tiene fama de salir con cualquier chica que le invite el lunes por la mañana. El arquero Yuzuru Shino decide aprovechar esa costumbre, desencadenando una semana que cambiará sus vidas.',
 'completed'),

-- ============================================================
-- SENPAI
-- ============================================================
('m0000001-0000-0000-0000-000000000025',
 'Senpai', 0, NULL,
 1, '2022-01-01', '2022-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000108',
 'g0000001-0000-0000-0000-000000000105',
 NULL,
 'Manga BL de Bikke. Historia de amor entre un estudiante y su sempai en el club escolar.',
 'completed'),

-- ============================================================
-- BOY MEETS MARIA
-- ============================================================
('m0000001-0000-0000-0000-000000000026',
 'Boy Meets Maria', 0, NULL,
 1, '2021-01-01', '2021-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000105',
 'g0000001-0000-0000-0000-000000000108',
 NULL,
 'Manga de Peyo. Taiga se une al club de teatro de su escuela y se enamora de la actriz principal, que resulta ser un chico que viste de mujer para poder actuar. Historia sobre identidad y amor con una perspectiva honesta.',
 'completed'),

-- ============================================================
-- NORAGAMI
-- ============================================================
('m0000001-0000-0000-0000-000000000027',
 'Noragami', 0,
 'https://covers.openlibrary.org/b/isbn/9788467472813-M.jpg',
 27, '2014-01-01', NULL, 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000111',
 NULL,
 'Yato es un dios menor sin templo ni seguidores que realiza trabajos a cambio de 5 yenes. Cuando Hiyori Iki arriesga su vida para salvarlo, sus almas quedan ligadas. Un manga que mezcla mitología sintoísta, acción y momentos emotivos con gran humor.',
 'ongoing'),

-- ============================================================
-- FULLMETAL ALCHEMIST
-- ============================================================
('m0000001-0000-0000-0000-000000000028',
 'Fullmetal Alchemist', 0,
 'https://covers.openlibrary.org/b/isbn/9788468471358-M.jpg',
 27, '2002-01-01', '2015-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000106',
 NULL,
 'Los hermanos Edward y Alphonse Elric intentan recuperar sus cuerpos perdidos tras un fallido intento de alquimia. Su búsqueda de la Piedra Filosofal los lleva a descubrir oscuros secretos de estado en un país inspirado en la Europa de principios del siglo XX. Obra cumbre del manga shonen.',
 'completed'),

-- ============================================================
-- ATELIER OF WITCH HAT: ED. GRIMORIO
-- ============================================================
('m0000001-0000-0000-0000-000000000029',
 'Atelier of Witch Hat: Ed. Grimorio', 0,
 'https://covers.openlibrary.org/b/isbn/9788418940972-M.jpg',
 3, '2022-01-01', NULL, 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000105',
 'g0000001-0000-0000-0000-000000000107',
 NULL,
 'Edición de lujo del manga Atelier of Witch Hat de Kamome Shirahama. En un mundo donde la magia es secreta, la joven Coco descubre que puede ver los círculos mágicos y es admitida en el taller de un mago. Una historia sobre aprendizaje, amistad y el significado de la magia.',
 'ongoing'),

-- ============================================================
-- EL ARTE DE ATELIER OF WITCH HAT
-- ============================================================
('m0000001-0000-0000-0000-000000000030',
 'El Arte de Atelier of Witch Hat', 0, NULL,
 1, '2023-01-01', '2023-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000105',
 'g0000001-0000-0000-0000-000000000115',
 NULL,
 'Libro de arte oficial de Atelier of Witch Hat de Kamome Shirahama. Incluye arte conceptual, bocetos e ilustraciones originales de la mangaka.',
 'completed'),

-- ============================================================
-- BUNGO STRAY DOGS
-- ============================================================
('m0000001-0000-0000-0000-000000000031',
 'Bungo Stray Dogs', 0,
 'https://covers.openlibrary.org/b/isbn/9788467953497-M.jpg',
 22, '2016-01-01', NULL, 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000111',
 NULL,
 'En Yokohama conviven detectives con habilidades sobrenaturales y una organización criminal de portistas. Los personajes están inspirados en escritores japoneses reales —Dazai, Atsushi, Kunikida, Ranpo— a los que se les atribuyen poderes basados en sus obras.',
 'ongoing'),

-- ============================================================
-- BUNGO STRAY DOGS: ANOTHER STORY
-- ============================================================
('m0000001-0000-0000-0000-000000000032',
 'Bungo Stray Dogs: Another Story', 0, NULL,
 1, '2020-01-01', '2020-01-01', 'jp', 'en',
 'e0000001-0000-0000-0000-000000000109',
 'g0000001-0000-0000-0000-000000000111',
 NULL,
 'Volumen spin-off de Bungo Stray Dogs con ilustraciones de Oyoyo. Publicado en inglés por Yen Press.',
 'completed'),

-- ============================================================
-- BUNGO STRAY DOGS: RAKU-GAKI TECHO
-- ============================================================
('m0000001-0000-0000-0000-000000000033',
 'Bungo Stray Dogs: Raku-gaki Techo', 0, NULL,
 1, '2022-01-01', '2022-01-01', 'jp', 'jp',
 'e0000001-0000-0000-0000-000000000110',
 'g0000001-0000-0000-0000-000000000111',
 NULL,
 'Libro de bocetos oficial de Bungo Stray Dogs. Edición japonesa publicada por Kadokawa Shoten.',
 'completed'),

-- ============================================================
-- DEATH NOTE: BLACK EDITION
-- ============================================================
('m0000001-0000-0000-0000-000000000034',
 'Death Note: Black Edition', 0,
 'https://covers.openlibrary.org/b/isbn/9788467479577-M.jpg',
 6, '2012-01-01', '2014-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000111',
 NULL,
 'Edición especial de Death Note que reúne dos volúmenes originales en uno. Light Yagami encuentra el Death Note, un cuaderno sobrenatural que mata a quien cuyo nombre se escribe en él. Comienza una partida de ajedrez mental entre Light y el detective L. Obra maestra del manga psicológico.',
 'completed'),

-- ============================================================
-- SHERLOCK: ADAPTACIÓN MANGA
-- ============================================================
('m0000001-0000-0000-0000-000000000035',
 'Sherlock: Estudio en Rosa', 0, NULL,
 1, '2017-01-01', '2017-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000114',
 NULL,
 'Adaptación al manga del primer episodio de la serie televisiva Sherlock (BBC). Guión de Steven Moffat y Mark Gatiss, dibujos de Jay. El detective Sherlock Holmes y el Dr. Watson investigan una serie de suicidios aparentes en Londres.',
 'completed'),

('m0000001-0000-0000-0000-000000000036',
 'Sherlock: El Banquero Ciego', 0, NULL,
 1, '2017-01-01', '2017-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000114',
 NULL,
 'Adaptación al manga del segundo episodio de la serie televisiva Sherlock (BBC). Sherlock y Watson investigan una serie de mensajes cifrados relacionados con un banco chino.',
 'completed'),

('m0000001-0000-0000-0000-000000000037',
 'Sherlock: El Gran Juego', 0, NULL,
 1, '2018-01-01', '2018-01-01', 'jp', 'spa',
 'e0000001-0000-0000-0000-000000000104',
 'g0000001-0000-0000-0000-000000000114',
 NULL,
 'Adaptación al manga del tercer episodio de la primera temporada de Sherlock (BBC). El criminal Moriarty pone a prueba a Sherlock con una serie de bombas humanas.',
 'completed');

