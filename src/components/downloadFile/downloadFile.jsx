export const downloadFile = async (file) => {
    try {
      const response = await fetch(file);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const fileName = file.split("/")[file.split("/").length - 1];
  
      const element = document.createElement("a");
      element.setAttribute("target", "_blank");
      element.setAttribute("href", url);
      element.setAttribute(
        "download",
        fileName.slice(fileName.lastIndexOf("__") + 2)
      );
  
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
  
      return url;
    } catch (error) {
      console.error(error);
      return null;
    }
  };