import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const Desktop = () => {
  return (
    <div className="w-full relative bg-background-100 overflow-hidden flex flex-col items-end justify-start gap-[64px] leading-[normal] tracking-[normal] text-left text-xl text-black font-display-1-56px-semibold mq450:gap-[16px] mq750:gap-[32px]">
      <div className="w-0 h-0 absolute !m-[0] top-[59px] left-[498px] font-semibold inline-block mq450:text-base" />
      <FrameComponent3 />
      <main className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
        <section className="w-[1221px] flex flex-col items-start justify-start gap-[80px] max-w-full text-left text-29xl text-neutral-900 font-display-1-56px-semibold mq450:gap-[20px] mq750:gap-[40px]">
          <FrameComponent2 />
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center pt-0 px-0 pb-16 gap-[24px]">
            <img
              className="self-stretch flex-1 relative max-w-[183px] overflow-hidden max-h-full min-w-[180px] min-h-[121px]"
              loading="lazy"
              alt=""
              src="/berlutilogowine.svg"
            />
            <img
              className="self-stretch flex-1 relative max-w-[183px] overflow-hidden max-h-full min-w-[180px] min-h-[121px]"
              loading="lazy"
              alt=""
              src="/guccilogowine.svg"
            />
            <img
              className="self-stretch flex-1 relative max-w-[183px] overflow-hidden max-h-full object-contain min-w-[180px] min-h-[121px]"
              loading="lazy"
              alt=""
              src="/jimmy-choo-ltdlogowine@2x.png"
            />
            <img
              className="self-stretch flex-1 relative max-w-[183px] overflow-hidden max-h-full min-w-[180px] min-h-[121px]"
              loading="lazy"
              alt=""
              src="/burberrylogowine.svg"
            />
            <img
              className="self-stretch flex-1 relative max-w-[183px] overflow-hidden max-h-full min-w-[180px] min-h-[121px]"
              loading="lazy"
              alt=""
              src="/balenciagalogowine.svg"
            />
            <img
              className="self-stretch flex-1 relative max-w-[183px] overflow-hidden max-h-full min-w-[180px] min-h-[121px]"
              loading="lazy"
              alt=""
              src="/louis-vuittonlogowine.svg"
            />
          </div>
          <FrameComponent1 />
          <div className="self-stretch flex flex-col items-end justify-start max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start py-20 px-0 box-border gap-[32px] max-w-full mq750:gap-[16px] mq750:pt-[52px] mq750:pb-[52px] mq750:box-border">
              <div className="self-stretch flex flex-row flex-wrap items-end justify-start max-w-full [row-gap:20px]">
                <h1 className="m-0 flex-1 relative text-inherit leading-[53px] font-semibold font-inherit inline-block min-w-[195px] max-w-full mq450:text-10xl mq450:leading-[32px] mq750:text-19xl mq750:leading-[42px]">
                  Bestsellers
                </h1>
                <button className="cursor-pointer [border:none] py-3 px-8 bg-darksalmon rounded-lg flex flex-row items-center justify-center gap-[8px]">
                  <img
                    className="h-5 w-5 relative hidden"
                    alt=""
                    src="/iconlylightoutlinearrow--right2.svg"
                  />
                  <b className="relative text-base leading-[140%] inline-block font-label-2-10px-regular text-neutral-900 text-left min-w-[54px]">
                    See All
                  </b>
                  <img
                    className="h-5 w-5 relative hidden"
                    alt=""
                    src="/iconlylightoutlinearrow--right2.svg"
                  />
                </button>
              </div>
              <div className="self-stretch grid flex-row items-start justify-start gap-[24px] grid-cols-[repeat(4,_minmax(215px,_1fr))] text-xl font-label-2-10px-regular mq450:grid-cols-[minmax(215px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(215px,_373px))]">
                <FrameComponent
                  aa81bd85178473fA156591d24="/9aa81bd85178473fa156591d243c5c7c-1@2x.png"
                  sneaker="Sneaker"
                  rp965500="Rp. 965.500"
                  rp1097500="Rp. 1.097.500"
                />
                <div className="rounded-lg flex flex-col items-start justify-start pt-3.5 px-[15px] pb-[18px] gap-[16px] border-[1px] border-solid border-background-900">
                  <img
                    className="w-[255px] h-[255px] relative rounded-lg object-cover"
                    loading="lazy"
                    alt=""
                    src="/image-5@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative leading-[140%] font-medium mq450:text-base mq450:leading-[22px]">
                      Women's Robes
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-500">
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
                      <div className="relative leading-[20px] text-neutral-900 inline-block min-w-[75px] whitespace-nowrap">
                        Rp. 755.000
                      </div>
                    </div>
                  </div>
                </div>
                <FrameComponent
                  aa81bd85178473fA156591d24="/6b39f25e88f345fdb5b9d42812af8437-1@2x.png"
                  sneaker="Bag"
                  rp965500="Rp. 920.500"
                  rp1097500="Rp. 1.000.500"
                  propBorder="1px solid #e6e6e6"
                  propMinWidth="36px"
                  propGap="4px"
                />
                <div className="rounded-lg flex flex-col items-start justify-start py-3.5 px-[15px] gap-[16px] border-[1px] border-solid border-background-900">
                  <img
                    className="w-[255px] h-[255px] relative rounded-lg object-cover"
                    loading="lazy"
                    alt=""
                    src="/image-6@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start py-0 px-2 gap-[8px]">
                    <div className="relative leading-[140%] font-medium inline-block min-w-[117px] mq450:text-base mq450:leading-[22px]">
                      Men's Robes
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[8px] text-sm text-neutral-500">
                      <div className="flex flex-row items-start justify-start gap-[4px]">
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
                      <div className="flex flex-row items-center justify-start text-neutral-900">
                        <div className="relative leading-[20px] inline-block min-w-[75px] whitespace-nowrap">
                          Rp. 680.000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-2xl bg-primary-300 flex flex-col items-center justify-start py-20 px-5 box-border gap-[24px] max-w-full z-[1]">
              <div className="w-[520px] flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
                <h1 className="m-0 relative text-inherit leading-[53px] font-semibold font-inherit mq450:text-10xl mq450:leading-[32px] mq750:text-19xl mq750:leading-[42px]">
                  The Easy Way to Order
                </h1>
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-[22px] box-border max-w-full text-xl font-label-2-10px-regular">
                  <div className="w-[453.5px] flex flex-row items-end justify-start gap-[0.3px] max-w-full mq750:flex-wrap">
                    <div className="h-11 w-11 rounded-81xl bg-primary-200 flex flex-row items-start justify-start py-2 px-4 box-border">
                      <b className="relative leading-[140%] inline-block min-w-[12px] mq450:text-base mq450:leading-[22px]">
                        1
                      </b>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[21px] box-border min-w-[60px]">
                      <div className="self-stretch h-px relative box-border border-t-[1px] border-dashed border-primary-700" />
                    </div>
                    <div className="h-11 w-11 rounded-81xl bg-primary-200 flex flex-row items-start justify-start py-2 px-4 box-border">
                      <b className="relative leading-[140%] inline-block min-w-[12px] mq450:text-base mq450:leading-[22px]">
                        2
                      </b>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[21px] box-border min-w-[60px]">
                      <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-dashed border-primary-700" />
                    </div>
                    <div className="h-11 w-11 rounded-81xl bg-primary-200 flex flex-row items-start justify-start py-2 px-4 box-border">
                      <b className="relative leading-[140%] inline-block min-w-[12px] mq450:text-base mq450:leading-[22px]">
                        3
                      </b>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[21px] box-border min-w-[60px]">
                      <div className="self-stretch h-px relative box-border border-t-[1px] border-dashed border-primary-700" />
                    </div>
                    <div className="h-11 w-11 rounded-81xl bg-primary-200 flex flex-row items-start justify-start py-2 px-4 box-border">
                      <b className="relative leading-[140%] inline-block min-w-[12px] mq450:text-base mq450:leading-[22px]">
                        4
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[520px] flex flex-row items-start justify-start py-0 pr-3 pl-[12.5px] box-border max-w-full text-base text-neutral-500 font-label-2-10px-regular">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full">
                  <div className="relative leading-[140%] inline-block min-w-[107px]">
                    Select Product
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pr-px pl-0">
                    <div className="relative leading-[140%] inline-block min-w-[108px]">
                      Login/Register
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border min-w-[81px]">
                    <div className="relative leading-[140%] inline-block min-w-[100px]">
                      Shopping bag
                    </div>
                  </div>
                  <div className="relative leading-[140%] inline-block min-w-[64px]">
                    Payment
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start py-20 px-5 box-border gap-[32px] max-w-full z-[2] text-center mq450:gap-[16px]">
              <h1 className="m-0 w-[590px] relative text-inherit leading-[53px] font-semibold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[32px] mq750:text-19xl mq750:leading-[42px]">
                Subscribe Our Newsletter
              </h1>
              <div className="w-[808px] flex flex-row flex-wrap items-center justify-center gap-[24px] max-w-full">
                <div className="flex-1 rounded-lg box-border flex flex-row items-center justify-start py-1.5 px-2.5 min-w-[93px] max-w-full border-[1px] border-solid border-neutral-300">
                  <input
                    className="w-[93px] [border:none] [outline:none] font-label-2-10px-regular text-sm bg-[transparent] h-5 relative leading-[140%] text-neutral-300 text-left inline-block p-0"
                    placeholder="Type your mail"
                    type="text"
                  />
                </div>
                <div className="rounded-lg bg-darksalmon flex flex-row items-center justify-center p-2">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/haruki-icons-7.svg"
                  />
                </div>
              </div>
            </div>
            <footer className="self-stretch flex flex-row items-start justify-between py-20 px-0 box-border max-w-full gap-[20px] z-[3] text-left text-xl text-neutral-900 font-label-2-10px-regular mq1050:flex-wrap mq1050:justify-center">
              <div className="w-[285px] flex flex-col items-start justify-start gap-[16px] font-display-1-56px-semibold">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="h-6 w-6 relative"
                    loading="lazy"
                    alt=""
                    src="/subtract.svg"
                  />
                  <div className="relative font-semibold inline-block min-w-[77px] mq450:text-base">
                    DressLy
                  </div>
                </div>
                <div className="self-stretch relative text-base leading-[140%] font-label-2-10px-regular text-neutral-500">
                  We are an online fashion store that provides a variety of the
                  latest and trendy fashion products for men and women. We
                  always try to provide our customers with a pleasant and easy
                  shopping experience.
                </div>
              </div>
              <div className="w-[349px] flex flex-row items-start justify-start gap-[64px] max-w-full mq450:flex-wrap mq450:gap-[32px]">
                <div className="flex flex-col items-start justify-start gap-[16px] min-w-[165px] mq450:flex-1">
                  <div className="relative leading-[140%] font-medium mq450:text-base mq450:leading-[22px]">
                    Product Category
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[8px] text-base text-neutral-500">
                    <div className="relative leading-[140%]">
                      Women's clothing
                    </div>
                    <div className="relative leading-[140%] inline-block min-w-[76px]">
                      Menswear
                    </div>
                    <div className="relative leading-[140%] inline-block min-w-[85px]">
                      Accessories
                    </div>
                    <div className="relative leading-[140%] inline-block min-w-[44px]">
                      Shoes
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[16px] min-w-[120px] mq450:flex-1">
                  <div className="relative leading-[140%] font-medium inline-block min-w-[87px] mq450:text-base mq450:leading-[22px]">
                    Company
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[8px] text-base text-neutral-500">
                    <div className="relative leading-[140%] inline-block min-w-[46px]">{`About `}</div>
                    <div className="relative leading-[140%] inline-block min-w-[57px]">
                      Contact
                    </div>
                    <div className="relative leading-[140%] inline-block min-w-[99px]">
                      Privacy Policy
                    </div>
                    <div className="relative leading-[140%] inline-block min-w-[120px]">
                      Terms of Service
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[343px] flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[16px] max-w-full">
                <div className="relative leading-[140%] font-medium mq450:text-base mq450:leading-[22px]">
                  Download Our App
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-3xs text-neutral-100 mq450:flex-wrap">
                  <div className="rounded-lg bg-neutral-900 flex flex-row items-center justify-center py-2 px-[31px] gap-[8px]">
                    <img
                      className="h-6 w-[19.8px] relative"
                      alt=""
                      src="/app-store-icon.svg"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative inline-block min-w-[78px]">
                        Download on the
                      </div>
                      <div className="relative text-sm leading-[20px] font-medium inline-block min-w-[65px]">{`App Store `}</div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] pt-[9.5px] px-[37.9px] pb-[9.4px] bg-neutral-900 flex-1 rounded-lg flex flex-row items-center justify-center box-border gap-[8px] min-w-[109px]">
                    <img
                      className="h-5 w-[18.7px] relative"
                      alt=""
                      src="/group-3.svg"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                      <div className="relative text-3xs font-label-2-10px-regular text-white text-left inline-block min-w-[47px]">
                        GET IT ON
                      </div>
                      <img
                        className="self-stretch h-[13.1px] relative max-w-full overflow-hidden shrink-0"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Desktop;
