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

## Tech Used

- JavaScript
- React
- Jest
- Enzyme

## Features

You can:
  - Input your carbs
  - Input your ratio
  - calculate your bolus
  
# Getting Started

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

### Test Coverage

#### Unit Tests

- Display:
  - should render correctly(snapshot)
  - should render 2 <div/>'s
  - renders the value of displayValue
- Form:
  - should render correctly(snapshot)
  - should render a <form/>
  - should render 3 <input/>'s
  - should render a Display Component
- Glucometer:
  - should render correctly(snapshot)
  - should render a <div />
  - should render the Form Component
    - updateDisplay
      - updates displayValue
      - updates displayValue to the argument passed to it
      - should add "units" to the end of the display value
      - should make "ERROR" the display value when "Infinity" is passed as an argument
      - should make "ERROR" the display value when "NaN" is passed as an argument
    - calculateBolus
      - should divide the ratio(2) by the amount of carbs(6)
      - should round down when the result is a float
      - should display "ERROR" if the ratio is "0"
- App:
  - should render correctly(snapshot)
  - should render a <div />
  - should render Glucometer Component

#### Feature Tests

- Glucometer:
  - should update the state of carbs when the carbs input is changed
  - should update the state of ratios when the ratio input is changed
