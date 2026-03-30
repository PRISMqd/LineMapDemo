
export default function PatientList({patients,onSelect}){
return(<div className="list">
{patients.map(p=><div key={p.id} className="patient" onClick={()=>onSelect(p)}>
<strong>{p.name}</strong><br/>Room {p.room}
</div>)}
</div>);
}
