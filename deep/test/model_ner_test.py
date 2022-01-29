from deep.Preprocess import Preprocess
from deep.models.ner.NerModel import NerModel

p = Preprocess(word2index_dic='../deep/train_tools/dict/chatbot_dict.bin',
               userdic='../deep/user_dic.tsv')

ner = NerModel(model_name='../deep/models/ner/ner_model.h5', preprocess=p)
query = input()
predicts = ner.predict(query)
print(predicts)