import React from "react";
import Layout from "../components/Layout";
import CountDown from "../components/Countdown";

export const ComingSoonPageTemplate = () => {
  return (
    <section className="countdown-section">
      <CountDown
        timeTillDate="01 01 2020, 6:00 am"
        timeFormat="MM DD YYYY, h:mm a"
      />
    </section>
  );
};

const ComingSoonPage = () => {
  return (
    <Layout>
      <ComingSoonPageTemplate />
    </Layout>
  );
};

export default ComingSoonPage;
