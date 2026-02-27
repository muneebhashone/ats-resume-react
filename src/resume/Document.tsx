import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
  Font,
} from "@react-pdf/renderer";
import type * as React from "react";

Font.register({
  family: "Inter",
  fonts: [
    {
      src: "src/Inter-Regular.ttf",
      fontWeight: "normal",
    },
    {
      src: "src/Inter-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    paddingVertical: "10px",
    paddingHorizontal: "24px",
    fontFamily: "Inter",
  },
  introSection: {
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
  },
  text: {
    fontSize: "9.5px",
  },
  textBold: {
    fontSize: "9.5px",
    fontWeight: "bold",
  },
  rowWithGap: {
    flexDirection: "row",
    gap: "4px",
    marginTop: "3px",
  },
});

const Separator = () => <Text style={styles.text}>|</Text>;

export const Section: React.FC<{
  children: React.ReactNode;
  heading: string;
}> = ({ children, heading }) => {
  return (
    <View
      style={{ alignItems: "flex-start", marginTop: "8px", width: "100%" }}
    >
      <View
        style={{
          borderBottom: "1px solid black",
          width: "100%",
          marginBottom: "2px",
          paddingBottom: "2px",
        }}
      >
        <Text
          style={{
            textTransform: "uppercase",
            fontSize: "9.5px",
            fontWeight: "bold",
          }}
        >
          {heading}
        </Text>
      </View>
      <View style={{ width: "100%" }}>{children}</View>
    </View>
  );
};

export const Experience = ({
  userRole,
  company,
  from,
  to,
  achievements,
  location,
}: {
  userRole: string;
  company: string;
  from: string;
  to: string;
  location: string;
  achievements: string[];
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: "2px",
      }}
    >
      <View style={{ flex: "1" }}>
        <Text style={styles.textBold}>{userRole}</Text>
        <Text style={styles.text}>{company}</Text>
        <View style={{ paddingLeft: "4px", marginTop: "3px", gap: "1px" }}>
          {achievements.map((achievement) => {
            return (
              <Text style={styles.text} key={achievement}>
                &bull; {achievement}
              </Text>
            );
          })}
        </View>
      </View>
      <View>
        <Text style={styles.text}>
          {from} - {to}
        </Text>
        <Text style={styles.text}>{location}</Text>
      </View>
    </View>
  );
};

export const Skills = ({
  heading,
  skills,
}: {
  heading: string;
  skills: string[];
}) => {
  return (
    <View style={{ flexDirection: "row", gap: "8px", marginVertical: "2px" }}>
      <View style={{ width: "110px", flexShrink: 0 }}>
        <Text style={styles.textBold}>{heading}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>{skills.join(", ")}</Text>
      </View>
    </View>
  );
};

export const Project = ({
  name,
  description,
  stats,
  githubLink,
  websiteLink,
}: {
  name: string;
  description: string;
  stats?: string;
  githubLink: string;
  websiteLink?: string;
}) => {
  return (
    <View style={{ marginVertical: "2px" }}>
      <View style={{ flexDirection: "row", gap: "8px", alignItems: "center" }}>
        <Text style={styles.textBold}>{name}</Text>
        {stats && <Text style={styles.text}>({stats})</Text>}
      </View>
      <Text style={styles.text}>{description}</Text>
      <View style={{ flexDirection: "row", gap: "8px", marginTop: "2px" }}>
        <Text style={styles.text}>
          <Link href={githubLink}>GitHub</Link>
        </Text>
        {websiteLink && (
          <>
            <Text style={styles.text}>|</Text>
            <Text style={styles.text}>
              <Link href={websiteLink}>Project Website</Link>
            </Text>
          </>
        )}
      </View>
    </View>
  );
};

