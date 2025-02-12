+++
date = "2020-09-03"
title = "Quantized frank-wolfe: Faster optimization, lower communication, and projection free"
math = "true"
description = "publication"
publish = "AISTATS"
category = "conference"
weight=2
author = "Mingrui Zhang, Lin Chen, Aryan Mokhtari, Hamed Hassani, Amin Karbasi"
link = "http://proceedings.mlr.press/v108/zhang20g/zhang20g.pdf"
keyword3="Trust"
+++

# Abstract

How can we efficiently mitigate the overhead of gradient communications in distributed optimization? This problem is at the heart of training scalable machine learning models and has been mainly studied in the unconstrained setting. In this paper, we propose Quantised Frank-Wolfe (QFW), the first projection free and communication-efficient algorithm for solving constrained optimization problems at scale. We consider both convex and non-convex objective functions, expressed as a finite-sum or more generally a stochastic optimization problem, and provide strong theoretical guarantees on the convergence rate of QFW. This is accomplished by proposing novel quantization schemes that efficiently compress gradients while controlling the noise variance intduced during this process. Finally, we empirically validate the efficiency of QFW in terms of communication and the quality of returned solution against natural baselines.


