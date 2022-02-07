import DemoItem from '../../demoItem';

const labelStyle = {
  display: 'inline-block',
  width: '110px',
  marginBottom: '10px',
};



function Demo() {
  const strRef = window.Vue.ref('Click the icon to edit this text.');

  return (
    <div class="demos-wrapper">
      <h4>标题</h4>
      <DemoItem profile={{ type: 'Head', title: '标题' }}>
        <Typography>
          <TypographyTitle>H1. The Pragmatic Romanticism</TypographyTitle>
          <TypographyTitle heading={2}>H2. The Pragmatic Romanticism</TypographyTitle>
          <TypographyTitle heading={3}>H3. The Pragmatic Romanticism</TypographyTitle>
          <TypographyTitle heading={4}>H4. The Pragmatic Romanticism</TypographyTitle>
          <TypographyTitle heading={5}>H5. The Pragmatic Romanticism</TypographyTitle>
          <TypographyTitle heading={6}>H6. The Pragmatic Romanticism</TypographyTitle>
        </Typography>
      </DemoItem>
      <h4>文本</h4>
      <DemoItem profile={{ type: 'Text', title: '文本' }}>
        <h5>不同状态</h5>
        <div>
          {['Default', 'Primary', 'Secondary', 'Success', 'Warning', 'Danger'].map((key) => {
            return (
              <div key={key}>
                <label style={labelStyle}>{key}</label>
                <TypographyText type={key.toLowerCase()}>arco design</TypographyText>
              </div>
            );
          })}
        </div>
        <h5>不同属性</h5>
        <div>
          {['Bold', 'Disabled', 'Mark', 'Underline'].map((key) => {
            return (
              <div key={key}>
                <label style={labelStyle}>{key}</label>
                <TypographyText {...{ [`${key.toLowerCase()}`]: true }}>arco design</TypographyText>
              </div>
            );
          })}
          <div>
            <label style={labelStyle}>Delete</label>
            <TypographyText delete>Line through</TypographyText>
          </div>
          <div>
            <label style={labelStyle}>Code</label>
            <TypographyText key="" code>
              Code snippet
            </TypographyText>
          </div>
        </div>
      </DemoItem>
      <h4>段落</h4>
      <DemoItem profile={{ type: 'Paragraph', title: '段落' }}>
        <Typography>
          <TypographyParagraph>This is a paragraph text.</TypographyParagraph>
          <TypographyParagraph copyable>Click the icon to copy this text.</TypographyParagraph>
          <TypographyParagraph
            editable
            editText={strRef.value}
            onChange={(v) => {
              strRef.value = v;
            }}
          >
            {strRef.value}
          </TypographyParagraph>
        </Typography>
      </DemoItem>
      <h4>段落长引用</h4>

      <DemoItem profile={{ type: 'Blockquote', title: '段落' }}>
        <Typography>
          <TypographyParagraph blockquote>
            A design is a plan or specification for the construction of an object or system or for the implementation of
            an activity or process, or the result of that plan or specification in the form of a prototype, product or
            process. The verb to design expresses the process of developing a design. The verb to design expresses the
            process of developing a design.
          </TypographyParagraph>
        </Typography>
      </DemoItem>
      <h4>省略</h4>

      <DemoItem profile={{ type: 'Ellipsis', title: '省略' }}>
        <Typography>
          <TypographyParagraph ellipsis>
            A design is a plan or specification for the construction of an object or system or for the implementation of
            an activity or process, or the result of that plan or specification in the form of a prototype, product or
            process. The verb to design expresses the process of developing a design. The verb to design expresses the
            process of developing a design.
          </TypographyParagraph>
          <TypographyParagraph
            ellipsis={{
              suffix: '--Arco Design',
              rows: 2,
              expandable: true,
            }}
          >
            A design is a plan or specification for the construction of an object or system or for the implementation of
            an activity or process, or the result of that plan or specification in the form of a prototype, product or
            process. The verb to design expresses the process of developing a design. The verb to design expresses the
            process of developing a design. A design is a plan or specification for the construction of an object or
            system or for the implementation of an activity or process, or the result of that plan or specification in
            the form of a prototype, product or process. The verb to design expresses the process of developing a
            design. The verb to design expresses the process of developing a design.
          </TypographyParagraph>
        </Typography>
      </DemoItem>
    </div>
  );
}

export default {
  setup() {
    return Demo;
  },
};
