import React, { useEffect, useRef } from 'react';
import './Finmo.css';

/* =====================
   IMAGE IMPORTS (경로만 변경)
===================== */
import finmo2Img from '../../assets/projects/Finmo2.png';
import finmo3Img from '../../assets/projects/Finmo3.png';
import finmo1Img from '../../assets/projects/finmo11.png';
import finmoMonthlyImg from '../../assets/projects/33.png';

const Finmo = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('finmo-visible');
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
    <div className="finmo-main">
      {/* Hero */}
      <section ref={addToRefs} className="finmo-hero">
        <div className="finmo-hero-overlay"></div>
        <div className="finmo-hero-inner">
          <div className="finmo-badge">PROJECT 03</div>
          <h1 className="finmo-title">Finmo</h1>
          <p className="finmo-lead">개인 금융 관리 웹 애플리케이션</p>
          <div className="finmo-intro-text">
            Finmo는 사용자의 수입과 지출 데이터를 기반으로
            자산 흐름을 한눈에 확인할 수 있도록 설계한
            개인 금융 관리 프로젝트입니다.
          </div>
        </div>
      </section>

   {/* Architecture */}
<section ref={addToRefs} className="finmo-arch">
  <div className="finmo-wrap">

    <div className="finmo-header">
      <span className="finmo-tag">ARCHITECTURE</span>
      <h2 className="finmo-heading">시스템 구성 및 데이터 처리 흐름</h2>
      <p className="finmo-desc">
        금융 데이터 정합성과 계산 신뢰도를 중심으로 한 설계
      </p>
    </div>

    <div className="finmo-arch-container">

      {/* Client */}
      <div className="finmo-tier">
        <div className="finmo-node">
          <div className="finmo-node-header">
            <div className="finmo-icon">📊</div>
            <h3>Client</h3>
          </div>
          <p className="finmo-node-stack">
            Web<br />
            자산 입력 · 포트폴리오 조회
          </p>
        </div>
      </div>

      <div className="finmo-arrow">↓</div>

      {/* API */}
      <div className="finmo-tier">
        <div className="finmo-node">
          <div className="finmo-node-header">
            <div className="finmo-icon">⚙</div>
            <h3>API Gateway</h3>
          </div>
          <p className="finmo-node-stack">
            Spring Boot · REST API<br />
            인증 · 요청 라우팅
          </p>
        </div>
      </div>

      <div className="finmo-arrow">↓</div>

      {/* Core Services */}
      <div className="finmo-tier finmo-tier-row finmo-core">
        <div className="finmo-node">
          <div className="finmo-node-header">
            <div className="finmo-icon">∑</div>
            <h3>AssetService</h3>
          </div>
          <p className="finmo-node-stack">자산 관리</p>
        </div>

        <div className="finmo-node">
          <div className="finmo-node-header">
            <div className="finmo-icon">%</div>
            <h3>AnalysisService</h3>
          </div>
          <p className="finmo-node-stack">수익률 · 지표 계산</p>
        </div>

        <div className="finmo-node">
          <div className="finmo-node-header">
            <div className="finmo-icon">📈</div>
            <h3>PortfolioService</h3>
          </div>
          <p className="finmo-node-stack">포트폴리오 분석</p>
        </div>
      </div>

      <div className="finmo-arrow">↓</div>

      {/* Dependencies */}
      <div className="finmo-tier finmo-tier-row finmo-deps">
        <div className="finmo-node">
          <div className="finmo-node-header">
            <div className="finmo-icon">🗄</div>
            <h3>Database</h3>
          </div>
          <p className="finmo-node-stack">MySQL · JPA</p>
        </div>

        <div className="finmo-node">
          <div className="finmo-node-header">
            <div className="finmo-icon">🌐</div>
            <h3>External APIs</h3>
          </div>
          <p className="finmo-node-stack">주가 · 환율 · 금융 데이터</p>
        </div>
      </div>

    </div>
  </div>
