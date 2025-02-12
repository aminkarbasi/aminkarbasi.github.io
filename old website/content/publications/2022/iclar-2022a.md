+++
date = "2022-01-17"
title = "Learning Distributionally Robust Models at Scale via Composite Optimization"
math = "true"
description = "publication"
publish = "ICLR"
category = "conference"
weight=2
author = "Farzin Haddadpour, Mohammad Mahdi Kamani, Mehrdad Mahdavi, and Amin Karbasi"
link = "https://openreview.net/pdf?id=To-R742x7se"
keyword1="Trust"
+++

# Abstract

To train machine learning models that are robust to distribution shifts in the data,
distributionally robust optimization (DRO) has been proven very effective. However, the existing approaches to learning a distributionally robust model either
require solving complex optimization problems such as semidefinite programming
or a first-order method whose convergence scales linearly with the number of data
samples– which hinders their scalability to large datasets. In this paper, we show
how different variants of DRO are simply instances of a finite-sum composite
optimization for which we provide scalable methods. We also provide empirical
results that demonstrate the effectiveness of our proposed algorithm with respect to
the prior art in order to learn robust models from very large datasets.
