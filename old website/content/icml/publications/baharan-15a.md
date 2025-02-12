+++
date = "2015-01-03"
title = "Lazier Than Lazy Greedy"
math = "true"
description = "workshop"
publish = "AAAI"
category = "conference"
weight=1
author = "Baharan Mirzasoleiman, Ashwinkumar Badanidiyuru, Amin Karbasi, Jan Vondrák, Andreas Krause"
link = "https://las.inf.ethz.ch/files/mirzasoleiman15lazier.pdf"
keyword1="submodular optimization"
keyword2=""
+++

# Abstract

Is it possible to maximize a monotone submodular function faster than the widely used lazy greedy algorithm (also known as accelerated greedy), both in theory and practice? In this paper, we develop the first linear-time algorithm for maximizing a general monotone submodular function subject to a cardinality constraint. We show that our randomized algorithm, STOCHASTIC-GREEDY, can achieve a (1 − 1/e − ε) approximation guarantee, in expectation, to the optimum solution in time linear in the size of the data and independent of the cardinality constraint. We empirically demonstrate the effectiveness of our algorithm on submodular functions arising in data summarization, including training large-scale kernel methods, exemplar-based clustering, and sensor placement. We observe that STOCHASTIC-GREEDY practically achieves the same utility value as lazy greedy but runs much faster. More surprisingly, we observe that in many practical scenarios STOCHASTIC-GREEDY does not evaluate the whole fraction of data points even once and still achieves indistinguishable results compared to lazy greedy.


