player.onChat("run", function () {
    for (let index = 0; index < 100; index++) {
    	
    }
    mobs.spawn(CHICKEN, pos(CHICKEN, 10, 0))
})
mobs.onMobKilled(CHICKEN, function () {
    mobs.kill(
    mobs.target(NEAREST_PLAYER)
    )
})
