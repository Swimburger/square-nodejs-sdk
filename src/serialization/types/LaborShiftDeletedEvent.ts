/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { LaborShiftDeletedEventData } from "./LaborShiftDeletedEventData";

export const LaborShiftDeletedEvent: core.serialization.ObjectSchema<
    serializers.LaborShiftDeletedEvent.Raw,
    Square.LaborShiftDeletedEvent
> = core.serialization.object({
    merchantId: core.serialization.property("merchant_id", core.serialization.string().optionalNullable()),
    type: core.serialization.string().optionalNullable(),
    eventId: core.serialization.property("event_id", core.serialization.string().optionalNullable()),
    createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
    data: LaborShiftDeletedEventData.optional(),
});

export declare namespace LaborShiftDeletedEvent {
    export interface Raw {
        merchant_id?: (string | null) | null;
        type?: (string | null) | null;
        event_id?: (string | null) | null;
        created_at?: string | null;
        data?: LaborShiftDeletedEventData.Raw | null;
    }
}
