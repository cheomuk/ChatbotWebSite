import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./UnderBar.css";

function UnderBar() {
  // 초기값
  // c언어로 치면, 구조체 요소로 구성된 배열
  const [doChat, setDoChat] = useState("");
  const [doChats, setDoChats] = useState([]);
  const onChange = (event) => setDoChat(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();

    if (doChat === "") {
      return;
    }

    setDoChats((currentArray) => [doChat, ...currentArray]);
    setDoChat("");
  };
  return (
    <>
      {/* 제이쿼리..? */}
      {doChats.map((item, index) => (
        <div className="chatBox" key={index}>
          {item}
        </div>
      ))}
      {/* 언더바 레이아웃 및 이벤트 등록 */}
      <div className="underBar">
        <form onSubmit={onSubmit}>
          <input
            className="chat"
            type="text"
            value={doChat}
            placeholder="채팅을 입력하세요"
            onChange={onChange}
          />
        </form>
        <AiOutlineArrowUp className="btnEnter" onClick={onSubmit} />
      </div>
    </>
  );
}

export default UnderBar;
