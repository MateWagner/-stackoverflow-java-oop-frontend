const useFetchPost = () => {
  const postAsync = async (url, answerObject) => {
    try {
      const response = await fetch("http://192.168.0.32:8080"  + (!(url[0] === "/") ? "/" : "") + url, {
        method: "POST",
        body: JSON.stringify(answerObject),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        console.log(answerObject);
        throw new Error("Failed to post to table: " + url);
      }
      const id = await response.json();
      return id;
    } catch (error) {
      console.error(error);
    }
  };
  return { postAsync };
};
export default useFetchPost;