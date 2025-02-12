+++
date = "2021-05-03"
title = "Regularized Submodular Maximization at Scale"
math = "true"
description = "publication"
publish = "ICML"
category = "conference"
weight=2
author = "Ehsan Kazemi, Shervin Minaee, Moran Feldman, Amin Karbasi"
link = "https://arxiv.org/pdf/2002.03503.pdf"
keyword3="submodular optimization"
+++

# Abstract

In this paper, we propose scalable methods for maximizing a regularized submodular function f(·) = g(·) − l(·) expressed as the difference between a monotone submodular function g and a modular function l. Indeed, submodularity is inherently related to the notions of diversity, coverage, and representativeness. In particular, finding the mode (i.e., the most likely configuration) of many popular probabilistic models of diversity, such as determinantal point processes, submodular probabilistic models, and strongly log-concave distributions, involves maximization of (regularized) submodular functions. Since a regularized function f can potentially take on negative values, the classic theory of submodular maximization, which heavily relies on the assumption that the submodular function is non-negative, may not be applicable. To circumvent this challenge, we develop Distorted-Streaming, the first one-pass streaming algorithm for maximizing a regularized submodular function subject to a k-cardinality constraint. It returns a solution S with the guarantee that f(S) ≥ (φ−2 − ε) · g(OPT) − l(OPT), where φ is the golden ratio (and thus, φ−2 ≈ 0.382). Furthermore, we develop Distorted-Distributed-Greedy, the first distributed algorithm that returns a solution S with the guarantee that E[f(S)] ≥ (1−ε)􏰀(1−e−1)·g(OPT)−l(OPT)􏰁 in O(1/ε) rounds of MapReduce computation. We should highlight that our result, even for the unregularized case where the modular term l is zero, improves the memory and communication complexity of the existing work by a factor of O(1/ε) as it manages to avoid the need (of this existing work) to keep multiple copies of the entire dataset. Moreover, it does so while (arguably) providing a simpler distributed algorithm and a unifying analysis. We also empirically study the performance of our scalable methods on a set of real-life applications, including vertex cover of social networks, mode of strongly log-concave distributions, data summarization (such as video summarization, location summarization, and text summarization), and product recommendation.
