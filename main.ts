namespace SpriteKind {
    export const fish = SpriteKind.create()
    export const weed = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hammer,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f 8 8 8 8 8 8 8 f . . . . 
        . . . f 8 8 8 8 8 8 8 f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . f 8 f . . . . . . . . . 
        . . . f 8 8 8 f . . . . . . . . 
        . . f 8 8 8 f . . . . . . . . . 
        . f 8 8 8 f . . . . . . . . . . 
        f 8 8 8 f 7 f . . . . . . . . . 
        . f 8 f . f 7 f . . . . . . . . 
        . . f . . . f 7 f . . . . . . . 
        . . . . . . . f 7 f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        . . f 8 8 f . . . . . . . . . . 
        . . f 8 8 f . . . . . . . . . . 
        . . f 8 8 f f f f f f f . . . . 
        . . f 8 8 f 7 7 7 7 7 f . . . . 
        . . f 8 8 f f f f f f f . . . . 
        . . f 8 8 f . . . . . . . . . . 
        . . f 8 8 f . . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . f 8 f . . . . . . . . . 
        . . . f 8 8 8 f . . . . . . . . 
        . . f 8 8 8 f . . . . . . . . . 
        . f 8 8 8 f . . . . . . . . . . 
        f 8 8 8 f 7 f . . . . . . . . . 
        . f 8 f . f 7 f . . . . . . . . 
        . . f . . . f 7 f . . . . . . . 
        . . . . . . . f 7 f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f 8 8 8 8 8 8 8 f . . . . 
        . . . f 8 8 8 8 8 8 8 f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    130,
    false
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.fish, SpriteKind.fish, function (sprite, otherSprite) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fish, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        otherSprite.destroy(effects.bubbles, 200)
        info.changeScoreBy(1)
    }
})
let projectile2: Sprite = null
let projectile: Sprite = null
let fish1: Sprite = null
let sharkShooter = 0
let shark: Sprite = null
let sharkSpawn = 0
let hammer: Sprite = null
tiles.setTilemap(tilemap`level1`)
hammer = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f 8 8 8 8 8 8 8 f . . . . 
    . . . f 8 8 8 8 8 8 8 f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . . . . f 7 f . . . . . . . 
    . . . . . . f 7 f . . . . . . . 
    . . . . . . f 7 f . . . . . . . 
    . . . . . . f 7 f . . . . . . . 
    . . . . . . f 7 f . . . . . . . 
    . . . . . . f 7 f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(hammer, 100, 100)
