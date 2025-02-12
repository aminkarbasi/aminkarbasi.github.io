+++
date = "2018-11-03"
title = "Do Less, Get More: Streaming Submodular Maximization with Subsampling"
math = "true"
description = "publication"
publish = "NeurIPS"
category = "conference"
award="Spotlight presentation"
weight=2
author = "Moran Feldman, Amin Karbasi, Ehsan Kazemi"
link = "https://papers.nips.cc/paper/7353-do-less-get-more-streaming-submodular-maximization-with-subsampling.pdf"
keyword1="submodular optimization"
+++

## Abstract

In this paper, we develop the first one-pass streaming algorithm for submodular maximization that does not evaluate the entire stream even once. By carefully subsampling each element of the data stream, our algorithm enjoys the tightest approximation guarantees in various settings while having the smallest memory footprint and requiring the lowest number of function evaluations. More specifically, for a monotone submodular function and a p-matchoid constraint, our randomized algorithm achieves a 4p approximation ratio (in expectation) with O(k) memory and O(km/p) queries per element (k is the size of the largest feasible solution and m is the number of matroids used to define the constraint). For the non-monotone case, our approximation ratio increases only slightly to 4p+2−o(1). To the best or our knowledge, our algorithm is the first that combines the benefits of streaming and subsampling in a novel way in order to truly scale submodular maximization to massive machine learning problems. To showcase its practicality, we empirically evaluated the performance of our algorithm on a video summarization application and observed that it outperforms the state-of-the-art algorithm by up to fifty-fold while maintaining practically the same utility. We also evaluated the scalability of our algorithm on a large dataset of Uber pick up locations.
