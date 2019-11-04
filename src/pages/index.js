import React from "react";
import Layout from "../components/Layout";
import WorkRoll from "../components/BlogRoll";

export default class WorkIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <WorkRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
