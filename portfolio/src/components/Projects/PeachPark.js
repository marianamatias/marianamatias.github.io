import React from "react";
import styled from "styled-components";
import ProjectPage from "../Pages/ProjectPage";
import ProjectHeader from "./ProjectHeader";

const PeachPark = ({ className, match }) => {
  return (
    <ProjectPage>
      <div className={className}>
        <ProjectHeader
          title="PeachPark"
          //   title={match.params.projectId}
          location="User Interface Design"
          dates="Sep 2018 - Dec 2018"
          video="https://youtu.be/PB70AgE5hGk"
          conceptTags={[
            {
              text: "Principles of Interaction Design",
              type: "concept",
            },
            {
              text: "UX Research",
              type: "concept",
            },
            {
              text: "Design Thinking",
              type: "concept",
            },
          ]}
        />
        <h2>Background</h2>
        <p>
          With a team of 4 other students, I worked to re-design the Atlanta
          parking experience while learning all about user research, design
          thinking, and UI/UX design. We arrived at our final solution through
          the double-diamond approach by which we first defined the problem and
          then developed a useful tool to answer the problem.
        </p>
        <img
          src={require("../../assets/images/Peach Park/doublediamond.png")}
          alt="double-diamond"
        />
        <h2>The Challenge</h2>
        <p>
          The parking process in Atlanta can be confusing and frustrating, and
          can even result in monetary fines if completed incorrectly. Many of us
          on the team had experienced unpleasant experiences when parking in
          Midtown. We knew there was an opportunity to improve the process.
        </p>
        <h2>User Research</h2>
        <p>
          First, we came up with temporary stakeholder categories to guide our
          user research (and iterated over them as the project developed
          further). Our initial stakeholders were: parking meter users, parking
          app users, and parking authorities.
        </p>
        <p>
          Our observations, interviews, and surveys of our defined stakeholders
          revealed the different pain points in the process:
        </p>
        <ul>
          <li>
            When using a physical parking meter, users must make many trips
            between the car and the meter to input the information required such
            as parking space number and license plate number. And finally, they
            must place the valid parking receipt on the dashboard. These steps
            unnecessarily prolonged the parking payment process.
          </li>
          <li>
            The majority of parking meter users were generally confused about
            the process - citing that the steps to pay for parking were unclear
            and that the meter was physically difficult to use.
          </li>
          <li>
            For the parking application, users disliked hidden or unwanted
            service fees. Many also believed that downloading the app was not
            worth the effort compared to simply paying at a parking meter.
          </li>
        </ul>
        <h3>Analyzing the data</h3>
        <p>
          We used an <strong>affinity diagram</strong> for quantitative analysis
          of the data we collected. Three main themes emerged: Expertise,
          Application Drawbacks, and Difficulty.
        </p>
        <img
          src={require("../../assets/images/Peach Park/affinity.JPG")}
          alt=""
        />
        <p>
          <strong>Expertise</strong> - A subset of users were very familiar with
          the use of a physical parking meter. They knew how long to park, they
          knew to take their receipt of payment to the car's dashboard, and they
          knew how to pay in a quick manner. These users knew to park close to a
          parking meter and had their license plate already memorized. In
          addition, they usually take a relatively small amount of completing
          the parking transaction. The parking process for these people is
          seamless.
        </p>
        <p>
          <strong>Difficulty</strong> - The majority of users were generally
          confused about the process for parking meters, citing that the steps
          to pay for parking were unclear and that the meter was physically
          difficult to use. Most users did not automatically know at least one
          of three key pieces of information needed to park their vehicles:
          parking space number, license plate number, amount of time desired to
          park. Users were forced to return to their parking spot for this
          information, and further prolonged the parking payment process. This,
          combined with difficulty with the physical interface, resulted in
          general frustration and led many people to ask for help.
        </p>
        <p>
          <strong>App Drawbacks</strong> - Many parkers cited several drawbacks
          to using the app such as added fees and wasted storage on phones. Many
          people who do not park frequently believe that downloading the app is
          not worth the effort compared to simply paying at a parking meter.
        </p>
        <h2>Design Criteria</h2>
        <p>
          <strong>Timeliness:</strong>The new solution will allow users to
          minimize the time spent on a parking transaction by removing
          distractions and interruptions to the process such as checking a
          license plate number or misunderstanding the steps to pay for parking.
        </p>
        <p>
          <strong>Efficient Parking Surveillance:</strong>The new solution will
          simplify and speed up the parking verification process for parking
          authorities. Authorities will not have to spend time walking to every
          occupied spot to charge for unpaid parking.
        </p>
        <p>
          <strong>Clear Process:</strong>The new parking payment solution will
          allow users to verify the correctness of their parking completely from
          a mobile device.
        </p>
        <p>
          <strong>Small Learning Curve:</strong> New users will easily and
          quickly learn how to park correctly with the new process.
        </p>
        <h2>Designing</h2>
        <h3>Brainstorming</h3>
        <p>
          Now in the second phase of the double diamond, we began the divergent
          process of ideation. Following tips from{" "}
          <a href="https://www.ideou.com/pages/brainstorming-rules-and-techniques">
            <mark>IDEO's brainstorming process</mark>
          </a>
          , we brainstormed over 100 ideas. We converged on 3 possible solutions
          by grouping similar ideas and analyzing the groups based on our design
          criteria. They are represented by the following{" "}
          <strong>static sketches</strong> and
          <strong>storyboards</strong>.
        </p>
        <p>
          <strong>Prepaid Card</strong> - Like in other countries, we proposed a
          single card that could combine different sources of transportation in
          Atlanta into one monetary system.
        </p>
        <div className="flex">
          <img
            src={require("../../assets/images/Peach Park/Card1.png")}
            alt=""
          />
          <img
            src={require("../../assets/images/Peach Park/Card2.png")}
            alt=""
          />
        </div>
        <p>
          <strong>Synchronized System</strong> - Combining the app and the
          parking meter into one system. Users can use the app or mobile website
          on their phones, or they can use a digital parking meter that displays
          the same website.
        </p>
        <div className="flex">
          <img
            src={require("../../assets/images/Peach Park/Sync1.png")}
            alt=""
          />
          <img
            src={require("../../assets/images/Peach Park/Sync2.png")}
            alt=""
          />
        </div>
        <p>
          <strong>Automatic Sensor</strong> - Parking is done through a
          frictionless system using cameras to scan license plates and charge
          people based on the detected time the car is parked.
        </p>
        <div className="flex">
          <img
            src={require("../../assets/images/Peach Park/Sensor1.png")}
            alt=""
          />
          <img
            src={require("../../assets/images/Peach Park/Sensor2.png")}
            alt=""
          />
        </div>
        <h2>Solution</h2>
        <p>
          We presented our proposals to the other teams in our class as well as
          the instructors. After feedback on the ideas, we decided to choose the
          Automatic Sensor with modifications. The solution combines attempts to
          streamline and standardize the parking process by converging all users
          into one system and allowing a seemingly <strong>frictionless</strong>{" "}
          parking experience. The user will be able to park at a location of
          their choice and be notified when they are being charged, implemented
          by traffic camera technology that will scan license plates. This
          solution will require drivers to register their license plate with the
          system when they register their car or first park.
        </p>
        <p>
          In addition, this will also streamline the traffic authorities'
          responsibilities by allowing them to remotely check parking spaces in
          their territory and by notifying them when there is an issue reading a
          license plate number.
        </p>
        <img
          src={require("../../assets/images/Peach Park/park-diagram.png")}
          alt=""
        />
        <p>
          In the sketch above, we can see how the automatic sensor detects the
          license plate as the parking meter user is in the process of parking.
          While parking the car, a green light will appear to signal the
          successful detection of the license plate. If the license plate was
          not detected, a red light will appear.
        </p>
        <p>
          We made a <strong>video prototype</strong> to explain our idea and its
          benefits to stakeholders.
        </p>
        <div className="video">
          <iframe
            title="Video Prototype"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PB70AgE5hGk"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <h2>Testing</h2>
        <p>
          We analyzed the effectiveness of our idea with a focus group as well
          as a think-aloud based on our stakeholder type.
        </p>
        <h3>Vehicle Owners - Focus Group</h3>
        <p>
          We decided to do a focus group since our video prototype was a more
          holistic way of communicating to the stakeholder what our solution's
          process was going to be like from their perspective and have a
          conversation about their impressions.
        </p>
        <p>
          From an analysis of our focus group, there are two main changes that
          we would implement to our current solution. The first concerns the
          signage explaining the steps to parking with the new system. Many
          participants brought up concerns with this part of a new user
          experience, such as making sure that drivers notice the sign and
          understand them.
        </p>
        <p>
          According to feedback that they provided, we will structure our sign
          like a vertical triangle (the same format used in current parking
          hours and rates signs), and we will use bright and different colors
          than normal (such as blue or yellow) to make the sign pop out from the
          typical street scene.
        </p>
        <h3>Parking Authority - Think Aloud</h3>
        <p>
          For this stakeholder category, we conducted a think-aloud with a paper
          prototype that would allow the user to interact with our idea to
          complete the benchmark tasks we were interested in evaluating.
        </p>
        <p>
          Overall, we found that the officer hesitated before accomplishing a
          task, which was attributed to the overwhelming amount of information
          available on each screen. Beyond that, we found the officer found the
          flow of screens to be easy to navigate. Officer Bennett’s final
          comments suggested that he found our application straightforward user
          experience.
        </p>
      </div>
    </ProjectPage>
  );
};

export default styled(PeachPark)`
  .video {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;

    iframe {
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  }

  .flex {
    img {
      border: 1px solid #717171;
    }
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 2rem;
    @media screen and (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  }
`;
