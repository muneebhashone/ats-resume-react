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
  family: "TimesNewRoman",
  fonts: [
    {
      src: "src/times-new-roman.ttf",
      fontWeight: "normal",
    },
    {
      src: "src/times-new-roman-bold.ttf",
      fontWeight: "bold",
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    paddingVertical: "10px",
    paddingHorizontal: "24px",
    fontFamily: "TimesNewRoman",
  },
  introSection: {
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
  },
  text: {
    fontSize: "12px",
  },
});

export const Section: React.FC<{
  children: React.ReactNode;
  heading: string;
}> = ({ children, heading }) => {
  return (
    <View
      style={{ alignItems: "flex-start", marginTop: "12px", width: "100%" }}
    >
      <View
        style={{
          borderBottom: "1px solid black",
          width: "100%",
          marginBottom: "3px",
          paddingBottom: "3px",
        }}
      >
        <Text
          style={{
            textTransform: "uppercase",
            fontSize: "12px",
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
        marginVertical: "4px",
      }}
    >
      <View style={{ flex: "1" }}>
        <Text style={{ ...styles.text, fontWeight: "bold" }}>{userRole}</Text>
        <Text style={styles.text}>{company}</Text>
        <View style={{ paddingLeft: "5px", marginTop: "5px", gap: "2px" }}>
          {achievements.map((achievement) => {
            return (
              <Text style={{ ...styles.text }} key={achievement}>
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
    <View style={{ flexDirection: "row", gap: "16px", marginVertical: "4px" }}>
      <View style={{ width: "150px" }}>
        <Text style={{ ...styles.text, fontWeight: "bold" }}>{heading}</Text>
      </View>
      <View style={{ width: "450px" }}>
        <Text style={{ ...styles.text }}>{skills.join(", ")}</Text>
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
        <View style={{ flexDirection: "row", gap: "4px", marginTop: "4px" }}>
          <Text style={styles.text}>+92-336-3380567</Text>
          <Text style={styles.text}>|</Text>
          <Text style={styles.text}>Karachi, Pakistan</Text>
        </View>
        <View style={{ flexDirection: "row", gap: "4px", marginTop: "4px" }}>
          <Text style={styles.text}>
            <Link href="mailto:themuneebh@gmail.com">themuneebh@gmail.com</Link>
          </Text>
          <Text style={styles.text}>|</Text>
          <Text style={styles.text}>
            <Link href="https://www.linkedin.com/in/muneebhussainmodi">
              linkedin.com/in/muneebhussainmodi
            </Link>
          </Text>
          <Text style={styles.text}>|</Text>
          <Text style={styles.text}>
            <Link href="https://github.com/muneebhashone">
              github.com/muneebhashone
            </Link>
          </Text>
        </View>
      </View>

      <Section heading="Profile">
        <Text style={styles.text}>
          Software engineer with nearly 6 years of experience specializing in
          JavaScript, TypeScript, Golang, and Python. Expertise in full-stack
          development, cloud services, and generative AI technologies, with a
          strong foundation in architectural patterns and best practices. Proven
          ability to design and implement scalable, efficient solutions using a
          wide range of tools and frameworks.
        </Text>
      </Section>

      <Section heading="Education">
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.text}>
              Matriculation (Computer Science) - Board of Secondary Education
              Karachi
            </Text>
          </View>
          <View>
            <Text style={styles.text}>2017</Text>
          </View>
        </View>
      </Section>
      <Section heading="Skills">
        <Skills
          heading="Programming Languages"
          skills={[
            "JavaScript (First)",
            "TypeScript (Primary)",
            "Golang (Secondary)",
            "Python (AI)",
          ]}
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
            "GraphQL",
            "REST APIs",
            "GraphQL",
            "Docker & Docker Compose",
            "WebRTC",
            "WebSockets",
            "Queues",
            "gRPC",
            "OOP",
            "SOLID",
            "Clean Code",
            "Asynchronous",
            "Multi-threading",
            "Concurrency",
            "MVC Architecture",
            "Modular Architecture",
            "Event-Driven Architecture",
            "PubSub",
            "Nginx",
          ]}
        />
        <Skills
          heading="Databases"
          skills={[
            "MongoDB",
            "Redis",
            "PostgreSQL",
            "AWS DynamoDB",
            "Pinecone",
          ]}
        />
        <Skills
          heading="Cloud Services"
          skills={[
            "AWS",
            "GCP",
            "Digital Ocean",
            "Firebase",
            "Supabase",
            "Vercel",
            "Fly.io",
            "Render",
            "Railway",
            "Github Actions",
            "Sanity",
            "Netlify",
            "Cloudinary",
            "Sentry",
            "LiveKit",
            "Mux",
            "Shopify (Storefront API)",
          ]}
        />
        <Skills
          heading="Generative AI Skills"
          skills={[
            "RAG",
            "Fine Tuning",
            "Hugging Face",
            "Agentic Workflow",
            "n8n",
            "LangChain",
            "Function Calling",
            "Computer Use (Claude API)",
            "MCP",
            "ElevenLabs",
            "OpenAI API",
            "Ollama",
          ]}
        />
      </Section>
      <Section heading="Experience">
        <Experience
          userRole="Software Engineer"
          company="Pryze Inc."
          location="On-Site"
          from="Sep 2024"
          to="Present"
          achievements={[
            "Reduce cloud bills (AWS) by 50% through efficient utilization of services while cutting unnecessary services.",
            "Build release management system for APK distribution.",
            "Integrated MMP to track users across platform.",
            "Reduce App load time by 90% through building a system that automatically optimizes assets and compresses all of them into a zip file.",
            "Build a admin portal to control everything related to app.",
            "Build an advanced popup management system.",
          ]}
        />

        <Experience
          userRole="Team Lead / Software Engineer"
          company="Hashone Digital"
          location="On-Site"
          from="Mar 2021"
          to="Sep 2024"
          achievements={[
            "Built a team of 14 high-performing full-stack engineers, enabling the department to bid on and win highly rewarding projects.",
            "Led training sessions on full-stack development (TypeScript-based) to enhance the team's capabilities to handle complex, data-intensive, and GenAI projects efficiently.",
            "Successfully secured complex and highly rewarding projects for the company through deep expertise and effective communication with technical clients.",
          ]}
        />

        <Experience
          userRole="Software Engineer"
          company="Freelance"
          location="Remote"
          from="Jul 2019"
          to="Mar 2021"
          achievements={[
            "Converting Figma or Adobe XD design into fully-functional web apps.",
            "Building REST and GraphQL APIs.",
          ]}
        />
      </Section>
    </Page>
  </Document>
);
