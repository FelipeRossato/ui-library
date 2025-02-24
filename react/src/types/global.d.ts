declare namespace JSX {
  interface IntrinsicElements {
    'ui-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      icon?: string;
      label?: string;
      color?: string;
      onClick?: React.MouseEventHandler<HTMLElement>;
    };
    'ui-input-field': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      disabled?: boolean;
      value?: string;
      type?: string;
      label?: string;
      placeholder?: string;
      'border-color'?: string;
    };
    'ui-dropdown': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      selected?: string;
      disabled?: boolean;
      label?: string;
      options?: string;
      'border-color'?: string;
    };
    'ui-modal': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      color?: string;
      title?: string;
      message?: string;
    };
    'ui-card': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      image?: string;
      title?: string;
      color?: string;
      'title-color'?: string;
      'description-color'?: string;
      description?: string;
    };
  }
}