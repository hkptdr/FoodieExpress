const Contact = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold m-4 p-4 font-serif">My Contact Page</h1>
        <form>
          <input
            type="text"
            className="p-2 m-4 border border-black rounded-lg"
            placeholder=" Enter Name"
          />
          <input
            type="text"
            className="p-2 m-4 border border-black rounded-lg"
            placeholder=" Enter Message"
          />
          <button className="p-2 m-4 border border-black rounded-lg cursor-pointer bg-green-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
