<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->file(base_path('../index.html'));
})->name('home');

Route::get('/styles.css', function () {
    return response()->file(base_path('../styles.css'), [
        'Content-Type' => 'text/css; charset=UTF-8',
    ]);
});

Route::get('/script.js', function () {
    return response()->file(base_path('../script.js'), [
        'Content-Type' => 'application/javascript; charset=UTF-8',
    ]);
});
