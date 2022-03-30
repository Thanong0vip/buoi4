function check(){
	var ten = f.HovaTen.value;
	var diachi = f.DiaChi.value;
	var email = f.Email.value;
	var dt = f.DienThoai.value;
	var emEXP = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
	var dtEXP = /((09|03|07|08|05)+([0-9]{8})\b)/
	if(ten=='')
	{
		alert('Tên không được bỏ trống');
		return false;
	}
	if(diachi=='')
	{
		alert('Địa chỉ không được bỏ trống');
		return false;
	}
	if(email=='')
	{
		alert('Email không được bỏ trống');
		return false;
	}
	if(dt=='')
	{
		alert('Điện thoại không được bỏ trống');
		return false;
	}
	
	if(!emEXP.test(email))
	{
		alert('Email không hợp lệ');
		return false;
	}
	if(!dtEXP.test(dt))
	{
		alert('Điện thoại không hợp lệ');
		return false;
	}
	return true;
}