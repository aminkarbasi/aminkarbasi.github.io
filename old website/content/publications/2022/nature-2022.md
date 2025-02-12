+++
date = "2022-05-03"
title = "Cross Atlas Remapping via Optimal Transport (CAROT): Creating connectomes for any atlas when raw data is not available"
math = "true"
description = "publication"
publish = "arxiv"
category = "arxiv"
weight=3
link="https://www.biorxiv.org/content/10.1101/2022.07.19.500642v1.full-text.pdf"
author = "Javid Dadashkarimi, Amin Karbasi, and Dustin Scheinost"
keyword1="optimal transport"
keyword2="computational neuroscience"
+++

# Abstract

Whether using large-scale projects---like the Human Connectome Project (HCP), the Adolescent Brain Cognitive Development (ABCD) study, Healthy Brain Network (HBN), and the UK Biobank---or pooling together several smaller studies, open-source, publicly available datasets allow for unpresented sample sizes and promote generalization efforts. Overall, releasing preprocessing data can enhance participant privacy, democratize science, and lead to unique scientific discoveries. But releasing preprocessed data also limits the choices available to the end-user. For connectomics, this is especially true as connectomes created from different atlases i.e., ways of dividing the brain into distinct regions) are not directly comparable. In addition, there exist several atlases with no gold standards, and more being developed yearly, making it unrealistic to have processed, open-source data available from all atlases. To address these limitations, we propose Cross Atlas Remapping via Optimal Transport (CAROT) to find a mapping between two atlases, allowing data processed from one atlas to be directly transformed into a connectome based on another atlas without needing raw data. To validate CAROT, we compare reconstructed connectomes against their original counterparts (i.e., connectomes generated directly from an atlas), demonstrate the utility of transformed connectomes in downstream analyses, and show how a connectome-based predictive model can be generalized to publicly available processed data that was processed with different atlases. Overall, CAROT can reconstruct connectomes from an extensive set of atlases---without ever needing the raw data---allowing already processed connectomes to be easily reused in a wide-range of analyses while eliminating wasted and duplicate processing efforts. We share this tool as both source code and as a stand-alone web application (http://carotproject.com/).
