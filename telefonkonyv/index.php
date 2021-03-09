<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title>Kalácska Bálint</title>
        <link href="formazas.css" rel="stylesheet" type="text/css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.0/mustache.min.js"></script>
        <script src="feldolgoz2.js" type="text/javascript"></script>
    </head>
    <body>
        <main>
            <header><h1>Telefonkönyv</h1></header>
            <nav>
                <ul>
                   
                    <li id="beolvas"><a href="#">Beolvas</a></li>
                </ul>

            </nav>

            <section>
                <form class="urlap">
                    <label for="nev">név:</label>
                    <input type="text" id="nev" name="nev" value="Valaki Vagyok">
                    <label for="tel">tel:</label>
                    <input type="text" id="tel" name="tel" value="03-30-1234-567">
                    <label for="kep">kép:</label>
                    <input type="text" id="kep" name="kep">
                    <br>
                    <input type="button" id="kuld" value="kuld" novalidate></input>
                </form>
            </section>
            <section>
                <form class="urlap szerkesztes elrejt">
                    <label for="id2">ID:</label>
                     <input type="text" id="id2" name="id2">
                    <label for="nev2">név:</label>
                    <input type="text" id="nev2" name="nev2" >
                    <label for="tel2">tel:</label>
                    <input type="text" id="tel2" name="tel2" >
                    <label for="kep2">kép:</label>
                    <input type="text" id="kep2" name="kep2">
                    <br>
                    <input type="button" id="modosit" value="Módosít" novalidate></input>
                    <br>
                    <input type="button" id="megse" value="Mégse" novalidate></input>
                </form>
            </section>
            <article>


            </article>
        </main>
    </body>
</html>
