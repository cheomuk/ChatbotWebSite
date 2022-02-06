import "./App.css";
import TopBar from "./TopBar";
import ChatList from "./ChatList";
import UnderBar from "./UnderBar";
import SelectFile from "./SelectFile";
import { useState, useEffect, useRef } from "react";
import { useChats } from "./hooks/useChats";
import { useNickName } from "./hooks/useNickName";

function App() {  
  const { chats, send, remove, sendImage } = useChats();
  const nickName = useNickName();

  const ref = useRef();

  useEffect(() => {

    if(ref.current < chats.length){
      window.scrollBy(0, window.innerHeight);
    }
    // window.scrollBy(0, window.innerHeight);
    ref.current = chats.length;
    
  }, [chats])

  
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);

    sendImage(nickName, objectUrl);
  };

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

    if( message === ""){
      return
    }

    send(nickName, message);
    if (message === "안녕") {
      send('bot', "안녕하세요~~~~");
    }

    setMessage("");
  };
  
  return (
    <>
      <TopBar />
      <ChatList chats={chats} nickName={nickName} onRemove={onRemove} />
      <UnderBar message={message} onChange={onChange} onSubmit={onSubmit} />
      <SelectFile onChange={onSelectFile} />
    </>
  );
}

export default App;
