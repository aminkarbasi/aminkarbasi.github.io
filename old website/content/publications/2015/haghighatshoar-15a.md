+++
date = "2015-04-03"
title = "Asynchronous decoding of LDPC codes over BEC."
math = "true"
description = "publication"
publish = "ISIT"
category = "conference"
weight=2
author = "Saeid Haghighatshoar, Amin Karbasi, Amir Hesam Salavati"
link = "https://ieeexplore.ieee.org/document/7282942"
+++

## Abstract

LDPC codes are typically decoded by running a synchronous message passing algorithm over the corresponding bipartite factor graph (made of variable and check nodes). More specifically, each synchronous round consists of 1) updating all variable nodes based on the information received from the check nodes in the previous round, and then 2) updating all the check nodes based on the information sent from variable nodes in the current round. However, in many applications, ranging from message passing in neural networks to hardware implementation of LDPC codes, assuming that all messages are sent and received at the same time is far from realistic. In this paper, we investigate the effect of asynchronous message passing on the decoding of LDPC codes over a Binary Erasure Channel (BEC). We effectively assume that there is a random delay assigned to each edge of the factor graph that models the random propagation delay of a message along the edge. As a result, the output messages of a check/variable node are also asynchronously updated upon arrival of a new message in its input. We show, for the first time for BEC, that the asymptotic performance of the asynchronous message passing is fully characterized by a fixed point integral equation that takes into account both the temporal and the spatial features of the factor graph. Our theoretical result is reminiscent of the fixed point equation in traditional BP decoding. Also, our simulation results show that asynchronous scheduling reduces decoding time compared to the traditional BP in certain cases in the finite block-length regime.








