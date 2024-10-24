import React from "react";
import DynamicBanner from "../../Shared/DynamicBanner/DynamicBanner";
import NewsEventsDetails from "./NewsEventsDetails/NewsEventsDetails";

function NewsEvents() {
  return (
    <main>
      {/*  banner section  */}
      <DynamicBanner webTittle={true} bg={"https://www.adzitrims.com/assets/images/coming-soonbg2.jpg"} />
      {/* news & Events section */}
      <NewsEventsDetails />
    </main>
  );
}

export default NewsEvents;
