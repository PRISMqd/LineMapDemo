
import BodyMap from "./BodyMap.js";
import {evaluate} from "../engine/engine.js";

export default function Workspace({patient,data,onBack}){

const [location,setLocation]=React.useState("");
const [laterality,setLaterality]=React.useState("");
const [med1,setMed1]=React.useState("");
const [med2,setMed2]=React.useState("");

function select(d){setLocation(d.location);setLaterality(d.laterality);}

function result(){
const r = evaluate(med1,med2,data.rules);
if(!med1||!med2)return "Select meds";
return `Same: ${r.same} | Y-site: ${r.y}`;
}

return(<div className="workspace">
<div onClick={onBack}>← Back</div>
<h3>{patient.name}</h3>

<BodyMap onSelect={select}/>

<input value={location} readOnly/>
<input value={laterality} readOnly/>

<select onChange={e=>setMed1(e.target.value)}>
<option>Med A</option>
{data.meds.map(m=><option key={m.med_id} value={m.med_id}>{m.display_name}</option>)}
</select>

<select onChange={e=>setMed2(e.target.value)}>
<option>Med B</option>
{data.meds.map(m=><option key={m.med_id} value={m.med_id}>{m.display_name}</option>)}
</select>

<div className="result">{result()}</div>
</div>);
}
