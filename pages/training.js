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
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <h2>Training Needed</h2>
              <ul>
                ${data.services
                  .map((service) => `<li>${service}</li>`)
                  .join("")}
              </ul>
              <h2>Description</h2>
              <p>${data.need}</p>
              <h2>When are you available to start?</h2>
                <p>${data.startDate}</p>
              <h2>Are you willing to Pay?</h2>
                <p>${data.willingToPay}</p>
              <h2>How You Found Us</h2>
              <ul>
                ${data.source.map((src) => `<li>${src}</li>`).join("")}
              </ul>
              <h2>Message</h2>
              <p>${data.message}</p>
            </div>
            <div class="footer">
              <p>Sent from Corporate Website</p>
            </div>
          </div>
        </body>
      </html>
    `;
}

export default function Training() {
  const initialData = {
    phone: "",
    name: "",
    email: "",
    services: [],
    need: "",
    willingToPay: "",
    startDate: "",
    source: [],
    message: "",
  };
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
      title: "Digital Marketing for Beginners (2 weeks)",
    },
    {
      id: 2,
      title: "Web Development for Beginners (3 months)",
    },
    {
      id: 3,
      title: "SolidWorks for Beginners (2 months)",
    },
    {
      id: 4,
      title: "Mastering Prompting AI (1 week)",
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

  const handleSendingData = async () => {
    setLoading(true);
    try {
      const emailBody = generateEmailHTML(data);
      if (data?.email === "" && data?.phone === "") {
        setFeedback("You have to provide at least one way to contact you!");
        return false;
      }
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: `New Training Request - ${data?.name}`,
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
        <title>Digital Skills - Techinika Training</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta
          name="description"
          content="digital marketing skills,coding skills, web development training, digital skills, software development skills, learn new skills in rech,training in digital skills, digital skills talents in rwanda,digital skills training in rwanda"
        ></meta>
      </Head>
      <div className="relative h-screen">
        <div className="font-main">
          <Nav />
        </div>
        <div className="bg-white font-main mx-auto mt-24">
          <div className="bg-gray-50">
            <div className="py-10 md:w-8/12 m-auto flex-col gap-5 px-4">
              <h1 className="text-mainBlue font-bold text-xl">
                The Future is Digital
              </h1>
              <p>{`In the world where technology reigns, who do you want to be? Do you want to be an observer? A creator? An innovator? Or an inventor?`}</p>
              <p className="italic font-semibold">{`Whatever you want to become, it starts with developing your technological skills. Understanding how technology works, gaining deep understanding of concepts, and practicing building and using it.`}</p>
              <p>{`Our training programs are here for that!`}</p>
            </div>
          </div>
          <div className="md:w-[60%] lg:w-[60%] sm:w-[90%] mx-auto text-xl py-4 p-2">
            <form className="rounded-lg p-5">
              <h2 className="font-bold text-lg italic py-4">
                Apply using this form, We will contact you as soon as possible:
              </h2>
              {feedback && (
                <p className="text-center bg-green-300 rounded-md p-4 text-mainBlue">
                  {feedback}
                </p>
              )}
              <div className="my-3">
                <label className="text-mainBlue font-bold">Your Name</label>
                <div className="flex flex-wrap gap-5 items-center">
                  <input
                    type="text"
                    disabled={loading}
                    value={data?.name}
                    onChange={(e) => {
                      setData({ ...data, name: e.target.value });
                    }}
                    placeholder="Full Name"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              {/* <div>
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
              </div> */}
              <div className="my-3">
                <label className="text-mainBlue font-bold">Your Email</label>
                <div className="flex flex-wrap gap-5 items-center">
                  <input
                    type="text"
                    disabled={loading}
                    value={data?.email}
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
                    placeholder="eg: email@example.com"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              <div className="my-3">
                <label className="text-mainBlue font-bold">
                  You Phone Number:
                </label>
                <div className="flex flex-wrap gap-5 items-center">
                  <input
                    disabled={loading}
                    type="text"
                    value={data?.phone}
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
                    }
                    placeholder={"eg: +25078...."}
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              <div className="my-3">
                <label className="text-mainBlue font-bold">
                  Choose a Training you are interested in:
                </label>
                <div className="flex flex-wrap gap-5 items-center">
                  {services &&
                    services.map((item) => (
                      <div key={item?.id} className="flex items-center gap-2">
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
              <div>
                <label className="text-mainBlue font-bold">
                  Are you willing to pay for the Training
                </label>
                <select
                  className="flex flex-wrap gap-5 items-center w-full rounded-lg"
                  onChange={(e) =>
                    setData({ ...data, willingToPay: e.target.value })
                  }
                  disabled={loading}
                >
                  <option value={"No"} disabled={loading}>
                    Yes
                  </option>
                  <option value={"Yes"} disabled={loading}>
                    No
                  </option>
                </select>
              </div>
              <div>
                <label className="text-mainBlue font-bold">
                  When are you available to start?
                </label>
                <select
                  className="flex flex-wrap gap-5 items-center w-full rounded-lg"
                  onChange={(e) =>
                    setData({ ...data, startDate: e.target.value })
                  }
                  disabled={loading}
                >
                  <option value={"Immediately"} disabled={loading}>
                    Immediately
                  </option>
                  <option value={"OneWeek"} disabled={loading}>
                    One Week
                  </option>
                  <option value={"TwoWeek"} disabled={loading}>
                    In Two Weeks
                  </option>
                  <option value={"NextMonth"} disabled={loading}>
                    Next Month
                  </option>
                  <option value={"Undecided"} disabled={loading}>
                    Undecided
                  </option>
                </select>
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
