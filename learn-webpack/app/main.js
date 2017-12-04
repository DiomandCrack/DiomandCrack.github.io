import React from 'react';
import { render } from 'react-dom';
import Greeter from './Greeter';

import './main.css'; //导入css文件

const root = document.querySelector('#root');
//控制台  webpack app/main.js public/bundle.js

render( < Greeter / > , document.getElementById('root'));
//太帅了