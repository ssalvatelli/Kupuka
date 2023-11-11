import "./Checkout.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, json } from "react-router-dom";
import Button from "@mui/material/Button";
import { db } from "../../../firebaseConfig";
import Backdrop from "@mui/material/Backdrop";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import Person from "@mui/icons-material/Person";
import TextField from "@mui/material/TextField";
import logoFull from "../../../assets/logoFull.png";
import outOfStock from "../../../assets/outOfStock.gif";
import { useContext, useEffect, useState } from "react";
import huggingFace from "../../../assets/huggingFace.png";
import InputAdornment from "@mui/material/InputAdornment";
import { CartContext } from "../../../context/CartContext";
import CircularProgress from "@mui/material/CircularProgress";
import loudlyCryingFace from "../../../assets/loudlyCryingFace.png";
import faceWithPeekingEye from "../../../assets/faceWithPeekingEye.png";
import { documentId, serverTimestamp, writeBatch } from "firebase/firestore";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Checkout() {
  const [orderId, setOrderId] = useState("");

  const [loading, setLoading] = useState(false);

  const [outOfStockList, setOutOfStockList] = useState([]);

  const { cart, addItem, removeItem, clear } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  useEffect(() => {
    outOfStockList.forEach((item) => {
      if (item.quantity > 0) {
        addItem(item, item.quantity);
      } else {
        removeItem(item.id);
      }
    });
  }, [outOfStockList]);

  const { errors, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      nombre: JSON.parse(localStorage.getItem("buyer"))?.nombre || "",
      telefono: JSON.parse(localStorage.getItem("buyer"))?.telefono || "",
      email: JSON.parse(localStorage.getItem("buyer"))?.email || "",
      confirm: JSON.parse(localStorage.getItem("buyer"))?.confirm || "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es obligatorio"),
      telefono: Yup.string().required("El teléfono es obligatorio"),
      email: Yup.string()
        .email("El email no es válido")
        .required("El email es obligatorio"),
      confirm: Yup.string()
        .required("La confirmarción del email es obligatoria")
        .oneOf([Yup.ref("email")], "Los emails deben coincidir"),
    }),
    validateOnChange: false,
    onSubmit: async (data) => {
      localStorage.setItem("buyer", JSON.stringify(data));

      let outOfStock = false;

      setOutOfStockList([]);

      setLoading(true);

      try {
        const batch = writeBatch(db);

        const items = await getDocs(
          query(
            collection(db, "items"),
            where(
              documentId(),
              "in",
              cart.map((item) => {
                return item.id;
              })
            )
          )
        );

        items.docs.forEach((doc) => {
          const itemInCart = cart.find((item) => item.id === doc.id);
          if (doc.data().stock >= itemInCart.quantity) {
            batch.update(doc.ref, {
              stock: doc.data().stock - itemInCart.quantity,
            });
          } else {
            outOfStock = true;
            itemInCart.stock = doc.data().stock;
            itemInCart.quantity = doc.data().stock;
            setOutOfStockList([...outOfStockList, itemInCart]);
          }
        });

        if (!outOfStock) {
          const order = {
            buyer: {
              name: data.nombre,
              phone: data.telefono,
              email: data.email,
            },
            items: cart.map((item) => {
              return {
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
              };
            }),
            date: serverTimestamp(),
            total,
          };

          const orderAdded = await addDoc(collection(db, "orders"), order);
          setOrderId(orderAdded.id);

          await batch.commit();

          clear();
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
  });

  if (outOfStockList.length > 0) {
    const emptyCart = cart.every((item) => item.quantity === 0);

    return (
      <>
        <img src={outOfStock} className="outOfStock" alt="Sin stock" />
        <h1>¡Ups!</h1>
        <div className="emoji">
          <h2>No nos esperábamos esto...</h2>
          <img src={faceWithPeekingEye} alt="Cara tapada con ojo espiando" />
        </div>
        {emptyCart ? (
          <h3>
            Parece que se nos terminaron todos los productos que elegiste.
          </h3>
        ) : (
          <h3>
            Parece que nos quedamos sin algunos de los productos que elegiste.
          </h3>
        )}
        <img src={loudlyCryingFace} alt="Cara llorando fuerte" />
        <h1>¡Pero no te preocupes!</h1>
        {emptyCart ? (
          <h2>Tenemos muchas más cosas para que no te quedes con las ganas.</h2>
        ) : (
          <h2>
            Ya modificamos tu carrito para que puedas seguir comprando sin
            problemas.
          </h2>
        )}
        <div className="emoji">
          <img src={huggingFace} alt="Cara con manos abrazando" />
          {emptyCart ? (
            <Link to="/">
              <Button variant="contained">Seguir comprando</Button>
            </Link>
          ) : (
            <Link to="/cart">
              <Button
                variant="contained"
                startIcon={<ShoppingCartOutlinedIcon />}
              >
                Ir al carrito
              </Button>
            </Link>
          )}
          <img src={huggingFace} alt="Cara con manos abrazando" />
        </div>
      </>
    );
  }

  return (
    <div className="checkout">
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Link to="/">
        <img src={logoFull} className="logoFull" alt="Logo" />
      </Link>
      {orderId.length > 0 ? (
        <>
          <h1>¡Muchas gracias por tu compra!</h1>
          <h2>Esperamos que la disfrutes mucho</h2>
          <h3>Este es tu número de orden:</h3>
          <h1>{orderId}</h1>
          <h3>Guardalo para futuras referencias</h3>
          <Link to="/">
            <button className="button">Seguir comprando</button>
          </Link>
        </>
      ) : (
        <>
          <h2>
            Tu compra por $ {new Intl.NumberFormat("es-AR").format(total)} está
            casi lista
          </h2>
          <h3>Solamente necesitamos unos pocos datos más</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              name="nombre"
              label="Nombre"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="info" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              value={values.nombre}
              onChange={handleChange}
              helperText={errors.nombre}
              error={errors.nombre ? true : false}
            />
            <TextField
              name="telefono"
              label="Teléfono"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone color="info" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              value={values.telefono}
              onChange={handleChange}
              helperText={errors.telefono}
              error={errors.telefono ? true : false}
            />
            <TextField
              name="email"
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="info" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              helperText={errors.email}
              error={errors.email ? true : false}
            />
            <TextField
              name="confirm"
              label="Confirmar email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="info" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              value={values.confirm}
              onChange={handleChange}
              helperText={errors.confirm}
              error={errors.confirm ? true : false}
            />
            <Button type="submit" variant="contained">
              Comprar
            </Button>
          </form>
        </>
      )}
    </div>
  );
}

export default Checkout;
