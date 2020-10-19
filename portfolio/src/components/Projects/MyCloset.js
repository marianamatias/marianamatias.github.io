import React from "react";
import styled from "styled-components";
import ProjectPage from "../Pages/ProjectPage";
import ProjectHeader from "./ProjectHeader";

const MyCloset = ({ className, match }) => {
  return (
    <ProjectPage>
      <div className={className}>
        <ProjectHeader
          title="MyCloset"
          //   title={match.params.projectId}
          location="Computer Science Capstone"
          dates="Aug 2019 - Dec 2019"
          toolTags={[
            {
              text: "AdobeXD",
              type: "tech",
            },
          ]}
          conceptTags={[
            {
              text: "User Research",
              type: "concept",
            },
            {
              text: "Client Project",
              type: "concept",
            },
          ]}
        />

        <h2>Background</h2>
        <p>
          In the first semester of the CS capstone course, I worked with four
          other students to develop the concept and a design prototype for a
          client. MyCloset, the final idea, is a virtual wardrobe app that
          automatically scans users’ e-receipts by their email and populates
          their virtual wardrobes on the app. It is targeted towards millennials
          and teenagers, allowing them to create virtual outfits from the items
          they own.
        </p>

        <h2>The Challenge</h2>
        <p>
          We worked with a client that already had an idea for the direction of
          the application and had worked with previous groups to create a
          similar app but with grocery store items and populating their fridge
          contents. He wanted to translate the concept to fashion because he saw
          a gap in the market - there was a usage barrier to continuing use for
          fashion apps that required users to manually input their garments. As
          a capstone design team, we set out to develop his idea through our
          knowledge of UI/UX and software development.
        </p>

        <h2>Defining Users</h2>
        <p>
          As always, we first identified our target user to guide our research
          and create well defined user categories. We did this by brainstorming
          ideas of the context in which the app could be used and the types of
          actions someone would do with the app. Similar to an affinity diagram,
          we used post-it notes to display our ideas grouped relevant ideas
          together as we went. Below is a picture of the result:
        </p>
        <img src={require("../../assets/images/MyCloset/users.png")} alt="" />
        <p>
          We then did academic research and a competitive analysis to provide
          support for the app idea in the marketplace.
        </p>

        <h2>MVP Mapping</h2>
        <p>
          Once we found out what to build, we had to define the{" "}
          <strong>scope of the MVP</strong>
          for one semester of development. First, we wrote user stories for the
          app based on our users. Then, in a two-hour collaborative session, we
          worked to group our user stories into <strong>epics</strong> with the
          help of a whiteboard.
        </p>
        <img src={require("../../assets/images/MyCloset/MVP.jpg")} alt="" />

        <h2>Prototyping</h2>
        <p>
          Following{" "}
          <a href="https://www.youtube.com/watch?v=JMjozqJS44M">
            <mark>Google's tips for rapid prototyping</mark>
          </a>{" "}
          we created a paper prototype of our MVP. We tested this with people
          that fit into the user category definitions. As we translated the
          design into a digital form, we iterated over the feedback we got from
          the paper prototype. We then tested the digital prototype to identify
          usability gaps and opportunities.
        </p>

        <p>
          In both testing phases, each test session was led by two group
          members. Beforehand, we wrote out specific actions for the user to
          take. One person proctored the session by describing the use context
          and the target actions. Another person was dedicated to observing the
          users' reactions and process. Here are some of the recommendations we
          created for ourselves based on feedback for both prototypes:
        </p>

        <h3>Paper Prototype</h3>
        <ul>
          <li>
            More descriptive wording throughout the the app such as on the home
            page or input screens - Set Up Profile and Add Item.
          </li>
          <li>
            Many people tend to skip the set up profile section. Include a
            'skip' button and make less conspicuous than a normal button.
          </li>
          <li>
            Use appropriate input types for forms such as a dropdown for gender.
          </li>
          <li>
            Add more visual cues and buttons to better guide the user such as a
            plus button immediately to the right of a tag category on the 'Add
            Item' screen instead of a blank text box.
          </li>
        </ul>

        <h3>Digital Prototype</h3>
        <ul>
          <li>
            Better communicate what information a user MUST provide and what is
            optional when faced with input options. For example, adding red
            asterisks to required form fields and including descriptive text to
            show how many styled the user needs to input.
          </li>
          <li>
            Improve the order of categories when adding an item. Users gave us
            their personal order of importance: type, color, style, occasion,
            and season. One user said that the store and description labels for
            a new item was of low priority to her and that she would not often
            use them. Another user had a similar reaction to the store label and
            said that she would not describe her items with the 'store' category
            because brand or store she bought it from would not be relevant to
            her after the item was already in her closet.
          </li>
          <li>
            Adding feedback to the user to display the system status, such as
            using popups when a user successfully adds or deletes a garment.
          </li>
        </ul>

        <h2>Value Added</h2>
        <p>
          The time constraints of the class and other people's availability
          created a challenge to dedicate more time on the design. I personally
          felt a need to iterate over the design one more time before the final
          report to apply design heuristics and create better aesthetics for
          this app aimed at millenials. This included updating the color scheme,
          further developing features from our stretch goals, and incorporating
          user testing feedback.
        </p>

        <h3>Profile Set Up</h3>
        <img src={require("../../assets/images/MyCloset/profile.png")} alt="" />
        <br />
        <h3>Home</h3>
        <img src={require("../../assets/images/MyCloset/home.png")} alt="" />
        <br />
        <h3>Closet Search</h3>
        <img src={require("../../assets/images/MyCloset/closet.png")} alt="" />
        <br />
        <h3>Add an Item</h3>
        <img src={require("../../assets/images/MyCloset/add.png")} alt="" />
        <br />
        <h3>Edit an Item</h3>
        <img src={require("../../assets/images/MyCloset/edit.png")} alt="" />
        <br />
        <h3>Create an Outfit</h3>
        <img src={require("../../assets/images/MyCloset/create.png")} alt="" />
        <br />
        <p>
          I believe there are still many improvements to be made with the
          design. With more time, I would have added buttons to always allow the
          user to cancel the current action such as when creating an outfit.
          This provides for improved user control and freedom. I would also make
          better use of color throughout the app because it is meant to be an
          enjoyable experience and, when used with social media, should leave
          users wanting to spend more time using the app to create and share
          outfit ideas.
        </p>

        <h2>Reflection</h2>
        <p>
          Going into the latter half of the semester, we took a moment to
          identify areas of improvement on the way we were working together and
          with our client. We came up with the following tips for ourselves
          based on what we needed to improve and what was working well for us:
        </p>

        <h3>Teamwork</h3>
        <ul>
          <li>
            Have a final responsible person for each assignment to improve
            accountability
          </li>
          <li>In-person meetings are preferable to virtual meetings</li>
          <li>Ask for help if you need it</li>
        </ul>

        <h3>Client Management</h3>
        <ul>
          <li>
            Don't be afraid to pick a direction when given unspecific
            requirements
          </li>
          <li>
            Be flexible with changing client needs and your understanding of the
            requirements
          </li>
          <li>Balance client needs vs. project limitations</li>
        </ul>

        <h2>Sprint Planning</h2>
        <p>
          As the semester finished, we created an iteration plan for the agile
          development sprints in the following semester. This is based on our
          epics and stretch goals.
        </p>
        <img src={require("../../assets/images/MyCloset/sprints.jpg")} alt="" />

        <h2>Future Direction</h2>
        <p>
          The scope of the class was to define and plan features for a{" "}
          <strong>Minimum Viable Product</strong>. Stretch goals and future
          directions for the app build on the initial concept to create a more
          robust product. One idea is to integrate social media into the
          experience such as Pinterest and Instagram. On top of this, adding{" "}
          <strong>artificial intelligence</strong> outfit recommendations and
          garment advertisements based on local style, weather, personal style,
          and preferred brands will create a strong competitive edge for
          MyCloset.
        </p>
      </div>
    </ProjectPage>
  );
};

export default styled(MyCloset)``;
