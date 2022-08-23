let stop = 0
input.onButtonPressed(Button.A, function () {
    stop = 1
    for (let index = 0; index <= 100; index++) {
        music.playMelody("E B C5 A B G A F ", 120)
        if (stop == 0) {
            break;
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    stop = 0
    music.stopAllSounds()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    stop = 1
    while (stop == 1) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(500)
        basic.showIcon(IconNames.House)
        basic.pause(500)
        basic.showIcon(IconNames.Asleep)
        basic.pause(500)
    }
})
