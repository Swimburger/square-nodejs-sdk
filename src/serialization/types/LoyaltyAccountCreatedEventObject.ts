/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { LoyaltyAccount } from "./LoyaltyAccount";

export const LoyaltyAccountCreatedEventObject: core.serialization.ObjectSchema<
    serializers.LoyaltyAccountCreatedEventObject.Raw,
    Square.LoyaltyAccountCreatedEventObject
> = core.serialization.object({
    loyaltyAccount: core.serialization.property("loyalty_account", LoyaltyAccount.optional()),
});

export declare namespace LoyaltyAccountCreatedEventObject {
    export interface Raw {
        loyalty_account?: LoyaltyAccount.Raw | null;
    }
}
