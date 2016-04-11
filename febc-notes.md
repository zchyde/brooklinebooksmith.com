Specs:

- Price: 28.95
- shipping: flat rate 7.
- also option to pick up at store, for no shipping.
- Subscription is monthly, ongoing.
- want to be able to offer gift subscriptions of an undtermined time.
- need to charge tax on MA residences, not others.
- need to be able to let users cancel.


Requirements:
- check if they can change amount the in mass





### notes

need: to have shipping_charge
need: to have taxes
need: to have gift subscription for a limited basis.

snipcart:
"At the moment the subscription will last one year max. There is no way to change it as of now. I added it to our backlog."
doesn't have shipping, but has a workaround
doesn't have limited times - check on this?

paypal:
doesn't have shipping_charge
doesn't have taxes.



Snipcart on adding shipping workaround:

"I guess the best way would be to add the item with our `item.add` JavaScript method. You could maybe listen to the button click with jQuery and adds the item and let Snipcart adding the plan as usual."
