import React from "react";

class LearningForm extends React.Component {
  render() {
    return <div id="flearn-compose"></div>;
  }
  componentDidMount() {
    let script = document.createElement("script");
    script.id = "ff-script";
    script.src =
      "https://formfacade.com/include/107280370120201254320/form/1FAIpQLSelTQ77EdLEDXroU16TIzNB4B74uK9tdpAZyoQznpSGkp5MxA/classic.js?div=flearn-compose";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }
}

export default LearningForm;
