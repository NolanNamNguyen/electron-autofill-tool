require('dotenv').config({ path: './local/.env.local' });
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const TAB_SIZE = 2;
const START_ROW = 2;
const COL_FILE_NAME = 'Module';
const COL_KEY = 'Key';
const COL_JA = 'JA';
const COL_EN = 'EN';

convert();

const convert = () => {
  const [input, output, sheets] = getArgv();
  const workbook = xlsx.readFile(input, { sheets });
  const jsonData = {};
};
