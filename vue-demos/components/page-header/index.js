import DemoItem from '../../demoItem';

function Demo() {
  return (
    <div>
      <h4>基础用法</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <div style={{ background: 'var(--color-fill-2)', padding: '40px' }}>
          <PageHeader
            style={{ background: 'var(--color-bg-2)' }}
            title="ArcoDesign"
            subtitle="This is a description"
            backIcon
            v-slots={{
              extra: () => (
                <div>
                  <RadioGroup mode="fill" type="button" defaultValue="small">
                    <Radio value="large">Large</Radio>
                    <Radio value="medium">Medium</Radio>
                    <Radio value="small">Small</Radio>
                  </RadioGroup>
                </div>
              ),
            }}
          />

          <br />
          <br />
          <PageHeader
            style={{ background: 'var(--color-bg-2)' }}
            title="ArcoDesign"
            subtitle="This is a description"
            backIcon
            v-slots={{
              breadcrumb: () => {
                return (
                  <Breadcrumb>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Channel</BreadcrumbItem>
                    <BreadcrumbItem>News</BreadcrumbItem>
                  </Breadcrumb>
                );
              },
              extra: () => (
                <div>
                  <RadioGroup mode="fill" type="button" defaultValue="small">
                    <Radio value="large">Large</Radio>
                    <Radio value="medium">Medium</Radio>
                    <Radio value="small">Small</Radio>
                  </RadioGroup>
                </div>
              ),
            }}
          />
        </div>
      </DemoItem>
      <h4>显示内容</h4>
      <DemoItem profile={{ type: 'Content', title: '基本样式' }}>
        <PageHeader
          style={{ background: 'var(--color-bg-2)' }}
          title="ArcoDesign"
          subtitle="This is a description"
          backIcon
          v-slots={{
            extra: () => (
              <div>
                <RadioGroup mode="fill" type="button" defaultValue="small">
                  <Radio value="large">Large</Radio>
                  <Radio value="medium">Medium</Radio>
                  <Radio value="small">Small</Radio>
                </RadioGroup>
              </div>
            ),
          }}
        >
          <p style={{ fontSize: 16, fontWeight: 600, marginTop: 0, marginBottom: 20 }}>For other uses, see Design</p>
          <p>
            A design is a plan or specification for the construction of an object or system or for the implementation of
            an activity or process, or the result of that plan or specification in the form of a prototype, product or
            process. The verb to design expresses the process of developing a design. In some cases, the direct
            construction of an object without an explicit prior plan (such as in craftwork, some engineering, coding,
            and graphic design) may also be considered to be a design activity. The design usually has to satisfy
            certain goals and constraints, may take into account aesthetic, functional, economic, or socio-political
            considerations, and is expected to interact with a certain environment. Major examples of designs include
            architectural blueprints,engineering drawings, business processes, circuit diagrams, and sewing
            patterns.Major examples of designs include architectural blueprints,engineering drawings, business
            processes, circuit diagrams, and sewing patterns.
          </p>
        </PageHeader>
      </DemoItem>
    </div>
  );
}

export default {
  setup() {
    return Demo;
  },
};
