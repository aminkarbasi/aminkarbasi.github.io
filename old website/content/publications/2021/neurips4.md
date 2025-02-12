+++
date = "2021-09-01"
title = "Parallelizing Thompson Sampling"
math = "true"
description = "publication"
publish = "NeurIPS"
category = "conference"
weight=2
author = "Amin Karbasi, Vahab Mirrokni, Mohammad Shadravan"
link = "https://arxiv.org/pdf/2106.01420.pdf"
keyword3="submodular optimization"
+++

# Abstract

How can we make use of information parallelism in online decision making problems while efficiently balancing the exploration-exploitation trade-off? In this paper, we introduce a batch Thompson Sampling framework for two canonical online decision making problems, namely, stochastic multi-arm bandit and linear contextual bandit with finitely many arms. Over a time horizon T , our batch Thompson Sampling policy achieves the same (asymptotic) regret bound of a fully sequential one while carrying out only O(log T ) batch queries. To achieve this exponential reduction, i.e., reducing the number of interactions from T to O(logT), our batch policy dy- namically determines the duration of each batch in order to balance the exploration-exploitation trade-off. We also demonstrate experimentally that dynamic batch allocation dramatically out- performs natural baselines such as static batch allocations.
