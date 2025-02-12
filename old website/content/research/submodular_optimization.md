+++
title = "Submodular Optimization"
slug = "submodular_optimization.md"
thumbnail = "images/submodular.png"
semester = "Spring"
description = "research"
date = "2020-01-03"
weight="5"
math="true"
keyword1="submodular optimization"
keyword2=""

+++

The difficulty of searching through a massive amount of data in order to quickly make an informed decision is one of today’s most ubiquitous challenges. Many scientific and engineering models feature inherently discrete decision variables—from phrases in a corpus to objects in an image. Similarly, nearly all aspects of the machine learning pipeline involve discrete tasks, from data summarization and sketching to feature selection and model explanation. The study of how to make near-optimal decisions from a massive pool of possibilities is at the heart of combinatorial optimization.

As computational methods pervade all aspects of science and engineering, it is of great importance to understand which discrete formulations can be solved efficiently and how to do so. Many of these problems are notoriously hard, and even those that are theoretically tractable may not scale to large instances. However, the problems of practical interest are often much more well-behaved and possess extra structures that allow them to be amenable to exact or approximate optimization techniques. Just as convexity has been a celebrated and well-studied condition under which continuous optimization is tractable, submodularity is a condition for which discrete objectives may be optimized. In a nutshell, submodularity captures the intuitive diminishing returns notion where the added value of including an element (e.g., image, sensor, etc ) to a context (dataset of images, sensor network, etc) decreases as the context in which it is considered increases.

