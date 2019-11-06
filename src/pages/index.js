import React from "react";
import Layout from "../components/Layout";
import WorksRoll from "../components/WorksRoll";

export default class WorkIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <WorksRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
