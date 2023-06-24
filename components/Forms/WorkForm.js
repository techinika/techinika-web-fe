import React from "react";

class WorkForm extends React.Component {
  render() {
    return <div id="fwork-compose"></div>;
  }
  componentDidMount() {
    let script = document.createElement("script");
    script.id = "ff-script";
    script.src =
      "https://formfacade.com/include/107280370120201254320/form/1FAIpQLSdb37UjQYIyuWzrzIG0a-PrinM_Kma9Tq4NfOrn401qJ5oyhw/classic.js?div=fwork-compose";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }
}

export default WorkForm;
