TimesOfLores.Character = function (state) {

    //  Will be populated from Character Selection screen

    this.game = state.game;
    this.walker = state.walker;

    this.baseHitPoints = 20;

    this.initiative = 6;
    this.hitPoints = 20;
    this.armorClass = 17;
    this.attackBonus = 4;
    this.damageRoll = 8;
    this.damageModifier = 4;

    this.keys = 0;
    this.gold = 0;

    this.isFighting = false;
    this.yourFightMove = false;

}

TimesOfLores.Character.prototype = {

    setFullHealth: function () {

        this.hitPoints = this.baseHitPoints;

    }

};

Object.defineProperty(TimesOfLores.Character.prototype, "health", {

    get: function () {

        if (this.hitPoints === this.baseHitPoints)
        {
            return 10;
        }
        else
        {
            return (this.hitPoints / this.baseHitPoints) * 10;
        }

    }

});

Object.defineProperty(TimesOfLores.Character.prototype, "damage", {

    get: function () {

        return this.game.rnd.integerInRange(1, this.damageRoll) + this.damageModifier;

    }

});
