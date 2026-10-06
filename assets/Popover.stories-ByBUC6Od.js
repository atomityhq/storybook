import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./MicroLabel-CcHOla8o.js";import{n as i,t as a}from"./IconButton-DdcUs0Lt.js";import{n as o,t as s}from"./MenuItem-KIbNji1C.js";import{n as c,t as l}from"./Popover-B8Y1iXsD.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{u=t(),i(),o(),n(),c(),d=()=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,width:220},children:[(0,u.jsx)(r,{style:{padding:`4px 8px`},children:`Recent conversations`}),(0,u.jsx)(s,{compact:!0,icon:`message-square-text`,label:`Explain the AWS savings recommendation`,meta:`2h ago`}),(0,u.jsx)(s,{compact:!0,icon:`message-square-text`,label:`Why did EC2 costs spike last week?`,meta:`Yesterday`})]}),f={title:`Primitives/Popover`,component:l,tags:[`autodocs`],parameters:{layout:`centered`,docs:{story:{height:`260px`}}},args:{align:`left`,placement:`bottom`,trigger:({onClick:e})=>(0,u.jsx)(a,{icon:`clock`,label:`Chat history`,onClick:e}),children:(0,u.jsx)(d,{})},argTypes:{align:{control:`inline-radio`,options:[`left`,`right`]},placement:{control:`inline-radio`,options:[`top`,`bottom`]},trigger:{control:!1},children:{control:!1}},decorators:[e=>(0,u.jsx)(`div`,{style:{padding:`140px 160px`},children:(0,u.jsx)(e,{})})]},p={},m={args:{placement:`top`}},h={args:{align:`right`}},g={args:{trigger:({onClick:e})=>(0,u.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:e,children:`Pick a model`}),children:({close:e})=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,width:220},children:[(0,u.jsx)(s,{icon:`sparkles`,label:`Atomity AI Model`,selected:!0,onClick:e}),(0,u.jsx)(s,{icon:`globe`,label:`GPT-4o`,selected:!1,onClick:e})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source},description:{story:`Click the trigger. Opens downward — for triggers near the top of their container.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placement: "top"
  }
}`,...m.parameters?.docs?.source},description:{story:`The default: opens upward, for a composer's bottom toolbar.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    align: "right"
  }
}`,...h.parameters?.docs?.source},description:{story:`Right-aligned to the trigger, so a menu at the end of a header doesn't run off the edge.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: ({
      onClick
    }) => <button type="button" className="btn btn-secondary" onClick={onClick}>\r
        Pick a model\r
      </button>,
    children: ({
      close
    }) => <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 4,
      width: 220
    }}>\r
        <MenuItem icon="sparkles" label="Atomity AI Model" selected onClick={close} />\r
        <MenuItem icon="globe" label="GPT-4o" selected={false} onClick={close} />\r
      </div>
  }
}`,...g.parameters?.docs?.source},description:{story:"With a function child, the panel is handed `close` — a single-select menu dismisses itself.",...g.parameters?.docs?.description}}},_=[`OpensBelow`,`OpensAbove`,`AlignedRight`,`ClosesOnSelect`]})))()}v();export{h as AlignedRight,g as ClosesOnSelect,m as OpensAbove,p as OpensBelow,_ as __namedExportsOrder,f as default};