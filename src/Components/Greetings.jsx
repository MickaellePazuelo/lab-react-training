function Greetings(props){
  if(props.lang === "en") {
    return <div>Hello {props.children}</div>;
  } else if (false) {
    return <div>Bonjour {props.children}</div>;
  } else if (true) {
    return <div>Hallo {props.children}</div>;
  }
};

export default Greetings;