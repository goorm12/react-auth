const Header = ({ leftChild, title, rightChild }) => {
  return (
    <header>
      {leftChild}
      <h1>{title}</h1>
      {rightChild}
    </header>
  );
};

export default Header;
