+++
date = "2022-01-10"
title = "Federated Functional Gradient Boosting"
math = "true"
description = "publication"
publish = "AISTATS"
category = "conference"
weight=2
author = "Zebang Shen, Hamed Hassani, Satyen Kale, Amin Karbasi"
link = "https://arxiv.org/pdf/2103.06972.pdf"
keyword1="Trust"
+++

# Abstract

In this paper, we initiate a study of functional minimization in Federated Learning. First, in the semi-heterogeneous setting, when the marginal distributions of the feature vectors on client machines are identical, we develop the federated functional gradient boosting (FFGB) method that provably converges to the global minimum. Subsequently, we extend our results to the fully-heterogeneous setting (where marginal distributions of feature vectors may differ) by designing an efficient variant of FFGB called FFGB.C, with provable convergence to a neighborhood of the global minimum within a radius that depends on the total variation distances between the client feature distributions. For the special case of square loss, but still in the fully heterogeneous setting, we design the FFGB.L method that also enjoys provable convergence to a neighborhood of the global minimum but within a radius depending on the much tighter Wasserstein-1 distances. For both FFGB.C and FFGB.L, the radii of convergence shrink to zero as the feature distributions become more homogeneous. Finally, we conduct proof-of-concept experiments to demonstrate the benefits of our approach against natural baselines.
