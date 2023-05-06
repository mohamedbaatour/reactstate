import React from "react";
import "./App.css";
class App extends React.Component {
  state = {
    fullName: "Mohamed Baatour",
    bio: "Don't Have :)",
    imgSrc: require("./Images/M1.jpg"),
    profession: "HTML, CSS, JS dev",
    show: false,
  };

  render() {
    var handleShow = () => {
      this.setState({ show: !this.state.show });
    };
    return (
      <>
        <div class="but">
          <button id="the-button" onClick={handleShow}>
            {this.state.show ? "hide" : "show"}
          </button>
        </div>
        {this.state.show ? (
          <div>
            <h1 id="the-h1">Hello World!</h1>
            <img id="the-img" src={this.state.imgSrc} alt="pic" />
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}
export default App;
