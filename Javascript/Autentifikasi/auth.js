function login_berhasil() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    if (username === "nama@gmail.com" && password === "student-nf23") {
      window.location.href = "success.html";
      alert("Login berhasil. Silahkan klik ok!")
    } else {
      alert("Login gagal.");
    }
  }
  