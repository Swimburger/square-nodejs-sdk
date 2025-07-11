/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { OauthAuthorizationRevokedEventObject } from "./OauthAuthorizationRevokedEventObject";

export const OauthAuthorizationRevokedEventData: core.serialization.ObjectSchema<
    serializers.OauthAuthorizationRevokedEventData.Raw,
    Square.OauthAuthorizationRevokedEventData
> = core.serialization.object({
    type: core.serialization.string().optionalNullable(),
    id: core.serialization.string().optional(),
    object: OauthAuthorizationRevokedEventObject.optional(),
});

export declare namespace OauthAuthorizationRevokedEventData {
    export interface Raw {
        type?: (string | null) | null;
        id?: string | null;
        object?: OauthAuthorizationRevokedEventObject.Raw | null;
    }
}
