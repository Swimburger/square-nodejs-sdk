/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { CatalogVersionUpdatedEventCatalogVersion } from "./CatalogVersionUpdatedEventCatalogVersion";

export const CatalogVersionUpdatedEventObject: core.serialization.ObjectSchema<
    serializers.CatalogVersionUpdatedEventObject.Raw,
    Square.CatalogVersionUpdatedEventObject
> = core.serialization.object({
    catalogVersion: core.serialization.property("catalog_version", CatalogVersionUpdatedEventCatalogVersion.optional()),
});

export declare namespace CatalogVersionUpdatedEventObject {
    export interface Raw {
        catalog_version?: CatalogVersionUpdatedEventCatalogVersion.Raw | null;
    }
}
