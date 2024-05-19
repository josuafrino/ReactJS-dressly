const FrameComponent2 = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-12 box-border gap-[24px] max-w-full text-left text-33xl-4 text-neutral-900 font-display-1-56px-semibold mq750:pb-[31px] mq750:box-border">
      <div className="flex-1 flex flex-col items-start justify-start pt-[113.5px] px-0 pb-0 box-border min-w-[389px] max-w-full mq450:pt-[74px] mq450:box-border mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] mq750:gap-[20px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch relative tracking-[-0.02em] leading-[110%] font-semibold mq450:text-12xl mq450:leading-[35px] mq750:text-23xl mq750:leading-[46px]">
              Discover the Latest Fashion Trends
            </div>
            <div className="self-stretch relative text-base leading-[140%] font-label-2-10px-regular text-neutral-500">
              From stylish dresses to trendy tops and must-have accessories, we
              have everything you need to stay on top of the latest fashion
              trends. Our expertly curated collection features the hottest
              styles from top designers, so you can always find the perfect look
              for any occasion. Shop now and discover your new favorite fashion
              pieces.
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[11px] px-5 bg-darksalmon w-[286px] rounded-[7.48px] flex flex-row items-start justify-center box-border gap-[7.5px]">
            <img
              className="h-[18.7px] w-[18.7px] relative hidden"
              alt=""
              src="/iconlylightoutlinearrow--right.svg"
            />
            <b className="relative text-mini leading-[140%] inline-block font-label-2-10px-regular text-neutral-900 text-left min-w-[72px]">
              Shop Now
            </b>
            <img
              className="h-[18.7px] w-[18.7px] relative hidden"
              alt=""
              src="/iconlylightoutlinearrow--right1.svg"
            />
          </button>
        </div>
      </div>
      <div className="h-[560px] flex-1 relative min-w-[389px] max-w-full mq750:min-w-full">
        <img
          className="absolute h-[65.34%] w-[66.59%] top-[0%] right-[0.12%] bottom-[34.66%] left-[33.29%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/mask-group@2x.png"
        />
        <img
          className="absolute h-[47.04%] w-[44.35%] top-[52.96%] right-[47.11%] bottom-[0%] left-[8.55%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
          alt=""
          src="/mask-group-1@2x.png"
        />
        <img
          className="absolute h-[47.04%] w-[44.35%] top-[52.96%] right-[0%] bottom-[0%] left-[55.65%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/mask-group-2@2x.png"
        />
        <div className="absolute h-[46.2%] w-[79.52%] top-[0%] right-[53.28%] bottom-[53.8%] left-[-32.79%] z-[1]">
          <img
            className="relative w-[475.5px] h-[102.1px]"
            alt=""
            src="/subtract-1.svg"
          />
          <img
            className="absolute h-[45.92%] w-[25.09%] top-[0%] right-[22.92%] bottom-[54.08%] left-[51.99%] rounded-5xl-5 max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/rectangle-20.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
