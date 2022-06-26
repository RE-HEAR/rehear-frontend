import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer" id="log-footer">
      <div style={{ display: "block", width: "70%" }}>
        <div id="foot">인터뷰 지원 | 제휴 문의 team.seoridam@gmail.com</div>
        <div style={{ color: "white" }}>
          (주) 서리담 | 대표 : 김태완 | 사업자 등록번호 : 123-45-67890 | 서울시
          중구 필동로 1길 30 | 통신판매업신고 : 2021-서울중구-12345 | 이용약관 |
          개인정보 처리방침 © REHEAR Inc.
        </div>
      </div>
    </div>
  );
}
