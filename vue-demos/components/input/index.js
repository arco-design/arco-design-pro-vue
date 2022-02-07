import Size from './size';
import DemoItem from '../../demoItem';

const InputStyle = {
  width: '30%',
  minWidth: '350px',
  display: 'inline-flex',
};

const outerStyle = {
  marginRight: '20px',
  marginBottom: '20px',
};

function InputDemo() {
  return (
    <div>
      <h4>输入框</h4>
      <DemoItem profile={{ type: 'Default', title: '输入框' }}>
        <Input style={[InputStyle, outerStyle]} placeholder="正常状态" />
        <Input class="arco-input-focus" style={[InputStyle, outerStyle]} placeholder="Focus 状态" />
        <br />
        <Input style={[InputStyle, outerStyle]} disabled placeholder="禁用状态" />
      </DemoItem>
      <h4>Error 状态</h4>
      <DemoItem profile={{ type: 'Error', title: '输入框 Error' }}>
        <Input style={[InputStyle, outerStyle]} error placeholder="Error 状态" />
        <Input class="arco-input-wrapper-focus" style={[InputStyle, outerStyle]} error placeholder="Error Focus 状态" />
      </DemoItem>
      <h4>允许清除</h4>
      <DemoItem profile={{ type: 'AllowClear', title: '允许清除' }}>
        <div class="demo-input-allowclear">
          <Input defaultValue="123" style={[InputStyle, outerStyle]} placeholder="allow clear" allowClear />
        </div>
      </DemoItem>
      <h4>字数统计</h4>
      <DemoItem profile={{ type: 'ShowWordLimit', title: '输入框 字数统计' }}>
        <div style={[InputStyle, outerStyle]}>
          <Input maxLength={10} showWordLimit placeholder="Please enter no more than 10 letters" />
        </div>
        <div style={[InputStyle, outerStyle]}>
          <Textarea maxLength={50} showWordLimit placeholder="Please enter no more than 50 letters" />
        </div>
      </DemoItem>
      <h4>前置标签</h4>
      <DemoItem profile={{ type: 'Addon', title: '前置/后置标签' }}>
        <Row>
          <div style={{ ...InputStyle, ...outerStyle }}>
            <Input v-slots={{ prepend: () => '+86' }} placeholder="请输入..." />
          </div>
          <div style={{ ...InputStyle, ...outerStyle }}>
            <Input v-slots={{ prepend: () => 'www.', append: () => '.com' }} placeholder="Please enter" />
          </div>
          <div style={{ ...InputStyle, ...outerStyle }}>
            <Input v-slots={{ append: () => 'RMB' }} placeholder="请输入..." />
          </div>
          <div style={{ ...InputStyle, ...outerStyle }}>
            <Input v-slots={{ prepend: () => 'http://' }} allowClear placeholder="Please enter" />
          </div>
        </Row>
      </DemoItem>
      <h4>前后缀</h4>
      <DemoItem profile={{ type: 'Prefix', title: '前后缀' }}>
        <Row>
          <Input
            v-slots={{ prefix: () => <IconUser /> }}
            style={[InputStyle, outerStyle]}
            allowClear
            placeholder="请输入..."
          />
          <Input
            allowClear
            style={[InputStyle, outerStyle]}
            v-slots={{ suffix: () => <IconInfoCircle /> }}
            placeholder="请输入..."
          />
          <Input
            style={[InputStyle, outerStyle]}
            v-slots={{ prefix: () => <IconUser />, suffix: () => <IconInfoCircle /> }}
            allowClear
            placeholder="请输入..."
          />
          <div style={InputStyle}>
            <Input
              v-slots={{
                prefix: () => <IconUser />,
                suffix: () => <IconInfoCircle />,
                prepend: () => '+86',
                append: () => <IconSearch />,
              }}
              allowClear
              placeholder="请输入..."
            />
          </div>
        </Row>
      </DemoItem>
      <h4>输入框组合</h4>
      <DemoItem profile={{ type: 'Input Group', title: '输入框组合' }}>
        <Row>
          <div style={[InputStyle, outerStyle]}>
            <InputGroup compact>
              <Input placeholder="请输入搜索内容" style={{ width: '35%' }}></Input>
              <InputSearch placeholder="Search" style={{ width: '65%' }} />
            </InputGroup>
          </div>
          <div style={[InputStyle, outerStyle]}>
            <InputGroup>
              <Input style={{ width: '24%' }} value="010" readOnly />
              <IconMinus style={{ color: 'var(--color-text-1)' }} />
              <Input style={{ width: '60%' }} defaultValue="8899887" placeholder="Phone number" />
            </InputGroup>
          </div>
        </Row>
      </DemoItem>
      <h4>搜索框</h4>
      <DemoItem profile={{ type: 'Search', title: '搜索框' }}>
        <InputSearch placeholder="请输入搜索内容" style={[InputStyle, outerStyle]} searchButton />

        <InputSearch defaultValue="搜索内容" style={[InputStyle, outerStyle]} />
      </DemoItem>
      <h4>文本域</h4>
      <DemoItem profile={{ type: 'Textarea', title: '文本域' }}>
        <Textarea showWordLimit placeholder="请输入..." style={[{ minHeight: '64px' }, InputStyle, outerStyle]} />
        <Textarea defaultValue="禁用状态" style={[{ minHeight: '64px' }, InputStyle, outerStyle]} disabled />
      </DemoItem>
      <h4>密码输入框</h4>
      <DemoItem profile={{ type: 'Password', title: '密码输入框' }}>
        <InputPassword defaultValue="passward" style={InputStyle} />
      </DemoItem>
      <h4>不同尺寸</h4>
      <DemoItem profile={{ type: 'Size', title: '不同尺寸' }}>
        <Size />
      </DemoItem>
    </div>
  );
}
export default {
  setup() {
    return InputDemo;
  },
};
