const Form = ({ setResult }) => {
  const getPosts = async (event) => {
    event.preventDefault();
    const res = await fetch(`/api/post`, {
      body: JSON.stringify({
        name: event.target.name.value,
      }),

      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    setResult(await res.json());
  };

  return (
    <div>
      <form onSubmit={getPosts}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Paste Error Here"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;
