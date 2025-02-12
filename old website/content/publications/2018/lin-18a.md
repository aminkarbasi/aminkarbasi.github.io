+++
date = "2018-09-03"
title = "Online Continuous Submodular Maximization"
math = "true"
description = "publication"
publish = "AISTATS"
category = "conference"
award="Oral Presentation"
weight=2
author = "Lin Chen, Hamed Hassani, Amin Karbasi"
link = "http://proceedings.mlr.press/v84/chen18f/chen18f.pdf"
keyword1="submodular optimization"
keyword3="online learning"
+++

## Abstract

In this paper, we consider an online optimization process, where the objective functions are not convex (nor concave) but instead belong to a broad class of continuous submodular functions. We first propose a variant of the Frank-Wolfe algorithm that has access to the full gradient of the objective functions. We show that it achieves a regret bound of $O(\sqrt(T))$
 (where T
 is the horizon of the online optimization problem) against a (1−1/e)
-approximation to the best feasible solution in hindsight. However, in many scenarios, only an unbiased estimate of the gradients are available. For such settings, we then propose an online stochastic gradient ascent algorithm that also achieves a regret bound of $O(\sqrt(T))$
 regret, albeit against a weaker 1/2
-approximation to the best feasible solution in hindsight. We also generalize our results to γ
-weakly submodular functions and prove the same sublinear regret bounds. Finally, we demonstrate the efficiency of our algorithms on a few problem instances, including non-convex/non-concave quadratic programs, multilinear extensions of submodular set functions, and D-optimal design.


