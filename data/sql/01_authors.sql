-- ============================================================
-- MINERVA - MAESTRO DE AUTORES
-- Fichero: 01_authors.sql
-- Descripción: Inserción de autores con datos biográficos
-- Notas: name = nombre de pila, lastname = apellidos
-- ============================================================

SET NAMES utf8mb4;

INSERT INTO `authors` (`id`, `name`, `lastname`, `birthdate`, `deceasedDate`, `active`, `countryId`, `biography`) VALUES

-- ---- AUTORES DE NOVELA ----

('a0000001-0000-0000-0000-000000000001', 'Steve', 'Alten', '1959-08-21', NULL, 1, 'US',
 'Escritor estadounidense de ciencia ficción y thrillers. Conocido por la saga MEG, sobre el megalodón prehistórico. Fundó el programa educativo Adopt-An-Author para fomentar la lectura entre jóvenes.'),

('a0000001-0000-0000-0000-000000000002', 'Oliver', 'Bowden', NULL, NULL, 1, 'GB',
 'Seudónimo utilizado por Anton Gill para la serie de novelas Assassin\'s Creed, basadas en los videojuegos de Ubisoft.'),

('a0000001-0000-0000-0000-000000000003', 'Dan', 'Brown', '1964-06-22', NULL, 1, 'US',
 'Novelista estadounidense conocido por sus thrillers de conspiración y misterio. Autor de la serie del profesor Robert Langdon, que incluye El Código Da Vinci, Ángeles y Demonios e Inferno. Sus obras han vendido más de 200 millones de ejemplares en todo el mundo.'),

('a0000001-0000-0000-0000-000000000004', 'Lewis', 'Carroll', '1832-01-27', '1898-01-14', 0, 'GB',
 'Matemático y escritor victoriano británico, cuyo nombre real era Charles Lutwidge Dodgson. Autor de Alicia en el País de las Maravillas (1865) y A Través del Espejo (1871), obras maestras de la literatura absurdista y de fantasía.'),

('a0000001-0000-0000-0000-000000000005', 'Suzanne', 'Collins', '1962-08-10', NULL, 1, 'US',
 'Escritora estadounidense conocida por la trilogía distópica Los Juegos del Hambre. Anteriormente fue guionista de televisión infantil. Sus novelas han vendido más de 100 millones de ejemplares en todo el mundo y han sido adaptadas al cine.'),

('a0000001-0000-0000-0000-000000000006', 'Arthur', 'Conan Doyle', '1859-05-22', '1930-07-07', 0, 'GB',
 'Escritor y médico escocés, creador del detective Sherlock Holmes, uno de los personajes más famosos de la literatura universal. Escribió 4 novelas y 56 relatos cortos protagonizados por Holmes. También fue autor de obras históricas, de ciencia ficción y de divulgación del espiritismo.'),

('a0000001-0000-0000-0000-000000000007', 'Glenn', 'Cooper', '1953-09-09', NULL, 1, 'US',
 'Novelista y guionista estadounidense. Conocido por la saga La Biblioteca de los Muertos, que combina thriller histórico y misterio medieval.'),

('a0000001-0000-0000-0000-000000000008', 'Michael', 'Crane', NULL, NULL, 1, 'US',
 'Autor de novela histórica y de suspense. Conocido en España por El Violinista de Praga.'),

('a0000001-0000-0000-0000-000000000009', 'Philip K.', 'Dick', '1928-12-16', '1982-03-02', 0, 'US',
 'Escritor estadounidense de ciencia ficción, considerado uno de los más influyentes del género. Autor de El Hombre en el Castillo, ¿Sueñan los androides con ovejas eléctricas? y otras obras que exploran la naturaleza de la realidad y la identidad. Sus obras han inspirado numerosas adaptaciones cinematográficas.'),

('a0000001-0000-0000-0000-000000000010', 'Charles', 'Dickens', '1812-02-07', '1870-06-09', 0, 'GB',
 'Novelista victoriano inglés, uno de los más importantes de la lengua inglesa. Autor de Oliver Twist, Grandes Esperanzas, David Copperfield y Cuento de Navidad. Sus obras retratan con ironía y humanismo la sociedad industrial de su época y dieron voz a las clases más desfavorecidas.'),

('a0000001-0000-0000-0000-000000000011', 'Ildefonso', 'Falcones', '1959-06-05', NULL, 1, 'ES',
 'Abogado y escritor español conocido por sus novelas históricas ambientadas en España medieval y moderna. Su debut, La Catedral del Mar (2006), fue un fenómeno editorial en más de 40 países.'),

('a0000001-0000-0000-0000-000000000012', 'Ken', 'Follett', '1949-06-05', NULL, 1, 'GB',
 'Escritor galés de thrillers y novela histórica. Conocido especialmente por Los Pilares de la Tierra y su continuación Un Mundo sin Fin. Sus obras combinan rigor histórico con narrativa de intriga apasionante y han vendido más de 160 millones de ejemplares.'),

('a0000001-0000-0000-0000-000000000013', 'Robert', 'Galbraith', '1965-07-31', NULL, 1, 'GB',
 'Seudónimo bajo el que J. K. Rowling publica su serie de novela negra protagonizada por el detective privado Cormoran Strike. La serie comenzó en 2013 con El Canto del Cuco.'),

('a0000001-0000-0000-0000-000000000014', 'Laura', 'Gallego', '1977-12-07', NULL, 1, 'ES',
 'Escritora española de fantasía juvenil y adulta. Autora de las sagas Memorias de Idhún y Crónicas de la Torre, entre otras. Es una de las autoras de fantasía más leídas en lengua castellana. Licenciada en Filología Hispánica por la Universidad de Valencia.'),

