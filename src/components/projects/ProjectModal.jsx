import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // ✅ 모든 유튜브 케이스 대응
  const getYoutubeEmbedUrl = (url) => {
    if (!url) return "";

    // shorts
    if (url.includes("shorts/")) {
      const id = url.split("shorts/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }

    // youtu.be
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }

    // watch?v=
    if (url.includes("watch?v=")) {
      const id = url.split("watch?v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${id}`;
    }

    return "";
  };

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <header className="project-modal-header">
          <h3>{project.title}</h3>
          <button onClick={onClose}>✕</button>
        </header>

        {/* BODY */}
        <div className="project-modal-body">
          {/* DESCRIPTION */}
          <p className="modal-desc">{project.description}</p>

          {/* META */}
          <ul className="modal-meta">
            {project.role && (
              <li>
                <strong>역할</strong>
                <span>{project.role}</span>
              </li>
            )}
            {project.tech && (
              <li>
                <strong>기술</strong>
                <span>
                  {[
                    ...(project.tech.backend || []),
                    ...(project.tech.frontend || []),
                  ].join(", ")}
                </span>
              </li>
            )}
          </ul>

          {/* 🎬 DEMO VIDEO */}
          {project.demoVideo && (
            <section className="modal-section">
              <h4>🎬 시연 영상</h4>
              <div className="video-wrapper">
                <iframe
                  src={getYoutubeEmbedUrl(project.demoVideo)}
                  title={`${project.title} demo video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </section>
          )}

          {/* 📄 PDF PREVIEW */}
          {project.pdf && (
            <section className="modal-section">
              <h4>📄 기획서 미리보기</h4>
              <div className="pdf-preview">
                <iframe
                  src={project.pdf}
                  title={`${project.title} PDF`}
                />
              </div>
            </section>
          )}
        </div>

        {/* FOOTER */}
        <footer className="project-modal-footer">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {project.pdf && (
            <a href={project.pdf} target="_blank" rel="noreferrer">
              PDF 새 창으로 보기
            </a>
          )}
        </footer>
      </div>
    </div>
  );
}
