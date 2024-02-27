"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import SkillsContent from "./SkillsContent";
import EducationContent from "./EducationContent";
import CertificationsContent from "./CertificationsContent";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: <SkillsContent />,
  },
  {
    title: "Education",
    id: "education",
    content: <EducationContent />,
  },
  {
    title: "Certifications",
    id: "certifications",
    content: <CertificationsContent />,
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="image about to laptop with things on desktop" src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">

            With over two years of hands-on experience in full-stack web development,
            I bring a comprehensive skill set encompassing JavaScript, React, Redux, Node.js, Express, PostgreSQL, Spring Boot, HTML, CSS, and more.
            Continuously expanding my knowledge base, I am committed to delivering innovative and user-centric web applications.
            A collaborative team player, I am eager to contribute my expertise towards the creation of exceptional digital solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
