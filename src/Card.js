import './Card.css';
const Card = () => {
    return (
      <div className="position">
        <article className="card">
          <h1 className="card-heading-one">You've got</h1>
          <h1 className="card-heading-two">
            <span>Location:</span> University
          </h1>
          <h1 className="card-heading-three">
            <span>Role:</span> Student</h1>
          <p className="task-objective">Your objective is to find the Spy</p>
          <button className="card-btn">
            <span>Start the game</span>
          </button>
        </article>
      </div>
    );
};

export default Card;