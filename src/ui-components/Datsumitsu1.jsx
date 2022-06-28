/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Facility } from "../models";
import { schema } from "../models/schema";
import { Button, Text, TextField, View } from "@aws-amplify/ui-react";
export default function Datsumitsu1(props) {
  const { userProp, facilityProp, overrides, ...rest } = props;
  const [textFieldValue, setTextFieldValue] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: { name: textFieldValue },
    model: Facility,
    schema: schema,
  });
  return (
    <View
      width="390px"
      height="623px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Datsumitsu1")}
    >
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="86px"
        left="45px"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        placeholder="ex. スポーツジム"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldValue}
        onChange={(event) => {
          setTextFieldValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="166px"
        left="99px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        size="default"
        isDisabled={false}
        variation="primary"
        children="空いてる場所を検索！"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
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
        top="34px"
        left="49px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="今から行きたい場所は？"
        {...getOverrideProps(
          overrides,
          "\u4ECA\u304B\u3089\u884C\u304D\u305F\u3044\u5834\u6240\u306F\uFF1F"
        )}
      ></Text>
    </View>
  );
}
