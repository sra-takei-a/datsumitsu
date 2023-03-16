/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DatsumitsucollectionProps } from "./Datsumitsucollection";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DatsumitsuCollectionListOverridesProps = {
    DatsumitsuCollectionList?: PrimitiveOverrideProps<CollectionProps>;
    Datsumitsucollection?: DatsumitsucollectionProps;
} & EscapeHatchProps;
export declare type DatsumitsuCollectionListProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => DatsumitsucollectionProps;
} & {
    overrides?: DatsumitsuCollectionListOverridesProps | undefined | null;
}>;
export default function DatsumitsuCollectionList(props: DatsumitsuCollectionListProps): React.ReactElement;
