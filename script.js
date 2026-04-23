// ===== DSA PROBLEM DATA =====
const topics = [
  {
    name: "Arrays",
    icon: "📦",
    problems: [
      { name: "Insert at given position", link: "", difficulty: "Easy" },
      { name: "Rotate Array by One", link: "https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1", difficulty: "Easy" },
      { name: "Rotate Array", link: "https://leetcode.com/problems/rotate-array/", difficulty: "Medium" },
      { name: "Second Largest", link: "https://www.geeksforgeeks.org/problems/second-largest3735/1", difficulty: "Easy" },
      { name: "Check if Array is Sorted", link: "https://www.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1", difficulty: "Easy" },
      { name: "Remove Duplicates from Sorted Array", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", difficulty: "Easy" },
      { name: "Max Consecutive Ones", link: "https://leetcode.com/problems/max-consecutive-ones/", difficulty: "Easy" },
      { name: "Reverse an Array", link: "https://www.geeksforgeeks.org/dsa/program-to-reverse-an-array/", difficulty: "Easy" },
      { name: "Move Zeroes", link: "https://leetcode.com/problems/move-zeroes/", difficulty: "Easy" },
      { name: "Palindrome Array", link: "https://www.geeksforgeeks.org/problems/perfect-arrays4645/1", difficulty: "Easy" },
      { name: "Plus One", link: "https://leetcode.com/problems/plus-one/", difficulty: "Easy" },
      { name: "Sort Colors (DNF Algorithm)", link: "https://leetcode.com/problems/sort-colors/", difficulty: "Medium" },
      { name: "Count Binary Substrings", link: "https://leetcode.com/problems/count-binary-substrings/", difficulty: "Medium" },
      { name: "Trionic Array I", link: "https://leetcode.com/problems/trionic-array-i/", difficulty: "Medium" }
    ]
  },
  {
    name: "Two Pointers",
    icon: "👆",
    problems: [
      { name: "Two Sum", link: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
      { name: "Pair Sum in Sorted and Rotated Array", link: "https://www.geeksforgeeks.org/problems/pair-sum-in-a-sorted-and-rotated-array/1", difficulty: "Medium" },
      { name: "Closest Pair Sum", link: "https://www.geeksforgeeks.org/problems/pair-in-array-whose-sum-is-closest-to-x1124/1", difficulty: "Medium" },
      { name: "Closest Pair Sum from Two Sorted Arrays", link: "https://www.geeksforgeeks.org/problems/find-the-closest-pair-from-two-arrays4215/1", difficulty: "Medium" },
      { name: "Dominant Pairs", link: "https://www.geeksforgeeks.org/problems/dominant-pairs/0", difficulty: "Hard" },
      { name: "Merge Without Extra Space", link: "https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1", difficulty: "Hard" },
      { name: "Common in 3 Sorted Arrays", link: "https://www.geeksforgeeks.org/problems/common-elements1132/1", difficulty: "Easy" }
    ]
  },
  {
    name: "Binary Search",
    icon: "🔍",
    problems: [
      { name: "Binary Search", link: "https://www.geeksforgeeks.org/problems/binary-search-1587115620/1", difficulty: "Easy" },
      { name: "Find First and Last Position of Element in Sorted Array", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", difficulty: "Medium" },
      { name: "Implement Upper Bound", link: "https://www.geeksforgeeks.org/problems/implement-upper-bound/1", difficulty: "Easy" },
      { name: "Implement Lower Bound", link: "https://www.geeksforgeeks.org/problems/implement-lower-bound/1", difficulty: "Easy" },
      { name: "Number of Occurrences", link: "https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1", difficulty: "Easy" },
      { name: "Search Insert Position", link: "https://leetcode.com/problems/search-insert-position/", difficulty: "Easy" },
      { name: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium" },
      { name: "Search in Rotated Sorted Array II", link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/", difficulty: "Medium" },
      { name: "Find Peak Element", link: "https://leetcode.com/problems/find-peak-element/", difficulty: "Medium" },
      { name: "Koko Eating Bananas", link: "https://leetcode.com/problems/koko-eating-bananas/", difficulty: "Medium" },
      { name: "Aggressive Cows", link: "https://www.geeksforgeeks.org/problems/aggressive-cows/1", difficulty: "Hard" },
      { name: "Capacity To Ship Packages Within D Days", link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/", difficulty: "Medium" },
      { name: "Book Allocation", link: "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1", difficulty: "Hard" },
      { name: "Magnetic Force Between Two Balls", link: "https://leetcode.com/problems/magnetic-force-between-two-balls/", difficulty: "Medium" },
      { name: "Guess Number Higher or Lower", link: "https://leetcode.com/problems/guess-number-higher-or-lower/", difficulty: "Easy" },
      { name: "First Bad Version", link: "https://leetcode.com/problems/first-bad-version/", difficulty: "Easy" }
    ]
  },
  {
    name: "Sliding Window",
    icon: "🪟",
    problems: [
      { name: "Max Sum Subarray of Size K", link: "https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1", difficulty: "Easy" },
      { name: "Maximum Subarray (Kadane's Algorithm)", link: "https://leetcode.com/problems/maximum-subarray/", difficulty: "Medium" },
      { name: "Minimum Size Subarray Sum", link: "https://leetcode.com/problems/minimum-size-subarray-sum/", difficulty: "Medium" },
      { name: "Binary Subarrays With Sum", link: "https://leetcode.com/problems/binary-subarrays-with-sum/", difficulty: "Medium" },
      { name: "Minimum Swaps to Group All 1's Together II", link: "https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/", difficulty: "Medium" },
      { name: "Minimum Swaps and K Together", link: "https://www.geeksforgeeks.org/problems/minimum-swaps-required-to-bring-all-elements-less-than-or-equal-to-k-together4847/1", difficulty: "Medium" },
      { name: "Maximum Sum Circular Subarray", link: "https://leetcode.com/problems/maximum-sum-circular-subarray/", difficulty: "Medium" },
      { name: "Count Elements with Maximum Frequency", link: "https://leetcode.com/problems/count-elements-with-maximum-frequency/", difficulty: "Easy" },
      { name: "Maximum Average Subarray I", link: "https://leetcode.com/problems/maximum-average-subarray-i/", difficulty: "Easy" },
      { name: "Number of Sub-arrays of Size K and Average >= Threshold", link: "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/", difficulty: "Medium" },
      { name: "Count Number of Nice Subarrays", link: "https://leetcode.com/problems/count-number-of-nice-subarrays/", difficulty: "Medium" },
      { name: "Max Consecutive Ones III", link: "https://leetcode.com/problems/max-consecutive-ones-iii/", difficulty: "Medium" }
    ]
  },
  {
    name: "Map & Strings",
    icon: "🔤",
    problems: [
      { name: "Palindrome String", link: "https://www.geeksforgeeks.org/problems/palindrome-string0817/1", difficulty: "Easy" },
      { name: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy" },
      { name: "Isomorphic Strings", link: "https://www.geeksforgeeks.org/problems/isomorphic-strings-1587115620/1", difficulty: "Easy" },
      { name: "Is Subsequence", link: "https://leetcode.com/problems/is-subsequence/", difficulty: "Easy" },
      { name: "First Unique Character in a String", link: "https://leetcode.com/problems/first-unique-character-in-a-string/", difficulty: "Easy" },
      { name: "Add Strings", link: "https://leetcode.com/problems/add-strings/", difficulty: "Easy" },
      { name: "Valid Palindrome II", link: "https://leetcode.com/problems/valid-palindrome-ii/", difficulty: "Easy" },
      { name: "Reverse Words in a String", link: "https://leetcode.com/problems/reverse-words-in-a-string/", difficulty: "Medium" },
      { name: "Largest Odd Number in String", link: "https://leetcode.com/problems/largest-odd-number-in-string/", difficulty: "Easy" },
      { name: "Sort Characters By Frequency", link: "https://leetcode.com/problems/sort-characters-by-frequency/", difficulty: "Medium" },
      { name: "Find the Index of the First Occurrence in a String", link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/", difficulty: "Easy" }
    ]
  },
  {
    name: "2D Matrix",
    icon: "🧮",
    problems: [
      { name: "Print Matrix in Snake Pattern", link: "https://www.geeksforgeeks.org/problems/print-matrix-in-snake-pattern-1587115621/1", difficulty: "Easy" },
      { name: "Matrix Boundary Traversal", link: "https://www.geeksforgeeks.org/problems/boundary-traversal-of-matrix-1587115620/1", difficulty: "Easy" },
      { name: "Spiral Matrix", link: "https://leetcode.com/problems/spiral-matrix/", difficulty: "Medium" },
      { name: "Transpose Matrix", link: "https://leetcode.com/problems/transpose-matrix/", difficulty: "Easy" },
      { name: "Rotate Image", link: "https://leetcode.com/problems/rotate-image/", difficulty: "Medium" }
    ]
  },
  {
    name: "Recursion",
    icon: "🔁",
    problems: [
      { name: "Fibonacci Number", link: "https://leetcode.com/problems/fibonacci-number/", difficulty: "Easy" },
      { name: "Factorial", link: "https://www.geeksforgeeks.org/problems/factorial5739/1", difficulty: "Easy" },
      { name: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy" },
      { name: "Merge Sorted Array", link: "https://leetcode.com/problems/merge-sorted-array/", difficulty: "Easy" }
    ]
  },
  {
    name: "Linked List",
    icon: "🔗",
    problems: [
      { name: "Delete Node in a Linked List", link: "https://leetcode.com/problems/delete-node-in-a-linked-list/", difficulty: "Medium" },
      { name: "Delete in a Singly Linked List", link: "https://www.geeksforgeeks.org/problems/delete-a-node-in-single-linked-list/1", difficulty: "Easy" },
      { name: "Middle of the Linked List", link: "https://leetcode.com/problems/middle-of-the-linked-list/", difficulty: "Easy" },
      { name: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Easy" },
      { name: "Linked List Cycle II", link: "https://leetcode.com/problems/linked-list-cycle-ii/", difficulty: "Medium" },
      { name: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy" },
      { name: "Palindrome Linked List", link: "https://leetcode.com/problems/palindrome-linked-list/", difficulty: "Medium" },
      { name: "Remove Duplicates from Sorted List", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/", difficulty: "Easy" },
      { name: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy" },
      { name: "Intersection of Two Linked Lists", link: "https://leetcode.com/problems/intersection-of-two-linked-lists/", difficulty: "Medium" },
      { name: "Remove Nth Node from End of List", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Medium" },
      { name: "Odd Even Linked List", link: "https://leetcode.com/problems/odd-even-linked-list/", difficulty: "Medium" },
      { name: "Swap Nodes in Pairs", link: "https://leetcode.com/problems/swap-nodes-in-pairs/", difficulty: "Medium" },
      { name: "Remove Duplicates from Sorted List II", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/", difficulty: "Medium" },
      { name: "Reverse Nodes in k-Group", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/", difficulty: "Hard" },
      { name: "Delete the Middle Node of a Linked List", link: "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/", difficulty: "Medium" },
      { name: "Sort a Linked List of 0s, 1s and 2s", link: "https://www.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1", difficulty: "Medium" }
    ]
  },
  {
    name: "Doubly Linked List",
    icon: "🔗",
    problems: [
      { name: "Reverse a Doubly Linked List", link: "https://www.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1", difficulty: "Easy" },
      { name: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/", difficulty: "Hard" }
    ]
  },
  {
    name: "Stack",
    icon: "📚",
    problems: [
      { name: "Reverse a Stack", link: "https://www.geeksforgeeks.org/problems/reverse-a-stack/1", difficulty: "Medium" },
      { name: "Implement Stack using Array", link: "https://www.geeksforgeeks.org/problems/implement-stack-using-array/1", difficulty: "Easy" },
      { name: "Stack using Linked List", link: "https://www.geeksforgeeks.org/problems/implement-stack-using-linked-list/1", difficulty: "Easy" },
      { name: "Insert an Element at the Bottom of a Stack", link: "https://www.geeksforgeeks.org/problems/insert-an-element-at-the-bottom-of-a-stack/1", difficulty: "Easy" },
      { name: "Delete Mid of a Stack", link: "https://www.geeksforgeeks.org/problems/delete-middle-element-of-a-stack/1", difficulty: "Easy" },
      { name: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy" },
      { name: "Implement Stack using Queues", link: "https://leetcode.com/problems/implement-stack-using-queues/", difficulty: "Easy" },
      { name: "Stack using Single Queue", link: "https://www.geeksforgeeks.org/problems/stack-using-two-queues/1", difficulty: "Easy" },
      { name: "Next Greater Element", link: "https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1", difficulty: "Medium" },
      { name: "Next Greater Element I", link: "https://leetcode.com/problems/next-greater-element-i/", difficulty: "Easy" },
      { name: "Next Greater Element II", link: "https://leetcode.com/problems/next-greater-element-ii/", difficulty: "Medium" },
      { name: "Remove Duplicate Letters", link: "https://leetcode.com/problems/remove-duplicate-letters/", difficulty: "Medium" },
      { name: "Largest Rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Hard" },
      { name: "Infix to Postfix", link: "https://www.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1", difficulty: "Medium" },
      { name: "Asteroid Collision", link: "https://leetcode.com/problems/asteroid-collision/", difficulty: "Medium" },
      { name: "Remove K Digits", link: "https://leetcode.com/problems/remove-k-digits/", difficulty: "Medium" },
      { name: "Sum of Subarray Minimums", link: "https://leetcode.com/problems/sum-of-subarray-minimums/", difficulty: "Medium" },
      { name: "Maximal Rectangle", link: "https://leetcode.com/problems/maximal-rectangle/", difficulty: "Hard" },
      { name: "Stock Span Problem", link: "https://www.geeksforgeeks.org/problems/stock-span-problem-1587115621/1", difficulty: "Medium" },
      { name: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Hard" }
    ]
  },
  {
    name: "Queue",
    icon: "🚶",
    problems: [
      { name: "Reverse Queue", link: "https://www.geeksforgeeks.org/problems/queue-reversal/1", difficulty: "Easy" },
      { name: "Stream First Non-repeating", link: "https://www.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream1216/1", difficulty: "Medium" },
      { name: "Reverse First K of a Queue", link: "https://www.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1", difficulty: "Easy" }
    ]
  },
  {
    name: "Trees",
    icon: "🌳",
    problems: [
      { name: "Binary Tree Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/", difficulty: "Easy" },
      { name: "Binary Tree Preorder Traversal", link: "https://leetcode.com/problems/binary-tree-preorder-traversal/", difficulty: "Easy" },
      { name: "Binary Tree Postorder Traversal", link: "https://leetcode.com/problems/binary-tree-postorder-traversal/", difficulty: "Easy" },
      { name: "Count Leaves in Binary Tree", link: "https://www.geeksforgeeks.org/problems/count-leaves-in-binary-tree/1", difficulty: "Easy" },
      { name: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy" },
      { name: "Count Complete Tree Nodes", link: "https://leetcode.com/problems/count-complete-tree-nodes/", difficulty: "Medium" },
      { name: "Sum of Left Leaves", link: "https://leetcode.com/problems/sum-of-left-leaves/", difficulty: "Easy" },
      { name: "Same Tree", link: "https://leetcode.com/problems/same-tree/", difficulty: "Easy" },
      { name: "Invert Binary Tree", link: "https://leetcode.com/problems/invert-binary-tree/", difficulty: "Easy" },
      { name: "Diameter of Binary Tree", link: "https://leetcode.com/problems/diameter-of-binary-tree/", difficulty: "Medium" },
      { name: "Balanced Binary Tree", link: "https://leetcode.com/problems/balanced-binary-tree/", difficulty: "Easy" },
      { name: "Binary Tree Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Medium" },
      { name: "Binary Tree Zigzag Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", difficulty: "Medium" },
      { name: "Tree Boundary Traversal", link: "https://www.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1", difficulty: "Medium" },
      { name: "Binary Tree Right Side View", link: "https://leetcode.com/problems/binary-tree-right-side-view/", difficulty: "Medium" },
      { name: "Left View of Binary Tree", link: "https://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1", difficulty: "Easy" },
      { name: "Top View of Binary Tree", link: "https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1", difficulty: "Medium" },
      { name: "Bottom View of Binary Tree", link: "https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1", difficulty: "Medium" },
      { name: "K Distance from Root", link: "https://www.geeksforgeeks.org/problems/k-distance-from-root/0", difficulty: "Easy" },
      { name: "Lowest Common Ancestor of a Binary Tree", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", difficulty: "Medium" }
    ]
  },
  {
    name: "Binary Search Tree",
    icon: "🌲",
    problems: [
      { name: "Search in a Binary Search Tree", link: "https://leetcode.com/problems/search-in-a-binary-search-tree/", difficulty: "Easy" },
      { name: "Range Sum of BST", link: "https://leetcode.com/problems/range-sum-of-bst/", difficulty: "Easy" },
      { name: "Convert Sorted Array to Binary Search Tree", link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/", difficulty: "Easy" },
      { name: "Two Sum IV - Input is a BST", link: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/", difficulty: "Easy" },
      { name: "Insert into a Binary Search Tree", link: "https://leetcode.com/problems/insert-into-a-binary-search-tree/", difficulty: "Medium" },
      { name: "Kth Smallest Element in a BST", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", difficulty: "Medium" },
      { name: "Validate Binary Search Tree", link: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Medium" },
      { name: "Lowest Common Ancestor of a Binary Search Tree", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", difficulty: "Medium" }
    ]
  }
];

// ===== HELPER FUNCTIONS =====

// Get saved state from localStorage
function getCheckedState() {
  const saved = localStorage.getItem("dsaCheckedState");
  return saved ? JSON.parse(saved) : {};
}

// Save state to localStorage
function saveCheckedState(state) {
  localStorage.setItem("dsaCheckedState", JSON.stringify(state));
}

// Count total problems
function getTotalProblems() {
  let total = 0;
  topics.forEach(function (topic) {
    total += topic.problems.length;
  });
  return total;
}

// Count completed problems
function getCompletedCount() {
  const state = getCheckedState();
  let count = 0;
  for (const key in state) {
    if (state[key] === true) {
      count++;
    }
  }
  return count;
}

// ===== PROGRESS BAR =====
function updateProgressBar() {
  const total = getTotalProblems();
  const completed = getCompletedCount();
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  const bar = document.getElementById("progress-bar");
  const text = document.getElementById("progress-text");
  const percentText = document.getElementById("progress-percent");

  if (bar) bar.style.width = percent + "%";
  if (text) text.textContent = "Completed " + completed + " out of " + total + " Problems";
  if (percentText) percentText.textContent = percent + "%";

  // Update topic counters
  topics.forEach(function (topic, tIdx) {
    const state = getCheckedState();
    let topicDone = 0;
    topic.problems.forEach(function (_, pIdx) {
      const key = "t" + tIdx + "p" + pIdx;
      if (state[key]) topicDone++;
    });
    const counter = document.getElementById("topic-count-" + tIdx);
    if (counter) counter.textContent = topicDone + " / " + topic.problems.length;
  });
}

// ===== TOGGLE SECTION =====
function toggleSection(index) {
  const content = document.getElementById("section-" + index);
  const arrow = document.getElementById("arrow-" + index);
  if (!content) return;

  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    content.style.maxHeight = content.scrollHeight + "px";
    if (arrow) arrow.style.transform = "rotate(180deg)";
  } else {
    content.style.maxHeight = "0px";
    setTimeout(function () {
      content.classList.add("hidden");
    }, 300);
    if (arrow) arrow.style.transform = "rotate(0deg)";
  }
}

// ===== CHECKBOX HANDLER =====
function handleCheckbox(topicIdx, problemIdx) {
  const key = "t" + topicIdx + "p" + problemIdx;
  const checkbox = document.getElementById("cb-" + key);
  const row = document.getElementById("row-" + key);
  const state = getCheckedState();

  if (checkbox.checked) {
    state[key] = true;
    if (row) {
      row.classList.add("bg-emerald-900/20");
      row.classList.add("opacity-70");
    }
  } else {
    delete state[key];
    if (row) {
      row.classList.remove("bg-emerald-900/20");
      row.classList.remove("opacity-70");
    }
  }

  saveCheckedState(state);
  updateProgressBar();
}

// ===== DIFFICULTY BADGE =====
function getDifficultyBadge(difficulty) {
  let colorClasses = "";
  if (difficulty === "Easy") {
    colorClasses = "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
  } else if (difficulty === "Medium") {
    colorClasses = "bg-orange-500/20 text-orange-400 border border-orange-500/30";
  } else {
    colorClasses = "bg-red-500/20 text-red-400 border border-red-500/30";
  }
  return '<span class="inline-block rounded-full px-3 py-1 text-xs font-semibold ' + colorClasses + '">' + difficulty + "</span>";
}

// ===== PRACTICE BUTTON =====
function getPracticeButton(link) {
  if (!link) {
    return '<button disabled class="w-9 h-9 rounded-full bg-slate-700/50 text-slate-500 cursor-not-allowed flex items-center justify-center text-sm" title="No link available">&lt;/&gt;</button>';
  }
  return '<a href="' + link + '" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/40 hover:text-indigo-300 flex items-center justify-center text-sm font-bold transition-all duration-200 border border-indigo-500/30 hover:border-indigo-400/50 hover:scale-110" title="Practice">&lt;/&gt;</a>';
}

// ===== RENDER ALL SECTIONS =====
function renderTopics() {
  const container = document.getElementById("topics-container");
  if (!container) return;

  const state = getCheckedState();
  let html = "";

  topics.forEach(function (topic, tIdx) {
    // Count completed for this topic
    let topicDone = 0;
    topic.problems.forEach(function (_, pIdx) {
      const key = "t" + tIdx + "p" + pIdx;
      if (state[key]) topicDone++;
    });

    html += '<div class="mb-4">';
    // Topic header button
    html += '<button onclick="toggleSection(' + tIdx + ')" class="w-full flex items-center justify-between px-5 py-4 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl transition-all duration-200 border border-slate-700/50 hover:border-slate-600/50 group">';
    html += '<div class="flex items-center gap-3">';
    html += '<span class="text-2xl">' + topic.icon + "</span>";
    html += '<span class="text-lg font-semibold text-slate-100">' + topic.name + "</span>";
    html += '<span id="topic-count-' + tIdx + '" class="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-700 text-slate-400">' + topicDone + " / " + topic.problems.length + "</span>";
    html += "</div>";
    html += '<svg id="arrow-' + tIdx + '" class="w-5 h-5 text-slate-400 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
    html += "</button>";

    // Collapsible content
    html += '<div id="section-' + tIdx + '" class="hidden overflow-hidden transition-all duration-300" style="max-height: 0px;">';
    html += '<div class="mt-2 overflow-x-auto rounded-xl border border-slate-700/50">';
    html += '<table class="w-full text-left">';
    html += '<thead><tr class="bg-slate-800/60">';
    html += '<th class="px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider w-12">✔</th>';
    html += '<th class="px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Problem</th>';
    html += '<th class="px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider w-20 text-center">Practice</th>';
    html += '<th class="px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider w-28 text-center">Difficulty</th>';
    html += "</tr></thead><tbody>";

    topic.problems.forEach(function (problem, pIdx) {
      const key = "t" + tIdx + "p" + pIdx;
      const checked = state[key] ? true : false;
      const rowClasses = checked ? "bg-emerald-900/20 opacity-70" : "";

      html += '<tr id="row-' + key + '" class="border-t border-slate-700/30 hover:bg-slate-800/40 transition-colors duration-150 ' + rowClasses + '">';
      // Checkbox
      html += '<td class="px-4 py-3">';
      html += '<input type="checkbox" id="cb-' + key + '" onchange="handleCheckbox(' + tIdx + "," + pIdx + ')" ' + (checked ? "checked" : "") + ' class="w-4 h-4 rounded border-slate-600 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0 focus:ring-1 cursor-pointer accent-emerald-500">';
      html += "</td>";
      // Problem name
      html += '<td class="px-4 py-3 text-sm text-slate-200">' + problem.name + "</td>";
      // Practice button
      html += '<td class="px-4 py-3 text-center">' + getPracticeButton(problem.link) + "</td>";
      // Difficulty badge
      html += '<td class="px-4 py-3 text-center">' + getDifficultyBadge(problem.difficulty) + "</td>";
      html += "</tr>";
    });

    html += "</tbody></table></div></div></div>";
  });

  container.innerHTML = html;
}

// ===== INITIALIZE =====
document.addEventListener("DOMContentLoaded", function () {
  renderTopics();
  updateProgressBar();
});
