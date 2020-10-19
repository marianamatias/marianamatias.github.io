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
          During the Educational Technology course at Georgia Tech, I and two
          other students formed a team out of a common passion: our love for
          languages. Each one of us spoke 1-2 languages in addition to English,
          and none the same. At first, we had difficulties agreeing on a
          specific problem within this space but our excitement to work with
          language learning kept us motivated!
        </p>
        <h2>The Challenge</h2>
        <p>
          As in a typical double-diamond approach, we first had to explore the
          problem space in order to accurately define our problem. Our biggest
          challenge began even before this though because we needed to reduce
          the problem space itself. The field of language learning is vast and
          we had difficulties choosing a sub-field as a team. After many
          discussions and guidance from our professor, we finally found our
          topic!
        </p>
        <p>
          We were introduced to the novel practice of{" "}
          <strong>translanguaging</strong> (when multilingual speakers employ
          the use of their languages when communicating). This is a very natural
          and common behavior for multilingual speakers (think Spanglish,
          Franglais, Portuñol). In the context of education, translanguaging is
          being researched and used as a relatively novel tool to achieve an
          integrated and enriched classroom experience.
        </p>
        <p>
          After this realization, I proposed another layer of specificity to the
          project.{" "}
          <strong>
            I suggested that we apply translanguaging to computer science
            education for two reasons
          </strong>
          :
        </p>
        <ol>
          <li>
            I knew we had to narrow down our problem space even further so that
            we could have a more precise vision of our end users and their
            needs. Since translingualism is a tool to teach any subject, I
            believed that we could apply it to an area that all of us were
            experienced with: Computer Science.
          </li>
          <li>
            Since I started learning to code, I was always intrigued by the
            specific word choices built into programming languages. I speculated
            that native English speakers have a clear advantage when learning
            programming because the languages are essentially written in English
            (keywords like If else, print, return, string, while). I wanted to
            test my hypothesis and understand if this caused any significant
            barrier when learning to program.
          </li>
        </ol>

        <p>Once we had a starting point, we began the research phase!</p>
        <h2>Research</h2>
        <p>
          During this first half of the double-diamond approach, we began to
          research our topic in an attempt to converge on a clear definition of
          a problem/opportunity.
        </p>
        <h3>Academic Research</h3>
        <p>
          To learn more about translanguaging, we each read countless academic
          articles and teaching guidelines to find information on multilingual
          teaching methodologies. We found the following:
        </p>

        <ul>
          <li>
            Translanguaging allows multilingual speakers to utilize their full
            repertoire of languages to communicate more effectively.
          </li>
          <li>
            When successfully employed in a pedagogical setting, translanguaging
            capitalizes on a group's multilingual ability as a whole to empower
            students to communicate more fully with each other.
          </li>
          <li>
            Translanguaging promotes an inclusive pedagogy, which is shown to
            increase classroom participation. As a member of different minority
            groups, this advantage appealed to me personally.
          </li>
        </ul>

        <h3>User Research</h3>
        <p>
          To learn more about the current state of CS education, we chose a
          learning context that was very close to us: the introductory Computer
          Science Course at Georgia Tech (CS1301). We visited a recitation class
          to observe the instruction, survey the students, and generally
          understand how language shows up during learning. The visit yielded
          very interesting observations:
        </p>
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
        <img
          className="img-notes"
          src={require("../../assets/images/PopLang/poplang-student-notes.jpeg")}
          alt=""
        />
        <img
          src={require("../../assets/images/PopLang/poplang-survey.png")}
          alt=""
        />

        <p>
          With this information, we wanted to see how to incorporate different
          languages into the way CS was being taught and facilitate the natural
          tendency of multilingual students to use all their languages when
          learning.
        </p>

        <h2>Ideation</h2>
        <p>
          As a team, we focused on sharing our ideas and analyzing them against
          the research and problem to justify each feature of our proposed
          design. After two brainstorming sessions, we came up with the idea to
          create a web-based pair-programming tool that has language-support
          features built into the modules. Here are some example features we
          came up with in our{" "}
          <a href="https://www.figma.com/file/LyIqgddeabt8ACcC3SzXid/PopLang?node-id=0%3A1">
            <mark>design</mark>
          </a>
          :
        </p>

        <h3>Live Transcript</h3>
        <p>
          To pair students from different backgrounds and still encourage
          translingualism, the platform will have an option for a live
          transcript of the conversation between students. This will allow for
          cross-cultural communication because of integrated language support.
        </p>
        <img
          src={require("../../assets/images/PopLang/poplang-transcript.png")}
          alt=""
        />
        <h3>Suggested Resources</h3>
        <p>
          According to my research, I found that supplemental content in both
          native and target languages helped reinforce the material by
          portraying it through different perspectives. After all, language is
          just the tangible representation of the ideas and thoughts in our
          heads. As we grow up learning one or more languages, the
          particularities of those languages shape our mental representations of
          the world.
        </p>
        <p>
          The supplemental resources are meant to help students find useful
          sources that can frame the content in a different light. The idea was
          for students to drive the suggested resources section by constantly
          contributing to it and empowering each other in the learning process.
        </p>
        <img
          src={require("../../assets/images/PopLang/poplang-resources.png")}
          alt=""
        />

        <p>
          After feedback from our professor and scaling our ideas down based on
          time restrictions, we began developing!
        </p>

        <h2>Prototype</h2>
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

        <h2>Testing and Lessons Learned</h2>
        <p>
          We tested our learning prototype with two pairs of students. In the
          first session, we paired students of similar backgrounds and in the
          second session, we paired students with different backgrounds. These
          were our main findings about language incorporation into coding
          practice:
        </p>
        <ol>
          <li>
            The classroom setting greatly affected students' attitudes towards
            using different languages to discuss content, as one student
            “personally because the test is in English, I take notes in English,
            communicate about code in English because that’s what I know we will
            be all tested on.”
          </li>
          <li>
            We found there was a disconnect between the students we thought we
            were contacting and the students we read about in the literature.
            When testing with our students, they told us that they were more
            comfortable discussing code and conversing in English with each
            other.
          </li>
        </ol>
        <p>
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
          observed students in lectures and recitation that spoke in another
          language and had difficulty asking the right questions in English.
          They also mentioned that groups of students that speak the same native
          language often discuss the concepts with each other in their native
          languages during recitation.
        </p>
        <p>
          I believe that our miscalculations came from two sources: our narrow
          set of subjects for user research and the time and situational
          constraints to test the prototype. If we were to have another
          iteration of testing, I would review the problem definition by
          interviewing the students mentioned above.
        </p>

        <h2>Final Presentation</h2>
        <p>
          <a href="https://www.youtube.com/watch?v=KQ0D13wMkHY&feature=youtu.be">
            <mark>Here is our final video presentation</mark>
          </a>{" "}
          explaining our research, our concept, and our test implementation.
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
