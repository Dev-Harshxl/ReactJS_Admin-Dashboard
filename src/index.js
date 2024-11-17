const jsonfile=require('jsonfile');
const moment=require('moment');
const File_Path='./data.json';
const DATE=moment().format();

const data={
  date : DATE
}
jsonfile.writeFile(File_Path,data);