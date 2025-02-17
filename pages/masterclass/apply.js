import Head from "next/head";
import Nav from "../../components/HeadFoot/Nav";
import Footer from "../../components/HeadFoot/Footer";
import Partners from "../../components/Partners";
import { useEffect, useState } from "react";
// import { google } from "googleapis";

function generateEmailHTML(data) {
  return `
      <html>
        <head>
          <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

            * {
              font-family: Inter, sans-serif;
            }

            body {
              font-family: Inter, sans-serif;
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
              <h2>If you chose other:</h2>
              <p>${data.otherTraining}</p>
              <h2>Description</h2>
              <p>${data.need}</p>
              <h2>What best defines you?</h2>
              <ul>
                ${data.entities.map((src) => `<li>${src}</li>`).join("")}
              </ul>
              <h2>When are you available to start?</h2>
                <p>${data.startDate}</p>
              <h2>How You Found Us</h2>
              <ul>
                ${data.source.map((src) => `<li>${src}</li>`).join("")}
              </ul>
              <h2>Who Referred you?</h2>
              <p>${data.referral}</p>
              <h2>Are you willing to pay?</h2>
              <p>${data.willingToPay}</p>
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

function generateTrainingEmailHTML(data, name) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Training Registration Confirmation</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
          }
          .header {
            text-align: center;
            background-color: #0073e6;
            color: #ffffff;
            padding: 20px;
            border-radius: 8px 8px 0 0;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 20px;
            line-height: 1.6;
            color: #333333;
          }
          .content p {
            margin: 10px 0;
          }
          .button {
            display: inline-block;
            background-color: #0073e6;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 10px;
          }
          .footer {
            text-align: center;
            font-size: 12px;
            color: #777777;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>Masterclass Registration Confirmed!</h1>
          </div>
          <div class="content">
            <p>Hi ${name},</p>
            <p>Thank you for registering for our training program. We're excited to have you on board!</p>
            <p><strong>Training Details:</strong></p>
            <ul>
              <li><strong>Training Name:</strong> ${data.trainingName}</li>
              <li><strong>Date:</strong> ${data.trainingDate}</li>
              <li><strong>Time:</strong> ${data.trainingTime}</li>
              <li><strong>Location:</strong> ${data.trainingLocation}</li>
            </ul>
            <p><strong>Payment Details:</strong></p>
            <ul>
              <li><strong>Amount:</strong>${
                data.paymentDiscount
                  ? `<span style="text-decoration: line-through; color: gray;">${data.paymentAmount}</span> 
         <span style="color: green; font-weight: bold;">${data.paymentDiscount}</span>`
                  : data.paymentAmount
              }</li>
              <li><strong>Payment Method:</strong> ${data.paymentMethod}</li>
              <li><strong>Reference:</strong> ${data.paymentReference}</li>
            </ul>
            <p>Please complete your payment by ${
              data.paymentDeadline
            } to confirm your spot.</p>
            <p>If you have any questions or need assistance, feel free to contact us:</p>
            <ul>
              <li><strong>Email:</strong> ${data.contactEmail}</li>
              <li><strong>Phone:</strong> ${data.contactPhone}</li>
            </ul>
            <p>We look forward to seeing you!</p>
            <p>Best regards,</p>
            <p>The ${data.companyName} Team</p>
            <div style="width: 100%;display: flex;justify-content: center;items-align: center;"><a href="${
              data.website
            }" class="button" style="color: #fff;">Visit Our Website</a></div>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} ${
    data.companyName
  }. All Rights Reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

// export async function getServerSideProps({ query }) {
//   const auth = await google.auth.getClient({scopes: []});

// }

export default function Training() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Apply for Masterclass",
    url: "https://techinika.co.rw/masterclass/apply",
    description:
      "Apply for Techinika's Masterclass and take your digital skills to the next level.",
  };
  const initialData = {
    phone: "",
    name: "",
    email: "",
    services: [],
    need: "",
    willingToPay: "",
    otherTraining: "",
    startDate: "",
    source: [],
    entities: [],
    message: "",
    referral: "",
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
      title: "WordPress Masterclass: Cohort 2 (Starts on 01st March 2025 - Weekends)",
    },
    {
      id: 2,
      title: "Coding for Beginners: Cohort 1 (Starts on 03rd March 2025)",
    },
    {
      id: 3,
      title: "Extended Javascript for Beginners: Cohort 1 (Starts on 03rd March 2025)",
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

  const entities = [
    {
      id: 1,
      title: "Individual",
    },
    {
      id: 2,
      title: "Group",
    },
    {
      id: 3,
      title: "Corporate or Government",
    },
  ];

  const trainingData = {
    trainingName: "Master WordPress: Build Websites Fast and Easy",
    trainingDate: "20/01/2025 - 31/01/2025",
    trainingTime: "09:00 AM - 01:00 PM",
    trainingLocation: "Kigali, Gikondo, Techinika Office",
    paymentAmount: "80,000RWF",
    paymentDiscount: "50,000RWF",
    paymentMethod: "MoMo Pay - 791446",
    paymentReference: "WPMasterclass",
    paymentDeadline: "20th January 2024",
    contactEmail: "info@techinika.com",
    contactPhone: "+250791377446",
    companyName: "Techinika",
    website: "www.techinika.co.rw",
  };

  const handleSendingData = async () => {
    setLoading(true);
    try {
      const emailBody = generateEmailHTML(data);
      const email2Applicant = generateTrainingEmailHTML(
        trainingData,
        data.name
      );

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
          subject: `New Masterclass Request - ${data?.name}`,
          body: emailBody,
          receiver: "niguterwanda@gmail.com",
        }),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: `Masterclass Registration Confirmation - Secure your spot`,
            body: email2Applicant,
            receiver: data?.email,
          }),
        });
        if (response.ok) {
          setFeedback(
            "We have successfully received your request. Please check your email for next steps."
          );
        } else {
          setFeedback(
            "We have successfully received your request. We will reach out soon!"
          );
        }
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
          content="digital marketing skills,coding skills, web development training, digital skills, software development skills, learn new skills in rech,training in digital skills, digital skills talents in rwanda,digital skills training in rwanda"
        />
        <meta name="author" content="Techinika Developers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Apply for our Masterclass - Techinika Training</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta
          name="description"
          content="It starts with developing your technological skills. Understanding how technology works, gaining deep understanding of concepts, and practicing building and using it. Our training programs are here for that!"
        ></meta>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="relative h-screen">
        <div className="font-main">
          <Nav />
        </div>
        <div className="bg-white font-main mx-auto mt-24">
          <div className="bg-gray-50">
            <div className="py-10 md:w-8/12 m-auto flex-col gap-5 px-4">
              <h1 className="text-mainBlue font-bold text-xl">
                Apply for the WordPress Masterclass
              </h1>
              <p>{`We equip you with skills that unlock new opportunities for your career, and boosts your value on the market. By participating, you become part of Techinika Insiders, and get access to internal opportunities and networks.`}</p>
            </div>
          </div>
          <div className="md:w-[60%] lg:w-[50%] sm:w-[90%] mx-auto text-xl py-4 p-2">
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
                  If you chose Other, which training do you need?
                </label>
                <div className="flex flex-wrap gap-5 items-center">
                  <input
                    type="text"
                    disabled={loading}
                    value={data?.otherTraining}
                    onChange={(e) => {
                      setData({ ...data, otherTraining: e.target.value });
                    }}
                    placeholder="Custom training"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              <div className="my-3">
                <label className="text-mainBlue font-bold">
                  What best defines you?
                </label>
                <div className="flex flex-wrap gap-5 items-center">
                  {entities &&
                    entities.map((item) => (
                      <div key={item?.id} className="flex items-center gap-2">
                        <input
                          disabled={loading}
                          value={item?.title}
                          type="checkbox"
                          onChange={(e) => {
                            if (data.entities.includes(e.target.value)) {
                              let newservices = data.entities.filter(
                                (item) => item !== e.target.value
                              );
                              setData({
                                ...data,
                                entities: newservices,
                              });
                            } else {
                              setData({
                                ...data,
                                entities: [...data.entities, e.target.value],
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
                  How much are you willing to pay for the Training?
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
                  When do you want to start?
                </label>
                <input
                  type="date"
                  className="flex flex-wrap gap-5 items-center w-full rounded-lg"
                  onChange={(e) =>
                    setData({ ...data, startDate: e.target.value })
                  }
                  disabled={loading}
                />
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
                  Who referred you?
                </label>
                <div className="flex flex-wrap gap-5 items-center">
                  <input
                    type="text"
                    disabled={loading}
                    value={data?.referral}
                    onChange={(e) =>
                      setData({ ...data, referral: e.target.value })
                    }
                    placeholder={
                      "Add an email or phone number of your referral"
                    }
                    className="w-full rounded-lg"
                  />
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
