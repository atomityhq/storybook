import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-Drno7eUL.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{n as r,t as i}from"./StatTile-Cn3r_HRi.js";import{n as a,t as o}from"./Modal-DcbckHwI.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{s=n(),c=t(),r(),a(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Modal`,component:o,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{story:{inline:!1,iframeHeight:420}}},args:{title:`Savings by service`,maxWidth:560,onClose:l(),children:(0,s.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:10},children:[(0,s.jsx)(i,{label:`Monthly savings`,value:`$12,480`,tone:`good`}),(0,s.jsx)(i,{label:`Payback`,value:`3.2 mo`})]})},argTypes:{children:{control:!1}}},d={},f={render:function(e){let[t,n]=(0,c.useState)(!1);return(0,s.jsxs)(`div`,{style:{padding:24},children:[(0,s.jsx)(`button`,{type:`button`,className:`btn btn-primary`,onClick:()=>n(!0),children:`Open dialog`}),t&&(0,s.jsx)(o,{...e,onClose:()=>n(!1)})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source},description:{story:"Open, as it renders over a page. Escape, the ✕ and a backdrop click all call `onClose`.",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function WithTrigger(args) {
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: 24
    }}>\r
        <button type="button" className="btn btn-primary" onClick={() => setOpen(true)}>\r
          Open dialog\r
        </button>\r
        {open && <Modal {...args} onClose={() => setOpen(false)} />}\r
      </div>;
  }
}`,...f.parameters?.docs?.source},description:{story:`From a trigger: focus moves to the ✕ on open and back to the trigger on close.`,...f.parameters?.docs?.description}}},p=[`Open`,`WithTrigger`]})))()}m();export{d as Open,f as WithTrigger,p as __namedExportsOrder,u as default};