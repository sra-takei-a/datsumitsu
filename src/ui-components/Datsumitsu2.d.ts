/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Genre } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Datsumitsu2OverridesProps = {
    Datsumitsu2?: PrimitiveOverrideProps<ViewProps>;
    "\u6DF7\u96D1\u5EA6\u306E\u4F4E\u3044"?: PrimitiveOverrideProps<TextProps>;
    "\u30B9\u30DD\u30FC\u30C4\u30B8\u30E0"?: PrimitiveOverrideProps<TextProps>;
    "\u73FE\u5728\u5730\u304B\u3089\u8DDD\u96E2\u306E\u8FD1\u3044"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Datsumitsu2Props = React.PropsWithChildren<Partial<ViewProps> & {
    genre?: Genre;
} & {
    overrides?: Datsumitsu2OverridesProps | undefined | null;
}>;
export default function Datsumitsu2(props: Datsumitsu2Props): React.ReactElement;
