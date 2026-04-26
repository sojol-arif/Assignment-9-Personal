import { useState } from "react";

const Feedback = () => {
  const [text, setText] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    const newFeedback = {
      id: Date.now(),
      message: text,
    };

    setFeedbacks([newFeedback, ...feedbacks]);
    setText("");
  };

  return (
    <div className="max-w-[1200px] mx-auto px-5 py-15 md:py-20 pt-0 md:pt-0">
      <h3 className="text-[36px] font-black text-center">Leave Feedback</h3>

      <form onSubmit={handleSubmit} className="mt-5">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Review Description"
          rows="3"
          className="w-full border border-1 p-3 rounded-[6px] min-h-35"
        />

        <button type="submit" className="w-full btn-primary rounded-[6px] font-bold uppercase text-[18px] text-[#fff] mt-3 cursor-pointer p-3 bg-primary">
          Submit
        </button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h4 className="text-[24px] font-black mb-3 mt-5">Customer Feedback</h4>

        {feedbacks.length === 0 && <p>No feedback yet</p>}

        {feedbacks.map((fb) => (
          <div
            key={fb.id}
            style={{
              background: "#f5f5f5",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            {fb.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;