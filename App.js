
import PatientList from "../components/PatientList.js";
import Workspace from "../components/Workspace.js";

export default function App(){

const [data,setData]=React.useState(null);
const [patient,setPatient]=React.useState(null);

React.useEffect(()=>{
Promise.all([
fetch("./data/medications.json").then(r=>r.json()),
fetch("./data/rules.json").then(r=>r.json()),
fetch("./data/policy.json").then(r=>r.json()),
fetch("./data/patients.json").then(r=>r.json())
]).then(([meds,rules,policy,patients])=>{
setData({meds,rules,policy,patients});
});
},[]);

if(!data)return <div>Loading...</div>;

if(patient) return <Workspace patient={patient} data={data} onBack={()=>setPatient(null)}/>;

return(<>
<div className="topbar">LineMap COMPLETE</div>
<PatientList patients={data.patients} onSelect={setPatient}/>
</>);
}