('a0000001-0000-0000-0000-000000000015', 'Matt', 'Haig', '1975-05-03', NULL, 1, 'GB',
 'Escritor y periodista británico conocido por sus novelas que exploran la salud mental y la condición humana. Autor de How to Stop Time, La librería de los finales felices y Razones para seguir viviendo, su famoso libro sobre la depresión y la ansiedad.'),

('a0000001-0000-0000-0000-000000000016', 'Titania', 'Hardie', NULL, NULL, 1, 'GB',
 'Escritora británica de ficción. Conocida por El Laberinto de la Rosa, una novela de misterio y suspense histórico.'),

('a0000001-0000-0000-0000-000000000017', 'Diana', 'Wynne Jones', '1934-08-16', '2011-03-26', 0, 'GB',
 'Escritora británica de literatura fantástica, especialmente conocida por sus novelas para jóvenes. Autora de El Castillo Ambulante, que inspiró la película homónima de Hayao Miyazaki. Su obra se caracteriza por mundos mágicos complejos y protagonistas femeninas inteligentes.'),

('a0000001-0000-0000-0000-000000000018', 'Éric', 'Marchal', NULL, NULL, 1, 'FR',
 'Escritor y médico francés. Conocido en España por El Sol bajo la Seda, una novela histórica ambientada en el siglo XVIII.'),

('a0000001-0000-0000-0000-000000000019', 'Ian', 'McEwan', '1948-06-21', NULL, 1, 'GB',
 'Novelista y guionista británico, uno de los más destacados de la literatura inglesa contemporánea. Autor de Expiación, El Placer del Viajero y Amsterdam. Ha ganado el premio Man Booker y el Jerusalem Prize.'),

('a0000001-0000-0000-0000-000000000020', 'Katherine', 'Neville', '1945-04-04', NULL, 1, 'US',
 'Novelista estadounidense conocida por su saga de suspense histórico protagonizada por Catherine Velis, que comienza con El Ocho (1988). Sus novelas mezclan ajedrez, conspiración y misterio a lo largo de distintas épocas históricas.'),

('a0000001-0000-0000-0000-000000000021', 'Philip', 'Pullman', '1946-10-19', NULL, 1, 'GB',
 'Escritor inglés conocido por la trilogía La Materia Oscura (Luces del Norte, La Daga, El Catalejo Lacado) y su continuación La República Celestial. Sus obras exploran temas filosóficos como la consciencia, el libre albedrío y la religión. Ha recibido el premio Carnegie Medal y el Whitbread Book of the Year.'),

('a0000001-0000-0000-0000-000000000022', 'Patrick', 'Rothfuss', '1973-06-06', NULL, 1, 'US',
 'Escritor estadounidense de fantasía épica. Autor de la serie La Crónica del Asesino de Reyes, que incluye El Nombre del Viento y El Temor de un Hombre Sabio. Reconocido por la riqueza de su prosa y la complejidad de su construcción del mundo de Temerant.'),

('a0000001-0000-0000-0000-000000000023', 'Joanne K.', 'Rowling', '1965-07-31', NULL, 1, 'GB',
 'Escritora británica, creadora de la saga Harry Potter, una de las más vendidas de la historia con más de 500 millones de ejemplares. Bajo el seudónimo Robert Galbraith también escribe la serie de novela negra Cormoran Strike. Nacida en Yate, Gloucestershire.'),

('a0000001-0000-0000-0000-000000000024', 'Carlos', 'Ruiz Zafón', '1964-09-25', '2020-06-19', 0, 'ES',
 'Escritor español conocido mundialmente por La Sombra del Viento (2001) y la tetralogía El Cementerio de los Libros Olvidados. Sus novelas mezclan el thriller, el misterio y el homenaje a la literatura en un Barcelona oscuro y mágico. Vivió durante años en Los Ángeles, donde también trabajó como guionista.'),

('a0000001-0000-0000-0000-000000000025', 'Mary', 'Shelley', '1797-08-30', '1851-02-01', 0, 'GB',
 'Escritora romántica inglesa, autora de Frankenstein o el Moderno Prometeo (1818), considerada la primera novela de ciencia ficción de la historia. Hija del filósofo William Godwin y la feminista Mary Wollstonecraft. Esposa del poeta Percy Bysshe Shelley.'),

('a0000001-0000-0000-0000-000000000026', 'Robert Louis', 'Stevenson', '1850-11-13', '1894-12-03', 0, 'GB',
 'Novelista, poeta y ensayista escocés. Autor de La Isla del Tesoro, El Extraño Caso del Dr. Jekyll y Mr. Hyde y Secuestrado, entre otras. Una de las figuras más importantes de la literatura de aventuras del siglo XIX.'),

('a0000001-0000-0000-0000-000000000027', 'Jack', 'Thorne', '1978-09-04', NULL, 1, 'GB',
 'Dramaturgo y guionista británico. Coautor junto a J. K. Rowling y John Tiffany del guión de Harry Potter y el Legado Maldito, la obra de teatro oficial que continúa la saga.'),

('a0000001-0000-0000-0000-000000000028', 'John', 'Tiffany', '1971-09-27', NULL, 1, 'GB',
 'Director de teatro británico. Coautor y director de Harry Potter y el Legado Maldito junto a J. K. Rowling y Jack Thorne.'),

('a0000001-0000-0000-0000-000000000029', 'John Ronald Reuel', 'Tolkien', '1892-01-03', '1973-09-02', 0, 'GB',
 'Escritor, filólogo y académico inglés, creador de la Tierra Media y autor de El Hobbit y El Señor de los Anillos. Sus obras definieron el género de la fantasía épica moderna. Profesor en la Universidad de Oxford, donde fue amigo íntimo de C. S. Lewis. El Silmarillion fue publicado póstumamente por su hijo Christopher.'),

