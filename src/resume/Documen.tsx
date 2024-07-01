import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
  Font,
} from "@react-pdf/renderer";

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

export const ACHIEVEMENTS = [
  "Specialized in JavaScript/TypeScript and related technologies, I have become the go-to expert for any related problems in the workspace. (Don't get me wrong, I'm still learning)",
  "Conducted code reviews on enterprise-level projects to ensure code quality and standards.",
  "Engaged directly with clients to resolve requirements issues and communication gaps.",
  "Conducted nearly 50+ interviews for various roles (Full-stack, Front-end, Back-end, DevOps, Mobile-app).",
];

export const EXTRA_CURRICULAR_ACTIVITIES = [
  `I frequently write blogs on dev.to and posts on LinkedIn about Software Engineering, JavaScript/TypeScript, Node.js, and related topics that can benefit others. I have gained 7k+ followers on LinkedIn and achieved close to 50k impressions on dev.to.`,
  `I stay involved in continuous learning and community conferences to remain on the cutting edge of technology.`,
  `I consistently work on side projects to explore new technologies and ideas.`,
];

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
  role,
  company,
  from,
  to,
  achievements,
  location,
}: {
  role: string;
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
      <View>
        <Text style={{ ...styles.text, fontWeight: "bold" }}>{role}</Text>
        <Text style={styles.text}>{company}</Text>
        <View style={{ paddingLeft: "5px", marginTop: "2px", gap: "2px" }}>
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
      <View style={{ width: "80px" }}>
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
          Senior Software Engineer with over 5 years of experience, specializing
          in both backend and frontend development. Experienced in optimizing
          processes through DevOps practices. Known for a commitment to
          excellence and collaboration, consistently contributing to the success
          of challenging projects.
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
          heading="Technical Skiils"
          skills={[
            "JavaScript",
            "TypeScript",
            "Node.js",
            "Golang",
            "Python",
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Firebase",
            "Neo4J",
            "Pinecone",
            "Redis",
            "GraphQL",
            "Rest APIs",
            "React.js",
            "Next.js",
            "Angular",
            "Docker",
            "Kubernetes",
            "Github",
            "Pulumi",
            "Github Actions",
            "Ansible",
            "AWS",
            "Cloudflare",
            "GCP",
          ]}
        />
        <Skills
          heading="Soft Skills"
          skills={[
            "Communication",
            "Leadership",
            "Conflict Resolution",
            "Listening",
            "Continuous Learning",
            "Problem Solving",
            "Attention to Detail",
          ]}
        />
      </Section>
      <Section heading="Experience">
        <Experience
          role="Senior Software Engineer"
          company="Hashone Digital"
          location="Karachi, Pakistan"
          from="Mar 2021"
          to="Present"
          achievements={[
            "Initiated a full-stack development department in the company.",
            "Built a team of 14 high-performing full-stack engineers, enabling the department to bid on and win highly rewarding projects.",
            "Led training sessions on full-stack development (TypeScript-based) to enhance the team's capabilities to handle complex, data-intensive, and GenAI projects efficiently.",
            "Served as a key person to help scale out a backend system to 100k monthly users (gradually).",
            "Successfully secured complex and highly rewarding projects for the company through deep expertise and effective communication with technical clients.",
            "Serving as a core team member.",
          ]}
        />

        <Experience
          role="Software Engineer"
          company="Freelance"
          location="Remote"
          from="Jul 2019"
          to="Mar 2021"
          achievements={[
            "Converting Figma or Adobe XD design into fully-functional web apps.",
            "Building REST and GraphQL APIs.",
            "Deploying web applications to AWS, Digital Ocean etc.",
          ]}
        />
      </Section>
      <Section heading="Achievements">
        <View style={{ gap: "4px", flexDirection: "column" }}>
          {ACHIEVEMENTS.map((achievement) => {
            return <Text style={styles.text}>&bull; {achievement}</Text>;
          })}
        </View>
      </Section>
      <Section heading="Extra-Curricular Activities">
        <View style={{ gap: "4px", flexDirection: "column" }}>
          {EXTRA_CURRICULAR_ACTIVITIES.map((activities) => {
            return (
              <Text key={activities} style={styles.text}>
                &bull; {activities}
              </Text>
            );
          })}
        </View>
      </Section>
    </Page>
  </Document>
);
