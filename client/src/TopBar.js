import { AiOutlineLeft } from "react-icons/ai";
import "./TopBar.css";
import Swal from "sweetalert2";

const TopBar = () => {
  const askExit = () =>
    Swal.fire({
      icon: "warning",
      html: "정말로 대화를 종료하시겠습니까?",
      showCancelButton: true,
      showCloseButton: true,
      focusConfirm: false,
      cancelButtonText: "cancel",
      confirmButtonText: "ok",
    }).then((result) => {
      if (result.value) {
        window.close();
      }
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