('a0000001-0000-0000-0000-000000000030', 'Brent', 'Weeks', '1977-03-06', NULL, 1, 'US',
 'Escritor estadounidense de fantasía épica. Conocido por la trilogía El Ángel de la Noche y la saga El Portador de la Luz. Sus novelas se caracterizan por protagonistas moralmente ambiguos y sistemas de magia complejos.'),

('a0000001-0000-0000-0000-000000000031', 'Daniel', 'Wolf', NULL, NULL, 1, 'DE',
 'Seudónimo de Markus Heitz, escritor alemán de novelas históricas. Autor de la saga La Familia Fleury, una épica ambientada en la Edad Media europea.'),

-- ---- AUTORES JAPONESES (Literatura) ----

('a0000001-0000-0000-0000-000000000032', 'Shinji', 'Cobkubo', NULL, NULL, 1, 'JP',
 'Autor japonés de novelas ligeras. Conocido por la serie Sabikui Bisco, una obra de aventura post-apocalíptica publicada originalmente en Japón por Dengeki Bunko.'),

('a0000001-0000-0000-0000-000000000033', 'Gustavo Adolfo', 'Bécquer', '1836-02-17', '1870-12-22', 0, 'ES',
 'Poeta y escritor romántico español, figura cumbre del romanticismo tardío. Conocido especialmente por sus Rimas, de temática amorosa y melancólica, y sus Leyendas, narraciones fantásticas de gran belleza literaria.'),

('a0000001-0000-0000-0000-000000000034', 'Sayaka', 'Murata', '1979-08-14', NULL, 1, 'JP',
 'Escritora japonesa conocida por Convenience Store Woman (2016), novela que explora las expectativas sociales en Japón. Ganó el Premio Akutagawa en 2016. Su obra destaca por protagonistas femeninas que desafían las normas sociales.'),

('a0000001-0000-0000-0000-000000000035', 'Ernest', 'Cline', '1972-03-29', NULL, 1, 'US',
 'Escritor y guionista estadounidense. Conocido por Ready Player One (2011), novela de ciencia ficción que rinde homenaje a la cultura pop de los años 80. La novela fue adaptada al cine por Steven Spielberg en 2018.'),

('a0000001-0000-0000-0000-000000000036', 'Piper', 'C.J.', NULL, NULL, 1, 'US',
 'Autora estadounidense de fantasía. Conocida por la serie The Night and Its Moon (La Noche y su Luna), una saga de alta fantasía con temas de magia y destino.'),

('a0000001-0000-0000-0000-000000000037', 'Alena', 'Pons', NULL, NULL, 1, 'ES',
 'Autora española de literatura fantástica. Conocida por Hielo y Plata, novela de fantasía publicada por Blackie Books.'),

('a0000001-0000-0000-0000-000000000038', 'Alfonso R.', 'Castelao', '1886-01-29', '1950-01-07', 0, 'ES',
 'Escritor, ilustrador y político gallego, figura fundamental del galleguismo. Autor de Os Dous de Sempre y de los álbumes de dibujos Cousas e Nós. Está considerado el padre de la identidad cultural gallega moderna.'),

('a0000001-0000-0000-0000-000000000039', 'Xavier', 'Alcalá', '1947-05-23', NULL, 1, 'ES',
 'Escritor gallego de narrativa. Autor de A Nosa Cinza, novela publicada por Galaxia, entre otras obras en lengua gallega.'),

('a0000001-0000-0000-0000-000000000040', 'Atsuko', 'Asano', '1961-07-22', NULL, 1, 'JP',
 'Escritora japonesa de ciencia ficción y fantasía. Conocida por la serie de novelas No. 6, una distopía ambientada en un futuro cercano que explora temas como la justicia social y la identidad.'),

('a0000001-0000-0000-0000-000000000041', 'Mo Xiang Tong', 'Xiu', NULL, NULL, 1, 'CN',
 'Autora china de novelas danmei (romance masculino). Conocida por Heaven Official\'s Blessing (Tian Guan Ci Fu) y The Grandmaster of Demonic Cultivation (Mo Dao Zu Shi). Sus obras han generado adaptaciones en anime, manhwa y series de televisión con enorme popularidad global.'),

('a0000001-0000-0000-0000-000000000042', 'Rou Bao Bu', 'Chi Rou', NULL, NULL, 1, 'CN',
 'Autora china de novelas danmei. Conocida por Remnants of Filth (YUWU) y The Husky and His White Cat Shizun (Erha He Ta de Bai Mao Shizun). Sus historias combinan fantasía wuxia con narrativa romántica de gran profundidad emocional.'),

('a0000001-0000-0000-0000-000000000043', 'Nekojitablog', NULL, NULL, NULL, 1, 'JP',
 'Autor japonés conocido por el libro de viajes y cultura japonesa Japón con Jamón, publicado originalmente como blog y luego editado por Norma Editorial en España.'),

('a0000001-0000-0000-0000-000000000044', 'Yoko', 'Nakazawa', NULL, NULL, 1, 'JP',
 'Autora y profesora de japonés. Conocida por su manual de aprendizaje KOI: Manual Básico de Japonés, publicado por Satori Ediciones.'),

('a0000001-0000-0000-0000-000000000045', 'Takeshi', 'Hirano', NULL, NULL, 1, 'JP',
 'Autor especializado en cultura y lengua japonesa. Conocido por los libros Sugoi: Japonés para Viajeros y Kanjiru: La Magia de los Kanji, publicados por Satori Ediciones.'),

