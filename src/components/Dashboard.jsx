const Dashboard = () => {
  return (
    <div>
      <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-lg-12"></div>
          </div>
          <div className="space50"></div>
          <div className="row">
            <div className="col-lg-4  outer-box">
              <div className="inner-boxes">
                <h3> Users Registered in the Last Week </h3>

                <div className="inner-two-box">
                  <p>
                    Total: <span> 228643</span>{" "}
                  </p>
                  <p>
                    Growth: <span> 128%</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 outer-box">
              <div className="inner-boxes">
                <h3> New Found Tribes in the Past Week </h3>

                <div className="inner-two-box">
                  <p>
                    Total: <span> 15</span>{" "}
                  </p>
                  <p>
                    Growth: <span> 10%</span>{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 outer-box">
              <div className="inner-boxes">
                <h3>Main Resources Received by Ajal Tribe This Week </h3>

                <div className="inner-two-box">
                  <p>
                    Rice: <span> 30%</span>{" "}
                  </p>
                  <p>
                    Beans: <span> 20%</span>{" "}
                  </p>
                  <p>
                    Water: <span> 50%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space50"></div>
          <div className="row">
            <div className="col-lg-4  outer-box">
              <div className="inner-boxes">
                <h3>Posts Created in the Last Week </h3>

                <div className="inner-two-box">
                  <p>
                    Total: <span> 843</span>{" "}
                  </p>
                  <p>
                    Growth: <span> 16%</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 outer-box">
              <div className="inner-boxes">
                <h3> New Donations This Week</h3>

                <div className="inner-two-box">
                  <p>
                    Total: <span> 237</span>{" "}
                  </p>
                  <p>
                    Growth: <span> 40%</span>{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 outer-box">
              <div className="inner-boxes">
                <h3>Volunteers Joined This Month</h3>

                <div className="inner-two-box">
                  <p>
                    Total: <span> 76</span>{" "}
                  </p>
                  <p>
                    Growth: <span> 25%</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
