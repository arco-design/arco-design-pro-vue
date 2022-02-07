import DemoItem from '../../demoItem';

const defaultFileList = [
  {
    uid: '-1',
    status: 'init',
    percent: 0,
    name: 'test-init.png',
    url: '',
  },
  {
    uid: '-11',
    name: 'test.png',
    status: 'done',
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
  },
  {
    uid: '-2',
    status: 'error',
    name: '20200717-103937.png',
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
  },
  {
    uid: '-3',
    percent: 0.2,
    status: 'uploading',
    name: '20200717-103937.png',
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
  },
];

export default function Demo() {
  return (
    <div>
      <h4>整体样式</h4>
      <DemoItem profile={{ type: 'Default', title: '整体样式' }}>
        <Upload fileList={defaultFileList.slice(0)} action="/" autoUpload={false}></Upload>
      </DemoItem>
      <h4>默认的文件列表样式</h4>
      <div>
        <h5>
          默认配置(<span style={{ fontWeight: 400 }}>点击配置单个上传文件的整体效果</span>)
        </h5>
        <DemoItem profile={{ type: 'Text Default', title: '上传文件的基本样式' }}>
          <Upload limit={1} fileList={[defaultFileList[0], defaultFileList[1]]} autoUpload={false} action="/"></Upload>
        </DemoItem>
        <h5>
          上传成功/上传失败/上传中(<span style={{ fontWeight: 400 }}>点击配置不同状态的图标</span>)
        </h5>
        <DemoItem profile={{ type: 'Text Status', title: '不同的上传状态' }}>
          <Upload
            limit={3}
            fileList={defaultFileList.slice(1).map((x) => {
              const newFile = { ...x };
              delete newFile.url;
              return newFile;
            })}
            action="/"
          >
            <span></span>
          </Upload>
        </DemoItem>
      </div>
      <h4>图片列表样式</h4>
      <DemoItem profile={{ type: 'PictureText', title: '图片列表样式' }}>
        <Upload listType="picture" fileList={defaultFileList.slice(1)} action="/"></Upload>
      </DemoItem>
      <h4>照片墙</h4>
      <h5>上传节点(配置上传节点)</h5>
      <DemoItem profile={{ type: 'PictureCard', title: '照片墙' }}>
        <span style={{ marginRight: '20px' }}>默认状态</span>
        <Upload listType="picture-card" action="/"></Upload>
        <br />
        <br />
        <span style={{ marginRight: '20px' }}>禁用状态</span>
        <Upload disabled listType="picture-card" action="/"></Upload>
      </DemoItem>
      <h5>已上传图片(配置不同状态的上传图片)</h5>
      <DemoItem profile={{ type: 'PictureCard Item', title: '照片墙' }}>
        <Tag color="arcoblue" style={{ marginBottom: '12px' }}>
          已上传文件
        </Tag>
        <br />
        <Upload
          defaultFileList={defaultFileList.slice(1).map((item) => {
            return { ...item, status: 'done' };
          })}
          listType="picture-card"
          action="/"
        >
          <span></span>
        </Upload>
        <br />
        <Tag color="arcoblue" style={{ marginTop: '20px', marginBottom: '12px' }}>
          显示操作项
        </Tag>
        <div class="demo-upload">
          <Upload
            defaultFileList={[
              {
                uid: '-1',
                name: 'test.png',
                url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
              },
            ]}
            listType="picture-card"
            action="/"
          >
            <span></span>
          </Upload>
        </div>
        <Tag color="arcoblue" style={{ marginTop: '20px', marginBottom: '12px' }}>
          上传失败
        </Tag>
        <div class="demo-upload">
          <Upload
            fileList={[
              {
                uid: '-1',
                status: 'error',
                name: 'test.png',
                url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
              },
            ]}
            listType="picture-card"
            action="/"
          >
            <span></span>
          </Upload>
        </div>
      </DemoItem>

      <h4>拖拽上传</h4>
      <DemoItem profile={{ type: 'Drag', title: '拖拽上传' }}>
        <div style={{ display: 'flex' }}>
          <p style={{ width: '200px' }}>默认状态</p>
          <div style={{ flex: 1 }}>
            <Upload draggable multiple accept="image/*" action="/" />
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <p style={{ width: '200px' }}>
            选中状态
            <br />
            (文件被拖拽到节点时)
          </p>
          <div style={{ flex: 1 }}>
            <Upload draggable multiple accept="image/*" action="/">
              <div draggable={false} class={['arco-upload-drag', 'arco-upload-drag-active']}>
                <IconPlus />
                <p class="arco-upload-drag-text">点击或拖拽文件到此处上传</p>
              </div>
            </Upload>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <p style={{ width: '200px' }}>禁用状态</p>
          <div style={{ flex: 1 }}>
            <Upload draggable disabled multiple accept="image/*" action="/" />
          </div>
        </div>
      </DemoItem>
      <h4>上传提示文字</h4>
      <DemoItem profile={{ type: 'UploadTip', title: '上传提示文字' }}>
        <Upload
          draggable
          tip="Tip ⚠️ : only pdf, png, jpg can be uploaded, and the size does not exceed 100MB "
          action="/"
        ></Upload>
      </DemoItem>
    </div>
  );
}
