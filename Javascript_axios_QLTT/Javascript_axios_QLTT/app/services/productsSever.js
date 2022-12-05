
function ProductService() {
    this.getListProduct = function () {
        return axios({
            url:"https://638b32eb81df38ab34639f86.mockapi.io/api/Product",
            method:"GET",
        });
    };

     this.addProductApi = function (product) {
         return axios({
             url: "https://638b32eb81df38ab34639f86.mockapi.io/api/Product",
             method: "POST",
             data: product,
         });
     };

     this.deleteListProductApi = function (id) {
         return axios({
             url: `https://638b32eb81df38ab34639f86.mockapi.io/api/Product/${id}`,
             method: "DELETE",
         });
     };

     this.getproductByIdApi = function (id) {
         return axios({
             url: `https://638b32eb81df38ab34639f86.mockapi.io/api/Product/${id}`,
             method: "GET",
         });
     };

     this.updateProductApi = function (product) {
         return axios({
             url: `https:638b32eb81df38ab34639f86.mockapi.io/api/Product/${product.id}`,
             method: "PUT",
             data: product,
         });
     };

};