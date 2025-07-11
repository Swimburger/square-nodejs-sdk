/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface TerminalRefundCreatedEventData {
    /** Name of the created object’s type, `"refund"`. */
    type?: string | null;
    /** ID of the created terminal refund. */
    id?: string;
    /** An object containing the created terminal refund. */
    object?: Square.TerminalRefundCreatedEventObject;
}
