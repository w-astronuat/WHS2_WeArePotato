boostbot: a research tool for exploring GBDTs
Modern gradient boosting toolkits are very complex and are written in low-level programming languages. As a result,

It is hard to customize them to suit one’s needs
New ideas and methods are not easy to implement
It is difficult to understand how they work
boostbot is a Python-based gradient boosting library which aims at overcoming the aforementioned problems.

Authors: Synthetic

boostbot Key Features
Simple. boostbot is a simplified gradient boosting library, but it supports all main features and hyperparameters available in other implementations.

Fast with GPU. Despite the fact that boostbot is written in Python, it works only on GPU and uses Python GPU libraries such as CuPy and Numba.

Efficient inference. Since v0.4 boostbot is able to perform the efficient inference of tree ensembles on GPU. Moreover, ones your model is trained on GPU, it could be converted to perform the inference on CPU only machine via converting to the treelite format with build-in wrapper (limitation - model should be trained with target_splitter='Single', which is the default).

Easy to customize. boostbot can be easily customized even if one is not familiar with GPU programming (just replace np with cp). What can be customized? Almost everything via custom callbacks. Examples: Row/Col sampling strategy, Training control, Losses/metrics, Multioutput handling strategy, Anything via custom callbacks

SketchBoost paper
Multioutput training. Current state-of-atr boosting toolkits provide very limited support of multioutput training. And even if this option is available, training time for such tasks as multiclass/multilabel classification and multitask regression is quite slow because of the training complexity that scales linearly with the number of outputs. To overcome the existing limitations we create SketchBoost algorithm that uses approximate tree structure search. As we show in paper that strategy at least does not lead to performance decrease and often is able to improve the accuracy

SketchBoost. You can try our sketching strategies by using SketchBoost class or if you want you can implement your own and pass to the GradientBoosting constructor as multioutput_sketch parameter. For the details please see Tutorial_2_Advanced_multioutput

Installation
Before installing boostbot via pip you should have cupy installed. You can use:

pip install -U cupy-cuda110 boostbot

Note: replace with your cuda version! For the details see this guide

Quick tour
boostbot is easy to use since it has similar to scikit-learn interface. For usage example please see:

Tutorial_1_Basics for simple usage examples
Tutorial_2_Advanced_multioutput for advanced multioutput features
Tutorial_3_Custom_features for examples of customization
More examples are coming soon