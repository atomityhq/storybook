import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{r as n,t as r}from"./Icon-DrDeo3Uw.js";import{a as i,r as a,t as o}from"./showcase-DC46wa29.js";import{n as s,t as c}from"./CompactButton-DI__sEwB.js";var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{l=t(),s(),n(),i(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={control:`select`,options:Object.keys(r)},f={title:`Primitives/CompactButton`,component:c,tags:[`autodocs`],parameters:{layout:`centered`,docs:{usage:{when:"A small secondary action inside a panel or chat reply — View full size, Open report, a pagination step. A screen's main actions use the `.btn` pills instead.",do:[`Write the label in sentence case, as a short verb phrase.`,"Use the `arrow-up-right` trailing icon for anything that opens out of the current view.","Pass `aria-label` when the visible label is ambiguous out of context — View full size of what?"],dont:["Reach for `.btn` inside a panel. The uppercase pills are for a screen's primary actions.",`Stack several side by side as the main way forward. If it's the main action, it isn't compact.`]}}},args:{children:`View full size`,trailingIcon:`arrow-up-right`,size:`sm`,onClick:u()},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`]},leadingIcon:d,trailingIcon:d}},p={},m={args:{children:`Open report`,size:`md`,leadingIcon:`scroll-text`,"aria-label":`Open report: Q3 savings`}},h={parameters:{controls:{disable:!0}},render:()=>(0,l.jsxs)(a,{children:[(0,l.jsx)(o,{label:`sm`,children:(0,l.jsx)(c,{trailingIcon:`arrow-up-right`,children:`View full size`})}),(0,l.jsx)(o,{label:`md`,children:(0,l.jsx)(c,{size:`md`,leadingIcon:`scroll-text`,trailingIcon:`arrow-up-right`,children:`Open report`})}),(0,l.jsx)(o,{label:`text only`,children:(0,l.jsx)(c,{children:`Show 12 more`})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Open report",
    size: "md",
    leadingIcon: "scroll-text",
    "aria-label": "Open report: Q3 savings"
  }
}`,...m.parameters?.docs?.source},description:{story:`A report in a chat reply opens from the larger size, with a leading glyph for what it is.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <SpecimenRow>\r
      <Specimen label="sm">\r
        <CompactButton trailingIcon="arrow-up-right">View full size</CompactButton>\r
      </Specimen>\r
      <Specimen label="md">\r
        <CompactButton size="md" leadingIcon="scroll-text" trailingIcon="arrow-up-right">\r
          Open report\r
        </CompactButton>\r
      </Specimen>\r
      <Specimen label="text only">\r
        <CompactButton>Show 12 more</CompactButton>\r
      </Specimen>\r
    </SpecimenRow>
}`,...h.parameters?.docs?.source}}},g=[`Default`,`OpenReport`,`Sizes`]})))()}_();export{p as Default,m as OpenReport,h as Sizes,g as __namedExportsOrder,f as default};