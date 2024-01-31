import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's work together</h1>
        <div className="item">
          <h2>Email</h2>
          <span>selinyan2016@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Vantaa, Finland</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>0449754273</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows="8" placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
