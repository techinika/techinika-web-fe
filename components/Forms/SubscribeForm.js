import React from "react";

class SubscribeForm extends React.Component {
  render() {
    return <div className="py-10 md:py-0" id="fsub-compose"></div>;
  }
  componentDidMount() {
    let script = document.createElement("script");
    script.id = "ff-script";
    script.src =
      "https://formfacade.com/include/107280370120201254320/form/1FAIpQLSfI4oRuya21bcMMKVE018exOiFsHzhNjiTurp_oYMVKa6mw6g/classic.js?div=fsub-compose";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }
}

export default SubscribeForm;
