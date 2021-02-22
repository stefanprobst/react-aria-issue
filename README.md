# Reproduction

`autoFocus` behavior in `useSelectableCollection` will crash when `ref` is not
attached to DOM node on first render and therefore null in this useEffect:
https://github.com/adobe/react-spectrum/blob/dd52b8deffa1850ff4301c98a0db57d7bccebcdf/packages/%40react-aria/selection/src/useSelectableCollection.ts#L342

This will crash with "TypeError: element is undefined" in
=>`focusSafely`=>`focusWithoutScrolling`.

Note: the example renders fine with `defaultOpen` on the `Select`.
