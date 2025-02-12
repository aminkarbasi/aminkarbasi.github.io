+++
date = "2013-11-03"
title = "Distributed Submodular Maximization: Identifying Representative Elements in Massive Data."
math = "true"
description = "publication"
publish = "NeurIPS"
category = "conference"
weight=2
author = "Baharan Mirzasoleiman, Amin Karbasi, Rik Sarkar, Andreas Krause"
link = "https://papers.nips.cc/paper/5039-distributed-submodular-maximization-identifying-representative-elements-in-massive-data.pdf"
keyword1="submodular optimization"
+++

## Abstract

Many large-scale machine learning problems (such as clustering, non-parametric learning, kernel machines, etc.) require selecting, out of a massive data set, a manageable, representative subset. Such problems can often be reduced to maximizing a submodular set function subject to cardinality constraints. Classical approaches require centralized access to the full data set; but for truly large-scale problems, rendering the data centrally is often impractical. In this paper, we consider the problem of submodular function maximization in a distributed fashion. We develop a simple, two-stage protocol GreeDI, that is easily implemented using MapReduce style computations. We theoretically analyze our approach, and show, that under certain natural conditions, performance close to the (impractical) centralized approach can be achieved. In our extensive experiments, we demonstrate the effectiveness of our approach on several applications, including sparse Gaussian process inference on tens of millions of examples using Hadoop.

