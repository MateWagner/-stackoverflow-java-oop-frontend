const useFetchPost = () => {
  const postAsync = async (url, answerObject, method) => {
    try {
      const response = await fetch((!(url[0] === "/") ? "/" : "") + url, {
        method: (method ?? "POST"),
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