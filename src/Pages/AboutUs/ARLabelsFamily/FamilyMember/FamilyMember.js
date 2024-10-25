import React from "react";

function FamilyMember() {
  const allTeam = [
    {
      id: 1,
      image:
        "https://badshaagency.netlify.app/static/media/img2.4f1804bf6c4583322af8.jpg",
      name: "Sikder Sakiuzzaman",
      tittle: "(Chairman)",
      work: "Chairman, Adzi Trims Ltd. Experienced in Apparel Accessories Business.",
    },
    {
      id: 2,
      image:
        "https://badshaagency.netlify.app/static/media/img2.4f1804bf6c4583322af8.jpg",
      name: "Golam Mortuza Khan",
      tittle: "(Managing Director)",
      work: "Managing Director, Adzi Trims Ltd. Renowned in the field of accessories industry.",
    },
    {
      id: 3,
      image:
        "https://badshaagency.netlify.app/static/media/img2.4f1804bf6c4583322af8.jpg",
      name: "Al Shahriar Ahmed",
      tittle: "(Director)",
      work: "Director, Adzi Trims Ltd.  Renowned in the field of accessories industry.",
    },
  ];

  return (
    <main
      className={`w-full h-full pt-[4rem] pb-[2.5rem] GeologicaFont bg-[#fff]`}
    >
      <div className="xl:w-[1230px] w-[96%] h-[100%] z-[1] flex items-center mx-auto relative ">
        {/* Team */}
        <div className="w-full ">
          <div className="w-full text-center text-black relative z-10 sm:pb-[25px] pb-[15px]">
            <h1 className="[@media(min-width:800px)]:text-[30px] [@media(min-width:600px)]:text-[27px] [@media(min-width:500px)]:text-[25px] [@media(min-width:400px)]:text-[22px] text-[19px] font-semibold">
              Our Family
            </h1>
            <p className="text-[#018496] [@media(min-width:470px)]:text-[15px] text-[14px] mx-auto">
              A Well-Seasoned Team At The Helm
            </p>
          </div>

          <div className="w-full relative">
            <div className=" flex flex-wrap justify-center z-10 relative ">
              {allTeam.map((key) => {
                return (
                  <div
                    key={key.id}
                    className={`w-[300px] h-[290px] mx-[10px] rounded-[15px] flex  bg-[#fff] shadow-[0px_0px_6px_0px_#c6c6c6] my-[10px]`}
                  >
                    <div
                      className={`w-[100%] flex items-center justify-center flex-col opacity-[0.9] mx-auto`}
                      style={{ transition: "0.5s" }}
                    >
                      <div className="w-[105px] h-[105px] rounded-[50%] overflow-hidden relative">
                        <img src={key.image} className="w-full h-full" alt="" />
                      </div>
                      <div className="text-[#000] text-center mt-[15px]">
                        <h3 className="text-[18px]">{key.name}</h3>
                        <p className="text-red-600 text-[13px] pb-[5px]">
                          {key.tittle}
                        </p>
                        <p className="text-[13px] w-[92%] h-[60px] mx-auto">
                          {key.work}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FamilyMember;
