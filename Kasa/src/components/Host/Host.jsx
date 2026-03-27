import "./Host.css";

function Host({ host }) {
  return (
    <div className="host">
      <p>{host.name}</p>
      <img src={host.picture} alt={host.name} className="host-picture" />
    </div>
  );
}
export default Host;