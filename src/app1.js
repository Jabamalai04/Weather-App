const express = require('express');
const app = express();

app.get('/about', function (req, res) {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">

    <header style="background-color: #333; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">About Us</h1>
    </header>

    <main style="padding: 20px; text-align: center;">
        <img src="https://via.placeholder.com/300" alt="About Us Image" style="width: 300px; height: auto; border-radius: 10px;
`);
})

app.get('/help', function (req, res) {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Help Page</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f9f9f9;">

    <header style="background-color: #4CAF50; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Help Center</h1>
    </header>

    <main style="padding: 20px;">
        <section style="margin-bottom: 20px;">
            <h2 style="color: #333;">Frequently Asked Questions</h2>
            <p style="font-size: 16px; color: #555;">
                <strong>Q:</strong> How do I reset my password?<br>
                <strong>A:</strong> To reset your password, go to the login page and click on "Forgot Password". Follow the instructions to reset it via email.
            </p>
            <p style="font-size: 16px; color: #555;">
                <strong>Q:</strong> How can I contact support?<br>
                <strong>A:</strong> You can contact our support team by filling out the contact form below or by emailing us at support@example.com.
            </p>
        </section>

        <section>
            <h2 style="color: #333;">Contact Us</h2>
            <form style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                <label for="name" style="display: block; margin-bottom: 10px;">Name:</label>
                <input type="text" id="name" name="name" style="width: 100%; padding: 10px; margin-bottom: 20px; border: 1px solid #ddd; border-radius: 4px;" required>

                <label for="email" style="display: block; margin-bottom: 10px;">Email:</label>
                <input type="email" id="email" name="em
`);
})

app.get('/', function (req, res) {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
</head>
<body style="font-family: Arial, sans-serif; text-align: center; margin: 0; padding: 0; background-color: #f4f4f4;">

    <header style="background-color: #333; color: white; padding: 20px;">
        <h1 style="margin: 0;">Welcome to My Home Page</h1>
    </header>

    <main style="padding: 20px;">
        <p style="font-size: 18px; color: #333;">This is a simple home page with inline styles. You can customize it as needed.</p>
        <button style="padding: 10px 20px; font-size: 16px; color: white; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer;">
            Click Me
        </button>
    </main>

    <footer style="background-color: #333; color: white; padding: 10px; text-align: center; position: fixed; width: 100%; bottom: 0;">
        <p style="margin: 0;">&copy; 2024 My Website</p>
    </footer>

</body>
</html>
`);
})

app.listen(4000, function() {
    console.log("The server is upon port 4000");
})