+++
date = "2014-01-03"
title = "Convolutional Neural Associative Memories: Massive Capacity with Noise Tolerance."
math = "true"
description = "publication"
publish = "arXiv"
category = "arXiv"
weight=3
author = "Amin Karbasi, Amir Hesam Salavati, Amin Shokrollahi"
keyword1="computational neuroscience"
+++

## Abstract

The task of a neural associative memory is to retrieve a set of previously memorized patterns from their noisy versions using a network of neurons. An ideal network should have the ability to 1) learn a set of patterns as they arrive, 2) retrieve the correct patterns from noisy queries, and 3) maximize the pattern retrieval capacity while maintaining the reliability in responding to queries. The majority of work on neural associative memories has focused on designing networks capable of memorizing any set of randomly chosen patterns at the expense of limiting the retrieval capacity. In this paper, we show that if we target memorizing only those patterns that have inherent redundancy (i.e., belong to a subspace), we can obtain all the aforementioned properties. This is in sharp contrast with the previous work that could only improve one or two aspects at the expense of the third. More specifically, we propose framework based on a convolutional neural network along with an iterative algorithm that learns the redundancy among the patterns. The resulting network has a retrieval capacity that is exponential in the size of the network. Moreover, the asymptotic error correction performance of our network is linear in the size of the patterns. We then ex- tend our approach to deal with patterns lie approximately in a subspace. This extension allows us to memorize datasets containing natural patterns (e.g., images). Finally, we report experimental results on both synthetic and real datasets to support our claims.

