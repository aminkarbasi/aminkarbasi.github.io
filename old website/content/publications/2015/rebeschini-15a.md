+++
date = "2015-07-03"
title = "Fast Mixing for Discrete Point Processes"
math = "true"
description = "publication"
publish = "COLT"
category = "conference"
weight=2
author = "Patrick Rebeschini, Amin Karbasi"
link = "http://proceedings.mlr.press/v40/Rebeschini15.pdf"
+++

## Abstract

We investigate the systematic mechanism for designing fast mixing Markov chain Monte Carlo algorithms to sample from discrete point processes under the Dobrushin uniqueness condition for Gibbs measures. Discrete point processes are defined as probability distributions μ(S)∝\exp(βf(S)) over all subsets $S\in 2^V$ of a finite set V through a bounded set function $f:2^V→\mathbb{R}$ and a parameter β>0. A subclass of discrete point processes characterized by submodular functions (which include log-submodular distributions, submodular point processes, and determinantal point processes) has recently gained a lot of interest in machine learning and shown to be effective for modeling diversity and coverage. We show that if the set function (not necessarily submodular) displays a natural notion of decay of correlation, then, for βsmall enough, it is possible to design fast mixing Markov chain Monte Carlo methods that yield error bounds on marginal approximations that do not depend on the size of the set V. The sufficient conditions that we derive involve a control on the (discrete) Hessian of set functions, a quantity that has not been previously considered in the literature. We specialize our results for submodular functions, and we discuss canonical examples where the Hessian can be easily controlled.