('a0000001-0000-0000-0000-000000000046', 'Edgar Allan', 'Poe', '1809-01-19', '1849-10-07', 0, 'US',
 'Escritor, poeta y crítico literario estadounidense, uno de los maestros del cuento de terror y la narrativa de suspense. Creador del género del relato policial moderno con el personaje del detective Auguste Dupin. Autor de El Cuervo, El Corazón Delator y La Caída de la Casa Usher.'),

('a0000001-0000-0000-0000-000000000047', 'Fiódor', 'Dostoyevski', '1821-11-11', '1881-02-09', 0, 'RU',
 'Novelista y filósofo ruso, uno de los más influyentes de la literatura universal. Autor de Crimen y Castigo, El Idiota, Los Hermanos Karamázov y otras obras que exploran la psicología humana, la culpa y la redención. Su prosa intensa y sus personajes torturados lo convirtieron en referente del existencialismo.'),

('a0000001-0000-0000-0000-000000000048', 'Antoine de', 'Saint-Exupéry', '1900-06-29', '1944-07-31', 0, 'FR',
 'Escritor, poeta y aviador francés. Conocido mundialmente por El Principito (1943), una de las obras más traducidas de la historia. También escribió Vol de Nuit y Tierra de Hombres. Desapareció en misión de reconocimiento durante la Segunda Guerra Mundial.'),

('a0000001-0000-0000-0000-000000000049', 'George', 'Orwell', '1903-06-25', '1950-01-21', 0, 'GB',
 'Escritor y periodista inglés. Conocido por sus novelas distópicas 1984 y Rebelión en la Granja, críticas al totalitarismo. Su nombre real era Eric Arthur Blair. Luchó en la Guerra Civil española y sus experiencias influyeron profundamente en su obra.'),

('a0000001-0000-0000-0000-000000000050', 'Miguel de', 'Cervantes', '1547-09-29', '1616-04-22', 0, 'ES',
 'Escritor español del Siglo de Oro, autor de Don Quijote de la Mancha, considerada la primera novela moderna y una de las más importantes de la literatura universal. También escribió la colección de relatos Novelas Ejemplares y varias obras de teatro.'),

('a0000001-0000-0000-0000-000000000051', 'Julio', 'Verne', '1828-02-08', '1905-03-24', 0, 'FR',
 'Escritor francés, uno de los padres de la ciencia ficción. Autor de Viaje al Centro de la Tierra, Veinte Mil Leguas de Viaje Submarino, La Vuelta al Mundo en Ochenta Días y otras obras de aventura científica que anticiparon muchos avances tecnológicos del siglo XX.'),

('a0000001-0000-0000-0000-000000000052', 'Ernest', 'Hemingway', '1899-07-21', '1961-07-02', 0, 'US',
 'Novelista y cuentista estadounidense, Premio Nobel de Literatura 1954. Conocido por El Viejo y el Mar, Por Quién Doblan las Campanas y Fiesta. Su estilo austero y directo, el llamado estilo de iceberg, influyó enormemente en la narrativa del siglo XX.'),

('a0000001-0000-0000-0000-000000000053', 'Anthony', 'Doerr', '1973-10-27', NULL, 1, 'US',
 'Escritor estadounidense ganador del Premio Pulitzer de Ficción en 2015 por La Luz que no Puedes Ver. La novela, ambientada en la Segunda Guerra Mundial, recibió elogios generalizados por su prosa poética y su estructura narrativa.'),

('a0000001-0000-0000-0000-000000000054', 'David B.', 'Gil', NULL, NULL, 1, 'ES',
 'Escritor español de novela histórica ambientada en el Japón feudal. Conocido por la trilogía El Arte de la Prudencia: El Guerrero a la Sombra del Cerezo, Forjada en la Tormenta y Ocho Millones de Dioses.'),

('a0000001-0000-0000-0000-000000000055', 'Makoto', 'Shinkai', '1973-02-09', NULL, 1, 'JP',
 'Director de anime y escritor japonés. Conocido por las películas Your Name (Kimi no Na wa), El Jardín de las Palabras y Weathering With You. La novela de Your Name está basada en su propia película.'),

('a0000001-0000-0000-0000-000000000056', 'Tom', 'Felton', '1987-09-22', NULL, 1, 'GB',
 'Actor y músico británico conocido por interpretar a Draco Malfoy en la saga Harry Potter. Beyond the Wand es su memorias publicadas en 2022, donde relata su experiencia en la franquicia y su vida personal.'),

('a0000001-0000-0000-0000-000000000057', 'Álvaro', 'López', NULL, NULL, 1, 'ES',
 'Escritor y divulgador español de cultura japonesa. Coautor junto a Marta García del libro Mi Vecino Miyazaki, sobre la filmografía del estudio Ghibli.'),

('a0000001-0000-0000-0000-000000000058', 'Marta', 'García', NULL, NULL, 1, 'ES',
 'Escritora y divulgadora española de cultura japonesa. Coautora junto a Álvaro López del libro Mi Vecino Miyazaki.'),

('a0000001-0000-0000-0000-000000000059', 'Meng Xi', 'Shi', NULL, NULL, 1, 'CN',
 'Autora china de novela danmei. Conocida por la saga Thousand Autumns (Qian Qiu), una historia de amor y fantasía wuxia publicada en inglés por Seven Seas Entertainment.'),

('a0000001-0000-0000-0000-000000000060', 'priest', NULL, NULL, NULL, 1, 'CN',
 'Autora china conocida por el seudónimo priest. Autora de Guardian (Zhen Hun), una novela de ciencia ficción y fantasía con elementos de comedia bromance, adaptada a serie de televisión de gran éxito en China.'),

('a0000001-0000-0000-0000-000000000061', 'Tang Jiu', 'Qing', NULL, NULL, 1, 'CN',
 'Autora china de novela danmei. Conocida por Ballad of Sword and Wine (Qiang Jin Jiu), una saga histórica fantástica ambientada en una China imperial ficticia.'),