hammer.setStayInScreen(true)
let level = 0
game.onUpdate(function () {
    if (info.score() >= 6) {
        while (sharkSpawn == 0) {
            shark = sprites.create(img`
                .............ccfff..............
                ............cddbbf..............
                ...........cddbbf...............
                ..........fccbbcf............ccc
                ....ffffffccccccff.........ccbbc
                ..ffbbbbbbbbbbbbbcfff.....cdbbc.
                ffbbbbbbbbbcbcbbbbcccff..cddbbf.
                fbcbbbbbffbbcbcbbbcccccfffdbbf..
                fbbb1111ff1bcbcbbbcccccccbbbcf..
                .fb11111111bbbbbbcccccccccbccf..
                ..fccc33cc11bbbbccccccccfffbbcf.
                ...fc131c111bbbcccccbdbc...fbbf.
                ....f33c111cbbbfdddddcc.....fbbf
                .....ff1111fbdbbfddcc........fff
                .......cccccfbdbbfc.............
                .............fffff..............
                `, SpriteKind.Enemy)
            animation.runImageAnimation(
            shark,
            [img`
                .............ccfff..............
                ...........ccddbcf..............
                ..........ccddbbf...............
                ..........fccbbcf...............
                .....fffffccccccff.........ccc..
                ...ffbbbbbbbcbbbbcfff....ccbbc..
                ..fbbbbbbbbcbcbbbbcccff.cdbbc...
                ffbbbbbbffbbcbcbbbcccccfcdbbf...
                fbcbbb11ff1bcbbbbbcccccffbbf....
                fbbb11111111bbbbbcccccccbbcf....
                .fb11133cc11bbbbcccccccccccf....
                ..fccc31c111bbbcccccbdbffbbcf...
                ...fc13c111cbbbfcddddcc..fbbf...
                ....fccc111fbdbbccdcc.....fbbf..
                ........ccccfcdbbcc........fff..
                .............fffff..............
                `,img`
                .............ccfff..............
                ............cddbbf..............
                ...........cddbbf...............
                ..........fccbbcf............ccc
                ....ffffffccccccff.........ccbbc
                ..ffbbbbbbbbbbbbbcfff.....cdbbc.
                ffbbbbbbbbbcbcbbbbcccff..cddbbf.
                fbcbbbbbffbbcbcbbbcccccfffdbbf..
                fbbb1111ff1bcbcbbbcccccccbbbcf..
                .fb11111111bbbbbbcccccccccbccf..
                ..fccc33cc11bbbbccccccccfffbbcf.
                ...fc131c111bbbcccccbdbc...fbbf.
                ....f33c111cbbbfdddddcc.....fbbf
                .....ff1111fbdbbfddcc........fff
                .......cccccfbdbbfc.............
                .............fffff..............
                `,img`
                ..............cfff..............
                ............ccddbf..............
                ...........cbddbff.........ccc..
                ..........fccbbcf.........cbbc..
                ...fffffffccccccff.......cdbc...
                .ffcbbbbbbbbbbbbbcfff....cdbf...
                fcbbbbbbbbbcbbbbbbcccff.cdbf....
                fbcbbbbffbbbcbcbbbcccccffdcf....
                fbb1111ffbbbcbcbbbccccccbbcf....
                .fb11111111bbcbbbccccccccbbcf...
                ..fccc33cb11bbbbcccccccfffbbf...
                ...fc131c111bbbcccccbdbc..fbbf..
                ....f33c111cbbccdddddbc....fff..
                .....ff1111fdbbccddbcc..........
                .......cccccfdbbbfcc............
                .............fffff..............
                `,img`
                .............ccfff..............
                ............cddbbf..............
                ...........cddbbf...............
                ..........fccbbcf............ccc
                ....ffffffccccccff.........ccbbc
                ..ffbbbbbbbbbbbbbcfff.....cdbbc.
                ffbbbbbbbbbcbcbbbbcccff..cddbbf.
                fbcbbbbbffbbcbcbbbcccccfffdbbf..
                fbbb1111ff1bcbcbbbcccccccbbbcf..
                .fb11111111bbbbbbcccccccccbccf..
                ..fccc33cc11bbbbccccccccfffbbcf.
                ...fc131c111bbbcccccbdbc...fbbf.
                ....f33c111cbbbfdddddcc.....fbbf
                .....ff1111fbdbbfddcc........fff
                .......cccccfbdbbfc.............
                .............fffff..............
                `],
            200,
            true
            )
            shark.follow(hammer, 12)
            sharkSpawn = 1
        }
    }
    if (info.score() >= 6) {
        if (sharkSpawn == 1) {
            shark.follow(hammer, 12)
            sharkSpawn = 2
        }
        sharkShooter = 1
    }
    if (info.score() >= 10) {
        sharkShooter = 2
    }
    if (info.score() >= 60) {
    	
    }
})
game.onUpdateInterval(5000, function () {
    if (info.score() > 8) {
        fish1 = sprites.create(img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.fish)
        tiles.placeOnRandomTile(fish1, assets.tile`myTile1`)
    }
})
game.onUpdateInterval(2000, function () {
    if (sharkShooter == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . 2 1 1 1 1 3 2 2 . . . . . . 
            . . 1 1 1 1 1 1 1 3 2 2 3 3 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 3 3 3 3 . . 
            . . 1 1 1 1 1 1 3 3 2 2 . . . . 
            . . 2 1 1 1 1 2 2 . . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, shark, -50, 0)
        animation.runImageAnimation(
        shark,
        [img`
            .................ccfff..............
            ................cddbbf..............
            ...............cddbbf...............
            ..............fccbbcf............ccc
            ........ffffffccccccff.........ccbbc
            ......ffbbbbbbbbbbbbbcfff.....cdbbc.
            ....ffbbbbbbbbbcbcbbbbcccff..cddbbf.
            ....fbcbbbbbffbbcbcbbbcccccfffdbbf..
            ....fbbb1111ff1bcbcbbbcccccccbbbcf..
            .....fb11111111bbbbbbcccccccccbccf..
            ......fccc33cc11bbbbccccccccfffbbcf.
            .......fc131c111bbbcccccbdbc...fbbf.
            ........f33c111cbbbfdddddcc.....fbbf
            .........ff1111fbdbbfddcc........fff
            ...........cccccfbdbbfc.............
            .................fffff..............
            `,img`
            .................ccfff..............
            ................cddbbf..............
            ...............cddbbf...............
            .........ffffffccbbcf...............
            ......fffbbbbbbbbcccff..............
            .....fbbbbbbbbbbbbbbbcfff......ccccc
            .....bcbbbbbffbcbcbbbbcccff...cdbbbc
            .....bbb1111ffbbcbcbbbcccccffcddbbc.
            .....fb11111111bcbcbbbcccccccbdbbf..
            ......fccc33c11bbbbbbcccccccccbbcf..
            .......fc131cc11bbbbccccccccffbccf..
            ........f33c1111bbbcccccbdbc..fbbcf.
            .........ff1111cbbbfdddddcc....fbbf.
            ...........ccc1fbdbbfddcc.......fbbf
            ..............ccfbdbbfc..........fff
            .................fffff..............
            `,img`
            ..................ccfff.............
            .................cddbbf.............
            ........fffffffffddbbf..............
            .......fbbbbbbbbbfcbcf..............
            .......fbbc111bffbbccffff...........
            .......fb111111ffbbbbbcccff....ccccc
            ........f1cc3311bbcbcbbccccf..cdbbbc
            ........fcc131c1bbbcbcbcccccfcddbbc.
            .........f111111bbbcbcbccccccbdbbf..
            .........f1111111bbbbbccccccccbbcf..
            ..........f111111bbbbcccccccffbccf..
            ...........c1111cbbbcccccbdbc.fbbcf.
            ............cc11cbbbfddddddc...fbbf.
            ..............cffbdbbfdddcc.....fbbf
            .................fbdbbfcc........fff
            ..................fffff.............
            `,img`
            ....................ccfff...........
            ..........fffffffffcbbbbf...........
            .........fbbbbbbbbbfffbf............
            .........fbb111bffbbbbff............
            .........fb11111ffbbbbbcff..........
            .........f1cccc11bbcbcbcccf.........
            ..........fc1c1c1bbbcbcbcccf...ccccc
            ............c3331bbbcbcbccccfccddbbc
            ...........c333c1bbbbbbbcccccbddbcc.
            ...........c331c11bbbbbcccccccbbcc..
            ..........cc13c111bbbbccccccffbccf..
            ..........c111111cbbbcccccbbc.fccf..
            ...........cc1111cbbbfdddddc..fbbcf.
            .............cccffbdbbfdddc....fbbf.
            ..................fbdbbfcc......fbbf
            ...................fffff.........fff
            `,img`
            ...........fffffff...ccfff..........
            ..........fbbbbbbbffcbbbbf..........
            ..........fbb111bbbbbffbf...........
            ..........fb11111ffbbbbff...........
            ..........f1cccc1ffbbbbbcff.........
            ..........ffc1c1c1bbcbcbcccf........
            ...........fcc3331bbbcbcbcccf..ccccc
            ............c333c1bbbcbcbccccfcddbbc
            ............c333c1bbbbbbbcccccddbcc.
            ............c333c11bbbbbccccccbbcc..
            ...........cc331c11bbbbccccccfbccf..
            ...........cc13c11cbbbcccccbbcfccf..
            ...........c111111cbbbfdddddc.fbbcf.
            ............cc1111fbdbbfdddc...fbbf.
            ..............cccfffbdbbfcc.....fbbf
            ....................fffff........fff
            `,img`
            ....................................
            ....................................
            ....................................
            ...............ccffff...............
            ..............cddbbbf...............
            .......ffffffcddbbbf................
            .....ffbbbbbbbbbbbbbcfff.......ccccc
            ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
            ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
            .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
            .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
            .ffbb1111fffbbcbbbbcccccccbcffbccf..
            ..ff111111111bbbbccccccbbbcc..fbbcf.
            ....ccccccc111bdbbbfddbccc.....ffbbf
            ........ccccccfbdbbbfcc..........fff
            ...............ffffff...............
            `],
        500,
        false
        )
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 1 1 . . . . . . . 
            . . . . . 3 3 . 3 1 . . . . . . 
            . . 3 2 2 3 . . . 1 . . . . . . 
            . 3 3 1 2 2 . . . 3 1 . . . . . 
            . 3 1 1 1 3 2 2 . 3 1 . . . . . 
            . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
            . 3 1 1 1 1 1 1 1 3 1 1 1 1 . . 
            . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
            . 3 1 1 1 3 2 2 . 3 1 . . . . . 
            . 3 3 1 2 2 . . . 3 1 . . . . . 
            . . 3 2 2 3 . . . 1 . . . . . . 
            . . . . . 3 3 . 3 1 . . . . . . 
            . . . . . . 3 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . 2 1 1 1 1 2 2 . . . . . . . 
            . . 1 1 1 1 1 1 3 3 2 2 . . . . 
            . . 1 1 1 1 1 1 1 1 3 3 3 3 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 3 2 2 3 3 . . 
            . . 2 1 1 1 1 3 2 2 . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 3 . . . 3 3 . . . . . 
            . . . . 3 3 . . . . 3 3 . . . . 
            . . . 3 3 . . . . . . 3 . . . . 
            . . . 3 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 3 . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . 3 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 3 . . . 
            . . . . 3 . . . . . . 3 3 . . . 
            . . . . 3 3 . . . . 3 3 . . . . 
            . . . . . 3 3 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        false
        )
    }
    if (sharkShooter == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . 2 1 1 1 1 3 2 2 . . . . . . 
            . . 1 1 1 1 1 1 1 3 2 2 3 3 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 3 3 3 3 . . 
            . . 1 1 1 1 1 1 3 3 2 2 . . . . 
            . . 2 1 1 1 1 2 2 . . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, shark, -66, 0)
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . 2 1 1 1 1 3 2 2 . . . . . . 
            . . 1 1 1 1 1 1 1 3 2 2 3 3 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 3 3 3 3 . . 
            . . 1 1 1 1 1 1 3 3 2 2 . . . . 
            . . 2 1 1 1 1 2 2 . . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, shark, 66, 0)
        animation.runImageAnimation(
        shark,
        [img`
            .................ccfff..............
            ................cddbbf..............
            ...............cddbbf...............
            ..............fccbbcf............ccc
            ........ffffffccccccff.........ccbbc
            ......ffbbbbbbbbbbbbbcfff.....cdbbc.
            ....ffbbbbbbbbbcbcbbbbcccff..cddbbf.
            ....fbcbbbbbffbbcbcbbbcccccfffdbbf..
            ....fbbb1111ff1bcbcbbbcccccccbbbcf..
            .....fb11111111bbbbbbcccccccccbccf..
            ......fccc33cc11bbbbccccccccfffbbcf.
            .......fc131c111bbbcccccbdbc...fbbf.
            ........f33c111cbbbfdddddcc.....fbbf
            .........ff1111fbdbbfddcc........fff
            ...........cccccfbdbbfc.............
            .................fffff..............
            `,img`
            .................ccfff..............
            ................cddbbf..............
            ...............cddbbf...............
            .........ffffffccbbcf...............
            ......fffbbbbbbbbcccff..............
            .....fbbbbbbbbbbbbbbbcfff......ccccc
            .....bcbbbbbffbcbcbbbbcccff...cdbbbc
            .....bbb1111ffbbcbcbbbcccccffcddbbc.
            .....fb11111111bcbcbbbcccccccbdbbf..
            ......fccc33c11bbbbbbcccccccccbbcf..
            .......fc131cc11bbbbccccccccffbccf..
            ........f33c1111bbbcccccbdbc..fbbcf.
            .........ff1111cbbbfdddddcc....fbbf.
            ...........ccc1fbdbbfddcc.......fbbf
            ..............ccfbdbbfc..........fff
            .................fffff..............
            `,img`
            ..................ccfff.............
            .................cddbbf.............
            ........fffffffffddbbf..............
            .......fbbbbbbbbbfcbcf..............
            .......fbbc111bffbbccffff...........
            .......fb111111ffbbbbbcccff....ccccc
            ........f1cc3311bbcbcbbccccf..cdbbbc
            ........fcc131c1bbbcbcbcccccfcddbbc.
            .........f111111bbbcbcbccccccbdbbf..
            .........f1111111bbbbbccccccccbbcf..
            ..........f111111bbbbcccccccffbccf..
            ...........c1111cbbbcccccbdbc.fbbcf.
            ............cc11cbbbfddddddc...fbbf.
            ..............cffbdbbfdddcc.....fbbf
            .................fbdbbfcc........fff
            ..................fffff.............
            `,img`
            ....................ccfff...........
            ..........fffffffffcbbbbf...........
            .........fbbbbbbbbbfffbf............
            .........fbb111bffbbbbff............
            .........fb11111ffbbbbbcff..........
            .........f1cccc11bbcbcbcccf.........
            ..........fc1c1c1bbbcbcbcccf...ccccc
            ............c3331bbbcbcbccccfccddbbc
            ...........c333c1bbbbbbbcccccbddbcc.
            ...........c331c11bbbbbcccccccbbcc..
            ..........cc13c111bbbbccccccffbccf..
            ..........c111111cbbbcccccbbc.fccf..
            ...........cc1111cbbbfdddddc..fbbcf.
            .............cccffbdbbfdddc....fbbf.
            ..................fbdbbfcc......fbbf
            ...................fffff.........fff
            `,img`
            ...........fffffff...ccfff..........
            ..........fbbbbbbbffcbbbbf..........
            ..........fbb111bbbbbffbf...........
            ..........fb11111ffbbbbff...........
            ..........f1cccc1ffbbbbbcff.........
            ..........ffc1c1c1bbcbcbcccf........
            ...........fcc3331bbbcbcbcccf..ccccc
            ............c333c1bbbcbcbccccfcddbbc
            ............c333c1bbbbbbbcccccddbcc.
            ............c333c11bbbbbccccccbbcc..
            ...........cc331c11bbbbccccccfbccf..
            ...........cc13c11cbbbcccccbbcfccf..
            ...........c111111cbbbfdddddc.fbbcf.
            ............cc1111fbdbbfdddc...fbbf.
            ..............cccfffbdbbfcc.....fbbf
            ....................fffff........fff
            `,img`
            ....................................
            ....................................
            ....................................
            ...............ccffff...............
            ..............cddbbbf...............
            .......ffffffcddbbbf................
            .....ffbbbbbbbbbbbbbcfff.......ccccc
            ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
            ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
            .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
            .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
            .ffbb1111fffbbcbbbbcccccccbcffbccf..
            ..ff111111111bbbbccccccbbbcc..fbbcf.
            ....ccccccc111bdbbbfddbccc.....ffbbf
            ........ccccccfbdbbbfcc..........fff
            ...............ffffff...............
            `],
        500,
        false
        )
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 1 1 . . . . . . . 
            . . . . . 3 3 . 3 1 . . . . . . 
            . . 3 2 2 3 . . . 1 . . . . . . 
            . 3 3 1 2 2 . . . 3 1 . . . . . 
            . 3 1 1 1 3 2 2 . 3 1 . . . . . 
            . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
            . 3 1 1 1 1 1 1 1 3 1 1 1 1 . . 
            . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
            . 3 1 1 1 3 2 2 . 3 1 . . . . . 
            . 3 3 1 2 2 . . . 3 1 . . . . . 
            . . 3 2 2 3 . . . 1 . . . . . . 
            . . . . . 3 3 . 3 1 . . . . . . 
            . . . . . . 3 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . 2 1 1 1 1 2 2 . . . . . . . 
            . . 1 1 1 1 1 1 3 3 2 2 . . . . 
            . . 1 1 1 1 1 1 1 1 3 3 3 3 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 3 2 2 3 3 . . 
            . . 2 1 1 1 1 3 2 2 . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 3 . . . 3 3 . . . . . 
            . . . . 3 3 . . . . 3 3 . . . . 
            . . . 3 3 . . . . . . 3 . . . . 
            . . . 3 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 3 . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . 3 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 3 . . . 
            . . . . 3 . . . . . . 3 3 . . . 
            . . . . 3 3 . . . . 3 3 . . . . 
            . . . . . 3 3 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        false
        )
        animation.runImageAnimation(
        projectile2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 3 . . . . . . 
            . . . . . . 1 3 . 3 3 . . . . . 
            . . . . . . 1 . . . 3 2 2 3 . . 
            . . . . . 1 3 . . . 2 2 1 3 3 . 
            . . . . . 1 3 . 2 2 3 1 1 1 3 . 
            . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
            . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
            . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
            . . . . . 1 3 . 2 2 3 1 1 1 3 . 
            . . . . . 1 3 . . . 2 2 1 3 3 . 
            . . . . . . 1 . . . 3 2 2 3 . . 
            . . . . . . 1 3 . 3 3 . . . . . 
            . . . . . . . 1 1 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . 2 2 1 1 1 1 2 . . 
            . . . . 2 2 3 3 1 1 1 1 1 1 . . 
            . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
            . . . . . . 2 2 3 1 1 1 1 2 . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 3 3 . . . 3 . . . . . 
            . . . . 3 3 . . . . 3 3 . . . . 
            . . . . 3 . . . . . . 3 3 . . . 
            . . . . . . . . . . . . 3 . . . 
            . . . . . . . . . . . . . . . . 
            . . 3 . . . . . . . . . . . . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . . . . . . . . . . . . 3 . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 . . . . . . . . . . . . 
            . . . 3 3 . . . . . . 3 . . . . 
            . . . . 3 3 . . . . 3 3 . . . . 
            . . . . . . . . . 3 3 . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        false
        )
    }
})
game.onUpdateInterval(2000, function () {
    fish1 = sprites.create(img`
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . c c 
        . . . c 4 d 4 4 4 4 4 1 c c 4 c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
        . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
        f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
        . f 4 4 4 4 1 c c 4 4 d f f . . 
        . . f f 4 d 4 4 4 4 4 c f . . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.fish)
    tiles.placeOnRandomTile(fish1, assets.tile`myTile1`)
})
