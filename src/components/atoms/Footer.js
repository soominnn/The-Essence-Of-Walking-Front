import React from "react";

function Footer(){
    return (
        <div style={{
            fontSize: "12px",
            color: "darkgray",
            position: "fixed",
            bottom: "0",
            width: "100%",
            margin: "10px 0px",
        }}>
            <div>
                홍익대학교 컴퓨터공학과 성민재, 박수민, 윤태인
            </div>
            <div>
                전화번호: 010-1234-5678
            </div>
            <div>
                이메일: ooooo@gmail.com
            </div>
        </div>
    );
}

export default Footer;