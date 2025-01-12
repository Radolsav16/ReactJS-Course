import { useState } from "react"
import { gamesApi } from "../../service/games";
import { useNavigate } from "react-router-dom";

export default function Create(){
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        title: "",
        category: "",
        maxLevel: 0,
        imageUrl: "",
        summary:""
      });
    
      const onChangeHandler = (e) => {
    
        if (e.target.type !== "checkbox") {
          setFormData((oldData) => ({
            ...oldData,
            [e.target.name]: e.target.value,
          }));
        } else {
          setFormData((oldData) => ({
            ...oldData,
            [e.target.name]: e.target.checked,
          }));
        }
      };


      const onSubmit = async () => {
        formData.maxLevel = Number(formData.maxLevel);
        await gamesApi.createGame(formData)    
        navigate('/')
      }

    return(
        <>
        <section id="create-page" className="auth">
  <form id="create" onSubmit={onSubmit} >
    <div className="container">
      <h1>Create Game</h1>
      <label htmlFor="leg-title">Legendary title:</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Enter game title..."
        onChange={onChangeHandler}
      />
      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        placeholder="Enter game category..."
        onChange={onChangeHandler}

      />
      <label htmlFor="levels">MaxLevel:</label>
      <input
        type="number"
        id="maxLevel"
        name="maxLevel"
        min={1}
        placeholder={1}
        onChange={onChangeHandler}
      />
      <label htmlFor="game-img">Image:</label>
      <input
        type="text"
        id="imageUrl"
        name="imageUrl"
        placeholder="Upload a photo..."
        onChange={onChangeHandler}

      />
      <label htmlFor="summary">Summary:</label>
        <textarea name="summary" id="summary" defaultValue={""}   onChange={onChangeHandler} />
      <input className="btn submit" type="submit" defaultValue="Create Game"  />
    </div>
  </form>
</section>
        </>
    )
}