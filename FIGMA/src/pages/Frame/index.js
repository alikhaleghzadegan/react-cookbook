import React from "react";

import { Column, Stack, Row, Text, Image, Input } from "components";

const FramePage = () => {
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
                    src={"images/img_searchimage.png"}
                    className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] h-[42px] 3xl:h-[43px] xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] mb-[5px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] object-contain lg:w-[27px] xl:w-[31px] 2xl:w-[35px] w-[42px]"
                    alt="Searchimage"
                  />
                </Row>
              </Stack>
            </div>
            <Row className="absolute items-center justify-center right-[34%] w-[26%]">
              <Image
                src={"images/img_logo.png"}
                className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] h-[97px] 3xl:h-[98px] object-contain w-[30%]"
                alt="Logo"
              />
              <Text className="font-normal lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] mb-[18px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] ml-[35px] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] not-italic lg:text-[38px] xl:text-[44px] 2xl:text-[50px] text-[60px] text-shadow-ts text-white_A700 w-[auto]">
                Cookbook
              </Text>
            </Row>
          </Stack>
        </header>
        <Column className="font-hotpizza items-end lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] mt-[63px] lg:pr-[126px] xl:pr-[144px] 2xl:pr-[162px] pr-[195px] w-[100%]">
          <Stack className="lg:h-[518px] xl:h-[592px] 2xl:h-[666px] h-[798px] 3xl:h-[799px] rounded-radius50 w-[78%]">
            <Column className="absolute bg-black_900_b2 items-center justify-center lg:pb-[12px] xl:pb-[14px] 2xl:pb-[16px] pb-[20px] xl:pl-[108px] 2xl:pl-[121px] pl-[146px] lg:pl-[94px] xl:pr-[106px] 2xl:pr-[120px] pr-[144px] lg:pr-[93px] xl:pt-[106px] 2xl:pt-[120px] pt-[144px] lg:pt-[93px] rounded-bl-[50px] rounded-br-[50px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
              <Row className="items-center justify-start w-[100%]">
                <Column className="bg-lime_700_33 lg:pb-[40px] xl:pb-[46px] 2xl:pb-[52px] pb-[63px] pl-[11px] lg:pl-[7px] xl:pl-[8px] 2xl:pl-[9px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] pt-[20px] rounded-radius50 w-[50%]">
                  <Text className="font-hotpizza font-normal ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] text-[28px] text-white_A700 w-[auto]">
                    What is that?
                  </Text>
                  <Text className="font-arapey font-normal leading-[normal] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] text-[18px] text-left text-white_A700 w-[91%]">
                    Prepare to be blasted in the cosmos with the force of a
                    thousand asteroids by the unstable, universally feared Pan
                    Galactic Gargle Blaster. As described by Douglas Adams in
                    'The Hitchhiker's Guide to the Galaxy,' The Pan Galactic
                    Gargle Blaster is an alcoholic beverage invented by
                    ex-President of the Universe Zaphod Beeblebrox, considered
                    by the Guide to be the 'Best Drink in Existence.' Its
                    effects are similar to 'having your brains smashed in by a
                    slice of lemon wrapped round a large gold brick.' Beeblebrox
                    advised that you should 'never drink more than two Pan
                    Galactic Gargle Blasters unless you are a thirty ton mega
                    elephant with bronchial pneumonia.'
                  </Text>
                </Column>
                <Stack className="lg:h-[255px] xl:h-[292px] 2xl:h-[328px] h-[393px] 3xl:h-[394px] w-[50%]">
                  <Column className="absolute items-center justify-start w-[100%]">
                    <div className="bg-lime_700_33 lg:h-[28px] xl:h-[32px] 2xl:h-[36px] h-[43px] 3xl:h-[44px] rounded-bl-[0] rounded-br-[0] rounded-tl-[50px] rounded-tr-[50px] w-[100%]"></div>
                    <Column className="bg-lime_700_33 items-start justify-center lg:pb-[35px] xl:pb-[40px] 2xl:pb-[45px] pb-[55px] 2xl:pl-[10px] pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[15px] pt-[19px] rounded-bl-[50px] rounded-br-[50px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <Row className="items-center justify-start w-[50%]">
                        <Stack className="lg:h-[25px] xl:h-[29px] 2xl:h-[32px] h-[38px] 3xl:h-[39px] mb-[1px] w-[46%]">
                          <Text className="absolute font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] text-[22px] text-white_A700 w-[auto]">
                            Needs
                          </Text>
                          <div className="absolute bg-lime_700_33 lg:h-[25px] xl:h-[29px] 2xl:h-[32px] h-[38px] 3xl:h-[39px] w-[100%]"></div>
                        </Stack>
                        <Stack className="lg:h-[25px] xl:h-[29px] 2xl:h-[32px] h-[38px] 3xl:h-[39px] lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] ml-[17px] mt-[1px] w-[46%]">
                          <Text className="absolute bottom-[3%] font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] text-[22px] text-white_A700 w-[auto]">
                            Amount
                          </Text>
                          <div className="absolute bg-lime_700_33 lg:h-[25px] xl:h-[29px] 2xl:h-[32px] h-[38px] 3xl:h-[39px] w-[100%]"></div>
                        </Stack>
                      </Row>
                      <Column className="font-arapey items-center xl:mr-[3px] lg:mr-[3px] 2xl:mr-[4px] mr-[5px] 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[99%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Column className="bg-lime_700_33 items-center justify-start lg:pb-[16px] xl:pb-[19px] 2xl:pb-[21px] pb-[26px] lg:pl-[2px] 2xl:pl-[3px] pl-[4px] lg:pr-[1px] 2xl:pr-[2px] pr-[3px] xl:px-[2px] w-[23%]">
                            <Text className="font-normal leading-[normal] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-left text-white_A700 w-[100%]">
                              Sugar
                              <br />
                              Bitters
                              <br />
                              Water
                              <br />
                              Gin
                              <br />
                              Tequila
                              <br />
                              Peppermint <br />
                              Schnapps
                              <br />
                              Olive
                              <br />
                              Crushed Ice
                            </Text>
                          </Column>
                          <Stack className="lg:h-[146px] xl:h-[167px] 2xl:h-[187px] h-[224px] 3xl:h-[225px] w-[25%]">
                            <div className="absolute bg-lime_700_33 lg:h-[146px] xl:h-[167px] 2xl:h-[187px] h-[224px] 3xl:h-[225px] w-[93%]"></div>
                            <Text className="absolute font-normal inset-x-[0] leading-[normal] mx-[auto] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-left text-white_A700 w-[97%]">
                              1x Sponcup
                              <br />1 x Drop
                              <br />
                              1 Teaspoons
                              <br />3 x Ounces
                              <br />2 x Ounces
                              <br />1 x Ounce
                              <br />1 Piece
                              <br />
                              As desired
                            </Text>
                          </Stack>
                          <Image
                            src={"images/img_cocktail.png"}
                            className="lg:h-[133px] xl:h-[152px] 2xl:h-[171px] h-[204px] 3xl:h-[205px] lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] mb-[17px] lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] object-contain rounded-radius995 w-[46%]"
                            alt="Cocktail"
                          />
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Text className="absolute font-normal left-[3%] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] text-[28px] text-white_A700 top-[5%] w-[auto]">
                    Ingredients
                  </Text>
                </Stack>
              </Row>
              <Column className="bg-lime_700_33 items-start justify-center lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] lg:pb-[11px] xl:pb-[12px] 2xl:pb-[14px] pb-[17px] lg:pl-[19px] xl:pl-[22px] 2xl:pl-[25px] pl-[30px] lg:pt-[18px] xl:pt-[20px] 2xl:pt-[23px] pt-[28px] rounded-radius50 w-[100%]">
                <Text className="font-normal lg:text-[15px] xl:text-[17px] 2xl:text-[20px] text-[24px] text-white_A700 w-[auto]">
                  Description
                </Text>
                <Column className="font-arapey items-center xl:mr-[3px] lg:mr-[3px] 2xl:mr-[4px] mr-[5px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[99%]">
                  <Text className="font-normal leading-[normal] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] text-[18px] text-left text-white_A700 w-[100%]">
                    Place sugar cube on a small vessel. Fuse salt and water
                    together in a concave apparatus until dissolved to yield
                    Santraginus V sea water. Combine the Santraginus V sea
                    water, Arcturan Mega-gin (gin), and O'l Janx Spirit
                    (tequila) in a serving vessel. Decant Qualactin Hypermint
                    extract (schnapps) over the back of a spoon held just above
                    the liquid's surface. Transfer the Algolian Suntiger tooth
                    into the concoction; let dissolve. product. 'Drink... but...
                    very carefully...'
                  </Text>
                </Column>
              </Column>
            </Column>
            <Column className="absolute items-start justify-start w-[100%]">
              <Column className="font-hotpizza items-center w-[100%]">
                <Stack className="lg:h-[52px] xl:h-[60px] 2xl:h-[67px] h-[80px] 3xl:h-[81px] w-[100%]">
                  <div className="absolute bg-bluegray_100_33 lg:h-[52px] xl:h-[60px] 2xl:h-[67px] h-[80px] 3xl:h-[81px] left-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[50px] rounded-tr-[50px] w-[100%]"></div>
                  <Text className="absolute bottom-[9%] font-normal inset-x-[0] mx-[auto] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] text-[36px] text-white_A700 w-[max-content]">
                    The Pangalactic Gargle Blaster
                  </Text>
                </Stack>
              </Column>
              <Text className="font-arapey font-normal italic 2xl:ml-[107px] ml-[129px] lg:ml-[83px] xl:ml-[95px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] text-[24px] text-white_A700 w-[auto]">
                “An infamous cocktail known to be “the best drink in existence.”
              </Text>
            </Column>
          </Stack>
        </Column>
        <footer className="bg-gray_900 font-montserrat lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] shadow-bs w-[100%]">
          <Row className="items-end justify-center 2xl:mb-[12px] mb-[15px] lg:mb-[9px] lg:mt-[10px] 2xl:mt-[13px] mt-[16px] mx-[auto] xl:my-[11px] w-[55%]">
            <Image
              src={"images/img_logo_1.png"}
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
                  src={"images/img_socialmediaim.png"}
                  className="lg:h-[48px] xl:h-[55px] 2xl:h-[61px] h-[73px] 3xl:h-[74px] lg:ml-[39px] xl:ml-[45px] 2xl:ml-[50px] ml-[61px] object-contain w-[12%]"
                  alt="SocialMediaIm"
                />
                <Input
                  className="bg-transparent border-0 font-arial font-normal 2xl:pb-[10px] pb-[13px] lg:pb-[8px] xl:pb-[9px] lg:pl-[11px] xl:pl-[12px] 2xl:pl-[14px] pl-[17px] lg:pr-[22px] xl:pr-[25px] 2xl:pr-[29px] pr-[35px] xl:pt-[10px] 2xl:pt-[11px] pt-[14px] lg:pt-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                  WrapClassName="2xl:mb-[15px] 2xl:ml-[67px] 2xl:mt-[6px] bg-white_A700 lg:mb-[11px] lg:ml-[52px] lg:mt-[5px] mb-[18px] ml-[81px] mt-[8px] rounded-radius30 w-[32%] xl:mb-[13px] xl:ml-[60px] xl:mt-[5px]"
                  name="Group2"
                  placeholder="Enter your E-Mail"
                ></Input>
                <Image
                  src={"images/img_emailimg.png"}
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

export default FramePage;
