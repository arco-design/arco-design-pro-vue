import DemoItem from '../../demoItem';

const ItemStyle = {
  width: '30%',
  marginRight: '20px',
  marginBottom: '20px',
};

function DemoAutoComplete(props) {
  const data = Vue.ref([])

    const handleSearch = (inputValue) => {
        data.value = inputValue ? new Array(5).fill(null).map((_, index) => `${inputValue}_${index}`) : []
    };

  return <AutoComplete {...props} onSearch={handleSearch} data={data} />;
}

export default function Demo() {
  return (
    <div>
      <h4>基本用法</h4>
      <DemoItem profile={{ type: 'Default', title: '自动补全' }}>
        <DemoAutoComplete placeholder="Please enter ..." style={ItemStyle} />
        <DemoAutoComplete class="arco-input-focus" placeholder="Focus" style={ItemStyle}></DemoAutoComplete>
        <br />
        <DemoAutoComplete placeholder="Please enter" disabled style={ItemStyle}></DemoAutoComplete>
      </DemoItem>
      <h4>Error 状态</h4>
      <DemoItem profile={{ type: 'Error', title: '自动补全 Error' }}>
        <DemoAutoComplete error placeholder="Please enter" style={ItemStyle}></DemoAutoComplete>
        <DemoAutoComplete
          error
          class="arco-input-focus"
          placeholder="Error Focus"
          style={ItemStyle}
        ></DemoAutoComplete>
      </DemoItem>
      <h4>弹出框</h4>
      <DemoItem profile={{ type: 'Popup', title: '自动补全 弹出框' }} style={{ paddingBottom: '200px' }}>
        <AutoComplete
          defaultValue="1"
          data={['1', '12']}
          triggerProps={{ popupVisible: true }}
          placeholder="Please enter"
          style={ItemStyle}
        ></AutoComplete>
      </DemoItem>
      <h4>选项</h4>
      <DemoItem profile={{ type: 'Option', title: '自动补全 选项' }} style={{ paddingBottom: '200px' }}>
        <AutoComplete
          defaultValue="1"
          data={['1', '12']}
          triggerProps={{ popupVisible: true }}
          placeholder="Please enter"
          style={ItemStyle}
        ></AutoComplete>
      </DemoItem>
    </div>
  );
}
