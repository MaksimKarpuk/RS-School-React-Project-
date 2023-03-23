import { Component } from 'react';

interface IProps {
  fileField: React.RefObject<HTMLInputElement>;
  label: string;
}
class FileRef extends Component<IProps> {
  render() {
    return (
      <>
        <label htmlFor="fileRef">{this.props.label}</label>
        <input type="file" id="fileRef" ref={this.props.fileField} accept="image/*" />
      </>
    );
  }
}
export default FileRef;
