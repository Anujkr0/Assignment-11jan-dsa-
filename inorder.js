class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}
    var root = null;
    function Postorder(node) {
        if (node == null)
            return;
        Postorder(node.left);
        Postorder(node.right);
 
        console.log(node.key + " ");
    }
    function Inorder(node) {
        if (node == null)
            return;
         Inorder(node.left);
        console.log(node.key + " ");
        Inorder(node.right);
    }
    function Preorder(node) {
        if (node == null)
            return;
        console.log(node.key + " ");
        Preorder(node.left);
        Preorder(node.right);
        
    }
        root = new Node(30);
        root.left = new Node(40);
        root.right = new Node(50);
        root.left.left = new Node(60);
        root.left.right = new Node(70);
 
        console.log("Preorder traversal of binary tree ");
        Preorder(root);
 
        console.log("Inorder traversal of binary tree ");
        Inorder(root);
 
        console.log("Postorder traversal of binary tree ");
       Postorder(root);