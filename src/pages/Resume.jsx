// Resume.jsx
import "./Resume.css";

export default function Resume() {
  return (
    <main className="resume">
      {/* SIDEBAR */}
      <aside className="resume-sidebar">
        <h1 className="resume-name">SEO HYUN SE</h1>
        <p className="resume-role">Full-Stack Developer</p>

        <div className="resume-block">
      <h4>Contact</h4>
      <p>📧 hyn960320@gmail.com</p>
      <p>📱 010-8056-8450</p>
      <p>🔗 github.com/HYN0320</p>
        </div>


      <div className="resume-block">
  <h4>Skills</h4>
  <ul>
    <li><strong>Frontend</strong><br />React, JavaScript, HTML, CSS</li>
    <li><strong>Backend</strong><br />Java, Spring Boot, Spring Security, JPA</li>
    <li><strong>AI / API</strong><br />Python, FastAPI, AI 서버 연동</li>
    <li><strong>Database</strong><br />MySQL, ERD 설계</li>
    <li><strong>Mobile</strong><br />React Native (Expo)</li>
    <li><strong>Tools</strong><br />Git, GitHub, Figma, Postman</li>
  </ul>
</div>


      </aside>

      {/* MAIN */}
      <section className="resume-main">
    <section className="resume-section">
  <h3>Summary</h3>
  <p>
    말보다 결과로 신뢰를 쌓는 풀스택 개발자입니다.
    업무를 시작할 때 전체 흐름과 목표를 먼저 정리하고,
    단계별 계획을 세워 끝까지 완성하는 방식을 중요하게 생각합니다.
    <br /><br />
    웹 디자인·CAD·현장 업무 등 다양한 실무 경험을 통해
    요구사항을 정확히 이해하고 이를 구현하는 과정에 익숙해졌으며,
    이러한 경험은 개발자로 전향한 이후에도
    구조를 먼저 설계하고 문제의 원인을 차분히 해결하는 개발 방식으로 이어지고 있습니다.
    <br /><br />
    현재는 React, Spring Boot, FastAPI 기반의 웹 애플리케이션을
    직접 설계·구현하며,
    단순히 기능을 만드는 개발자가 아닌
    하나의 서비스를 책임지고 완성하는 개발자로 성장하고 있습니다.
  </p>
</section>

        <section className="resume-section">
          <h3>Experience</h3>

          <div className="resume-item">
            <div className="item-header">
              <strong>해진금속</strong>
              <span>CAD · 절곡 업무 | 2023.10 ~ 2025.06 (1년 9개월)</span>
            </div>
            <ul>
              <li>CAD를 활용한 금속 부품 도면 설계 및 수정 업무 수행</li>
              <li>절곡 공정 관련 작업 및 현장 요구사항 반영</li>
              <li>생산 부서와의 협업을 통해 도면 정확도 및 작업 효율 개선</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="item-header">
              <strong>메타랩코리아</strong>
              <span>웹 디자인 퍼블리셔 | 2022.11 ~ 2023.10 (1년)</span>
            </div>
            <ul>
              <li>웹사이트 UI 디자인 및 퍼블리싱 업무 담당</li>
              <li>사용자 경험을 고려한 화면 구성 및 레이아웃 설계</li>
              <li>HTML/CSS 기반 디자인 구현 및 개발자 협업</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="item-header">
              <strong>로젠택배</strong>
              <span>물류 상하차 | 2022.11 ~ 2023.10 (1년)</span>
            </div>
            <ul>
              <li>물류 상하차 및 분류 작업 수행</li>
              <li>작업 동선 관리 및 현장 안전 수칙 준수</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="item-header">
              <strong>상상짬뽕</strong>
              <span>주방 업무 | 2020.05 ~ 2021.09 (1년 5개월)</span>
            </div>
            <ul>
              <li>주방 보조 및 조리 업무 수행</li>
              <li>위생 관리 및 매장 운영 프로세스 이해</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h3>Education</h3>
          <ul>
            <li>신라대학교 건축학과 졸업</li>
            <li>나래디자인학원 수료</li>
            <li>슈퍼코딩 백엔드 개발 부트캠프 수료</li>
            <li>부산 IT 교육센터 수료</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
