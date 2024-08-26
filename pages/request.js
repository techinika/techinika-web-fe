import Head from "next/head";
import Nav from "../components/HeadFoot/Nav";
import Footer from "../components/HeadFoot/Footer";
import { Quote } from "../components/HeadFoot/Quote";
import Partners from "../components/Partners";
import { useEffect, useState } from "react";

function generateEmailHTML(data) {
  return `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
            }
            .container {
              width: 80%;
              margin: auto;
            }
            .header {
              background-color: #17327b;
              color: white;
              padding: 10px 0;
              text-align: center;
            }
            .content {
              padding: 20px;
              background-color: #f9f9f9;
              border: 1px solid #ddd;
            }
            .content h2 {
              color: #333;
            }
            .content p {
              margin: 10px 0;
            }
            .content ul {
              list-style-type: none;
              padding: 0;
            }
            .content ul li {
              background: #e2e2e2;
              margin: 5px 0;
              padding: 10px;
              border-radius: 5px;
            }
            .footer {
              margin-top: 20px;
              text-align: center;
              color: #777;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Service Request Details</h1>
            </div>
            <div class="content">
              <h2>Contact Information</h2>
              <p><strong>Contact:</strong> ${data.contact}</p>
              <p><strong>Name:</strong> ${data.name}</p>
              <h2>Services Required</h2>
              <ul>
                ${data.services
                  .map((service) => `<li>${service}</li>`)
                  .join("")}
              </ul>
              <h2>Need</h2>
              <p>${data.need}</p>
              <h2>Goals</h2>
              <ul>
                ${data.goals.map((goal) => `<li>${goal}</li>`).join("")}
              </ul>
              ${
                data.otherGoal
                  ? `<p><strong>Other Goals:</strong> ${data.otherGoal}</p>`
                  : ""
              }
              <h2>How You Found Us</h2>
              <ul>
                ${data.source.map((src) => `<li>${src}</li>`).join("")}
              </ul>
              <h2>Message</h2>
              <p>${data.message}</p>
            </div>
            <div class="footer">
              <p>Thank you for your request. We will get back to you soon!</p>
            </div>
          </div>
        </body>
      </html>
    `;
}

