import loading from "../styles/loading.module.css";

function Loading() {
  return (
    <div className={loading.overlay}>
      <div className={loading.spinner}></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loading;