import React from 'react';
import "./modal.css"
import AppContext from "../../AppContext";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SimpleMDE from "react-simplemde-editor";
import axios from "../../axios"

import "easymde/dist/easymde.min.css";

 const Modal = () => {
  const { modalActive, setModalActive, } = React.useContext(AppContext);
// const navigate = useNavigate()
   const [text, setText] = React.useState("");
   const [loading, setLoading] = React.useState(false);
   const [title, setTitle] = React.useState("");
   const [address, setAddress] = React.useState("");
   const [price, setPrice] = React.useState("");
   const [imageUrl, setImageUrl] = React.useState("");
   const inputRef = React.useRef(null);

   const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const {data} = await axios.post("/upload", formData);
      setImageUrl(data.url);
    } catch (err) {
      console.warn(err)
    }
   };

   const onClickRemoveImage = () => {
setImageUrl("");
   };

   const onChange = React.useCallback((text) => {
     setText(text);
   }, []);

   const onSubmit = async () => {
    try {
      setLoading(true);
      const fields = {
        title, text, address, price, imageUrl
      }
const {data} = await axios.post(`/posts/`, fields).then((res) => res.data);
console.log(data)

    } catch(err) {
      console.warn("Не вдалося створити оголошення")
    }
   }

   const options = React.useMemo(
     () => ({
       spellChecker: false,
       maxHeight: "300px",
       autofocus: true,
       placeholder: "Введите текст...",
       status: false,
       autosave: {
         enabled: true,
         delay: 1000,
       },
     }),
     []
   );
  return (
    <div
      className={modalActive ? "modal-w active" : "modal-w"}
      onClick={() => setModalActive(true)}
    >
      <Paper className="modal-w__content paper">
        <Typography variant="h5" className="h1-form">
          Створити нове оголошення
        </Typography>
        <form className="formAd">
          <div className="buttons-file">
            <Button
              onClick={() => inputRef.current.click()}
              className="file-inp"
              variant="outlined"
              size="large"
            >
              Завантажити превью
            </Button>
            <input
              ref={inputRef}
              type="file"
              onChange={handleChangeFile}
              hidden
            />
            {imageUrl && (
              <>
                <img
                  className="img-preview"
                  src={`http://localhost:4444${imageUrl}`}
                  alt="Uploaded"
                />
                <Button
                  variant="contained"
                  color="error"
                  className="delete-inp"
                  onClick={onClickRemoveImage}
                >
                  Видалити
                </Button>
              </>
            )}
          </div>
          <label className="formAd-lab" htmlFor="name">
            Назва оголошення:
          </label>
          <TextField
            variant="standard"
            placeholder="Назва оголошення..."
            className="formAd-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="formAd-lab" htmlFor="name">
            Адреса:
          </label>
          <TextField
            variant="standard"
            className="formAd-input"
            type="text"
            placeholder="Адреса"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label className="formAd-lab" htmlFor="name">
            Ціна:
          </label>
          <TextField
            variant="standard"
            className="formAd-input"
            type="text"
            placeholder="Ціна"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <SimpleMDE
            className="editor"
            value={text}
            onChange={onChange}
            options={options}
          />
          <div className="buttons">
            <Button
              size="large"
              variant="contained"
              className="submit-inp"
              type="submit"
              onClick={onSubmit}
            >
              Створити
            </Button>
            <Button
              size="large"
              className="exit-inp"
              type="submit"
              onClick={() => setModalActive(false)}
            >
              Cкасувати
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}
export default Modal;