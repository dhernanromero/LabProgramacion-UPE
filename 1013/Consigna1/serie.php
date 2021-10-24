<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
    <body>
        <?php
            for ($i=0; $i <= 400  ; $i++) { 
                if($i%2==0)
                {
                    // $resultado = strval($i).",";
                    $resultado = strval($i)."<br>";
                    echo $resultado;
                }
            }
        ?>
    </body>
</html>
