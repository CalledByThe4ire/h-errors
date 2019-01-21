import path from 'path';
import Tree from 'hexlet-trees';

// BEGIN (write your solution here)

const getPathParts = filePath => filePath.replace(/\/+\B/g, '').trim().split(path.sep).filter(v => v);
// END

export default class {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }

  // BEGIN (write your solution here)
  isDirectory(key) {
    const node = this.findNode(key);
    if (node && node.meta.type === 'dir') {
      return true;
    }
    return false;
  }

  isFile(key) {
    const node = this.findNode(key);
    if (node && node.meta.type === 'file') {
      return true;
    }
    return false;
  }

  mkdirSync(filePath) {
    const filePathParts = getPathParts(filePath);
    const [dir, value] = filePathParts;
    const child = typeof value === 'undefined' ? this.tree : this.tree.getDeepChild(dir);
    child.addChild(typeof value === 'undefined' ? dir : value, { type: 'dir' });
    return this.tree;
  }

  touchSync(filePath) {
    const filePathParts = getPathParts(filePath);
    const [dir, value] = filePathParts;
    const child = typeof value === 'undefined' ? this.tree : this.tree.getDeepChild(dir);
    child.addChild(typeof value === 'undefined' ? dir : value, { type: 'file' });
    return this.tree;
  }
  // END

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
