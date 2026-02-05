import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <h2>Contact</h2>

        <p className="contact-desc">
          새로운 프로젝트, 협업, 혹은 기술에 대한 대화를 환영합니다.
          <br />
          편하게 연락 주세요.
        </p>

        <div className="contact-links">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hyn960320@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>

          <a
            href="https://github.com/HYN0320"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <button
            className="contact-modal-btn"
            onClick={() => setOpen(true)}
          >
            Contact Info
          </button>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="contact-modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="contact-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Get in touch</h3>

            <ul>
              <li>
                <strong>Email</strong>
                <span>hyn960320@gmail.com</span>
              </li>
              <li>
                <strong>GitHub</strong>
                <a
                  href="https://github.com/HYN0320"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/HYN0320
                </a>
              </li>
              <li>
                <strong>Phone-Number</strong>
                <span>010-8056-8450</span>
           
              </li>
            </ul>

            <button
              className="modal-close"
              onClick={() => setOpen(false)}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
