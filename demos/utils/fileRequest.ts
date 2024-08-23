/**
 * 上传文件
 * @description 由于 axios 暂时不支持文件上传，这里使用fetch来上传文件
 * @param file 上传的文件
 */
export const fileRequest = async (file: File, apiPath: string) => {
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch(apiPath, {
    method: "POST",
    body: formData,
    headers: {
      "access-token": localStorage.getItem("accesstoken") || "",
    },
  });
  return await res.json();
};
