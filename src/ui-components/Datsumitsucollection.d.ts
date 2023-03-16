/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Facility } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DatsumitsucollectionOverridesProps = {
    Datsumitsucollection?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1143"?: PrimitiveOverrideProps<IconProps>;
    Share?: PrimitiveOverrideProps<FlexProps>;
    MyIcon31732866?: MyIconProps;
    MyIcon31732867?: MyIconProps;
    MyIcon31732868?: MyIconProps;
    "\u65BD\u8A2D\u540D"?: PrimitiveOverrideProps<TextProps>;
    image2?: PrimitiveOverrideProps<ImageProps>;
    "\u6DF7\u96D1\u5EA6"?: PrimitiveOverrideProps<TextProps>;
    "\u4ECA\u3059\u3050\u884C\u304F"?: PrimitiveOverrideProps<ButtonProps>;
    "\u5F8C\u304B\u3089\u884C\u304F"?: PrimitiveOverrideProps<ButtonProps>;
    "\u4F4F\u6240"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DatsumitsucollectionProps = React.PropsWithChildren<Partial<ViewProps> & {
    FacilityProp?: Facility;
} & {
    overrides?: DatsumitsucollectionOverridesProps | undefined | null;
}>;
export default function Datsumitsucollection(props: DatsumitsucollectionProps): React.ReactElement;
