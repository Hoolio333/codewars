// Codewars & Leetcode problems

// 1. Two Sum

/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1] */

// Leet Code

const twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) {
        if (i !== j) {
          return [i, j];
        }
      }
    }
  }
};

// 2. Valid Parentheses

/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false */

const isValid = function (s) {
  let bracket = [];
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const bracketLast = bracket[bracket.length - 1];
    if (current === "(") bracket.push(")");
    else if (current === "[") bracket.push("]");
    else if (current === "{") bracket.push("}");
    else if (current === bracketLast) bracket.pop();
    else return false;
  }
  return bracket.length === 0;
};

// 3. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

/* Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order. */

const mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

// 4. Best Time to Buy and Sell Stock

/* You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0. */

const maxProfit = function (prices) {
  let max = 0;
  let answer = 0;
  for (let i = prices.length - 1; i >= 0; i--) {
    answer = Math.max(answer, max - prices[i]);
    if (prices[i] > max) {
      max = prices[i];
    }
  }
  return answer;
};

// You don't actually need to calculate minimum if you start iteration from the end.
// Just keep track of the maximum number of the right sub array at the point of iteration

// .5 Valid Palindrome

/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome. */

// Solution 1

const isPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
};

// Solution 2

const isPalindrome = function (s) {
  // check for invalid input; return false
  if (s.length < 1) return false;

  //convert string to lowercase
  s = s.toLowerCase();

  //strip string of non-alphanumeric characters
  s = s.replace(/[^a-z0-9]/gi, "");

  // iterate through string s, comparing both ends of string s and evaluating if each character matches
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }

  return true;
};

// Solution 3

const isPalindrome = function (s) {
  let newString = s.toLowerCase().replace(/[^0-9a-z]/g, "");
  let left = 0,
    right = newString.length - 1;

  while (left < right) {
    if (newString[left] !== newString[right]) return false;
    left++;
    right--;
  }
  return true;
};

// .6

/* Given the root of a binary tree, invert the tree, and return its root.

Example 1:

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:

Input: root = [2,1,3]
Output: [2,3,1]

Example 3:

Input: root = []
Output: [] */

function invertTree(root) {
  if (!root) return root;

  const right = root.right;
  root.right = root.left;
  root.left = right;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

// 7. Valid Anagram

/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/

const isAnagram = function (s, t) {
  s = s.split("").sort();
  t = t.split("").sort();

  if (s.length !== t.length) return false;

  for (var i = 0; i < s.length; i++) if (s[i] !== t[i]) return false;

  return true;
};

// 8. Binary Search
/* Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1 */

const search = function (arr, target) {
  let n = arr.length;
  let i = 0;
  let j = n - 1;

  while (i <= j) {
    let mid = parseInt((i + j) / 2);
    if (arr[mid] == target) return mid;
    if (arr[mid] < target) i = mid + 1;
    else j = mid - 1;
  }

  return -1;
};

/* 9. Flood Fill

An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Example 1:

Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

Example 2:

Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image. */

const floodFill = function (image, sr, sc, newColor) {
  let value = image[sr][sc];
  if (value === newColor) {
    return image;
  }
  let row = image.length;
  let colm = image[0].length;
  fill(sr, sc);
  return image;
  function fill(i, j) {
    if (i < 0 || j < 0 || i === row || j === colm || image[i][j] !== value) {
      return;
    }
    image[i][j] = newColor;
    fill(i + 1, j);
    fill(i - 1, j);
    fill(i, j + 1);
    fill(i, j - 1);
  }
};

/* 10. Lowest Common Ancestor of a Binary Search Tree

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example 1:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
Example 2:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
Example 3:

Input: root = [2,1], p = 2, q = 1
Output: 2 */

const lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else {
      break;
    }
  }
  return root;
};

/* 11. Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true
*/

const isBalanced = function (root) {
  if (!root) return true;
  if (Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
};
const maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};

/* 12. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false. 

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list. */

const hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next != null) {
    slow = slow.next;

    fast = fast.next.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
};

/* 13. Implement Queue using Stacks

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
 
Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false */

class MyQueue {
  data = [];

  constructor() {
    this.data = [];
  }

  push(element) {
    this.data.push(element);
  }

  pop() {
    const tempStack = [];

    while (this.data.length > 1) {
      tempStack.push(this.data.pop());
    }

    const poppedElement = this.data[0];
    this.data = [];

    while (tempStack.length) {
      this.data.push(tempStack.pop());
    }

    return poppedElement;
  }

  peek() {
    const tempStack = [];

    while (this.data.length) {
      tempStack.push(this.data.pop());
    }

    const peekedElement = tempStack[tempStack.length - 1];

    while (tempStack.length) {
      this.data.push(tempStack.pop());
    }

    return peekedElement;
  }

  empty() {
    return this.data.length === 0;
  }
}

