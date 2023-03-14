
# Customer

Represents a Square customer profile in the Customer Directory of a Square seller.

## Structure

`Customer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | A unique Square-assigned ID for the customer profile.<br><br>If you need this ID for an API request, use the ID returned when you created the customer profile or call the [SearchCustomers](../../doc/api/customers.md#search-customers)<br>or [ListCustomers](../../doc/api/customers.md#list-customers) endpoint. |
| `createdAt` | `string \| undefined` | Optional | The timestamp when the customer profile was created, in RFC 3339 format. |
| `updatedAt` | `string \| undefined` | Optional | The timestamp when the customer profile was last updated, in RFC 3339 format. |
| `cards` | [`Card[] \| undefined`](../../doc/models/card.md) | Optional | Payment details of the credit, debit, and gift cards stored on file for the customer profile.<br><br>DEPRECATED at version 2021-06-16. Replaced by calling [ListCards](../../doc/api/cards.md#list-cards) (for credit and debit cards on file)<br>or [ListGiftCards](../../doc/api/gift-cards.md#list-gift-cards) (for gift cards on file) and including the `customer_id` query parameter.<br>For more information, see [Migration notes](https://developer.squareup.com/docs/customers-api/what-it-does#migrate-customer-cards). |
| `givenName` | `string \| undefined` | Optional | The given name (that is, the first name) associated with the customer profile. |
| `familyName` | `string \| undefined` | Optional | The family name (that is, the last name) associated with the customer profile. |
| `nickname` | `string \| undefined` | Optional | A nickname for the customer profile. |
| `companyName` | `string \| undefined` | Optional | A business name associated with the customer profile. |
| `emailAddress` | `string \| undefined` | Optional | The email address associated with the customer profile. |
| `address` | [`Address \| undefined`](../../doc/models/address.md) | Optional | Represents a postal address in a country.<br>For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). |
| `phoneNumber` | `string \| undefined` | Optional | The phone number associated with the customer profile. |
| `birthday` | `string \| undefined` | Optional | The birthday associated with the customer profile, in `YYYY-MM-DD` format. For example, `1998-09-21`<br>represents September 21, 1998, and `0000-09-21` represents September 21 (without a birth year). |
| `referenceId` | `string \| undefined` | Optional | An optional second ID used to associate the customer profile with an<br>entity in another system. |
| `note` | `string \| undefined` | Optional | A custom note associated with the customer profile. |
| `preferences` | [`CustomerPreferences \| undefined`](../../doc/models/customer-preferences.md) | Optional | Represents communication preferences for the customer profile. |
| `creationSource` | [`string \| undefined`](../../doc/models/customer-creation-source.md) | Optional | Indicates the method used to create the customer profile. |
| `groupIds` | `string[] \| undefined` | Optional | The IDs of [customer groups](../../doc/models/customer-group.md) the customer belongs to. |
| `segmentIds` | `string[] \| undefined` | Optional | The IDs of [customer segments](../../doc/models/customer-segment.md) the customer belongs to. |
| `version` | `bigint \| undefined` | Optional | The Square-assigned version number of the customer profile. The version number is incremented each time an update is committed to the customer profile, except for changes to customer segment membership and cards on file. |
| `taxIds` | [`CustomerTaxIds \| undefined`](../../doc/models/customer-tax-ids.md) | Optional | Represents the tax ID associated with a [customer profile](../../doc/models/customer.md). The corresponding `tax_ids` field is available only for customers of sellers in EU countries or the United Kingdom.<br>For more information, see [Customer tax IDs](https://developer.squareup.com/docs/customers-api/what-it-does#customer-tax-ids). |

## Example (as JSON)

```json
{
  "id": null,
  "created_at": null,
  "updated_at": null,
  "cards": null,
  "given_name": null,
  "family_name": null,
  "nickname": null,
  "company_name": null,
  "email_address": null,
  "address": null,
  "phone_number": null,
  "birthday": null,
  "reference_id": null,
  "note": null,
  "preferences": null,
  "creation_source": null,
  "group_ids": null,
  "segment_ids": null,
  "version": null,
  "tax_ids": null
}
```

