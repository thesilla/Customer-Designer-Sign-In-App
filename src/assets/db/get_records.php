<?php


header("Access-Control-Allow-Origin: *");
/*
require_once 'db_connect.php';



// set static database connection (not datbase object)
        
        

$sql = "SELECT * FROM sign_in_records";



$stmt = $dbc->prepare($sql);
//"SELECT name FROM ? LIMIT ?"
//$stmt->bind_param("ss", $obj->table, $obj->limit);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($outp);

/*

 if ($result = $dbc->query($sql)) {

            
            // Create tickets array
            $tickets = [];



            while ($row = $result->fetch()) {

                $tickets[] = [
                	$row['ticketID'], $row['subject'], $row['body'], $row['userID'], $row['requestedby'], $row['datesubmitted'], $row['dateresolved'], $row['orderID'], $row['priority'], $row['category'], $row['status'], $row['assignedto'], $row['completed'], $row['vendor'], $row['reason']
            ];

            }
            // return tickets array
            return $tickets;
        } else {

            echo "<p> Could not run query </p>";
        }
    }

*/

//"mysql:host=localhost;dbname=client_sign_in", "root", ""
$sql = "SELECT * FROM sign_in_records";
 $conn = new mysqli("localhost", "root", "", "client_sign_in");
$stmt = $conn->prepare($sql);
//$stmt->bind_param("ss", $obj->table, $obj->limit);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($outp);







?>