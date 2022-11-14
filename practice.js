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
