const InputStyle = {
  width: '30%',
  display: 'inline-flex'
};

const outerStyle = {
  marginRight: '20px',
  marginBottom: '20px',
};

export default {
  setup() {
    const size = window.Vue.ref('medium');

    return () => (
      <div>
        <RadioGroup style={{ marginBottom: '24px' }} type="button" v-model={size.value}>
          <Radio value="mini">mini</Radio>
          <Radio value="small">small</Radio>
          <Radio value="medium">medium</Radio>
          <Radio value="large">large</Radio>
        </RadioGroup>
        <div>
          <Input size={size.value} autoFocus style={[InputStyle, outerStyle]} placeholder="正常状态" />
          <Input size={size.value} style={[InputStyle, outerStyle]} disabled placeholder="禁用状态" />
        </div>
        <div>
          <div style={[InputStyle, outerStyle]}>
            <Input
              size={size.value}
              v-slots={{
                prepend: () => 'www.',
                append: () => '.com',
              }}
              placeholder="请输入..."
            />
          </div>
          <Input
            size={size.value}
            style={[InputStyle, outerStyle]}
            v-slots={{
              prefix: () => <IconUser />,
              suffix: () => <IconInfoCircle />,
            }}
            allowClear
            placeholder="请输入..."
          />
        </div>
        <div>
          <div style={[InputStyle, outerStyle]}>
            <Input
              size={size.value}
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
          <InputSearch size={size.value} style={InputStyle} />
        </div>
      </div>
    );
  },
};