// Create Document Component
export const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.introSection}>
        <Text style={styles.heading}>Muneeb Hussain</Text>
        <View style={styles.rowWithGap}>
          <Text style={styles.text}>+92-336-3380567</Text>
          <Separator />
          <Text style={styles.text}>Karachi, Pakistan</Text>
        </View>
        <View style={styles.rowWithGap}>
          <Text style={styles.text}>
            <Link href="mailto:themuneebh@gmail.com">themuneebh@gmail.com</Link>
          </Text>
          <Separator />
          <Text style={styles.text}>
            <Link href="https://www.linkedin.com/in/muneebhussainmodi">
              linkedin.com/in/muneebhussainmodi
            </Link>
          </Text>
        </View>
        <View style={styles.rowWithGap}>
          <Text style={styles.text}>
            <Link href="https://github.com/muneebhashone">
              github.com/muneebhashone
            </Link>
          </Text>
          <Separator />
          <Text style={styles.text}>
            <Link href="https://themuneebh.com">themuneebh.com</Link>
          </Text>
        </View>
      </View>

      <Section heading="Profile">
        <Text style={styles.text}>
          Engineering leader with 7 years of experience building scalable
          backend systems and leading high-performing teams. Specialized in
          TypeScript, Golang, and Python with deep expertise in backend
          architecture, performance optimization, and cloud infrastructure.
          Track record of reducing infrastructure costs, improving system
          reliability, and shipping production systems handling millions of
          daily events. Pragmatic AI practitioner focused on practical LLM
          integration, agentic workflows, and developer tooling. Early adopter of
          agentic coding tools including Cursor, Claude Code, and Codex. Open
          source contributor with 360+ GitHub stars.
        </Text>
      </Section>

      <Section heading="Experience">
        <Experience
          userRole="Head of Engineering"
          company="Hashone Global"
          location="On-Site"
          from="Aug 2025"
          to="Present"
          achievements={[
            "Oversee engineering operations across web, mobile, and AI products for a 200+ person digital agency serving global clients",
            "Architect and deliver scalable backend systems achieving 98.5%+ uptime and handling 500K+ daily API calls",
            "Design AI-powered features using LLMs, RAG, and agentic workflows — reduced manual processing with 92% automation success rate",
            "Establish technical standards and CI/CD practices for full-stack development across 14+ engineers",
          ]}
        />

        <Experience
          userRole="Software Engineer"
          company="Pryze Inc."
          location="On-Site"
          from="Sep 2024"
          to="Aug 2025"
          achievements={[
            "Reduced AWS cloud costs by 50% for Pryze.io — Pakistan's first mobile gaming tournament platform (50K+ downloads).",
            "Built release management system for APK distribution and an admin portal for full app configuration control.",
            "Integrated MMP to track users across platform.",
            "Reduced app load time by 90% by building an automated asset optimization and compression pipeline.",
          ]}
        />

        <Experience
          userRole="Team Lead"
          company="Hashone Digital"
          location="On-Site"
          from="Feb 2023"
          to="Sep 2024"
          achievements={[
            "Spearheaded R&D efforts, system design, and application architecture for complex client projects",
            "Built and led a team of 14 high-performing full-stack engineers, enabling the department to win highly rewarding projects",
            "Led training sessions on full-stack TypeScript development to handle complex, data-intensive, and GenAI projects",
            "Implemented robust CI/CD pipelines and established engineering best practices",
          ]}
        />

        <Experience
          userRole="Software Engineer"
          company="Hashone Digital"
          location="On-Site"
          from="Mar 2021"
          to="Feb 2023"
          achievements={[
            "Built real-time systems achieving 35% latency reduction and 98.5% uptime for live streaming platforms",
            "Developed IoT data pipelines processing 2M+ daily events with 850ms P95 latency",
            "Architected e-commerce checkout systems reducing errors by 40% and handling 8K+ monthly orders",
            "Built REST and GraphQL APIs with Node.js, Express.js, and TypeScript",
          ]}
        />

        <Experience
          userRole="Software Engineer"
          company="Freelance"
          location="Remote"
          from="Jul 2019"
          to="Mar 2021"
          achievements={[
            "Converted Figma and Adobe XD designs into fully-functional web applications.",
            "Built REST and GraphQL APIs.",
          ]}
        />
      </Section>

      <Section heading="Notable Projects">
        <View style={{ gap: "2px" }}>
          <Text style={styles.text}>
            <Text style={styles.textBold}>Pryze.io</Text> — Pakistan's first
            mobile gaming tournament platform (50K+ downloads). Led backend
            operations including AWS optimization, release management, and asset
            pipelines.
          </Text>
          <Text style={styles.text}>
            <Text style={styles.textBold}>CasperEdge</Text> — AI-powered CASPer
            test prep platform with real-time learning analytics and
            subscription management.
          </Text>
          <Text style={styles.text}>
            <Text style={styles.textBold}>JustBeMe AI Twin</Text> —
            Conversational AI system replicating user communication across
            digital channels using LLMs.
          </Text>
          <Text style={styles.text}>
            <Text style={styles.textBold}>Make Movie AI</Text> — AI content
            creation platform with Text-to-Image and Text-to-Video generation.
          </Text>
          <Text style={styles.text}>
            <Text style={styles.textBold}>Talky Walky</Text> — English language
            learning platform using AI-driven conversational practice.
          </Text>
        </View>
      </Section>

      <Section heading="Open Source Projects">
        <Project
          name="TypeScript Backend Toolkit"
          stats="319+ GitHub stars"
          description="Production-ready Express.js/TypeScript framework with auto-generated OpenAPI, Artisan-style CLI, plugin system, and AI-agent compatible enterprise features"
          githubLink="https://github.com/muneebhashone/typescript-backend-toolkit"
          websiteLink="https://tstoolkit.themuneebh.com"
        />
      </Section>

      <Section heading="Skills">
        <Skills
          heading="Programming Languages"
          skills={["JavaScript/TypeScript", "Golang", "Python"]}
        />
        <Skills
          heading="Technical Skills"
          skills={[
            "Node.js",
            "Express.js",
            "FastAPI",
            "Nest.js",
            "Echo (Go)",
            "Next.js",
            "REST APIs",
            "GraphQL",
            "Docker & Docker Compose",
            "WebRTC",
            "WebSockets",
            "BullMQ",
            "Socket.io",
            "Queues",
            "gRPC",
            "Nginx",
            "Grafana",
          ]}
        />
        <Skills
          heading="Databases"
          skills={[
            "MongoDB",
            "Redis",
            "PostgreSQL",
            "AWS DynamoDB",
            "TimescaleDB",
            "Pinecone",
          ]}
        />
        <Skills
          heading="Cloud Services"
          skills={[
            "AWS",
            "Azure",
            "GCP",
            "Digital Ocean",
            "Firebase",
            "Supabase",
          ]}
        />
        <Skills
          heading="Generative AI Skills"
          skills={[
            "RAG",
            "Fine Tuning",
            "Hugging Face",
            "Agentic Workflow",
            "Open Source LLMs",
            "n8n",
            "LangChain",
            "MCP",
            "OpenAI Compatible SDK",
            "Ollama",
            "Cursor",
            "Claude Code",
            "Codex",
          ]}
        />
      </Section>
    </Page>
  </Document>
);
