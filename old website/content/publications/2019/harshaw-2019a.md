+++
date = "2019-10-03"
title="Submodular Maximization beyond Non-negativity: Guarantees, Fast Algorithms, and Applications"
math = "true"
description = "publication"
publish = "ICML"
category = "conference"
weight=2
award="Full Oral Presentation"
author = "Chris Harshaw, Moran Feldman, Justin Ward, Amin Karbasi:"
link = "http://proceedings.mlr.press/v97/harshaw19a/harshaw19a.pdf"
keyword1="submodular optimization"
keyword2=""
+++

# Abstract

It is generally believed that submodular functions–and the more general class of γ
-weakly submodular functions–may only be optimized under the non-negativity assumption f(S)≥0
. In this paper, we show that once the function is expressed as the difference f=g−c
, where g
 is monotone, non-negative, and γ
-weakly submodular and c
 is non-negative modular, then strong approximation guarantees may be obtained. We present an algorithm for maximizing g−c
 under a k
-cardinality constraint which produces a random feasible set S
 such that $𝔼[g(S)−c(S)]\geq (1−e−γ−\epsilon)g(OPT)−c(OPT)$
, whose running time is $O(\frac{n}{\epsilon}log2\frac{1}{\epsilon})$
, independent of k
. We extend these results to the unconstrained setting by describing an algorithm with the same approximation guarantees and faster $O(n\frac{1}{\epsilon}log^2\frac{1}{\epsilon})$

 runtime. The main techniques underlying our algorithms are two-fold: the use of a surrogate objective which varies the relative importance between g
 and c
 throughout the algorithm, and a geometric sweep over possible γ
 values. Our algorithmic guarantees are complemented by a hardness result showing that no polynomial-time algorithm which accesses g
 through a value oracle can do better. We empirically demonstrate the success of our algorithms by applying them to experimental design on the Boston Housing dataset and directed vertex cover on the Email EU dataset.
