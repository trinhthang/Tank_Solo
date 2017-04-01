//Thông tin về game
About = function(game) {

};
var button;
var background;
var titleScreen;
About.prototype = {
    preload: function(game) {
        game.load.image('background', 'assets/About.png');
        game.load.image('button', 'assets/button1.png');

    },

    create: function(game) {
      // Anh em thấy background nào đẹp thì thay vào
        background = game.add.tileSprite(0, 0, 960, 640, 'background');

        // Tạo button start
        this.createButton(game, "Comback",875,615 , 170, 55,
            function() {
                this.state.start("MainMenu");
            });
            //Thông tin nhóm(còn thiếu)
          game.add.text(350,100, 'TANK OF WAR',{
            font:"40px Arial",
            fill:"#48ed00",
            align:"center"
          });
          game.add.text(350,150, 'WEB - GEN6 - CI',{
            font:"40px Arial",
            fill:"#48ed00",
            align:"center"
          });
          game.add.text(350,200, 'Thông tin team:',{
            font:"30px Arial",
            fill:"#48ed00",
            align:"center"
          });
          game.add.text(350,250, '- Phạm Huy Mạnh',{
            font:"30px Arial",
            fill:"#48ed00",
            align:"center"
          });
          game.add.text(350,300, '- Trần Quang Hải',{
            font:"30px Arial",
            fill:"#48ed00",
            align:"center"
          });
          game.add.text(350,350, '- Trịnh Văn Thắng',{
            font:"30px Arial",
            fill:"#48ed00",
            align:"center"
          });
          game.add.text(350,400, '- Lâm Văn Thư',{
            font:"30px Arial",
            fill:"#48ed00",
            align:"center"
          });

    },
    // Hàm tạo button
    createButton: function(game, string, x, y, w, h, callback) {
        var button1 = game.add.button(x, y, 'button', callback, this, 2, 1, 0);
        button1.anchor.setTo(0.5, 0.5);
        button1.width = w;
        button1.height = h;
        var txt = game.add.text(button1.x, button1.y, string, {
            font: "40px Arial",
            fill: "#ffffff",
            align: "center",

        });
        txt.anchor.setTo(0.5, 0.5);
    }
};