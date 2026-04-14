import { Link } from "react-router-dom";
import { resumes } from "../resumes";

export const GalleryPage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerAccent} />
        <h1 style={styles.title}>Resumes</h1>
        <p style={styles.subtitle}>
          {resumes.length} resume{resumes.length !== 1 ? "s" : ""} in collection
        </p>
      </header>

      <main style={styles.grid}>
        {resumes.map((resume, index) => (
          <Link
            key={resume.slug}
            to={`/resume/${resume.slug}`}
            style={{
              ...styles.card,
              animationDelay: `${index * 80}ms`,
            }}
          >
            <div style={styles.cardInner}>
              <div style={styles.cardTopRow}>
                <span style={styles.cardIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span style={styles.cardArrow}>&rarr;</span>
              </div>
              <h2 style={styles.cardName}>{resume.personalInfo.name}</h2>
              <p style={styles.cardRole}>
                {resume.personalInfo.designation
                  ? resume.personalInfo.designation
                  : `${resume.experience[0]?.userRole ?? ""}${resume.experience[0]?.company ? ` at ${resume.experience[0].company}` : ""}`}
              </p>
              <p style={styles.cardLocation}>{resume.personalInfo.location}</p>
              <div style={styles.cardSkills}>
                {resume.skills[0]?.skills.slice(0, 4).map((skill) => (
                  <span key={skill} style={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&display=swap');

        body {
          background-color: #0a0a0a !important;
          color: #e8e4df !important;
        }

        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .resume-card {
          animation: cardIn 0.5s ease-out both;
        }

        .resume-card:hover {
          transform: translateY(-4px);
          border-color: #d4a574 !important;
        }

        .resume-card:hover .card-arrow {
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    padding: "60px 40px",
    maxWidth: "960px",
    margin: "0 auto",
    fontFamily: "'DM Sans', sans-serif",
  },
  header: {
    marginBottom: "64px",
    position: "relative",
  },
  headerAccent: {
    width: "48px",
    height: "3px",
    backgroundColor: "#d4a574",
    marginBottom: "24px",
  },
  title: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "48px",
    fontWeight: 400,
    margin: "0 0 8px 0",
    letterSpacing: "-0.02em",
    color: "#f5f0eb",
  },
  subtitle: {
    fontSize: "14px",
    color: "#777",
    margin: 0,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
    gap: "24px",
  },
  card: {
    display: "block",
    border: "1px solid #1f1f1f",
    borderRadius: "8px",
    padding: "32px",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.3s ease",
    backgroundColor: "#111111",
    animation: "cardIn 0.5s ease-out both",
    cursor: "pointer",
  },
  cardInner: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
  },
  cardTopRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardIndex: {
    fontSize: "12px",
    color: "#555",
    fontFamily: "'DM Sans', monospace",
    letterSpacing: "0.1em",
  },
  cardArrow: {
    fontSize: "18px",
    color: "#d4a574",
    transition: "transform 0.3s ease",
  },
  cardName: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "28px",
    fontWeight: 400,
    margin: 0,
    color: "#f5f0eb",
    letterSpacing: "-0.01em",
  },
  cardRole: {
    fontSize: "14px",
    color: "#999",
    margin: 0,
  },
  cardLocation: {
    fontSize: "13px",
    color: "#555",
    margin: 0,
  },
  cardSkills: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "6px",
    marginTop: "8px",
  },
  skillTag: {
    fontSize: "11px",
    padding: "4px 10px",
    borderRadius: "100px",
    border: "1px solid #2a2a2a",
    color: "#888",
    letterSpacing: "0.02em",
  },
};
