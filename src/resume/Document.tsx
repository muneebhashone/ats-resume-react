import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
  Font,
} from "@react-pdf/renderer";
import type { ResumeData } from "../types/resume";

const timesNewRomanUrl = new URL("../times-new-roman.ttf", import.meta.url);
const timesNewRomanBoldUrl = new URL("../times-new-roman-bold.ttf", import.meta.url);
const isFileProtocol = timesNewRomanUrl.protocol === "file:";
const timesNewRoman = isFileProtocol ? timesNewRomanUrl.pathname : timesNewRomanUrl.href;
const timesNewRomanBold = isFileProtocol ? timesNewRomanBoldUrl.pathname : timesNewRomanBoldUrl.href;

Font.register({
  family: "TimesNewRoman",
  fonts: [
    {
      src: timesNewRoman,
      fontWeight: "normal",
    },
    {
      src: timesNewRomanBold,
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
  textBold: {
    fontSize: "12px",
    fontWeight: "bold",
  },
  rowWithGap: {
    flexDirection: "row",
    gap: "4px",
    marginTop: "4px",
  },
});

const Separator = () => <Text style={styles.text}>|</Text>;

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
        <Text style={styles.textBold}>{userRole}</Text>
        <Text style={styles.text}>{company}</Text>
        <View style={{ paddingLeft: "5px", marginTop: "5px", gap: "2px" }}>
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
    <View style={{ flexDirection: "row", gap: "16px", marginVertical: "4px" }}>
      <View style={{ width: "150px" }}>
        <Text style={styles.textBold}>{heading}</Text>
      </View>
      <View style={{ width: "450px" }}>
        <Text style={styles.text}>{skills.join(", ")}</Text>
      </View>
    </View>
  );
};

export const Project = ({
  name,
  description,
  stats,
  features,
  githubLink,
  websiteLink,
}: {
  name: string;
  description: string;
  stats?: string;
  features: string[];
  githubLink?: string;
  websiteLink?: string;
}) => {
  return (
    <View style={{ marginVertical: "4px" }}>
      <View style={{ flexDirection: "row", gap: "8px", alignItems: "center" }}>
        <Text style={styles.textBold}>{name}</Text>
        {stats && <Text style={styles.text}>({stats})</Text>}
      </View>
      <Text style={styles.text}>{description}</Text>
      <View style={{ paddingLeft: "5px", marginTop: "5px", gap: "2px" }}>
        {features.map((feature) => {
          return (
            <Text style={styles.text} key={feature}>
              &bull; {feature}
            </Text>
          );
        })}
      </View>
      {(githubLink || websiteLink) && (
        <View style={{ flexDirection: "row", gap: "8px", marginTop: "5px" }}>
          {githubLink && (
            <Text style={styles.text}>
              <Link href={githubLink}>GitHub</Link>
            </Text>
          )}
          {githubLink && websiteLink && <Text style={styles.text}>|</Text>}
          {websiteLink && (
            <Text style={styles.text}>
              <Link href={websiteLink}>Project Website</Link>
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

// Create Document Component
export const MyDocument = ({ data }: { data: ResumeData }) => {
  const { personalInfo, profile, education, skills, projects, experience } = data;
  const linkedinDisplay = personalInfo.linkedin?.replace(/^https?:\/\/(www\.)?/, "");
  const githubDisplay = personalInfo.github?.replace(/^https?:\/\//, "");
  const websiteDisplay = personalInfo.website?.replace(/^https?:\/\//, "");

  const contactItems: React.ReactNode[] = [];
  if (personalInfo.phone) {
    contactItems.push(<Text style={styles.text} key="phone">{personalInfo.phone}</Text>);
  }
  contactItems.push(<Text style={styles.text} key="location">{personalInfo.location}</Text>);

  const linkItems: React.ReactNode[] = [];
  if (personalInfo.email) {
    linkItems.push(
      <Text style={styles.text} key="email">
        <Link href={`mailto:${personalInfo.email}`}>{personalInfo.email}</Link>
      </Text>
    );
  }
  if (personalInfo.linkedin) {
    linkItems.push(
      <Text style={styles.text} key="linkedin">
        <Link href={personalInfo.linkedin}>{linkedinDisplay}</Link>
      </Text>
    );
  }
  if (personalInfo.github) {
    linkItems.push(
      <Text style={styles.text} key="github">
        <Link href={personalInfo.github}>{githubDisplay}</Link>
      </Text>
    );
  }
  if (personalInfo.website) {
    linkItems.push(
      <Text style={styles.text} key="website">
        <Link href={personalInfo.website}>{websiteDisplay}</Link>
      </Text>
    );
  }

  const renderWithSeparators = (items: React.ReactNode[]) =>
    items.flatMap((item, i) =>
      i < items.length - 1
        ? [item, <Separator key={`sep-${i}`} />]
        : [item]
    );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.introSection}>
          <Text style={styles.heading}>{personalInfo.name}</Text>
          {personalInfo.designation && (
            <Text style={{ fontSize: "14px", marginTop: "2px" }}>
              {personalInfo.designation}
            </Text>
          )}
          <View style={styles.rowWithGap}>
            {renderWithSeparators(contactItems)}
          </View>
          {linkItems.length > 0 && (
            <View style={styles.rowWithGap}>
              {renderWithSeparators(linkItems)}
            </View>
          )}
        </View>

        <Section heading="Profile">
          <Text style={styles.text}>{profile}</Text>
        </Section>

        {education.length > 0 && (
          <Section heading="Education">
            {education.map((edu) => (
              <View
                key={edu.title}
                style={{ flexDirection: "row", justifyContent: "space-between" }}
              >
                <View>
                  <Text style={styles.text}>{edu.title}</Text>
                </View>
                <View>
                  <Text style={styles.text}>{edu.year}</Text>
                </View>
              </View>
            ))}
          </Section>
        )}

        <Section heading="Skills">
          {skills.map((group) => (
            <Skills key={group.heading} heading={group.heading} skills={group.skills} />
          ))}
        </Section>

        {projects.length > 0 && (
          <Section heading={data.projectsHeading || "Open Source Projects"}>
            {projects.map((project) => (
              <Project key={project.name} {...project} />
            ))}
          </Section>
        )}

        {experience.length > 0 && (
          <Section heading="Experience">
            {experience.map((exp) => (
              <Experience key={`${exp.company}-${exp.from}`} {...exp} />
            ))}
          </Section>
        )}
      </Page>
    </Document>
  );
};
