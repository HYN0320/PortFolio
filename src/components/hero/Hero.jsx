import "./Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  const scrollToSkills = () => {
    const target = document.getElementById("skills");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      {/* HEADER */}
      <header className="hero-header">
        <div className="header-inner">
          <div className="logo">Hyunse</div>
          <nav className="nav">
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <Link to="/resume" className="nav-resume">
              Resume
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTENT */}
      <div className="hero-content">
        {/* 왼쪽 텍스트 */}
        <div className="hero-left">
          <p className="hero-eyebrow">FULL-STACK DEVELOPER</p>
          
          <h1 className="hero-title">
            실제로<br />
            <span>작동하는</span><br />
            서비스를 만듭니다
          </h1>

          <p className="hero-subtitle">
            기획부터 배포까지, 혼자서도 완성할 수 있는 풀스택 개발자입니다.
          </p>

          {/* CTA */}
          <div className="hero-cta">
            <a href="#projects" className="hero-button">
              프로젝트 보기
            </a>
            <Link to="/resume" className="hero-resume">
              이력서 보기 →
            </Link>
          </div>
        </div>

        {/* 오른쪽 비주얼 */}
        <div className="hero-visual">
          <div className="visual-cards">
            {/* 카드 1 - React */}
            <div className="code-card">
              <div className="card-header">
                <div className="card-dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <span className="card-title">React Component</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="line-num">1</span>
                  <span className="line-code">
                    <span className="keyword">const</span>{' '}
                    <span className="function">App</span> = () =&gt; {'{'}</span>
                </div>
                <div className="code-line">
                  <span className="line-num">2</span>
                  <span className="line-code">
                    {'  '}<span className="keyword">return</span> (
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">3</span>
                  <span className="line-code">
                    {'    '}&lt;<span className="function">div</span>&gt;
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">4</span>
                  <span className="line-code">
                    {'      '}&lt;<span className="function">h1</span>&gt;<span className="string">Hello World</span>&lt;/<span className="function">h1</span>&gt;
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">5</span>
                  <span className="line-code">
                    {'    '}&lt;/<span className="function">div</span>&gt;
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">6</span>
                  <span className="line-code">
                    {'  '});
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">7</span>
                  <span className="line-code">{'};'}</span>
                </div>
              </div>
            </div>

            {/* 카드 2 - Spring Boot */}
            <div className="code-card">
              <div className="card-header">
                <div className="card-dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <span className="card-title">Spring Boot API</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="line-num">1</span>
                  <span className="line-code">
                    <span className="property">@RestController</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">2</span>
                  <span className="line-code">
                    <span className="keyword">public class</span>{' '}
                    <span className="function">UserController</span> {'{'}
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">3</span>
                  <span className="line-code">
                    {'  '}<span className="property">@GetMapping</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">4</span>
                  <span className="line-code">
                    {'  '}<span className="keyword">public</span>{' '}
                    List&lt;User&gt; <span className="function">getUsers</span>() {'{'}
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">5</span>
                  <span className="line-code">
                    {'    '}<span className="keyword">return</span>{' '}
                    userService.<span className="function">findAll</span>();
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">6</span>
                  <span className="line-code">{'  }'}</span>
                </div>
                <div className="code-line">
                  <span className="line-num">7</span>
                  <span className="line-code">{'}'}</span>
                </div>
              </div>
            </div>

            {/* 카드 3 - FastAPI */}
            <div className="code-card">
              <div className="card-header">
                <div className="card-dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <span className="card-title">FastAPI Endpoint</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="line-num">1</span>
                  <span className="line-code">
                    <span className="property">@app</span>.<span className="function">get</span>(<span className="string">"/api/data"</span>)
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">2</span>
                  <span className="line-code">
                    <span className="keyword">async def</span>{' '}
                    <span className="function">get_data</span>():
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">3</span>
                  <span className="line-code">
                    {'    '}<span className="keyword">return</span> {'{'}
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">4</span>
                  <span className="line-code">
                    {'        '}<span className="string">"status"</span>:{' '}
                    <span className="string">"success"</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">5</span>
                  <span className="line-code">
                    {'        '}<span className="string">"data"</span>: results
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">6</span>
                  <span className="line-code">{'    }'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <button className="hero-scroll" onClick={scrollToSkills}>
        <span>SCROLL</span>
        <div className="scroll-line" />
      </button>
    </section>
  );
}