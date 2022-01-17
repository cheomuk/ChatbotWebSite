import { AiOutlineLeft } from "react-icons/ai";
import "./TopBar.css";
import Swal from "sweetalert2";

const TopBar = () => {
  const askExit = () =>
    Swal.fire({
      icon: "warning",
      html: "정말로 대화를 종료하시겠습니까?",
      // 취소 버튼
      showCancelButton: true,
      // 네 버튼
      showCloseButton: true,
      focusConfirm: false,
      cancelButtonText: "cancel",
      confirmButtonText: "ok",
    });

  return (
    <>
      <div className="topBar">
        <AiOutlineLeft className="btnExit" onClick={askExit} />
        <p className="chatbotName">CHATBOT</p>
      </div>
    </>
  );
};

export default TopBar;