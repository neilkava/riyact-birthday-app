interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClickkuh: () => void
}

const Button = ({ children, color = "primary", onClickkuh }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClickkuh}>{children}</button>
  )
}

export default Button