import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./UnderBar.css";

const UnderBar = (props) => {
  return (
    <>
      {/* 언더바 레이아웃 및 이벤트 등록 */}
      <div className="underBar">
        <form onSubmit={props.onSubmit}>
          <input
            className="chat"
            type="text"
            value={props.message}
            placeholder="채팅을 입력하세요"
            onChange={props.onChange}
            onSubmit={props.onSubmit}
          />
        </form>
        <AiOutlineArrowUp className="btnEnter" onClick={props.onSubmit} />
      </div>
    </>
  );
};

export default UnderBar;
