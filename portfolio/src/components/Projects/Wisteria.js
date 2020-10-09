import React from "react";
import styled from "styled-components";
import ProjectPage from "../Pages/ProjectPage";
import ProjectHeader from "./ProjectHeader";

const Wisteria = ({ className, match }) => {
  return (
    <ProjectPage>
      <div className={className}>
        <ProjectHeader
          // title={match.params.projectId}
          title="Wisteria"
          location="Computer Science Capstone"
          dates="Aug 2020 - Nov 2020"
          toolTags={[
            {
              text: "Flutter SDK",
              type: "tech",
            },
            {
              text: "Figma",
              type: "tech",
            },
          ]}
          conceptTags={[
            {
              text: "Cross-platform development",
              type: "concept",
            },
            {
              text: "Agile",
              type: "concept",
            },
            {
              text: "UX Design",
              type: "concept",
            },
          ]}
        />

        <h2>Description</h2>
        <p>
          Wisteria is a modern networking tool designed to connect people to
          make a more lasting impression than the dated resume format. Users
          will exchange digital trading cards based on individual
          characteristics, job experience, and personality to build more
          meaningful professional networks.
        </p>
        <br />
        <h2>Challenge</h2>
        <p>
          For the technical portion of my capstone class, I joined a group
          working to create a networking app that is similar to exchanging
          trading cards, such as focusing on unique skills and interests in
          addition to relevant experience. I joined the project after user
          research and initial user testing had been done with basic paper and
          digital prototypes. As a newcomer to the team, I wanted to integrate
          quickly into the project and contribute from day 1. In addition, I
          came into the project with the personal goal of practicing my UX
          design skills and applying my knowledge about UX engineering to the
          project.
        </p>
        <br />

        <h2>Game Plan</h2>
        <p>
          <ol>
            <li>
              Get up to speed on the project concept, goals, and research.
            </li>
            <li>
              Build on the existing UX designs to create the best version before
              development began.
            </li>
            <li>
              Get familiar with the new programming language and framework we
              decided to use: Dart and Flutter.
            </li>
          </ol>
        </p>
        <br />

        <h2>Value Added</h2>
        <p>
          To get caught up on the project, I read through the final report from
          the previous semester and asked as many questions about the initial
          conception of the project to get a clear picture of the background.
        </p>
        <p>
          Next, I moved onto iterating upon the digital prototype designs to
          match what I've learned about the{" "}
          <a href="https://www.nngroup.com/articles/ten-usability-heuristics/">
            <mark>10 Usability Heuristics for User Interface Design</mark>
          </a>{" "}
          and my User Interface Design course. <br />
          <strong>
            {" "}
            See the wireframes on Figma{" "}
            <a href="https://www.figma.com/file/sPxsDfIayE3NZxzITGZE1C/Digital-Trading-Cards?node-id=10%3A2">
              <mark>here </mark>
            </a>
            . These are some improvements I made:
          </strong>
        </p>
        {/* SCREENS */}
        <div className="screens">
          <h3>Home</h3>
          <p>
            <i>
              <strong>Aesthetic and minimalist design</strong>
            </i>
            <br />I edited the overall aesthetics of the app to create a clean
            and modern feeling. Including the illustrations served to visually
            communicate the purpose of the screen as well as adding to the
            storytelling I wanted to convey for young professionals.
          </p>
          <p>
            <i>
              <strong>Match between system and the real world</strong>
            </i>
            <br /> Adding the shadow to the card created a more realistic model
            of a trading card or business card.
          </p>
          <img src={require("../../assets/images/Wisteria/1.png")} alt="" />
          <br />
          <h3>Create Digital Trading Card</h3>
          <p>
            <i>
              <strong>Visibility of system status</strong>
            </i>
            <br />
            Since there is a lot of information we need from the user when they
            first create a digital trading card, I decided that a multi-step
            form was the best way to organize the form. A descriptive progress
            bar at the top shows the status of the form and allows the user to
            preview what information they need to provide to finish this
            process.
          </p>
          <img src={require("../../assets/images/Wisteria/2.png")} alt="" />

          <br />
          <h3>Add a Trading Card</h3>
          <p>
            <i>
              <strong>User control and freedom</strong>
            </i>
            <br />
            In addition to the previous heuristics, here I focused on user
            control. I wanted to make sure that at every step, it was clear to
            the user how they could cancel or undo an action to navigate easily.
          </p>
          <img src={require("../../assets/images/Wisteria/3.png")} alt="" />
          <img src={require("../../assets/images/Wisteria/4.png")} alt="" />
          <img src={require("../../assets/images/Wisteria/5.png")} alt="" />
          <br />
          <h3>Saved Cards</h3>
          <p>
            <i>
              <strong>Consistency and standards</strong>
            </i>
            <br />
            Here, I wanted to create a better bottom navigation bar. In my
            analysis and research of other apps, I found that most apps had the
            home button at the very left. To continue with this convention, I
            reorganized the icons in the navigation bar.
          </p>
          <img src={require("../../assets/images/Wisteria/6.png")} alt="" />
        </div>
        <br />

        <h2>Development</h2>
        <p>
          <strong>Choosing a framework</strong>
        </p>
        <p>
          Because the focus of this semester's project was to implement the
          designs to create a Minimum Viable Product (MVP), we needed to start
          coding within the first few weeks of classes. After quickly modifying
          the design to a point that I was satisfied with, I started brushing up
          on Flutter.
        </p>
        <p>
          As a team, we compared the different tools we could use to do
          cross-platform development such as React Native and Flutter. After
          some discussion and research, we decided to use{" "}
          <a href="https://flutter.dev/">
            <mark>Flutter</mark>
          </a>{" "}
          because:
        </p>
        <p>
          <ul>
            <li>
              Flutter has its custom implementation for the UI, which gives us
              greater control and flexibility on the UI
            </li>
            <li>
              Flutter has its own UI components (widgets) and doesn't rely on as
              many third party libraries for this as React Native
            </li>
            <li>
              We were excited to learn a new technology to add to our
              repertoire!
            </li>
          </ul>
        </p>
        <p>
          After this decision, I took advantage of the beginning of the semester
          to get a head-start on learning Flutter because I wanted to be
          prepared and ready to engage in technical conversations. I watched
          some tutorials and made a simple practice app to play with the Flutter
          SDK.
        </p>
        <br />
        <p>
          <strong>Agiled Project Management</strong>
        </p>
        <p>
          We created an iteration plan to outline our 5 sprints and set goals
          for the user stories we wanted to finish. We linked a ZenHub project
          to monitor our sprint velocity as we started completing user stories
          and to help general workflow. After reading{" "}
          <a href="https://www.zenhub.com/book/github-project-management">
            <mark>ZenHub's Project Management Book</mark>
          </a>{" "}
          and from experience with past internships, I advocated strongly for
          defining Acceptance Criteria that included mandatory code reviews. I
          also made sure we had story templates automatically set up when
          creating new issues so that we could keep a consistent and organized
          format across our project board.
        </p>
        <br />
        <h2>Final Thoughts</h2>
        <p>
          Throughout the process, I realized that my previous front end
          internship immensely helped me immensely in quickly understanding
          concepts around UI components and re-usability. It was an emotional
          moment for me due to the personal challenges I've faced since I began
          studying computer science. I truly enjoyed learning to use a new
          framework and working in a team to bring our ideas to life!
        </p>
        <p>
          As the rest of the project unfolded I was really proud of the
          technical contributions and conversations I was able to keep up, and I
          knew I was reaping the benefits of the 6 months I spent hustling and
          learning during my internship.
        </p>
        <p>
          The final capstone for this project is in late November, stay tuned!
        </p>
      </div>
    </ProjectPage>
  );
};

export default styled(Wisteria)`
  .screens {
    h3 {
      font-size: 1.5rem;
      margin-top: 4rem;
    }
    img {
      height: 400px;
    }
  }
`;
