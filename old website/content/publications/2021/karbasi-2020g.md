+++
date = "2021-03-03"
title = "The curious case of adversarially robust models: More data can help, double descend, or hurt generalization"
math = "true"
description = "publication"
publish = "UAI"
category = "conference"
weight=2
author = "Yifei Min, Lin Chen, Amin Karbasi"
link = "https://arxiv.org/pdf/2002.11080.pdf"
keyword3="Trust"
+++

# Abstract

Adversarial training has shown its ability in producing models that are robust to perturbations on the input data, but usually at the expense of decrease in the standard accuracy. To mitigate this issue, it is commonly believed that more training data will eventually help such adversarially robust models generalize better on the benign/unperturbed test data. In this paper, however, we challenge this conventional belief and show that more training data can hurt the generalization of adversarially robust models in the classification problems. We first investigate the Gaussian mixture classification with a linear loss and identify three regimes based on the strength of the adversary. In the weak adversary regime, more data improves the generalization of adversarially robust models. In the medium adversary regime, with more training data, the generalization loss exhibits a double descent curve, which implies the existence of an intermediate stage where more training data hurts the generalization. In the strong adversary regime, more data almost immediately causes the generalization error to increase. Then we move to the analysis of a two-dimensional classification problem with a 0-1 loss. We prove that more data always hurts the generalization performance of adversarially trained models with large perturbations. To complement our theoretical results, we conduct empirical studies on Gaussian mixture classification, support vector machines (SVMs), and linear regression.

