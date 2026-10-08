import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{a as n,r,t as i}from"./showcase-DC46wa29.js";import{n as a,t as o}from"./StatusChip-eUWImsS4.js";var s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{s=t(),a(),n(),c=[{tone:`pass`,label:`PASSED`},{tone:`watch`,label:`WATCH`},{tone:`fail`,label:`FAILED`},{tone:`neutral`,label:`UNKNOWN`}],l={title:`Primitives/StatusChip`,component:o,tags:[`autodocs`],parameters:{layout:`centered`,docs:{usage:{when:`A short verdict on a row or card — pass, watch, fail — read at a glance. For a figure, use a StatTile; for an action, a button.`,do:[`Keep the label to one or two words. It's set in caps and never wraps.`,"Add a `tooltip` when the label alone doesn't say what it means, like a risk or confidence level."],dont:[`Rely on the tone alone — the label carries the meaning, so it holds for colour-blind readers too.`,`Make a chip clickable. It's a marker, not a control.`]}}},args:{tone:`pass`,children:`PASSED`},argTypes:{tone:{control:`inline-radio`,options:[`pass`,`watch`,`fail`,`neutral`],description:`Verdict colour. Drives every pass/watch/fail surface in the dashboard.`,table:{defaultValue:{summary:`neutral`}}},children:{control:`text`,description:`Chip label. Rendered uppercase, so short verdicts read best.`},tooltip:{control:`text`}}},u={},d={parameters:{controls:{disable:!0}},render:()=>(0,s.jsx)(r,{children:c.map(({tone:e,label:t})=>(0,s.jsx)(i,{label:e,children:(0,s.jsx)(o,{tone:e,children:t})},e))})},f={args:{tone:`watch`,children:`WATCH`}},p={args:{tone:`fail`,children:`FAILED`}},m={args:{tone:`neutral`,children:`UNKNOWN`}},h={args:{tone:`watch`,children:`MEDIUM RISK`,tooltip:`Some evidence is missing, so the saving is estimated rather than measured.`}},g={args:{tone:`watch`,children:`Pending finance approval`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <SpecimenRow>\r
      {TONE_SAMPLES.map(({
      tone,
      label
    }) => <Specimen key={tone} label={tone}>\r
          <StatusChip tone={tone}>{label}</StatusChip>\r
        </Specimen>)}\r
    </SpecimenRow>
}`,...d.parameters?.docs?.source},description:{story:`All four tones together — the view to check when adjusting the chip palette.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    children: "MEDIUM RISK",
    tooltip: "Some evidence is missing, so the saving is estimated rather than measured."
  }
}`,...h.parameters?.docs?.source},description:{story:`Hover or focus it: a chip with a tooltip becomes a tab stop and explains itself.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "watch",
    children: "Pending finance approval"
  }
}`,...g.parameters?.docs?.source},description:{story:`The chip never wraps, so a long label widens the pill instead of breaking it.`,...g.parameters?.docs?.description}}},_=[`Default`,`Tones`,`Watch`,`Fail`,`Neutral`,`WithTooltip`,`LongLabel`]})))()}v();export{u as Default,p as Fail,g as LongLabel,m as Neutral,d as Tones,f as Watch,h as WithTooltip,_ as __namedExportsOrder,l as default};