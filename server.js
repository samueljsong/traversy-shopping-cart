//sk_test_51NSvxvGnysE5rd1TQIg43z9BHswdjmZ9aI2eegpFzvB6uVzeAFCBqSYrxSAmnSeC58h1y8nXxnXtAHcnsUbfrGqh00utctxc3F
//coffee:price_1NSvzeGnysE5rd1T4Odgb3ty
//tea:price_1NSw0gGnysE5rd1T4nF0UJxO
//waffles:price_1NSw1DGnysE5rd1TMGqAkOXc

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51NSvxvGnysE5rd1TQIg43z9BHswdjmZ9aI2eegpFzvB6uVzeAFCBqSYrxSAmnSeC58h1y8nXxnXtAHcnsUbfrGqh00utctxc3F')

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));

});

app.listen(4000, () => console.log("Listening on port 4000!"))