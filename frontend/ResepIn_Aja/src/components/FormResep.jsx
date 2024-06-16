import { useState } from "react";

const FormResep = () => {
  const [bahanList, setBahanList] = useState([""]);

  // function konsultasi() {
  //   window.open(
  //     "https://api.whatsapp.com/send?phone=6282336713898&text=Saya%20Mau%20Konsultasi%20Nih%20Kak"
  //   );
  //   console.log("test");
  // }

  const handleInputChange = (index, event) => {
    const values = [...bahanList];
    values[index] = event.target.value;
    setBahanList(values);
  };

  const handleAddBahan = () => {
    setBahanList([...bahanList, ""]);
  };

  const handleRemoveBahan = (index) => {
    const values = [...bahanList];
    values.splice(index, 1);
    setBahanList(values);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Data yang akan dikirim", bahanList);
      // const response = await axios.post('/api/bahan', { bahan: bahanList });
    } catch (error) {
      console.error("Terjadi kesalahan saat mengirim data", error);
    }
  };
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="bodyform">
      <section className="bodyformp">
        <div className="section-info d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <h6>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis recusandae quisquam sed sint id, possimus nihil modi
                  voluptatibus provident a voluptatem quos cumque et quas quis,
                  deleniti odit iste ipsa? ipsum dolor sit amet consectetur
                  adipisicing elit. Nobis recusandae quisquam sed sint id,
                  possimus nihil modi voluptatibus provident a voluptatem quos
                  cumque et quas quis, deleniti odit iste ipsa?
                </h6>
              </div>
              <div className="col-3 m-auto">
                <img
                  className="fotomasak"
                  src="/src/assets/iconseflog2.png"
                  alt="Girl thinking"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="form-set">
        <div className="form">
          <h1 className="bagikan">Bagikan Resep Kamu</h1>
          <p className="text-resep text-center">
            Masukan Semua jenis Bahan Resep Masakan Yang Ingin Kamu Buat
            Disini...
          </p>
          {/* <img src="src/assets/img/image1.jpg" alt="image" /> */}
          <div className="container">
            <img src={file} className="custom-image" />
            <div>
              <h4 className="text-add">Upload Resep Masakan Kamu :</h4>
              <input className="setfile" type="file" onChange={handleChange} />
            </div>
          </div>
        </div>
        <form className="formsetting" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nama Masakan :</label>
            <input
              type="text"
              className="form-control"
              placeholder="Masukan Nama Masakan Kamu"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Penjelasan Singkat :</label>
            <textarea
              className="form-control"
              placeholder="Tuliskan dengan singkat terkait masakan kamu"
            ></textarea>
          </div>
          {/* <button type="submit" className="btn btn-primary">
            Submit

          </button> */}
          <div className="row align-items-center">
            <div className="column right">
              <label htmlFor="NamBahan"> Cara Memasak :</label> <br />
              <p className="textset-up fst-italic">
                {" "}
                (Tuliskan secara detail terkait tata cara memasak)
              </p>
              {bahanList.map((bahan, index) => (
                <div className="bahanform" key={index}>
                  <input
                    type="text"
                    value={bahan}
                    onChange={(event) => handleInputChange(index, event)}
                    placeholder="Langkah-Langkah"
                  />
                  <button
                    className="btn-dlt"
                    type="button"
                    onClick={() => handleRemoveBahan(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn-add"
                    type="button"
                    onClick={handleAddBahan}
                  >
                    Add
                  </button>
                  {/* <button type="button" onClick={konsultasi}>
                Konsultasi
              </button> */}
                </div>
              ))}
            </div>
            <div className="column left">
              <label htmlFor="NamBahan"> Nama Bahan :</label> <br />
              <p className="textset-up fst-italic">
                {" "}
                (Masukan Semua Jenis Bahan Masakan kamu)
              </p>
              {bahanList.map((bahan, index) => (
                <div className="bahanform" key={index}>
                  <input
                    type="text"
                    value={bahan}
                    onChange={(event) => handleInputChange(index, event)}
                    placeholder="Nama Bahan"
                  />
                  <button
                    className="btn-dlt"
                    type="button"
                    onClick={() => handleRemoveBahan(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn-add"
                    type="button"
                    onClick={handleAddBahan}
                  >
                    Add
                  </button>
                  {/* <button type="button" onClick={konsultasi}>
                Konsultasi
              </button> */}
                </div>
              ))}
            </div>
          </div>
          {/* <div className="mb-3">
            <label className="caramasak">Cara Memasak :</label>
            <textarea
              className="form-control"
              placeholder="Tuliskan secara detail terkait tata cara memasak"
            ></textarea>
          </div> */}
          <div className="mb-3">
            <label className="form-label">
              Masukan Url Video Turial Resep Masakan Kamu :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Masukan url video kamu"
            />
          </div>
          <button type="button" className="simpanbutton">
            Simpan Resep Mu
          </button>
        </form>
      </section>
    </div>
  );
};
export default FormResep;
