'use strict'

const lotteryNum = () => (Math.round(Math.random() * 100) % 58) + 1

const sortAscending = (prev, next) => {
  return prev - next
}

const pickNumber = (number) => {
  const copied = [...number]
  const newNum = lotteryNum()
  if (!copied.includes(newNum)) {
    copied.push(newNum)
    copied.sort(sortAscending)
  }
  return copied
}

let luckyLotteryNumbers = []

while (luckyLotteryNumbers.length < 6) {
  pickNumber(number)
}

console.log(luckyLotteryNumbers)
