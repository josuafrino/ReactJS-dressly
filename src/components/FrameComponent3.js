const FrameComponent3 = () => {
  return (
    <header className="self-stretch flex flex-row items-start justify-end py-12 px-[110px] box-border gap-[16px] max-w-full z-[1] text-left text-xl text-neutral-900 font-display-1-56px-semibold mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[55px] mq750:pr-[55px] mq750:box-border">
      <div className="flex-1 flex flex-row items-center justify-start gap-[40px] max-w-full mq750:gap-[20px]">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative"
            loading="lazy"
            alt=""
            src="/subtract.svg"
          />
          <div className="relative font-semibold inline-block min-w-[77px] whitespace-nowrap">
            DressLy
          </div>
        </div>
        <nav className="m-0 flex-1 flex flex-row items-center justify-center py-0 px-5 box-border gap-[32px] max-w-full text-left text-base text-neutral-700 font-paragraph-1-16px-semibold lg:hidden mq450:gap-[16px]">
          <div className="relative leading-[140%] font-semibold inline-block min-w-[42px]">
            Shop
          </div>
          <div className="relative leading-[140%] font-semibold inline-block min-w-[102px] whitespace-nowrap">
            New Arrivals
          </div>
          <div className="relative leading-[140%] font-semibold inline-block min-w-[35px]">
            Sale
          </div>
          <div className="relative leading-[140%] font-semibold inline-block min-w-[36px]">
            Blog
          </div>
        </nav>
      </div>
      <div className="flex flex-row items-start justify-end gap-[24px]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/haruki-icons.svg"
        />
        <input
          className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          type="checkbox"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/haruki-icons-2.svg"
        />
      </div>
    </header>
  );
};

export default FrameComponent3;