/* 14. First Bad Version

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
Example 2:

Input: n = 1, bad = 1
Output: 1
*/

const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let end = n;
    let mid = 1;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      while (isBadVersion(mid) && isBadVersion(mid - 1)) {
        end = mid - 1;
        mid = Math.floor((start + end) / 2);
      }
      start = mid + 1;
    }
    return mid;
  };
};

/* 15. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

const canConstruct = (ransomNote, magazine) => {
  const vocab = {};

  for (let letter of magazine) {
    vocab[letter] = ++vocab[letter] || 1;
  }

  for (let letter of ransomNote) {
    if (vocab[letter] === 0 || !vocab[letter]) {
      return false;
    }
    vocab[letter]--;
  }

  return true;
};

/* 16. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

*/

const climbStairs = function (n) {
  let ans = [1, 2];

  for (let i = 2; i < n; i++) {
    ans[i] = ans[i - 1] + ans[i - 2];
  }
  return ans[n - 1];
};

/* 17. Longest Palindrome

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1. */

const longestPalindrome = function (s) {
  const set = new Set();

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      count += 2;
      set.delete(s[i]);
    } else {
      set.add(s[i]);
    }
  }

  if (set.size > 0) {
    count++;
  }

  return count;
};

/* 18. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:

Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: [] */

const reverseList = function (head) {
  let curr = null; //take current as null
  while (head) {
    //run a loop untill head becomes null
    let nxtNode = head.next; //take the current head next node in a variable
    head.next = curr; //make the current head next node points to current
    curr = head; // make the head as new current
    head = nxtNode; // make the next node of the head as new head
  }
  head = curr; // since at last new head points to null, so make it points to current
  return head;
};

/* 19. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2 */

const majorityElement = function (a) {
  let d = {};
  for (let i of a) {
    d[i] ? (d[i] += 1) : (d[i] = 1);
  }

  d = Object.entries(d).sort((a, b) => b[1] - a[1]);
  return Number(d[0][0]);
};

/* 20. Add Binary

Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101" */

const addBinary = function (a, b) {
  let op = "",
    carry = 0;
  let bigger = a.length > b.length ? a : b;
  let smaller = a.length > b.length ? b : a;
  for (let i = bigger.length - 1, j = smaller.length - 1; i >= 0; i--, j--) {
    let sum = parseInt(bigger[i]) + parseInt(smaller[j] || 0) + carry;
    if (sum === 0) {
      carry = 0;
      op = "0" + op;
    } else if (sum === 1) {
      carry = 0;
      op = "1" + op;
    } else if (sum === 2) {
      carry = 1;
      op = "0" + op;
    } else {
      carry = 1;
      op = "1" + op;
    }
  }
  op = carry ? carry + op : op;
  return op;
};

/* 21. Diameter of Binary Tree

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

Example 1:

Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
Example 2:

Input: root = [1,2]
Output: 1 */

const diameterOfBinaryTree = function (root) {
  let ret = 0;

  (function postorder(n) {
    if (!n) return 0;

    const left = postorder(n.left);
    const right = postorder(n.right);

    ret = Math.max(ret, left + right);

    return Math.max(left, right) + 1;
  })(root);

  return ret;
};

/* 22. Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1:

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
*/

const middleNode = function (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

/* 23. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
*/

const maxDepth = function (root) {
  if (!root?.val && root?.val !== 0) return 0;
  let output = 0;

  const loop = (tree, level) => {
    output = level > output ? level : output;

    if (tree?.left) {
      loop(tree.left, level + 1);
    }
    if (tree?.right) {
      loop(tree.right, level + 1);
    }
  };
  loop(root, 1);

  return output;
};

/* 24. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true */

const containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};

/* Code Wars

Level 8 - Take the First N Elements

Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

Test: 

describe("Sample Tests", function(){
  it("should work for sample tests", function(){
    Test.assertDeepEquals(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items");
  });
});*/

function take(arr, n) {
  let slicedArray = arr.slice(0, n);
  return slicedArray;
}

/* Code Wars

Level 8 - No zeros for heros

Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105

Zero alone is fine, don't worry about it. Poor guy anyway */

const noBoringZeros = (number) => {
  if (number === 0) return number;
  if (number % 10 === 0) return noBoringZeros(number / 10);
  else return number;
};

/* Code Wars

Level 8 - Is it a palindrome?

Write a function that checks if a given string (case insensitive) is a palindrome.

describe("Fixed tests", function() {
  it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
  it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
  it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
  it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
  it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
  it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
  it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
  it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
});
*/

function isPalindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, "");
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

/* Code Wars

Level 8 - Holiday VIII - Duty Free

The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down. 

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(dutyFree(12, 50, 1000), 166);
    assert.strictEqual(dutyFree(17, 10, 500), 294);
    assert.strictEqual(dutyFree(24, 35, 3000), 357);   
  });
}) */

