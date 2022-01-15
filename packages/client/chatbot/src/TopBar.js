import { AiOutlineLeft } from 'react-icons/ai';
import './TopBar.css';

const TopBar = () => {
    const askExit = () => alert("정말 대화를 종료하시겠습니까?");

    return (
        <>
            <div className="topBar">
                <AiOutlineLeft className="btnExit" onClick={askExit} />
                <p className="chatbotName">챗봇 이름</p>
            </div>
        </>

    );
};

export default TopBar;