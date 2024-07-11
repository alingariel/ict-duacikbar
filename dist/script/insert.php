<?php

    require_once __DIR__ . "/getConnection.php";

    if($_SERVER['REQUEST_METHOD'] == "POST"){
      
      $nama_lengkap = $_POST['nama-lengkap'];
      $nama_panggilan = $_POST['nama-panggilan'];
      $kelas = $_POST['kelas'];
      $jurusan = $_POST['jurusan'];
      $divisi = $_POST['divisi'];
      $nomor_telephone = $_POST['nomor_telephone'];
      $alasan = $_POST['alasan'];
  
      $connection = getConnection();
  
      $sql = "INSERT INTO form(nama_lengkap, nama_panggilan, kelas, jurusan, divisi, nomor_telephone, alasan) 
      VALUES(?, ?, ?, ?, ?, ?, ?)";
      $result = $connection->prepare($sql);
      $result->execute([$nama_lengkap, $nama_panggilan, $kelas, $jurusan, $divisi, $nomor_telephone, $alasan]);

      $connection = null;
    }

    header('Location: /contact.html');
    exit();

?>