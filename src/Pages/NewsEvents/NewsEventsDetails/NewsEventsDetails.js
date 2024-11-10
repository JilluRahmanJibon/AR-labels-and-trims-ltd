import React from "react";

function NewsEventsDetails() {
  const NewsEventsData = [
    {
      id: 1,
      img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/news_image_upload_news_and_events_1548318413_1548318413.png",
      tittle:
        "AR-Labels & Trims Ltd. won the “1st Prize for the best stall of GAPEXPO",
    },
    {
      id: 2,
      img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/news_image_upload_news_and_events_1548334567_1548334567.jpg",
      tittle: "Adzi Trims stall for GAPEXPO 2019! ",
    },
    {
      id: 3,
      img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/news_image_upload_news_and_events_1548334896_1548334896.jpg",
      tittle: "Prize receiving of GAPEXPO 2019! ",
    },
  ];
  return (
    <div className="bg-[#fff] GeologicaFont">
      <main className="xl:w-[1230px] w-[96%] mx-auto  py-[3rem] overflow-hidden">
        <div className="w-full text-center text-black relative z-10 sm:pb-[25px] pb-[15px]">
          <h1 className="[@media(min-width:800px)]:text-[30px] [@media(min-width:600px)]:text-[27px] [@media(min-width:500px)]:text-[25px] [@media(min-width:400px)]:text-[22px] text-[19px] font-semibold">
            News And Events
          </h1>
          <div className="flex items-center mt-[5px] justify-center">
            <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
            <div className="[@media(min-width:420px)]:w-[22px] w-[19px] [@media(min-width:420px)]:h-[6px] h-[5px] mx-[5px] bg-[#018496] inline-flex"></div>
            <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap w-[100%] mx-auto justify-center ">
          {NewsEventsData.map((key) => {
            return (
              <div key={key.id} className="[@media(min-width:450px)]:w-[360px] [@media(min-width:350px)]:w-[330px] w-[300px] [@media(min-width:450px)]:mx-[10px] mx-0 my-[10px] cursor-pointer rounded-[10px] overflow-hidden border-[2px] border-[#ececec] bg-[#ffffff]">
                <div className="w-[100%] [@media(min-width:450px)]:h-[255px] [@media(min-width:350px)]:h-[225px] h-[195px] overflow-hidden">
                  <img src={key.img} className="w-[100%] h-full" alt="" />
                </div>

                <div className="text-center text-black pt-[10px] pb-[15px] px-[7px]">
                  <p className="text-red-600 [@media(min-width:450px)]:text-[15px] text-[13px]">
                    (AR-Labels & Trims Ltd)
                  </p>
                  <h1 className="pt-[2px] [@media(min-width:450px)]:text-[16px] [@media(min-width:350px)]:text-[15px] text-[14px]">{key.tittle}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default NewsEventsDetails;
