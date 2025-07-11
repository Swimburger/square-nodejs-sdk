/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { PaymentRefund } from "./PaymentRefund";

export const RefundUpdatedEventObject: core.serialization.ObjectSchema<
    serializers.RefundUpdatedEventObject.Raw,
    Square.RefundUpdatedEventObject
> = core.serialization.object({
    refund: PaymentRefund.optional(),
});

export declare namespace RefundUpdatedEventObject {
    export interface Raw {
        refund?: PaymentRefund.Raw | null;
    }
}
