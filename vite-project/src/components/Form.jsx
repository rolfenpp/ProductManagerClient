import { useState } from "react";
import "../components/form.css";
const Form = ({ onAdd }) => {
  const [form, setForm] = useState({
    namn: "",
    beskrivning: "",
    sku: "",
    imgUrl: "",
    pris: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const product = form;
    console.log(product);
    onAdd(product);
    setForm({
      namn: "",
      beskrivning: "",
      sku: "",
      imgUrl: "",
      pris: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <div className="input-box">
          <label>Märke</label>
          <input
            required
            type="text"
            name="namn"
            value={form.namn}
            onChange={(event) => setForm({ ...form, namn: event.target.value })}
          />

          <label>Modell</label>
          <input
            required
            type="text"
            name="beskrivning"
            value={form.beskrivning}
            onChange={(event) =>
              setForm({ ...form, beskrivning: event.target.value })
            }
          />
        </div>

        <div className="input-box">
          <label>Regnr</label>
          <input
            required
            type="text"
            name="sku"
            value={form.sku}
            onChange={(event) => setForm({ ...form, sku: event.target.value })}
          />

          <label>URL</label>
          <input
            required
            type="text"
            name="imgurl"
            value={form.imgUrl}
            onChange={(event) =>
              setForm({ ...form, imgUrl: event.target.value })
            }
          />
        </div>
        <div className="input-box">
          <label>Pris</label>
          <input
            required
            type="text"
            name="pris"
            value={form.pris}
            onChange={(event) => setForm({ ...form, pris: event.target.value })}
          />
        </div>
      </div>
      <div className="button">
        <button>Lägg till</button>
      </div>
    </form>
  );
};

export default Form;
