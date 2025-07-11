/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { OrderCreated } from "./OrderCreated";

export const OrderCreatedObject: core.serialization.ObjectSchema<
    serializers.OrderCreatedObject.Raw,
    Square.OrderCreatedObject
> = core.serialization.object({
    orderCreated: core.serialization.property("order_created", OrderCreated.optional()),
});

export declare namespace OrderCreatedObject {
    export interface Raw {
        order_created?: OrderCreated.Raw | null;
    }
}
