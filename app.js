// 引用linebot SDK
var linebot = require('linebot');

// 填入辨識Line Channel的資訊
var bot = linebot({
  channelId: '1561378945',
  channelSecret: '95fcfd3628917213f187086aefef4128',
  channelAccessToken: 'Mq6EPwVLImgAhWI7O5Ol501taqb7z/MVSjVPqmwch6hg7ijJl5hQgqxgDBcaCuKDBBTRZLdM3Bf6guGQY2NDKbTKjAQM/VYumBWC4E3zZ3rMK+Ici0aVzbF7umvNrwMWI5cApEJQjQ1C5zSTJ+pVRQdB04t89/1O/w1cDnyilFU='
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
    // event.message.text是使用者傳給bot的訊息
    // 準備要回傳的內容
    var replyMsg = `Hello你剛才說的是:${event.message.text}`;
    // 透過event.reply(要回傳的訊息)方法將訊息回傳給使用者
    event.reply(replyMsg).then(function (data) {
        // 當訊息成功回傳後的處理
    }).catch(function (error) {
        // 當訊息回傳失敗後的處理
    });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 80, function);
