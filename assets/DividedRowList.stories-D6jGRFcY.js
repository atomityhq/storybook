import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,r}from"./Icon-DrDeo3Uw.js";import{a as i,i as a}from"./showcase-DC46wa29.js";import{n as o,t as s}from"./Panel-CxPETUB2.js";import{n as c,t as l}from"./DividedRowList-DUDxptdF.js";var u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{u=t(),c(),r(),o(),i(),d=[{label:`Monthly Spend`,value:`$42,180`,icon:`circle-dollar-sign`},{label:`Active Resources`,value:`312`,icon:`boxes`},{label:`Open Recommendations`,value:`7`,icon:`lightbulb`},{label:`Governance Score`,value:`94%`,icon:`shield-check`}],f=e=>e.label,p=e=>(0,u.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:16},children:[(0,u.jsx)(`span`,{style:{color:`var(--text-muted)`},children:e.label}),(0,u.jsx)(`span`,{style:{fontWeight:700},children:e.value})]}),m={title:`Primitives/DividedRowList`,component:l,tags:[`autodocs`],decorators:[e=>(0,u.jsx)(a,{width:420,children:(0,u.jsx)(s,{title:`Estate Metrics`,icon:`gauge`,children:(0,u.jsx)(e,{})})})],args:{items:d,keyFn:f,renderRow:p,rowStyle:{},containerStyle:{}},argTypes:{items:{control:!1,description:`Rows to render. The list owns only the divider/padding rhythm.`},keyFn:{control:!1,description:"React key per item. Must be stable and unique across `items`."},renderRow:{control:!1,description:"Each row's internal layout. Receives `(item, index, isLast)`."},rowStyle:{control:`object`,description:`Merged into every row wrapper, on top of the shared padding/border.`,table:{category:`Styling`}},containerStyle:{control:`object`,description:`Merged onto the flex column that holds the rows.`,table:{category:`Styling`}}}},h={},g={args:{renderRow:e=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[e.icon&&(0,u.jsx)(n,{name:e.icon,size:16,color:`var(--text-muted)`}),(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,u.jsx)(`span`,{style:{fontWeight:700},children:e.value}),(0,u.jsx)(`span`,{style:{fontSize:11,color:`var(--text-muted)`},children:e.label})]})]})}},_={args:{items:[d[0]]}},v={args:{items:[]}},y={args:{rowStyle:{padding:`12px 8px`,background:`var(--atomity-gray-100)`}}},b={args:{containerStyle:{border:`1px solid var(--border-light)`,borderRadius:`var(--radius-md)`,padding:`0 12px`}}},x={args:{renderRow:(e,t,n)=>(0,u.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:16},children:[(0,u.jsx)(`span`,{children:e.label}),(0,u.jsx)(`span`,{style:{fontWeight:700,color:n?`var(--text-muted)`:void 0},children:n?`no border below`:e.value})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source},description:{story:`The label/value pair this list is used for most across the dashboard's panels.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    renderRow: item => <div style={{
      display: "flex",
      alignItems: "center",
      gap: 10
    }}>\r
        {item.icon && <Icon name={item.icon} size={16} color="var(--text-muted)" />}\r
        <div style={{
        display: "flex",
        flexDirection: "column"
      }}>\r
          <span style={{
          fontWeight: 700
        }}>{item.value}</span>\r
          <span style={{
          fontSize: 11,
          color: "var(--text-muted)"
        }}>{item.label}</span>\r
        </div>\r
      </div>
  }
}`,...g.parameters?.docs?.source},description:{story:"`renderRow` owns the row's layout, so the same list can stack icon + value + caption.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: [metrics[0]]
  }
}`,..._.parameters?.docs?.source},description:{story:`One item means one row and no divider at all.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  }
}`,...v.parameters?.docs?.source},description:{story:`Renders nothing — the surrounding panel is what shows an empty state.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    rowStyle: {
      padding: "12px 8px",
      background: "var(--atomity-gray-100)"
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    containerStyle: {
      border: "1px solid var(--border-light)",
      borderRadius: "var(--radius-md)",
      padding: "0 12px"
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    renderRow: (item, _index, isLast) => <div style={{
      display: "flex",
      justifyContent: "space-between",
      gap: 16
    }}>\r
        <span>{item.label}</span>\r
        <span style={{
        fontWeight: 700,
        color: isLast ? "var(--text-muted)" : undefined
      }}>\r
          {isLast ? "no border below" : item.value}\r
        </span>\r
      </div>
  }
}`,...x.parameters?.docs?.source},description:{story:"Every row but the last gets a hairline `borderBottom`; the last row's border is dropped so\r\nthe list doesn't end with a trailing divider before the panel edge.",...x.parameters?.docs?.description}}},S=[`Default`,`DifferentRowContent`,`SingleItem`,`Empty`,`CustomRowStyle`,`CustomContainerStyle`,`LastRowBehavior`]})))()}C();export{b as CustomContainerStyle,y as CustomRowStyle,h as Default,g as DifferentRowContent,v as Empty,x as LastRowBehavior,_ as SingleItem,S as __namedExportsOrder,m as default};