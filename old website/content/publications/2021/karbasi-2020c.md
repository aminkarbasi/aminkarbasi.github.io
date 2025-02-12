+++
date = "2021-02-03"
title = "Meta Learning in the Continuous Time Limit"
math = "true"
description = "publication"
publish = "AISTATS"
category = "conference"
weight=2
author = "Ruitu Xu, Lin Chen, Amin Karbasi"
link = "https://arxiv.org/pdf/2006.10921.pdf"
keyword1="Trust"
+++

# Abstract

In this paper, we establish the ordinary differential equation (ode) that underlies the train- ing dynamics of Model-Agnostic Meta-Learning (maml). Our continuous-time limit view of the process eliminates the influence of the manually chosen step size of gradient descent and includes the existing gradient descent training algorithm as a special case that results from a specific discretization. We show that the maml ode enjoys a linear convergence rate to an approximate stationary point of the maml loss function for strongly convex task losses, even when the corresponding maml loss is non-convex. Moreover, through the analysis of the maml ode, we propose a new bi-maml training algorithm that significantly reduces the computational burden associated with existing maml training methods. To complement our theoretical find- ings, we perform empirical experiments to showcase the superiority of our proposed methods with respect to the existing work.
