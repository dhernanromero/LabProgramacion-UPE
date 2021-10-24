<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
    <script src="https://code.jquery.com/jquery-3.6.0.js"integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="css/estilos.css">
    <script src="js/main.js" language="javascript" type="text/javascript" ></script>
</head>
    <body>
        <div class="container">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">DNI</th>
                    <th scope="col">Carrerra</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                         $ruta_archivo = "C:\\xampp\\htdocs\\lab-prog2021\\1013\\Consigna3\\estudiantes.txt";
                         $archivo = fopen($ruta_archivo, "r");
                        //  $datos = fread($archivo, filesize($ruta_archivo));
                        //  $datos_array = array(file($ruta_archivo));
                        $estudiantes = array();
                        //  print_r($datos_array);
                        while(!feof($archivo)) {
                            $line = fgets($archivo);
                            // echo($line."<br>");
                            if($line <> " " && $line <> "\n")
                            {
                                $test = explode(",",$line);
                                // print_r($test);
                                echo "<tr>";
                                echo "<td>".$test[0]."</td>";
                                echo "<td>".$test[1]."</td>";
                                echo "<td>".$test[2]."</td>";
                                echo "<td>".$test[3]."</td>";
                                echo "</tr>";
                            }
                        }
                        
                        fclose($archivo);
                    ?>
                </tbody>
            </table>
        </div>
    </body>
</html>