function dutyFree(normPrice, discount, hol) {
  let discountPercentage = 100 / discount;
  let discountPrice = normPrice / discountPercentage;
  let answer = hol / discountPrice;
  let finalAnswer = Math.floor(answer);
  return finalAnswer;
}
/* Refactor */

function dutyFree(normPrice, discount, hol) {
  return Math.floor((hol / normPrice / discount) * 100);
}

/* Code Wars

Level 7 - Count the divisors of a number

Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(getDivisorsCnt(1),  1);
    assert.strictEqual(getDivisorsCnt(10), 4);
    assert.strictEqual(getDivisorsCnt(11), 2);
    assert.strictEqual(getDivisorsCnt(54), 8);
  });
}); */

function getDivisorsCnt(n) {
  let output = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      output += 1;
    }
  }
  return output;
}

/* Code Wars

Level 8 - Will there be enough space?

Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

describe("Basic Tests", function(){
  it("Testing for fixed tests", () => {
    assert.strictEqual(enough(10, 5, 5), 0);
    assert.strictEqual(enough(100, 60, 50), 10);
    assert.strictEqual(enough(20, 5, 5), 0);
  });
}); */

function enough(cap, on, wait) {
  let total = on + wait;
  if (total <= cap) {
    return 0;
  } else {
    return total - cap;
  }
}

// Alternative solution:

function enough(cap, on, wait) {
  return cap - wait - on < 0 ? on + wait - cap : 0;
}

/* Code Wars

Level 7 - Binary Addition

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

describe("addBinary(1,2)", function() {
  var results1 = addBinary(1,2);
  it("Should return something that isn't falsy", function() {
    Test.expect(results1, "Something is wrong, no results!");
  });
  it("Should return \"11\"", function() {
    Test.assertEquals(results1, "11");
  });
}); */

function addBinary(a, b) {
  return (a + b).toString(2);
}

// Alternative Solution:

function addBinary(a, b) {
  var c = a + b;
  var res = "";
  while (c >= 1) {
    var res = (c % 2) + res;
    c = Math.floor(c / 2);
  }
  return res;
}

/* Code Wars

Level 7 - Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);
  });
}); */

function XO(str) {
  var x = str.match(/x/gi);
  var o = str.match(/o/gi);
  return (x && x.length) == (o && o.length);
}

// Alternative Solutions:

function XO(str) {
  return (
    str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
  );
}

const XO = (str) => {
  str = str.toLowerCase().split("");
  return (
    str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
  );
};

/* Code Wars

Level 7 - Ones and Zeros

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

describe("One's and Zero's", () => {

  it("Example tests", () => {
      Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
      Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
      Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
      Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);
  });

}); */

function binaryArrayToNumber(arr) {
  return Number.parseInt(arr.join(""), 2);
}

// Alternative Solutions

function binaryArrayToNumber(s) {
  if (s[0] === 0 && s[1] === 0 && s[2] === 0 && s[3] === 1) {
    return 1;
  } else if (s[0] === 0 && s[1] === 0 && s[2] === 1 && s[3] === 0) {
    return 2;
  } else if (s[0] === 0 && s[1] === 0 && s[2] === 1 && s[3] === 1) {
    return 3;
  } else if (s[0] === 0 && s[1] === 1 && s[2] === 0 && s[3] === 0) {
    return 4;
  } else if (s[0] === 0 && s[1] === 1 && s[2] === 0 && s[3] === 1) {
    return 5;
  } else if (s[0] === 0 && s[1] === 1 && s[2] === 1 && s[3] === 0) {
    return 6;
  } else if (s[0] === 0 && s[1] === 1 && s[2] === 1 && s[3] === 1) {
    return 7;
  } else if (s[0] === 1 && s[1] === 0 && s[2] === 0 && s[3] === 0) {
    return 8;
  } else if (s[0] === 1 && s[1] === 0 && s[2] === 0 && s[3] === 1) {
    return 9;
  } else if (s[0] === 1 && s[1] === 0 && s[2] === 1 && s[3] === 0) {
    return 10;
  } else if (s[0] === 1 && s[1] === 0 && s[2] === 1 && s[3] === 1) {
    return 11;
  } else if (s[0] === 1 && s[1] === 1 && s[2] === 0 && s[3] === 0) {
    return 12;
  } else if (s[0] === 1 && s[1] === 1 && s[2] === 0 && s[3] === 1) {
    return 13;
  } else if (s[0] === 1 && s[1] === 1 && s[2] === 1 && s[3] === 0) {
    return 14;
  } else if (s[0] === 1 && s[1] === 1 && s[2] === 1 && s[3] === 1) {
    return 15;
  } else if (s[0] === 0 && s[1] === 0 && s[2] === 0 && s[3] === 0) {
    return 0;
  }
}

/* Code Wars

Level 8 - Convert a Number to a String!

We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(numberToString(67), '67');
  });
}); 
*/

function numberToString(num) {
  return num.toString();
}

