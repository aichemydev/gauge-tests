# Gauge example tests

This repository contains examples of Gauge tests.

See the `specs` directory for the narrative specifications and the `tests`
directory for the implementation of the steps.

## How to run
1. `npm install`
2. `npm test`

## To slow down the test run for live events

1. `export TAIKO_PLUGIN=delay`
2. `export `TAIKO_DELAY_SECONDS=2.0`
3. `npm test`
