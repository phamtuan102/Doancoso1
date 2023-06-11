function redirectToPage(){
    window.location.href= "dangnhap.html";
}
document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the input values
    const fullName = document.getElementById("fullName").value;
    const birthdate = document.getElementById("birthdate").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const agreeTerms = document.getElementById("agreeTerms").checked;
  
    // Perform form validation
    if (!fullName || !birthdate || !email || !phoneNumber || !password || !confirmPassword || !agreeTerms) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Mật khẩu và Xác nhận mật khẩu không khớp.");
      return;
    }
  
    // Simulate registration process
    // In this example, we are logging the data to the console
    console.log("Họ và tên:", fullName);
    console.log("Ngày sinh:", birthdate);
    console.log("Email:", email);
    console.log("Số điện thoại:", phoneNumber);
    console.log("Mật khẩu:", password);
  
    // Reset the form fields
    document.getElementById("registerForm").reset();
  
    alert("Đăng ký thành công!");
    // Redirect to the login page or another desired page
    window.location.href = "dangnhap.html";
});
function login(){
    window.location.href= "index.html";
}
  