/* Code Wars

Level 7 - Complementary DNA

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAStrand("AAAA"),"TTTT","String AAAA is")
    assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
    assert.strictEqual(DNAStrand("GTAT"),"CATA","String GTAT is")   
  })
}) */

function DNAStrand(dna) {
  let sequence = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };
  return dna.replace(/A|T|G|C/g, function (matched) {
    return sequence[matched];
  });
}

// Alternative Solutions:

var pairs = { A: "T", T: "A", C: "G", G: "C" };

function DNAStrand(dna) {
  return dna
    .split("")
    .map(function (v) {
      return pairs[v];
    })
    .join("");
}

function DNAStrand(dna) {
  //your code here
  var result = "";
  for (var i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      result += "T";
    } else if (dna[i] === "T") {
      result += "A";
    } else if (dna[i] === "C") {
      result += "G";
    } else if (dna[i] === "G") {
      result += "C";
    } else {
      result += dna[i];
    }
  }
  return result;
}

/* Code Wars

Level 7 - Sort array by string length

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

describe("Example tests",function(){
  it("Test 1",function(){
    Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
  });
  it("Test 2",function(){
    Test.assertDeepEquals(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
  });
  it("Test 3",function(){
    Test.assertDeepEquals(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
  });
}); */

function sortByLength(array) {
  return array.sort(function (a, b) {
    return a.length - b.length;
  });
}

// Alternative Solutions:

let sortByLength = (arr) => arr.sort((a, b) => a.length - b.length);

/* Code Wars

Level 7 - Odd or Even?

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

describe('Fixed tests', () => {
  it('Edge tests', () => {
    assert.strictEqual(oddOrEven([0]), 'even')
    assert.strictEqual(oddOrEven([1]), 'odd')
    assert.strictEqual(oddOrEven([]), 'even')
  });
  
  it('Even tests', () => {
    assert.strictEqual(oddOrEven([0, 1, 5]), 'even')
    assert.strictEqual(oddOrEven([0, 1, 3]), 'even')
    assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')
  });
  
  it('Negative Even tests', () => {
    assert.strictEqual(oddOrEven([0, -1, -5]), 'even')
    assert.strictEqual(oddOrEven([0, -1, -3]), 'even')
    assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even')
  });
  
  it('Odd tests', () => {
    assert.strictEqual(oddOrEven([0, 1, 2]), 'odd')
    assert.strictEqual(oddOrEven([0, 1, 4]), 'odd')
    assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd')
  });
  
  it('Negative Odd tests', () => {
    assert.strictEqual(oddOrEven([0, -1, 2]), 'odd')
    assert.strictEqual(oddOrEven([0, 1, -4]), 'odd')
    assert.strictEqual(oddOrEven([-1023, -1, 3]), 'odd')
  });
}); */

function oddOrEven(array) {
  return array.reduce(function (sum, item) {
    return sum + item;
  }, 0) %
    2 ==
    0
    ? "even"
    : "odd";
}

// Alternative Solutions:

function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}

function oddOrEven(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  if (result % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

function oddOrEven(array) {
  if (array.length == 0) {
    return "even";
  }
  var sum = array.reduce(add, 0);
  function add(x, y) {
    return x + y;
  }

  if (sum % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

/* Code Wars

Level 8 - Third Angle of a Triangle

You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(otherAngle(30, 60), 90);
    assert.strictEqual(otherAngle(60, 60), 60);
    assert.strictEqual(otherAngle(43, 78), 59);
    assert.strictEqual(otherAngle(10, 20), 150);
  });
}); */

function otherAngle(a, b) {
  const triangleTotal = 180;
  let sumOfAAndB = a + b;
  return triangleTotal - sumOfAAndB;
}

// Alternative Solution:

function otherAngle(a, b) {
  return 180 - (a + b);
}

/* Code Wars

Level 7 - Given the triangle of consecutive odd numbers

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(rowSumOddNumbers(1), 1);
    assert.strictEqual(rowSumOddNumbers(42), 74088);
  });
}); 
*/

function rowSumOddNumbers(n) {
  return n * n * n;
}

// Alternative Solutions:

function rowSumOddNumbers(n) {
  var start = n * n - n + 1;
  var result = 0;

  for (i = 0; i < n; i++) {
    result = result + (start + i * 2);
  }

  return result;
}

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

function rowSumOddNumbers(n) {
  // TODO
  return n > 0 ? n * n * n : "Wrong Input";
}

/* Code Wars

Level 8 - Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

describe("doubleChar", function() {
  it("works for some examples", function() {
    Test.assertEquals(doubleChar("abcd"), "aabbccdd");
    Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
    Test.assertEquals(doubleChar("1337"), "11333377");
    Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
    Test.assertEquals(doubleChar("123456"), "112233445566");
    Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
  });
}); 
*/

function doubleChar(str) {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    newStr += str.charAt(i) + str.charAt(i);
  }
  return newStr;
}

// Alternative Solutions:

const doubleChar = (str) =>
  str
    .split("")
    .map((c) => c + c)
    .join("");

function doubleChar(str) {
  return str
    .split("")
    .map(function (c) {
      return c + c;
    })
    .join("");
}

/* Code Wars

Level 8 - Switch it Up!

When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.

describe("Basic Tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(switchItUp(1),"One");
    assert.strictEqual(switchItUp(3),"Three");
    assert.strictEqual(switchItUp(5),"Five");
  });
});
*/

function switchItUp(number) {
  if (number === 0) return "Zero";
  if (number === 1) return "One";
  if (number === 2) return "Two";
  if (number === 3) return "Three";
  if (number === 4) return "Four";
  if (number === 5) return "Five";
  if (number === 6) return "Six";
  if (number === 7) return "Seven";
  if (number === 8) return "Eight";
  if (number === 9) return "Nine";
}

// Alternative Solutions:

function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "Unknown number";
  }
}

function switchItUp(n) {
  return [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ][n];
}

/* Code Wars

Level 8 - Simple multiplication

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
 
describe("Basic Tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(simpleMultiplication(2),16,'Should return double given argument..')
    assert.strictEqual(simpleMultiplication(1),9,'Should return double given argument..')
    assert.strictEqual(simpleMultiplication(8),64,'Should return given argument times eight...')
    assert.strictEqual(simpleMultiplication(4),32,'Should return given argument times eight...')
    assert.strictEqual(simpleMultiplication(5),45,'Should return given argument times nine...')
  });
});
*/

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    number = number * 8;
  } else {
    number = number * 9;
  }
  return number;
}

