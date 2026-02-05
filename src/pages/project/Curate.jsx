import React, { useEffect, useRef } from 'react';
import './Curate.css';

/* =====================
   IMAGE IMPORTS
===================== */
import curateErd from '../../assets/projects/curate-erd.png';
import graphImg from '../../assets/projects/graph.png';
import knowledgeImg from '../../assets/projects/knowledge.png';
import textImg from '../../assets/projects/text.png';
import tagImg from '../../assets/projects/tag.png';
import nodeImg from '../../assets/projects/node.png';

const Curate = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('curate-section-visible');
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="curate-container">
      {/* Hero Section */}
      <section ref={addToRefs} className="curate-hero">
        <div className="curate-hero-content">
          <span className="curate-project-number">01</span>
          <h1 className="curate-hero-title">Curate</h1>
          <p className="curate-hero-subtitle">
            AI 콘텐츠 큐레이션 & 요약 플랫폼
          </p>
          <div className="curate-hero-description">
            <p>
              Curate는 대량의 텍스트 콘텐츠를 자동으로 수집한 뒤,
              AI 모델을 통해 핵심 문장과 키워드를 추출하고
              사용자가 빠르게 맥락을 파악할 수 있도록
              요약 결과를 카드 형태로 제공하는 서비스입니다.
            </p>
            <p>
              단순 요약 기능을 넘어서,
              콘텐츠 간의 관계를 시각화하고
              사용자의 관심사를 구조적으로 탐색할 수 있도록
              전체 데이터 흐름과 서비스 구조를 설계했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
   {/* Architecture Section */}
<section ref={addToRefs} className="curate-architecture">
  <div className="curate-section-header">
    <span className="curate-label">ARCHITECTURE</span>
    <h2 className="curate-section-title">시스템 구성 및 데이터 흐름</h2>
  </div>

  <div className="curate-arch-diagram">

    {/* Client */}
    <div className="curate-arch-layer">
      <div className="curate-arch-node curate-client">
        <div className="curate-node-icon">⚛</div>
        <div className="curate-node-info">
          <h4>Client</h4>
          <p>React · Vite · D3.js</p>
          <span>콘텐츠 입력 · 요약 결과 · 그래프 시각화</span>
        </div>
      </div>
    </div>

    <div className="curate-arch-connector">↓</div>

    {/* API */}
    <div className="curate-arch-layer">
      <div className="curate-arch-node curate-api">
        <div className="curate-node-icon">⚙</div>
        <div className="curate-node-info">
          <h4>API Gateway</h4>
          <p>Spring MVC · REST API</p>
          <span>요청 흐름 제어 · 인증 · Service 연결</span>
        </div>
      </div>
    </div>

    <div className="curate-arch-connector">↓</div>

    {/* Core Services */}
    <div className="curate-arch-layer curate-triple">
      <div className="curate-arch-node curate-service">
        <div className="curate-node-icon">∑</div>
        <div className="curate-node-info">
          <h4>SummaryService</h4>
          <p>AI 요약 파이프라인</p>
          <span>텍스트·URL·PDF 입력 통합 처리</span>
        </div>
      </div>

      <div className="curate-arch-node curate-service">
        <div className="curate-node-icon">#</div>
        <div className="curate-node-info">
          <h4>ContentService</h4>
          <p>태그 & 콘텐츠 관리</p>
          <span>요약–태그 관계 구조화</span>
        </div>
      </div>

      <div className="curate-arch-node curate-service">
        <div className="curate-node-icon">◈</div>
        <div className="curate-node-info">
          <h4>GraphService</h4>
          <p>지식 그래프 생성</p>
          <span>Keyword–Card 관계 시각화</span>
        </div>
      </div>
    </div>

    <div className="curate-arch-connector">↓</div>

    {/* Dependencies */}
    <div className="curate-arch-layer curate-double">
      <div className="curate-arch-node curate-data">
        <div className="curate-node-icon">◪</div>
        <div className="curate-node-info">
          <h4>Database</h4>
          <p>MySQL · JPA</p>
          <span>요약 · 태그 · 사용자 데이터 저장</span>
        </div>
      </div>

      <div className="curate-arch-node curate-ai">
        <div className="curate-node-icon">◉</div>
        <div className="curate-node-info">
          <h4>AI Model</h4>
          <p>Summary API</p>
          <span>요약 결과 제공 (의존 컴포넌트)</span>
        </div>
      </div>
    </div>

  </div>
