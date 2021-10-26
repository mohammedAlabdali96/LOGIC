# Junior Web Developer Exercise

This is the exercise for the Junior Web Developer position at LOGIC. The objective of this exercise is to create a web application.

## Spec

This is full functionality of the web application we expect you to create.

### Home Page

* This is what appears, when the user first opens the web application
* This page contains a form including a text area and a submit button, and an empty div element.
* When the form is submitted, each line of the text area should be submitted to the `/api/sort` endpoint (defined below) and when the results are back, the sorted input should be displayed the div element, described above.
* When the form is submitted, the button should be disabled and a loading text should be displayed until the results are back.
* When the results are back, the button should be enabled again, with the original text.

### Sorting API endpoint (`/api/sort`)

* This endpoint should receive and array of strings, sort them and return them back
* The sorting algorithm should be [Quicksort](https://en.wikipedia.org/wiki/Quicksort) (do not use any libraries or built-in functions for sorting)
* The API endpoint should validate that the correct data (array of strings) has been submitted, otherwise it should return a 400 status code

### Documentation

There should be brief (just a few words on each case), yet clear documentation of:

* How to run your application
* How each function you wrote works

### Example

If the user enters the text below:

```
banana
apple
orange
```

The following JSON request should be made:

```
POST /api/sort

[
    "banana",
    "apple",
    "orange"
]
```

The following JSON response should be returned:

```
[
    "apple",
    "banana",
    "orange"
]
```

And the following text should be displayed when the request completes:

```
apple
banana
orange
```
