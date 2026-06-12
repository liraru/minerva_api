-- ============================================================
-- MINERVA - MAESTRO DE SERIES
-- Fichero: 04_series.sql
-- Descripción: Inserción de series de libros y novelas
-- ============================================================

SET NAMES utf8mb4;

INSERT INTO `series` (`id`, `name`, `volumes`, `releaseDate`, `finishDate`, `description`) VALUES

-- ---- SERIES DE NOVELAS ----

('s0000001-0000-0000-0000-000000000001', 'El Testamento Maya', 3, '2001-01-01', '2011-01-01',
 'Trilogía de thriller apocalíptico de Steve Alten basada en las profecías mayas del fin del mundo. Combina ciencia ficción, mitología y aventura.'),

('s0000001-0000-0000-0000-000000000002', 'Assassin\'s Creed', 8, '2009-01-01', NULL,
 'Serie de novelas basadas en la franquicia de videojuegos de Ubisoft, escrita bajo el seudónimo Oliver Bowden. Expande las historias del universo Assassin\'s Creed.'),

('s0000001-0000-0000-0000-000000000003', 'Robert Langdon', 5, '2000-01-01', NULL,
 'Serie de thrillers del escritor Dan Brown protagonizada por el profesor de simbología de Harvard Robert Langdon. Combina misterio, conspiración, arte y religión.'),

('s0000001-0000-0000-0000-000000000004', 'Sherlock Holmes', 4, '1887-01-01', '1927-01-01',
 'Canon completo de Sherlock Holmes creado por Arthur Conan Doyle. Incluye 4 novelas y 56 relatos cortos protagonizados por el detective de Baker Street.'),

('s0000001-0000-0000-0000-000000000005', 'The Sherlock Holmes Collection', 10, '2010-01-01', NULL,
 'Colección de la editorial RBA que reúne las aventuras de Sherlock Holmes agrupadas por volúmenes temáticos.'),

('s0000001-0000-0000-0000-000000000006', 'La Biblioteca de los Muertos', 3, '2007-01-01', '2012-01-01',
 'Trilogía de thriller histórico de Glenn Cooper que entrelaza un misterio medieval con una investigación policiaca en el presente.'),

('s0000001-0000-0000-0000-000000000007', 'Los Juegos del Hambre', 3, '2008-09-14', '2010-08-24',
 'Trilogía distópica de Suzanne Collins ambientada en un futuro totalitario en el que jóvenes luchan a muerte en un espectáculo televisado. Adaptada a una exitosa saga cinematográfica.'),

('s0000001-0000-0000-0000-000000000008', 'Ahriel', 2, '2004-01-01', '2005-01-01',
 'Duología de fantasía de Laura Gallego protagonizada por un ángel que debe cumplir su misión en un mundo de humanos.'),

('s0000001-0000-0000-0000-000000000009', 'Memorias de Idhún', 3, '2004-01-01', '2006-01-01',
 'Trilogía de fantasía juvenil de Laura Gallego ambientada en el mundo mágico de Idhún, en peligro por la amenaza del nigromante Ashran.'),

('s0000001-0000-0000-0000-000000000010', 'Howl', 3, '1986-01-01', '2008-01-01',
 'Serie de fantasía de Diana Wynne Jones protagonizada por el mago Howl y Sophie. El primer libro inspiró la película El Castillo Ambulante de Hayao Miyazaki.'),

('s0000001-0000-0000-0000-000000000011', 'Catherine Velis', 2, '1988-01-01', '2008-01-01',
 'Díptico de thriller histórico de Katherine Neville en el que la heroína Catherine Velis persigue a través del tiempo los secretos de una partida de ajedrez legendaria.'),

('s0000001-0000-0000-0000-000000000012', 'La Materia Oscura', 3, '1995-01-01', '2000-01-01',
 'Trilogía de Philip Pullman que mezcla fantasía, ciencia y filosofía. Sigue a Lyra Belacqua a través de universos paralelos en una batalla por la consciencia humana.'),

('s0000001-0000-0000-0000-000000000013', 'La Crónica del Asesino de Reyes', 3, '2007-03-27', NULL,
 'Épica trilogía de fantasía de Patrick Rothfuss narrada en primera persona por Kvothe, un legendario mago y músico. Solo se han publicado los dos primeros volúmenes.'),

