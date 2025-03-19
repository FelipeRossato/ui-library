import { UIButton, UIInputField, UIDropdown, UIModal, UICard } from '@felipe-rossato/ui-library';

export function registerUILibrary() {
  const components = [
    { tag: 'ui-button', component: UIButton },
    { tag: 'ui-inputfield', component: UIInputField },
    { tag: 'ui-dropdown', component: UIDropdown },
    { tag: 'ui-modal', component: UIModal },
    { tag: 'ui-card', component: UICard },
  ];

  components.forEach(({ tag, component }) => {
    if (!customElements.get(tag)) {
      try {
        customElements.define(tag, component);
      } catch (e) {
        if (e instanceof DOMException && e.name === 'NotSupportedError') {
          console.warn(`Component for <${tag}> was already registered.`);
        } else {
          throw e;
        }
      }
    }
  });
}
