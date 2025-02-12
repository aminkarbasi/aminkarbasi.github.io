+++
date = "2014-10-03"
title = "Near-Optimally Teaching the Crowd to Classify."
math = "true"
description = "publication"
publish = "ICML"
category = "conference"
weight=2
author = "Adish Singla, Ilija Bogunovic, Gábor Bartók, Amin Karbasi, Andreas Krause"
link = "https://las.inf.ethz.ch/files/singla14crowdTeaching.pdf"
keyword1="interactive decision making"
+++

## Abstract

How should we present training examples to learners to teach them classification rules? This is a natural problem when training workers for crowdsourcing labeling tasks, and is also motivated by challenges in data-driven online education. We propose a natural stochastic model of the learners, modeling them as randomly switching among hypotheses based on observed feedback. We then develop STRICT, an efficient algorithm for selecting examples to teach to workers. Our solution greedily maximizes a submodular surrogate objective function in order to select examples to show to the learners. We prove that our strategy is competitive with the optimal teaching policy. Moreover, for the special case of linear separators, we prove that an exponential reduction in error probability can be achieved. Our experiments on simulated workers as well as three real image annotation tasks on Amazon Mechanical Turk show the effectiveness of our teaching algorithm.
