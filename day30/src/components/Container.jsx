import style from "../styles/container.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../slices/productSlice";
import Cards from "./Cards";
import { useEffect } from "react";
const Container = () => {
  const products = useSelector((state) => state.product.productItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    console.log(products);
  }, []);
  return (
    <div className={style.mainContainer}>
      {products.length !== 0 ? (
        <div className={style.container}>
          {products.map((el, index) => (
            <Cards
              title={el.title}
              description={el.description}
              imageUrl={el.image}
              price={el.price}
              key={el.id}
            />
          ))}
        </div>
      ) : (
        <div className={style.loader}></div>
      )}
    </div>
  );
};

export default Container;
