import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{r as n,t as r}from"./Icon-DrDeo3Uw.js";import{n as i,t as a}from"./IconButton-DdcUs0Lt.js";import{a as o,r as s,t as c}from"./showcase-DC46wa29.js";var l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{l=t(),n(),i(),o(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Primitives/IconButton`,component:a,tags:[`autodocs`],parameters:{layout:`centered`,docs:{usage:{when:`A secondary action in a toolbar or panel header where an icon is understood on its own — new chat, history, close. Anything a user might not recognise from the glyph needs a labelled button instead.`,do:["Always pass `label`. It's the tooltip and the accessible name, since there's no visible text.",`Group header actions in one row, and split the dismiss control off with a hairline.`],dont:["Use it for a screen's primary action — that's a `.btn-primary`.",`Give it a frame or fill at rest. It's a ghost control; the fill appears under the pointer.`]}}},args:{icon:`notebook-pen`,label:`New chat`,onClick:u(),disabled:!1,size:26,color:`var(--text-muted)`},argTypes:{icon:{control:`select`,options:Object.keys(r),description:`Any name from the Icon registry.`},label:{control:`text`,description:`Tooltip and accessible name — there is no visible text.`},size:{control:{type:`range`,min:18,max:40,step:1}},iconSize:{control:{type:`range`,min:10,max:24,step:1}},color:{control:`color`,table:{category:`Styling`}},ref:{table:{disable:!0}}}},f={controls:{disable:!0}},p={},m={args:{disabled:!0}},h={parameters:f,render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:1},children:[(0,l.jsx)(a,{icon:`notebook-pen`,label:`New chat`,iconSize:14}),(0,l.jsx)(a,{icon:`clock`,label:`Chat history`,iconSize:14}),(0,l.jsx)(`span`,{"aria-hidden":!0,style:{width:1,height:16,margin:`0 5px`,background:`var(--border-light)`}}),(0,l.jsx)(a,{icon:`x`,label:`Close panel`,iconSize:14})]})},g={parameters:f,render:()=>(0,l.jsxs)(s,{children:[(0,l.jsx)(c,{label:`22 · dialog close`,align:`center`,children:(0,l.jsx)(a,{icon:`x`,label:`Close`,size:22,iconSize:17,color:`var(--atomity-gray-400)`})}),(0,l.jsx)(c,{label:`26 · toolbar`,align:`center`,children:(0,l.jsx)(a,{icon:`clock`,label:`Chat history`,iconSize:14})}),(0,l.jsx)(c,{label:`32`,align:`center`,children:(0,l.jsx)(a,{icon:`settings`,label:`Settings`,size:32})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: noControls,
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
}`,...h.parameters?.docs?.source},description:{story:`Its actual job: a row of header actions, split from the dismiss control by a hairline.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: noControls,
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
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Disabled`,`HeaderActions`,`Sizes`]})))()}v();export{p as Default,m as Disabled,h as HeaderActions,g as Sizes,_ as __namedExportsOrder,d as default};