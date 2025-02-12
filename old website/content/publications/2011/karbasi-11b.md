+++
date = "2011-02-03"
title = "Compression with graphical constraints: An interactive browser"
math = "true"
description = "publication"
publish = "ISIT"
category = "conference"
weight=2
author = "Amin Karbasi, Morteza Zadimoghaddam"
link = "/files/amin-11b.pdf"
+++

## Abstract

We study the problem of searching for a given element in a set of objects using a membership oracle. The membership oracle, given a subset of objects A, and a target object t, determines whether A contains t or not. The goal is to find the target object with the minimum number of questions asked from the oracle. This problem is known to be strongly related to lossless source compression. In fact, the optimum strategy is provided by Hufmman coding with the average number of questions very close to the entropy H(P) of the object set. The membership oracle aims at modelling interactive methods (i.e., incorporate human feedback) has many real life applications. Due to practical constraints imposed by such applications not every subset A of objects can be queried. It is known that in general finding the optimum strategy with such constrains is NP-complete. Given this negative result we restrict attention to the cases represented by graphical models: graph G whose nodes are the database objects is given, and the queries are restricted to be those subsets A that are connected in G. We show that when G itself is connected, there is a search algorithm that finds the target in 4H(P) + 2 queries on the average. Since entropy is the trivial lower bound, our algorithm performs within a constant gap from the optimum strategy.