// Alternative Solutions:

function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}

function simpleMultiplication(n) {
  return n % 2 == 0 ? n * 8 : n * 9;
}

function simpleMultiplication(value) {
  if (value % 2 === 0) {
    return value * 8;
  } else {
    return value * 9;
  }
}

const simpleMultiplication = (n) => n * (n % 2 ? 9 : 8);

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

/* Code Wars

Level 7 - Descending Order

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(descendingOrder(0), 0)
    assert.strictEqual(descendingOrder(1), 1)
    assert.strictEqual(descendingOrder(111), 111)
    assert.strictEqual(descendingOrder(15), 51)
    assert.strictEqual(descendingOrder(1021), 2110)
    assert.strictEqual(descendingOrder(123456789), 987654321)
    })
  })
*/

function descendingOrder(n) {
  return parseInt((n + "").split("").sort().reverse().join(""));
}

// Alternative Solution:

function descendingOrder(n) {
  return +(n + "")
    .split("")
    .sort(function (a, b) {
      return b - a;
    })
    .join("");
}

/* Code Wars

Level 7 - Friend or Foe?

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
    assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
    assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
    assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])
  })
})
*/

function friend(friends) {
  return friends.filter(function (item) {
    return item.length === 4;
  });
}

// Alternative Solutions

function friend(friends) {
  return friends.filter((n) => n.length === 4);
}

function friend(friends) {
  //your code here
  var realFriends = [];
  for (i = 0; i < friends.length; i++) {
    if (friends[i].length == 4 && isNaN(friends[i])) {
      realFriends.push(friends[i]);
    }
  }

  return realFriends;
}

function friend(friends) {
  return friends.reduce((res, x) => {
    if (x.length == 4) {
      res.push(x);
      return res;
    } else return res;
  }, []);
}

function friend(friends) {
  let goodFriends = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      goodFriends.push(friends[i]);
    }
  }
  return goodFriends;
}

/* Code Wars

Level 7 - Training JS #7: if..else and ternary operator

This function returns a different value depending on the parameter age.

Looks very complicated? Well, JS and Ruby also support the ternary operator and Python has something similar too:

condition ? statementa : statementb
Condition and statement separated by "?", different statement separated by ":" in both Ruby and JS; in Python you put the condition in the middle of two alternatives. The two examples above can be simplified with ternary operator:

function oddEven(n){
  return n%2 == 1 ? "odd number" : "even number";
}
function oldYoung(age){
  return age < 16 ? "children" : age < 50 ? "young man" : "old man";
}
Task:
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

number of hotdogs	price per unit (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90

You can use if..else or ternary operator to complete it.

describe("Tests", () => {
  it("Sample tests", () => {
    assert.strictEqual(saleHotdogs(  1),  100);
    assert.strictEqual(saleHotdogs(  4),  400);
    assert.strictEqual(saleHotdogs(  5),  475);
    assert.strictEqual(saleHotdogs(  9),  855);
    assert.strictEqual(saleHotdogs( 10),  900);
    assert.strictEqual(saleHotdogs(100), 9000);
  });
});
*/

function saleHotdogs(n) {
  return n * (n < 5 ? 100 : n >= 5 && n < 10 ? 95 : 90);
}

