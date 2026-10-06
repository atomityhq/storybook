import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./MicroLabel-CcHOla8o.js";import{a as i,i as a}from"./showcase-DC46wa29.js";var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{o=t(),n(),i(),s={title:`Primitives/MicroLabel`,component:r,tags:[`autodocs`],parameters:{layout:`centered`},args:{children:`Cloud Infrastructure`,style:{}},argTypes:{children:{control:`text`,description:`Label content. Uppercased by the component, so pass it in natural case.`},style:{control:`object`,description:`Escape hatch merged last — used to re-colour or re-track a single label.`,table:{category:`Styling`}}}},c={},l={parameters:{layout:`padded`},render:e=>(0,o.jsx)(a,{width:420,children:(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[(0,o.jsx)(r,{...e}),(0,o.jsx)(`h3`,{style:{fontFamily:`var(--font-title)`,fontSize:21,fontWeight:700,letterSpacing:`-0.02em`},children:`Spend by Category`}),(0,o.jsx)(`p`,{style:{fontSize:13,color:`var(--text-secondary)`},children:`Where the estate's monthly run rate actually goes.`})]})})},u={args:{children:`Multi-Region Disaster Recovery Readiness`}},d={args:{children:(0,o.jsxs)(o.Fragment,{children:[`Status: `,(0,o.jsx)(`strong`,{children:`Active`})]})}},f={args:{children:`Cost Optimization`,style:{color:`var(--atomity-green-dark)`,letterSpacing:`0.2em`}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: args => <Stage width={420}>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 4
    }}>\r
        <MicroLabel {...args} />\r
        <h3 style={{
        fontFamily: "var(--font-title)",
        fontSize: 21,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }}>\r
          Spend by Category\r
        </h3>\r
        <p style={{
        fontSize: 13,
        color: "var(--text-secondary)"
      }}>\r
          Where the estate&apos;s monthly run rate actually goes.\r
        </p>\r
      </div>\r
    </Stage>
}`,...l.parameters?.docs?.source},description:{story:`Its actual job: the mono eyebrow that sits above a heading or card title.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Multi-Region Disaster Recovery Readiness"
  }
}`,...u.parameters?.docs?.source},description:{story:`No truncation — a long label wraps and keeps its letter-spacing.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
        Status: <strong>Active</strong>\r
      </>
  }
}`,...d.parameters?.docs?.source},description:{story:"`children` is a ReactNode, so a label can carry inline emphasis rather than plain text.",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Cost Optimization",
    style: {
      color: "var(--atomity-green-dark)",
      letterSpacing: "0.2em"
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`AsEyebrow`,`LongLabel`,`CustomContent`,`CustomStyle`]})))()}m();export{l as AsEyebrow,d as CustomContent,f as CustomStyle,c as Default,u as LongLabel,p as __namedExportsOrder,s as default};