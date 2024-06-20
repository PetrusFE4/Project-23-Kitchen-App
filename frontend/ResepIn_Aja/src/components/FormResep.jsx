import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormResep = () => {
  const [bahanList, setBahanList] = useState([""]);
  const [instruksiList, setInstruksi] = useState([""]);
  const [gambar, setGambar] = useState("");
  const [kategori, setKategori] = useState("");
  const [nama_resep, setNamaResep] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [subKategori, setSubkategori] = useState("");
  const [video, setVideo] = useState("");
  const userId = JSON.parse(localStorage.getItem("user"))?.id;
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  if (!userId) {
    return <p style={{ textAlign: "center" }}>Lakukan login terlebih dahulu.</p>;
  }

  const handleInputChange = (index, event) => {
    const values = [...bahanList];
    values[index] = event.target.value;
    setBahanList(values);
  };

  const handleInputList = (index, event) => {
    const values = [...instruksiList];
    values[index] = event.target.value;
    setInstruksi(values);
  };

  const handleAddBahan = () => {
    setBahanList([...bahanList, ""]);
  };

  const handleAddInstruksi = () => {
    setInstruksi([...instruksiList, ""]);
  };

  const handleRemoveBahan = (index) => {
    const values = [...bahanList];
    values.splice(index, 1);
    setBahanList(values);
  };

  const handleRemoveList = (index) => {
    const values = [...instruksiList];
    values.splice(index, 1);
    setInstruksi(values);
  };

  const handleImg = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("http://localhost:8888/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setGambar(response.data.url);
      console.log("Gambar berhasil diunggah:", response.data.url);
    } catch (error) {
      console.error("Terjadi kesalahan saat mengunggah gambar", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(token);
    try {
      const response = await axios.post(
        "http://localhost:8888/resep/create",
        {
          userId,
          nama_resep,
          deskripsi,
          bahan: bahanList.join(", "),
          instruksi: instruksiList.join(", "),
          kategori,
          subKategori,
          gambar,
          video,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Resep berhasil dibuat:", response.data);
      navigate("/UploadResep");
    } catch (error) {
      console.error("Terjadi kesalahan saat mengirim data", error);
    }
  };

  return (
    <div className="bodyform">
      <section className="bodyformp">
        <div className="section-info d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <h6>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis recusandae quisquam sed sint id, possimus nihil modi voluptatibus provident a voluptatem quos cumque et quas quis, deleniti odit iste ipsa? ipsum dolor sit
                  amet consectetur adipisicing elit. Nobis recusandae quisquam sed sint id, possimus nihil modi voluptatibus provident a voluptatem quos cumque et quas quis, deleniti odit iste ipsa?
                </h6>
              </div>
              <div className="col-2 m-auto">
                <div className="set-fotomasak">
                  <img src="/src/assets/iconseflog3.png" alt="Girl thinking" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="form-set">
        <div className="form">
          <h1 className="bagikan">Bagikan Resep Kamu</h1>
          <p className="text-resep text-center">Masukan Semua jenis Bahan Resep Masakan Yang Ingin Kamu Buat Disini...</p>
          <div className="container">
            {gambar && <img src={gambar} className="custom-image" alt="Resep Gambar" />}
            <div>
              <h4 className="text-add">Upload Resep Masakan Kamu :</h4>
              <input className="setfile" type="file" onChange={handleImg} />
            </div>
          </div>
        </div>
        <form className="formsetting" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nama Masakan :</label>
            <input type="text" className="form-control" placeholder="Masukan Nama Masakan Kamu" value={nama_resep} onChange={(e) => setNamaResep(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Penjelasan Singkat :</label>
            <textarea className="form-control" placeholder="Tuliskan dengan singkat terkait masakan kamu" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Kategori</label>
            <textarea className="form-control" placeholder="Tuliskan dengan singkat terkait masakan kamu" value={kategori} onChange={(e) => setKategori(e.target.value)}></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">SubKategori</label>
            <textarea className="form-control" placeholder="Tuliskan dengan singkat terkait masakan kamu" value={subKategori} onChange={(e) => setSubkategori(e.target.value)}></textarea>
          </div>
          <div className="row align-items-center">
            <div className="column right">
              <label htmlFor="NamBahan"> Cara Memasak :</label> <br />
              <p className="textset-up fst-italic">(Tuliskan secara detail terkait tata cara memasak)</p>
              {instruksiList.map((list, index) => (
                <div className="bahanform" key={index}>
                  <input type="text" value={list} onChange={(event) => handleInputList(index, event)} placeholder="Langkah-Langkah" />
                  <button className="btn-dlt" type="button" onClick={() => handleRemoveList(index)}>
                    Delete
                  </button>
                  <button className="btn-add" type="button" onClick={handleAddInstruksi}>
                    Add
                  </button>
                </div>
              ))}
            </div>
            <div className="column left">
              <label htmlFor="NamBahan"> Nama Bahan :</label> <br />
              <p className="textset-up fst-italic">(Masukan Semua Jenis Bahan Masakan kamu)</p>
              {bahanList.map((bahan, index) => (
                <div className="bahanform" key={index}>
                  <input type="text" value={bahan} onChange={(event) => handleInputChange(index, event)} placeholder="Nama Bahan" />
                  <button className="btn-dlt" type="button" onClick={() => handleRemoveBahan(index)}>
                    Delete
                  </button>
                  <button className="btn-add" type="button" onClick={handleAddBahan}>
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Masukan Url Video Turial Resep Masakan Kamu :</label>
            <input type="text" className="form-control" placeholder="Masukan url video kamu" value={video} onChange={(e) => setVideo(e.target.value)} />
          </div>
          <button type="submit" className="simpanbutton">
            Simpan Resep Mu
          </button>
        </form>
      </section>
    </div>
  );
};

export default FormResep;
