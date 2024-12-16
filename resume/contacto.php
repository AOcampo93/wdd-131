<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <!--Mis Estilos-->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <link rel="stylesheet" href="css/MisEstilos.css">
    <link rel="stylesheet" href="css/animate.css">
    <!--Favicon-->
    <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
    <link rel="manifest" href="favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <title>Arturo Ocampo | contact me</title>
</head>

<body>
    <header data-aos="zoom-in-down">
        <header data-aos="zoom-in-down">
            <nav class="navbar navbar-expand-lg navbar-light navbar-gray">
                <a class="navbar-brand" href="index.html">
                    <img src="images/AOH.png" alt="Arturo Ocampo | AOH">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="Menu collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="portafolio.html">Portfolio</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="contacto.php">Contact me<span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </header>
    <section class="general-background">

        <div class="center-box">
            <div class="text-box">
                <h3>Contact me</h3>
                <p>If you want to contact me, please fill out the form and send me your message. I'll contact you.</p>
                <form action="envio.php" method="post" id="contactForm">
                    <?php
                            $action = filter_input(INPUT_POST, 'action');
                            if ($action == NULL){
                             $action = filter_input(INPUT_GET, 'action');
                            }
                        
                            switch ($action) {
                                case 'empty':
                                    echo "<div id='alertForm'><p>Complete the fields</p></div>";
                                break;
                                case 'success':
                                    echo "<div id='success'><p>The message was sent to success</p></div>";
                                break;
                                default:
                                    echo '';
                                break;
                            }
                    ?>
                    <input type="text" placeholder="Name" id="clientName" name="clientName">
                    <input type="email" placeholder="Email" id="clientEmail" name="clientEmail">
                    <textarea name="clientMessage" id="clientMessage" cols="30" rows="10" placeholder="Write your message"></textarea>
                    <input id="btn-form" type="submit" value="Send the message">
                </form>
            </div>
            <div class="picture-box back-blue">
                <img id="img-portfolio" src="images/imgForm.png" alt="...">
            </div>
        </div>
    </section>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <!--MisScripts-->
    <script src="js/MisScripts.js"></script>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script src="js/portafolio.js"></script>
    <script>
        AOS.init();
    </script>


</body>

</html>