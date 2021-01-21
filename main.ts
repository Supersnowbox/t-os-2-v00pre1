function home () {
    basic.clearScreen()
}
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (logoac == 1) {
        soundExpression.twinkle.playUntilDone()
        soundExpression.hello.playUntilDone()
        home()
    }
})
let logoac = 0
logoac = 0
basic.clearScreen()
basic.showLeds(`
    . . . . .
    . # # # .
    . . # . .
    . . # . .
    . . . . .
    `)
soundExpression.giggle.playUntilDone()
for (let index = 0; index < 2; index++) {
    soundExpression.hello.playUntilDone()
}
basic.showLeds(`
    . . . . .
    . # # # .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.clearScreen()
basic.pause(1000)
basic.showLeds(`
    . . # . .
    . # . # .
    . . . . .
    . . . . .
    . . . . .
    `)
logoac = 1
basic.forever(function () {
	
})
