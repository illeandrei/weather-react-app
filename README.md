### Getting Started

```
> git clone git@github.com:illeandrei/weather-react-app.git
> cd weather-react-app
> npm install
> npm start
```

#### About Middleware
[ReduxPromise](https://www.npmjs.com/package/redux-promise)

#### Middleware
- are functions that take and 'action' and depending on the actions type
(or payload, or other factors), can let the action pass through,
manipulate the action, log it or stop it, before hitting a reducer.
- are 'gate keepers' between ActionCreators and Reducers.
- if there is a promise on the action payload, it waits
until the promise is resolved and fires a new action of the same type, towards
the reducers.
- if no promise on the action payload, the payload is let through, towards
the reducers.

#### componentDidMount
- is a life cycle function/method that is called automatically after
the component has rendered to the screen
