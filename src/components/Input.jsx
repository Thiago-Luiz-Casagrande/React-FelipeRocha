function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="border border-slate-300 outline-100 px-4 py-2 rounded-md"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Input;