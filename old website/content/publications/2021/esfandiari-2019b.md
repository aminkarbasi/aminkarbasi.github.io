+++
date = "2021-04-03"
title = "Adaptivity in Adaptive Submodularity"
math = "true"
description = "publication"
publish = "COLT"
category = "conference"
weight=2
author = "Hossein Esfandiari, Amin Karbasi, Vahab S. Mirrokni"
link = "http://proceedings.mlr.press/v134/esfandiari21a/esfandiari21a.pdf"
keyword1="submodular optimization"
keyword2="interactive decision making"
+++

# Abstract

Adaptive sequential decision making is one of the central challenges in machine learning and artificial intelligence. In such problems, the goal is to design an interactive policy that plans for an action to take, from a finite set of n actions, given some partial observations. It has been shown that in many applications such as active learning, robotics, sequential experimental design, and active detection, the utility function satisfies adaptive submodularity, a notion that generalizes the notion of diminishing returns to policies. In this paper, we revisit the power of adaptivity in maximizing an adaptive monotone submodular function. We propose an efficient batch policy that with O(logn×logk) adaptive rounds of observations can achieve an almost tight (1−1/e−ϵ) approximation guarantee with respect to an optimal policy that carries out k actions in a fully sequential setting. To complement our results, we also show that it is impossible to achieve a constant factor approximation with o(logn) adaptive rounds. We also extend our result to the case of adaptive stochastic minimum cost coverage where the goal is to reach a desired utility Q with the cheapest policy. We first prove the conjecture by Golovin and Krause that the greedy policy achieves the asymptotically tight logarithmic approximation guarantee without resorting to stronger notions of adaptivity. We then propose a batch policy that provides the same guarantee in polylogarithmic adaptive rounds through a similar information-parallelism scheme. Our results shrink the adaptivity gap in adaptive submodular maximization by an exponential factor.
