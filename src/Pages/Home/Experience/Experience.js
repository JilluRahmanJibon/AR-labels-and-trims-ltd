const Experience = () => {
  const experienceData = [
    {
      id: 1,
      tittle: "954+",
      description: "fashion, homeware and sportswear brand partners",
    },
    {
      id: 2,
      tittle: "401+",
      description: "clothing brands helped by us to become more sustainable",
    },
    {
      id: 3,
      tittle: "8+",
      description: "production facilities around the world",
    },
  ];
  return (
    <div className="relative w-full text-white bg-primary">
      <div className="xl:w-[1180px] w-[100%] h-[100%] flex flex-wrap justify-center items-center mx-auto GeologicaFont [@media(min-width:580px)]:pt-[15px] pt-[0px] [@media(min-width:580px)]:pb-[15px] pb-[5px]">
          {experienceData.map((key) => (
            <div
              key={key.id}
              className="[@media(min-width:580px)]:w-[300px] w-[260px] flex flex-row items-center justify-start text-left mx-auto [@media(min-width:580px)]:pt-[10px] pt-[2px] [@media(min-width:580px)]:pb-[10px] pb-[2px] px-[5px]"
            >
              <h3 className="[@media(min-width:580px)]:text-[23px] text-[15px] [@media(min-width:580px)]:w-[56px] w-[40px] font-semibold mt-[-5px] text-white text-center">
                {key.tittle}
              </h3>
              <p className="[@media(min-width:580px)]:text-[15px] [@media(min-width:400px)]:text-[13px] text-[12px] mt-2 pl-[10px] text-[#efefef]">
                {key.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Experience;
