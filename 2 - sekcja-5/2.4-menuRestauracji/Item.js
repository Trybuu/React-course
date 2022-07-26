const Item = (props) => {
  return (
    <>
      <li
        className={props.active ? "enabled" : "disabled"}
        onClick={() => props.changeStatus(props.id)}
      >
        {props.name}
      </li>
    </>
  );
};

// style={props.active ? { fontWeight: "bold" } : { color: "gray" }}
