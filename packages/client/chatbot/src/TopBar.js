import { AiOutlineLeft } from "react-icons/ai";
import "./TopBar.css";
import swal from "sweetalert";

const TopBar = () => {
  const askExit = () => swal("정말 대화를 종료하시겠습니까?", "", "warning");

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
