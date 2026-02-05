import React, { useEffect, useRef } from 'react';
import './Skincheck.css';

/* =====================
   IMAGE IMPORTS (경로만 변경)
===================== */
import skincheckErd from '../../assets/projects/skincheckerd.png';
import loginImg from '../../assets/projects/login.png';
import joinImg from '../../assets/projects/join.png';
import guideImg from '../../assets/projects/guide.png';
import pointImg from '../../assets/projects/point.png';
import graph2Img from '../../assets/projects/graph2.png';
import curate5Img from '../../assets/projects/curate5.png';
import curate6Img from '../../assets/projects/curate6.png';
import curate8Img from '../../assets/projects/curate8.png';
import curate7Img from '../../assets/projects/curate7.png';

const SkinCheck = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('skincheck-visible');
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
    <div className="skincheck-wrapper">
      {/* Hero */}
      <section ref={addToRefs} className="skincheck-hero">
        <div className="skincheck-hero-bg"></div>
        <div className="skincheck-hero-content">
          <div className="skincheck-hero-number">02</div>
          <h1 className="skincheck-hero-title">
            <span className="skincheck-title-line">Skin</span>
            <span className="skincheck-title-line">Check</span>
          </h1>
          <p className="skincheck-hero-desc">
            AI 기반 피부 상태 분석 애플리케이션
          </p>
          <div className="skincheck-hero-text">
            Skincheck는 얼굴 이미지를 기반으로 피부 상태를 분석하고,
            수분·탄력·모공·색소침착 등의 지표를 사용자에게
            직관적인 수치와 시각화로 제공하는 모바일 애플리케이션입니다.
          </div>
        </div>
      </section>

      {/* Architecture */}
  {/* Architecture */}
<section ref={addToRefs} className="skincheck-arch">
  <div className="skincheck-container">
    <div className="skincheck-section-label">ARCHITECTURE</div>
    <h2 className="skincheck-section-title">시스템 구성 및 데이터 흐름</h2>
    <p className="skincheck-subtitle">
      모바일 앱 · 백엔드 · AI 서버가 분리된 분석 처리 구조
    </p>

    <div className="skincheck-arch-flow">
      <div className="skincheck-arch-step">
        <div className="arch-badge">01</div>
        <h3>Mobile App (iOS)</h3>
        <p>
          사용자는 촬영 가이드를 따라 얼굴 이미지를 촬영하고,
          분석 요청을 서버로 전송합니다.
        </p>
        <ul>
          <li>촬영 가이드 및 입력 품질 제어</li>
          <li>JWT 기반 인증 요청</li>
          <li>분석 결과 시각화</li>
        </ul>
      </div>

      <div className="skincheck-arch-arrow">→</div>

      <div className="skincheck-arch-step">
        <div className="arch-badge">02</div>
        <h3>Backend API (Spring Boot)</h3>
        <p>
          전체 분석 흐름을 통제하는 핵심 레이어로,
          인증·분석 요청·결과 저장을 담당합니다.
        </p>
        <ul>
          <li>JWT 인증 및 사용자 식별</li>
          <li>분석 요청 흐름 제어</li>
          <li>AI 서버 연동 및 결과 가공</li>
          <li>DB 저장 및 이력 관리</li>
        </ul>
      </div>

      <div className="skincheck-arch-arrow">→</div>

      <div className="skincheck-arch-step">
        <div className="arch-badge">03</div>
        <h3>AI Analysis Server</h3>
        <p>
          얼굴 이미지를 기반으로 피부 지표를 분석하고,
          원본 분석 데이터를 반환합니다.
        </p>
        <ul>
          <li>피부 지표 추출 (수분·탄력·모공·색소침착)</li>
          <li>얼굴 영역 단위 Raw 데이터 생성</li>
          <li>모델 교체를 고려한 독립 서버 구성</li>
        </ul>
      </div>

      <div className="skincheck-arch-arrow">→</div>

      <div className="skincheck-arch-step">
        <div className="arch-badge">04</div>
        <h3>Database</h3>
        <p>
          사용자, 분석 요청, 부위별 지표 데이터를 분리하여
          분석 이력과 통계 확장을 고려해 저장합니다.
        </p>
        <ul>
          <li>User / Analysis / Metric 분리 설계</li>
          <li>분석 이력 기반 히스토리 조회</li>
          <li>추후 추천·통계 기능 확장 고려</li>
        </ul>
      </div>
    </div>

    <div className="skincheck-arch-summary">
      <p>
        SkinCheck는 <strong>AI 분석을 단순 호출하는 구조가 아닌</strong>,
        백엔드가 전체 흐름을 통제하도록 설계하여
        분석 신뢰도와 서비스 확장성을 동시에 확보했습니다.
      </p>
    </div>
  </div>
