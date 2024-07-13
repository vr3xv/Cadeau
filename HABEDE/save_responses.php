<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userName = $_POST['userName'];
    $userWellbeing = $_POST['userWellbeing'];
    $userBirthday = $_POST['userBirthday'];
    $userGiftResponse = $_POST['userGiftResponse'];

    // Simpan data ke dalam file atau database
    // Contoh: menyimpan ke dalam file
    $file = fopen("responses.txt", "a");
    fwrite($file, "Name: $userName\n");
    fwrite($file, "Wellbeing: $userWellbeing\n");
    fwrite($file, "Birthday: $userBirthday\n");
    fwrite($file, "Gift Response: $userGiftResponse\n");
    fwrite($file, "--------------------------\n");
    fclose($file);

    // Redirect atau tampilkan pesan sukses
    echo "Data berhasil disimpan!";
} else {
    echo "Invalid request!";
}
?>
