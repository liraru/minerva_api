# MINERVA — Scripts de inserción de datos maestros y catálogo
## Orden de ejecución

Los ficheros deben ejecutarse **en el orden indicado** para respetar las dependencias de claves foráneas:

| Orden | Fichero | Contenido |
|-------|---------|-----------|
| 1 | `01_authors.sql` | Maestro de autores con datos biográficos (129 registros) |
| 2 | `02_editorials.sql` | Maestro de editoriales (57 registros) |
| 3 | `03_genres.sql` | Maestro de géneros para libros y manga (32 registros) |
| 4 | `04_series.sql` | Maestro de series y sagas (38 registros) |
| 5 | `05_books_part1.sql` | Libros: autores A–R, primera parte (77 registros) |
| 6 | `06_books_part2.sql` | Libros: autores S–Z, literatura japonesa, novelas chinas, divulgación (191 registros) |
| 7 | `07_manga_part1.sql` | Manga: series 1–37 (37 registros) |
| 8 | `08_manga_part2.sql` | Manga: series 38–49 y artbooks (12 registros) |
| 9 | `09_author_relations.sql` | Relaciones N:M autor↔libro y autor↔manga |

---

## Notas de diseño

### Autores
- `name` = nombre de pila; `lastname` = apellidos, según instrucción.
- Autores de un solo nombre conocido (priest, Bikke, Hagi, Adachitoka…) usan el campo `name` únicamente.
- Autores de obras colectivas (miHoYo/HoYoverse) se registran como entidad.
- `birthdate` / `deceasedDate` en formato `YYYY-MM-DD`.
- `active = 1` vivo, `active = 0` fallecido.
- `countryId` usa código ISO 3166-1 alpha-2 (ES, JP, CN, GB, US, FR, DE, RU, GR…).

### Editoriales
- Se han separado editoriales japonesas de las españolas y anglosajonas.
- Hakusensha figura como editorial japonesa original (IDOLiSH7 Re:member JP).

### Géneros
- Rango `g…000001–000025`: géneros de libro/novela.
- Rango `g…000101–000117`: géneros de manga.
- Se distingue entre géneros demográficos japoneses (shonen, shojo, seinen, josei) y géneros de contenido.

### Series
- `volumes` = número total planificado o publicado hasta la fecha.
- `finishDate = NULL` indica que la serie continúa o está incompleta.

### Libros
- `isDigital = 0` (físico), `isDigital = 1` (ebook).
- `language` / `originalLanguage`: código ISO 639-1 (spa, en, jp, fr, de, ru, cn, gal…).
- `cover`: URL de Open Library cuando disponible sin búsqueda compleja.
- `isbn`: ISBN-13 cuando conocido con certeza.
- `ownerId` = `00000000-0000-0000-0000-000000000001` (propietario por defecto; ajustar según esquema).
- `locationId = NULL` pendiente de asignar al inventariar físicamente.

### Manga
- `status`: `'ongoing'` = en publicación, `'completed'` = terminada.
- Artbooks y libros de arte se incluyen como manga cuando la editorial es de manga.
- Ediciones especiales (kanzenban, integral, black edition) se registran como series independientes.

### Relaciones autor↔obra
- Un libro puede tener múltiples autores (ej. Harry Potter y el Legado Maldito: Rowling + Thorne + Tiffany).
- Un manga puede tener guionista y dibujante distintos (ej. Bungo Stray Dogs: Asagiri + Harukawa).
- Adaptaciones (manga de novela) incluyen tanto al autor original como al mangaka adaptador.

---

## Campos pendientes de completar tras carga

Los siguientes campos requieren confirmación manual o inventario físico:

- `locationId` en todos los libros y manga.
- `buyDate` en todos los libros (no estaba en el CSV fuente).
- `cover` en los registros sin URL (búsqueda más específica por edición).
- `isbn` en los libros marcados como NULL (ediciones sin identificar exactamente).
- `downloadLink` en registros digitales (si procede).
- `edition` cuando se trate de ediciones especiales no identificadas.
- Volúmenes sueltos de series de manga (el CSV puede registrar tomos individuales además del set).

---

## Estadísticas del volcado

| Tabla | Registros |
|-------|-----------|
| authors | 129 |
| editorials | 57 |
| genres | 32 |
| series | 38 |
| books | ~268 |
| mangas | 49 |
| book_authors | ~310 |
| manga_authors | ~70 |
| **TOTAL** | **~953** |
