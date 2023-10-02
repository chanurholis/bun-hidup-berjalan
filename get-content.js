// ini akan saya jalankan menggunakan node

import axios from "axios";

axios.get('https://www.flashscore.co.id/sepak-bola/eropa/liga-champions/jadwal-pertandingan/')
    .then(function (response) {
        console.log(response?.data);
    })
    .catch(function (error) {
        console.log(error);
    });
