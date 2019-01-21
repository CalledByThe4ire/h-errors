import path from 'path';
import Tree from 'hexlet-trees';

// BEGIN (write your solution here)

// END

export default class {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }

  // BEGIN (write your solution here)

  // END

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
