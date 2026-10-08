import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{a as n,i as r,n as i,r as a,t as o}from"./ReplyStates-DDsUi4v7.js";var s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{s=t(),n(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Module-Specific Components/Explain/ThreadStates`,component:i,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[e=>(0,s.jsx)(`div`,{style:{width:420,maxWidth:`100%`,display:`flex`,flexDirection:`column`},children:(0,s.jsx)(e,{})})],args:{failure:{code:`llm_provider_unavailable`,title:`The AI provider isn't responding`,detail:`Try again shortly.`,tone:`error`,retryable:!0},onRetry:c()}},u={},d={args:{failure:{code:`quota_exceeded`,title:`AI usage limit reached`,detail:`Your organization's AI usage limit has been reached this period. An administrator can see usage under Settings → Atomity AI.`,tone:`notice`,retryable:!1}}},f={controls:{disable:!0}},p={parameters:f,render:()=>(0,s.jsx)(a,{usedContext:[`recommendation_context`,`evidence`,`cost_points`],citedFigures:[{label:`Estimated monthly savings`,value:184.5,unit:`USD`},{label:`Average CPU utilization`,value:12,unit:`%`}],corrected:!0})},m={parameters:f,render:()=>(0,s.jsx)(r,{title:`Why was this recommendation made?`})},h={parameters:f,render:()=>(0,s.jsx)(`div`,{style:{height:320,display:`flex`,flexDirection:`column`,background:`var(--atomity-white)`},children:(0,s.jsx)(o,{})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source},description:{story:`A retryable failure.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    failure: {
      code: "quota_exceeded",
      title: "AI usage limit reached",
      detail: "Your organization's AI usage limit has been reached this period. An administrator can see usage under Settings → Atomity AI.",
      tone: "notice",
      retryable: false
    }
  }
}`,...d.parameters?.docs?.source},description:{story:`Not a fault — a state to explain calmly. Nothing to retry.`,...d.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: fixed,
  render: () => <ReplyMeta usedContext={["recommendation_context", "evidence", "cost_points"]} citedFigures={[{
    label: "Estimated monthly savings",
    value: 184.5,
    unit: "USD"
  }, {
    label: "Average CPU utilization",
    value: 12,
    unit: "%"
  }]} corrected />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: fixed,
  render: () => <ResumedNotice title="Why was this recommendation made?" />
}`,...m.parameters?.docs?.source},description:{story:`Heads a thread picked from history — whose earlier turns copilot can't return.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: fixed,
  render: () => <div style={{
    height: 320,
    display: "flex",
    flexDirection: "column",
    background: "var(--atomity-white)"
  }}>\r
      <OutOfScope />\r
    </div>
}`,...h.parameters?.docs?.source},description:{story:`The rail on a page with no recommendation in it.`,...h.parameters?.docs?.description}}},g=[`Failure`,`Notice`,`Annotations`,`Resumed`,`NoRecommendationInScope`]})))()}_();export{p as Annotations,u as Failure,h as NoRecommendationInScope,d as Notice,m as Resumed,g as __namedExportsOrder,l as default};