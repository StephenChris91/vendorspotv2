declare module 'react-quill' {
    import * as React from 'react';
  
    export interface QuillEditorProps {
      value: string;
      onChange: (value: string) => void;
      className?: string;
      modules?: any;
      formats?: any;
      placeholder?: string;
      theme?: string;
      readOnly?: boolean;
      bounds?: string;
      style?: React.CSSProperties;
      children?: React.ReactNode;
    }
  
    export default class QuillEditor extends React.Component<QuillEditorProps> {
        static defaultProps: { modules: { toolbar: (string[] | { header: (number | boolean)[]; }[] | { list: string; }[] | { align: never[]; }[] | { color: never[]; }[])[]; }; formats: string[]; };
}
  }