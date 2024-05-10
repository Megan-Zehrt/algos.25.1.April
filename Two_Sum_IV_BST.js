// 653. Two Sum IV - Input is a BST

// Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {

    let results = []

    function dfs(node, results){

        if(node === null){
            return null
        }

        results.push(node.val)

        dfs(node.left, results)
        dfs(node.right, results)
    }

    dfs(root, results)

    results.sort((a,b) => a-b)

    for(let i = 0; i < results.length; i++){
        for(let j = results.length-1; j > i; j--){
            if(results[i] + results[j] == k){
                return true
            }
        }
    }

    return false
    
};


// create empty array
// push all nodes into array
// iterate over array, if current + other = k, return true