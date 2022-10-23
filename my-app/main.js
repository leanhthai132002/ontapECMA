import Navigo from "navigo";
import ProductForm from "./admin/productForm";
import Product from "./admin/product";

const router = new Navigo("/",{linksSelector: "a"})
const print = async(content, id) => {
  document.querySelector("#app").innerHTML = await content.render(id)
  if (content.afterRender) {
    content.afterRender(id);
  }
}   

router.on({
  "/": () => print(Product),
  '/add': () => print(ProductForm),
  '/edit/:id': (data) => print(ProductForm, data.data.id)
});
router.resolve()

export default router