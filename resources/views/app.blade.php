<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Kenn Cedric Jala | Portfolio</title>
        <meta
            name="description"
            content="A minimalist and professional portfolio website built with Vue 3, Vite, TypeScript, Tailwind CSS, and Vue Router."
        >
        <meta name="theme-color" content="#0f172a">
        <meta property="og:title" content="Kenn Cedric Jala | Portfolio">
        <meta
            property="og:description"
            content="A premium single-page portfolio template for a modern developer, designer, or creative professional."
        >
        <meta property="og:type" content="website">

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
        >

        <script>
            (() => {
                const storedTheme = localStorage.getItem('portfolio-theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                }
            })();
        </script>

        @vite('resources/js/app.ts')
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
