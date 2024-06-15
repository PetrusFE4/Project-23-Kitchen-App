import {useState} from 'react'

const FormResep = () => {
  const [bahanList, setBahanList] = useState(['']);

  function konsultasi() {
    window.open("https://api.whatsapp.com/send?phone=6282336713898&text=Saya%20Mau%20Konsultasi%20Nih%20Kak")
    console.log("test");
  }

  const handleInputChange = (index, event) => {
    const values = [...bahanList];
    values[index] = event.target.value;
    setBahanList(values);
  };

  const handleAddBahan = () => {
    setBahanList([...bahanList, '']);
  };

  const handleRemoveBahan = (index) => {
    const values = [...bahanList];
    values.splice(index, 1);
    setBahanList(values);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('Data yang akan dikirim', bahanList);
      // const response = await axios.post('/api/bahan', { bahan: bahanList });
    } catch (error) {
      console.error('Terjadi kesalahan saat mengirim data', error);
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
      <section>
        <div className="form">
          <h1 className="bagikan">Bagikan Resep Kamu</h1>
        </div>
        <form onSubmit={handleSubmit}>
        {bahanList.map((bahan, index) => (
        <div key={index}>
          <input
            type="text"
            value={bahan}
            onChange={event => handleInputChange(index, event)}
            placeholder="Nama Bahan"
          />
          <button type="button" onClick={() => handleRemoveBahan(index)}>
            Hapus
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddBahan}>
        Tambah Bahan
      </button>
      <button type="submit">Kirim</button>
      <button type="button" onClick={konsultasi}>
        Konsultasi
      </button>
        </form>
      </section>
    </div>
  );
};
export default FormResep;
