# Gauge example tests

This repository contains examples of Gauge tests to be used with the Wring platform.

See the `specs` directory for the narrative specifications and the `tests`
directory for the implementation of the steps.

## How to run on Linux and Mac

You will need the gauge CLI. See: https://docs.gauge.org/getting_started/installing-gauge.html

Install it using npm:

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

## To slow down the test run for live events on Wring

1. `export TAIKO_PLUGIN=delay`
2. `export TAIKO_DELAY_SECONDS=2.0`
3. `npm test`


## How to run on Windows

This works in Powershell.

```
npm install -g @getgauge/cli
git clone git@github.com:aichemydev/gauge-tests.git
cd gauge-tests
npm install
$env:TAIKO_PLUGIN='delay'
$env:TAIKO_DELAY_SECONDS=2
npm test
```
