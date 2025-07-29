<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel and VueJS</title>

    <!-- Bootstrap CDN (Optional: if not using via npm) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />

    @vite(['resources/js/app.js']) {{-- Loads JS & CSS via Vite --}}
</head>
<body>
    <div id="app"></div>
</body>
</html>
