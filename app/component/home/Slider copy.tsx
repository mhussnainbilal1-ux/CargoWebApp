export const Slider = () => {
    return (
        <div
        id="owl-main-slider"
        className="owl-carousel enable-owl-carousel owl-theme"
        data-single-item="true"
        data-pagination="false"
        data-auto-play="true"
        data-main-slider="true"
        data-stop-on-hover="true"
        style={{ opacity: 1, display: "block" }}
      >
        <div className="owl-wrapper-outer">
          <div
            className="owl-wrapper"
            style={{
              width: "3240px",
              left: "0px",
              display: "block",
              transition: "1000ms",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          >
            <div className="owl-item" style={{ width: "810px" }}>
              <div
                className="item"
                style={{ backgroundImage: `url(/media/main-slider/1.jpg)` }}
              >
                <div className="container-fluid">
                  <div className="slider-content col-md-6 col-lg-6">
                    <div style={{ display: "table" }}>
                      <div
                        style={{
                          display: "table-cell",
                          width: "100px",
                          verticalAlign: "top",
                        }}
                      >
                        <a className="prev">
                          <i className="fa fa-angle-left"></i>
                        </a>
                        <a className="next">
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </div>
      
                      <div style={{ display: "table-cell" }}>
                        <h1>
                          LARGE NUMBER OF FREIGHT WAYS MAKES US POWERFUL
                        </h1>
                      </div>
                    </div>
      
                    <p>
                      Nunc accumsan metus quis metus. Sed luctus. Mauris eu enim
                      quisque dignissim nequesudm consectetuer dapibus wn eu leo
                      integer varius erat.
                      <br />
                      <a className="btn btn-success" href="#">
                        LEARN MORE
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="owl-item" style={{ width: "810px" }}>
              <div
                className="item"
                style={{ backgroundImage: `url(/media/main-slider/2.jpg)` }}
              >
                <div className="container-fluid">
                  <div className="slider-content col-md-6 col-lg-6">
                    <div style={{ display: "table" }}>
                      <div
                        style={{
                          display: "table-cell",
                          width: "100px",
                          verticalAlign: "top",
                        }}
                      >
                        <a className="prev">
                          <i className="fa fa-angle-left"></i>
                        </a>
                        <a className="next">
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </div>
      
                      <div style={{ display: "table-cell" }}>
                        <h1>
                          LARGE NUMBER OF FREIGHT WAYS MAKES US POWERFUL
                        </h1>
                      </div>
                    </div>
      
                    <p>
                      Nunc accumsan metus quis metus. Sed luctus. Mauris eu enim
                      quisque dignissim nequesudm consectetuer dapibus wn eu leo
                      integer varius erat.
                      <br />
                      <a className="btn btn-success" href="#">
                        LEARN MORE
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
      
          </div>
        </div>
      </div>
    );
}