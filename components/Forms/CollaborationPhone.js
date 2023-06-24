import React from "react";

class CollaborateForm extends React.Component {
  render() {
    return <div id="fcollab-compose"></div>;
  }
  componentDidMount() {
    let script = document.createElement("script");
    script.id = "ff-script";
    script.src =
      "https://formfacade.com/include/107280370120201254320/form/1FAIpQLSfF4HvjCdhPLbITR0vaPeGJ0rWjPgS431oB_SWI4enRXgYOlA/classic.js?div=fcollab-compose";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }
}

export default CollaborateForm;
