import { useState } from "react";

const QuestionOrder = ({ onChange }) => {
  const [currentUrl, setCurrentUrl] = useState("")
  const updateUrl = (url) => {
    setCurrentUrl(url)
    onChange(url)
  }
  return (
    <div>
      <select name="order" id="order" onChange={event => updateUrl(event.target.value)} value={currentUrl}>
        <option value="/api/questions/all?orderedBy=answer_count&order=asc">Answer Ascending</option>
        <option value="/api/questions/all?orderedBy=answer_count&order=desc">Answer Descending</option>
        <option value="/api/questions/all?orderedBy=date&order=asc">Date Ascending</option>
        <option value="/api/questions/all?orderedBy=date&order=desc">Date Descending</option>
        <option value="/api/questions/all?orderedBy=title&order=asc">Title Ascending</option>
        <option value="/api/questions/all?orderedBy=title&order=desc">Title Descending</option>
      </select>
    </div>
  );
}

export default QuestionOrder;
