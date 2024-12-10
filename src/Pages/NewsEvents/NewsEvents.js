import React from "react";
import DynamicBanner from "../../Shared/DynamicBanner/DynamicBanner";
import NewsEventsDetails from "./NewsEventsDetails/NewsEventsDetails";

function NewsEvents ()
{
  return (
    <main>
      {/* Dynamic Banner Section */}
      <DynamicBanner
        webTittle={true}
        bg={"https://www.adzitrims.com/assets/images/coming-soonbg2.jpg"}
      />

      {/* News & Events Section */}
      <section className="w-full bg-white">
        <NewsEventsDetails />
      </section>
    </main>
  );
}

export default NewsEvents;
