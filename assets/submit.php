<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = htmlspecialchars($_POST["name"]);
    $email   = htmlspecialchars($_POST["email"]);
    $phone   = htmlspecialchars($_POST["phone"]);
    $purpose = htmlspecialchars($_POST["purpose"]);
    $message = htmlspecialchars($_POST["message"]);

    // Save to file (optional)
    $data = "Name: $name\nEmail: $email\nPhone: $phone\nPurpose: $purpose\nMessage:\n$message\n\n";
    file_put_contents("contacts.txt", $data, FILE_APPEND);

    // Send email
    $to = "mounttechnology01@gmail.com"; // Your email
    $subject = "New Contact Message from $name";
    $body = $data;
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
