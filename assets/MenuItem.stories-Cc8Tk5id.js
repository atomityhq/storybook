import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-Drno7eUL.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{n as r,t as i}from"./MicroLabel-CcHOla8o.js";import{r as a,t as o}from"./Icon-DrDeo3Uw.js";import{n as s,t as c}from"./MenuItem-KIbNji1C.js";var l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{l=n(),u=t(),a(),s(),r(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Primitives/MenuItem`,component:c,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,l.jsx)(`div`,{style:{width:260,padding:8,background:`var(--atomity-white-light)`,border:`1px solid var(--border-light)`,borderRadius:`var(--radius-md)`},children:(0,l.jsx)(e,{})})],args:{label:`Workloads`,description:`Running workloads across connected clusters`,icon:`boxes`,selected:!1,compact:!1,onClick:d()},argTypes:{icon:{control:`select`,options:Object.keys(o)},selected:{description:`Leave unset for a plain action row; true/false makes it a toggle.`}}},p={},m={args:{selected:!0}},h={args:{compact:!0,selected:!0}},g={args:{compact:!0,selected:void 0,icon:`message-square-text`,label:`Explain the AWS savings recommendation`,description:void 0,meta:`2h ago`}},_=[{id:`workloads`,label:`Workloads`,description:`Running workloads across connected clusters`,icon:`boxes`},{id:`metrics`,label:`Infrastructure Metrics`,description:`CPU, memory, and node-level telemetry`,icon:`gauge`},{id:`logs`,label:`Application Logs`,description:`Structured logs and traces from services`,icon:`scroll-text`}],v={parameters:{controls:{disable:!0}},render:function(){let[e,t]=(0,u.useState)([`metrics`]);return(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[(0,l.jsx)(i,{style:{padding:`4px 8px`},children:`Data sources`}),_.map(n=>(0,l.jsx)(c,{icon:n.icon,label:n.label,description:n.description,selected:e.includes(n.id),onClick:()=>t(e=>e.includes(n.id)?e.filter(e=>e!==n.id):[...e,n.id])},n.id))]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source},description:{story:`A toggle row, unselected.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    compact: true,
    selected: true
  }
}`,...h.parameters?.docs?.source},description:{story:`The rail's narrow menus — one line, truncating, the check only when selected.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    compact: true,
    selected: undefined,
    icon: "message-square-text",
    label: "Explain the AWS savings recommendation",
    description: undefined,
    meta: "2h ago"
  }
}`,...g.parameters?.docs?.source},description:{story:`An action row: no selection state, a timestamp where the check would go.`,...g.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function AsMenu() {
    const [selected, setSelected] = useState<string[]>(["metrics"]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 4
    }}>\r
        <MicroLabel style={{
        padding: "4px 8px"
      }}>Data sources</MicroLabel>\r
        {SOURCES.map(s => <MenuItem key={s.id} icon={s.icon} label={s.label} description={s.description} selected={selected.includes(s.id)} onClick={() => setSelected(prev => prev.includes(s.id) ? prev.filter(x => x !== s.id) : [...prev, s.id])} />)}\r
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:`A whole menu: a MicroLabel section heading over toggle rows.`,...v.parameters?.docs?.description}}},y=[`Default`,`Selected`,`Compact`,`WithMeta`,`AsMenu`]})))()}b();export{v as AsMenu,h as Compact,p as Default,m as Selected,g as WithMeta,y as __namedExportsOrder,f as default};