</section>



      {/* Feature 1: Dashboard */}
      <section ref={addToRefs} className="finmo-feature">
        <div className="finmo-wrap">
          <div className="finmo-feature-grid">
            <div className="finmo-feature-visual">
              <img src={finmo2Img} alt="Dashboard" />
            </div>
            <div className="finmo-feature-info">
              <span className="finmo-tag">OVERVIEW</span>
              <h2 className="finmo-heading">금융 데이터 시각화</h2>
              <p className="finmo-desc">수입·지출 흐름을 직관적으로 표현</p>
              <p className="finmo-text">
                Finmo에서는 단순한 숫자 나열이 아닌,
                사용자가 자신의 금융 상태를
                빠르게 파악할 수 있도록
                데이터 시각화를 중심으로 화면을 구성했습니다.
              </p>
              <ul className="finmo-points">
                <li>수입 / 지출 내역 CRUD 구현</li>
                <li>월별 합계 및 잔액 자동 계산</li>
                <li>카테고리 기반 데이터 분류</li>
                <li>차트 UI를 고려한 데이터 구조 설계</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Stock Ranking */}
      <section ref={addToRefs} className="finmo-feature finmo-feature-alt">
        <div className="finmo-wrap">
          <div className="finmo-feature-grid finmo-reverse">
            <div className="finmo-feature-info">
              <span className="finmo-tag">FEATURE</span>
              <h2 className="finmo-heading">주식 매매동향 랭킹</h2>
              <p className="finmo-desc">실시간 데이터 기반 상위 100종목 분석</p>
              <p className="finmo-text">
                단순한 주가 조회를 넘어,
                실제 시장에서 어떤 종목이
                활발하게 거래되고 있는지를
                한눈에 파악할 수 있도록
                매매동향 데이터를 수집·정렬하는 기능을 구현했습니다.
              </p>
              <p className="finmo-text">
                외부 금융 데이터를 크롤링하여
                거래량과 매매 추이를 기준으로
                상위 100개 종목을 랭킹화하고,
                이후 시각화에 용이한 구조로 가공했습니다.
              </p>
              <ul className="finmo-points">
                <li>주식 매매동향 데이터 크롤링</li>
                <li>거래량 기준 상위 100종목 정렬</li>
                <li>중복 데이터 필터링 및 정규화 처리</li>
                <li>랭킹 기반 UI를 고려한 데이터 구조 설계</li>
                <li>주기적 데이터 갱신을 위한 수집 로직 구성</li>
              </ul>
            </div>
            <div className="finmo-feature-visual">
              <img src={finmo3Img} alt="Stock Ranking" />
            </div>
          </div>
        </div>
      </section>

      {/* Code 1: Asset Summary */}
      <section ref={addToRefs} className="finmo-code">
        <div className="finmo-wrap">
          <div className="finmo-code-grid">
            <div className="finmo-code-visual">
              <img src={finmo1Img} alt="Asset Code" />
            </div>
            <div className="finmo-code-content">
              <span className="finmo-tag">SERVICE</span>
              <h2 className="finmo-heading">대시보드 자산 요약 로직</h2>
              <p className="finmo-desc">보유 자산을 서비스 기준으로 재계산</p>
              <p className="finmo-text">
                Finmo 대시보드에서는 단순 자산 조회가 아닌,
                보유 수량과 가격 정보를 기반으로
                총 자산, 투자 원가, 수익 및 수익률을
                서비스 레이어에서 직접 계산하도록 설계했습니다.
              </p>
              <p className="finmo-text">
                이를 통해 화면에서는
                계산된 결과만 소비하도록 하여
                UI와 비즈니스 로직의 책임을
                명확히 분리했습니다.
              </p>
              <ul className="finmo-points">
                <li>보유 자산 기반 총 자산 금액 계산</li>
                <li>투자 원가 대비 수익 및 수익률 산출</li>
                <li>서비스 레이어 중심 비즈니스 로직 구성</li>
                <li>대시보드 요약 데이터 일관성 확보</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Code 2: Monthly Summary */}
      <section ref={addToRefs} className="finmo-code finmo-code-alt">
        <div className="finmo-wrap">
          <div className="finmo-code-grid finmo-reverse">
            <div className="finmo-code-content">
              <span className="finmo-tag">SERVICE</span>
              <h2 className="finmo-heading">월별 지출 · 결제 예정 금액 집계</h2>
              <p className="finmo-desc">시간 기준 데이터를 서비스 레이어에서 관리</p>
              <p className="finmo-text">
                사용자의 소비 흐름을 정확히 파악하기 위해,
                이번 달 기준 지출 내역과
                향후 결제 예정 카드 금액을
                서비스 레이어에서 집계했습니다.
              </p>
              <p className="finmo-text">
                날짜 계산과 금액 합산을
                화면이 아닌 서비스에서 처리함으로써,
                대시보드 데이터의 신뢰성과
                유지보수성을 높였습니다.
              </p>
              <ul className="finmo-points">
                <li>이번 달 기준 지출 내역 집계</li>
                <li>LocalDateTime 기반 기간 계산</li>
                <li>카드 결제 예정 금액 반영</li>
                <li>대시보드용 요약 데이터 제공</li>
              </ul>
            </div>
            <div className="finmo-code-visual">
              <img src={finmoMonthlyImg} alt="Monthly Code" />
            </div>
          </div>
        </div>
      </section>

      {/* Retrospective */}
      <section ref={addToRefs} className="finmo-retro">
        <div className="finmo-wrap">
          <div className="finmo-retro-content">
            <span className="finmo-tag">RETROSPECTIVE</span>
            <h2 className="finmo-retro-title">Finmo 회고</h2>
            <div className="finmo-retro-text">
              <p>
                Finmo는 비교적 단순한 기능의 프로젝트였지만,
                실제 서비스처럼 데이터 구조와
                역할 분리를 고민하며 구현한 경험이었습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Finmo;
