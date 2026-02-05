import React, { useEffect, useRef } from 'react';
import './RunX3.css';

/* =====================
   IMAGE IMPORTS (경로만 변경)
===================== */
import runx3MapImg from '../../assets/projects/runx3-1.png';
import runx3HistoryImg from '../../assets/projects/runx3-2.png';

const RunX3 = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('runx3-visible');
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach(section => {
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
    <div className="runx3-page">
      {/* Hero */}
      <section ref={addToRefs} className="runx3-hero">
        <div className="runx3-hero-shapes">
          <div className="runx3-shape runx3-shape-1"></div>
          <div className="runx3-shape runx3-shape-2"></div>
          <div className="runx3-shape runx3-shape-3"></div>
        </div>
        <div className="runx3-hero-content">
          <div className="runx3-project-num">04</div>
          <h1 className="runx3-hero-title">
            Run<span className="runx3-accent">X3</span>
          </h1>
          <p className="runx3-hero-subtitle">
            러닝 기록 관리 & 목표 달성 트래킹 서비스
          </p>
          <div className="runx3-hero-desc">
            RunX3는 사용자의 러닝 기록을 기반으로
            운동 패턴과 목표 달성 현황을
            시각적으로 관리할 수 있도록 설계한
            개인 사이드 프로젝트입니다.
          </div>
        </div>
      </section>

      {/* Architecture */}
  {/* Architecture */}
<section ref={addToRefs} className="runx3-architecture">
  <div className="runx3-container">
    <div className="runx3-section-head">
      <span className="runx3-label">ARCHITECTURE</span>
      <h2 className="runx3-title">시스템 구성 및 실행 흐름</h2>
    </div>

    <div className="runx3-arch-stack">

      {/* Client */}
      <div className="runx3-arch-level">
        <div className="runx3-arch-box runx3-client">
          <div className="runx3-box-icon">📱</div>
          <div className="runx3-box-info">
            <h3>Client</h3>
            <p>
              JSP · HTML · CSS · JavaScript<br />
              지도 클릭 · 경로 생성 · 기록 요청
            </p>
          </div>
        </div>
      </div>

      <div className="runx3-connector">⬇</div>

      {/* Controller */}
      <div className="runx3-arch-level">
        <div className="runx3-arch-box runx3-api">
          <div className="runx3-box-icon">⚙️</div>
          <div className="runx3-box-info">
            <h3>Controller</h3>
            <p>
              Spring MVC<br />
              요청 처리 · 서비스 호출
            </p>
          </div>
        </div>
      </div>

      <div className="runx3-connector">⬇</div>

      {/* Service */}
      <div className="runx3-arch-level">
        <div className="runx3-arch-box runx3-service">
          <div className="runx3-box-icon">🏃</div>
          <div className="runx3-box-info">
            <h3>Service Layer</h3>
            <p>
              CourseService<br />
              코스 생성 · 기록 관리 · 거리 계산
            </p>
          </div>
        </div>
      </div>

      <div className="runx3-connector">⬇</div>

      {/* External + DB */}
      <div className="runx3-arch-level runx3-dual">
        <div className="runx3-arch-box runx3-external">
          <div className="runx3-box-icon">🗺️</div>
          <div className="runx3-box-info">
            <h3>Kakao Map API</h3>
            <p>
              지도 렌더링<br />
              좌표 기반 경로 처리
            </p>
          </div>
        </div>

        <div className="runx3-arch-box runx3-database">
          <div className="runx3-box-icon">🗄️</div>
          <div className="runx3-box-info">
            <h3>Database</h3>
            <p>
              MySQL · JPA<br />
              코스 · 러닝 기록 저장
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Feature: Map */}
      <section ref={addToRefs} className="runx3-feature">
        <div className="runx3-container">
          <div className="runx3-feature-layout">
            <div className="runx3-feature-media">
              <img src={runx3MapImg} alt="Course Map" />
            </div>
            <div className="runx3-feature-text">
              <span className="runx3-label">MAP</span>
              <h2 className="runx3-title">러닝 코스 등록</h2>
              <p className="runx3-subtitle">지도 기반 인터랙션 설계</p>
              <p className="runx3-paragraph">
                사용자는 지도 위에서 직접 경로를 선택해
                러닝 코스를 생성할 수 있습니다.
                경로 선택 → 거리 계산 → 코스 저장까지의 흐름을
                하나의 UX로 설계했습니다.
              </p>
              <ul className="runx3-list">
                <li>Kakao Map API 연동</li>
                <li>지도 클릭 기반 경로 생성</li>
                <li>코스 거리 계산 및 저장</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: History */}
      <section ref={addToRefs} className="runx3-feature runx3-feature-reverse">
        <div className="runx3-container">
          <div className="runx3-feature-layout runx3-layout-reverse">
            <div className="runx3-feature-text">
              <span className="runx3-label">HISTORY</span>
              <h2 className="runx3-title">코스 기록 관리</h2>
              <p className="runx3-subtitle">사용자 중심 기록 조회</p>
              <p className="runx3-paragraph">
                생성된 코스와 러닝 기록은
                마이페이지에서 한눈에 조회할 수 있도록 구성했습니다.
                거리, 소요 시간, 완료일 기준으로
                기록을 관리할 수 있습니다.
              </p>
              <ul className="runx3-list">
                <li>코스별 기록 테이블 구성</li>
                <li>러닝 결과 이력 관리</li>
                <li>CRUD 흐름 명확화</li>
              </ul>
            </div>
            <div className="runx3-feature-media">
              <img src={runx3HistoryImg} alt="Course History" />
            </div>
          </div>
        </div>
      </section>

      {/* Retrospective */}
      <section ref={addToRefs} className="runx3-retro">
        <div className="runx3-container">
          <div className="runx3-retro-inner">
            <span className="runx3-label">RETROSPECTIVE</span>
            <h2 className="runx3-retro-title">RunX3 회고</h2>
            <div className="runx3-retro-body">
              <p>
                RunX3는 아이디어를 빠르게 구현하고,
                데이터 구조와 사용자 흐름을
                실험하는 데 목적을 둔 프로젝트였습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RunX3;
