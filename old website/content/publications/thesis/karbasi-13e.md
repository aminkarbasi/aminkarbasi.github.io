+++
date = "2013-01-03"
title = "Graph-Based Information Processing: Scaling Laws and Applications"
math = "true"
description = "publication"
publish = "PhD thesis"
category = "thesis"
link = "/files/amin_thesis.pdf"
award = "Patrick Denantes Memorial Prize 2013"
author = "Amin Karbasi, Martin Vetterli, and Rüdiger Urbanke"
+++

# Abstract

We live in a world characterized by massive information transfer and real-time communication.
The demand for efficient yet low-complexity algorithms is widespread across
different fields, including machine learning, signal processing and communications. Most
of the problems that we encounter across these disciplines involves a large number of
modules interacting with each other. It is therefore natural to represent these interactions
and the 
ow of information between the modules in terms of a graph. This leads to the
study of graph-based information processing framework. This framework can be used to
gain insight into the development of algorithms for a diverse set of applications.
We investigate the behaviour of large-scale networks (ranging from wireless sensor
networks to social networks) as a function of underlying parameters. In particular, we
study the scaling laws and applications of graph-based information processing in sensor
networks/arrays, sparsity pattern recovery and interactive content search.
In the firrst part of this thesis, we explore location estimation from incomplete information,
a problem that arises often in wireless sensor networks and ultrasound tomography
devices. In such applications, the data gathered by the sensors is only useful if we can
pinpoint their positions with reasonable accuracy. This problem is particularly challenging
when we need to infer the positions based on basic information/interaction such as
proximity or incomplete (and often noisy) pairwise distances.
As the sensors deployed in a sensor network are often of low quality and unreliable,
we need to devise a mechanism to single out those that do not work properly. In the
second part, we frame the network tomography problem as a well-studied inverse problem
in statistics, called group testing. Group testing involves detecting a small set of defective
items in a large population by grouping a subset of items into different pools. The result
of each pool is a binary output depending on whether the pool contains a defective
item or not. Motivated by the network tomography application, we consider the general
framework of group testing with graph constraints. As opposed to conventional group
testing where any subset of items can be grouped, here a test is admissible if it induces a
connected subgraph. Given this constraint, we are interested in bounding the number of
pools required to identify the defective items. Once the positions of sensors are known and
the defective sensors are identified, we investigate another important feature of networks,
namely, navigability or how fast nodes can deliver a message from one end to another by
means of local operations.
In the final part, we consider navigating through a database of objects utilizing comparisons.
Contrary to traditional databases, users do not submit queries that are subsequently
matched to objects. Instead, at each step, the database presents two objects to
the user, who then selects among the pair the object closest to the target that she has in
mind. This process continues until, based on the user's answers, the database can identify
the target she has in mind. The search through comparisons amounts to determining
which pairs should be presented to the user in order to find the target object as quickly
as possible. Interestingly, this problem has a natural connection with the navigability
property studied in the second part, which enables us to develop efficient algorithms.
