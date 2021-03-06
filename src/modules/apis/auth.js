import axiosClient from './axiosClient';


const authApi = {
    login: (values) => {
        return axiosClient.post('QuanLyNguoiDung/DangNhap',values);
    },
    register: (values) => {
        return axiosClient.post('QuanLyNguoiDung/DangKy',{
            ...values,
            maNhom: "GP01"
        })
    },
    userDetail : () => {
        return axiosClient.post('QuanLyNguoiDung/ThongTinTaiKhoan');
    },


};
export default authApi;