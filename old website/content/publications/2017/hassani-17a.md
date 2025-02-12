+++
date = "2017-11-03"
title = "Gradient Methods for Submodular Maximization"
math = "true"
description = "publication"
publish = "NeurIPS"
category = "conference"
weight=2
author = "S. Hamed Hassani, Mahdi Soltanolkotabi, Amin Karbasi"
link = "https://papers.nips.cc/paper/7166-gradient-methods-for-submodular-maximization.pdf"
+++

## Abstract

In this paper, we study the problem of maximizing continuous submodular functions that naturally arise in many learning applications such as those involving utility functions in active learning and sensing, matrix approximations and network inference. Despite the apparent lack of convexity in such functions, we prove that stochastic projected gradient methods can provide strong approximation guarantees for maximizing continuous submodular functions with convex constraints. More specifically, we prove that for monotone continuous DR-submodular functions, all fixed points of projected gradient ascent provide a factor 1/2 approximation to the global maxima. We also study stochastic gradient methods and show that after $O(1/ϵ^2)$ iterations these methods reach solutions which achieve in expectation objective values exceeding (OPT2−ϵ). An immediate application of our results is to maximize submodular functions that are defined stochastically, i.e. the submodular function is defined as an expectation over a family of submodular functions with an unknown distribution. We will show how stochastic gradient methods are naturally well-suited for this setting, leading to a factor 1/2 approximation when the function is monotone. In particular, it allows us to approximately maximize discrete, monotone submodular optimization problems via projected gradient ascent on a continuous relaxation, directly connecting the discrete and continuous domains. Finally, experiments on real data demonstrate that our projected gradient methods consistently achieve the best utility compared to other continuous baselines while remaining competitive in terms of computational effort.

