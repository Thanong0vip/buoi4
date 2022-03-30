function KiemTra()
{
	var hoten = f.HoTen.value;
	var ngaysinh = f.Ngay.value;
	var thangsinh = f.Thang.value;
	var namsinh = f.Nam.value;
	var nghenghiep = f.NgheNghiep.value;
	var ghichu = f.GhiChu.value;
	if(hoten == '')
	{
		alert('Họ tên không được bỏ trống!');
		return false;
	}
	if(ngaysinh == '')
	{
		alert('Vui Lòng chọn ngày sinh');
		return false;
	}
		if(thangsinh == '')
	{
		alert('Vui Lòng chọn tháng sinh');
		return false;
	}
		if(namsinh == '')
	{
		alert('Vui Lòng chọn năm sinh');
		return false;
	}
	if(nghenghiep == '')
	{
		alert('Vui Lòng chọn nghề nghiệp');
		return false;
	}
	if(ghichu == '')
	{
		alert('Ghi chú không được bỏ trống!');
		return false;
	}
	return true;
}