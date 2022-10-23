import Navigo from "navigo";
import { getProduct } from "../api/axios";

const ProductForm = {
    render: async(id) => {
        let product = {
            name: "",
            price: "",
            image: "",
        };
        if (id) {
            const response = await getProduct(id)          
            product = response.data  
        }
        return`
            <form>
                <div>
                    <label>Ten</label>
                    <input value="${product.name}" class="form-control" id="name" />
                </div>
                <div>
                    <label>Ten</label>
                    <input value="${product.name}" class="form-control" id="name" />
                </div>
                <div>
                    <label>Ten</label>
                    <input value="${product.name}" class="form-control" id="name" />
                </div>
                <div>
                    <label>Ten</label>
                    <input value="${product.name}" class="form-control" id="name" />
                </div>
            </form>
        `
    }
}