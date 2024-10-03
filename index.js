function receivesAFunction(item) {
    item()
  }

  function returnsANamedFunction() {
    return function name() {
      console.log('Hello')
    }
  }

  function returnsAnAnonymousFunction() {
    return function() {
      console.log('Hello')
    }
  }