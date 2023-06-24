import React from "react";

class ContactForm extends React.Component {
  render() {
    return <div id="ff-compose"></div>;
  }
  componentDidMount() {
    let script = document.createElement("script");
    script.id = "ff-script";
    script.src =
      "https://formfacade.com/include/107280370120201254320/form/1FAIpQLSfNJhyEDQUhi9P1Qk1vNOK0lYk7L9TBfeHx31oQ0anv4KF-gg/classic.js?div=ff-compose";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }
}

export default ContactForm;
