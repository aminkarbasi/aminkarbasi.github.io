+++
date = "2019-10-03"
title="Submodular Streaming in All Its Glory: Tight Approximation, Minimum Memory and Low Adaptive Complexity. "
math = "true"
description = "publication"
publish = "ICML"
category = "conference"
weight=2
author = "Ehsan Kazemi, Marko Mitrovic, Morteza Zadimoghaddam, Silvio Lattanzi, Amin Karbasi"
link = "http://proceedings.mlr.press/v97/kazemi19a/kazemi19a.pdf"
keyword1="submodular optimization"
keyword2=""
+++

# Abstract

Streaming algorithms are generally judged by the quality of their solution, memory footprint, and computational complexity. In this paper, we study the problem of maximizing a monotone submodular function in the streaming setting with a cardinality constraint k
. We first propose SIEVE-STREAMING++, which requires just one pass over the data, keeps only O(k)
 elements and achieves the tight $\frac{1}{2}$
-approximation guarantee. The best previously known streaming algorithms either achieve a suboptimal $\frac{1}{4}$ -approximation with Θ(k)
 memory or the optimal 12
-approximation with O(klogk)
 memory. Next, we show that by buffering a small fraction of the stream and applying a careful filtering procedure, one can heavily reduce the number of adaptive computational rounds, thus substantially lowering the computational complexity of SIEVE-STREAMING++. We then generalize our results to the more challenging multi-source streaming setting. We show how one can achieve the tight $\frac{1}{2}$
-approximation guarantee with O(k)
 shared memory, while minimizing not only the rounds of computations but also the total number of communicated bits. Finally, we demonstrate the efficiency of our algorithms on real-world data summarization tasks for multi-source streams of tweets and of YouTube videos.
