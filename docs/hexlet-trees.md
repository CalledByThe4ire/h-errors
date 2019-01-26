Tree
----

Class that represent an arbitary tree

Parameters

-   `key` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
-   `meta` any?
-   `parent` [Tree](https://ide-js-errors-stats-928030.exercise.hexlet.io/?#tree)?

### constructor

Constructor

Parameters

-   `key` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
-   `meta` any?
-   `parent` [Tree](https://ide-js-errors-stats-928030.exercise.hexlet.io/?#tree)?

Examples

```
const tree = new Tree('/');

```

### getKey

Get node's key

Examples

```
const tree = new Tree('/');
const node = tree.addChild('etc');
node.getKey(); // etc

```

Returns [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### getMeta

Get node's meta

Examples

```
const tree = new Tree('/', 'root directory');
tree.getMeta; // root directory

```

### addChild

Add child to node's children list

Parameters

-   `key` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
-   `meta` any?

Examples

```
const tree = new Tree('/');
const node = tree.addChild('etc', { writable: false });

```

Returns [Tree](https://ide-js-errors-stats-928030.exercise.hexlet.io/?#tree)

### hasChild

Check if node has child by key

Parameters

-   `key` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

Examples

```
const tree = new Tree('/');
tree.addChild('etc');
tree.hasChild('etc'); // true

```

Returns [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### getParent

Get node's parent node

Examples

```
const tree = new Tree('/');
const node = tree.addChild('etc');
node.getParent() === tree; // true

```

Returns [Tree](https://ide-js-errors-stats-928030.exercise.hexlet.io/?#tree)?

### removeChild

remove child from tree

Parameters

-   `key` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

Examples

```
const tree = new Tree('/');
tree.addChild('etc');
tree.removeChild('etc');
tree.hasChild('etc'); // false

```

Returns [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### hasChildren

Check if node has children

Examples

```
const tree = new Tree('/');
tree.hasChildren(); // false
tree.addChild('etc');
tree.hasChildren(); // true

```

Returns [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### getChild

Get tree's child by key

Parameters

-   `key` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

Examples

```
const tree = new Tree('/');
const node = tree.addChild('etc');
node === tree.getChild('etc'); // true

```

Returns ([Tree](https://ide-js-errors-stats-928030.exercise.hexlet.io/?#tree) | [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined))

### getDeepChild

Get tree's deep child

Parameters

-   `keys` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>

Examples

```
const tree = new Tree('/');
const etcNode tree.addChild('etc');
const libNode = tree.addChild('lib');
libNode === tree.getDeepChild(['etc', 'lib']);
etcNode === tree.getDeepChild(['etc']);
tree.getDeepChild(['etc', 'lalala']); // undefined

```

Returns ([Tree](https://ide-js-errors-stats-928030.exercise.hexlet.io/?#tree) | [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined))

### getChildren

Get node's children

Returns [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[Tree](https://ide-js-errors-stats-928030.exercise.hexlet.io/?#tree)>