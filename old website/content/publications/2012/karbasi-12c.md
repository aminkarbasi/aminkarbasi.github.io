+++
date = "2012-04-03"
title = "Sequential group testing with graph constraints"
math = "true"
description = "publication"
publish = "ITW"
category = "conference"
weight=2
author = "Amin Karbasi, Morteza Zadimoghaddam"
link = "/files/amin-12d.pdf"
keyword1="interactive decision making"
+++

# Abstract

In conventional group testing, the goal is to detect a small subset of defecting items D in a large population N by grouping arbitrary subset of N into different pools. The result of each group test T is a binary output depending on whether the group contains a defective item or not. The main challenge is to minimize the number of pools required to identify the set D. Motivated by applications in network monitoring and infection propagation, we consider the problem of group testing with graph constraints. As opposed to conventional group testing where any subset of items can be pooled, here a test is admissible if it induces a connected subgraph H ⊂ G. In contrast to the non-adaptive pooling process used in previous work, we first show that by exploiting an adaptive strategy, one can dramatically reduce the number of tests. More specifically, for any graph G, we devise a 2-approximation algorithm (and hence order optimal) that locates the set of defective items D. To obtain a good compromise between adaptive and non-adaptive strategies, we then devise a multi-stage algorithm. In particular, we show that if the set of defective items are uniformly distributed, then an l-stage pooling strategy can identify the defective set in $O(l·|D|·|N|^{1/l} )$ tests, on the average. In particular, for l = log(|N|) stages, the number of tests reduces to 4|D| log(|N|), which in turn is order optimum.





