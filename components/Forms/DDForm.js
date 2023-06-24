import React from "react";

class DDForm extends React.Component {
  render() {
    return <div id="ff-compose"></div>;
  }
  componentDidMount() {
    let script = document.createElement("script");
    script.id = "ff-script";
    script.src =
      "https://formfacade.com/include/107280370120201254320/form/1FAIpQLSdIrh3Nmqvugth0aY9VFBtI0Kpt7of65Qu7Ak0PTlS-Uwx8Uw/classic.js?div=ff-compose";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }
}

export default DDForm;