export default function Request() {
  const initialData = {
    contact: "",
    name: "",
    services: [],
    need: "",
    goals: [],
    otherGoal: "",
    source: [],
    message: "",
  };
  const [contactMethod, setContactMethod] = useState("Email");
  const [data, setData] = useState(initialData);
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => {
        setFeedback("");
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, [feedback]);

  const services = [
    {
      id: 1,
      title: "Training",
      description:
        "This includes learning on our platform, and enrolling in our training programs.",
    },
    {
      id: 2,
      title: "Working with the Community",
      description:
        "A community of tech enthusiasts, who help each other grow and collaborate on project.",
    },
    {
      id: 3,
      title: "Using HP Classeasy",
      description:
        "A super learning platform for schools to digitize all learning related operations.",
    },
    {
      id: 4,
      title: "Using LeadXera",
      description:
        "A super learning platform for government and private institutions to digitize all learning related operations.",
    },
    {
      id: 5,
      title: "Software / Web Development",
      description:
        "A super learning platform for government and private institutions to digitize all learning related operations.",
    },
    {
      id: 6,
      title: "Other",
      description:
        "A super learning platform for government and private institutions to digitize all learning related operations.",
    },
  ];

  const sources = [
    {
      id: 1,
      title: "Google Search",
      description:
        "This includes learning on our platform, and enrolling in our training programs.",
    },
    {
      id: 2,
      title: "LinkedIn",
      description:
        "A community of tech enthusiasts, who help each other grow and collaborate on project.",
    },
    {
      id: 3,
      title: "Instagram",
      description:
        "A super learning platform for schools to digitize all learning related operations.",
    },
    {
      id: 4,
      title: "YouTube",
      description:
        "A super learning platform for government and private institutions to digitize all learning related operations.",
    },
    {
      id: 5,
      title: "X (Twitter)",
      description:
        "A super learning platform for government and private institutions to digitize all learning related operations.",
    },
    {
      id: 6,
      title: "Our Website",
      description:
        "A super learning platform for government and private institutions to digitize all learning related operations.",
    },
    {
      id: 7,
      title: "A friend",
      description:
        "A super learning platform for government and private institutions to digitize all learning related operations.",
    },
    {
      id: 8,
      title: "Other",
      description:
        "A super learning platform for government and private institutions to digitize all learning related operations.",
    },
  ];

  const needs = [
    {
      id: 1,
      title: "Becoming a Client",
      description:
        "This includes learning on our platform, and enrolling in our training programs.",
    },
    {
      id: 2,
      title: "Becoming an Investor",
      description:
        "A community of tech enthusiasts, who help each other grow and collaborate on project.",
    },
    {
      id: 3,
      title: "Becoming a Partner",
      description:
        "A community of tech enthusiasts, who help each other grow and collaborate on project.",
    },
    {
      id: 4,
      title: "Becoming a Community Sponsor",
      description:
        "A community of tech enthusiasts, who help each other grow and collaborate on project.",
    },
    {
      id: 5,
      title: "Just learning about Techinika",
      description:
        "A super learning platform for schools to digitize all learning related operations.",
    },
    {
      id: 6,
      title: "Join The Community",
      description:
        "A super learning platform for government and private institutions to digitize all learning related operations.",
    },
    {
      id: 7,
      title: "Other",
      description:
        "A super learning platform for government and private institutions to digitize all learning related operations.",
    },
  ];

  const preferences = [
    {
      id: 1,
      title: "Email",
    },
    {
      id: 2,
      title: "Phone",
    },
    {
      id: 3,
      title: "Other",
    },
  ];

  const handleSendingData = async () => {
    setLoading(true);
    try {
      const emailBody = generateEmailHTML(data);
      if (data?.contact === "") {
        setFeedback("You have to provide at least one way to contact you!");
        return false;
      }
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: `New Website Request - ${data?.name}`,
          body: emailBody,
        }),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        setFeedback(
          "We have successfully received your request and we will reach out very soon! See you!"
        );
        setData(initialData);
      } else {
        console.error("Failed to send email");
        setFeedback("Failed to send your request! Try again!");
      }
    } catch (error) {
      console.log(error);
      setFeedback(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="learning management system, tech community in rwanda, rwanda technology community,hp classeasy,leadxera,classera,techinika at your service,request a service,web developers for your business website,"
        />
        <meta name="author" content="Techinika Developers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Techinika At Your Service - Request Quote or a Demo</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta
          name="description"
          content="Techinika is an edtech company in Rwanda that provides solutions for training institutions, schools, international organizations and the government to nurture the technologists in rwanda and africa."
        ></meta>
      </Head>
      <div className="relative h-screen">
        <div className="font-main">
          <Nav />
        </div>
        <div className="bg-white font-main mx-auto mt-24">
          <div className="bg-gray-50">
            <Quote
              quote={`By filling this form, you express your interest in working with us. We will reach out with more information!`}
              speaker={""}
            />
          </div>
          <div className="md:w-[60%] lg:w-[60%] sm:w-[90%] mx-auto text-xl py-4 p-2">
            <form className="rounded-lg p-5">
              <h2 className="font-bold text-lg italic py-4">
                Fill This Form, We will contact you as soon as possible:
              </h2>
              {feedback && (
                <p className="text-center bg-green-300 rounded-md p-4 text-mainBlue">
                  {feedback}
                </p>
              )}
              <div>
                <label className="text-mainBlue font-bold">
                  Your preferred contact method:
                </label>
                <select
                  className="flex flex-wrap gap-5 items-center w-full rounded-lg"
                  onChange={(e) => setContactMethod(e.target.value)}
                  disabled={loading}
                >
                  {preferences &&
                    preferences.map((item) => (
                      <option
                        value={item?.title}
                        key={item?.id}
                        className="p-3"
                        disabled={loading}
                      >
                        {item?.title}
                      </option>
                    ))}
                </select>
              </div>
              {contactMethod && (
                <div className="my-3">
                  <label className="text-mainBlue font-bold">
                    {`${contactMethod}:`}
                  </label>
                  <div className="flex flex-wrap gap-5 items-center">
                    <input
                      type="text"
                      disabled={loading}
                      value={data?.contact}
                      onChange={(e) => {
                        setData({ ...data, contact: e.target.value });
                      }}
                      placeholder={
                        contactMethod.includes("Email")
                          ? "Your Email: eg: example@email.com"
                          : contactMethod.includes("Phone")
                          ? "Provide your phone number with country code: eg: +25078..."
                          : "Other way to contact you"
                      }
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              )}
              <div className="my-3">
                <label className="text-mainBlue font-bold">You Name:</label>
                <div className="flex flex-wrap gap-5 items-center">
                  <input
                    disabled={loading}
                    type="text"
                    value={data?.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    placeholder={"Your Full Name"}
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              <div className="my-3">
                <label className="text-mainBlue font-bold">
                  Choose a Service you are interested in:
                </label>
                <div className="flex flex-wrap gap-5 items-center">
                  {services &&
                    services.map((item) => (
                      <div
                        key={item?.id}
                        // title={item?.description}
                        className="flex items-center gap-2"
                      >
                        <input
                          disabled={loading}
                          value={item?.title}
                          type="checkbox"
                          onChange={(e) => {
                            if (data.services.includes(e.target.value)) {
                              let newservices = data.services.filter(
                                (item) => item !== e.target.value
                              );
                              setData({
                                ...data,
                                services: newservices,
                              });
                            } else {
                              setData({
                                ...data,
                                services: [...data.services, e.target.value],
                              });
                            }
                          }}
                        />
                        <label>{item?.title}</label>
                      </div>
                    ))}
                </div>
              </div>
              <div className="my-3">
                <label className="text-mainBlue font-bold">
                  Tell us what you need in details:
                </label>
                <div className="flex flex-wrap gap-5 items-center">
                  <textarea
                    disabled={loading}
                    value={data?.need}
                    onChange={(e) => setData({ ...data, need: e.target.value })}
                    className="w-full rounded-lg"
                    rows={6}
                  ></textarea>
                </div>
              </div>
              <div className="my-3">
                <label className="text-mainBlue font-bold">
                  If our conversation is successful, what's your goal:
                </label>
                <div className="flex flex-wrap gap-5 items-center">
                  {needs &&
                    needs.map((item) => (
                      <div
                        key={item?.id}
                        title={item?.description}
                        className="flex items-center gap-2"
                      >
                        <input
                          disabled={loading}
                          value={item?.title}
                          onChange={(e) => {
                            if (data.goals.includes(e.target.value)) {
                              let newgoals = data.goals.filter(
                                (item) => item !== e.target.value
                              );
                              setData({
                                ...data,
                                goals: newgoals,
                              });
                            } else {
                              setData({
                                ...data,
                                goals: [...data.goals, e.target.value],
                              });
                            }
                          }}
                          type="checkbox"
                        />
                        <label>{item?.title}</label>
                      </div>
                    ))}
                </div>
              </div>
              <div className="my-3">
                <label className="text-mainBlue font-bold">
                  If you chose other goal, what is it?
                </label>
                <div className="flex flex-wrap gap-5 items-center">
                  <input
                    disabled={loading}
                    value={data?.otherGoal}
                    onChange={(e) =>
                      setData({ ...data, otherGoal: e.target.value })
                    }
                    type="text"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              <div className="my-3">
                <label className="text-mainBlue font-bold">
                  How did you Learn about us:
                </label>
                <div className="flex flex-wrap gap-5 items-center">
                  {sources &&
                    sources.map((item) => (
                      <div
                        key={item?.id}
                        title={item?.description}
                        className="flex items-center gap-2"
                      >
                        <input
                          disabled={loading}
                          value={item?.title}
                          onChange={(e) => {
                            if (data.source.includes(e.target.value)) {
                              let newsources = data.source.filter(
                                (item) => item !== e.target.value
                              );
                              setData({
                                ...data,
                                source: newsources,
                              });
                            } else {
                              setData({
                                ...data,
                                source: [...data.source, e.target.value],
                              });
                            }
                          }}
                          type="checkbox"
                        />
                        <label>{item?.title}</label>
                      </div>
                    ))}
                </div>
              </div>
              <div className="my-3">
                <label className="text-mainBlue font-bold">
                  Anything else we need to know?
                </label>
                <div className="flex flex-wrap gap-5 items-center">
                  <input
                    type="text"
                    disabled={loading}
                    value={data?.message}
                    onChange={(e) =>
                      setData({ ...data, message: e.target.value })
                    }
                    placeholder={"Any other message to us"}
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleSendingData();
                }}
                className="btn-main w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
          <Partners />
          <Footer />
        </div>
      </div>
    </>
  );
}
