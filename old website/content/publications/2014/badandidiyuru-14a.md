+++
date = "2014-08-03"
title = "Streaming submodular maximization: massive data summarization on the fly."
math = "true"
description = "publication"
publish = "KDD"
category = "conference"
weight=2
author = "Ashwinkumar Badanidiyuru, Baharan Mirzasoleiman, Amin Karbasi, Andreas Krause"
link = "http://www.cs.cornell.edu/~ashwin85/docs/frp0328-badanidiyuru.pdf"
keyword1="submodular optimization"
+++

## Abstract

How can one summarize a massive data set "on the fly", i.e., without even having seen it in its entirety? In this paper, we address the problem of extracting representative elements from a large stream of data. I.e., we would like to select a subset of say k data points from the stream that are most representative according to some objective function. Many natural notions of "representativeness" satisfy submodularity, an intuitive notion of diminishing returns. Thus, such problems can be reduced to maximizing a submodular set function subject to a cardinality constraint. Classical approaches to submodular maximization require full access to the data set. We develop the first efficient streaming algorithm with constant factor 1/2-ε approximation guarantee to the optimum solution, requiring only a single pass through the data, and memory independent of data size. In our experiments, we extensively evaluate the effectiveness of our approach on several applications, including training large-scale kernel methods and exemplar-based clustering, on millions of data points. We observe that our streaming method, while achieving practically the same utility value, runs about 100 times faster than previous work.
