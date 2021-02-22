import { useSelectState } from '@react-stately/select';
import { Item } from '@react-stately/collections';
import { HiddenSelect, useSelect } from '@react-aria/select';
import { useListBox, useOption } from '@react-aria/listbox';
import { mergeProps } from '@react-aria/utils';
import { useButton } from '@react-aria/button';
import { useFocus } from '@react-aria/interactions';
import { FocusScope } from '@react-aria/focus';
import { useOverlay, DismissButton } from '@react-aria/overlays';
import * as React from 'react';

export { Item, Select };

function Select(props) {
  let state = useSelectState(props);
  let ref = React.useRef();
  let { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref
  );
  let { buttonProps } = useButton(triggerProps, ref);

  /**
   * Will crash when Select is not defaultOpen, because
   * listbox ref is not attachedon first render.
   *
   * @see https://github.com/adobe/react-spectrum/blob/dd52b8deffa1850ff4301c98a0db57d7bccebcdf/packages/%40react-aria/selection/src/useSelectableCollection.ts#L342
   */
  let listBoxRef = React.useRef();
  let { listBoxProps } = useListBox(
    {
      autoFocus: state.focusStrategy || true,
      disallowEmptySelection: true,
      ...menuProps,
    },
    state,
    listBoxRef
  );

  return (
    <div>
      <div {...labelProps}>{props.label}</div>
      <button {...buttonProps} ref={ref}>
        <span {...valueProps}>
          {state.selectedItem
            ? state.selectedItem.rendered
            : 'Select an option'}
        </span>
      </button>
      {state.isOpen && (
        <ul {...listBoxProps} ref={listBoxRef}>
          {[...state.collection].map((item) => (
            <li key={item.key}>{item.rendered}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
