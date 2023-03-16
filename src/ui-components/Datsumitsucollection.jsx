/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function Datsumitsucollection(props) {
  const { FacilityProp, overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="252px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Datsumitsucollection")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="390px"
        height="252px"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Card")}
      >
        <Icon
          width="390px"
          height="252px"
          viewBox={{ minX: 0, minY: 0, width: 390, height: 252 }}
          paths={[
            {
              d: "M0 0L390 0L390 252L0 252L0 0Z",
              fill: "rgba(239,240,240,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Rectangle 1143")}
        ></Icon>
        <Flex
          gap="24px"
          position="absolute"
          top="221px"
          left="15.85px"
          width="126.83px"
          height="24px"
          alignItems="flex-start"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Share")}
        >
          <MyIcon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="favorite_border"
            {...getOverrideProps(overrides, "MyIcon31732866")}
          ></MyIcon>
          <MyIcon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="chat-bubble-outline"
            {...getOverrideProps(overrides, "MyIcon31732867")}
          ></MyIcon>
          <MyIcon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="send"
            {...getOverrideProps(overrides, "MyIcon31732868")}
          ></MyIcon>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="21.09375px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="307.56px"
          height="38px"
          position="absolute"
          top="14px"
          left="8.46px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={FacilityProp?.name}
          {...getOverrideProps(overrides, "\u65BD\u8A2D\u540D")}
        ></Text>
        <Image
          width="140.57px"
          height="123px"
          position="absolute"
          top="52px"
          left="8.46px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "image2")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16.40625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="216.67px"
          height="20px"
          position="absolute"
          top="114px"
          left="161.71px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={FacilityProp?.row}
          {...getOverrideProps(overrides, "\u6DF7\u96D1\u5EA6")}
        ></Text>
        <Button
          display="flex"
          gap="0"
          position="absolute"
          top="183px"
          left="8.46px"
          width="159.59px"
          height="24px"
          justifyContent="center"
          alignItems="center"
          size="default"
          isDisabled={false}
          variation="primary"
          children="今から行く！"
          {...getOverrideProps(overrides, "\u4ECA\u3059\u3050\u884C\u304F")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          position="absolute"
          top="183px"
          left="196.59px"
          width="159.59px"
          height="24px"
          justifyContent="center"
          alignItems="center"
          size="default"
          isDisabled={false}
          variation="primary"
          children="後から行く！"
          {...getOverrideProps(overrides, "\u5F8C\u304B\u3089\u884C\u304F")}
        ></Button>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16.40625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="205px"
        height="61px"
        position="absolute"
        top="52px"
        left="162px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={FacilityProp?.address}
        {...getOverrideProps(overrides, "\u4F4F\u6240")}
      ></Text>
    </View>
  );
}