('a0000001-0000-0000-0000-000000000062', 'Kafka', 'Asagiri', '1981-01-05', NULL, 1, 'JP',
 'Escritor japonés de light novels. Conocido como el guionista de Bungo Stray Dogs, así como autor de las novelas ligeras de la misma franquicia. Los personajes de la obra están basados en escritores japoneses reales de la era Meiji y Taisho.'),

('a0000001-0000-0000-0000-000000000063', 'Haruki', 'Murakami', '1949-01-12', NULL, 1, 'JP',
 'Escritor japonés, uno de los más reconocidos de la literatura contemporánea mundial. Sus novelas, como Norwegian Wood, Kafka en la Orilla y 1Q84, mezclan realismo mágico con referencias a la cultura pop occidental. Ha sido candidato reiteradamente al Premio Nobel de Literatura.'),

('a0000001-0000-0000-0000-000000000064', 'Akutagawa', 'Ryunosuke', '1892-03-01', '1927-07-24', 0, 'JP',
 'Escritor japonés, considerado el padre del cuento corto moderno japonés. Autor de Rashomon y En el Bosque. El prestigioso Premio Akutagawa, el más importante de la literatura japonesa, lleva su nombre. Murió a los 35 años por sobredosis voluntaria.'),

('a0000001-0000-0000-0000-000000000065', 'Natsume', 'Soseki', '1867-02-09', '1916-12-09', 0, 'JP',
 'Novelista japonés de la era Meiji, considerado el escritor moderno más importante de Japón. Autor de Kokoro, Soy un Gato y El Guardián de los Sueños. Sus obras exploran la tensión entre la tradición japonesa y la modernidad occidental. Su imagen aparece en el billete de 1000 yenes.'),

('a0000001-0000-0000-0000-000000000066', 'Wayne G.', 'Hammond', NULL, NULL, 1, 'US',
 'Erudito tolkienista estadounidense. Coautor junto a Christina Scull de El Señor de los Anillos: Guía del Lector y otras obras de referencia sobre Tolkien.'),

('a0000001-0000-0000-0000-000000000067', 'Christina', 'Scull', NULL, NULL, 1, 'GB',
 'Erudita tolkienista británica. Coautora junto a Wayne G. Hammond de El Señor de los Anillos: Guía del Lector y otras obras de referencia sobre Tolkien.'),

('a0000001-0000-0000-0000-000000000068', 'Osamu', 'Dazai', '1909-06-19', '1948-06-13', 0, 'JP',
 'Escritor japonés de la era Showa, figura del movimiento literario Buraiha. Conocido por Indigno de Ser Humano, su obra más autobiográfica. Su vida estuvo marcada por el alcoholismo, los intentos de suicidio y la bohemia literaria. Murió ahogado en el río Tamagawa.'),

('a0000001-0000-0000-0000-000000000069', 'Chuuya', 'Nakahara', '1907-04-29', '1937-10-22', 0, 'JP',
 'Poeta japonés de la era Taisho y Showa, representante del dadaísmo y el surrealismo en Japón. Conocido por sus poemas melancólicos y apasionados. Murió joven, a los 30 años, a causa de la meningitis, posiblemente agravada por el alcoholismo.'),

('a0000001-0000-0000-0000-000000000070', 'Izumi', 'Kyoka', '1873-11-04', '1939-09-07', 0, 'JP',
 'Escritor japonés de la era Meiji y Taisho, conocido por sus obras de lo sobrenatural y el romanticismo gótico. Autor de El Santo del Monte Koya y Sobre el Dragón del Abismo. Su estilo lírico e imaginativo influyó en generaciones de escritores japoneses.'),

('a0000001-0000-0000-0000-000000000071', 'Tayama', 'Katai', '1871-12-22', '1930-05-13', 0, 'JP',
 'Escritor japonés, figura clave del naturalismo literario en Japón. Autor de El Futón (Futon, 1907), considerada una de las primeras novelas naturalistas japonesas modernas.'),

('a0000001-0000-0000-0000-000000000072', 'Oda', 'Sakunosuke', '1913-10-26', '1947-01-10', 0, 'JP',
 'Escritor japonés de la era Showa, miembro del movimiento Buraiha junto a Osamu Dazai. Conocido por El Signo de los Tiempos y otras obras que retratan la vida en Osaka.'),

('a0000001-0000-0000-0000-000000000073', 'Sakaguchi', 'Ango', '1906-10-20', '1955-02-17', 0, 'JP',
 'Escritor japonés de la era Showa, miembro del movimiento Buraiha. Conocido por Sobre la Decadencia, ensayo filosófico que reflexiona sobre la moralidad y la naturaleza humana tras la Segunda Guerra Mundial.'),

('a0000001-0000-0000-0000-000000000074', 'Edogawa', 'Ranpo', '1894-10-21', '1965-07-28', 0, 'JP',
 'Escritor japonés considerado el padre de la ficción de misterio y detectives en Japón. Su seudónimo es una adaptación fonética de Edgar Allan Poe. Creador del detective Kogoro Akechi.'),

('a0000001-0000-0000-0000-000000000075', 'Kunikida', 'Doppo', '1871-08-30', '1908-06-23', 0, 'JP',
 'Escritor japonés de la era Meiji, precursor del naturalismo literario en Japón. Autor de Musashino, una obra contemplativa sobre la naturaleza en los alrededores de Tokio.'),

('a0000001-0000-0000-0000-000000000076', 'Miyazawa', 'Kenji', '1896-08-27', '1933-09-21', 0, 'JP',
 'Escritor y poeta japonés de la era Taisho. Conocido por El Tren Nocturno de la Vía Láctea y La Historia del Restaurante de Muchas Órdenes. Sus obras mezclan fantasía, budismo y amor a la naturaleza.'),

