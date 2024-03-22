<?php 
if(!isset($pdo))
    header("Location: ../404.php");

function subscribe($pdo)
{
    $data_from_api = json_decode(file_get_contents('php://input'), true);
    $email = isset($data_from_api['email']) ? sanitize_data($data_from_api['email']) : '';

    if(!filter_var($email ?? '', FILTER_VALIDATE_EMAIL)) 
	{
        $response = array(
            "success" => false,
            "error" => true,
            "message" => "Enter the Valid Email ID.",
        );
	}
    else
    {
        $data = array(
            "email" => $email,
            "is_active" => 1
        );
        $sql = 'SELECT * FROM `tbl_subscribe` WHERE `email` = :email AND `is_active` = :is_active';
        $stmt = $pdo->prepare($sql);
        $stmt->execute($data);
        $result = $stmt->fetch();
        if(!$result)
        {
            $data_insert = array(
                "email" => $email
            );

            $sql_insert = "INSERT INTO `tbl_subscribe`(`email`) VALUES (:email)";
            $stmt_insert = $pdo->prepare($sql_insert);
            if($stmt_insert->execute($data_insert))
            {
                // subscribeEmail($pdo,$email);

                $response =  array(
                    "success" => true,
                    "message" => "Thank You For Subscribed."
                );
            }
            else
            {
                $response =  array(
                    "success" => false,
                    "error" => true,
                    "message" => "Somthing went wrong, please try again"
                );
            }
        }
        else
        {
            $response = array(
                "success" => false,
                "error" => true,
                "message" => "Already Subscribed From this Email ID", 
            );
        }
    }
    header("HTTP/1.1 200 OK");
    echo json_encode($response);
}
?>