</section>

      {/* ERD */}
      <section ref={addToRefs} className="skincheck-erd">
        <div className="skincheck-container">
          <div className="skincheck-split">
            <div className="skincheck-split-image">
              <img src={skincheckErd} alt="ERD" />
            </div>
            <div className="skincheck-split-content">
              <div className="skincheck-section-label">ERD</div>
              <h2 className="skincheck-section-title">ERD 설계</h2>
              <p className="skincheck-text">
                Skincheck는 단순히 분석 결과만 저장하는 구조가 아니라,
                <strong>사용자 · 분석 결과 · 부위별 지표</strong>를
                명확히 분리하여 설계했습니다.
              </p>
              <p className="skincheck-text">
                하나의 분석 요청이 여러 피부 지표와 얼굴 부위로 확장되는 구조이기 때문에,
                분석 결과의 재사용성과 히스토리 조회를 고려해
                정규화된 테이블 구조를 채택했습니다.
              </p>
              <ul className="skincheck-list">
                <li>사용자(User) 중심의 분석 이력 관리 구조</li>
                <li>분석 결과(SkinAnalysis)와 수치 데이터 분리</li>
                <li>부위별 지표 저장을 고려한 확장 가능한 모델링</li>
                <li>히스토리·통계·추천 기능 확장을 위한 설계</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Auth */}
      <section ref={addToRefs} className="skincheck-auth">
        <div className="skincheck-container">
          <div className="skincheck-section-label">AUTH</div>
          <h2 className="skincheck-section-title">로그인 · 회원가입 설계</h2>
          <p className="skincheck-subtitle">
            이메일 인증 및 소셜 로그인 기반 사용자 인증 구조
          </p>

          <div className="skincheck-auth-grid">
            <div className="skincheck-auth-screens">
              <img src={loginImg} alt="Login" />
              <img src={joinImg} alt="Join" />
            </div>
            <div className="skincheck-auth-info">
              <p className="skincheck-text">
                Skincheck는 개인 피부 분석 이력을 안전하게 관리하기 위해
                회원가입 및 로그인 기반 서비스로 설계되었습니다.
              </p>
              <p className="skincheck-text">
                이메일 회원가입 시 인증 메일을 통한 검증 절차를 거치며,
                인증 완료 이후에만 분석 기능을 사용할 수 있도록
                접근 제어를 적용했습니다.
              </p>
              <ul className="skincheck-list">
                <li>이메일 기반 회원가입 및 인증 메일 검증</li>
                <li>JWT 기반 로그인 / 로그아웃 처리</li>
                <li>카카오 · 구글 OAuth 소셜 로그인 연동</li>
                <li>인증 완료 사용자만 분석 기능 접근 가능</li>
                <li>분석 이력 및 결과의 사용자 단위 분리 관리</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Guide */}
      <section ref={addToRefs} className="skincheck-guide">
        <div className="skincheck-container">
          <div className="skincheck-split skincheck-reverse">
            <div className="skincheck-split-content">
              <div className="skincheck-section-label">GUIDE</div>
              <h2 className="skincheck-section-title">촬영 가이드 설계</h2>
              <p className="skincheck-subtitle">
                분석 정확도를 높이기 위한 촬영 UX
              </p>
              <p className="skincheck-text">
                Skincheck는 얼굴 이미지를 기반으로 피부 상태를 분석하기 때문에,
                촬영 환경에 따라 분석 결과의 신뢰도가 크게 달라질 수 있습니다.
              </p>
              <p className="skincheck-text">
                이를 해결하기 위해 사용자가 올바른 이미지를 촬영할 수 있도록
                촬영 가이드 화면과 카메라 오버레이 UI를 함께 설계했습니다.
              </p>
              <ul className="skincheck-list">
                <li>정면 촬영 유도 및 얼굴 위치 가이드 제공</li>
                <li>조명·각도·거리 안내를 통한 입력 품질 개선</li>
                <li>카메라 오버레이를 활용한 촬영 기준 시각화</li>
                <li>분석 실패 및 오류 케이스 최소화</li>
              </ul>
            </div>
             <div className="skincheck-split-image skincheck-phone-mockup">
              <img src={guideImg} alt="Guide" />
            </div>
          </div>
        </div>
      </section>

      {/* Result */}
      <section ref={addToRefs} className="skincheck-result">
        <div className="skincheck-container">
          <div className="skincheck-section-label">RESULT</div>
          <h2 className="skincheck-section-title">분석 결과 시각화</h2>
          <p className="skincheck-subtitle">
            복잡한 분석 결과를 직관적으로 전달하는 UI
          </p>

          <div className="skincheck-result-grid">
            <div className="skincheck-result-screens">
              <img src={pointImg} alt="Result Point" />
              <img src={graph2Img} alt="Result Graph" />
            </div>
            <div className="skincheck-result-info">
              <p className="skincheck-text">
                Skincheck는 AI 분석 결과를 단순한 수치 나열이 아닌,
                사용자가 직관적으로 이해할 수 있도록
                그래프와 색상 기반 시각화로 표현했습니다.
              </p>
              <p className="skincheck-text">
                전체 피부 상태 요약과 함께 수분·탄력·모공·색소침착 지표를
                분리하여 제공하고, 얼굴 부위별 상태를
                단계적으로 확인할 수 있도록 구성했습니다.
              </p>
              <ul className="skincheck-list">
                <li>피부 지표별 수치 시각화 (수분·탄력·모공·색소침착)</li>
                <li>그래프 기반 상태 비교 및 변화 인식</li>
                <li>얼굴 부위별 분석 결과 분리 제공</li>
                <li>색상 단계로 상태 수준 직관적 표현</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Code Sections */}
      <section ref={addToRefs} className="skincheck-code">
        <div className="skincheck-container">
          <div className="skincheck-code-layout">
            <div className="skincheck-code-content">
              <div className="skincheck-section-label">SERVICE</div>
              <h2 className="skincheck-section-title">분석 로직 Service 설계</h2>
              <p className="skincheck-subtitle">
                분석 흐름을 통제하는 핵심 비즈니스 레이어
              </p>
              <p className="skincheck-text">
                Skincheck의 피부 분석 기능은 SkinAnalysisService를 중심으로 설계되었습니다.
                Controller는 요청과 응답만 담당하고, 이미지 분석 요청 이후의 전체 흐름을
                모두 Service 레이어에서 처리하도록 분리했습니다.
              </p>
              <ul className="skincheck-list">
                <li>Controller의 책임 최소화 및 역할 분리</li>
                <li>분석 요청 → 결과 생성까지의 흐름 일원화</li>
                <li>AI 서버 연동 로직을 Service 단에서 통제</li>
                <li>결과 가공 및 저장 로직의 응집도 향상</li>
              </ul>
            </div>
            <div className="skincheck-code-image">
              <img src={curate5Img} alt="Service Code" />
            </div>
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="skincheck-code skincheck-code-alt">
        <div className="skincheck-container">
          <div className="skincheck-code-layout skincheck-code-reverse">
            <div className="skincheck-code-image">
              <img src={curate6Img} alt="Mapping Code" />
            </div>
            <div className="skincheck-code-content">
              <div className="skincheck-section-label">MAPPING</div>
              <h2 className="skincheck-section-title">부위별 분석 데이터 매핑</h2>
              <p className="skincheck-subtitle">
                Raw 분석 데이터를 얼굴 영역 단위로 재구성
              </p>
              <p className="skincheck-text">
                AI 서버에서 전달되는 분석 결과는 그대로 사용할 경우
                사용자에게 의미 없는 평균값 형태로 보일 수 있었습니다.
              </p>
              <p className="skincheck-text">
                이를 해결하기 위해 얼굴 영역 단위로 데이터를 재구성하는
                RegionMetricMapper를 분리하여 설계했습니다.
              </p>
              <ul className="skincheck-list">
                <li>AI raw metric → 얼굴 부위 기준 재매핑</li>
                <li>부위별 평균값 계산 로직 분리</li>
                <li>누락 데이터에 대한 기본값 처리</li>
                <li>그래프 및 UI 시각화를 고려한 구조</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="skincheck-code">
        <div className="skincheck-container">
          <div className="skincheck-code-layout">
            <div className="skincheck-code-content">
              <div className="skincheck-section-label">CALCULATION</div>
              <h2 className="skincheck-section-title">분석 수치 해석 로직</h2>
              <p className="skincheck-subtitle">
                숫자를 사용자에게 의미 있는 상태로 변환
              </p>
              <p className="skincheck-text">
                Skincheck에서는 단순 점수 나열이 아닌,
                사용자가 이해할 수 있는 피부 상태 표현이 중요하다고 판단했습니다.
              </p>
              <p className="skincheck-text">
                이를 위해 지표별 기준값을 정의하고,
                수치를 단계별 상태로 변환하는 계산 로직을 분리했습니다.
              </p>
              <ul className="skincheck-list">
                <li>지표별 기준값 분리 관리</li>
                <li>같은 점수라도 다른 의미 부여</li>
                <li>의료적 단정 표현을 피한 상태 설계</li>
                <li>UX 친화적인 결과 해석 구조</li>
              </ul>
            </div>
            <div className="skincheck-code-image">
              <img src={curate8Img} alt="Calculation Code" />
            </div>
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="skincheck-code skincheck-code-alt">
        <div className="skincheck-container">
          <div className="skincheck-code-layout skincheck-code-reverse">
            <div className="skincheck-code-image">
              <img src={curate7Img} alt="AI Code" />
            </div>
            <div className="skincheck-code-content">
              <div className="skincheck-section-label">AI</div>
              <h2 className="skincheck-section-title">AI 서버 연동 구조</h2>
              <p className="skincheck-subtitle">
                AI 의존도를 낮춘 Provider 기반 설계
              </p>
              <p className="skincheck-text">
                AI 서버 변경이나 개발 환경 차이를 고려해
                분석 결과 제공 로직을 Provider 패턴으로 분리했습니다.
              </p>
              <p className="skincheck-text">
                이를 통해 개발 환경에서는 Mock AI,
                운영 환경에서는 실제 AI 서버를
                유연하게 전환할 수 있도록 설계했습니다.
              </p>
              <ul className="skincheck-list">
                <li>AI 서버 의존성 분리</li>
                <li>Mock / Real 구현체 전환 가능</li>
                <li>테스트 및 개발 효율성 향상</li>
                <li>AI 모델 교체 대응 구조</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Decision */}
      <section ref={addToRefs} className="skincheck-decision">
        <div className="skincheck-container">
          <div className="skincheck-decision-content">
            <div className="skincheck-section-label">DESIGN</div>
            <h2 className="skincheck-decision-title">설계 회고</h2>
            <p className="skincheck-decision-subtitle">
              데이터 품질과 AI 결과 신뢰도를 중심으로 한 설계
            </p>

            <div className="skincheck-decision-text">
              <p>
                SkinCheck 개발 과정에서 AI 분석 결과의 신뢰도가
                입력 데이터 품질에 크게 의존한다는 점을 경험했습니다.
                특히 AI HUB 라벨링 데이터를 활용하면서,
                실제 피부 상태를 정량적인 수치로 표현하기에는
                라벨 기준이 다소 추상적이라는 한계를 느꼈습니다.
              </p>
              <p>
                또한 이미지 품질과 촬영 환경, 그리고 입력 텍스트 길이에 따라
                분석 및 요약 결과의 편차가 발생했으며,
                이를 개선하기 위해 입력 데이터 분할 및 정규화 전략을 고민했습니다.
              </p>
              <p>
                iOS 환경 중심으로 개발을 진행하며
                배포 및 테스트 과정에서의 제약도 경험했고,
                이를 통해 서비스 확장성과 배포 전략에 대한 고민이 필요하다는 점을 인식하게 되었습니다.
              </p>
              <p>
                향후에는 고품질 데이터 확보와 분석 결과 보정 로직을 추가하고,
                크로스 플랫폼 배포 구조를 적용해 분석 신뢰도와 서비스 완성도를
                더욱 높일 계획입니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkinCheck;
