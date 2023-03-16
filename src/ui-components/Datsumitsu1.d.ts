/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Datsumitsu1OverridesProps = {
    Datsumitsu1?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "\u4ECA\u304B\u3089\u884C\u304D\u305F\u3044\u5834\u6240\u306F\uFF1F"?: PrimitiveOverrideProps<TextProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Datsumitsu1Props = React.PropsWithChildren<Partial<ViewProps> & {
    clickButton?: (event: SyntheticEvent) => void;
} & {
    overrides?: Datsumitsu1OverridesProps | undefined | null;
}>;
export default function Datsumitsu1(props: Datsumitsu1Props): React.ReactElement;
