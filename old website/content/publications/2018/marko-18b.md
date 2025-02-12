+++
date = "2018-10-03"
title = "Data Summarization at Scale: A Two-Stage Submodular Approach"
math = "true"
description = "publication"
publish = "ICML"
category = "conference"
weight=2
author = "M . Mitrovic, E. Kazemi, M. Zadimoghaddam, A. Karbasi"
link = "http://proceedings.mlr.press/v80/mitrovic18a/mitrovic18a.pdf"
keyword1="submodular optimization"
keyword2="continuous optimization"
+++

## Abstract

The sheer scale of modern datasets has resulted in a dire need for summarization techniques that can identify representative elements in a dataset. Fortunately, the vast majority of data summariza- tion tasks satisfy an intuitive diminishing returns condition known as submodularity, which allows us to find nearly-optimal solutions in linear time. We focus on a two-stage submodular framework where the goal is to use some given training func- tions to reduce the ground set so that optimizing new functions (drawn from the same distribution) over the reduced set provides almost as much value as optimizing them over the entire ground set. In this paper, we develop the first streaming and distributed solutions to this problem. In addi- tion to providing strong theoretical guarantees, we demonstrate both the utility and efficiency of our algorithms on real-world tasks including image summarization and ride-share optimization.
