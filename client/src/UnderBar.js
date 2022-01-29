import React, { useState, useRef, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import "./UnderBar.css";

function UnderBar() {
  const nextId = useRef(0);
  function getDatetime() {
    let date = new Date();
    let time = {
      hours: date.getHours(),
      minutes: date.getMinutes(),
    };
    return `${time.hours}:${time.minutes}`;
  }

  const [message, setMessage] = useState("");
  const time = getDatetime();
  const [users, setUsers] = useState([
    {
      id: nextId.current,
      sender: "bot",
      message: "안녕하세요, 무엇을 도와드릴까요?",
      date: time,
    },
  ]);

  // // 파일선택
  // const previewFile = (e) => {
  //   let preview = document.querySelector("img");
  //   let file = document.querySelector("input[type=file]").files[0];
  //   let reader = new FileReader();

  //   reader.addEventListener(
  //     // "load",
  //     function () {
  //       preview.src = reader.result;
  //     },
  //     false
  //   );

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

  function previewFile () {
    let selectedFile = document.querySelector("img");
    const objectUrl = URL.createObjectURL(selectedFile);
    let preview = objectUrl;
  }

  // 시간

  const onChange = (event) => {
    console.log(",,,,", message);
    setMessage(event.target.value);
  };

  const onRemove = (id) => {
    setUsers(users.filter((message) => message.id !== id));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    nextId.current += 1;
    const time = getDatetime();
    setUsers(
      users.concat({
        id: nextId.current,
        sender: "user",
        message: message,
        date: time,
      })
    );

    if (message === "안녕") {
      nextId.current += 1;
      const time = getDatetime();
      setUsers((value) => [
        ...value,
        {
          id: nextId.current,
          sender: "bot",
          message: "안녕하세요, 만나서 반갑습니다.",
          date: time,
        },
      ]);
    }

    if (message === "파일") {
      nextId.current += 1;
      const time = getDatetime();
      setUsers((value) => [
        ...value,
        {
          id: nextId.current,
          sender: "bot",
          message: (
            <input
              type="file"
              onChange={previewFile}
              img
              src=""
              height="200"
              alt="미리보기"
            ></input>
          ),
          // <img src="" height="200" alt="이미지 미리보기...">
          date: time,
        },
      ]);
    }

    setMessage("");
  };

  window.scrollBy(0, window.innerHeight);

  return (
    <>
      <div id="chatBoxWrap">
        {users.map((item, index) => (
          <div
            className="chatUser"
            style={
              item.sender === "bot"
                ? {}
                : { right: "-98%", transform: "translateX(-100%)" }
            }
          >
            <FiX
              size="11px"
              className="onDeleteClick"
              onClick={() => onRemove(item.id)}
            ></FiX>

            <span
              className="chatMessage"
              style={
                item.sender === "bot" ? { float: "left" } : { float: "right" }
              }
            >
              {item.message}
            </span>

            <span
              className="showTime"
              style={
                item.sender === "bot" ? { float: "left" } : { float: "right" }
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

//import React, { useState, useRef } from "react";
// import { AiOutlineArrowUp } from "react-icons/ai";
// import { FiX } from "react-icons/fi";
// import "./UnderBar.css";

// function UnderBar() {
//   const nextId = useRef(0);
//   function getDatetime() {
//     let date = new Date();
//     let time = {
//       hours: date.getHours(),
//       minutes: date.getMinutes(),
//     };
//     return `${time.hours}:${time.minutes}`;
//   }

//   const [message, setMessage] = useState("");
//   const time = getDatetime();
//   const [users, setUsers] = useState([
//     {
//       id: nextId.current,
//       sender: "bot",
//       message: "안녕하세요, 무엇을 도와드릴까요?",
//       date: time,
//     },
//   ]);

//   // 파일선택
//   const previewFile = (e) => {
//     let preview = document.querySelector("img");
//     let file = document.querySelector("input[type=file]").files[0];
//     let reader = new FileReader();

//     reader.addEventListener(
//       // "load",
//       function () {
//         preview.src = reader.result;
//       },
//       false
//     );

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   // 시간

//   const onChange = (event) => {
//     console.log(",,,,", message);
//     setMessage(event.target.value);
//   };

//   const onRemove = (id) => {
//     setUsers(users.filter((message) => message.id !== id));
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();

//     nextId.current += 1;
//     const time = getDatetime();
//     setUsers(
//       users.concat({
//         id: nextId.current,
//         sender: "user",
//         message: message,
//         date: time,
//       })
//     );

//     if (message === "안녕") {
//       nextId.current += 1;
//       const time = getDatetime();
//       setUsers((value) => [
//         ...value,
//         {
//           id: nextId.current,
//           sender: "bot",
//           message: "안녕하세요, 만나서 반갑습니다.",
//           date: time,
//         },
//       ]);
//     }

//     if (message === "파일") {
//       nextId.current += 1;
//       const time = getDatetime();
//       setUsers((value) => [
//         ...value,
//         {
//           id: nextId.current,
//           sender: "bot",
//           message: (
//             <input
//               type="file"
//               onChange={previewFile}
//               img
//               src=""
//               height="200"
//               alt="미리보기"
//             ></input>
//           ),
//           // <img src="" height="200" alt="이미지 미리보기...">
//           date: time,
//         },
//       ]);
//     }

//     setMessage("");
//   };

//   window.scrollBy(0, window.innerHeight);

//   return (
//     <>
//       <div id="chatBoxWrap">
//         {users.map((item, index) => (
//           <div
//             className="chatUser"
//             style={
//               item.sender === "bot"
//                 ? {}
//                 : { right: "-98%", transform: "translateX(-100%)" }
//             }
//           >
//             <FiX
//               size="11px"
//               className="onDeleteClick"
//               onClick={() => onRemove(item.id)}
//             ></FiX>

//             <span
//               className="chatMessage"
//               style={
//                 item.sender === "bot" ? { float: "left" } : { float: "right" }
//               }
//             >
//               {item.message}
//             </span>

//             <span
//               className="showTime"
//               style={
//                 item.sender === "bot" ? { float: "left" } : { float: "right" }
//               }
//             >
//               {item.date}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* 언더바 레이아웃 및 이벤트 등록 */}
//       <div className="underBar">
//         <form onSubmit={onSubmit}>
//           <input
//             className="chat"
//             type="text"
//             value={message}
//             placeholder="채팅을 입력하세요"
//             onChange={onChange}
//             onSubmit={onSubmit}
//           />
//         </form>

//         <AiOutlineArrowUp className="btnEnter" onClick={onSubmit} />
//       </div>
//     </>
//   );
// }

// export default UnderBar;