radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
    }
    if (receivedNumber == 1) {
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # # .
            # . . # .
            # # # # .
            `)
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
    }
    if (receivedNumber == 3) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # . . # .
            # . . # .
            # # # . .
            `)
    }
    if (receivedNumber == 4) {
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # . .
            # . . . .
            # # # # .
            `)
    }
    if (receivedNumber == 5) {
        basic.showLeds(`
            # # # . .
            # . . . .
            # # # . .
            # . . . .
            # . . . .
            `)
    }
    if (receivedNumber == 6) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # . # # .
            # . . # .
            . # # # .
            `)
    }
    if (receivedNumber == 7) {
        basic.showLeds(`
            # . . # .
            # . . # .
            # # # # .
            # . . # .
            # . . # .
            `)
    }
    if (receivedNumber == 8) {
        basic.showLeds(`
            . # # . .
            . . . . .
            . # # . .
            . # # . .
            . # # . .
            `)
    }
    if (receivedNumber == 9) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            # . . # .
            . # # . .
            `)
    }
    if (receivedNumber == 10) {
        basic.showLeds(`
            # . # . .
            # . # . .
            # # . . .
            # . # . .
            # . # . .
            `)
    }
    if (receivedNumber == 11) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # . .
            `)
    }
    if (receivedNumber == 12) {
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
    }
    if (receivedNumber == 13) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    }
    if (receivedNumber == 14) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    }
    if (receivedNumber == 15) {
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            # . . . .
            # . . . .
            `)
    }
    if (receivedNumber == 16) {
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            . . # . .
            . . # . .
            `)
    }
    if (receivedNumber == 17) {
        basic.showLeds(`
            # # # . .
            # . # . .
            # # . . .
            # . # . .
            # . # . .
            `)
    }
    if (receivedNumber == 18) {
        basic.showLeds(`
            . . # # #
            # # . . .
            . # # # .
            . . . . #
            . # # # .
            `)
    }
    if (receivedNumber == 19) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (receivedNumber == 20) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    }
    if (receivedNumber == 21) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            `)
    }
    if (receivedNumber == 22) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . # . #
            . # . # .
            `)
    }
    if (receivedNumber == 23) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (receivedNumber == 24) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . . .
            # . . . .
            `)
    }
    if (receivedNumber == 25) {
        basic.showLeds(`
            # # # # #
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
    }
    if (receivedNumber == 26) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    Bla += -1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(Bla)
})
input.onButtonPressed(Button.B, function () {
    Bla += 1
})
let Bla = 0
radio.setGroup(2007)
basic.forever(function () {
    if (Bla == 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
    }
    if (Bla == 1) {
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # # .
            # . . # .
            # # # # .
            `)
    }
    if (Bla == 2) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
    }
    if (Bla == 3) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # . . # .
            # . . # .
            # # # . .
            `)
    }
    if (Bla == 4) {
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # . .
            # . . . .
            # # # # .
            `)
    }
    if (Bla == 5) {
        basic.showLeds(`
            # # # . .
            # . . . .
            # # # . .
            # . . . .
            # . . . .
            `)
    }
})
basic.forever(function () {
    if (Bla == 25) {
        basic.showLeds(`
            # # # # #
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (Bla == 18) {
        basic.showLeds(`
            . . # # #
            # # . . .
            . # # # .
            . . . . #
            . # # # .
            `)
    }
    if (Bla == 19) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (Bla == 20) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    }
    if (Bla == 21) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            `)
    }
    if (Bla == 22) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . # . #
            . # . # .
            `)
    }
    if (Bla == 23) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    if (Bla == 12) {
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
    }
    if (Bla == 13) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    }
    if (Bla == 14) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    }
    if (Bla == 15) {
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            # . . . .
            # . . . .
            `)
    }
    if (Bla == 16) {
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            . . # . .
            . . # . .
            `)
    }
    if (Bla == 17) {
        basic.showLeds(`
            # # # . .
            # . # . .
            # # . . .
            # . # . .
            # . # . .
            `)
    }
})
basic.forever(function () {
    if (Bla == 24) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . . .
            # . . . .
            `)
    }
})
basic.forever(function () {
    if (Bla == 26) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (Bla == 6) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # . # # .
            # . . # .
            . # # # .
            `)
    }
    if (Bla == 7) {
        basic.showLeds(`
            # . . # .
            # . . # .
            # # # # .
            # . . # .
            # . . # .
            `)
    }
    if (Bla == 8) {
        basic.showLeds(`
            . # # . .
            . . . . .
            . # # . .
            . # # . .
            . # # . .
            `)
    }
    if (Bla == 9) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            # . . # .
            . # # . .
            `)
    }
    if (Bla == 10) {
        basic.showLeds(`
            # . # . .
            # . # . .
            # # . . .
            # . # . .
            # . # . .
            `)
    }
    if (Bla == 11) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # . .
            `)
    }
})