('a0000001-0000-0000-0000-000000000077', 'Mori', 'Ogai', '1862-02-17', '1922-07-09', 0, 'JP',
 'Médico y escritor japonés de la era Meiji y Taisho, figura fundamental de la literatura japonesa moderna. Autor de Juventud y La Danzarina. Fue médico jefe del ejército japonés y traductor de literatura occidental.'),

('a0000001-0000-0000-0000-000000000078', 'Akiko', 'Yosano', '1878-12-07', '1942-05-29', 0, 'JP',
 'Poeta y escritora japonesa de la era Meiji, pionera del feminismo literario en Japón. Conocida por su poesía apasionada y sensual en la tradición tanka. También escribió novelas y ensayos de temática social y feminista.'),

('a0000001-0000-0000-0000-000000000079', 'Juniichiro', 'Tanizaki', '1886-07-24', '1965-07-30', 0, 'JP',
 'Escritor japonés de la era Meiji a Showa, considerado uno de los más importantes de la literatura japonesa. Autor de El Elogio de la Sombra, La Llave y La Hermana Mayor. Sus obras exploran la estética japonesa, la sensualidad y la tensión entre tradición y modernidad.'),

('a0000001-0000-0000-0000-000000000080', 'Higuchi', 'Ichiyo', '1872-05-02', '1896-11-23', 0, 'JP',
 'Escritora japonesa de la era Meiji, primera mujer escritora profesional de Japón. Conocida por sus cuentos que retratan la vida de las clases humildes en Tokio. Su imagen aparece en el billete de 5000 yenes.'),

('a0000001-0000-0000-0000-000000000081', 'Hiro', 'Arikawa', '1972-04-26', NULL, 1, 'JP',
 'Escritora japonesa conocida por Crónicas del Gato Viajero (Tabineko Repoto), una emotiva novela sobre los viajes de un hombre y su gato. La novela fue adaptada al cine en 2018.'),

('a0000001-0000-0000-0000-000000000082', 'Sanaka', 'Hiiragi', NULL, NULL, 1, 'JP',
 'Autora japonesa de ficción contemporánea. Conocida por El Pequeño Estudio de los Recuerdos Perdidos, novela publicada en España por Grijalbo.'),

('a0000001-0000-0000-0000-000000000083', 'Hiromi', 'Kawakami', '1958-04-01', NULL, 1, 'JP',
 'Escritora japonesa ganadora del Premio Akutagawa. Conocida por De Pronto Oigo la Voz del Agua y El Cielo es Azul, la Tierra Blanca. Sus obras exploran las relaciones humanas con sutileza y sensibilidad.'),

('a0000001-0000-0000-0000-000000000084', 'Genzaburo', 'Yoshino', '1899-09-22', '1981-05-23', 0, 'JP',
 'Escritor y editor japonés. Autor de ¿Cómo vives? (Kimi-tachi wa Dou Ikiru ka), novela filosófica para jóvenes publicada en 1937. La obra inspiró a Hayao Miyazaki para su película homónima de 2023.'),

('a0000001-0000-0000-0000-000000000085', 'Hideo', 'Yokoyama', '1957-04-12', NULL, 1, 'JP',
 'Escritor japonés ex periodista. Conocido por La Luz del Norte (Hokusen), una novela histórica y de misterio. También es autor de Seis Cuatro, un thriller policiaco de enorme éxito en Japón.'),

('a0000001-0000-0000-0000-000000000086', 'Seicho', 'Matsumoto', '1909-12-21', '1992-08-04', 0, 'JP',
 'Escritor japonés de novela negra, considerado uno de los maestros del thriller social japonés. Ganador del Premio Akutagawa. Sus novelas exploran la corrupción, la burocracia y las tensiones sociales en el Japón de posguerra.'),

('a0000001-0000-0000-0000-000000000087', 'Toshikazu', 'Kawaguchi', '1971-01-01', NULL, 1, 'JP',
 'Escritor y dramaturgo japonés. Conocido por la serie Antes de que se Enfríe el Café, inspirada en su propia obra de teatro. Las novelas, de tono mágico y emocional, transcurren en una cafetería donde es posible viajar en el tiempo.'),

('a0000001-0000-0000-0000-000000000088', 'Sosuke', 'Natsukawa', '1988-01-01', NULL, 1, 'JP',
 'Escritor japonés conocido por El Gato que Amaba los Libros (Neko to Gomi no Michishirube), una emotiva fábula sobre la literatura y la espiritualidad.'),

('a0000001-0000-0000-0000-000000000089', 'Hisashi', 'Kashiwai', NULL, NULL, 1, 'JP',
 'Escritor japonés de ficción gastronómica y de misterio. Autor de Los Misterios de la Taberna Kamogawa, una serie de relatos donde la comida y la memoria se entrelazan.'),

('a0000001-0000-0000-0000-000000000090', 'Satoshi', 'Yagisawa', NULL, NULL, 1, 'JP',
 'Escritor japonés. Autor de la serie La Librería Morisaki, que incluye Mis Días en la Librería Morisaki y Una Velada en la Librería Morisaki. Novelas ligeras y emotivas ambientadas en el barrio libresco de Jimbocho en Tokio.'),

('a0000001-0000-0000-0000-000000000091', 'Teru', 'Miyamoto', '1947-03-06', NULL, 1, 'JP',
 'Escritor japonés ganador del Premio Akutagawa. Conocido por Los Sueños de la Primavera y otras novelas que exploran las relaciones humanas y el dolor de vivir.'),

