export const getClassName = (
  checked: boolean,
  option: string,
  picked: string,
  answer: string
): string => {
  let classname = "";
  if (!checked && option === picked) classname = "active";
  if (checked && option === answer) classname = "correct";
  if (checked && option === picked && option !== answer) classname = "wrong";
  if (checked && option === picked && option === answer) classname = "success";

  return classname;
};

export const getImageLink = (url: string): string => {
  return new URL(url, import.meta.url).href;
};
