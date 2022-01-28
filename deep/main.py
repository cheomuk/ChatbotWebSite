# from Preprocess import Preprocess
#
# sent = input("음식 관련 문장을 쓰시오: ")
#
# p = Preprocess(userdic='user_dic.tsv')
#
# # 형태소 분석기 실행
# pos = p.pos(sent)
#
# # 품사 태그와 같이 키워드 출력
# ret = p.get_keywords(pos, without_tag=False)
# print(ret)
#
# # 품사 태그 없이 키워드 출력
# ret = p.get_keywords(pos, without_tag=True)
# print(ret)

from Preprocess import Preprocess
from models.intent.IntentModel import IntentModel

p = Preprocess(word2index_dic='train_tools/dict/chatbot_dict.bin',
               userdic='user_dic.tsv')

intent = IntentModel(model_name='models/intent/intent_model.h5', prep=p)
sent = input("문장을 입력하세요: ")
c = intent.predict_class(sent)
print(intent.labels[c])