import { create, update, getProduct } from "../api/axios";
import router from "../main";

const ProductForm = {
  render: async (id) => {
    let product = {
      name: "",
      price: "",
      image: "",
    };
    if (id) {
      const response = await getProduct(id);
      product = response.data;
    }

    return `
        <form>
            <div class='form-group'>
                <label>Tên</label>
                <input value="${product.name}" class='form-control' id='name'/>
            </div>
            <div class='form-group'>
                <label>Giá</label>
                <input value="${product.price}" class='form-control' id='price'/>
            </div>
            <div class='form-group'>
                <label>Ảnh</label>
                <input value="${product.image}" class='form-control' id='image'/>
            </div>
        <div>
            <img id="show-thumbnail" />
        </div>
            <div class='form-group'>
                <button type='button' class='btn btn-success' id='btn'>
                    ${id ? "Cập nhật" : "Tạo mới"}
                </button>
            </div>
        </form>
        `;
  },
  afterRender: (id) => {
    // console.log('afterRender', id);
    const submitBtn = document.querySelector("#btn");
    submitBtn.addEventListener("click", async () => {
      const name = document.querySelector("#name").value;
      const price = document.querySelector("#price").value;
      const image = document.querySelector("#image").value;

      const submitData = {
        name: name,
        price: price,
        image: image,
      };


      if (id) {
        await update(id, submitData);
        router.navigate("/");
      } else {
        await create(submitData);
        router.navigate("/");
      }
    });
  },
};
export default ProductForm;