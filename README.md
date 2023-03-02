# Gauge example tests

This repository contains examples of Gauge tests.

See the `specs` directory for the narrative specifications and the `tests`
directory for the implementation of the steps.

## How to run

You will need the gauge CLI. Install it first using npm:

```
npm install -g @getgauge/cli
```

That will install the gauge CLI globally, so `sudo npm install -g @getgauge/cli`
may be required.

Then install the dependencies in this repo:

```
npm install
```

Then run the test:

```
npm test
```

## To slow down the test run for live events

1. `export TAIKO_PLUGIN=delay`
2. `export TAIKO_DELAY_SECONDS=2.0`
3. `npm test`
