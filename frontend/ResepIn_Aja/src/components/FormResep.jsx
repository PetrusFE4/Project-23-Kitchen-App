const FormResep = () => {
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
      </section>
    </div>
  );
};
export default FormResep;
