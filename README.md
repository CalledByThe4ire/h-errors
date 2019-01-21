### Tree.js

Реализуйте недостающие части интерфейса типа `Tree`.

-   `hasChildren()`
-   `hasChild(key)`
-   `getParent()`
-   `removeChild(key)`
-   `getDeepChild(keys)`. Функция возвращает `null` если узел не найден или был передан пустой массив.
-   `getChildren()`

```
tree = new Tree('/');
tree.addChild('var')
  .addChild('lib')
  .addChild('run');
tree.addChild('etc');
tree.addChild('home');

// example: getDeepChild
const subtree = tree.getDeepChild(['var', 'lib']);
subtree.getKey(); // lib

tree.getDeepChild(['var', 'nobody']); // null

const parent = subtree.getParent();
parent.getKey(); // var

tree.removeChild('home'); // true
tree.removeChild('nonexistentNode'); // false

```

### Подсказки

-   метод `getChildren` возвращает массив нод