/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Datsumitsu2(props) {
  const { genre, overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="157px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Datsumitsu2")}
      {...rest}
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
        width="205px"
        height="38px"
        position="absolute"
        top="70px"
        left="28px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="混雑度の低い"
        {...getOverrideProps(overrides, "\u6DF7\u96D1\u5EA6\u306E\u4F4E\u3044")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="26px"
        fontWeight="400"
        color="rgba(83,192,237,1)"
        lineHeight="30.46875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="205px"
        height="38px"
        position="absolute"
        top="108px"
        left="28px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        id="genre_name"
        children={genre?.name}
        {...getOverrideProps(overrides, "\u30B9\u30DD\u30FC\u30C4\u30B8\u30E0")}
      ></Text>
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
        top="32px"
        left="28px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="現在地から距離の近い"
        {...getOverrideProps(
          overrides,
          "\u73FE\u5728\u5730\u304B\u3089\u8DDD\u96E2\u306E\u8FD1\u3044"
        )}
      ></Text>
    </View>
  );
}
