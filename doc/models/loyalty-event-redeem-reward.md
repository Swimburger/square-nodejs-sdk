
# Loyalty Event Redeem Reward

Provides metadata when the event `type` is `REDEEM_REWARD`.

## Structure

`LoyaltyEventRedeemReward`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loyaltyProgramId` | `string` | Required | The ID of the [loyalty program](../../doc/models/loyalty-program.md).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `rewardId` | `string \| undefined` | Optional | The ID of the redeemed [loyalty reward](../../doc/models/loyalty-reward.md).<br>This field is returned only if the event source is `LOYALTY_API`.<br>**Constraints**: *Maximum Length*: `36` |
| `orderId` | `string \| undefined` | Optional | The ID of the [order](../../doc/models/order.md) that redeemed the reward.<br>This field is returned only if the Orders API is used to process orders. |

## Example (as JSON)

```json
{
  "loyalty_program_id": "loyalty_program_id0",
  "reward_id": null,
  "order_id": null
}
```