('s0000001-0000-0000-0000-000000000014', 'Harry Potter', 7, '1997-06-26', '2007-07-21',
 'Saga de fantasía de J. K. Rowling que narra la historia del joven mago Harry Potter y su lucha contra el malvado Lord Voldemort. Una de las series más vendidas de la historia con más de 500 millones de copias.'),

('s0000001-0000-0000-0000-000000000015', 'El Cementerio de los Libros Olvidados', 4, '2001-01-01', '2016-01-01',
 'Tetralogía de Carlos Ruiz Zafón ambientada en un Barcelona misterioso y literario, donde los libros tienen vida propia y los secretos del pasado persisten en el presente.'),

('s0000001-0000-0000-0000-000000000016', 'El Señor de los Anillos', 3, '1954-07-29', '1955-10-20',
 'Trilogía épica de J.R.R. Tolkien que narra la guerra por el Anillo Único en la Tierra Media. Fundamento del género de la fantasía épica moderna. Adaptada magistralmente al cine por Peter Jackson.'),

('s0000001-0000-0000-0000-000000000017', 'The Lord of the Rings', 3, '1954-07-29', '1955-10-20',
 'Edición inglesa original de la trilogía de J.R.R. Tolkien publicada por HarperCollins. Incluye The Fellowship of the Ring, The Two Towers y The Return of the King.'),

('s0000001-0000-0000-0000-000000000018', 'El Ángel de la Noche', 3, '2008-10-01', '2010-01-01',
 'Trilogía de fantasía oscura de Brent Weeks que sigue a Azoth, un asesino entrenado en las artes más mortales, y su lucha por la redención en un mundo corrupto.'),

('s0000001-0000-0000-0000-000000000019', 'El Portador de la Luz', 5, '2010-08-31', NULL,
 'Saga de fantasía épica de Brent Weeks con un elaborado sistema de magia basado en la luz cromática. Solo publicados los primeros tres volúmenes en castellano.'),

('s0000001-0000-0000-0000-000000000020', 'Saga de la Familia Fleury', 4, '2014-01-01', '2022-01-01',
 'Saga de novela histórica de Daniel Wolf (Markus Heitz) ambientada en la Borgoña medieval, siguiendo generaciones de la familia Fleury a través de guerras, peste y cambios históricos.'),

('s0000001-0000-0000-0000-000000000021', 'Sabikui Bisco', 8, '2018-11-10', NULL,
 'Serie de light novels japonesas de Shinji Cobkubo. Aventura post-apocalíptica en una Japón devastada por hongos gigantes, protagonizada por un arquero y su compañero cangrejo.'),

('s0000001-0000-0000-0000-000000000022', 'Heaven Official\'s Blessing (Tian Guan Ci Fu)', 8, '2017-05-29', '2018-08-23',
 'Novela danmei china de Mo Xiang Tong Xiu que narra las aventuras de Xie Lian, un dios que asciende y cae tres veces, y su relación con el Señor de los Fantasmas. Adaptada a donghua (anime chino) de gran éxito.'),

('s0000001-0000-0000-0000-000000000023', 'Grandmaster of Demonic Cultivation (Mo Dao Zu Shi)', 5, '2015-10-31', '2016-03-31',
 'Novela danmei china de Mo Xiang Tong Xiu que sigue a Wei Wuxian, un cultivador que regresa de entre los muertos y descubre los secretos que llevaron a su muerte. Adaptada a donghua y serie de imagen real.'),

('s0000001-0000-0000-0000-000000000024', 'Remnants of Filth (YUWU)', 7, '2018-06-01', '2019-12-01',
 'Novela danmei china de Rou Bao Bu Chi Rou sobre dos generales enfrentados en la guerra que deben aprender a coexistir en la paz. Publicada en inglés por Seven Seas Entertainment.'),

('s0000001-0000-0000-0000-000000000025', 'The Husky and His White Cat Shizun (Erha He Ta de Bai Mao Shizun)', 11, '2018-07-01', '2020-01-01',
 'Novela danmei china de Rou Bao Bu Chi Rou en la que un tirano reencarna en el pasado como discípulo del maestro al que asesinó. Combinación de tragedia, humor y romance.'),

