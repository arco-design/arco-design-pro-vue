import DemoItem from '../../demoItem';

function Demo() {
  const actions = [
    <span class="custom-comment-action" key="heart">
      <IconHeartFill style={{ color: '#f53f3f' }} /> 12
    </span>,
    <span class="custom-comment-action" key="star">
      <IconStarFill style={{ color: '#ffb400' }} /> 2
    </span>,
    <span class="custom-comment-action" key="reply">
      <IconMessage /> Reply
    </span>,
  ];
  return (
    <div>
      <h4>基础用法</h4>
      <DemoItem profile={{ type: 'Default', title: '基本样式' }}>
        <Comment
          v-slots={{
            actions: () => actions,
            author: () => (
              <Avatar>
                <img
                  alt="avatar"
                  src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp"
                />
              </Avatar>
            ),
            content: () => <div>Comment body content.</div>,
          }}
          author="Socrates"
          datetime="1 hour"
        />
      </DemoItem>
      <h4>嵌套评论</h4>
      <DemoItem profile={{ type: 'Nest', title: '嵌套评论' }}>
        <Comment
          v-slots={{ actions: () => actions[2], content: () => <div>Comment body content.</div> }}
          author={'Socrates'}
          avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp"
          datetime="1 hour"
        >
          <Comment
            v-slots={{ actions: () => actions[2], content: () => <div>Comment body content.</div> }}
            author="Balzac"
            avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
            datetime="1 hour"
          >
            <Comment
              v-slots={{ actions: () => actions[2], content: () => <div> Reply content </div> }}
              author="Austen"
              avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp"
              datetime="1 hour"
            />
            <Comment
              v-slots={{ actions: () => actions[2], content: () => <div> Reply content </div> }}
              author="Plato"
              avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
              datetime="1 hour"
            />
          </Comment>
        </Comment>
      </DemoItem>
    </div>
  );
}

export default {
  setup() {
    return Demo;
  },
};
