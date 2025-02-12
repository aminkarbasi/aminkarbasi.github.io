+++
date = "2020-12-03"
title = "Stochastic Conditional Gradient++"
math = "true"
description = "publication"
publish = "SIAM Journal on Optimization"
category = "journal"
weight=3
author = "Hamed Hassani, Amin Karbasi, Aryan Mokhtari, Zebang Shen"
link = "https://arxiv.org/pdf/1902.06992.pdf"
keyword1="continuous optimization"
keyword2=""
+++

# Abstract

In this paper, we consider the general non-oblivious stochastic optimization where the underlying stochasticity may change during the optimization procedure and depends on the point at which the function is evaluated. We develop Stochastic Frank-Wolfe++ (SFW++), an efficient variant of the conditional gradient method for minimizing a smooth non-convex function subject to a convex body constraint. We show that SFW++ converges to an ϵ-first order stationary point by using $O(1/ϵ^3)$ stochastic gradients. Once further structures are present, SFW++'s theoretical guarantees, in terms of the convergence rate and quality of its solution, improve. In particular, for minimizing a convex function, SFW++ achieves an ϵ-approximate optimum while using $O(1/ϵ^2)$ stochastic gradients. It is known that this rate is optimal in terms of stochastic gradient evaluations. Similarly, for maximizing a monotone continuous DR-submodular function, a slightly different form of SFW++, called Stochastic Continuous Greedy++ (SCG++), achieves a tight [(1−1/e)OPT−ϵ] solution while using $O(1/ϵ^2)$ stochastic gradients. Through an information theoretic argument, we also prove that SCG++'s convergence rate is optimal. Finally, for maximizing a non-monotone continuous DR-submodular function, we can achieve a [(1/e)OPT−ϵ] solution by using $O(1/ϵ^2)$ stochastic gradients. We should highlight that our results and our novel variance reduction technique trivially extend to the standard and easier oblivious stochastic optimization settings for (non-)covex and continuous submodular settings.