</section>

      {/* ERD Section */}
      <section ref={addToRefs} className="curate-erd">
        <div className="curate-erd-grid">
          <div className="curate-erd-visual">
            <img src={curateErd} alt="Curate ERD" />
          </div>
          <div className="curate-erd-content">
            <span className="curate-label">ERD</span>
            <h2 className="curate-section-title">ERD 설계</h2>
            <p className="curate-description">
              Curate는 요약 결과를 단순 저장하는 구조가 아니라,
              요약·태그·사용자 행동·시각화를 유기적으로 연결하기 위해
              도메인 중심으로 데이터 모델을 설계했습니다.
            </p>
            <ul className="curate-features">
              <li>SummaryCard 중심의 통합 요약 구조</li>
              <li>Tag / SummaryCardTag 분리로 관계 확장성 확보</li>
              <li>사용자 행동 로그와 핵심 도메인 분리</li>
              <li>GraphService 기반 시각화를 고려한 데이터 모델</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Chat Feature */}
      <section ref={addToRefs} className="curate-feature">
        <div className="curate-feature-grid">
          <div className="curate-feature-content">
            <span className="curate-label">FEATURE</span>
            <h2 className="curate-section-title">Chat with your Knowledge</h2>
            <p className="curate-feature-subtitle">
              요약된 지식을 다시 질문할 수 있는 인터페이스
            </p>
            <p className="curate-description">
              Curate는 단순 요약 결과를 나열하는 서비스가 아니라,
              사용자가 이미 정리된 지식을 다시 질문하고 탐색할 수 있도록
              설계된 지식 관리 플랫폼입니다.
            </p>
            <ul className="curate-features">
              <li>요약된 콘텐츠를 기반으로 한 자연어 질의</li>
              <li>기존 요약 데이터 재활용 중심 설계</li>
              <li>지식 축적 → 탐색 → 재활용 흐름 구현</li>
              <li>Chat UI를 통한 직관적인 사용자 경험 제공</li>
            </ul>
          </div>
          <div className="curate-feature-visual">
            <img src={knowledgeImg} alt="Chat Interface" />
          </div>
        </div>
      </section>

      {/* Graph Visualization */}
      <section ref={addToRefs} className="curate-visualization">
        <div className="curate-viz-grid">
          <div className="curate-viz-visual">
            <img src={graphImg} alt="Knowledge Graph" />
          </div>
          <div className="curate-viz-content">
            <span className="curate-label">VISUALIZATION</span>
            <h2 className="curate-section-title">
              Knowledge Graph Visualization
            </h2>
            <p className="curate-description">
              GraphService에서 생성한 키워드–콘텐츠 관계 데이터를 기반으로
              사용자가 지식을 탐색할 수 있는 그래프 시각화 화면을 구현했습니다.
            </p>
            <ul className="curate-features">
              <li>키워드–요약 카드 간 관계를 그래프 구조로 표현</li>
              <li>키워드 등장 빈도에 따라 노드 크기 동적 조절</li>
              <li>핵심 주제를 빠르게 파악할 수 있는 시각적 탐색 제공</li>
              <li>요약 데이터 재활용 기반의 지식 탐색 UX</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Code Sections */}
      <section ref={addToRefs} className="curate-code-section">
        <div className="curate-code-grid">
          <div className="curate-code-content">
            <span className="curate-label">CODE</span>
            <h2 className="curate-section-title">AI 요약 파이프라인</h2>
            <p className="curate-description">
              SummaryService는 Curate 서비스의 핵심 로직을 담당하는 Service
              레이어입니다. 텍스트, URL, PDF 등 다양한 입력 소스를
              하나의 AI 요약 파이프라인으로 통합해 처리하도록 설계했습니다.
            </p>
          </div>
          <div className="curate-code-visual">
            <img src={textImg} alt="Summary Pipeline" />
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="curate-code-section curate-alt">
        <div className="curate-code-grid">
          <div className="curate-code-visual">
            <img src={tagImg} alt="Tag System" />
          </div>
          <div className="curate-code-content">
            <span className="curate-label">TAG SYSTEM</span>
            <h2 className="curate-section-title">
              태그 자동 생성 및 관심도 누적
            </h2>
            <p className="curate-description">
              AI 요약 결과에서 추출된 키워드를 기반으로
              태그를 자동 생성하고 SummaryCard와 연결하도록 설계했습니다.
            </p>
            <p className="curate-description">
              또한 UserTag 엔티티를 통해 사용자별 태그 사용 빈도를 누적
              관리하여, 단순 태그를 넘어 사용자 관심도 데이터로 확장할 수
              있도록 구현했습니다.
            </p>
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="curate-code-section">
        <div className="curate-code-grid">
          <div className="curate-code-content">
            <span className="curate-label">GRAPH</span>
            <h2 className="curate-section-title">
              Keyword–Card 노드 그래프 생성
            </h2>
            <p className="curate-description">
              GraphService는 SummaryCard와 키워드 간의 관계를
              이분 그래프(Bipartite Graph) 구조로 변환하는 역할을 담당합니다.
            </p>
            <p className="curate-description">
              키워드 등장 빈도를 기반으로 노드 크기를 동적으로 계산하고,
              카드와 키워드 간의 관계를 링크로 표현해
              시각화에 적합한 그래프 데이터를 생성했습니다.
            </p>
            <ul className="curate-features">
              <li>Keyword / Card 노드 분리 (Bipartite Graph)</li>
              <li>키워드 등장 빈도 기반 노드 size 계산</li>
              <li>GraphNode / GraphLink DTO로 프론트 전달</li>
              <li>D3.js 시각화를 고려한 데이터 구조</li>
            </ul>
          </div>
          <div className="curate-code-visual">
            <img src={nodeImg} alt="Graph Service" />
          </div>
        </div>
      </section>

      {/* Design Decision */}
      <section ref={addToRefs} className="curate-decision">
        <div className="curate-decision-content">
          <span className="curate-label">DESIGN</span>
          <h2 className="curate-decision-title">설계 의도와 구조적 판단</h2>
          <p className="curate-decision-subtitle">
            기능 구현보다 구조와 확장성을 우선한 설계
          </p>

          <div className="curate-decision-body">
            <p>
                Curate는 기능을 빠르게 구현하는 것보다,
                서비스가 확장되었을 때도 유지보수가 가능한 구조를 목표로 설계했습니다.
                이를 위해 Controller는 요청 흐름만 담당하도록 제한하고,
                모든 비즈니스 로직은 Service 레이어로 위임했습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curate;
