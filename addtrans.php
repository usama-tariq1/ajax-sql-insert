<?php 



    include "link.php";


    $name = $_POST['name'];
    $amount = $_POST['amount'];
    $date = $_POST['date'];
    $desc = $_POST['desc'];
    $type = $_POST['type'];
    
    $sql = "INSERT INTO trans (t_name , t_amount , t_date , t_desc , t_type) VALUES ( '$name', '$amount' , '$date' , '$desc' , '$type' ) ";

    $r = mysqli_query($link , $sql);

    if($r > 0 ){
        echo $name;
        echo "Transection Added";
    }
    else{
        echo $sql;
        echo "Unable to add Transaction";
    }

?>