('a0000001-0000-0000-0000-000000000092', 'Yuko', 'Tsushima', '1947-03-30', '2016-02-18', 0, 'JP',
 'Novelista japonesa, hija del escritor Osamu Dazai. Conocida por Territorio de Luz, novela sobre una madre soltera en el Tokio de los 70. Ganó el Premio Tanizaki entre otros reconocimientos.'),

('a0000001-0000-0000-0000-000000000093', 'Alex', 'Pler', NULL, NULL, 1, 'ES',
 'Escritor y divulgador español especializado en cultura japonesa. Autor de El Lenguaje de las Flores y Shiawase-do, publicados por Satori Ediciones.'),

('a0000001-0000-0000-0000-000000000094', 'Lafcadio', 'Hearn', '1850-06-27', '1904-09-26', 0, 'GR',
 'Escritor de origen grecirlandés, nacionalizado japonés como Koizumi Yakumo. Conocido por sus recopilaciones de leyendas y cuentos japoneses, entre ellas Kwaidan y Kokoro. Vivió en Japón desde 1890 y fue uno de los primeros divulgadores de la cultura japonesa en Occidente.'),

('a0000001-0000-0000-0000-000000000095', 'Frederick Hadland', 'Davis', NULL, NULL, 0, 'GB',
 'Autor y orientalista británico del siglo XIX. Conocido por Mitos y Leyendas de Japón, una recopilación de folclore y mitología japonesa publicada a principios del siglo XX.'),

('a0000001-0000-0000-0000-000000000096', 'Richard Gordon', 'Smith', '1858-01-01', '1918-01-01', 0, 'GB',
 'Naturalista y escritor británico. Autor de Cuentos Tradicionales de Japón, una recopilación de historias folclóricas recopiladas durante sus años de estancia en Japón a finales del siglo XIX.'),

('a0000001-0000-0000-0000-000000000097', 'Inazo', 'Nitobe', '1862-09-01', '1933-10-15', 0, 'JP',
 'Educador, agricultor y diplomático japonés. Autor de El Bushido: El Código del Samurai (1900), obra que introdujo en Occidente el concepto del bushido como código ético del guerrero japonés.'),

-- ---- AUTORES DE MANGA ----

('a0000001-0000-0000-0000-000000000101', 'Hinoki', 'Kino', NULL, NULL, 1, 'JP',
 'Mangaka japonesa. Dibujante del manga No. 6, adaptación de la serie de novelas de Atsuko Asano.'),

('a0000001-0000-0000-0000-000000000102', 'Arina', 'Tanemura', '1978-03-09', NULL, 1, 'JP',
 'Mangaka japonesa conocida por Full Moon o Sagashite, Kamikaze Kaitou Jeanne y la adaptación del manga IDOLiSH7 - Re:member. Su estilo shojo es reconocible por sus diseños detallados y tramas románticas.'),

('a0000001-0000-0000-0000-000000000103', 'Bunta', 'Tsushimi', NULL, NULL, 1, 'JP',
 'Escritor japonés, guionista del juego y las novelas de IDOLiSH7, una franquicia de música y drama de idols masculinos.'),

('a0000001-0000-0000-0000-000000000104', 'Inio', 'Asano', '1980-09-22', NULL, 1, 'JP',
 'Mangaka japonés conocido por sus obras de ficción contemporánea como Solanin, Buen Augurio y Punpun. Sus trabajos exploran la alienación, la búsqueda de identidad y la vida adulta joven en el Japón moderno.'),

('a0000001-0000-0000-0000-000000000105', 'Jun', 'Mochizuki', '1981-12-08', NULL, 1, 'JP',
 'Mangaka japonesa conocida por Pandora Hearts y Los Apuntes de Vánitas. Sus obras se caracterizan por tramas intrincadas llenas de giros argumentales, diseños elaborados y personajes con profundidad emocional.'),

('a0000001-0000-0000-0000-000000000106', 'Kanna', 'Kii', NULL, NULL, 1, 'JP',
 'Mangaka japonesa especializada en manga BL (Boys Love). Conocida por Qualia bajo la Nieve, Aunque no Pueda Hacer Magia y la serie Un Extraño a la Orilla del Mar. Sus obras se distinguen por su sensibilidad emocional y dibujo delicado.'),

('a0000001-0000-0000-0000-000000000107', 'Akimi', 'Yoshida', '1956-10-06', NULL, 1, 'JP',
 'Mangaka japonesa. Autora de Banana Fish, una obra de acción dramática ambientada en el mundo criminal de Nueva York publicada entre 1985 y 1994. Considerada una de las obras más importantes del manga dirigido a mujeres jóvenes.'),

('a0000001-0000-0000-0000-000000000108', 'Tsugumi', 'Ohba', NULL, NULL, 1, 'JP',
 'Mangaka japonés, seudónimo de un autor cuya identidad real no es pública. Guionista de Death Note y Bakuman, ambas con dibujos de Takeshi Obata. Sus obras destacan por sus intrincadas tramas psicológicas y sus moralmente complejos protagonistas.'),

('a0000001-0000-0000-0000-000000000109', 'Takeshi', 'Obata', '1969-02-11', NULL, 1, 'JP',
 'Mangaka japonés reconocido por su ilustración detallada y dinámica. Dibujante de Death Note, Bakuman y Hikaru no Go, todas en colaboración con Tsugumi Ohba. Ha ganado el Premio Shogakukan de Manga.'),

('a0000001-0000-0000-0000-000000000110', 'Atsushi', 'Ohkubo', '1979-07-11', NULL, 1, 'JP',
 'Mangaka japonés. Creador y autor de Soul Eater, serializado en la revista Monthly Shonen Gangan de Square Enix entre 2004 y 2013. También es el autor de Fire Force (Enen no Shouboutai).'),

