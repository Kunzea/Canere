<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Cano Quiz</title>
    <link rel="icon" type="image/png" href="Music Notes/Title Note.PNG">
    <link rel="stylesheet" type="text/css" media="screen" href="Cano.css" />
    <link href="https://fonts.googleapis.com/css?family=Merienda:400,700" rel="stylesheet">
    <script src="Cano-Main.js"></script>
</head>
<body class="CanoQuiz">
    <header>
        <a href="webfront.html" class="HomePage">Canere <br/> <em id="subtitle">Present active infinitive of <u>can&omacr;</u> - to sing</em></a>
    </header>
    <hr/>
    <div class="Explanation">
        <h3><em>Listen to the note and guess its pitch</em></h3>
        <h4>Click on the note to hear it played</h4>
    </div>
    <div class="buttons">
        <button type="audio" onclick="Note()" id="Quiz">?</button>
    <div>
        <label for="Answer" class="Explanation" >Pick the Note <br/>
        <select class="Answer" id="Ans" name="noteAns">
            <option value="" selected>Select One...</option>
            <option value="G3">G3</option>
            <option value="A4">A4</option>
            <option value="B4">B4</option>
            <option value="C4">C4</option>
            <option value="D4">D4</option>
            <option value="E4">E4</option>
            <option value="#F4">#F4</option>
            <option value="G4">G4</option>
            <option value="A5">A5</option>
            <option value="B5">B5</option>
            <option value="#C5">#C5</option>
            <option value="D5">D5</option>
            <option value="E5">E5</option>
            <option value="#F5">#F5</option>
            <option value="#G5">#G5</option>
            <option value="A6">A6</option>
        </select>
        </label>
    </div></div>
    <div>
        <p id="PrintResult" class="Explanation"></p>
    </div>
</body>
</html>
