export default function CardNinja({ ninja }) {
  return (
    <div className="card-ninja">
      <h3>{ninja.nome}</h3>
      <p><strong>Rank:</strong> {ninja.rank} <strong>Aldeia Natal:</strong> {ninja.aldeiaNatal}
      <strong>Jutsu:</strong> {ninja.jutsu}</p>
    </div>
  );
}