input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.East)
    Coor_X += 1
    basic.showNumber(Coor_X)
    basic.pause(1000)
})
function Validar_Coordenadas () {
    if (Coor_X <= 4 && Coor_Y <= 4) {
        Coordenadas = game.createSprite(Coor_X, Coor_Y)
        return true
    } else {
        return false
    }
}
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.South)
    Coor_Y += 1
    basic.showNumber(Coor_Y)
    basic.pause(1000)
})
let Coordenadas: game.LedSprite = null
let Coor_Y = 0
let Coor_X = 0
Coor_X = 0
Coor_Y = 0
let Vuelos = 0
basic.forever(function () {
    if (!(Validar_Coordenadas())) {
        basic.showIcon(IconNames.No)
    }
    if (input.buttonIsPressed(Button.AB)) {
        Coor_X = 0
        Coor_Y = 0
        Coordenadas.delete()
    }
})
