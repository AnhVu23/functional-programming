'use strict'
const not =
  (predicate) =>
  (...args) =>
    !predicate(...args)

const when =
  (fn) =>
  (predicate) =>
  (...args) =>
    predicate(...args) ? fn(...args) : undefined

const output = (txt) => {
  console.log(txt)
}

const printIf = when(output)

const isShortEnough = (str) => {
  return str.length <= 5
}

const isLongEnough = not(isShortEnough)

var msg1 = 'Hello'
var msg2 = msg1 + ' World'

printIf(isShortEnough)(msg1) // Hello
printIf(isShortEnough)(msg2)
printIf(isLongEnough)(msg1)
printIf(isLongEnough)(msg2) // Hello World