// Alternative Solutions:

function saleHotdogs(n) {
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}

function saleHotdogs(n) {
  var money = 0;
  if (n < 5) {
    money = n * 100;
  } else if (n >= 5 && n < 10) {
    money = n * 95;
  } else if (n >= 10) {
    money = n * 90;
  }
  return money;
}

const saleHotdogs = (n) => {
  switch (true) {
    case n < 5:
      return n * 100;
    case n < 10:
      return n * 95;
    default:
      return n * 90;
  }
};

function saleHotdogs(n) {
  if (n < 5) return n * 100;
  if (n >= 5 && n < 10) return n * 95;
  else return n * 90;
}

const saleHotdogs = (customersNumber) =>
  customersNumber * (customersNumber < 5 ? 100 : customersNumber > 9 ? 90 : 95);

/* Code Wars

Level 7 - Round up to the next multiple of 5

Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    [[0,0],[1,5],[-1,0],[-5,-5],[3,5],[5,5],[7,10],[20,20],[39,40],[990,990],[121,125],[555,555]].forEach(
      ([x,exp])=> assert.strictEqual(roundToNext5(x), exp, `Input: ${x}`)
    );
  })
});
*/

function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}

// Alternative Solutions:

function roundToNext5(n) {
  while (n % 5 !== 0) n++;
  return n;
}

function roundToNext5(n) {
  if (n % 5 === 0) {
    return n;
  }
  return roundToNext5(n + 1);
}

function roundToNext5(n) {
  return n % 5 === 0 ? n : n < 0 ? n - (n % 5) : n - (n % 5) + 5;
}

/* Code Wars

Level 7 - Two to One

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

describe("longest",function() {
it("Basic tests",function() {
    Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
    Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
    Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
})})
*/

function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join``;
}

// Alternative Solutions:

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join("");
}

function longest(s1, s2) {
  // your code
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function (element, index, array) {
    return element !== array[index - 1];
  });
  return s4.join("");
}

function longest(s1, s2) {
  let output = [];
  let combi = s1.concat(s2);
  let array = combi.split("").sort();

  for (let i = 0; i <= array.length; i++) {
    console.log(array[i]); //test
    if (!output.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output.join("");
}
console.log(longest("xyaaAbbbccccdefww", "xxxxyyyyabklmopq"));

/* Code Wars

Level 8 - Removing Elements

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.deepEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
    assert.deepEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
    assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
    assert.deepEqual(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
  })
});
*/

function removeEveryOther(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

// Alternative Solutions:

function removeEveryOther(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0;
  });
}

const removeEveryOther = (arr) => arr.filter((_, i) => !(i % 2));

function removeEveryOther(arr) {
  for (var i = 1; i < arr.length; i++) {
    arr.splice(i, 1);
  }
  return arr;
}

const removeEveryOther = (arr) => arr.filter((item, i) => i % 2 == 0);

/* Code Wars

Level 7 - List Filtering

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
    assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
    assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');
  });
});
*/

function filter_list(l) {
  let integers = [];
  for (var i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i])) {
      integers.push(l[i]);
    }
  }
  return integers;
}

// Alternative Solutions:

function filter_list(l) {
  return l.filter(function (v) {
    return typeof v == "number";
  });
}

/* Code Wars

Level 6 - Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
  });
});
*/

let uniqueInOrder = function (iterable) {
  let arr = [];
  for (let i = 0; i < iterable.length; i++) {
    // check if there is back to back letter
    if (iterable[i] !== iterable[i + 1]) {
      // if not, push the current value to arr
      arr.push(iterable[i]);
    }
  }
  return arr;
};

/* Code Wars

Level 7 - Printer Errors

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"

describe("printerError",function() {
it("Basic tests",function() {   
    var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
    Test.assertEquals(printerError(s), "3/56")
})})
*/

function printerError(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] > "m") {
      count++;
    }
  }
  return count + "/" + str.length;
}

// Alternative Solutions:

const printerError = (s) => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

function printerError(s) {
  var x = 0;
  var y = 0;
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i).includes("n")) {
      x++;
      y++;
    } else if (s.charAt(i).includes("o")) {
      x++;
      y++;
    } else if (s.charAt(i).includes("p")) {
      x++;
      y++;
    } else if (s.charAt(i).includes("q")) {
      x++;
      y++;
    } else if (s.charAt(i).includes("r")) {
      x++;
      y++;
    } else if (s.charAt(i).includes("s")) {
      x++;
      y++;
    } else if (s.charAt(i).includes("t")) {
      x++;
      y++;
    } else if (s.charAt(i).includes("u")) {
      x++;
      y++;
    } else if (s.charAt(i).includes("v")) {
      x++;
      y++;
    } else if (s.charAt(i).includes("w")) {
      x++;
      y++;
    } else if (s.charAt(i).includes("x")) {
      x++;
      y++;
    } else if (s.charAt(i).includes("y")) {
      x++;
      y++;
    } else if (s.charAt(i).includes("z")) {
      x++;
      y++;
    } else {
      y++;
    }
  }
  var xString = x.toString();
  var yString = y.toString();
  var fraction = "/";
  return xString + fraction + yString;
}

