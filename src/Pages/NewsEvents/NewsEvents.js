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
        bg={"https://arltl.com/web-cms-arltl/uploads/news-bg.jpg"}
      />

      {/* News & Events Section */}
      <section className="w-full bg-white">
        <NewsEventsDetails />
      </section>
    </main>
  );
}

export default NewsEvents;
