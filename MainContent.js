<div class="container">
    <main class="main-content">
        <section id="section1" class="section"> ... </section>
        <section id="section2" class="section"> ... </section>
        <section id="section3" class="section"> ... </section>
        <section id="section4" class="section"> ... </section>
    </main>
</div>
import React from 'react';
import Section from './Section'; // Import natin ang Section component

function MainContent() {
  return (
    <main className="main-content">
      <div className="container"> {/* Inner container for main content */}
        {/* Gumagamit tayo ng Section component dito, at ipinapasa ang mga props */}
        <Section id="section1" title="Welcome Section">
          <p>This is the main welcome section of the page. It introduces the user to the website's purpose.</p>
          <p>We aim to provide a clean and well-structured layout for easy understanding and implementation.</p>
        </Section>

        <Section id="section2" title="About Us">
          <p>In this section, you can learn more about who we are. We are passionate about creating efficient and elegant web solutions.</p>
        </Section>

        <Section id="section3" title="Our Services">
          <p>We offer a range of services including front-end development, UI/UX design, and web application creation.</p>
        </Section>

        <Section id="section4" title="Contact Us">
          <p>Feel free to reach out to us for any inquiries or project collaborations. Contact details can be provided upon request.</p>
        </Section>
      </div>
    </main>
  );
}

export default MainContent;