/* Code Wars

Level 8 - Abbreviate a Two Word Name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(abbrevName("Sam Harris"), "S.H");
    assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
    assert.strictEqual(abbrevName("Evan Cole"), "E.C");
    assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
    assert.strictEqual(abbrevName("David Mendieta"), "D.M");
  });
});
*/

function abbrevName(name) {
  const answer = [name[0]];
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      answer.push(name[i + 1]);
    }
  }
  return answer.map((el) => el.toUpperCase()).join(".");
}

// Alternative Solutions

function abbrevName(name) {
  const newArray = name.split(" ");
  return (newArray[0][0] + "." + newArray[1][0]).toUpperCase();
}

function abbrevName(name) {
  return name
    .split(" ")
    .map((el) => el[0].toUpperCase())
    .join(".");
}

/* Code Wars

Level 8 - Remove String Spaces

Simple, remove the spaces from the string, then return the resultant string.

describe("Basic tests",() =>{
  it("Fixed Tests", () => {
    assert.strictEqual(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
    assert.strictEqual(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
    assert.strictEqual(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 
  });
});
*/

function noSpace(x) {
  let newStr = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      newStr += x[i];
    }
  }
  return newStr;
}

// Alternative Solutions

function noSpace(x) {
  return x.replace(/\s/g, "");
}

function noSpace(x) {
  return x.split(" ").join("");
}

/* Code Wars

Level 7 - Disemvowel Trolls

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
    assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
    assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
    })
  })
  */

function disemvowel(str) {
  return (str || "").replace(/[aeiou]/gi, "");
}

// Alternative Solutions

disemvowel = (str) => str.replace(/[aeiou]/gi, "");

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

const vowels = "aeiou";

function disemvowel(str) {
  return str
    .split("")
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join("");
}

function disemvowel(str) {
  var vowels = ["a", "e", "i", "o", "u"];

  return str
    .split("")
    .filter(function (el) {
      return vowels.indexOf(el.toLowerCase()) == -1;
    })
    .join("");
}

const disemvowel = (str) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let newStr = "";
  for (let i = 0; i <= str.length; i++) {
    let char = str.charAt(i);
    if (vowels.indexOf(char) == -1) {
      newStr += char;
    }
  }
  return newStr;
};

/* Code Wars

Level 7 - Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

describe("Basic tests", () => {
  
  it("squareDigits(3212) should equal 9414", () => {
    assert.strictEqual(squareDigits(3212), 9414);
  });

  it("squareDigits(2112) should equal 4114", () => {
    assert.strictEqual(squareDigits(2112), 4114);
  });

  it("squareDigits(0) should equal 0", () => {
    assert.strictEqual(squareDigits(0), 0);
  });
})
*/

function squareDigits(num) {
  let x = num.toString().split("").map(Number);
  x.forEach((element, i) => (x[i] = element * element));
  return Number(x.join(""));
}

// Alternative Solutions

function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val * val;
      })
      .join("")
  );
}

function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((i) => i * i)
    .join("");
}

/* Code Wars

Level 7 - Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual( isIsogram("Dermatoglyphics"), true );
    assert.strictEqual( isIsogram("isogram"), true );
    assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
    assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
    assert.strictEqual( isIsogram("isIsogram"), false );
    assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
  });
});
*/

function isIsogram(str) {
  let i, j;
  str = str.toLowerCase();
  for (i = 0; i < str.length; ++i) {
    for (j = i + 1; j < str.length; ++j) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

// Alternative Solutions

function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}

function isIsogram(str) {
  return !str.match(/([a-z]).*\1/i);
}

/* Code Wars

Level 6 - Find the odd int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

describe('Example tests', function() {
  
  function doTest(a, n) {
    assert.strictEqual(findOdd(a), n, `Incorrect answer for input=[${a}]`);
  }
  
  it("Example tests", () => {
    doTest([7], 7);
    doTest([0], 0);
    doTest([1,1,2], 2);
    doTest([0,1,0,1,0], 0);
    doTest([1,2,2,3,3,3,4,3,3,3,2,2,1], 4);
  });
  
  it("Fixed tests", () => {
    doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
    doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
    doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
    doTest([10], 10);
    doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
    doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
  });
});
*/

function findOdd(A) {
  let count = {};
  A.forEach((v) => {
    count[v] = count[v] ? count[v] + 1 : 1;
  });
  return +Object.keys(count).find((key) => count[key] % 2 === 1);
}

// Alternative Solutions

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

function findOdd(arr) {
  return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
}

function findOdd(arr) {
  var result,
    num = 0;

  arr = arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      num++;
    } else {
      num++;
      if (num % 2 != 0) {
        result = arr[i];
        break;
      }
    }
  }
  return result;
}

