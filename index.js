const Notification = (props) => {
  //  Write your code here.
  const { name, className, heading, imgUrl } = props;
  return (
    <div className="app-container">
      <h1 className="heading">{heading}</h1>
      <div className={className}>
        <img src={imgUrl} />
        <p>{name}</p>
      </div>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <Notification
      className="Information"
      name="Information Message"
      heading="Notifications"
      imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      className="Success"
      name="Success Message"
      imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      className="Warning"
      name="Warning Message"
      imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      className="Error"
      name="Error Message"
      imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