('s0000001-0000-0000-0000-000000000026', 'Bungo Stray Dogs: Light Novels', 10, '2013-01-01', NULL,
 'Serie de light novels japonesas de Kafka Asagiri que expanden el universo de Bungo Stray Dogs, con historias previas a los eventos del manga principal.'),

('s0000001-0000-0000-0000-000000000027', '1Q84', 3, '2009-05-29', '2010-04-16',
 'Trilogía de Haruki Murakami que sigue a dos protagonistas en un Japón alternativo de 1984 con dos lunas. Mezcla misterio, romance y realismo mágico.'),

('s0000001-0000-0000-0000-000000000028', 'La Muerte del Comendador', 2, '2017-02-24', '2017-09-15',
 'Díptico de Haruki Murakami sobre un pintor que se retira a las montañas y descubre un misterioso cuadro que abre las puertas a otro mundo.'),

('s0000001-0000-0000-0000-000000000029', 'La Bella Salvaje', 3, '2017-10-19', NULL,
 'Trilogía de Philip Pullman que precede a La Materia Oscura. Narra los orígenes de Lyra y el mundo del daimonion. Solo publicado el primer volumen en castellano.'),

('s0000001-0000-0000-0000-000000000030', 'Genshin Impact Artbook', 3, '2021-01-01', NULL,
 'Colección oficial de libros de arte del videojuego de rol Genshin Impact, desarrollado por miHoYo/HoYoverse. Incluye arte conceptual, diseños de personajes e información del universo del juego.'),

('s0000001-0000-0000-0000-000000000031', 'Thousand Autumns (Qian Qiu)', 5, '2014-09-01', '2016-03-01',
 'Novela danmei china de Meng Xi Shi. Historia wuxia sobre el maestro de una secta de artes marciales y su encuentro con un demonio que le roba medio aliento vital.'),

('s0000001-0000-0000-0000-000000000032', 'Guardian (Zhen Hun)', 3, '2012-01-01', '2017-01-01',
 'Novela de ciencia ficción y fantasía urbana de la autora china priest. Sigue a un investigador humano y un detective del mundo sobrenatural que deben trabajar juntos.'),

('s0000001-0000-0000-0000-000000000033', 'Ballad of Sword and Wine (Qiang Jin Jiu)', 7, '2018-01-01', '2020-01-01',
 'Novela danmei histórico-fantástica de Tang Jiu Qing. Historia de traición, lealtad y amor entre un príncipe destinado al sacrificio y su protector.'),

('s0000001-0000-0000-0000-000000000034', 'Cormoran Strike', 7, '2013-04-30', NULL,
 'Serie de novela negra de J. K. Rowling bajo el seudónimo Robert Galbraith. Sigue al detective privado Cormoran Strike y su asociada Robin Ellacott en la investigación de crímenes complejos.'),

('s0000001-0000-0000-0000-000000000035', 'Los Pilares de la Tierra', 4, '1989-10-01', NULL,
 'Saga de Ken Follett que comienza con la construcción de una catedral en la Inglaterra medieval del siglo XII. Combina intriga política, romanticismo y rigor histórico.'),

('s0000001-0000-0000-0000-000000000036', 'Taberna Kamogawa', 2, '2013-01-01', NULL,
 'Serie de novelas gastronómicas de misterio de Hisashi Kashiwai ambientadas en un restaurante japonés donde la comida es el hilo conductor de historias humanas.'),

('s0000001-0000-0000-0000-000000000037', 'La Librería Morisaki', 2, '2009-01-01', '2013-01-01',
 'Díptico de Satoshi Yagisawa ambientado en el famoso barrio libresco de Jimbocho en Tokio, donde una joven encuentra refugio y redescubre la vida entre libros y amistades.'),

('s0000001-0000-0000-0000-000000000038', 'La Noche y su Luna', 3, '2022-11-01', NULL,
 'Saga de alta fantasía de Piper C.J. con temas de magia, identidad y amor entre personas del mismo sexo. Publicada en España por Alfaguara.');

