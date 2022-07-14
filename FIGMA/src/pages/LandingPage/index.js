import React from "react";

import { Column, Stack, Row, Text, Image, Input } from "components";

const LandingPagePage = () => {
  return (
    <>
      <Column
        className="bg-cover bg-repeat bg-white_A700 font-rockd items-start justify-start mx-[auto] w-[100%]"
        style={{ backgroundImage: "url('images/img_frame.png')" }}
      >
        <header className="ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] w-[91%]">
          <Stack className="bg-gray_900 lg:h-[63px] xl:h-[72px] 2xl:h-[81px] h-[97px] 3xl:h-[98px] rounded-bl-[0] rounded-br-[100px] rounded-tl-[0] rounded-tr-[0] shadow-bs w-[100%]">
            <div className="absolute overflow-x-auto w-[100%]">
              <Stack className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] h-[97px] 3xl:h-[98px] rounded-bl-[0] rounded-br-[100px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <div className="absolute bg-gray_900 h-[105px] 3xl:h-[106px] lg:h-[69px] xl:h-[78px] 2xl:h-[88px] rounded-bl-[0] rounded-br-[100px] rounded-tl-[0] rounded-tr-[0] shadow-bs w-[100%]"></div>
                <Row className="absolute bottom-[6%] items-end justify-start w-[100%]">
                  <Text className="hover:bg-white_A700 cursor-pointer font-hotpizza hover:font-normal font-normal mb-[12px] lg:mb-[7px] xl:mb-[8px] mt-[13px] lg:mt-[8px] xl:mt-[9px] 2xl:my-[10px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] text-[28px] hover:text-gray_600 text-shadow-ts text-white_A700 w-[auto]">
                    Home
                  </Text>
                  <Text className="hover:bg-white_A700 cursor-pointer font-hotpizza hover:font-normal font-normal mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] mt-[13px] lg:mt-[8px] xl:mt-[9px] 2xl:my-[10px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] text-[28px] hover:text-gray_600 text-shadow-ts text-white_A700 w-[auto]">
                    Kitchen
                  </Text>
                  <Text className="hover:bg-white_A700 cursor-pointer font-hotpizza hover:font-normal font-normal mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] mt-[13px] lg:mt-[8px] xl:mt-[9px] 2xl:my-[10px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] text-[28px] hover:text-gray_600 text-shadow-ts text-white_A700 w-[auto]">
                    Recipes
                  </Text>
                  <Text className="hover:bg-white_A700 cursor-pointer font-hotpizza hover:font-normal font-normal mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] mt-[13px] lg:mt-[8px] xl:mt-[9px] 2xl:my-[10px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] text-[28px] hover:text-gray_600 text-shadow-ts text-white_A700 w-[auto]">
                    FAQ
                  </Text>
                  <Text className="bg-white_A700 cursor-pointer font-arial hover:font-normal font-normal leading-[normal] lg:ml-[484px] xl:ml-[553px] 2xl:ml-[622px] ml-[747px] lg:pb-[13px] xl:pb-[15px] 2xl:pb-[17px] pb-[21px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] pl-[29px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] pt-[20px] rounded-radius30 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_600 text-left w-[22%]">
                    find a recipe...
                  </Text>
                  <Image
                    src={"images/img_searchimage_1.png"}
                    className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] h-[42px] 3xl:h-[43px] xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] mb-[5px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] object-contain lg:w-[27px] xl:w-[31px] 2xl:w-[35px] w-[42px]"
                    alt="Searchimage"
                  />
                </Row>
              </Stack>
            </div>
            <Row className="absolute items-center justify-center right-[34%] w-[26%]">
              <Image
                src={"images/img_logo_2.png"}
                className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] h-[97px] 3xl:h-[98px] object-contain w-[30%]"
                alt="Logo"
              />
              <Text className="font-normal lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] mb-[18px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] ml-[35px] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] not-italic lg:text-[38px] xl:text-[44px] 2xl:text-[50px] text-[60px] text-shadow-ts text-white_A700 w-[auto]">
                Cookbook
              </Text>
            </Row>
          </Stack>
        </header>
        <Column className="font-hotpizza items-center lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] mt-[59px] pl-[119px] lg:pl-[77px] xl:pl-[88px] 2xl:pl-[99px] pr-[109px] lg:pr-[70px] xl:pr-[80px] 2xl:pr-[90px] w-[100%]">
          <Column className="bg-gray_900_cc items-center justify-start pb-[10px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] lg:pl-[44px] xl:pl-[50px] 2xl:pl-[56px] pl-[68px] lg:pr-[58px] xl:pr-[66px] 2xl:pr-[75px] pr-[90px] lg:pt-[40px] xl:pt-[46px] 2xl:pt-[52px] pt-[63px] rounded-radius50 w-[100%]">
            <Row className="items-center justify-between w-[100%]">
              <Image
                src={"images/img_cocktails.png"}
                className="lg:h-[166px] xl:h-[190px] 2xl:h-[214px] h-[256px] 3xl:h-[257px] object-contain rounded-radius501 w-[auto]"
                alt="Cocktails"
              />
              <Image
                src={"images/img_redcurry.png"}
                className="lg:h-[166px] xl:h-[190px] 2xl:h-[214px] h-[256px] 3xl:h-[257px] object-contain rounded-radius501 w-[auto]"
                alt="Redcurry"
              />
              <Image
                src={"images/img_riceballs.png"}
                className="lg:h-[166px] xl:h-[190px] 2xl:h-[214px] h-[256px] 3xl:h-[257px] object-contain rounded-radius501 w-[auto]"
                alt="Riceballs"
              />
              <Image
                src={"images/img_burgers.png"}
                className="lg:h-[166px] xl:h-[190px] 2xl:h-[214px] h-[256px] 3xl:h-[257px] object-contain rounded-radius501 w-[auto]"
                alt="Burgers"
              />
            </Row>
            <Row className="items-center justify-between lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] ml-[54px] lg:mr-[42px] xl:mr-[48px] 2xl:mr-[54px] mr-[65px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] mt-[24px] w-[91%]">
              <Text className="font-normal lg:text-[20px] xl:text-[23px] 2xl:text-[26px] text-[32px] text-white_A700 w-[auto]">
                Cocktails
              </Text>
              <Text className="font-normal lg:text-[20px] xl:text-[23px] 2xl:text-[26px] text-[32px] text-white_A700 w-[auto]">
                Soups
              </Text>
              <Text className="font-normal lg:text-[20px] xl:text-[23px] 2xl:text-[26px] text-[32px] text-white_A700 w-[auto]">
                Riceballs
              </Text>
              <Text className="font-normal lg:text-[20px] xl:text-[23px] 2xl:text-[26px] text-[32px] text-white_A700 w-[auto]">
                Burgers
              </Text>
            </Row>
            <Row className="items-center justify-between lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] mt-[47px] w-[100%]">
              <Image
                src={"images/img_milkshakes.png"}
                className="lg:h-[166px] xl:h-[190px] 2xl:h-[214px] h-[256px] 3xl:h-[257px] object-contain rounded-radius501 w-[auto]"
                alt="Milkshakes"
              />
              <Image
                src={"images/img_salads.png"}
                className="lg:h-[166px] xl:h-[190px] 2xl:h-[214px] h-[256px] 3xl:h-[257px] object-contain rounded-radius501 w-[auto]"
                alt="Salads"
              />
              <Image
                src={"images/img_frozenyoghurt.png"}
                className="lg:h-[166px] xl:h-[190px] 2xl:h-[214px] h-[256px] 3xl:h-[257px] object-contain rounded-radius501 w-[auto]"
                alt="FrozenYoghurt"
              />
              <Image
                src={"images/img_waffles.png"}
                className="lg:h-[166px] xl:h-[190px] 2xl:h-[214px] h-[256px] 3xl:h-[257px] object-contain rounded-radius501 w-[auto]"
                alt="Waffles"
              />
            </Row>
            <Row className="items-center justify-between lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] ml-[40px] lg:mr-[42px] xl:mr-[48px] 2xl:mr-[55px] mr-[66px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] mt-[22px] w-[92%]">
              <Text className="font-normal lg:text-[20px] xl:text-[23px] 2xl:text-[26px] text-[32px] text-white_A700 w-[auto]">
                Milkshakes
              </Text>
              <Text className="font-normal lg:text-[20px] xl:text-[23px] 2xl:text-[26px] text-[32px] text-white_A700 w-[auto]">
                Salads
              </Text>
              <Text className="font-normal lg:text-[20px] xl:text-[23px] 2xl:text-[26px] text-[32px] text-white_A700 w-[auto]">
                Iced Drinks
              </Text>
              <Text className="font-normal lg:text-[20px] xl:text-[23px] 2xl:text-[26px] text-[32px] text-white_A700 w-[auto]">
                Waffles
              </Text>
            </Row>
          </Column>
        </Column>
        <footer className="bg-gray_900 font-montserrat lg:mt-[33px] xl:mt-[37px] 2xl:mt-[42px] mt-[51px] shadow-bs w-[100%]">
          <Row className="items-end justify-center 2xl:mb-[12px] mb-[15px] lg:mb-[9px] lg:mt-[10px] 2xl:mt-[13px] mt-[16px] mx-[auto] xl:my-[11px] w-[55%]">
            <Image
              src={"images/img_logo_3.png"}
              className="h-[118px] 3xl:h-[119px] lg:h-[77px] xl:h-[88px] 2xl:h-[99px] object-contain w-[11%]"
              alt="Logo"
            />
            <Column className="items-start justify-start mb-[0] lg:ml-[23px] xl:ml-[27px] 2xl:ml-[30px] ml-[37px] xl:mt-[10px] 2xl:mt-[11px] mt-[14px] lg:mt-[9px] w-[85%]">
              <Row className="items-start justify-start ml-[1px] w-[86%]">
                <Text className="font-normal mb-[0] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-white_A700 w-[auto]">
                  About Us
                </Text>
                <Text className="font-normal 2xl:mb-[1px] xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] ml-[52px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-white_A700 w-[auto]">
                  Contact
                </Text>
                <Text className="font-normal mb-[0] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] ml-[87px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-white_A700 w-[auto]">
                  Social Media
                </Text>
                <Text className="font-normal lg:ml-[36px] xl:ml-[41px] 2xl:ml-[46px] ml-[56px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-white_A700 w-[auto]">
                  Join Our Newsletter
                </Text>
              </Row>
              <Row className="items-start justify-start xl:mt-[2px] lg:mt-[2px] 2xl:mt-[3px] mt-[4px] w-[100%]">
                <Text className="font-montserrat font-normal leading-[normal] mb-[11px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-left text-white_A700 w-[15%]">
                  Help
                  <br />
                  Jobs
                  <br />
                  Privacy
                  <br />
                  Terms of Service
                </Text>
                <Text className="font-montserrat font-normal leading-[normal] lg:mb-[1px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] ml-[29px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-left text-white_A700 w-[13%]">
                  Support
                  <br />
                  Contact
                  <br />
                  Sponsorship
                  <br />
                  Cookies Policy
                </Text>
                <Image
                  src={"images/img_socialmediaim_1.png"}
                  className="lg:h-[48px] xl:h-[55px] 2xl:h-[61px] h-[73px] 3xl:h-[74px] lg:ml-[39px] xl:ml-[45px] 2xl:ml-[50px] ml-[61px] object-contain w-[12%]"
                  alt="SocialMediaIm"
                />
                <Input
                  className="bg-transparent border-0 font-arial font-normal 2xl:pb-[10px] pb-[13px] lg:pb-[8px] xl:pb-[9px] lg:pl-[11px] xl:pl-[12px] 2xl:pl-[14px] pl-[17px] lg:pr-[22px] xl:pr-[25px] 2xl:pr-[29px] pr-[35px] xl:pt-[10px] 2xl:pt-[11px] pt-[14px] lg:pt-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                  WrapClassName="2xl:mb-[15px] 2xl:ml-[67px] 2xl:mt-[6px] bg-white_A700 lg:mb-[11px] lg:ml-[52px] lg:mt-[5px] mb-[18px] ml-[81px] mt-[8px] rounded-radius30 w-[32%] xl:mb-[13px] xl:ml-[60px] xl:mt-[5px]"
                  name="Group10"
                  placeholder="Enter your E-Mail"
                ></Input>
                <Image
                  src={"images/img_emailimg_1.png"}
                  className="lg:h-[26px] xl:h-[29px] 2xl:h-[33px] h-[39px] 3xl:h-[40px] lg:mb-[16px] xl:mb-[18px] 2xl:mb-[20px] mb-[25px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] ml-[6px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] object-contain w-[6%]"
                  alt="EMailimg"
                />
              </Row>
            </Column>
          </Row>
        </footer>
      </Column>
    </>
  );
};

export default LandingPagePage;
