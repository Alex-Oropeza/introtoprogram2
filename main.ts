namespace SpriteKind {
    export const Princess = SpriteKind.create()
}
function Score () {
    info.changeScoreBy(1)
    music.playSound(music.sounds(Sounds.PowerUp))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Conversation()
    Score()
})
function Conversation () {
    player2.say("Hello!", 500)
    pause(500)
    princess.say("Hello!", 500)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    Conversation()
})
let princess: Sprite = null
let player2: Sprite = null
player2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 b b 3 3 3 3 b b 3 3 3 . 
    . 3 3 3 b b 3 3 3 3 b b 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player2, 100, 100)
player2.setStayInScreen(true)
princess = sprites.create(sprites.castle.princessFront0, SpriteKind.Princess)
princess.setPosition(50, 50)
