import React from "react";
import style from "./style/style.less";
import A from "./A";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/lib/locale/zh_CN";
import moment from "moment";
import { Calendar, ConfigProvider, DatePicker, message, Select } from "antd";
const { Option } = Select;

const App: React.FunctionComponent = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div
        className={style.red}
        onClick={() => {
          message.info('This is a normal message');
        }}
      >
        add react! <A />
      </div>
      <Select showSearch style={{ width: 200 }}>
        <Option value="jack">jack</Option>
        <Option value="lucy">lucy</Option>
      </Select>
      <DatePicker />
      <Calendar fullscreen={false} value={moment()} />
    </ConfigProvider>
  );
};

export default App;
