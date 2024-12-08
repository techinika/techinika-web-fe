import Head from "next/head";
import Nav from "../components/HeadFoot/Nav";
import Footer from "../components/HeadFoot/Footer";
import { Quote } from "../components/HeadFoot/Quote";
import Partners from "../components/Partners";
import Link from "next/link";

export default function Story() {
  const storyStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: "https://techinika.co.rw/story",
    name: "Our Story - Techinika",
    description:
      "Learn about Techinika’s journey, mission, and dedication to enhancing education through digital solutions.",
  };
  const team = [
    {
      id: 1,
      name: "Achille Songa",
      position: "Founder & MD",
      picture:
        "https://media.licdn.com/dms/image/v2/D4D03AQF8PwUtUos9fA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1691161450241?e=1738800000&v=beta&t=BK-4GISCw_sazWIBD_gTF5ZAiDhmXuJF7h0OH-GRdtg",
      linkedin: "https://linkedin.com/in/achillesonga",
    },
    {
      id: 2,
      name: "Nikwigize Fidele",
      position: "Operations Lead",
      picture:
        "https://media.licdn.com/dms/image/v2/D4D03AQEMgFy0DrLJkQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726314977726?e=1738800000&v=beta&t=UTszUcM_iKSUBujGyoU7ZYc6APXMQCr0qvDeeLUlRyU",
      linkedin: "https://www.linkedin.com/in/fidele-nikwigize-37b1841a2/",
    },
    {
      id: 3,
      name: "Robert Niyitanga",
      position: "Tech Lead & Frontend SE",
      picture:
        "https://media.licdn.com/dms/image/v2/D4D03AQHfxpdegLPORg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708679141577?e=1738800000&v=beta&t=AtyyFcfjkZERvtVUS-Kl4nMKguODZgkWTtm9WTpXiug",
      linkedin: "https://www.linkedin.com/in/robert-niyitanga/",
    },
    {
      id: 4,
      name: "Sam Mugisha",
      position: "Marketing Lead",
      picture:
        "https://media.licdn.com/dms/image/v2/D4D03AQESKxYz7uhmBg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714065994567?e=1738800000&v=beta&t=QkgDEtt3jEb5_65GETi3wrcNXqW_t-NDtU_cMHMvSf0",
      linkedin: "https://www.linkedin.com/in/sam-mugisha-42a351284/",
    },
    {
      id: 5,
      name: "Umbereye Carine",
      position: "Frontend SE",
      picture:
        "https://media.licdn.com/dms/image/v2/D4D03AQHG2kYMojS-kQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712326132881?e=1738800000&v=beta&t=NNBrbzOpQy7AVAtC2Jvdd2ODTTyD4Ah2dYMR3vGOL0U",
      linkedin: "https://www.linkedin.com/in/umbereye-carine-a08704268/",
    },
    {
      id: 6,
      name: "Abewe Vanessa",
      position: "Backend SE",
      picture:
        "https://media.licdn.com/dms/image/v2/D4D03AQHBndI5AmtgKA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1677429721704?e=1738800000&v=beta&t=PfiyxdUUA3sVn70dOt5jIci1g1o9bSEY5xB1IKa00Bg",
      linkedin: "https://www.linkedin.com/in/vanessa-abewe-bit3ga/",
    },
    {
      id: 7,
      name: "Pascaline Uwingabire",
      position: "Backend SE",
      picture:
        "https://media.licdn.com/dms/image/v2/C5603AQH97i6uixdHBQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1658332142578?e=1738800000&v=beta&t=s8wjYljxxUk9MpCOB6Q2PVb01tbsc_ZCCQF59wELLtU",
      linkedin: "https://www.linkedin.com/in/pascaline-uwingabire-49200722b/",
    },
    {
      id: 8,
      name: "Joyce Tumukunde",
      position: "UI/UX Designer",
      picture:
        "https://media.licdn.com/dms/image/v2/D4D03AQE5nrrOtfo16A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671704390118?e=1738800000&v=beta&t=Eijj7sMOcul9mBNzr4ESKxl7iCceuLSnz1NYebjHknw",
      linkedin: "https://www.linkedin.com/in/joyce-tumukunde-70598425a/",
    },
    {
      id: 9,
      name: "Abiturije Carine",
      position: "Software Engineer Intern",
      picture: "/carine.jpg",
      linkedin: "https://www.linkedin.com/in/abiturije-caline-051b76263/",
    },
  ];

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="what is techinika?, how did techinika exist?, who founded techinika?, the best edtech company in rwanda?, learn about techinika, a company from rwanda, education company in rwanda, the best tech company in rwanda"
        />
        <meta name="author" content="Techinika Developers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Our Story - Techinika</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta
          name="description"
          content="Techinika is an edtech company in Rwanda that provides solutions for training institutions, schools, international organizations and the government to nurture the technologists in rwanda and africa."
        ></meta>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(storyStructuredData),
          }}
        />
      </Head>
      <div className="relative h-screen">
        <div className="font-main">
          <Nav />
        </div>
        <div className="bg-white font-main mx-auto mt-24">
          <div className="bg-gray-50">
            <Quote
              quote={`...we are constantly running towards building people who use digital tools, and build digital tools to solve problems.`}
              speaker={"Cishahayo Songa Achille, The Founder"}
            />
          </div>
          <div className="md:w-[60%] lg:w-[60%] sm:w-[90%] mx-auto text-xl py-4 text-justify p-2">
            <p className="italic">Hi, there!</p>
            <p>
              Thank you for visiting our website. We are <b>*Techinika*</b>, and
              our name is a combination of two words, Technology and Gutekinika{" "}
              <i>(used to mean finding solutions where they are not)</i>. Our
              IKIGAI is rooted in helping Africans acquire and use technology
              skills, and help other education businesses monetize and digitize
              their offers to democratize access to education.
            </p>

            <br></br>
            <h2 className="card-title">The Beginning,</h2>
            <p>{`Since the beginning of our quest in 2020, our core belief is that everyone deserves access to modern education that unlocks new opportunities for them. We started with Nigute (How) as our name, to help people understand how things work, and how they can do it themselves.`}</p>
            <p>{`We started with Rwandans in mind, hoping to help every Rwandan play their role in building a knowledge based economy; however, it has become more evident that the problem is not only in Rwanda, and we can do more than just providing education. We can unlock new opportunities for them, and help them unveil hidden potentials.`}</p>
            <div className="p-4 text-center my-3 text-mainBlue text-2xl font-bold border rounded-lg border-mainBlue">
              <h2 className="italic">
                {`Unlock new opportunities and potentials with us.`}
              </h2>
            </div>
            <p>{`In 2021, what started as a quest to answer the simple question like "How", became *Techinika*, a platform to help them learn and use what they learn to solve problems.`}</p>
            <br></br>
            <p>{`Hundreds of people have learned from us, We have built a community of hundreds of people, and tens of people have unlocked new opportunities with us.`}</p>
            <br></br>
            <h2 className="card-title">Meet our team,</h2>
            <br />
            {team.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {team.map((member) => (
                  <div
                    key={member.id}
                    className="card bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
                  >
                    {/* Image Section */}
                    <div className="image-container w-full rounded-lg">
                      {member.picture ? (
                        <img
                          src={member.picture}
                          alt={`${member.name}`}
                          className="w-full md:h-40 lg:h-40 sm:h-64 xs:h-64 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500">
                          No Image Available
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-2 text-center">
                      <h3 className="text-lg font-bold text-mainBlue">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 text-xs">{member.position}</p>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline inline-flex items-center mt-4"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22.23 0H1.77C.792 0 0 .775 0 1.723v20.554C0 23.225.792 24 1.77 24h20.46c.978 0 1.77-.775 1.77-1.723V1.723C24 .775 23.208 0 22.23 0zM7.128 20.451H3.556V9.035h3.572v11.416zM5.34 7.51A2.072 2.072 0 013.275 5.45 2.067 2.067 0 015.34 3.39a2.072 2.072 0 012.066 2.06c0 1.135-.926 2.06-2.066 2.06zm15.11 12.94h-3.572v-5.847c0-1.394-.028-3.186-1.942-3.186-1.946 0-2.244 1.518-2.244 3.084v5.95h-3.572V9.035h3.429v1.558h.05c.478-.902 1.642-1.852 3.378-1.852 3.611 0 4.281 2.378 4.281 5.465v6.245z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>{`No team members to display yet!`}</p>
            )}
            <br />

            <p>{`We work with the best to ensure we deliver the best experience to people who trust us. And together, we are shaping the future of technology in Rwanda and abroad.`}</p>

            <br></br>
            <h2 className="card-title">Our story is being shared by others,</h2>
            <p>
              Some people have recognized that{" "}
              <b>
                *we are constantly running towards building people who use
                digital tools, and build digital tools to solve problems,*
              </b>{" "}
              and they help us by sharing our story in the media and in other
              publications.
            </p>
            <p className="italic font-bold text-mainBlue">
              Here are some of them:
            </p>
            <ul className="list list-decimal">
              <li className="flex items-center gap-2 list-item">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/pulse/hanga-weekly-roundup-ep-25-hanga-pitchfest-3jxke/"
                  className="text-mainBlue hover:text-main underline"
                >
                  Hanga Weekly Roundup EP 25: Features Techinika
                </a>
              </li>
              <li className="flex items-center gap-2 list-item">
                <a
                  target="_blank"
                  href="https://meamarkets.digital/winners/techinika-limited/"
                  className="text-mainBlue hover:text-main underline"
                >
                  Techinika Limited (2024 Winner: African Excellence Awards)
                </a>
              </li>
              <li className="flex items-center gap-2 list-item">
                <a
                  target="_blank"
                  href="https://www.wearetech.africa/en/fils-uk/tech-stars/rwanda-cishahayo-songa-achille-democrtizes-digital-skills-through-techinika"
                  className="text-mainBlue hover:text-main underline"
                >
                  Rwanda: Cishahayo Songa Achille Democrtizes Digital Skills
                  Through Techinika
                </a>
              </li>
              <li className="flex items-center gap-2 list-item">
                <a
                  target="_blank"
                  href="https://www.ktpress.rw/2023/06/edtech-partners-show-need-for-accelerated-blended-learning-models/"
                  className="text-mainBlue hover:text-main underline"
                >
                  EDTech Partners Show Need for Accelerated Blended Learning
                  Models (Techinika Featured)
                </a>
              </li>
              <li className="flex items-center gap-2 list-item">
                <a
                  target="_blank"
                  href="https://youtu.be/9Kpaohzu_-I"
                  className="text-mainBlue hover:text-main underline"
                >
                  From being an MTN agent to becoming a DG of an EdTech company
                  #Technika | Songa Achille's journey
                </a>
              </li>
              <li className="flex items-center gap-2 list-item">
                <a
                  target="_blank"
                  href="https://www.225tech.info/le-rwandais-cishahayo-songa-achille-fournit-aux-particuliers-et-aux-entreprises-des-competences-numeriques-modernes/"
                  className="text-mainBlue hover:text-main underline"
                >
                  Le Rwandais Cishahayo Songa Achille fournit aux particuliers
                  et aux entreprises des compétences numériques modernes
                </a>
              </li>
            </ul>
            <br></br>
            <h2 className="card-title">Our ask from you,</h2>
            <p>{`You have now read our story, kindly invite people you know who are looking to start careers in tech, let's connect with them and help them. If you are an investor, we invite you to invest in us, let's talk about it. If you have a network, kindly spread the word to them.`}</p>
            <br></br>
            <p>
              We are thankful to you, our partners, our clients, and advisors
              who helped us get where we are today. Our work is building
              hundreds of generations to come, and we welcome new ideas and
              feedback from you! You can reach out to us on our email{" "}
              <b>
                <Link href={"mailto:info@techinika.com"} className="underline">
                  info@techinika.com
                </Link>
              </b>{" "}
              or use our{" "}
              <Link href={"/request"} className="underline">
                contact page
              </Link>
              .
            </p>
            <br></br>
            <p>Best Regards,</p>
            <p className="italic">Cishahayo Songa Achille, The Founder</p>
          </div>
          <Partners />
          <Footer />
        </div>
      </div>
    </>
  );
}
