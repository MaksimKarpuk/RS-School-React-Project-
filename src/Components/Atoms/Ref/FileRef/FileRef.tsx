import { FC } from 'react';

interface IProps {
  fileField: React.MutableRefObject<HTMLInputElement | undefined>;
  label: string;
}
const FileRef: FC<IProps> = (props) => {
  return (
    <>
      <label htmlFor="fileRef">{props.label}</label>
      <input type="file" id="fileRef" ref={props.fileField} accept="image/*" />
    </>
  );
};

export default FileRef;
