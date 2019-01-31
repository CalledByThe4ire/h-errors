import path from 'path';
import Tree from 'hexlet-trees';
import { Dir, File } from 'hexlet-fs';

const getPathParts = filepath =>
  filepath.split(path.sep).filter(part => part !== '');

export default class {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  statSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      return null;
    }
    return current.getMeta().getStats();
  }

  mkdirSync(filepath) {
    const current = this.findNode(filepath);
    if (current) {
      return false;
    }
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().isFile()) {
      return false;
    }
    parent.addChild(base, new Dir(base));
    return true;
  }

  // BEGIN (write your solution here)
  mkdirpSync(filepath) {
    const result = getPathParts(filepath).reduce((subtree, part) => {
      // Проверка нужна, чтобы не начинать применять методы класса Hexlet-Tree
      // к примитивному значению false, которому будет равен subtree в случае,
      // если на предыдущей итерации нашего редьюса в пути был обнаружен файл...
      // раз в пути уже был обнаружен файл, то и нет смысла дальше проводить
      // сложные проверки, а проще и понятнее прокинуть этот false до конца редьюса
      // и вернуть его как результат.

      // return false не останавливает редьюс, а возращает это значение в аккумулятор
      if (!subtree) {
        return false;
      }
      const current = subtree.getChild(part);
      if (!current) {
        return subtree.addChild(part, new Dir(part));
      }
      if (current.getMeta().isFile()) {
        return false;
      }

      return current;
    }, this.tree);

    return !!result;
  }

  touchSync(filepath) {
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent) {
      return false;
    }
    if (parent.getMeta().isFile()) {
      return false;
    }
    parent.addChild(base, new File(base, ''));
    return true;
  }

  readdirSync(filepath) {
    const current = this.findNode(filepath);
    if (!current || current.getMeta().isFile()) {
      return false;
    }
    return current.getChildren().map(child => child.getKey());
  }

  rmdirSync(filepath) {
    const { base } = path.parse(filepath);
    const current = this.findNode(filepath);
    if (!current) {
      return false;
    }
    if (current.getMeta().isFile() || current.hasChildren()) {
      return false;
    }
    current.getParent().removeChild(base);
    return true;
  }
  // END

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
