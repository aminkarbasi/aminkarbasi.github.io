+++
date = "2013-06-03"
title = "Constrained Binary Identification Problem"
math = "true"
description = "publication"
publish = "STACS"
category = "conference"
weight=2
author = "Amin Karbasi, Morteza Zadimoghaddam"
link = "https://drops.dagstuhl.de/opus/volltexte/2013/3964/pdf/52.pdf"
keyword1="interactive decision making"
+++

## Abstract

We consider the problem of building a binary decision tree, to locate an object within a set by way of the least number of membership queries. This problem is equivalent to the "20 questions game" of information theory and is closely related to lossless source compression. If any query is admissible, Huffman coding is optimal with close to H[P] questions on average, the entropy of the prior distribution P over objects. However, in many realistic scenarios, there are constraints on which queries can be asked, and solving the problem optimally is NP-hard. We provide novel polynomial time approximation algorithms where constraints are defined in terms of "graph", general "cost", and "submodular" functions. In particular, we show that under graph constraints, there exists a constant approximation algorithm for locating the target in the set. We then extend our approach for scenarios where the constraints are defined in terms of general cost functions that depend only on the size of the query and provide an approximation algorithm that can find the target within O(log(log n)) gap from the cost of the optimum algorithm. Submodular functions come as a natural generalization of cost functions with decreasing marginals. Under submodular set constraints, we devise an approximation algorithm that can find the target within O(log n) gap from the cost of the optimum algorithm. The proposed algorithms are greedy in a sense that at each step they select a query that most evenly splits the set without violating the underlying constraints. These results can be applied to network tomography, active learning and interactive content search.

