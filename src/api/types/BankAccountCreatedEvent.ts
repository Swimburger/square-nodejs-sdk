/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Published when you link an external bank account to a Square
 * account in the Seller Dashboard. Square sets the initial status to
 * `VERIFICATION_IN_PROGRESS` and publishes the event.
 */
export interface BankAccountCreatedEvent {
    /** The ID of the target merchant associated with the event. */
    merchantId?: string | null;
    /** The ID of the target location associated with the event. */
    locationId?: string | null;
    /** The type of event this represents, `"bank_account.created"`. */
    type?: string | null;
    /** A unique ID for the event. */
    eventId?: string | null;
    /** Timestamp of when the event was created, in RFC 3339 format. */
    createdAt?: string;
    /** Data associated with the event. */
    data?: Square.BankAccountCreatedEventData;
}
