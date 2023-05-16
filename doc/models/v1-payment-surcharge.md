
# V1 Payment Surcharge

V1PaymentSurcharge

## Structure

`V1PaymentSurcharge`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the surcharge. |
| `appliedMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `rate` | `string \| undefined` | Optional | The amount of the surcharge as a percentage. The percentage is provided as a string representing the decimal equivalent of the percentage. For example, "0.7" corresponds to a 7% surcharge. Exactly one of rate or amount_money should be set. |
| `amountMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `type` | [`string \| undefined`](../../doc/models/v1-payment-surcharge-type.md) | Optional | - |
| `taxable` | `boolean \| undefined` | Optional | Indicates whether the surcharge is taxable. |
| `taxes` | [`V1PaymentTax[] \| undefined`](../../doc/models/v1-payment-tax.md) | Optional | The list of taxes that should be applied to the surcharge. |
| `surchargeId` | `string \| undefined` | Optional | A Square-issued unique identifier associated with the surcharge. |

## Example (as JSON)

```json
{
  "name": "name0",
  "applied_money": {
    "amount": 196,
    "currency_code": "LYD"
  },
  "rate": "rate0",
  "amount_money": {
    "amount": 186,
    "currency_code": "KRW"
  },
  "type": "CUSTOM"
}
```

