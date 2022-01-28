import Swal from "sweetalert2";

function StopChat() {
    const onClose = (e) => {
        // window.open("about:blank", "_self");
        // window.close();
    }

    const askExit = (event) => {
        event.preventDefault();
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
        }).then((result) => {
            if (result.isConfirmed) {
                onClose();
                event.preventDefault();
            }
        })
    };

    return (
        <>
            <button
                className="stopChat"
                onClick={askExit}
            >
                대화 종료
            </button>
        </>
    );
}

export default StopChat;