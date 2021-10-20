import "./App.css";
import React, { Component } from "react";
import MyNavbar from "./components/Navbar/MyNavbar";
import News from "./components/News/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_MY_APIKEY;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <Router>
        <div>
          {this.state.progress !== 100 ? (
            <div className="progress" style={{ height: "3px" }}>
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: `${this.state.progress}%` }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          ) : (
            console.log()
          )}
          <MyNavbar />
          <Switch>
            <Route exact path="/">
              <News
                progress={this.setProgress}
                key="general"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                progress={this.setProgress}
                key="business"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                progress={this.setProgress}
                key="entertainment"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News
                progress={this.setProgress}
                key="health"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                progress={this.setProgress}
                key="science"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                progress={this.setProgress}
                key="sports"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                progress={this.setProgress}
                key="technology"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
