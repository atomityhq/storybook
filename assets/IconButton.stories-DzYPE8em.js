import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./IconButton-DdcUs0Lt.js";import{a as i,r as a,t as o}from"./showcase-DC46wa29.js";var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{s=t(),n(),i(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Primitives/IconButton`,component:r,tags:[`autodocs`],parameters:{layout:`centered`},args:{icon:`notebook-pen`,label:`New chat`,onClick:c(),disabled:!1,size:26,iconSize:14,color:`var(--text-muted)`},argTypes:{icon:{control:`text`,description:`Any name from the Icon registry.`},label:{control:`text`,description:`Tooltip and accessible name — there is no visible text.`},size:{control:{type:`range`,min:18,max:40,step:1}},iconSize:{control:{type:`range`,min:10,max:24,step:1}},color:{control:`color`,table:{category:`Styling`}}}},u={},d={args:{disabled:!0}},f={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:1},children:[(0,s.jsx)(r,{icon:`notebook-pen`,label:`New chat`,iconSize:14}),(0,s.jsx)(r,{icon:`clock`,label:`Chat history`,iconSize:14}),(0,s.jsx)(`span`,{"aria-hidden":!0,style:{width:1,height:16,margin:`0 5px`,background:`var(--border-light)`}}),(0,s.jsx)(r,{icon:`x`,label:`Close panel`,iconSize:14})]})},p={render:()=>(0,s.jsxs)(a,{children:[(0,s.jsx)(o,{label:`22 · dialog close`,align:`center`,children:(0,s.jsx)(r,{icon:`x`,label:`Close`,size:22,iconSize:17,color:`var(--atomity-gray-400)`})}),(0,s.jsx)(o,{label:`26 · toolbar`,align:`center`,children:(0,s.jsx)(r,{icon:`clock`,label:`Chat history`,iconSize:14})}),(0,s.jsx)(o,{label:`32`,align:`center`,children:(0,s.jsx)(r,{icon:`settings`,label:`Settings`,size:32})})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 1
  }}>\r
      <IconButton icon="notebook-pen" label="New chat" iconSize={14} />\r
      <IconButton icon="clock" label="Chat history" iconSize={14} />\r
      <span aria-hidden style={{
      width: 1,
      height: 16,
      margin: "0 5px",
      background: "var(--border-light)"
    }} />\r
      <IconButton icon="x" label="Close panel" iconSize={14} />\r
    </div>
}`,...f.parameters?.docs?.source},description:{story:`Its actual job: a row of header actions, split from the dismiss control by a hairline.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <SpecimenRow>\r
      <Specimen label="22 · dialog close" align="center">\r
        <IconButton icon="x" label="Close" size={22} iconSize={17} color="var(--atomity-gray-400)" />\r
      </Specimen>\r
      <Specimen label="26 · toolbar" align="center">\r
        <IconButton icon="clock" label="Chat history" iconSize={14} />\r
      </Specimen>\r
      <Specimen label="32" align="center">\r
        <IconButton icon="settings" label="Settings" size={32} />\r
      </Specimen>\r
    </SpecimenRow>
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Disabled`,`HeaderActions`,`Sizes`]})))()}h();export{u as Default,d as Disabled,f as HeaderActions,p as Sizes,m as __namedExportsOrder,l as default};