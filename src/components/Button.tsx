interface Props {
  children: string;
  onClick: () => void;
}

const PushButton = ({ children, onClick }: Props) => {
  return (
    <div>
      <button className="btn btn-success" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default PushButton;
