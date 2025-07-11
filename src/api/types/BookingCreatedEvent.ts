/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Published when a booking is created.
 *
 * To receive this event with buyer-level permissions, you must have `APPOINTMENTS_READ` set for the OAuth scope.
 * To receive this event with seller-level permissions, you must have `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` set for the OAuth scope.
 */
export interface BookingCreatedEvent {
    /** The ID of the target seller associated with the event. */
    merchantId?: string | null;
    /** The type of this event. The value is `"booking.created"`. */
    type?: string | null;
    /** A unique ID for the event. */
    eventId?: string | null;
    /** The timestamp of when the event was created, in RFC 3339 format. */
    createdAt?: string;
    /** The data associated with the event. */
    data?: Square.BookingCreatedEventData;
}
