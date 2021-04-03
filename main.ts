let Random = 0
input.onGesture(Gesture.Shake, function () {
    Random = randint(1, 3)
    if (Random == 1) {
        basic.showIcon(IconNames.Square)
        soundExpression.mysterious.play()
    } else if (Random == 2) {
        basic.showIcon(IconNames.Scissors)
        soundExpression.giggle.play()
    } else {
        basic.showIcon(IconNames.SmallSquare)
        soundExpression.slide.play()
    }
    basic.pause(1000)
    basic.clearScreen()
})
