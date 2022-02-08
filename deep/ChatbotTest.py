from config.DatabaseConfig import *
from Database import Database
from Preprocess import Preprocess
from FindAnswer import FindAnswer
from models.intent.IntentModel import IntentModel
from models.ner.NerModel import NerModel


class ChatbotTest:
    def __init__(self, query: str = ''):
        # 전처리 객체 생성
        p = Preprocess(word2index_dic='../train_tools/dict/chatbot_dict.bin',
                       userdic='../user_dic.tsv')

        # 질문/답변 학습 DB 연결 객체 생성
        db = Database(host=LOCAL_HOST, user=LOCAL_USER,
                      password=LOCAL_PASSWORD, db_name=LOCAL_NAME)
        db.connect()  # DB 연결

    # 의도 파악
        intent = IntentModel(model_name='../models/intent/intent_model.h5', prep=p)
        predict = intent.predict_class(query)
        intent_name = intent.labels[predict]

    # 개체명 인식
        ner = NerModel(model_name='../models/ner/ner_model.h5', prep=p)
        predicts = ner.predict(query)
        ner_tags = ner.predict_tags(query)

        print("질문 : ", query)
        print("=" * 40)
        print("의도 파악 : ", intent_name)
        print("개체명 인식 : ", predicts)
        print("답변 검색에 필요한 NER 태그", ner_tags)
        print("=" * 40)

    # 답변 검색
        try:
            f = FindAnswer(db)
            answer_text, answer_image = f.search(intent_name, ner_tags)
            self.answer = f.tag_to_word(predicts, answer_text)
        except:
            self.answer = "죄송해요, 어떤 답변을 원하시는지 모르겠어요."

        db.close()  # DB 연결 끊음
