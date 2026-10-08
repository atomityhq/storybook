import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./Panel-CxPETUB2.js";import{n as i,t as a}from"./StatusChip-eUWImsS4.js";import{n as o,t as s}from"./DividedRowList-DUDxptdF.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{c=t(),o(),n(),i(),{fn:l}=__STORYBOOK_MODULE_TEST__,u=[{label:`Compute`,value:`$18,240`},{label:`Storage`,value:`$9,110`},{label:`Network`,value:`$4,830`}],d=()=>(0,c.jsx)(s,{items:u,keyFn:e=>e.label,renderRow:e=>(0,c.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:16},children:[(0,c.jsx)(`span`,{style:{color:`var(--text-muted)`},children:e.label}),(0,c.jsx)(`span`,{style:{fontWeight:700},children:e.value})]})}),f={title:`Primitives/Panel`,component:r,tags:[`autodocs`],parameters:{layout:`centered`,docs:{usage:{when:`Every widget on a dashboard canvas — a titled card the user can reorder, collapse or remove. A one-figure KPI is a StatTile; a dialog is a Modal.`,do:["Give every panel a short title and an `icon` — the header is how a user finds a widget again after rearranging.","Let the panel pad its body. Content inside starts flush, and `--dash-card-pad` does the rest.","Wrap it in `SortablePanel` to make it draggable; the grip only appears when a drag can actually happen."],dont:["Nest a second `Panel` inside one — the border and header double up.",`Lift a resting panel with a shadow. Panels separate by border; shadow is for hover and overlays.`]}}},args:{title:`Spend by Category`,icon:`pie-chart`,children:(0,c.jsx)(d,{}),onRemove:l(),removable:!0,draggable:!1,collapsible:!1,defaultCollapsed:!1,isDragging:!1,isOverlay:!1,style:{width:340},bodyStyle:{}},argTypes:{title:{control:`text`,description:`Omit it and the panel renders as a bare bordered surface, with no header.`,table:{category:`Content`}},icon:{control:`select`,options:[`pie-chart`,`gauge`,`layers`,`shield-check`,`sparkles`],description:"Header glyph, muted. Only shown when there's a `title`.",table:{category:`Content`}},action:{control:!1,description:`Node pinned to the right of the header, before the remove button.`,table:{category:`Content`}},children:{control:!1,table:{category:`Content`}},removable:{control:`boolean`,description:"Shows the remove affordance — requires `onRemove` to render.",table:{category:`Behaviour`,defaultValue:{summary:`true`}}},onRemove:{control:!1,description:"Remove handler. Without it the button is omitted whatever `removable` says.",table:{category:`Behaviour`}},collapsible:{control:`boolean`,description:`Adds the chevron that hides the body without removing the widget.`,table:{category:`Behaviour`,defaultValue:{summary:`false`}}},defaultCollapsed:{control:`boolean`,description:`Read on first render only — afterward collapse is the user's own toggling.`,table:{category:`Behaviour`,defaultValue:{summary:`false`}}},draggable:{control:`boolean`,description:"Shows the grip. Left unset it's on only inside a `SortablePanel`.",table:{category:`Drag & drop`,defaultValue:{summary:`inside SortablePanel`}}},isDragging:{control:`boolean`,description:`Drag source styling: the card fades in place while its ghost moves.`,table:{category:`Drag & drop`,defaultValue:{summary:`false`}}},isOverlay:{control:`boolean`,description:`Drag ghost styling: lifted shadow and a slight scale-up.`,table:{category:`Drag & drop`,defaultValue:{summary:`false`}}},dragHandlers:{control:!1,table:{disable:!0}},dragListeners:{control:!1,table:{disable:!0}},dragAttributes:{control:!1,table:{disable:!0}},style:{control:`object`,description:`Merged onto the card shell — width, border colour, flex behaviour.`,table:{category:`Styling`}},bodyStyle:{control:`object`,description:`Merged onto the body wrapper, after its padding and scroll defaults.`,table:{category:`Styling`}}}},p={},m={args:{title:void 0,icon:void 0}},h={args:{action:(0,c.jsxs)(`select`,{style:{fontSize:`var(--dash-fs-sm)`},children:[(0,c.jsx)(`option`,{children:`Last 7 days`}),(0,c.jsx)(`option`,{children:`Last 30 days`})]})}},g={args:{title:`Governance`,icon:`shield-check`,action:(0,c.jsx)(a,{tone:`pass`,children:`PASSED`})}},_={args:{removable:!1}},v={args:{collapsible:!0}},y={args:{collapsible:!0,defaultCollapsed:!0}},b={args:{draggable:!0,isDragging:!0}},x={args:{draggable:!0,isOverlay:!0}},S={args:{style:{width:340,borderColor:`var(--atomity-green)`},bodyStyle:{background:`var(--atomity-gray-100)`}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    icon: undefined
  }
}`,...m.parameters?.docs?.source},description:{story:"No `title` means no header — just the card surface around whatever you pass.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    action: <select style={{
      fontSize: "var(--dash-fs-sm)"
    }}>\r
        <option>Last 7 days</option>\r
        <option>Last 30 days</option>\r
      </select>
  }
}`,...h.parameters?.docs?.source},description:{story:`The header's right slot, used across the dashboard for range and scope pickers.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Governance",
    icon: "shield-check",
    action: <StatusChip tone="pass">PASSED</StatusChip>
  }
}`,...g.parameters?.docs?.source},description:{story:`A header can carry a verdict instead of a control.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    removable: false
  }
}`,..._.parameters?.docs?.source},description:{story:"`removable: false` drops the button even though a handler is wired.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    defaultCollapsed: true
  }
}`,...y.parameters?.docs?.source},description:{story:`Collapsed panels shrink to the header, which also loses its bottom border.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    draggable: true,
    isDragging: true
  }
}`,...b.parameters?.docs?.source},description:{story:`How the original card looks while its ghost is being dragged elsewhere.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    draggable: true,
    isOverlay: true
  }
}`,...x.parameters?.docs?.source},description:{story:`The ghost that follows the cursor — lifted shadow, slightly scaled up.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      width: 340,
      borderColor: "var(--atomity-green)"
    },
    bodyStyle: {
      background: "var(--atomity-gray-100)"
    }
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Untitled`,`WithAction`,`WithStatusAction`,`NotRemovable`,`Collapsible`,`InitiallyCollapsed`,`Dragging`,`Overlay`,`CustomStyles`]})))()}w();export{v as Collapsible,S as CustomStyles,p as Default,b as Dragging,y as InitiallyCollapsed,_ as NotRemovable,x as Overlay,m as Untitled,h as WithAction,g as WithStatusAction,C as __namedExportsOrder,f as default};