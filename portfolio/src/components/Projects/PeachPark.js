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
          In a team of 5 students, I worked to re-design the Atlanta parking
          experience while learning about the methods and theories behind
          Interaction Design. We developed a solution using the double-diamond
          approach, in which we first defined the problem and then developed a
          useful tool to answer the problem.
        </p>
        <img
          src={require("../../assets/images/Peach Park/doublediamond.png")}
          alt="double-diamond"
        />
        <h2>Opportunity</h2>
        <p>
          The parking process in Atlanta can be confusing and frustrating, and
          can even result in monetary fines if completed incorrectly. Our
          observations, interviews, and surveys on our stakeholders revealed the
          different pain points in the process:
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
            For the parking application, users disliked the hidden or unwanted
            service fees. Many also believed that downloading the app was not
            worth the effort compared to simply paying at a parking meter.
          </li>
        </ul>

        <h2>Defining the Problem</h2>
        <h3>Design Criteria</h3>
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
          <strong>Small Learning Curve:</strong>New users will easily and
          quickly learn how to park correctly with the new process.
        </p>
        <h2>Proposed Solution</h2>
        <h3>Automatic Sensor</h3>
        <p>
          We then had a brainstorming session to reach the peak of the second
          diamond and explore the solution space. We converged on an idea by
          analyzing our proposals based on our design criteria.
        </p>
        <p>
          Our solution attempts to streamline and standardize this process by
          converging all users into one system and allowing a seemingly
          contactless parking experience. The user will be able to park at a
          location of their choice and be notified when they are being charged,
          implemented by traffic camera technology that will scan license
          plates. This solution will require drivers to register their license
          plate number with the system when they register their car.
        </p>
        <p>
          In addition, this will also streamline the traffic authorities'
          responsibilities by allowing them to remotely check parking spaces in
          their territory and by notifying them when there is an issue reading a
          license plate number.
        </p>
        <img
          src={require("../../assets/images/Peach Park/camera-diagram.png")}
          alt="double-diamond"
        />
        <p>
          In the sketch above, we can see how the automatic sensor detects the
          license plate as the parking meter user is in the process of parking.
          While parking the car, a green light will appear to signal the
          successful detection of the license plate. If the license plate was
          not detected, a red light will appear. On the sketch, we can also see
          a sign which will give details to the parking meter user on how to
          park, the rate of parking, and how the automatic sensor works.
        </p>
        <img
          src={require("../../assets/images/Peach Park/park-diagram.png")}
          alt="double-diamond"
        />
        <p>
          In the figure above, we can see an example of the type of information
          that would be on the sign explaining the system to new users. It
          explains to users how to wait for the camera to read the license plate
          when parking and to wait for the green light to continue. It also
          explains that users will receive an email notification after parking.
        </p>
        <h2>Testing & Analysis</h2>
        <p>
          We analyzed the effectiveness of our idea with a focus group as well
          as a think aloud based on our stakeholder type.
        </p>
        <h3>Vehicle Owners - Focus Group</h3>
        <p>
          We decided to do a focus group since our{" "}
          <a href="https://youtu.be/PB70AgE5hGk">
            <mark>video prototype</mark>
          </a>{" "}
          was a more holistic way of communicating to the stakeholder what our
          solution's process was going to be like from their perspective and
          have a conversation about their impressions.
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
          For this stakeholder category, we conducted a think aloud with a paper
          prototype which would allow the user to interact with our idea to
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

export default styled(PeachPark)``;
