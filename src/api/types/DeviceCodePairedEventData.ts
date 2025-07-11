/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface DeviceCodePairedEventData {
    /** Name of the paired object’s type, `"device_code"`. */
    type?: string | null;
    /** ID of the paired device code. */
    id?: string;
    /** An object containing the paired device code. */
    object?: Square.DeviceCodePairedEventObject;
}
