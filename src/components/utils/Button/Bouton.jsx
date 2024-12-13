import "./button.scss";

export default function Button({ content, variant, size }) {
  return <button className={`btn btn-${variant} btn-${size}`}>{content}</button>;
}
