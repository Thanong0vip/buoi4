function check(){
	var user = f.TenDangNhap.value;
	var pass = f.MatKhau.value;
	if(user=='')
	{
		alert('Tên đăng nhập không được bỏ trống');
		return false;
	}
	if(pass=='')
	{
		alert('Mật khẩu không được bỏ trống');
		return false;
	}
	return true;
}