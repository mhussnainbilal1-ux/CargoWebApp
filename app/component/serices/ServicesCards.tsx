const services = [
    {
      image: "services/1.jpeg",
      title: "Same Day Courier Service",
      description:"Fast and reliable same-day collection and delivery for urgent parcels, documents, retail goods, and business items across the UK.",
      classes: "allservices seafreight railway",
    },
    {
        image: "services/4.jpeg",
      title: "Dedicated Van Transport",
      description:"A dedicated vehicle for your goods, collected and delivered directly without mixed loads or unnecessary stops.",
      classes: "allservices transportation",
    },
    {
        image: "services/3.jpeg",
      title: "Pallet Delivery Service",
      description:"Reliable pallet collection and delivery for trade materials, retail stock, commercial goods, and business freight.",
      classes: "allservices packaging warehousing",
    },
    {
        image: "services/7.jpeg",
      title: "Multi-Drop Delivery",
      description:"Cost-effective route delivery for multiple drops, ideal for shops, suppliers, eCommerce, and business customers.",
      classes: "allservices warehousing railway",
    },
    {
        image: "services/8.jpeg",
      title: "Final Mile Delivery",
      description:"Delivery from a warehouse, depot, shop, or business directly to the final customer, office, home, or site.",
      classes: "allservices seafreight airfreight railway",
    },
    {
        image: "services/6.jpeg",
      title: "Scheduled Delivery",
      description:"Pre-booked delivery services for businesses that need planned, regular, or repeat transport support.",
      classes: "allservices transportation",
    },
    {
        image: "services/2.jpeg",
      title: "Warehouse Storage",
      description:"Secure short-term and long-term storage for business goods, pallets, stock, and commercial items.",
      classes: "allservices airfreight packaging warehousing",
    },
    {
        image: "services/5.jpeg",
      title: "Business Logistics Support",
      description:"Fast transport options for urgent items that need to arrive quickly, overnight, or by the next working day.",
      classes: "allservices seafreight airfreight transportation",
    },
    {
        image: "services/9.jpeg",
      title: "Express & Next Day Delivery",
      description:"Fast transport options for urgent items that need to arrive quickly, overnight, or by the next working day.",
      classes:
        "allservices seafreight transportation packaging warehousing railway",
    },
  ];
  
  export const ServicesCards = () => {
    return (
      <>
        <div className="bg-image page-title">
          <div className="container-fluid">
            <a href="#">
              <h1>OUR SERVICES</h1>
            </a>
  
            <div className="pull-right">
              <a href="01_home.html">
                <i className="fa fa-home fa-lg"></i>
              </a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="06_services.html">Our services</a>
            </div>
          </div>
        </div>
  
        <div
          className="container-fluid inner-offset wow zoomIn"
          data-wow-delay="0.3s"
        >
          <div className="tab-content row services">
            <div className="tab-pane active isotope-filter isotope">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`service-item col-xs-12 col-sm-4 isotope-item ${service.classes}`}
                >
                  <img
                    className="full-width"
                    src={service.image}
                    alt={service.title}
                  />
  
                  <h4>{service.title}</h4>
  
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };