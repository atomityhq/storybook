import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-Drno7eUL.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{n as r,t as i}from"./MicroLabel-CcHOla8o.js";import{n as a,t as o}from"./MenuItem-KIbNji1C.js";var s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{s=n(),c=t(),a(),r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Primitives/MenuItem`,component:o,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,s.jsx)(`div`,{style:{width:260,padding:8,background:`var(--atomity-white-light)`,border:`1px solid var(--border-light)`,borderRadius:`var(--radius-md)`},children:(0,s.jsx)(e,{})})],args:{label:`Workloads`,description:`Running workloads across connected clusters`,icon:`boxes`,selected:!1,compact:!1,onClick:l()},argTypes:{icon:{control:`text`},selected:{description:`Leave unset for a plain action row; true/false makes it a toggle.`}}},d={},f={args:{selected:!0}},p={args:{compact:!0,selected:!0}},m={args:{compact:!0,selected:void 0,icon:`message-square-text`,label:`Explain the AWS savings recommendation`,description:void 0,meta:`2h ago`}},h=[{id:`workloads`,label:`Workloads`,description:`Running workloads across connected clusters`,icon:`boxes`},{id:`metrics`,label:`Infrastructure Metrics`,description:`CPU, memory, and node-level telemetry`,icon:`gauge`},{id:`logs`,label:`Application Logs`,description:`Structured logs and traces from services`,icon:`scroll-text`}],g={render:function(){let[e,t]=(0,c.useState)([`metrics`]);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[(0,s.jsx)(i,{style:{padding:`4px 8px`},children:`Data sources`}),h.map(n=>(0,s.jsx)(o,{icon:n.icon,label:n.label,description:n.description,selected:e.includes(n.id),onClick:()=>t(e=>e.includes(n.id)?e.filter(e=>e!==n.id):[...e,n.id])},n.id))]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    compact: true,
    selected: true
  }
}`,...p.parameters?.docs?.source},description:{story:`The rail's narrow menus — one line, truncating, the check only when selected.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    compact: true,
    selected: undefined,
    icon: "message-square-text",
    label: "Explain the AWS savings recommendation",
    description: undefined,
    meta: "2h ago"
  }
}`,...m.parameters?.docs?.source},description:{story:`An action row: no selection state, a timestamp where the check would go.`,...m.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`A whole menu: a MicroLabel section heading over toggle rows.`,...g.parameters?.docs?.description}}},_=[`Toggle`,`Selected`,`Compact`,`WithMeta`,`AsMenu`]})))()}v();export{g as AsMenu,p as Compact,f as Selected,d as Toggle,m as WithMeta,_ as __namedExportsOrder,u as default};