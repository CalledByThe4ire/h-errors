Файловая система должна корректно обрабатывать пустые пути, делая внутри нормализацию. То есть, если ей передать путь `///etc/config//my///`, то он транслируется в `/etc/config/my`.

### HexletFs.js

Реализуйте следующие части интерфейса типа `HexletFs`.

-   `isDirectory(path)`
-   `isFile(path)`
-   `mkdirSync(path)`

-   `touchSync(path)` - создает пустой файл. На самом деле, в реальной файловой системе, команда `touch` меняет время последнего обращения к файлу, а побочным эффектом этой команды является создание файла в случае его отсутствия. По этой причине данной командой часто пользуются для создания файлов.

Пример:

```
files.isDirectory('/etc'); // false

files.mkdirSync('/etc');
files.isDirectory('/etc'); // true

files.mkdirSync('/etc/nginx');
files.isDirectory('/etc/nginx'); // true

files.isFile('/file.txt'); // false

files.touchSync('/file.txt');
files.isFile('/file.txt'); // true

```

### Подсказки

-   Реализуйте функцию `getPathParts`, которая разбивает путь на массив имен. Без этой функции не будет работать метод `findNode`, осуществляющий глубокий поиск файла (каталога) внутри текущего каталога.
-   Для работы с путями используйте возможности [встроенного в Node.js](https://nodejs.org/api/) модуля `Path`. Конкретно вам понадобятся [parse](https://nodejs.org/api/path.html#path_path_parse_path) и [sep](https://nodejs.org/api/path.html#path_path_sep)