const express = require('express');
const app = express();
const morgan = require('morgan'); // Her HTTP isteğinde bağlantıyla ilgili info verir

app.use(morgan('short'));

// Rotaları Çağırma
const userRouter = require('./routes/user.js');
const loginRouter = require('./routes/login.js');
const updateUserRouter = require('./routes/update_user.js');
const registerRouter = require('./routes/register.js');

// Rotaları kullanma
app.use(userRouter);
app.use(loginRouter);
app.use(updateUserRouter);
app.use(registerRouter);

// Hoşgeldiniz
app.get("/", (req,res) => {
    res.json({info: "Atık Var RestFul Api", versiyon : "1.0"});
});

// Server Başlat
app.listen(3003, () => {
    console.log("Server çalıştırıldı ve 3003 portunu kullanıyor");
})