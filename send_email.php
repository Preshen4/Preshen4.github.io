<?php
require_once('vendor/autoload.php'); // Include Sendinblue's API library

// Replace YOUR_API_KEY with your actual Sendinblue API key
$config = SendinBlue\Client\Configuration::getDefaultConfiguration()->setApiKey('api-key', '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');
$apiInstance = new SendinBlue\Client\Api\TransactionalEmailsApi(
    new GuzzleHttp\Client(),
    $config
);

// Check if the form has been submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Set up the email parameters
    $sendSmtpEmail = new \SendinBlue\Client\Model\SendSmtpEmail();
    $sendSmtpEmail->setSubject($subject);
    $sendSmtpEmail->setSender(new \SendinBlue\Client\Model\SendSmtpEmailSender(array('name' => $name, 'email' => $email)));
    $sendSmtpEmail->setTo(array(array('email' => 'Preshen4@gmail.com', 'name' => 'Preshen Govender')));
    $sendSmtpEmail->setHtmlContent($message);

    // Send the email
    try {
        $result = $apiInstance->sendTransacEmail($sendSmtpEmail);
        echo 'Your message has been sent. Thank you for contacting me!';
    } catch (Exception $e) {
        echo 'An error occurred while sending your message. Please try again later.';
    }
}
?>

