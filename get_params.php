<!DOCTYPE html>
<html lang="en">

<head>
    <title>Form</title>
</head>

<body>
    <?php
    $colorsInInventory = ["black", "yellow", "white" , "default"];

    $shoeSize = $_GET["shoeSz"];
    $shoe_clr = $_GET["shoe_clr"];
    $shoe_mat = $_GET["material"];
    $ship_adr = $_GET["address"];

    echo "<h1> Please Confirm your order :</h1>";    
    echo "<h3> Shoe Size: " . $shoeSize . "</h3>";
    if ($shoe_clr == "default"){
        echo "<h3> You Havent chose color </h3>";
    }
    if (!in_array($shoe_clr, $colorsInInventory)) {
        echo "<h3>" . $shoe_clr . " Is Out Of Stock</h3>";
        echo  "<h5>Only [black,yellow,white] have left in stock :( </h5>";
    }
    echo "<h3> Shoe Material: " . $shoe_mat . "</h3>";
    echo "<h3> Shipment address: " . $ship_adr . "</h3>";

    ?>
</body>

</html>