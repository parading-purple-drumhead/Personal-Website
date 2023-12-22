const TextSection = ({ heading, text }: { heading: string; text: string }) => {
  return (
    <div className="text-section">
      <h2 className="my-3">{heading}</h2>
      <p className="mb-3" style={{ textAlign: "justify" }}>
        {text}
      </p>
    </div>
  );
};

export default TextSection;
