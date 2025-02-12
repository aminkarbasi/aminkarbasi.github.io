+++
date = "2019-11-03"
title="Stochastic Continuous Greedy ++: When Upper and Lower Bounds Match"
math = "true"
description = "publication"
publish = "NeurIPS"
category = "conference"
weight=2
author = "Amin Karbasi, Hamed Hassani, Aryan Mokhtari, Zebang Shen"
link = "http://papers.nips.cc/paper/9466-stochastic-continuous-greedy-when-upper-and-lower-bounds-match.pdf"
keyword1="submodular optimization"
keyword2="continuous optimization"
+++

# Abstract

In this paper, we develop $\scg~(\text{SCG}{++})$, the first efficient variant of a conditional gradient method for maximizing a continuous submodular function subject to a convex constraint. Concretely, for a monotone and continuous DR-submodular function, \SCGPP achieves a tight [(1−1/e)\OPT−ϵ] solution while using $O(1/ϵ^2)$ stochastic gradients and O(1/ϵ) calls to the linear optimization oracle. The best previously known algorithms either achieve a suboptimal $[(1/2)\OPT−ϵ]$ solution with $O(1/ϵ^2)$ stochastic gradients or the tight $[(1−1/e)\OPT−ϵ]$ solution with suboptimal $O(1/ϵ^3)$ stochastic gradients. We further provide an information-theoretic lower bound to showcase the necessity of $\OM(1/ϵ^2)$ stochastic oracle queries in order to achieve $[(1−1/e)\OPT−ϵ]$ for monotone and DR-submodular functions. This result shows that our proposed \SCGPP enjoys optimality in terms of both approximation guarantee, i.e., (1−1/e) approximation factor, and stochastic gradient evaluations, i.e., O(1/ϵ2) calls to the stochastic oracle. By using stochastic continuous optimization as an interface, we also show that it is possible to obtain the $[(1−1/e)\OPT−ϵ]$ tight approximation guarantee for maximizing a monotone but stochastic submodular set function subject to a general matroid constraint after at most $O(n^2/ϵ^2)$ calls to the stochastic function value, where n is the number of elements in the ground set.
