import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./Panel-CxPETUB2.js";import{n as i,t as a}from"./UsageMeter-jxNocVne.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{o=t(),n(),i(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Module-Specific Components/Settings/UsageMeter`,component:a,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[e=>(0,o.jsx)(`div`,{style:{width:520,maxWidth:`100%`},children:(0,o.jsx)(r,{title:`Usage this period`,icon:`gauge`,removable:!1,draggable:!1,children:(0,o.jsx)(e,{})})})],args:{quota:{tenantMonthlyTokenLimit:1e6,tenantTokensUsed:42e3},loading:!1,error:null,onRefresh:s()}},l={},u={args:{quota:{tenantMonthlyTokenLimit:1e6,tenantTokensUsed:812400}}},d={args:{quota:{tenantMonthlyTokenLimit:1e6,tenantTokensUsed:1e6}}},f={args:{quota:null,loading:!0}},p={args:{quota:null,error:{title:`Couldn't reach Atomity AI`,detail:`Check your connection and try again.`,tone:`error`,retryable:!0}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    quota: {
      tenantMonthlyTokenLimit: 1_000_000,
      tenantTokensUsed: 812_400
    }
  }
}`,...u.parameters?.docs?.source},description:{story:`Amber past 75%.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    quota: {
      tenantMonthlyTokenLimit: 1_000_000,
      tenantTokensUsed: 1_000_000
    }
  }
}`,...d.parameters?.docs?.source},description:{story:"What explains a `quota_exceeded` in the chat.",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    quota: null,
    loading: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    quota: null,
    error: {
      title: "Couldn't reach Atomity AI",
      detail: "Check your connection and try again.",
      tone: "error",
      retryable: true
    }
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`NearingLimit`,`LimitReached`,`Loading`,`Failed`]})))()}h();export{l as Default,p as Failed,d as LimitReached,f as Loading,u as NearingLimit,m as __namedExportsOrder,c as default};