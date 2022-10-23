import { getProducts, remove } from "../api/axios"
import router from "../main";

const Product = {
    render: async () => {
        const response = await getProducts()
        const { data } = response;
        return /*html*/`
        <div class="container">
            <div class="row">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Ảnh</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.map((product) => `
                        <tr>
                        <td>${product.id}</td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td><img src="${product.image}" /></td>
                        <td> 
                            <button class='btn btn-danger' data-id="${product.id}" >Xoá</button>
                            <a href="/edit/${product.id}"> <button class="btn btn-warning">Edit</button></a>
                        </td>
                    </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </div>
        `;
    },
    afterRender: () => {
      const deleteBtns = document.querySelectorAll(".btn-danger");
      deleteBtns.forEach((btn) => {
        btn.addEventListener("click", async () => {
          const btnId = btn.dataset.id;
          confirm("a diu sua");
          await remove(btnId);
          router.navigate("/");
          
        });
      });
    },
  };
export default Product;