# Glucometer

This is a glucometer made through TDD which calculates your bolus (the amount of units of insulin you need) based on the amount of carbs you are eating and your insulin ratio.

<div align="center">
  <img src="./readme-img/screenshot-1.png"/>
  <img src="./readme-img/screenshot-2.png"/>
</div>

## User Stories

```
As a user,
So I can adjust my ratio,
I would like to be able to input my ratio.

As a user,
So I can get my bolus,
I would like to be able to input my carbs.

As a user,
So I can get my bolus,
I would like to see a submit button.


As a user,
So I can see my bolus,
I would like it to be displayed on the glucometer.

As a user,
So I don't give myself too much insulin,
I would like floats to be rounded down.


As a user,
So I can't break the glucometer,
I would like to be shown an error message when I dont input a ratio.

As a user,
So I don't give myself too much insulin,
I would like to have a maximum amount of carbs I'm allowed to input.

As a user,
So I give myself enough insulin,
I would like to have a maximun ratio I'm allowed to input.
```

## Local Setup

```sh
$ git clone https://github.com/kealanheena/glucometer.git
```

```sh
$ cd react-calculator
```

```sh
$ npm install
```

## Run Locally

```sh
$ npm start
```

## Run Tests

```sh
$ npm test
```
