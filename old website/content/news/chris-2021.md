+++
title = "Chris Harshaw Graduated"
slug = "chris-2021.md"
semester="Spring"
description = "news"
link = "/publications/thesis/chris-thesis.pdf"
date = "2021-09-27"
category = "thesis"
+++


Chris Harshaw Graduated with his PhD thesis entitled “Algorithmic Advances for the Design and Analysis of Randomized Experiments”.

Adviserr: Daniel Spielman and Amin Karbasi

Abstract: 
Randomized experiments are the gold standard for investigating the causal effect of treatment on a population. In this dissertation, we present algorithmic advances for three different problems arising in the design and analysis of randomized experiments: covariate balancing, variance estimation, and bipartite experiments.
In the first chapter, we describe an inherent trade-off between covariate balancing and robustness, which we formulate as a distributional discrepancy problem. In order to navigate this trade-off, we present the Gram–Schmidt Walk Design which is based on the recent discrepancy algorithm of Bansal, Dadush, Garg, and Lovett (2019). By tightening the algorithmic analysis, we derive bounds on the mean squared error of the Horvitz–Thompson estimator under this design in terms of a ridge regression of the outcomes on the covariates, which we interpret as regression by design. We carry out further analysis including tail bounds on effect estimator, methods for constructing confidence intervals, and an extension of the design which accommodates non-linear responses via kernel methods.
In the second chapter, we study the problem of estimating the variance of treat- ment effect estimators under interference. It is well-known that unbiased variance estimation is impossible without strong assumption on the outcomes, due to the fundamental problem of causal inference. Thus, we study a class of conservative es- timators which are based on variance bounds. We identify conditions under which the variance bounds themselves are admissible and provide a general algorithmic framework to construct admissible variance bounds, according to the experimenter’s preferences and prior substantive knowledge.
In the final chapter, we present methodology for the newly proposed bipartite experimental framework, where units which receive treatment are distinct from units on which outcomes are measured, and the two are connected via a bipartite graph. We investigate a linear exposure-response assumption which allows more complex interactions. We propose the Exposure Re-weighted Linear (ERL) estimator which we show is unbiased in finite samples and consistent and asymptotically normal in large samples provided the bipartite graph is sufficiently sparse. We provide an variance estimator which facilitates confidence intervals based on the normal approximation. Finally, we present Exposure-Design, a correlation clustering based design for improving precision of the ERL estimator.
