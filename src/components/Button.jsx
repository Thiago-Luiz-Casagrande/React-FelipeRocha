function Button(props) {
  return (
    <button {...props} className="bg-slate-400 text-white rounded-md ml-4 p-2">
      {props.text}
    </button>
  );
}

export default Button;
