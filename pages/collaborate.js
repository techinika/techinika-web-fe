import Head from "next/head";
import Nav from "../components/HeadFoot/Nav";
import Footer from "../components/HeadFoot/Footer";
import { PageTitle } from "../components/HeadFoot/PageTitle";

export default function Collaborate() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Collaborate with techinika to deliver high quality educations and technology products to the public."
        />
        <meta
          name="keywords"
          content="Everyone has a right to understand technology, Web development, Graphic design, modern technologies, ICT Training to your staff"
        />
        <meta name="author" content="Techinika Devs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Collaborate with us | Techinika</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <div>
        <Nav />
        <PageTitle title="Explore how we can collaborate!" />

        <div className="md:w-10/12 xs:w-full mx-auto text-white p-8">
          <div className="flex flex-wrap justify-center items-start mx-auto mt-8 md:w-11/12 gap-4">
            <div className="card">
              <h2 className="card-title">Sponsor our community activities!</h2>
              <p className="card-body">
                {
                  "We have a community of individuals who are very passionate about technology and are willing to use it to make a change."
                }
                <br></br>
                <b>You can sponsor by:</b>
              </p>
              <ul className="list">
                <li className="list-item">Providing Events Venue</li>
                <li className="list-item">
                  Financially Supporting Community Activities
                </li>
                <li className="list-item">
                  Providing Opportunities to members
                </li>
                <li className="list-item">
                  Providing Utilities in community events
                </li>
              </ul>
              <p className="text-gray-900 font-bold">{`What you get:`}</p>
              <ul className="list">
                <li className="list-item">
                  {
                    "We feature you on different communications on our social platforms and in the event"
                  }
                </li>
                <li className="list-item">
                  {"We pass your message through our educational contents."}
                </li>
                <li className="list-item">
                  {"We give you time to pass your message through our events."}
                </li>
                <li className="list-item">We provide technical support.</li>
                <li className="list-item">
                  {"You name it, we talk about it, come to an agreement."}
                </li>
              </ul>
            </div>
            <div className="card">
              <h2 className="card-title">Hire our Trainees</h2>
              <p className="card-body">
                {
                  "Our main activity is educating Rwandans on how to use technology to improve their life, businesses, and advance their careers. We believe they will be a fitting addition to your team."
                }
                <br></br>
                <b>By giving them a chance,</b>
              </p>
              <ul className="list">
                <li className="list-item">
                  {
                    "You have fresh talents who had a right training and very passionate about using technology to make a difference in the society."
                  }
                </li>

                <li className="list-item">
                  {
                    "You don't have to spend hours and hours finding the best talents. We help you with that by giving you tested and best individuals."
                  }
                </li>
                <li className="list-item">
                  {
                    "You get an opportunity to support young talents by offering mentorship and experience that is very important for their careers."
                  }
                </li>
                <li className="list-item">
                  {
                    "You add diversity in your team. Because of which, your team will have new spirit for innovation."
                  }
                </li>
              </ul>
            </div>
          </div>
          <div className="w-11/12 md:w-5/12 mx-auto my-4">
            <h2 className="card-title">Working together,</h2>
            <p className="text">
              {
                "We believe in the power of working together and we recognize that we can not achieve what we do alone. That is why we seek your partnership in delivering high quality technology education and technical support to the people of Rwanda and Africa."
              }
            </p>
            <p className="text">
              {
                "We have so big ambitions and so much to do and we are ready to contribute as much as we can. If you think we can contribute on your cause or we can be important to you in any how, don't hesitate to reach out to us."
              }
            </p>
            <p className="text">
              {"Use the form below to express your interest:"}
            </p>
            <form className="form flex flex-col">
              <input
                type="text"
                placeholder="Enter your name"
                className="input w-full"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="input w-full"
              />
              <input
                type="email"
                placeholder="Are you an individual or represent an organization?"
                className="input w-full"
              />
              <select className="input w-full text">
                <option>Select an interest</option>
                <option>Sponsor our community</option>
                <option>Hire our trainees</option>
              </select>

              <textarea cols={10} placeholder="" className="input w-full"></textarea>

              <input type="submit" value="Submit" className="btn btn-yellow" />
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
