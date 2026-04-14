import { useParams, Link } from "react-router-dom";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { getResumeBySlug } from "../resumes";
import { MyDocument } from "../resume/Document";

export const ResumeViewerPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getResumeBySlug(slug) : undefined;

  if (!data) {
    return (
      <div style={styles.notFound}>
        <style>{fontImport}</style>
        <h1 style={styles.notFoundTitle}>Resume not found</h1>
        <Link to="/" style={styles.backLink}>
          &larr; Back to collection
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <style>{fontImport}</style>
      <header style={styles.header}>
        <Link to="/" style={styles.backLink}>
          &larr; Back
        </Link>
        <div style={styles.headerCenter}>
          <h1 style={styles.name}>{data.personalInfo.name}</h1>
        </div>
        <PDFDownloadLink
          document={<MyDocument data={data} />}
          fileName={`${data.slug}.pdf`}
          style={styles.downloadBtn}
        >
          Download PDF
        </PDFDownloadLink>
      </header>
      <div style={styles.viewerWrap}>
        <PDFViewer width="100%" height="100%">
          <MyDocument data={data} />
        </PDFViewer>
      </div>
    </div>
  );
};

const fontImport = `@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&display=swap');`;

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    fontFamily: "'DM Sans', sans-serif",
    backgroundColor: "#0a0a0a",
    color: "#e8e4df",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 24px",
    borderBottom: "1px solid #1f1f1f",
    flexShrink: 0,
  },
  headerCenter: {
    position: "absolute" as const,
    left: "50%",
    transform: "translateX(-50%)",
  },
  name: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "18px",
    fontWeight: 400,
    margin: 0,
    color: "#f5f0eb",
    letterSpacing: "-0.01em",
  },
  backLink: {
    color: "#888",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.2s",
  },
  downloadBtn: {
    padding: "8px 20px",
    backgroundColor: "#d4a574",
    color: "#0a0a0a",
    border: "none",
    borderRadius: "6px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
    letterSpacing: "0.02em",
  },
  viewerWrap: {
    flex: 1,
    overflow: "hidden",
  },
  notFound: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "'DM Sans', sans-serif",
    backgroundColor: "#0a0a0a",
    color: "#e8e4df",
    gap: "16px",
  },
  notFoundTitle: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "32px",
    fontWeight: 400,
    color: "#f5f0eb",
  },
};
