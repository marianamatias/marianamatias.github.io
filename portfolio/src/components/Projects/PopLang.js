import React from "react";
import styled from "styled-components";
import ProjectPage from "../Pages/ProjectPage";
import ProjectHeader from "./ProjectHeader";

const PopLang = ({ className, match }) => {
  return (
    <ProjectPage>
      <div className={className}>
        <ProjectHeader
          title="PopLang"
          //   title={match.params.projectId}
          location="Educational Technology"
          dates="Sep 2019 - Dec 2019"
          repo="https://github.com/TonyKimisintheHouse/TransLang"
          video="https://www.youtube.com/watch?v=KQ0D13wMkHY&feature=youtu.be"
          design="https://www.figma.com/file/LyIqgddeabt8ACcC3SzXid/PopLang?node-id=0%3A1"
          toolTags={[
            {
              text: "React",
              type: "tech",
            },
            {
              text: "Figma",
              type: "tech",
            },
          ]}
          conceptTags={[
            {
              text: "Learner-centered design",
              type: "concept",
            },
            {
              text: "User Research",
              type: "concept",
            },
            {
              text: "Literature Review",
              type: "concept",
            },
          ]}
        />
        <h2>Background</h2>
        <p>
          This experience started with the Educational Technology course at
          Georgia Tech. My team's formation was different from the rest, since
          we didn't form around a specific project proposal but rather for a
          true passion for language learning. We were a unique group since each
          of us spoke 1-2 different languages other than English and none
          overlapped. While this was one of our greatest challenges to converge
          on a concept, it was also our greatest strength in terms of the
          freedom we had to identify for our problem space.
        </p>
        <br />
        <h2>Defining the problem</h2>
        <h3>Choosing a topic</h3>
        <p>
          We began by trying to define the problem we wanted to solve. After
          many team discussions, guidance from our professor, and restrictions
          on user testing, we finally found our topic! We wanted to work with
          the novel practice of translanguaging (when bilingual students use
          multiple languages to communicate freely).
        </p>
        <h3>Academic Research</h3>
        <p>
          We needed to learn more about our chosen topic, so we conducted a
          literature review of translanguaging, bilingual teaching
          methodologies, and computer science education, we were able to
          identify the benefits of translanguaging that we would focus on in our
          project. Specifically, we learned that translanguaging allows
          multilingual speakers to utilize their full repertoire of languages to
          communicate more effectively and, when successfully employed in a
          pedagogical setting, it capitalizes on a group's multilingual ability
          as a whole to empower students to communicate more fully with each
          other. It also promotes an inclusive pedagogy, which is shown to
          increase classroom participation which can be vital to minority groups
          in the classroom.
          <br />
          Moving forward, we chose to focus on translanguaging in Computer
          Science education, since we reached a consensus that this subject is
          inherently geared towards English-speaking learners, since the
          keywords in most programming languages are based on English and many
          tutorials are also in English.
        </p>
        <h3>User Research</h3>
        <p>
          We worked with Teaching Assistants and students in the introductory
          Computer Science Course at Georgia Tech (CS1301) to further understand
          how language can influence learning. Our initial survey yielded very
          interesting observations.
          <ul>
            <li>
              For many students, English is not the primary language they used
              when speaking with family or friends. There was a wide range of
              languages: Chinese, Creole, Gujarati, Hindi, Kiswahili, Pataw,
              Spanish, Tamil.
            </li>
            <li>
              Some students incorporate their native languages to their class
              notes and supplemental resources that they use to review the
              material.
            </li>
          </ul>
        </p>
        <img
          className="img-notes"
          src={require("../../assets/images/PopLang/poplang-student-notes.jpeg")}
          alt=""
        />
        <img
          src={require("../../assets/images/PopLang/poplang-survey.png")}
          alt=""
        />

        <p>We began brainstorming and ideating soon after these findings!</p>

        <h2>Ideation & Development</h2>
        <p>
          As a team we focused on sharing our ideas and analyzing them against
          the research and problem to justify each feature of our proposed
          design. Here are some example features we came up with in our{" "}
          <a href="https://www.figma.com/file/LyIqgddeabt8ACcC3SzXid/PopLang?node-id=0%3A1">
            <mark>design</mark>
          </a>
          :
        </p>

        <h3>Live Transcript</h3>
        <p>
          We wanted to apply translingualism between students of different
          backgrounds, so we thought of an online coding practice platform that
          pairs students and develops a transcript of their conversation. This
          will allow for cross-cultural communication because of integrated
          language support.
        </p>
        <img
          src={require("../../assets/images/PopLang/poplang-transcript.png")}
          alt=""
        />
        <h3>Suggested Resources</h3>
        <p>
          According to our research, we found that supplemental topics in both
          native and target languages helped reinforce the material by
          portraying it in different perspectives. This is why we created a
          resources section to which students can constantly contribute to
          empower each other in their learning process.
        </p>
        <img
          src={require("../../assets/images/PopLang/poplang-resources.png")}
          alt=""
        />

        <p>
          After feedback from our professor and scaling our ideas down based on
          time restrictions, we began developing!
        </p>
        <h3>MVP</h3>
        <div className="grid">
          <span>
            <p>
              1. Users can turn on collaboration mode and see each other working
              on the problem.
            </p>
            <img
              src={require("../../assets/images/PopLang/poplang-interaction.png")}
              alt=""
            />
          </span>
          <span>
            <p>
              2. Users can also turn on their microphones to add another layer
              of collaboration.
            </p>
            <img
              src={require("../../assets/images/PopLang/poplang-audio.png")}
              alt=""
            />
          </span>
          <span>
            <p>
              3. If they choose, users can enable live translating for their
              language preference.
            </p>
            <img
              src={require("../../assets/images/PopLang/poplang-recognizeaudio.gif")}
              alt=""
            />
          </span>
          <span>
            <p>
              4. This pair programming environment provides a platform for
              students to help each other.
            </p>
            <img
              src={require("../../assets/images/PopLang/poplang-demo.gif")}
              alt=""
            />
          </span>
        </div>

        <h2>Test Implementation and Lessons Learned</h2>
        <p>
          We tested our learning prototype with two pairs of students. In the
          first session, we paired students of similar backgrounds and in the
          second session we paired students with different backgrounds. These
          were our main findings about the language incorporation into coding
          practice:
        </p>
        <p>
          <ol>
            <li>
              The classroom setting greatly affected students' attitudes towards
              using different languages to discuss content, as one student
              “personally because the test is in English, I take notes in
              English, communicate about code in English because that’s what I
              know we will be all tested on.”
            </li>
            <li>
              We found there was a disconnect between the students we thought we
              were contacting and the students we read about in the literature.
              When testing with our students, they told us that they were more
              comfortable discussing code and conversing in English with each
              other.
            </li>
          </ol>
          One student stated that she felt her level of fluency in her stated
          second language was not sufficient to converse freely with the other
          student on the assignment. This is because she uses her native
          language in a family setting but has used English in the academic
          setting since primary school.
          <br />
          Another student said she has become very accustomed to speaking and
          working solely in English after her 5 years in the United States, to
          the point that she prefers to speak in English rather than her native
          Vietnamese
        </p>
        <p>
          Despite these results, our test students expressed to us that they
          observed students in lecture that spoke in another language and had
          difficulty asking the right questions in English, as well as groups of
          students that explain concepts to each other in their native
          languages. This is where we would start again if we had another
          iteration of testing.
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=KQ0D13wMkHY&feature=youtu.be">
            <mark>Here is our final video presentation</mark>
          </a>{" "}
          explaining our concept, our test implementation, and our research.
        </p>
      </div>
    </ProjectPage>
  );
};

export default styled(PopLang)`
  .img-notes {
    margin: auto;
    display: block;
    max-width: 500px !important;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 1rem;
  }

  @media screen and (max-width: 992px) {
    .grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
