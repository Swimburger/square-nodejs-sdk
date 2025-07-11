/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { PayoutSentEventObject } from "./PayoutSentEventObject";

export const PayoutSentEventData: core.serialization.ObjectSchema<
    serializers.PayoutSentEventData.Raw,
    Square.PayoutSentEventData
> = core.serialization.object({
    type: core.serialization.string().optionalNullable(),
    id: core.serialization.string().optional(),
    object: PayoutSentEventObject.optional(),
});

export declare namespace PayoutSentEventData {
    export interface Raw {
        type?: (string | null) | null;
        id?: string | null;
        object?: PayoutSentEventObject.Raw | null;
    }
}
