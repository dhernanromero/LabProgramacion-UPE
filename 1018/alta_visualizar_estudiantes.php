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
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Launch demo modal</button>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="oculto" id="formDatos" action="alta_estudiante.php" method="POST" >
                        <div class="form-group">
                            <label for="Nombre" id="lblNombre" class="col-xs-12 col-sm-12 col-md-4 col-lg-4 from-label">Nombre</label>
                            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <input type="text" class="form-control" name="nombre" id="nombre" aria-describedby="" max="30" required>
                                <div class="invalid-feedback">
                                    Insgrese nombre 
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="Apellido" id="lblApellido" class="col-xs-12 col-sm-12 col-md-4 col-lg-4 from-label">Apellido</label>
                            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <input type="text" class="form-control" name="apellido" id="apellido" aria-describedby=""  max="30" required>
                                <div class="invalid-feedback">
                                    Insgrese apellido 
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="nroDocumento" id="lblNrooDoc" class="col-xs-12 col-sm-12 col-md-8 col-lg-8 from-label">Nro de Documento</label>
                                <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <input type="text" class="form-control" name="documento" id="numeroDocumento" required>
                                        <div class="invalid-feedback">
                                        El numero ingresado no es valido
                                    </div>
                                </div>
                            </div>     
                            <div class="form-group">
                                <label for="Carrera" id="lblCarrera" class="col-xs-12 col-sm-12 col-md-4 col-lg-4 from-label">Carrera</label>
                                <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <input type="text" class="form-control" name="carrera" id="carrera" aria-describedby=""  max="30" required>
                                    <div class="invalid-feedback">
                                        Insgrese carrera
                                    </div>
                                </div>
                            </div>           
                        </div>
                        <div class="container">
                            <button type="submit" class="btn btn-primary" id="enviar">Enviar</button>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
        <?php
            if ($_POST) {    
                if(isset($_POST["nombre"]) && isset($_POST["apellido"]) && isset($_POST["documento"]) && isset($_POST["carrera"]))
                {
                    $nombre = $_POST["nombre"];
                    $apellido = $_POST["apellido"];
                    $documento = $_POST["documento"];
                    $carrera = $_POST["carrera"];

                    $servername = "localhost";$user= "username";$pass= "password"; $dbname ="myDBPDO";
                    try 
                    {
                        $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $user,
                        $pass);
                        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                        $sql = "INSERT INTO MyGuests (firstname, lastname, email)
                        VALUES ('John', 'Doe', 'john@example.com')";
                        // use exec() because no results are returned
                        $conn->exec($sql);
                        echo "New record created successfully";
                    }
                    catch(PDOException $e)
                    {
                     echo $sql . "<br>" . $e->getMessage();
                    }
                    $conn = null;
                    
                    // //read the first line of the file and echo
                    // fseek($archivo, 0);
                    // echo fgets($archivo);
                    
                    //close the file
                    fclose($archivo);
                }
            }
        ?>
    </body>
</html>
