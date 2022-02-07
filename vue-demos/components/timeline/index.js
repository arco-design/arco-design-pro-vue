import DemoItem from '../../demoItem';

function Demo() {
  const getTimelineDemo = (props) => {
    return (
      <Timeline mode={props.mode} direction={props.direction || 'vertical'} labelPosition={props.labelPosition}>
        <TimelineItem label="2017-03-10">The first milestone</TimelineItem>
        <TimelineItem label="2018-05-12">The second milestone</TimelineItem>
        <TimelineItem label="2020-09-30">The third milestone</TimelineItem>
      </Timeline>
    );
  };
  return (
    <div>
      <h4>基础用法</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <Timeline style={{ display: 'inline-block', marginRight: '20px', width: '200px' }}>
          <TimelineItem label="2017-03-10">The first milestone</TimelineItem>
          <TimelineItem label="2018-05-12">The second milestone</TimelineItem>
          <TimelineItem label="2020-09-30">The third milestone</TimelineItem>
        </Timeline>
        <Timeline labelPosition="relative" style={{ display: 'inline-block', verticalAlign: 'top', width: '400px' }}>
          <TimelineItem label="2017-03-10">The first milestone</TimelineItem>
          <TimelineItem label="2018-05-12">The second milestone</TimelineItem>
          <TimelineItem label="2020-09-30">The third milestone</TimelineItem>
        </Timeline>
      </DemoItem>
      <h4>时间轴展示类型</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '35%' }}>{getTimelineDemo({ mode: 'alternate' })}</div>
          <div style={{ width: '35%', marginLeft: '10%' }}>{getTimelineDemo({ mode: 'right' })}</div>
        </div>
      </DemoItem>
      <h4>横向时间轴</h4>
      <DemoItem profile={{ type: 'Horizontal', title: '横向时间轴' }}>
        <h5>
          <Tag>时间轴在顶部</Tag>
        </h5>
        {getTimelineDemo({ direction: 'horizontal' })}
        <h5>
          <Tag>时间轴在底部</Tag>
        </h5>
        {getTimelineDemo({ direction: 'horizontal', mode: 'bottom' })}
        <h5>
          <Tag>信息交错出现</Tag>
        </h5>
        {getTimelineDemo({ direction: 'horizontal', mode: 'alternate' })}
        <h5>
          <Tag>label位置相对</Tag>
        </h5>
        {getTimelineDemo({ direction: 'horizontal', mode: 'bottom', labelPosition: 'relative' })}
      </DemoItem>
      <h4>空心节点时间轴</h4>
      <DemoItem profile={{ type: 'Hollow', title: '空心节点时间轴' }}>
        <Timeline>
          <TimelineItem dotType="hollow" label="2017-03-10">
            The first milestone
          </TimelineItem>
          <TimelineItem dotType="hollow" label="2018-05-12">
            The second milestone
          </TimelineItem>
          <TimelineItem dotType="hollow" label="2020-09-30">
            The third milestone
          </TimelineItem>
        </Timeline>
      </DemoItem>
    </div>
  );
}
export default {
  setup() {
    return Demo;
  },
};
