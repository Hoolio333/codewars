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
