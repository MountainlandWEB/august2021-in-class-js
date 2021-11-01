class TreeNode {
  constructor(element) {
    this.element = element;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  insert(element) {
    // root is null
    if (this.root == null) {
      this.root = new TreeNode(element);
      this.size += 1;
    } else {
      let current = this.root;
      while ((current = !null)) {
        if (current.element.key == element.key) {
          // key is the same
          break;
        } else if (element.key > current.element.key) {
          // is current key greater than element key
          // key is greater
          if (current.right == null) {
            current.right = new TreeNode(element);
            this.size += 1;
            break; 
          } else {
            current = current.right;
          }
        } else {
          // key is less than
          if (current.left == null) {
            current.left = new TreeNode(element);
            this.size += 1;
            break;
          } else {
            current = current.left;
          }
        }
      }
    }
  }

  contains(key) {

  }

  remove(key) {}

  // returns a sorted array of the items in the tree
  toArray() {}
}
