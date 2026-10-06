import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{a as n,r,t as i}from"./showcase-DC46wa29.js";import{n as a,t as o}from"./StatusChip-7yv8m2sw.js";var s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{s=t(),a(),n(),c=[{tone:`pass`,label:`PASSED`},{tone:`watch`,label:`WATCH`},{tone:`fail`,label:`FAILED`},{tone:`neutral`,label:`UNKNOWN`}],l={title:`Primitives/StatusChip`,component:o,tags:[`autodocs`],parameters:{layout:`centered`},args:{tone:`pass`,children:`PASSED`},argTypes:{tone:{control:`inline-radio`,options:[`pass`,`watch`,`fail`,`neutral`],description:`Verdict colour. Drives every pass/watch/fail surface in the dashboard.`,table:{defaultValue:{summary:`neutral`}}},children:{control:`text`,description:`Chip label. Rendered uppercase, so short verdicts read best.`}}},u={render:()=>(0,s.jsx)(r,{children:c.map(({tone:e,label:t})=>(0,s.jsx)(i,{label:e,children:(0,s.jsx)(o,{tone:e,children:t})},e))})},d={},f={args:{tone:`watch`,children:`WATCH`}},p={args:{tone:`fail`,children:`FAILED`}},m={args:{tone:`neutral`,children:`UNKNOWN`}},h={args:{tone:`watch`,children:`Pending finance approval`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenRow>\r
      {TONE_SAMPLES.map(({
      tone,
      label
    }) => <Specimen key={tone} label={tone}>\r
          <StatusChip tone={tone}>{label}</StatusChip>\r
        </Specimen>)}\r
    </SpecimenRow>
}`,...u.parameters?.docs?.source},description:{story:`All four tones together — the view to check when adjusting the chip palette.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "watch",
    children: "WATCH"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "fail",
    children: "FAILED"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "neutral",
    children: "UNKNOWN"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "watch",
    children: "Pending finance approval"
  }
}`,...h.parameters?.docs?.source},description:{story:`The chip never wraps, so a long label widens the pill instead of breaking it.`,...h.parameters?.docs?.description}}},g=[`AllTones`,`Pass`,`Watch`,`Fail`,`Neutral`,`LongLabel`]})))()}_();export{u as AllTones,p as Fail,h as LongLabel,m as Neutral,d as Pass,f as Watch,g as __namedExportsOrder,l as default};