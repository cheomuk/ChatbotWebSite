import { useState, useEffect } from "react";

export const useNickName = () => {
    const [nickName, setNickName] = useState("");

    useEffect(() => {
        setNickName(prompt("닉네임을 입력해주세요"));
    }, []);

    return nickName;
}