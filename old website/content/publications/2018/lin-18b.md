+++
date = "2018-10-03"
title = "Weakly Submodular Maximization Beyond Cardinality Constraints: Does Randomization Help Greedy?"
math = "true"
description = "publication"
publish = "ICML"
category = "conference"
weight=2
author = "Lin Chen, Moran Feldman, Amin Karbasi"
link = "http://proceedings.mlr.press/v80/chen18b/chen18b.pdf"
keyword1="submodular optimization"
keyword2="Trust"
+++

## Abstract

Submodular functions are a broad class of set functions that naturally arise in many machine learning applications. Due to their combinatorial structures, there has been a myriad of algorithms for maximizing such functions under various constraints. Unfortunately, once a function deviates from submodularity (even slightly), the known algorithms may perform arbitrarily poorly. Amending this issue, by obtaining approximation results for functions obeying properties that generalize submodularity, has been the focus of several recent works. One such class, known as weakly submodular functions, has received a lot of recent attention from the machine learning community due to its strong connections to restricted strong convexity and sparse reconstruction. In this paper, we prove that a randomized version of the greedy algorithm achieves an approximation ratio of $(1+1/γ)^{-2}$
 for weakly submodular maximization subject to a general matroid constraint, where γ
 is a parameter measuring the distance from submodularity. To the best of our knowledge, this is the first algorithm with a non-trivial approximation guarantee for this constrained optimization problem. Moreover, our experimental results show that our proposed algorithm performs well in a variety of real-world problems, including regression, video summarization, splice site detection, and black-box interpretation.

