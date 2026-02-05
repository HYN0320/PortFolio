import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        
        {/* HEADER */}
        <div className="skills-header">
          <div className="header-badge">TECH STACK</div>
          <h2 className="skills-title">
            풀스택으로<br />
            <span className="gradient-text">완성</span>합니다
          </h2>
          <p className="skills-subtitle">
            프론트부터 백엔드, 데이터까지 — 서비스 전체를 설계하고 구현합니다
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="skills-grid">
          
          {/* Frontend */}
          <div className="skill-card frontend">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="icon-wrapper">
                <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                  <line x1="9" y1="3" x2="9" y2="21" strokeWidth="2"/>
                  <line x1="15" y1="9" x2="15" y2="21" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Frontend</h3>
              <p>사용자 경험을 최우선으로 생각하며 React로 반응형 인터페이스를 구현합니다</p>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">React Native</span>
                <span className="tech-tag">Axios</span>
                <span className="tech-tag">Expo</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">Vite</span>
                <span className="tech-tag">D3.js</span>
                <span className="tech-tag">ESLint</span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-card backend">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="icon-wrapper">
                <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="3" strokeWidth="2"/>
                  <path d="M12 1v6m0 6v6m8.66-15.66l-4.24 4.24m-4.84 4.84l-4.24 4.24m15.32-4.24l-4.24-4.24m-4.84-4.84l-4.24-4.24" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Backend</h3>
              <p>RESTful API 설계와 JWT 인증, 비즈니스 로직 구현에 능숙합니다</p>
              <div className="tech-tags">
                <span className="tech-tag">Spring Boot</span>
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Spring MVC</span>
                <span className="tech-tag">Spring Security</span>
                <span className="tech-tag">Spring Data JPA</span>
                <span className="tech-tag">REST API</span>
                <span className="tech-tag">JWT</span>
                <span className="tech-tag">AWS S3</span>
                <span className="tech-tag">Kakao Map API</span>
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="skill-card database">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="icon-wrapper">
                <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth="2"/>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" strokeWidth="2"/>
                  <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Database</h3>
              <p>정규화와 인덱싱을 고려한 효율적인 데이터베이스 설계가 가능합니다</p>
              <div className="tech-tags">
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">Oracle</span>
                <span className="tech-tag">SQL</span>
              </div>
            </div>
          </div>

          {/* Data & ML */}
          <div className="skill-card data">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="icon-wrapper">
                <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="18" y1="20" x2="18" y2="10" strokeWidth="2"/>
                  <line x1="12" y1="20" x2="12" y2="4" strokeWidth="2"/>
                  <line x1="6" y1="20" x2="6" y2="14" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Data & ML</h3>
              <p>데이터 전처리부터 분석, 머신러닝 모델 구축까지 경험했습니다</p>
              <div className="tech-tags">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Pandas</span>
                <span className="tech-tag">FastAPI</span>
                <span className="tech-tag">scikit-learn</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM HIGHLIGHT */}
        <div className="skills-highlight">
          <div className="highlight-icon">⚡</div>
          <p>
            <strong>빠른 프로토타이핑</strong>과 <strong>완성도 있는 배포</strong>, 
            두 가지 모두에 익숙합니다
          </p>
        </div>

      </div>
    </section>
  );
}