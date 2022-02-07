import style from './style.less';

export default {
  setup() {
    const renderIcons = (icons) => {
      return (
        <div className={style.list}>
          {Object.keys(icons).map((name) => {
            const Tag = icons[name];
            return (
              <div key={name} className={style['list-item']}>
                <div className={style['list-item-icon']}>
                  <Tag />
                </div>
                <label>{name}</label>
              </div>
            );
          })}
        </div>
      );
    };
    return (
      <div>
        <Tabs>
          {window['custom_icon'] && (
            <Tabs.TabPane key="iconbox" title="自定义图标库">
              {renderIcons(window['custom_icon'])}
            </Tabs.TabPane>
          )}
          <Tabs.TabPane title="默认图标" key="default">
            {renderIcons(window['defaultArcoIcon'])}
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  },
};
