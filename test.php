<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "dataum";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $user = $_POST["user"];
    $email = $_POST["email"];
    $correct = $_POST["cpwd"];
    $repeat = $_POST["rpwd"];

  

    $sql = "SELECT username FROM details WHERE username='$user'";
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
        $update_sql = "UPDATE details SET email='$email', cpwd='$correct', rpwd='$repeat' WHERE username='$user'";
        if ($conn->query($update_sql) === TRUE) {
            echo "Record updated successfully";
        } else {
            echo "Error updating record: " . $conn->error;
        }
    } else {
        $insert_sql = "INSERT INTO details(username, email, cpwd, rpwd) VALUES ('$user','$email','$correct','$repeat')";
        if ($conn->query($insert_sql) === TRUE) {
            echo "Inserted data successfully";
        } else {
            echo "Error: " . $insert_sql . "<br>" . $conn->error;
        }
    }

    $conn->close();
}
?>
<!DOCTYPE html>
<html>

<head>
    <title>newlogin form</title>
</head>

<body>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <h1>SIGN IN</h1>
        <div>Username:<input type="text" name="user"><br><br>
            Email:<input type="text" name="email"><br><br>
            Correct Password:<input type="password" name="cpwd"><br><br>
            Repeat Password:<input type="password" name="rpwd"><br><br>
            <button type="submit">Submit</button></div>
    </form>
</body>

</html>
