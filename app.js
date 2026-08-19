const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Práctica Final DevOps</title>

            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #111827;
                    color: white;
                    height: 100vh;
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                }

                .container {
                    padding: 40px;
                }

                h1 {
                    font-size: 48px;
                    margin-bottom: 10px;
                }

                p {
                    font-size: 20px;
                    color: #d1d5db;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <h1>¡Hola Mundo DevOps</h1>
                <p>Práctica Final CI/CD con GitHub Actions</p>
            </div>
        </body>
        </html>
    `);
});

module.exports = app;