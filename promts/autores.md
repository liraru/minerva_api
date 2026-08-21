Actúa como un experto en bases de datos MySQL. Necesito que generes una sentencia INSERT INTO basada en una lista de autores que te proporcionaré al final.

Por favor, sigue estrictamente las siguientes reglas de formato y negocio:
1. Tabla y Campos: La estructura de la tabla debe mapear exactamente estos campos: (id, name, lastname, birthdate, deceasedDate, active, countryId, biography).
2. Generación de ID: Utiliza la función nativa `UUID()` de MySQL para el campo 'id'.
3. Formato de Fechas: Los campos 'birthdate' y 'deceasedDate' deben ser texto en formato estricto 'yyyy-MM-dd'. Si el autor sigue vivo, 'deceasedDate' debe ser NULL. Si de algún autor solo se conoce el año de nacimiento, normalízalo al 1 de enero de ese año (ej. '1975-01-01').
4. Borrado Lógico: El campo 'active' (tinyint) siempre debe tener el valor 1.
5. Biografía Curada: Investiga y redacta una pequeña biografía para el campo 'biography' que resuma la obra del autor, asegurándote estrictamente de que NO supere los 255 caracteres de longitud.
6. Código de País (countryId): Investiga la nacionalidad del autor y asígnale su código ISO de 3 letras basándote ÚNICAMENTE en este diccionario/mapeo (si no está en la lista, usa el sentido común para su código ISO de 3 letras):
[
  { "code": "AFG", "name": "Afganistán" }, { "code": "AGO", "name": "Angola" }, { "code": "ARE", "name": "Emiratos Árabes Unidos" },
  { "code": "AUS", "name": "Australia" }, { "code": "AUT", "name": "Austria" }, { "code": "AZE", "name": "Azerbaiyán" },
  { "code": "BDI", "name": "Burundi" }, { "code": "BEL", "name": "Bélgica" }, { "code": "BEN", "name": "Benín" },
  { "code": "BFA", "name": "Burkina Faso" }, { "code": "BGD", "name": "Bangladés" }, { "code": "BGR", "name": "Bulgaria" },
  { "code": "BLR", "name": "Bielorrusia" }, { "code": "BOL", "name": "Bolivia" }, { "code": "BRA", "name": "Brasil" },
  { "code": "CAN", "name": "Canadá" }, { "code": "CHE", "name": "Suiza" }, { "code": "CHL", "name": "Chile" },
  { "code": "CHN", "name": "China" }, { "code": "CIV", "name": "Costa de Marfil" }, { "code": "CMR", "name": "Camerún" },
  { "code": "COD", "name": "República Democrática del Congo" }, { "code": "COL", "name": "Colombia" }, { "code": "CUB", "name": "Cuba" },
  { "code": "CZE", "name": "Chequia" }, { "code": "DEU", "name": "Alemania" }, { "code": "DOM", "name": "República Dominicana" },
  { "code": "ECU", "name": "Ecuador" }, { "code": "EGY", "name": "Egipto" }, { "code": "ESP", "name": "España" },
  { "code": "ETH", "name": "Etiopía" }, { "code": "FRA", "name": "Francia" }, { "code": "GBR", "name": "Reino Unido" },
  { "code": "GHA", "name": "Ghana" }, { "code": "GIN", "name": "Guinea" }, { "code": "GNB", "name": "Guinea-Bisáu" },
  { "code": "GRC", "name": "Grecia" }, { "code": "GTM", "name": "Guatemala" }, { "code": "HKG", "name": "Hong Kong" },
  { "code": "HND", "name": "Honduras" }, { "code": "HTI", "name": "Haití" }, { "code": "HUN", "name": "Hungría" },
  { "code": "IDN", "name": "Indonesia" }, { "code": "IND", "name": "India" }, { "code": "IRN", "name": "Irán" },
  { "code": "IRQ", "name": "Irak" }, { "code": "ISR", "name": "Israel" }, { "code": "ITA", "name": "Italia" },
  { "code": "JOR", "name": "Jordania" }, { "code": "JPN", "name": "Japón" }, { "code": "KAZ", "name": "Kazajistán" },
  { "code": "KEN", "name": "Kenia" }, { "code": "KHM", "name": "Camboya" }, { "code": "KOR", "name": "Corea del Sur" },
  { "code": "LAO", "name": "Laos" }, { "code": "LKA", "name": "Sri Lanka" }, { "code": "MAR", "name": "Marruecos" },
  { "code": "MDG", "name": "Madagascar" }, { "code": "MEX", "name": "México" }, { "code": "MLI", "name": "Malí" },
  { "code": "MMR", "name": "Birmania" }, { "code": "MOZ", "name": "Mozambique" }, { "code": "MWI", "name": "Malaui" },
  { "code": "MYS", "name": "Malasia" }, { "code": "NGA", "name": "Nigeria" }, { "code": "NIC", "name": "Nicaragua" },
  { "code": "NIG", "name": "Níger" }, { "code": "NLD", "name": "Países Bajos" }, { "code": "NPL", "name": "Nepal" },
  { "code": "PAK", "name": "Pakistán" }, { "code": "PER", "name": "Perú" }, { "code": "PHL", "name": "Filipinas" },
  { "code": "PNG", "name": "Papúa Nueva Guinea" }, { "code": "POL", "name": "Polonia" }, { "code": "PRK", "name": "Corea del Norte" },
  { "code": "PRT", "name": "Portugal" }, { "code": "ROU", "name": "Rumanía" }, { "code": "RUS", "name": "Rusia" },
  { "code": "RWA", "name": "Ruanda" }, { "code": "SAU", "name": "Arabia Saudita" }, { "code": "SDN", "name": "Sudán" },
  { "code": "SEN", "name": "Senegal" }, { "code": "SLV", "name": "El Salvador" }, { "code": "SOM", "name": "Somalia" },
  { "code": "SRB", "name": "Serbia" }, { "code": "SWE", "name": "Suecia" }, { "code": "SYR", "name": "Siria" },
  { "code": "TCD", "name": "Chad" }, { "code": "THA", "name": "Tailandia" }, { "code": "TJK", "name": "Tayikistán" },
  { "code": "TUN", "name": "Túnez" }, { "code": "TUR", "name": "Turquía" }, { "code": "TZA", "name": "Tanzania" },
  { "code": "UGA", "name": "Uganda" }, { "code": "UKR", "name": "Ucrania" }, { "code": "USA", "name": "Estados Unidos" },
  { "code": "UZB", "name": "Uzbekistán" }, { "code": "VEN", "name": "Venezuela" }, { "code": "VNM", "name": "Vietnam" },
  { "code": "YEM", "name": "Yemen" }, { "code": "ZAF", "name": "Sudáfrica" }, { "code": "ZMB", "name": "Zambia" },
  { "code": "ZWE", "name": "Zimbabue" }
]
7. Escapado de caracteres: Asegúrate de escribir correctamente los nombres y apellidos, y de escapar las comillas simples internas (ej. de Jun'ichirō a Jun''ichirō) para que el script no falle en MySQL.

Devuelve únicamente el bloque de código SQL con la sentencia completa.

Aquí está la lista de autores a procesar:
[PEGA TU NUEVA LISTA AQUÍ]



Osamu Dazai
Chuuya Nakahara
Izumi Kyoka
Tayama Katai
Natsume Soseki
Oda Sakunosuke
Sakaguchi Ango
Akutagawa Ryunosuke
Edogawa Ranpo
Kunikida Doppo
Miyazawa Kenji
Mori Ogai
Akiko Yosano
Junichiro Tanizaki
Higuchi Ichiyo
Hiro Arikawa
Sanaka Hiiragi
Kawakami Hiromi
Genzaburo Yoshino
Hideo Yokoyama
Seicho Matsumoto
Toshikazu Kawaguchi
Sosuke Natsukawa
Hisashi Kashiwai
Satoshi Yagisawa
Teru Miyamoto
Yuko Tsushima
Alex Pler
Kyota Ko
Lafcadio Hearn
Takeshi Hirano
Mitsuru Nagata
Frederick Hadland Davis
Richard Gordon Smith
Inazo Nitobe
Arthur Conan Doyle
JK Rowling

Mo Xiang Tong Xiu
Meng Xi Shi
priest
Tang Jiu Qing
Rou Bao Bu Chi Rou