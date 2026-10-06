import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{i as n,n as r,r as i,t as a}from"./TableCard-mO3GliiS.js";import{n as o,t as s}from"./GraphCard-BtwJdl1q.js";import{c,d as l,l as u,o as d,s as f,u as p}from"./fixtures-CU_BvJyu.js";var m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{m=t(),n(),o(),r(),l(),h={title:`Module-Specific Components/Explain/Figures`,component:i,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[e=>(0,m.jsx)(`div`,{style:{width:520,maxWidth:`100%`},children:(0,m.jsx)(e,{})})],args:{title:`Estimated monthly savings`,data:d,streaming:!1,expandable:!0}},g={},_={args:{data:d.slice(0,2),streaming:!0}},v={args:{expandable:!1}},y={render:()=>(0,m.jsx)(s,{title:`Spend trend — May to Oct`,xLabel:`Month`,yLabel:`USD`,series:f})},b={render:()=>(0,m.jsx)(a,{title:`Top workloads`,columns:u,rows:p,align:[...c]})},x={render:()=>(0,m.jsx)(a,{title:`Top workloads`,columns:u,rows:p.slice(0,1),align:[...c],streaming:!0})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    data: SAVINGS_BY_ACTION.slice(0, 2),
    streaming: true
  }
}`,..._.parameters?.docs?.source},description:{story:`Still filling: a "loading" note, and no full-size control until the data is in.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    expandable: false
  }
}`,...v.parameters?.docs?.source},description:{story:`Inside a report, which is already a dialog — no full-size control.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <GraphCard title="Spend trend — May to Oct" xLabel="Month" yLabel="USD" series={SPEND_TREND} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <TableCard title="Top workloads" columns={TABLE_COLUMNS} rows={TABLE_ROWS} align={[...TABLE_ALIGN]} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <TableCard title="Top workloads" columns={TABLE_COLUMNS} rows={TABLE_ROWS.slice(0, 1)} align={[...TABLE_ALIGN]} streaming />
}`,...x.parameters?.docs?.source}}},S=[`BarChart`,`BarChartStreaming`,`BarChartInReport`,`LineGraph`,`Table`,`TableStreaming`]})))()}C();export{g as BarChart,v as BarChartInReport,_ as BarChartStreaming,y as LineGraph,b as Table,x as TableStreaming,S as __namedExportsOrder,h as default};