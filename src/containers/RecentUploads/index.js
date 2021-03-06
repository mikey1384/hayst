import React from "react";
import Home from "./Home";
import PageOne from "./PageOne";
import { Route, Switch, Link } from "react-router-dom";

export default function RecentUploads() {
  return (
    <div className="recentupload">
      <Switch>
        <Route exact path="/uploads/" component={Home} />
        <Route path="/uploads/1" component={PageOne} />
      </Switch>
      <h30>
        <div className="btn btn-success">
          <Link
            style={{
              color: "white",
              fontSize: "30px"
            }}
            to="/uploads"
          >
            To Page One
          </Link>
        </div>
        <div className="btn btn-success">
          <Link
            style={{
              color: "white",
              fontSize: "30px"
            }}
            to="/uploads/1"
          >
            To Page Two
          </Link>
        </div>
      </h30>
      <div
        style={{
          borderTop: "90px solid #ffffff",
          display: "flex",
          justifyContent: "center"
        }}
      >
        Copyright Hayst 2018
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        All rights reserved.
      </div>
    </div>
  );
}
