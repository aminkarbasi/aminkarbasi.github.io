+++
date = "2015-06-03"
title = "Sequential Information Maximization: When is Greedy Near-optimal?"
math = "true"
description = "publication"
publish = "COLT"
category = "conference"
weight=2
author = "Yuxin Chen, S. Hamed Hassani, Amin Karbasi, Andreas Krause"
link = "http://proceedings.mlr.press/v40/Chen15b.pdf"
+++

## Abstract

Optimal information gathering is a central challenge in machine learning and science in general. A common objective that quantifies the usefulness of observations is Shannon’s mutual information, defined w.r.t. a probabilistic model. Greedily selecting observations that maximize the mutual information is the method of choice in numerous applications, ranging from Bayesian experimental design to automated diagnosis, to active learning in Bayesian models. Despite its importance and widespread use in applications, little is known about the theoretical properties of sequential information maximization, in particular under noisy observations. In this paper, we analyze the widely used greedy policy for this task, and identify problem instances where it provides provably near-maximal utility, even in the challenging setting of persistent noise. Our results depend on a natural separability condition associated with a channel injecting noise into the observations. We also identify examples where this separability parameter is necessary in the bound: if it is too small, then the greedy policy fails to select informative tests.


