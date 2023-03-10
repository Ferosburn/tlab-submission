import "../css/CardClient.css";

const CardClient = (props) => {
  return (
    <div className="card-client" style={{backgroundColor: `${props.background}`}}>
      <h3 className="b24 q">{props.content}</h3>
      <img className="card-image" src={props.cardImage} alt="" />
      <div className="profile-container">
        <img className="profile-image" src={props.profileImage} alt="" />
        <div className="profile-desc">
          <p className="m16 n">{props.name}</p>
          <p className="m14 n">{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default CardClient;
