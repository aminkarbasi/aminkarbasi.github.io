+++
date = "2020-11-03"
title = "Continuous Submodular Maximization: Beyond DR-Submodularity"
math = "true"
description = "publication"
publish = "NeurIPS"
category = "conference"
weight=2
author = "Moran Feldman, Amin Karbasi"
link = "https://proceedings.neurips.cc/paper/2020/file/0f34132b15dd02f282a11ea1e322a96d-Paper.pdf"
keyword1="continuous optimization"
keyword2="submodular optimization"
+++

# Abstract

n this paper, we propose the first continuous optimization algorithms that achieve a constant factor approximation guarantee for the problem of monotone continuous submodular maximization subject to a linear constraint. We first prove that a simple variant of the vanilla coordinate ascent, called Coordinate-Ascent+, achieves  $\frac{e-1}{2e-1}-\epsilon$ a -approximation guarantee while performing $O(n/\epsilon)$ iterations, where the computational complexity of each iteration is roughly $O(n/\sqrt(\epsilon)+n\log n)$(here $n$, denotes the dimension of the optimization problem). We then propose Coordinate-Ascent++, that achieves the tight $1-1/e-\epsilon$-approximation guarantee while performing the same number of iterations, but at a higher computational complexity of roughly $O(n^3/\epsilon^2.5+n^3\log(n)/\epsilon^2)$ per iteration. However, the computation of each round of Coordinate-Ascent++ can be easily parallelized so that the computational cost per machine scales as $O(n/\sqrt(\epsilon)+n\log(n))$.


