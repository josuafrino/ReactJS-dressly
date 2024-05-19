import { useMemo } from "react";

const FrameComponent = ({
  aa81bd85178473fA156591d24,
  sneaker,
  rp965500,
  rp1097500,
  propBorder,
  propMinWidth,
  propGap,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const sneakerStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className="rounded-lg flex flex-col items-start justify-start pt-3.5 px-3.5 pb-[15px] gap-[16px] text-left text-xl text-neutral-900 font-label-2-10px-regular border-[1.7px] border-solid border-background-900"
      style={frameDivStyle}
    >
      <img
        className="w-[255px] h-[255px] relative rounded-lg object-cover"
        loading="lazy"
        alt=""
        src={aa81bd85178473fA156591d24}
      />
      <div className="flex flex-col items-start justify-start gap-[8px]">
        <div
          className="relative leading-[140%] font-medium inline-block min-w-[75px] mq450:text-base mq450:leading-[22px]"
          style={sneakerStyle}
        >
          {sneaker}
        </div>
        <div className="flex flex-col items-start justify-start gap-[6.9px] text-sm text-neutral-500">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/haruki-icons-3.svg"
            />
            <div className="relative leading-[20px] inline-block min-w-[56px]">
              <span>{`4.5 `}</span>
              <span className="text-neutral-300">(325)</span>
            </div>
          </div>
          <div
            className="flex flex-row items-center justify-start gap-[8px] text-neutral-900"
            style={frameDiv1Style}
          >
            <div className="relative leading-[20px] inline-block min-w-[75px] whitespace-nowrap">
              {rp965500}
            </div>
            <div className="relative text-xs leading-[17px] text-danger-500 inline-block min-w-[74px] whitespace-nowrap">
              {rp1097500}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
