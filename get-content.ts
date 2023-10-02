// ini akan saya jalankan menggunakan bun

const axios = require('axios');

axios.get('https://www.flashscore.co.id/sepak-bola/eropa/liga-champions/jadwal-pertandingan/')
    .then(function (response: any) {
        console.log(response?.data);
    })
    .catch(function (error: any) {
        console.log(error);
    });


    // itu adalah hal aneh, kira-kira kenapa ya???? 🤔