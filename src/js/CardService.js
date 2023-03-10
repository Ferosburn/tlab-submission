import '../css/CardService.css'

const CardService = (props) => {

  return (
    <div className='card'>
      <img src={props.image} alt="" />
      <div className="container">
        <h5 className='b14 q'>{props.category}</h5>
        <h3 className='b24 q'>{props.title}</h3>
      </div>
    </div>
  );
};

export default CardService;
