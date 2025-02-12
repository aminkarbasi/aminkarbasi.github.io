+++
date = "2022-06-01"
title = "Combining multiple atlases to estimate data-driven mappings between functional connectomes using optimal transport"
math = "true"
description = "publication"
publish = "MICCAI"
category = "conference"
weight=2
author = "Javid Dadashkarimi, Amin Karbasi, and Dustin Scheinost"
award = "Top 13 %"
link = "https://www.biorxiv.org/content/10.1101/2022.07.19.500642v1.full.pdf"
keyword1="computational neuroscience"
+++

# Abstract

Connectomics is a popular approach for understanding the brain with neuroimaging data. Yet, a connectome generated from one atlas is different in size, topology, and scale compared to a connectome generated from another atlas. These differences hinder interpreting, generalizing, and combining connectomes and downstream results from different atlases. Recently, it was proposed that a mapping between atlases can be estimated such that connectomes from one atlas (\textit{i.e.}, source atlas) can be reconstructed into a connectome from a different atlas (\textit{i.e.}, target atlas) without re-processing the data. This approach used optimal transport to estimate the mapping between one source atlas and one target atlas. Yet, restricting the optimal transport problem to only a single source atlases ignores additional information when multiple source atlases are available, which is likely. Here, we propose a novel optimal transport based solution to combine information from multiple source atlases to better estimate connectomes for the target atlas. Reconstructed connectomes based on multiple source atlases are more similar to their ``gold-standard’’ counterparts and better at predicting IQ than reconstructed connectomes based on a single source mapping. Importantly, these results hold for a wide-range of different atlases. Overall, our approach promises to increase the generalization of connectome-based results across different atlases.
