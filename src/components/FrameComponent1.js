import TopSelections from "./TopSelections";

const FrameComponent1 = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-29xl text-neutral-900 font-display-1-56px-semibold mq750:gap-[16px]">
      <h1 className="m-0 self-stretch relative text-inherit leading-[53px] font-semibold font-inherit mq450:text-10xl mq450:leading-[32px] mq750:text-19xl mq750:leading-[42px]">
        Top Selections
      </h1>
      <div className="self-stretch grid flex-row items-start justify-start gap-[24px] max-w-full grid-cols-[repeat(3,_minmax(293px,_1fr))] text-37xl text-neutral-100 mq750:grid-cols-[minmax(293px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(293px,_508px))]">
        <TopSelections
          a2f68e3Fa1147ee8aa2Dd1539="/1a2f68e3fa1147ee8aa2dd1539f690d6-1@2x.png"
          elegantEidAttire="Elegant Eid Attire"
        />
        <TopSelections
          a2f68e3Fa1147ee8aa2Dd1539="/a319d2f0fb5e48d6a161defc6b7d0a41-1@2x.png"
          elegantEidAttire="Accessory Essentials"
          propPadding="56px 71.2px 56.1px"
          propHeight="25px"
          propWidth="218px"
        />
        <TopSelections
          a2f68e3Fa1147ee8aa2Dd1539="/a076d3d4315a40478641a1287fca20e0-1@2x.png"
          elegantEidAttire="Everyday Shoes"
          propPadding="58px 101.4px"
          propHeight="25px"
          propWidth="165px"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
