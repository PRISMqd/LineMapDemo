
export default function BodyMap({onSelect}) {
const [sel,setSel]=React.useState(null);
const regions=[
{id:"left_ij",label:"IJ",side:"left",x:470,y:250},
{id:"right_ij",label:"IJ",side:"right",x:530,y:250},
{id:"left_sub",label:"Subclavian",side:"left",x:430,y:350},
{id:"right_sub",label:"Subclavian",side:"right",x:570,y:350},
{id:"left_ac",label:"AC",side:"left",x:380,y:700},
{id:"right_ac",label:"AC",side:"right",x:620,y:700}
];
function click(r){setSel(r);onSelect({location:r.label,laterality:r.side});}
return(<svg viewBox="0 0 1000 2000">
<rect x="450" y="100" width="100" height="600" fill="#ddd"/>
{regions.map(r=><circle key={r.id} cx={r.x} cy={r.y} r="60" className="region" onClick={()=>click(r)}/>)}
{sel&&<circle cx={sel.x} cy={sel.y} r="10" className="marker"/>}
</svg>);
}
