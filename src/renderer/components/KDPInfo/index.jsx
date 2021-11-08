/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
// import ReactCSSTransitionGroup from 'react-transition-group';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Form } from 'antd';

const KDPForm = () => {
  const formName = {
    email: 'email',
    password: 'password',
    width: 'width',
    height: 'height',
  };

  const KDPSchema = yup.object().shape({
    [formName.email]: yup.string().required('Please Enter Email'),
    [formName.password]: yup.string().required('Please enter Password'),
    [formName.width]: yup
      .number('Please enter a fucking number')
      .required('Please enter Width'),
    [formName.height]: yup
      .number('Please enter a fucking number')
      .required('Please enter Height'),
  });

  const methods = useForm({
    resolver: yupResolver(KDPSchema),
  });

  const { handleSubmit, control, formState } = methods;

  return (
    <div className="kdp-form-container">
      <Form className="card">
        <div className="d-flex ">
          <Controller
            name={formName.email}
            control={control}
            render={({ field }) => {
              return <Input {...field} type="text" />;
            }}
          />
        </div>
      </Form>
    </div>
  );
};

export default KDPForm;
