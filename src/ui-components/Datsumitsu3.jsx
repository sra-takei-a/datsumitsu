/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Datsumitsu3(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="844px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Datsumitsu3")}
    >
      <Text
        fontFamily="Inter"
        fontSize="26px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="30.46875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="291px"
        height="38px"
        position="absolute"
        top="33px"
        left="33px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="施設名"
        {...getOverrideProps(overrides, "\u65BD\u8A2D\u540D")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="291px"
        height="79px"
        position="absolute"
        top="230px"
        left="33px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="詳細情報 -----------------------------&#xA;--------------------------------------&#xA;--------------------------------------&#xA;--------------------------------------"
        {...getOverrideProps(
          overrides,
          "\u8A73\u7D30\u60C5\u5831 ----------------------------- -------------------------------------- -------------------------------------- --------------------------------------"
        )}
      ></Text>
      <Image
        width="133px"
        height="123px"
        position="absolute"
        top="80px"
        left="33px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "image2")}
      ></Image>
      <Image
        width="133px"
        height="123px"
        position="absolute"
        top="80px"
        left="195px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "image1")}
      ></Image>
      <View
        width="322px"
        height="352px"
        position="absolute"
        top="355px"
        left="33px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "map")}
      ></View>
    </View>
  );
}
