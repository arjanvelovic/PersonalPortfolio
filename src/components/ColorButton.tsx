interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function ColorButton(props: ButtonProps) {
  const combinedClassName = 'ParagraphText bg-green-700 border text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 transition duration-700 rounded ' + props.className

  return (
    <button onClick={ props.onClick } className={combinedClassName}>
    { props.children}
    </button>
  )
}

export default ColorButton