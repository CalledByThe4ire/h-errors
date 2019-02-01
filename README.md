Ошибок, связанных с файловой системой, очень много, и для их ручной генерации существуют удобные библиотеки. Например, [errno](https://github.com/rvagg/node-errno). Пример использования:

```
import errors from 'errno';

errors.code.ENOTEMPTY;
// → {
//     "errno": 53,
//     "code": "ENOTEMPTY",
//     "description": "directory not empty"
//   }

```

Список ошибок можно подсмотреть тут: <https://github.com/rvagg/node-errno/blob/master/errno.js>

### HexletFs.js

Реализуйте следующие возможности файловой системы `HexletFs`:

#### `unlinkSync(path)`

Удаляет файл (в реальной фс все чуть сложнее, см. hard link).

Возможные ошибки:

-   ENOENT - файл не найден
-   EPERM - операция не разрешена. Такая ошибка возникает в случае, если `path` это директория

#### `writeFileSync(path, content)`

Записывает `content` в файл по пути `path`.

Возможные ошибки:

-   ENOENT - родительская директория, в которой нужно создать файл, не существует
-   EISDIR - `path` является директорией

#### `readFileSync(path)`

Читает содержимое файла по пути `path`.

-   ENOENT - файл не найден
-   EISDIR - `path` является директорией

### Подсказки

-   Тип `File` содержит метод `getBody`, который возвращает содержимое файла.