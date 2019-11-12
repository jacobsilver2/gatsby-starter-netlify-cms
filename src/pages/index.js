import React from "react";
import Layout from "../components/Layout";
import WorksRoll from "../components/WorksRoll";

export default class WorkIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          {/* add a div with classname container to bring back a centered column view */}
          <div className="content">
            <WorksRoll />
          </div>
        </section>
      </Layout>
    );
  }
}
