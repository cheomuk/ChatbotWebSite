import React, { useState, useRef, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";
import "./UnderBar.css";
import { selectedFile } from "./SelectFile";
import { useChats } from "./hooks/useChats";

function UnderBar() {
  const {chats, send, remove} = useChats();
  const [nickName, setNickName] = useState("");
  useEffect(() => {
    setNickName(prompt("닉네임을 입력해주세요"));
  }, []);

  const nextId = useRef(0);

  const [message, setMessage] = useState("");

  const onChange = (event) => {
    setMessage(event.target.value);
  };

  // 메시지 삭제
  const onRemove = (id) => {
    remove(id);
  };

  // 메시지 전송
  const onSubmit = (event) => {
    event.preventDefault();

    nextId.current += 1;

    send(nickName,message);
    if (message === "안녕") {
      nextId.current += 1;
      send('bot', "안녕하세요~~~~");
    }

    setMessage("");
  };

  window.scrollBy(0, window.innerHeight);

  return (
    <>
      <div id="chatBoxWrap">
        {chats.map((item, index) => (
          <div
            className="chatUser"
            style={
              item.sender !== nickName
                ? {}
                : { right: "-98%", transform: "translateX(-100%)" }
            }
          >
            {/* 닉네임 정렬 */}
            <span className="nickName" >
              {item.sender}
            </span>

            {/* 삭제 버튼 */}
            <FiX
              size="11px"
              className="onDeleteClick"
              onClick={() => onRemove(item.id)}
            ></FiX>

            {/* 챗봇 아이콘 */}
            <FaRobot
              className="botIcon"
              size="2rem"
              style={
                item.sender === 'bot' ? { float: "left" } : { display: "none" }
              }
            />

            {/* 메시지 정렬 */}
            <span
              className="chatMessage"
              style={
                item.sender !== nickName ? { float: "left" } : { float: "right" }
              }
            >
              {item.message}
            </span>

            {/* 시간 정렬 */}
            <span
              className="showTime"
              style={
                item.sender !== nickName ? { float: "left" } : { float: "right" }
              }
            >
              {item.date}
            </span>
          </div>
        ))}
      </div>

      {/* 언더바 레이아웃 및 이벤트 등록 */}
      <div className="underBar">
        <form onSubmit={onSubmit}>
          <input
            className="chat"
            type="text"
            value={message}
            placeholder="채팅을 입력하세요"
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </form>

        <AiOutlineArrowUp className="btnEnter" onClick={onSubmit} />
      </div>
    </>
  );
}

export default UnderBar;