+++
date = "2018-10-03"
title = "Projection-Free Online Optimization with Stochastic Gradient: From Convexity to Submodularity."
math = "true"
description = "publication"
publish = "ICML"
category = "conference"
weight=2
author = "Lin Chen, Christopher Harshaw, Hamed Hassani, Amin Karbasi"
link = "http://proceedings.mlr.press/v80/chen18c/chen18c.pdf"
keyword1="submodular optimization"
keyword3="online learning"
+++

## Abstract

Online optimization has been a successful framework for solving large-scale problems under computational constraints and partial information. Current methods for online convex optimization require either a projection or exact gradient computation at each step, both of which can be prohibitively expensive for large-scale applications. At the same time, there is a growing trend of non-convex optimization in machine learning community and a need for online methods. Continuous DR-submodular functions, which exhibit a natural diminishing returns condition, have recently been proposed as a broad class of non-convex functions which may be efficiently optimized. Although online methods have been introduced, they suffer from similar problems. In this work, we propose Meta-Frank-Wolfe, the first online projection-free algorithm that uses stochastic gradient estimates. The algorithm relies on a careful sampling of gradients in each round and achieves the optimal $O(\sqrt{T})$
adversarial regret bounds for convex and continuous submodular optimization. We also propose One-Shot Frank-Wolfe, a simpler algorithm which requires only a single stochastic gradient estimate in each round and achieves an $O(T^{2/3})$
stochastic regret bound for convex and continuous submodular optimization. We apply our methods to develop a novel "lifting" framework for the online discrete submodular maximization and also see that they outperform current state-of-the-art techniques on various experiments.

