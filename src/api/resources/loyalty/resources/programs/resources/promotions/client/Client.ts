/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../../../environments";
import * as core from "../../../../../../../../core";
import * as Square from "../../../../../../../index";
import * as serializers from "../../../../../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../../../../../errors/index";

export declare namespace Promotions {
    export interface Options {
        environment?: core.Supplier<environments.SquareEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the Square-Version header */
        version?: "2025-06-18";
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the Square-Version header */
        version?: "2025-06-18";
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Promotions {
    constructor(protected readonly _options: Promotions.Options = {}) {}

    /**
     * Lists the loyalty promotions associated with a [loyalty program](entity:LoyaltyProgram).
     * Results are sorted by the `created_at` date in descending order (newest to oldest).
     *
     * @param {Square.loyalty.programs.ListPromotionsRequest} request
     * @param {Promotions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.loyalty.programs.promotions.list({
     *         programId: "program_id"
     *     })
     */
    public async list(
        request: Square.loyalty.programs.ListPromotionsRequest,
        requestOptions?: Promotions.RequestOptions,
    ): Promise<core.Page<Square.LoyaltyPromotion>> {
        const list = async (
            request: Square.loyalty.programs.ListPromotionsRequest,
        ): Promise<Square.ListLoyaltyPromotionsResponse> => {
            const { programId, status, cursor, limit } = request;
            const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
            if (status !== undefined) {
                _queryParams["status"] = serializers.LoyaltyPromotionStatus.jsonOrThrow(status, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                });
            }
            if (cursor !== undefined) {
                _queryParams["cursor"] = cursor;
            }
            if (limit !== undefined) {
                _queryParams["limit"] = limit?.toString() ?? null;
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.baseUrl)) ??
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.SquareEnvironment.Production,
                    `v2/loyalty/programs/${encodeURIComponent(programId)}/promotions`,
                ),
                method: "GET",
                headers: {
                    Authorization: await this._getAuthorizationHeader(),
                    "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-06-18",
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "square",
                    "X-Fern-SDK-Version": "43.0.0",
                    "User-Agent": "square/43.0.0",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                    ...requestOptions?.headers,
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions?.maxRetries,
                abortSignal: requestOptions?.abortSignal,
            });
            if (_response.ok) {
                return serializers.ListLoyaltyPromotionsResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                throw new errors.SquareError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SquareError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.SquareTimeoutError(
                        "Timeout exceeded when calling GET /v2/loyalty/programs/{program_id}/promotions.",
                    );
                case "unknown":
                    throw new errors.SquareError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        return new core.Pageable<Square.ListLoyaltyPromotionsResponse, Square.LoyaltyPromotion>({
            response: await list(request),
            hasNextPage: (response) => response?.cursor != null,
            getItems: (response) => response?.loyaltyPromotions ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "cursor", response?.cursor));
            },
        });
    }

    /**
     * Creates a loyalty promotion for a [loyalty program](entity:LoyaltyProgram). A loyalty promotion
     * enables buyers to earn points in addition to those earned from the base loyalty program.
     *
     * This endpoint sets the loyalty promotion to the `ACTIVE` or `SCHEDULED` status, depending on the
     * `available_time` setting. A loyalty program can have a maximum of 10 loyalty promotions with an
     * `ACTIVE` or `SCHEDULED` status.
     *
     * @param {Square.loyalty.programs.CreateLoyaltyPromotionRequest} request
     * @param {Promotions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.loyalty.programs.promotions.create({
     *         programId: "program_id",
     *         loyaltyPromotion: {
     *             name: "Tuesday Happy Hour Promo",
     *             incentive: {
     *                 type: "POINTS_MULTIPLIER",
     *                 pointsMultiplierData: {
     *                     multiplier: "3.0"
     *                 }
     *             },
     *             availableTime: {
     *                 timePeriods: ["BEGIN:VEVENT\nDTSTART:20220816T160000\nDURATION:PT2H\nRRULE:FREQ=WEEKLY;BYDAY=TU\nEND:VEVENT"]
     *             },
     *             triggerLimit: {
     *                 times: 1,
     *                 interval: "DAY"
     *             },
     *             minimumSpendAmountMoney: {
     *                 amount: 2000,
     *                 currency: "USD"
     *             },
     *             qualifyingCategoryIds: ["XTQPYLR3IIU9C44VRCB3XD12"]
     *         },
     *         idempotencyKey: "ec78c477-b1c3-4899-a209-a4e71337c996"
     *     })
     */
    public async create(
        request: Square.loyalty.programs.CreateLoyaltyPromotionRequest,
        requestOptions?: Promotions.RequestOptions,
    ): Promise<Square.CreateLoyaltyPromotionResponse> {
        const { programId, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/loyalty/programs/${encodeURIComponent(programId)}/promotions`,
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-06-18",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "43.0.0",
                "User-Agent": "square/43.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.loyalty.programs.CreateLoyaltyPromotionRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CreateLoyaltyPromotionResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SquareError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquareError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquareTimeoutError(
                    "Timeout exceeded when calling POST /v2/loyalty/programs/{program_id}/promotions.",
                );
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieves a loyalty promotion.
     *
     * @param {Square.loyalty.programs.GetPromotionsRequest} request
     * @param {Promotions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.loyalty.programs.promotions.get({
     *         promotionId: "promotion_id",
     *         programId: "program_id"
     *     })
     */
    public async get(
        request: Square.loyalty.programs.GetPromotionsRequest,
        requestOptions?: Promotions.RequestOptions,
    ): Promise<Square.GetLoyaltyPromotionResponse> {
        const { promotionId, programId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/loyalty/programs/${encodeURIComponent(programId)}/promotions/${encodeURIComponent(promotionId)}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-06-18",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "43.0.0",
                "User-Agent": "square/43.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.GetLoyaltyPromotionResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SquareError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquareError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquareTimeoutError(
                    "Timeout exceeded when calling GET /v2/loyalty/programs/{program_id}/promotions/{promotion_id}.",
                );
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Cancels a loyalty promotion. Use this endpoint to cancel an `ACTIVE` promotion earlier than the
     * end date, cancel an `ACTIVE` promotion when an end date is not specified, or cancel a `SCHEDULED` promotion.
     * Because updating a promotion is not supported, you can also use this endpoint to cancel a promotion before
     * you create a new one.
     *
     * This endpoint sets the loyalty promotion to the `CANCELED` state
     *
     * @param {Square.loyalty.programs.CancelPromotionsRequest} request
     * @param {Promotions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.loyalty.programs.promotions.cancel({
     *         promotionId: "promotion_id",
     *         programId: "program_id"
     *     })
     */
    public async cancel(
        request: Square.loyalty.programs.CancelPromotionsRequest,
        requestOptions?: Promotions.RequestOptions,
    ): Promise<Square.CancelLoyaltyPromotionResponse> {
        const { promotionId, programId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/loyalty/programs/${encodeURIComponent(programId)}/promotions/${encodeURIComponent(promotionId)}/cancel`,
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-06-18",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "43.0.0",
                "User-Agent": "square/43.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CancelLoyaltyPromotionResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SquareError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquareError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquareTimeoutError(
                    "Timeout exceeded when calling POST /v2/loyalty/programs/{program_id}/promotions/{promotion_id}/cancel.",
                );
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = (await core.Supplier.get(this._options.token)) ?? process?.env["SQUARE_TOKEN"];
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
