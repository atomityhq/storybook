import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{a as n,i as r}from"./showcase-DC46wa29.js";import{n as i,t as a}from"./DataTable-CDspoK-U.js";import{n as o,t as s}from"./Panel-CxPETUB2.js";import{n as c,t as l}from"./StatusChip-eUWImsS4.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{u=t(),i(),o(),c(),n(),d={healthy:`pass`,warning:`watch`,critical:`fail`},f=[{name:`prod-api-gateway`,type:`Load Balancer`,region:`us-east-1`,monthlyCost:214.5,status:`healthy`},{name:`billing-worker`,type:`Compute`,region:`us-east-1`,monthlyCost:1280.32,status:`warning`},{name:`analytics-warehouse`,type:`Database`,region:`eu-west-1`,monthlyCost:3420.1,status:`healthy`},{name:`legacy-cache`,type:`Cache`,region:`eu-west-1`,monthlyCost:96.75,status:`critical`}],p=e=>e.name,m=[{key:`name`,header:`Resource`,render:e=>e.name},{key:`type`,header:`Type`,render:e=>e.type},{key:`region`,header:`Region`,render:e=>e.region}],h={key:`monthlyCost`,header:`Monthly Cost`,align:`right`,render:e=>`$${e.monthlyCost.toFixed(2)}`},g=a,_={title:`Primitives/DataTable`,component:g,tags:[`autodocs`],decorators:[e=>(0,u.jsx)(r,{width:720,children:(0,u.jsx)(s,{title:`Resources`,icon:`layers`,children:(0,u.jsx)(e,{})})})],args:{columns:m,rows:f,keyFn:p,stickyHeader:!1,fixedLayout:!1,headerStyle:{},cellStyle:{}},argTypes:{columns:{control:!1,description:`Header, alignment and per-row renderer for each column.`,table:{category:`Data`}},rows:{control:!1,table:{category:`Data`}},keyFn:{control:!1,description:"React key per row. Must be stable and unique across `rows`.",table:{category:`Data`}},stickyHeader:{control:`boolean`,description:`Pins the header while the body scrolls. Needs a height-capped ancestor.`,table:{category:`Layout`,defaultValue:{summary:`false`}}},fixedLayout:{control:`boolean`,description:"`table-layout: fixed`. Pair with `width` on each column.",table:{category:`Layout`,defaultValue:{summary:`false`}}},headerStyle:{control:`object`,description:"Merged into every `th`, under each column's own `headerStyle`.",table:{category:`Styling`}},cellStyle:{control:`object`,description:"Merged into every `td`, under each column's own `cellStyle`.",table:{category:`Styling`}},rowStyle:{control:!1,description:`Per-row style callback — the hook for flagging a row by its data.`,table:{category:`Styling`}}}},v={},y={args:{columns:[...m,h]}},b={args:{columns:[...m,h],rows:[...f,...f,...f],keyFn:(e,t)=>`${e.name}-${t}`,stickyHeader:!0},render:e=>(0,u.jsx)(`div`,{style:{height:200,overflow:`auto`},children:(0,u.jsx)(g,{...e})})},x={args:{columns:[{...m[0],width:`50%`},{...m[1],width:`30%`},{...m[2],width:`20%`}],fixedLayout:!0}},S={args:{columns:[m[0],{key:`status`,header:`Status`,render:e=>(0,u.jsx)(l,{tone:d[e.status],children:e.status})},{...h,render:e=>(0,u.jsxs)(`strong`,{children:[`$`,e.monthlyCost.toFixed(2)]})}]}},C={args:{columns:[...m,{key:`status`,header:`Status`,render:e=>(0,u.jsx)(l,{tone:d[e.status],children:e.status})}],rowStyle:e=>e.status===`critical`?{background:`var(--color-error-bg)`}:void 0}},w={args:{columns:[m[0],{...m[1],headerStyle:{color:`var(--text-primary)`}},m[2]],headerStyle:{background:`var(--atomity-gray-100)`},cellStyle:{fontStyle:`italic`}}},T={args:{rows:[]}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [...baseColumns, costColumn]
  }
}`,...y.parameters?.docs?.source},description:{story:'Numbers get `align: "right"` so their digits line up column-wise.',...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [...baseColumns, costColumn],
    rows: [...resources, ...resources, ...resources],
    keyFn: (row, i) => \`\${row.name}-\${i}\`,
    stickyHeader: true
  },
  render: args => <div style={{
    height: 200,
    overflow: "auto"
  }}>\r
      <ResourceDataTable {...args} />\r
    </div>
}`,...b.parameters?.docs?.source},description:{story:`The header stays put because the decorator's Panel body is height-capped here.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      ...baseColumns[0],
      width: "50%"
    }, {
      ...baseColumns[1],
      width: "30%"
    }, {
      ...baseColumns[2],
      width: "20%"
    }],
    fixedLayout: true
  }
}`,...x.parameters?.docs?.source},description:{story:`Columns hold their share of the width instead of sizing to their content.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [baseColumns[0], {
      key: "status",
      header: "Status",
      render: row => <StatusChip tone={STATUS_TONES[row.status]}>{row.status}</StatusChip>
    }, {
      ...costColumn,
      render: row => <strong>\${row.monthlyCost.toFixed(2)}</strong>
    }]
  }
}`,...S.parameters?.docs?.source},description:{story:`Any cell can render a node, so the table composes with the other primitives.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [...baseColumns, {
      key: "status",
      header: "Status",
      render: row => <StatusChip tone={STATUS_TONES[row.status]}>{row.status}</StatusChip>
    }],
    rowStyle: row => row.status === "critical" ? {
      background: "var(--color-error-bg)"
    } : undefined
  }
}`,...C.parameters?.docs?.source},description:{story:"`rowStyle` reads the row's own data — here the one resource that needs attention.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [baseColumns[0], {
      ...baseColumns[1],
      headerStyle: {
        color: "var(--text-primary)"
      }
    }, baseColumns[2]],
    headerStyle: {
      background: "var(--atomity-gray-100)"
    },
    cellStyle: {
      fontStyle: "italic"
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    rows: []
  }
}`,...T.parameters?.docs?.source},description:{story:`No rows leaves the header alone — callers supply their own empty state above or below.`,...T.parameters?.docs?.description}}},E=[`Default`,`RightAligned`,`StickyHeader`,`FixedLayout`,`CustomRendering`,`RowStyle`,`CustomStyles`,`Empty`]})))()}D();export{S as CustomRendering,w as CustomStyles,v as Default,T as Empty,x as FixedLayout,y as RightAligned,C as RowStyle,b as StickyHeader,E as __namedExportsOrder,_ as default};