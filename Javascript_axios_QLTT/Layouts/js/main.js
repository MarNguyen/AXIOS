var productService = new ProductService();

function getEle(id) {
	return document.getElementById(id);
};



function getListOurTeach() {
	productService.getListProduct()
		.then(function (result) {
			renderOurTeach(result.data);
		})
		.catch(function (error) {
			console.log(error);
		});
}; getListProduct();

function renderOurTeach(data) {
	var result = "";
	data.forEach(function (teach, index) {
		let check = teach.loaiND;
		if (check === "GV") {
			result += `
        <div class="col-lg-3 col-sm-6 col-12">
			<div class="card user__card animate__animated animate__fadeIn">
				<div class="user__img">
					<img class="card-img-top" src="./image/${teach.hinhAnh}" alt="" />
				</div>
				<div class="card-body text-center">
					<h1 class="user__language">${teach.ngonNgu}</h6>
					<h1 class="card-title user__name">${teach.hoTen}</h1>
					<p class="card-text user__info">${teach.moTa}</p>
				</div>
			</div>
		</div>
        `;
		}
	});
	getEle("userList").innerHTML = result;
};


