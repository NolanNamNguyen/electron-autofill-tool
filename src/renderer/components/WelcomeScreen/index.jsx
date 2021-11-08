import axios from 'axios';
import { Button, Input } from 'antd';
import { useHistory } from 'react-router-dom';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import * as AppRoutes from '../../router/constant/routes';

import icon from '../../../../assets/icon.svg';

const Hello = () => {
  console.log('axios: ', axios);
  const history = useHistory();
  const login = () => {
    history.push(AppRoutes.KDPInfo);
    console.log('logging in');
  };
  return (
    <div className="d-flex flex-column app-container">
      <div className="Hello mb-0">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1 className="text-center text-white">Super AutoFill Tool</h1>
      <div className="d-flex flex-column w-100 justify-content-center align-items-center wpx-200 hpx-200">
        <div className="wper-40 d-flex flex-column align-items-center">
          <Input
            size="large"
            placeholder="large size"
            prefix={<UserOutlined />}
            className="mb-3"
            type="text"
          />
          <Input
            size="large"
            placeholder="large size"
            prefix={<KeyOutlined />}
            className="mb-4"
            type="password"
          />
          <Button onClick={login} type="primary">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hello;
