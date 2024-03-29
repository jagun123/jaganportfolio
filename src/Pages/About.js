import React from "react";
import Work from "../Components/Work";
import { workDetails, eduDetails } from "../Details";

function About() {
  const about = [
    {
      items: [
        "I am a web developer, working in both backend and frontend programming. Excited to improve my skills and learn new technologies. I'm open to learning and working with any web technology and currently doing freelance gigs.",
        "I like to code from scratch and love the idea of bringing thoughts to life. Connect with me to get your project done.",
        "I value minimalistic designs, thoughtful branding of the content, and customer-relatable experience. Let's discover together how we can make your project convert better!",
        "I enjoy creating or redesigning a distinct identity for a product or service, getting more traffic from search engines and social platforms."
      ]
    }
  ];

  about.forEach(section => {
    section.items = section.items.map(item => item.split('\n'));
  });

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        {about.map(section => (
          <div key={section.items[0]}>
            {section.items.map((item, index) => (
              <p className="p-1 text-gray-500" key={index}>{item}</p>
            ))}
          </div>
        ))}
      </section>
      {/* <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {workDetails.map(({ Position, Company, Location, Type, Duration }, index) => (
          <Work
            key={index}
            position={Position}
            company={Company}
            location={Location}
            type={Type}
            duration={Duration}
          />
        ))}
      </section> */}
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {eduDetails.map(({ Position, Company, Location, Type, Duration }, index) => (
          <Work
            key={index}
            position={Position}
            company={Company}
            location={Location}
            type={Type}
            duration={Duration}
          />
        ))}
      </section>
    </main>
  );
}

export default About;
