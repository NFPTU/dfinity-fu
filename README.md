## Superheroes

![Compatibility](https://img.shields.io/badge/compatibility-0.6.25-blue)
[![Build Status](https://github.com/dfinity/examples/workflows/motoko-superheroes-example/badge.svg)](https://github.com/dfinity/examples/actions?query=workflow%3Amotoko-superheroes-example)

This example demonstrates how to build a
[CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
application on the [Internet Computer](https://dfinity.org) using
[Motoko](https://sdk.dfinity.org/docs/language-guide/motoko.html) and
[React](https://reactjs.org). 

## Prerequisites

Verify the following before running this demo:

*  You have downloaded and installed [Node.js](https://nodejs.org).

*  You have downloaded and installed the [DFINITY Canister
   SDK](https://sdk.dfinity.org).

*  You have stopped any Internet Computer or other network process that would
   create a port conflict on 8000.

## Run for FE

1. Build your front-end.

   ```text
   npm install
   ```
   
 ```text
   npm start
   ```

## Run for FE, Motoko

1. Start a local internet computer.

   ```text
   dfx start
   ```

1. Open a new terminal window.

1. Reserve an identifier for your canister.

   ```text
   dfx canister create --all
   ```

1. Build your front-end.

   ```text
   npm install
   ```

1. Build your canister.

   ```text
   dfx build
   dfx build token
   ```

1. Deploy your canister.

   ```text
   dfx canister install --all
   ```
dfx canister install --all --mode upgrade
dfx canister  install superheroes --argument="( principal \"$(dfx identity get-principal)\")" --mode upgrade
dfx canister  install superheroes --argument="(principal \"jaguw-lwcc6-3zqsj-j4ct7-yfbb5-gkdyj-wowxh-2wgkg-kbtba-s7raw-mqe\", principal \"$(dfx canister id token)\", 5)"


dfx canister install token --argument="(\"Test Token Logo\", \"Test Token Name\", \"Test Token Symbol\", 3, 100000000, principal \"jaguw-lwcc6-3zqsj-j4ct7-yfbb5-gkdyj-wowxh-2wgkg-kbtba-s7raw-mqe\", 0)"
 ```text
   npm start:dev
   ```

1. Take note of the URL at which the canister is accessible.

   ```text
   echo "http://localhost:8000/?canisterId=$(dfx canister id www)"
   ```

1. Open the aforementioned URL in your web browser.

```text
   bash demo.sh
   ```