TimesOfLores.WellDone = function (game) {

    this.game = game;

};

TimesOfLores.WellDone.prototype = {

    create: function () {

        this.add.image(0, 0, 'gameOver');

        TimesOfLores.cursors.up.onDown.add(this.backToMenu, this);
        TimesOfLores.cursors.down.onDown.add(this.backToMenu, this);
        TimesOfLores.spacebar.onDown.add(this.backToMenu, this);
        TimesOfLores.gamepadA.onDown.add(this.backToMenu, this);

    },

    backToMenu: function () {

        TimesOfLores.level = 1;
        TimesOfLores.character.reset();

        this.state.start('MainMenu');

    },

    render: function () {

        TimesOfLores.pixelContext.drawImage(game.canvas, 0, 0, 32, 32, 0, 0, TimesOfLores.width, TimesOfLores.height);

    }

};
