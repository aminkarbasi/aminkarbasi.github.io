+++
date = "2022-01-17"
title = "Scalable Sampling for Nonsymmetric Determinantal Point Processes"
math = "true"
description = "publication"
publish = "ICLR"
category = "conference"
weight=2
award = "Spotlight"
author = "Insu Han, Mike Gartrell, Jennifer Gillenwater, Elvis Dohmatob, Amin Karbasi"
link = "https://openreview.net/pdf?id=BB4e8Atc1eR"
keyword1="Trust"
+++

# Abstract

A determinantal point process (DPP) on a collection of M items is a model,
parameterized by a symmetric kernel matrix, that assigns a probability to every
subset of those items. Recent work shows that removing the kernel symmetry
constraint, yielding nonsymmetric DPPs (NDPPs), can lead to significant predictive
performance gains for machine learning applications. However, existing work
leaves open the question of scalable NDPP sampling. There is only one known
DPP sampling algorithm, based on Cholesky decomposition, that can directly apply
to NDPPs as well. Unfortunately, its runtime is cubic in M, and thus does not
scale to large item collections. In this work, we first note that this algorithm can be
transformed into a linear-time one for kernels with low-rank structure. Furthermore,
we develop a scalable sublinear-time rejection sampling algorithm by constructing a
novel proposal distribution. Additionally, we show that imposing certain structural
constraints on the NDPP kernel enables us to bound the rejection rate in a way that
depends only on the kernel rank. In our experiments we compare the speed of all
of these samplers for a variety of real-world tasks.
