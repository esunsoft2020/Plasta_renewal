<?php 
session_start();
	if($_SESSION['capt'] != $_POST['captcha'])
		{
			echo "<script>alert('자동가입방지문구가 올바르지 않습니다.');</script>";
		}else{
			echo "<script>alert('자동가입방지문구를 정확하게 입력하셨습니다.');</script>";
		}
	?>
<meta http-equiv="refresh" content="0 url=/">