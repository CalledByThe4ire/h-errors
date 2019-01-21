class Tree {
  constructor(key, meta, parent) {
    this.parent = parent;
    this.key = key;
    this.meta = meta;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  addChild(key, meta) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);

    return child;
  }

  getChild(key) {
    return this.children.get(key);
  }

  // BEGIN (write your solution here)
  hasChildren() {
    return this.children.size !== 0;
  }

  hasChild(key) {
    return this.children.has(key);
  }

  getParent() {
    return this.parent;
  }

  removeChild(key) {
    return this.children.delete(key);
  }

  getDeepChild(keys) {
    if (!keys.length) {
      return null;
    }

    const [key] = keys;
    const child = this.getChild(key);

    if (keys.length === 1) {
      return child;
    }

    if (!child) {
      return null;
    }
    return child.getDeepChild(keys.slice(1));
  }

  getChildren() {
    const children = [];
    const values = this.children.values();
    Array.from(values).forEach(value => children.push(value));
    return children;
  }
  // END
}

export default Tree;