('a0000001-0000-0000-0000-000000000111', 'Satoru', 'Nii', NULL, NULL, 1, 'JP',
 'Mangaka japonés. Creador de Wind Breaker, manga de acción publicado en la revista Magazine Pocket de Kodansha. También es autor del manga Weak Hero.'),

('a0000001-0000-0000-0000-000000000112', 'Natsuki', 'Kizu', NULL, NULL, 1, 'JP',
 'Mangaka japonesa especializada en manga BL. Conocida por Given, una historia sobre música y amor entre jóvenes que fue adaptada al anime y a una película. Su estilo de dibujo es expresivo y sus tramas emotivas.'),

('a0000001-0000-0000-0000-000000000113', 'Nagisa', 'Furuya', NULL, NULL, 1, 'JP',
 'Mangaka japonesa. Autora de You Are in the Blue Summer, manga publicado en España por Milky Way Ediciones.'),

('a0000001-0000-0000-0000-000000000114', 'Hagi', NULL, NULL, NULL, 1, 'JP',
 'Mangaka japonesa. Autora de Algo entre Nosotros y El Dios y el Mensajero Incapaz de Volar, mangas de romance publicados por Milky Way Ediciones.'),

('a0000001-0000-0000-0000-000000000115', 'Li', 'Haoling', NULL, NULL, 1, 'CN',
 'Autor y animador chino. Creador de Link Click (Shiguang Dailiren), un manhua de ciencia ficción y viajes en el tiempo que fue adaptado a una serie de anime de gran éxito.'),

('a0000001-0000-0000-0000-000000000116', 'Yuki', 'Fumino', NULL, NULL, 1, 'JP',
 'Mangaka japonesa especializada en manga BL. Conocida por Puedo Oír el Sol (Hibi Chouchou), una emotiva historia de amor y música.'),

('a0000001-0000-0000-0000-000000000117', 'Asumiko', 'Nakamura', '1980-07-07', NULL, 1, 'JP',
 'Mangaka japonesa de manga BL y josei. Conocida por Doukyuusei (En la Misma Clase), Antiguos Alumnos y otras obras de romance de gran sensibilidad. Su estilo artístico único combina líneas gestuales con profundidad emocional.'),

('a0000001-0000-0000-0000-000000000118', 'Venio', 'Tachibana', NULL, NULL, 1, 'JP',
 'Mangaka japonesa. Autora de Seven Days, manga BL de una semana de noviazgo escolar. La obra destaca por su narrativa sencilla y su profundidad emocional.'),

('a0000001-0000-0000-0000-000000000119', 'Bikke', NULL, NULL, NULL, 1, 'JP',
 'Mangaka japonesa. Autora de Senpai, manga BL publicado en España por Tomodomo.'),

('a0000001-0000-0000-0000-000000000120', 'Peyo', NULL, NULL, NULL, 1, 'JP',
 'Mangaka japonés. Autor de Boy Meets Maria, manga de drama escolar publicado en España por Milky Way Ediciones.'),

('a0000001-0000-0000-0000-000000000121', 'Adachitoka', NULL, NULL, NULL, 1, 'JP',
 'Dúo de mangakas japonesas. Creadoras de Noragami, manga de acción y mitología publicado en la revista Monthly Shonen Magazine de Kodansha. La obra fue adaptada a serie de anime.'),

('a0000001-0000-0000-0000-000000000122', 'Hiromu', 'Arakawa', '1973-05-08', NULL, 1, 'JP',
 'Mangaka japonesa originaria de Hokkaido. Creadora de Fullmetal Alchemist, una de las series de manga más aclamadas de la historia. También es autora de Silver Spoon y Heroic Legend of Arslan.'),

('a0000001-0000-0000-0000-000000000123', 'Kamome', 'Shirahama', NULL, NULL, 1, 'JP',
 'Mangaka japonesa. Autora de Atelier of Witch Hat, manga de fantasía de gran éxito sobre una joven aprendiz de bruja. Ha recibido múltiples premios y es reconocida por la exquisita calidad de su dibujo.'),

('a0000001-0000-0000-0000-000000000124', 'Sango', 'Harukawa', NULL, NULL, 1, 'JP',
 'Mangaka japonesa. Dibujante del manga Bungo Stray Dogs, basado en el guión de Kafka Asagiri.'),

('a0000001-0000-0000-0000-000000000125', 'Steven', 'Moffat', '1961-11-18', NULL, 1, 'GB',
 'Guionista y productor televisivo británico. Conocido por ser showrunner de las series Sherlock y Doctor Who. Coguionista del manga adaptación de la serie Sherlock.'),

('a0000001-0000-0000-0000-000000000126', 'Mark', 'Gatiss', '1966-10-17', NULL, 1, 'GB',
 'Guionista, actor y productor televisivo británico. Cocreador junto a Steven Moffat de la serie Sherlock. Coguionista del manga adaptación de la serie.'),

('a0000001-0000-0000-0000-000000000127', 'Jay', NULL, NULL, NULL, 1, 'JP',
 'Mangaka japonés. Dibujante de la adaptación a manga de la serie británica Sherlock, publicada por Norma Editorial en España.'),

-- Artbook Genshin Impact
('a0000001-0000-0000-0000-000000000128', 'miHoYo', 'HoYoverse', NULL, NULL, 1, 'CN',
 'Empresa desarrolladora de videojuegos china creadora de Genshin Impact y otras franquicias. Los artbooks de Genshin Impact recogen el arte conceptual oficial del videojuego de rol de acción.'),

-- Novelas Bungo Stray Dogs restantes (autores históricos que no son del manga)
('a0000001-0000-0000-0000-000000000129', 'Kyota', 'Ko', NULL, NULL, 1, 'JP',
 'Autor japonés. Compilador de Folk Tales of Japan, una colección de cuentos populares japoneses en lengua inglesa.');

