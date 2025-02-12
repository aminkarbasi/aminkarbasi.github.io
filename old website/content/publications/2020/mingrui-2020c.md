+++
date = "2020-09-03"
title = "One Sample Stochastic Frank-Wolfe"
math = "true"
description = "publication"
publish = "AISTATS"
category = "conference"
weight=2
author = "Mingrui Zhang, Zebang Shen, Aryan Mokhtari, Hamed Hassani, Amin Karbasi"
link = "http://proceedings.mlr.press/v108/zhang20i.html"
keyword1="continuous optimization"
keyword2=""
+++

# Abstract

One of the beauties of the projected gradient descent method lies in its rather simple mechanism and yet stable behavior with inexact, stochastic gradients, which has led to its wide-spread use in many machine learning applications. However, once we replace the projection operator with a simpler linear program, as is done in the Frank-Wolfe method, both simplicity and stability take a serious hit. The aim of this paper is to bring them back without sacrificing the efficiency. In this paper, we propose the first one-sample stochastic Frank-Wolfe algorithm, called 1-SFW, that avoids the need to carefully tune the batch size, step size, learning rate, and other complicated hyper parameters. In particular, 1-SFW achieves the optimal convergence rate of $O(1/ϵ^2)$ for reaching an ϵ-suboptimal solution in the stochastic convex setting, and a (1−1/e)−ϵ approximate solution for a stochastic monotone DR-submodular maximization problem. Moreover, in a general non-convex setting, 1-SFW finds an ϵ-first-order stationary point after at most $O(1/ϵ^3)$ iterations, achieving the current best known convergence rate. All of this is possible by designing a novel unbiased momentum estimator that governs the stability of the optimization process while using a single sample at each iteration.

