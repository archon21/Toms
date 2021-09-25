interface FileArguments {
  path: string;
  fileName: string;
}

const dataTypes = {
  excel: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  text: "text/plain",
  csv: "text/plain",
};

const DownloadFile = ({ fileName, path }: FileArguments) => {
  var element = document.createElement("a");
  element.setAttribute("href", path);
  element.setAttribute("download", fileName);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

export default DownloadFile;

//   `data:${dataTypes[fileType]};charset=utf-8,` + encodeURIComponent(data)
