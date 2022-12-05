var productService = new ProductService();

function getEle(id){
return document.getElementById(id)
};
// API
function getListProduct() {
    productService.getListProduct()
    .then(function (result) {
        renderHTML(result.data);
    })
    .catch(function (error) {
        alert("error!");
    })
};

getListProduct();
// render product
function renderHTML(data) {
    var content = "";
    data.forEach(function (products, index) {
        content += `
        <tr>
            <td>${index + 1}</td>
            <td>${products.taiKhoan + 1}</td>
            <td>${products.matKhau + 1}</td>
            <td>${products.hoTen + 1}</td>
            <td>${products.email + 1}</td>
            <td>${products.ngonNgu+ 1}</td>
            <td>${products.loaiND + 1}</td>
            <td>
                <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editProduct('${products.id}')">Edit</button>
                <button class="btn btn-danger" onclick="deleteProduct('${products.id}')">Delete</button>
            </td>
        </tr>
        `;
    })
    getEle("tblDanhSachNguoiDung").innerHTML= content;
}

// update product
function updateProduct(id) {
    var taiKhoan = getEle("TaiKhoan").value;
    var hoTen = getEle("HoTen").value;
    var matKhau = getEle("MatKhau").value;
    var email = getEle("Email").value;
    var hinhAnh = getEle("HinhAnh").value;
    var loaiND = getEle("loaiNguoiDung").value;
    var ngonNgu = getEle("loaiNgonNgu").value;
    var moTa = getEle("MoTa").value;

    var product = new Product(id, taiKhoan, hoTen, matKhau, email, loaiND, ngonNgu, moTa, hinhAnh);

    productService.updateProduct(product)
    .then(function (result) {
        alert("UpdateSuccess!")
        getListProduct();
    })
    .catch(function (erorr) {
        alert("erorr!")
    })
}
// delete product
function deleteProduct(id) {
    productService.deleteListProductApi(id)
    .then(function (result) {
        alert("DeleteSuccess!");
        getListProduct();
    })
    .catch(function (error) {
        alert("error!");
    })
}
// Button
getEle("btnThemNguoiDung").onclick = function () {
    var button = `<button id="addUser" class="btn btn-success" onclick="addUser()">Thêm Người Dùng</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = button;
}
//add product
function addProductApi() {
    var taiKhoan = getEle("TaiKhoan").value;
    var hoTen = getEle("HoTen").value;
    var matKhau = getEle("MatKhau").value;
    var email = getEle("Email").value;
    var hinhAnh = getEle("HinhAnh").value;
    var loaiND = getEle("loaiNguoiDung").value;
    var ngonNgu = getEle("loaiNgonNgu").value;
    var moTa = getEle("MoTa").value;
    // Validation
    var isValid = true;
    isValid &= vaLiDaTion.checkSpace(hoTen, "spHoTen", "(*) Vui lòng nhập Họ và Tên")
        && vaLiDaTion.checkName(hoTen, "spHoTen", "(*) Tên Không Được Có Ký Tự Đặc Biệt");

    isValid &= vaLiDaTion.checkSpace(matKhau, "spMatKhau", "(*) Không Để Mật Khẩu Trống")
        && vaLiDaTion.checkPassword(matKhau, "spMatKhau", "(*) Mật Khẩu (Chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)");

    isValid &= vaLiDaTion.checkSpace(email, "spEmail", "(*) Không Để Email Trống")
        && vaLiDaTion.checkEmail(email, "spEmail", "(*) Nhập Đúng Định Dạng Mail");

    isValid &= vaLiDaTion.checkSpace(hinhAnh, "spHinhAnh", "(*) Không Để Hình Ảnh Trống");

    isValid &= vaLiDaTion.checkOption("loaiNguoiDung", "spLoaiND", "(*) Vui lòng chọn Người Dùng");

    isValid &= vaLiDaTion.checkOption("loaiNgonNgu", "spNgonNgu", "(*) Vui lòng chọn Loại Ngôn Ngữ");

    isValid &= vaLiDaTion.checkSpace(moTa, "spMoTa", "(*) Không Để Mô Tả Trống")
        && vaLiDaTion.kyTu(moTa, "spMoTa", "(*) Mô Tả Quá 60 Ký Tự", 61);

    isValid &= vaLiDaTion.checkSpace(taiKhoan, "spTaiKhoan", "(*) Không Để Tài Khoản Trống");

    var dsnv =  DSNV();
    if (TrueOrFalse) {
        isValid &= vaLiDaTion.trungTK(taiKhoan, "spTaiKhoan", "Tài Khoản Của Bạn Bị Trùng", dsnv);
    };


    if (!isValid) return;
    // ADD User
    var user = new FormUser(id, taiKhoan, hoTen, matKhau, email, hinhAnh, loaiND, ngonNgu, moTa);
    return user
    var product = new Product(id, taiKhoan, hoTen, matKhau, email, loaiND, ngonNgu, moTa, hinhAnh);
   productService.addProductApi(product)
   .then(function (reusult) {
    alert("AddSuccess!")
    getListProduct();
    document.getElementsByClassName("close")[0].click();
   })
   .catch(function (error) {
    alert("error!")
   })
}
// edit product
function editProduct() {
    var title = "Cập Nhật Người Dùng";
    document.getElementsByClassName("modal-title")[0].innerHTML = title;
    var button = `<button id="updateProduct" class="btn btn-info" onclick="updateProduct(${id})">Cập Nhật</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = button;

    productService.getproductByIdApi(id)
    .then(function (result) {
        var product = result.data;
        getEle("TaiKhoan").value = product.taiKhoan;
            getEle("HoTen").value = product.hoTen;
            getEle("MatKhau").value = product.matKhau;
            getEle("Email").value = product.email;
            getEle("HinhAnh").value = product.hinhAnh;
            getEle("loaiNguoiDung").value = product.loaiND;
            getEle("loaiNgonNgu").value = product.ngonNgu;
            getEle("MoTa").value = product.moTa;

            getEle("TaiKhoan").disabled = true;
    })
    .catch(function (erorr) {
        alert("erorr!")
    })
}


