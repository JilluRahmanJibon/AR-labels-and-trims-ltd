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
      <div className="xl:w-[1180px] w-[100%] h-[100%] flex flex-wrap justify-center items-center mx-auto GeologicaFont py-[15px]">
          {experienceData.map((key) => (
            <div
              key={key.id}
              className="[@media(min-width:450px)]:w-[300px] w-[290px] flex [@media(min-width:600px)]:flex-row flex-col items-center [@media(min-width:600px)]:justify-start justify-center [@media(min-width:600px)]:text-left text-center mx-auto py-[10px] px-[5px]"
            >
              <h3 className="[@media(min-width:450px)]:text-[23px] text-[21px] w-[56px] font-semibold [@media(min-width:600px)]:mt-[-5px] mt-0 text-white">
                {key.tittle}
              </h3>
              <p className="[@media(min-width:450px)]:text-[15px] text-[14px] mt-2 [@media(min-width:600px)]:pl-[10px] pl-0 text-[#efefef]">
                {key.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Experience;
