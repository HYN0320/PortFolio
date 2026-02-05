import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import ProjectModal from "./ProjectModal";

import curateImg from "../../assets/projects/curate1.png";
import finmoImg from "../../assets/projects/Finmo2.png";
import runImg from "../../assets/projects/run1.png";
import skinImg from "../../assets/projects/skincheck.png";

const TEAM_IMAGES = [
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
];

const PROJECTS = [
  {
    id: "curate",
    category: "personal",
    title: "Curate",
    subtitle: "AI 콘텐츠 큐레이션",
    description:
      "정보 과잉 시대, AI가 핵심만 골라내는 스마트 큐레이션 플랫폼",
    image: curateImg,
    github: "https://github.com/HYN0320/Curate",
    pdf: "/pdf/curate.pdf",
    role: "기획 · 백엔드 · 프론트엔드",
    tech: {
      backend: ["Java", "Spring Boot", "Spring MVC", "REST API", "Spring Data JPA"],
      frontend: ["React", "Vite", "JavaScript", "NodeGraph", "ESLint"],
    },
    tags: ["AI", "큐레이션", "풀스택"],
    story: {
      problem:
        "콘텐츠가 여러 플랫폼에 분산되어 있어 사용자가 핵심 정보만 빠르게 파악하기 어려웠습니다.",
      design:
        "요약 → 분류 → 재탐색 흐름을 핵심 UX로 정의하고 카드 기반 탐색 구조로 설계했습니다.",
      architecture: [
        "React 클라이언트에서 콘텐츠 요청",
        "Spring Boot에서 인증 및 요청 처리",
        "FastAPI에서 AI 요약 및 키워드 추출",
        "DB 저장 후 결과 반환",
      ],
      decision:
        "실시간 처리 대신 요청 단위 요약 방식을 선택해 안정성과 비용을 고려했습니다.",
      reflection:
        "정보 흐름을 먼저 설계하는 것이 서비스 완성도에 가장 큰 영향을 준다는 것을 배웠습니다.",
    },
    demoVideo: "https://youtu.be/PCRpO3pB5JA",
  },
  {
    id: "skincheck",
    category: "team",
    title: "SkinCheck",
    subtitle: "AI 피부 진단 서비스",
    description:
      "AI 이미지 분석으로 피부 타입을 진단하고 맞춤 케어를 추천하는 서비스",
    image: skinImg,
    github: "https://github.com/HYN0320/SkinCheck",
    pdf: "/pdf/skincheck.pdf",
    role: "기획 · AI · 백엔드 · 프론트엔드",
    tech: {
      backend: ["Java", "Spring Boot", "Spring MVC", "REST API", "Spring Data JPA"],
      frontend: [
        "React Native",
        "Expo",
        "TypeScript",
        "Zustand",
        "Expo Camera",
        "Axios",
      ],
    },
    tags: ["AI", "이미지 분석", "헬스케어"],
    story: {
      problem:
        "피부 상태를 확인하려면 병원 방문 또는 전문 장비 사용이 필요, 일상적으로 확인하기 어려움",
      design: "사진 업로드 → AI 분석 → 결과 제공 흐름으로 간소화",
      architecture: [
        "React Native에서 AWS S3 이미지 업로드",
        "FastAPI에서 이미지 전처리",
        "AI 모델로 피부 타입 분류",
        "맞춤 케어 추천 제공",
      ],
      decision: "정확도보다 빠른 피드백을 우선",
      reflection: "AI 결과의 신뢰성 전달이 핵심 과제",
    },
    demoVideo: "https://youtube.com/shorts/HE-tlVP1-kc",
  },
  {
    id: "finmo",
    category: "personal",
    title: "Finmo",
    subtitle: "AI 자산 관리 대시보드",
    description:
      "AI가 소비 패턴을 분석해 인사이트를 제공하는 개인 자산 관리 서비스",
    image: finmoImg,
    github: "https://github.com/HYN0320/Finmo",
    pdf: "/pdf/finmo.pdf",
    role: "기획 · 백엔드 · 프론트엔드 · 데이터 시각화",
    tech: {
      backend: [
        "Java",
        "Spring Boot",
        "Spring MVC",
        "REST API",
        "Spring Data JPA",
        "Spring Security",
      ],
      frontend: [
        "React",
        "Vite",
        "JavaScript",
        "Tailwind CSS",
        "HTML/CSS",
        "ESLint",
      ],
    },
    tags: ["데이터", "시각화", "핀테크"],
    story: {
      problem: "데이터는 많지만 사용자가 직접 해석해야 했음",
      design: "AI가 의미 있는 인사이트를 문장으로 전달",
      architecture: [
        "자산·지출 데이터 집계",
        "AI 로직으로 패턴 분석",
        "인사이트 카드 제공",
      ],
      aiInsight:
        "월별 소비 흐름을 분석해 비정상 지출 구간 자동 감지",
      decision: "자동 연동 대신 수동 입력 선택",
      reflection: "보여주는 것보다 이해시키는 것이 중요",
    },
    demoVideo: "https://youtu.be/ZxzOMItQF9s",
  },
  {
    id: "runx3",
    category: "team",
    title: "RunX3",
    subtitle: "러닝 커뮤니티 플랫폼",
    description:
      "지역 기반 러너 커뮤니티와 기록 관리를 통합한 러닝 서비스",
    image: runImg,
    github: "#",
    pdf: "/pdf/runx3.pdf",
    role: "백엔드 · 프론트엔드",
    tech: {
      backend: ["Spring Boot", "JPA"],
      frontend: ["Thymeleaf", "Bootstrap", "Chart.js"],
    },
    tags: ["커뮤니티", "팀 프로젝트", "SSR"],
    story: {
      problem: "지역 기반 러닝 커뮤니티 부족",
      design: "정보·소통·동기부여 통합",
      architecture: [
        "Spring Boot + JPA",
        "Thymeleaf SSR",
        "Chart.js 시각화",
      ],
      decision: "SPA 대신 SSR 선택",
      reflection: "협업 구조의 중요성 체감",
    },
    demoVideo: "https://youtu.be/3A_mZPRiNwA",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedStory, setExpandedStory] = useState(null);

  const navigate = useNavigate();

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="header-badge">PORTFOLIO</div>
          <h2 className="projects-title">
            실제로 <span className="gradient-text">만든</span> 것들
          </h2>
          <p className="projects-subtitle">
            기획부터 배포까지, 완성도를 중요하게 생각하며 진행한 프로젝트들입니다
          </p>
        </div>

        <div className="project-filter">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            전체
          </button>
          <button
            className={`filter-btn ${filter === "personal" ? "active" : ""}`}
            onClick={() => setFilter("personal")}
          >
            개인
          </button>
          <button
            className={`filter-btn ${filter === "team" ? "active" : ""}`}
            onClick={() => setFilter("team")}
          >
            팀
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className={`project-card ${project.category}`}>
              {/* 🔥 이미지 클릭 시 상세 페이지 이동 */}
              <div
                className="project-image"
                  onClick={() => {
              window.scrollTo(0, 0);
              navigate(`/projects/${project.id}`);
               }}
              >
                <img src={project.image} alt={project.title} />
                <div className="image-overlay">
                  <span className="view-detail">자세히 보기</span>
                </div>
              </div>

              {/* 내용 */}
              <div className="project-content">
                {/* 카테고리 뱃지 */}
                <div className="project-category">
                  {project.category === "personal" ? "개인" : "팀"}
                </div>

                {/* 타이틀 */}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>

                {/* 태그 */}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 기술 스택 (Backend/Frontend 2줄) */}
                <div className="project-tech">
                  <div className="tech-row">
                    <span className="tech-label">Backend :</span>
                    {project.tech.backend.map((t) => (
                      <span key={t} className="tech-item">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="tech-row">
                    <span className="tech-label">Frontend :</span>
                    {project.tech.frontend.map((t) => (
                      <span key={t} className="tech-item">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 액션 버튼 */}
                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="action-btn github"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>

                  <a
                    href={project.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="action-btn pdf"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                        strokeWidth="2"
                      />
                      <path
                        d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
                        strokeWidth="2"
                      />
                    </svg>
                    기획서
                  </a>

                  <button
                    className="action-btn story"
                    onClick={() =>
                      setExpandedStory(
                        expandedStory === project.id ? null : project.id
                      )
                    }
                  >
                  
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <path d="M12 16v-4M12 8h.01" strokeWidth="2" />
                    </svg>
                    {expandedStory === project.id ? "접기" : "설계 과정"}
                  </button>
                  {project.demoVideo && (
                    <button
                      className="action-btn demo"
                      onClick={() => setSelectedProject(project)}
                    >
                      ▶ 시연 영상
                    </button>
                  )}
                </div>

                {/* 설계 설명 (확장) */}
                {expandedStory === project.id && (
                  <div className="project-story">
                    <div className="story-section">
                      <h4>💡 문제 정의</h4>
                      <p>{project.story.problem}</p>
                    </div>

                    <div className="story-section">
                      <h4>🎨 설계 의도</h4>
                      <p>{project.story.design}</p>
                    </div>

                    <div className="story-section">
                      <h4>⚙️ 아키텍처</h4>
                      <ul>
                        {project.story.architecture.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {project.story.aiInsight && (
                      <div className="story-section">
                        <h4>🤖 AI 분석</h4>
                        <p>{project.story.aiInsight}</p>
                      </div>
                    )}

                    <div className="story-section">
                      <h4>🔍 의사결정</h4>
                      <p>{project.story.decision}</p>
                    </div>

                    <div className="story-section">
                      <h4>📝 회고</h4>
                      <p>{project.story.reflection}</p>
                    </div>
                  </div>

                )}
              </div>
              
            </article>
          ))}
        </div>
      </div>


      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
