# Exchange rate calculator monorepo

## Tech task:
Create a simple React app (don’t use NextJS please), which:
1. When it starts, retrieve the latest currency exchange rates from the Czech National Bank.

• API URL: https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt
• Documentation: https://www.cnb.cz/en/faq/Format-of-the-foreign-exchange-market-rates/

2. Parses the downloaded data and clearly displays it to the user in the UI.
3. Add a simple form, into which the customer can enter an amount in CZK and select a currency, and after clicking a button sees the amount entered in CZK converted into the selected currency.
4. Commit your code throughout your work and upload the resulting codebase into a Github repo.
5. Tech stack: React (+Hooks), TypeScript, Styled Components, React Query.
Overall: Keep the code simple and the UI nice and easy to use for the user.

## Installation steps
```shell
# This step is optional
cp .env.example .env

# Install all the dependencies
yarn

# To start whole monorepo in the development mode (hot reload support)
yarn dev
```

## Global tech stack
- typescript
- eslint

## TODO
- [ ] build scripts
- [ ] allow set default currency (now it's CZK only)
- [ ] deploy somewhere
- [ ] exchange rate history

## Sub readme navigation
- [API](./packages/api/README.md)
- [APP](./packages/app/README.md)
