import React, { Component } from "react";
import Accordion from "./components/Accordion";
import PopoutImage from "./components/PopoutImage";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion>
          <Accordion.Item title="Toggle 1" open={true}>
            With this code, our FormField component will now accept input,
            select, textarea, or our custom RadioGroup component. Our RadioGroup
            component will in turn validate that it's children are labels each
            containing a single input of type radio, or checkbox.
          </Accordion.Item>
          <Accordion.Item title="Toggle 2">Content 2</Accordion.Item>
        </Accordion>

        <div className="content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis at
            dicta, sit dolorem sequi ipsa dolor mollitia error distinctio minus
            optio qui harum quas ex? Molestiae debitis iure sed hic.
          </p>
          <PopoutImage src="../rinjani-small.jpeg" largeSrc="../rinjani.jpeg" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis at
            dicta, sit dolorem sequi ipsa dolor mollitia error distinctio minus
            optio qui harum quas ex? Molestiae debitis iure sed hic.
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis at
            dicta, sit dolorem sequi ipsa dolor mollitia error distinctio minus
            optio qui harum quas ex? Molestiae debitis iure sed hic.
            <PopoutImage
              className="yooo"
              src="../rinjani-small.jpeg"
              largeSrc="../rinjani.jpeg"
            />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis at
            dicta, sit dolorem sequi ipsa dolor mollitia error distinctio minus
            optio qui harum quas ex? Molestiae debitis iure sed hic. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Quis at dicta, sit
            dolorem sequi ipsa dolor mollitia error distinctio minus optio qui
            harum quas ex? Molestiae debitis iure sed hic.
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis at
            dicta, sit dolorem sequi ipsa dolor mollitia error distinctio minus
            optio qui harum quas ex? Molestiae debitis iure sed hic.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
