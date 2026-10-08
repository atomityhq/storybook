import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{a as n,i as r,n as i,r as a,t as o}from"./ReportCard-C-0UwseH.js";import{a as s,d as c}from"./fixtures-CU_BvJyu.js";import{n as l,r as u,t as d}from"./FenceCards-iuwM1M3x.js";var f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{f=t(),n(),a(),u(),c(),p={title:`Module-Specific Components/Explain/ReplyStates`,component:o,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[e=>(0,f.jsx)(`div`,{style:{width:520,maxWidth:`100%`,display:`flex`,flexDirection:`column`},children:(0,f.jsx)(e,{})})],args:{report:s}},m={controls:{disable:!0}},h={},g={parameters:m,render:()=>(0,f.jsx)(i,{title:`October cost review`})},_={parameters:m,render:()=>(0,f.jsx)(r,{icon:`bar-chart-2`,label:`Preparing chart…`})},v={parameters:m,render:()=>(0,f.jsx)(l,{of:`chart`,reason:`Expected "data" to be an array.`,source:`{
  "title": "Estimated monthly savings",
  "data": "1240, 870"
}`})},y={parameters:m,render:()=>(0,f.jsx)(d,{lang:`bash`,value:`aws ce get-cost-and-usage --granularity MONTHLY`})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source},description:{story:`A report is one button in the thread; it opens in a Modal.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: fixed,
  render: () => <ReportPendingCard title="October cost review" />
}`,...g.parameters?.docs?.source},description:{story:`A report still streaming, shaped like the button it will become.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: fixed,
  render: () => <PendingCard icon="bar-chart-2" label="Preparing chart…" />
}`,..._.parameters?.docs?.source},description:{story:"A ```chart or ```graph whose JSON hasn't finished arriving.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: fixed,
  render: () => <InvalidFenceCard of="chart" reason={'Expected "data" to be an array.'} source={'{\\n  "title": "Estimated monthly savings",\\n  "data": "1240, 870"\\n}'} />
}`,...v.parameters?.docs?.source},description:{story:`A finished fence whose JSON didn't hold up — shows the reason and what was sent.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: fixed,
  render: () => <CodeBlock lang="bash" value="aws ce get-cost-and-usage --granularity MONTHLY" />
}`,...y.parameters?.docs?.source}}},b=[`Report`,`ReportPending`,`FigurePending`,`InvalidFence`,`Code`]})))()}x();export{y as Code,_ as FigurePending,v as InvalidFence,h as Report,g as ReportPending,b as __namedExportsOrder,p as default};