<!DOCTYPE html>
<html lang="en">
<head>
    <script src="index.js" defer></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
<div class="calculator">
    <div class="btn-background">
    <div class="screen" data-screen>0</div>
    <div class="buttons-grid">
        <button class="btn-biege" data-ce>CE</button>
        <button class="btn-biege" data-operator>/</button>
        <button class="btn-biege" data-operator>x</button>
        <switch class="switch" data-switch>CHAIN CONST</switch>
        <button class="btn-white" data-number>7</button>
        <button class="btn-white" data-number>8</button>
        <button class="btn-white" data-number>9</button>
        <button class="btn-biege" data-delete>Del</button>
        <button class="btn-white" data-number>4</button>
        <button class="btn-white" data-number>5</button>
        <button class="btn-white" data-number>6</button>
        <button class="btn-biege" data-operator>-</button>
        <button class="btn-white" data-number>1</button>
        <button class="btn-white" data-number>2</button>
        <button class="btn-white" data-number>3</button>
        <button class="btn-biege" data-operator>+</button>
        </div>
        <div class="bottom-buttons">
        <button class="btn-white span-40percent" data-number>0</button>
        <button class="btn-white" data-dot>.</button>
        <button class="btn-orange span-40percent" data-equals>=</button>
        </div>
    </div>
</div>
</body>
</html>