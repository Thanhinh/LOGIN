function login() {
    // Lấy giá trị nhập vào từ ô input tên đăng nhập và mật khẩu
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kiểm tra xem tên đăng nhập và mật khẩu có đúng hay không
    if (username === "DangTinh" && password === "DangTinh") {
      // Nếu đúng, chuyển hướng đến trang khác
      window.location.href = "https://thanhinh.github.io/BMSMONITOR/";
    } else {
      // Nếu sai, thông báo lỗi
      alert("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng nhập lại!");
    }
  }