/* Code Wars

Level 6 - Who likes it?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.

describe('example tests', function() {
  it('should return correct text', function() {
    assert.strictEqual(likes([]), 'no one likes this');
    assert.strictEqual(likes(['Peter']), 'Peter likes this');
    assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
});
*/

function likes(names) {
  if (names.length == 0) {
    return "no one likes this";
  } else if (names.length == 1) {
    return names[0] + " likes this";
  } else if (names.length == 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (names.length == 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else {
    return (
      names[0] +
      ", " +
      names[1] +
      " and " +
      (names.length - 2) +
      " others like this"
    );
  }
}

// Alternative Solutions

function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return names[0] + " likes this";
      break;
    case 2:
      return names[0] + " and " + names[1] + " like this";
      break;
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
      break;
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}

function likes(names) {
  return {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}

function likes(names) {
  if (names.length === 0) return "no one likes this";
  if (names.length === 1) return names[0] + " likes this";
  if (names.length === 2) return names[0] + " and " + names[1] + " like this";
  if (names.length === 3)
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  return (
    names[0] +
    ", " +
    names[1] +
    " and " +
    (names.length - 2) +
    " others like this"
  );
}

/* Code Wars

Level 6 - Duplicate Encoder

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

describe("Duplicate Encoder", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(duplicateEncode("din"),"(((");
    assert.strictEqual(duplicateEncode("recede"),"()()()");
    assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
    assert.strictEqual(duplicateEncode("(( @"),"))((");
  });
});
*/

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

// Alternative Solutions

function duplicateEncode(word) {
  var unique = "";
  word = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += "(";
    } else {
      unique += ")";
    }
  }
  return unique;
}

function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, (m) =>
    word.indexOf(m) == word.lastIndexOf(m) ? "(" : ")"
  );
}

function duplicateEncode(word) {
  var letters = word.toLowerCase().split("");
  return letters
    .map(function (c, i) {
      return letters.some(function (x, j) {
        return x === c && i !== j;
      })
        ? ")"
        : "(";
    })
    .join("");
}

/* Code Wars

Level 6 - Array.diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

describe("Basic tests", () => {
  it("Should pass Basic tests", () => {
    assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
    assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
    assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
    assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
  });
});
*/

function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}

// Alternative Solutions:

function array_diff(a, b) {
  return a.filter(function (x) {
    return b.indexOf(x) == -1;
  });
}

function array_diff(a, b) {
  var arr = new Array();

  for (var i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) < 0) {
      arr.push(a[i]);
    }
  }

  return arr;
}

/* Code Wars

Level 7 - Mumbling

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

describe("accum",function() {
it("Basic tests",function() {    
	Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
	Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
	Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
	Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
	Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
})}) */

function accum(s) {
  let letters = s.split(""),
    words = [];

  for (var i = 0; i < letters.length; i++) {
    words.push(
      letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase())
    );
  }

  return words.join("-");
}

// Alternative Solutions

function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

function accum(s) {
  return s
    .split("")
    .map((x, index) => x.toUpperCase() + Array(index + 1).join(x.toLowerCase()))
    .join("-");
}

/* Code Wars

Level 6 - Equal Sides Of An Array

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.

describe("FindEvenIndex", function() {
  it("Tests", function() {
    Test.assertEquals(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
    Test.assertEquals(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
    Test.assertEquals(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
    Test.assertEquals(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");
  });
});
*/

function findEvenIndex(arr) {
  let left = 0;
  let right = 0;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  if (arr.length == 0) {
    return -1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      right = arr.slice(1).reduce(reducer, 0);
      if (right === i) {
        return i;
      }
    } else {
      left = arr.slice(0, i).reduce(reducer, 0);
      right = arr.slice(i + 1).reduce(reducer, 0);
      if (left == right) {
        return i;
      }
    }
  }

  return -1;
}

// Alternative Solutions:

function findEvenIndex(arr) {
  var left = 0,
    right = arr.reduce(function (pv, cv) {
      return pv + cv;
    }, 0);
  for (var i = 0; i < arr.length; i++) {
    if (i > 0) left += arr[i - 1];
    right -= arr[i];

    if (left == right) return i;
  }

  return -1;
}

const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0);
const findEvenIndex = (a) =>
  a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));

/* Code Wars

Level 8 - Will you make it?

You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.

describe("zeroFill", function() {
  it("Sample Tests", function() {
    assert.equal(zeroFuel(50, 25, 2), true);
    assert.equal(zeroFuel(100, 50, 1), false);
  });
});

*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let totalFuel = mpg * fuelLeft;
  if (totalFuel >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump / mpg <= fuelLeft;
};

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  mpg * fuelLeft >= distanceToPump;
