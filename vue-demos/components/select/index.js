import { Select } from '@arco-design/web-vue';
import DemoItem from '../../demoItem';

const ItemStyle = {
  width: '30%',
  marginRight: '20px',
  marginBottom: '20px',
};

const labelStyle = {
  width: '60px',
  verticalAlign: 'middle',
  display: 'inline-block',
};

const options = ['Beijing', 'Shanghai', 'Guangzhou'];

const groups = [['Black tea latte', 'Green tea latte'], ['Vanilla Frappuccino']];

export default function SelectDemo() {
  return (
    <div>
      <h4>基本用法</h4>
      <DemoItem profile={{ type: 'Default', title: '选择器' }}>
        <Select placeholder="Please select" style={ItemStyle} options={options}></Select>
        <Select class="arco-select-focused" placeholder="Focus" style={ItemStyle} options={options}></Select>
        <br />
        <Select placeholder="Please select" disabled style={ItemStyle} options={options}></Select>
      </DemoItem>
      <h4>Error 状态</h4>
      <DemoItem profile={{ type: 'Error', title: '选择器 Error' }}>
        <Select error placeholder="Please select" style={ItemStyle} options={options}></Select>
        <Select
          error
          class="arco-select-focused"
          placeholder="Error Focus"
          style={ItemStyle}
          options={options}
        ></Select>
      </DemoItem>
      <h4>多选</h4>
      <DemoItem profile={{ type: 'Multiple', title: '多选' }}>
        <Select
          defaultValue={options}
          multiple
          placeholder="Please select"
          style={ItemStyle}
          options={options}
        ></Select>
        <Select
          disabled
          defaultValue={options}
          multiple
          placeholder="Please select"
          style={ItemStyle}
          options={options}
        ></Select>
      </DemoItem>
      <h4>选择项</h4>
      <DemoItem profile={{ type: 'Option', title: '选择项' }} style={{ paddingBottom: '150px' }}>
        <Select
          popupVisible
          triggerProps={{ autoFitPosition: false }}
          placeholder="Please select"
          style={ItemStyle}
        >
          {options.map((option, index) => {
            return (
              <Select.Option key={option} value={option} disabled={index === options.length - 1}>
                {option}
              </Select.Option>
            );
          })}
        </Select>
      </DemoItem>

      <h4>匹配文字样式</h4>
      <DemoItem profile={{ type: 'Hightlight', title: '匹配文字样式' }} style={{ paddingBottom: '150px' }}>
        <Select
          showSearch
          inputValue="ng"
          popupVisible
          triggerProps={{ autoFitPosition: false }}
          placeholder="Please select"
          style={ItemStyle}
        >
          {options.map((option) => {
            return (
              <Select.Option key={option} value={option}>
                {option}
              </Select.Option>
            );
          })}
        </Select>
      </DemoItem>
      <h4>选择项分组</h4>
      <DemoItem profile={{ type: 'Option Group', title: '选择项' }} style={{ paddingBottom: '200px' }}>
        <Select
          showSearch
          popupVisible
          triggerProps={{ autoFitPosition: false }}
          style={ItemStyle}
          allowClear
          placeholder="Select drink"
        >
          {groups.map((options, index) => {
            return (
              <Select.OptGroup label={`Group-${index}`} key={index}>
                {options.map((option) => (
                  <Select.Option key={option} value={option}>
                    {option}
                  </Select.Option>
                ))}
              </Select.OptGroup>
            );
          })}
        </Select>
      </DemoItem>
      <h4>弹出层</h4>
      <DemoItem profile={{ type: 'Popup', title: '选择器 Popup' }} style={{ paddingBottom: '150px' }}>
        <Select
          popupVisible
          triggerProps={{ autoFitPosition: false }}
          placeholder="Please select"
          style={ItemStyle}
          options={options}
        ></Select>
      </DemoItem>
      <h4>不同尺寸</h4>
      <DemoItem profile={{ type: 'Size', title: '不同尺寸' }}>
        <div>
          <label style={labelStyle}>Mini</label>
          <Select defaultValue="Beijing" size="mini" style={ItemStyle} options={options}></Select>
        </div>
        <div>
          <label style={labelStyle}>Small</label>
          <Select defaultValue="Beijing" size="small" style={ItemStyle} options={options}></Select>
        </div>
        <div>
          <label style={labelStyle}>Medium</label>
          <Select defaultValue="Beijing" size="medium" style={ItemStyle} options={options}></Select>
        </div>
        <div>
          <label style={labelStyle}>Large</label>
          <Select defaultValue="Beijing" size="large" style={ItemStyle} options={options}></Select>
        </div>
      </DemoItem>
    </div>
  );
}
