/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { CardForgottenEventCard } from "./CardForgottenEventCard";

export const CardForgottenEventObject: core.serialization.ObjectSchema<
    serializers.CardForgottenEventObject.Raw,
    Square.CardForgottenEventObject
> = core.serialization.object({
    card: CardForgottenEventCard.optional(),
});

export declare namespace CardForgottenEventObject {
    export interface Raw {
        card?: CardForgottenEventCard.Raw | null;
    }
}
