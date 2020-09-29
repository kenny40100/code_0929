let op = 0
basic.forever(function () {
    op = randint(80, 100)
    basic.showNumber(op)
    if (op < 85) {
        basic.showString("A-")
    } else if (op < 90) {
        basic.showString("A")
    } else {
        basic.showString("A+")
    }
})
