import path from 'path';
import Tree from 'hexlet-trees';

// BEGIN (write your solution here)
// via regular expression
// const getPathParts = filePath => filePath.replace(/\/+\B/g, '').trim().split(path.sep).filter(v => v);
const getPathParts = filepath => filepath.split(path.sep).filter(part => part !== '');
// END

export default class {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }

  // BEGIN (write your solution here)
  touchSync(filepath) {
    const { dir, base } = path.parse(filepath);
    const current = this.findNode(dir);
    if (!current || current.getMeta().type !== 'dir') {
      return false;
    }
    return current.addChild(base, { type: 'file' });
  }

  isFile(filepath) {
    const current = this.findNode(filepath);
    return !!current && current.getMeta().type === 'file';
  }

  mkdirSync(filepath) {
    const { dir, base } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().type !== 'dir') {
      return false;
    }
    return parent.addChild(base, { type: 'dir' });
  }

  isDirectory(filepath) {
    // const parts = getPathParts(filepath);
    // const current = this.tree.getDeepChild(parts);
    const current = this.findNode(filepath);
    return current ? current.getMeta().type === 'dir' : false;
  }
  // END

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
