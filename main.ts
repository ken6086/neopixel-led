input.onButtonPressed(Button.A, function () {
    if (x == 0) {
        x = 1
        strip = neopixel.create(DigitalPin.P0, 64, NeoPixelMode.RGB_RGB)
        strip.showRainbow(1, 360)
    } else if (x == 1) {
        x = 0
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
input.onButtonPressed(Button.AB, function () {
    if (z == 0) {
        z = 1
        strip = neopixel.create(DigitalPin.P0, 64, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        strip2 = neopixel.create(DigitalPin.P3, 16, NeoPixelMode.RGB)
        strip2.showColor(neopixel.colors(NeoPixelColors.White))
    } else if (z == 1) {
        z = 0
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip2.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
input.onButtonPressed(Button.B, function () {
    if (y == 0) {
        y = 1
        strip = neopixel.create(DigitalPin.P3, 16, NeoPixelMode.RGB_RGB)
        strip.showRainbow(1, 360)
    } else if (y == 1) {
        y = 0
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
let strip2: neopixel.Strip = null
let strip: neopixel.Strip = null
let z = 0
let y = 0
let x = 0
x = 0
y = 0
z = 0
loops.everyInterval(100, function () {
    led.setBrightness(30)
    basic.showString("" + (input.temperature()))
})
