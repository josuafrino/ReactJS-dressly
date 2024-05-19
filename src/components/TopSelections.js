import { useMemo } from "react";

const TopSelections = ({
  a2f68e3Fa1147ee8aa2Dd1539,
  elegantEidAttire,
  propPadding,
  propHeight,
  propWidth,
}) => {
  const topSelectionsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const elegantEidAttireStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  return (
    <div
      className="h-[391px] rounded-[7.55px] flex flex-row items-end justify-center pt-[53px] px-5 pb-[53.4px] box-border relative max-w-full text-left text-37xl text-neutral-100 font-display-1-56px-semibold"
      style={topSelectionsStyle}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[7.55px] max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src={a2f68e3Fa1147ee8aa2Dd1539}
        />
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[7.55px] bg-gray z-[1]" />
      </div>
      <h1
        className="m-0 h-[29.2px] w-[212.2px] relative text-inherit tracking-[-0.02em] leading-[110%] font-semibold font-inherit inline-block shrink-0 z-[2] mq450:text-15xl mq450:leading-[37px] mq750:text-26xl mq750:leading-[49px]"
        style={elegantEidAttireStyle}
      >
        {elegantEidAttire}
      </h1>
    </div>
  );
};

export default TopSelections;
