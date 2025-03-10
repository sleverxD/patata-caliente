let tiempo = 0
input.onButtonPressed(Button.A, function () {
    tiempo += randint(5, 15)
    basic.showIcon(IconNames.Chessboard)
    while (tiempo > 0) {
        tiempo += -1
        basic.pause(1000)
    }
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
