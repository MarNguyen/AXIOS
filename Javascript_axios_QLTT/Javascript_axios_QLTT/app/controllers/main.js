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
    var button = `<button id="addUser" class="btn btn-success" onclick="addUser()">Th??m Ng?????i D??ng</button>`;
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
    isValid &= vaLiDaTion.checkSpace(hoTen, "spHoTen", "(*) Vui l??ng nh???p H??? v?? T??n")
        && vaLiDaTion.checkName(hoTen, "spHoTen", "(*) T??n Kh??ng ???????c C?? K?? T??? ?????c Bi???t");

    isValid &= vaLiDaTion.checkSpace(matKhau, "spMatKhau", "(*) Kh??ng ????? M???t Kh???u Tr???ng")
        && vaLiDaTion.checkPassword(matKhau, "spMatKhau", "(*) M???t Kh???u (Ch???a ??t nh???t 1 k?? t??? s???, 1 k?? t??? in hoa, 1 k?? t??? ?????c bi???t)");

    isValid &= vaLiDaTion.checkSpace(email, "spEmail", "(*) Kh??ng ????? Email Tr???ng")
        && vaLiDaTion.checkEmail(email, "spEmail", "(*) Nh???p ????ng ?????nh D???ng Mail");

    isValid &= vaLiDaTion.checkSpace(hinhAnh, "spHinhAnh", "(*) Kh??ng ????? H??nh ???nh Tr???ng");

    isValid &= vaLiDaTion.checkOption("loaiNguoiDung", "spLoaiND", "(*) Vui l??ng ch???n Ng?????i D??ng");

    isValid &= vaLiDaTion.checkOption("loaiNgonNgu", "spNgonNgu", "(*) Vui l??ng ch???n Lo???i Ng??n Ng???");

    isValid &= vaLiDaTion.checkSpace(moTa, "spMoTa", "(*) Kh??ng ????? M?? T??? Tr???ng")
        && vaLiDaTion.kyTu(moTa, "spMoTa", "(*) M?? T??? Qu?? 60 K?? T???", 61);

    isValid &= vaLiDaTion.checkSpace(taiKhoan, "spTaiKhoan", "(*) Kh??ng ????? T??i Kho???n Tr???ng");

    var dsnv =  DSNV();
    if (TrueOrFalse) {
        isValid &= vaLiDaTion.trungTK(taiKhoan, "spTaiKhoan", "T??i Kho???n C???a B???n B??? Tr??ng", dsnv);
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
    var title = "C???p Nh???t Ng?????i D??ng";
    document.getElementsByClassName("modal-title")[0].innerHTML = title;
    var button = `<button id="updateProduct" class="btn btn-info" onclick="updateProduct(${id})">C???p Nh???t</button>`;
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


