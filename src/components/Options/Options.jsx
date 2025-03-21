import Button from "../Button/Button";

const Options = ({ options, onClick }) => {
  return (
    <div>
      {Object.keys(options).map((key, index) => (
        <Button key={index} onClick={() => onClick(key)}>{`${key}`}</Button>
      ))}
      <Button onClick={() => onClick("reset")}>Reset</Button>
    </div>
  );
};

export default Options;
