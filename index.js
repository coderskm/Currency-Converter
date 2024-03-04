import Freecurrencyapi from "@everapi/freecurrencyapi-js";
const freecurrencyapi = new Freecurrencyapi("fca_live_xt7yDKiCuR56F2FT2wrNhWecCLPXCccINzASOQeV");

export async function convertCurrency(fromCurrency, toCurrency, units=1) {
    const result = await freecurrencyapi.latest({
      base_currency: fromCurrency,
      currencies: toCurrency,
    });

    const multiplier = result.data[toCurrency];
    const totalAmount = units * multiplier;
    console.log(`for ${units} ${fromCurrency}, you have to pay ${totalAmount} ${toCurrency}`);
    
}

