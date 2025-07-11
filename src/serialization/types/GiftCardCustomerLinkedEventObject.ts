/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { GiftCard } from "./GiftCard";

export const GiftCardCustomerLinkedEventObject: core.serialization.ObjectSchema<
    serializers.GiftCardCustomerLinkedEventObject.Raw,
    Square.GiftCardCustomerLinkedEventObject
> = core.serialization.object({
    giftCard: core.serialization.property("gift_card", GiftCard.optional()),
    linkedCustomerId: core.serialization.property("linked_customer_id", core.serialization.string().optionalNullable()),
});

export declare namespace GiftCardCustomerLinkedEventObject {
    export interface Raw {
        gift_card?: GiftCard.Raw | null;
        linked_customer_id?: (string | null) | null;
    }
}
