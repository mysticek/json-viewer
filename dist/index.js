/// <reference types="./index.d.ts" />
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react/jsx-runtime'), require('@mui/material'), require('react'), require('zustand'), require('copy-to-clipboard')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react/jsx-runtime', '@mui/material', 'react', 'zustand', 'copy-to-clipboard'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.JsonViewer = {}, global["react/jsx-runtime"], global["@mui/material"], global.react, global.zustand, global["copy-to-clipboard"]));
})(this, (function (exports, jsxRuntime, material, react, zustand, copyToClipboard) { 'use strict';

  function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

  const lightColorspace = {
      scheme: 'Light Theme',
      author: 'mac gainor (https://github.com/mac-s-g)',
      base00: 'rgba(0, 0, 0, 0)',
      base01: 'rgb(245, 245, 245)',
      base02: 'rgb(235, 235, 235)',
      base03: '#93a1a1',
      base04: 'rgba(0, 0, 0, 0.3)',
      base05: '#586e75',
      base06: '#073642',
      base07: '#002b36',
      base08: '#d33682',
      base09: '#cb4b16',
      base0A: '#ffd500',
      base0B: '#859900',
      base0C: '#6c71c4',
      base0D: '#586e75',
      base0E: '#2aa198',
      base0F: '#268bd2'
  };
  const darkColorspace = {
      scheme: 'Dark Theme',
      author: 'Chris Kempson (http://chriskempson.com)',
      base00: '#181818',
      base01: '#282828',
      base02: '#383838',
      base03: '#585858',
      base04: '#b8b8b8',
      base05: '#d8d8d8',
      base06: '#e8e8e8',
      base07: '#f8f8f8',
      base08: '#ab4642',
      base09: '#dc9656',
      base0A: '#f7ca88',
      base0B: '#a1b56c',
      base0C: '#86c1b9',
      base0D: '#7cafc2',
      base0E: '#ba8baf',
      base0F: '#a16946'
  };

  const DefaultKeyRenderer = ()=>null;
  DefaultKeyRenderer.when = ()=>false;
  const createJsonViewerStore = (props)=>{
      return zustand.create()((set, get)=>{
          var _props_rootName, _props_indentWidth, _props_keyRenderer, _props_enableAdd, _props_enableDelete, _props_enableClipboard, _props_editable, _props_onChange, _props_onCopy, _props_onSelect, _props_onAdd, _props_onDelete, _props_defaultInspectDepth, _props_defaultInspectControl, _props_maxDisplayLength, _props_groupArraysAfterLength, _props_collapseStringsAfterLength, _props_objectSortKeys, _props_hideIndex, _props_quotesOnKeys, _props_displayDataTypes, _props_displaySize, _props_highlightUpdates, _props_displayComma;
          return {
              // provided by user
              rootName: (_props_rootName = props.rootName) !== null && _props_rootName !== void 0 ? _props_rootName : 'root',
              indentWidth: (_props_indentWidth = props.indentWidth) !== null && _props_indentWidth !== void 0 ? _props_indentWidth : 3,
              keyRenderer: (_props_keyRenderer = props.keyRenderer) !== null && _props_keyRenderer !== void 0 ? _props_keyRenderer : DefaultKeyRenderer,
              enableAdd: (_props_enableAdd = props.enableAdd) !== null && _props_enableAdd !== void 0 ? _props_enableAdd : false,
              enableDelete: (_props_enableDelete = props.enableDelete) !== null && _props_enableDelete !== void 0 ? _props_enableDelete : false,
              enableClipboard: (_props_enableClipboard = props.enableClipboard) !== null && _props_enableClipboard !== void 0 ? _props_enableClipboard : true,
              editable: (_props_editable = props.editable) !== null && _props_editable !== void 0 ? _props_editable : false,
              onChange: (_props_onChange = props.onChange) !== null && _props_onChange !== void 0 ? _props_onChange : ()=>{},
              onCopy: (_props_onCopy = props.onCopy) !== null && _props_onCopy !== void 0 ? _props_onCopy : undefined,
              onSelect: (_props_onSelect = props.onSelect) !== null && _props_onSelect !== void 0 ? _props_onSelect : undefined,
              onAdd: (_props_onAdd = props.onAdd) !== null && _props_onAdd !== void 0 ? _props_onAdd : undefined,
              onDelete: (_props_onDelete = props.onDelete) !== null && _props_onDelete !== void 0 ? _props_onDelete : undefined,
              defaultInspectDepth: (_props_defaultInspectDepth = props.defaultInspectDepth) !== null && _props_defaultInspectDepth !== void 0 ? _props_defaultInspectDepth : 5,
              defaultInspectControl: (_props_defaultInspectControl = props.defaultInspectControl) !== null && _props_defaultInspectControl !== void 0 ? _props_defaultInspectControl : undefined,
              maxDisplayLength: (_props_maxDisplayLength = props.maxDisplayLength) !== null && _props_maxDisplayLength !== void 0 ? _props_maxDisplayLength : 30,
              groupArraysAfterLength: (_props_groupArraysAfterLength = props.groupArraysAfterLength) !== null && _props_groupArraysAfterLength !== void 0 ? _props_groupArraysAfterLength : 100,
              collapseStringsAfterLength: props.collapseStringsAfterLength === false ? Number.MAX_VALUE : (_props_collapseStringsAfterLength = props.collapseStringsAfterLength) !== null && _props_collapseStringsAfterLength !== void 0 ? _props_collapseStringsAfterLength : 50,
              objectSortKeys: (_props_objectSortKeys = props.objectSortKeys) !== null && _props_objectSortKeys !== void 0 ? _props_objectSortKeys : false,
              hideIndex: (_props_hideIndex = props.hideIndex) !== null && _props_hideIndex !== void 0 ? _props_hideIndex : false,
              quotesOnKeys: (_props_quotesOnKeys = props.quotesOnKeys) !== null && _props_quotesOnKeys !== void 0 ? _props_quotesOnKeys : true,
              displayDataTypes: (_props_displayDataTypes = props.displayDataTypes) !== null && _props_displayDataTypes !== void 0 ? _props_displayDataTypes : true,
              displaySize: (_props_displaySize = props.displaySize) !== null && _props_displaySize !== void 0 ? _props_displaySize : true,
              highlightUpdates: (_props_highlightUpdates = props.highlightUpdates) !== null && _props_highlightUpdates !== void 0 ? _props_highlightUpdates : false,
              // internal state
              inspectCache: {},
              hoverPath: null,
              colorspace: lightColorspace,
              value: props.value,
              prevValue: undefined,
              displayComma: (_props_displayComma = props.displayComma) !== null && _props_displayComma !== void 0 ? _props_displayComma : true,
              getInspectCache: (path, nestedIndex)=>{
                  const target = nestedIndex !== undefined ? path.join('.') + "[".concat(nestedIndex, "]nt") : path.join('.');
                  return get().inspectCache[target];
              },
              setInspectCache: (path, action, nestedIndex)=>{
                  const target = nestedIndex !== undefined ? path.join('.') + "[".concat(nestedIndex, "]nt") : path.join('.');
                  set((state)=>({
                          inspectCache: {
                              ...state.inspectCache,
                              [target]: typeof action === 'function' ? action(state.inspectCache[target]) : action
                          }
                      }));
              },
              setHover: (path, nestedIndex)=>{
                  set({
                      hoverPath: path ? {
                          path,
                          nestedIndex
                      } : null
                  });
              }
          };
      });
  };
  // @ts-expect-error we intentionally want to pass undefined to the context
  // See https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
  const JsonViewerStoreContext = react.createContext(undefined);
  JsonViewerStoreContext.Provider;
  const useJsonViewerStore = (selector, equalityFn)=>{
      const store = react.useContext(JsonViewerStoreContext);
      return zustand.useStore(store, selector, equalityFn);
  };

  const useTextColor = ()=>{
      return useJsonViewerStore((store)=>store.colorspace.base07);
  };

  // reference: https://github.com/immerjs/immer/blob/main/src/utils/common.ts
  const objectCtorString = Object.prototype.constructor.toString();
  function isPlainObject(value) {
      if (!value || typeof value !== 'object') return false;
      const proto = Object.getPrototypeOf(value);
      if (proto === null) return true;
      const Ctor = Object.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      if (Ctor === Object) return true;
      return typeof Ctor === 'function' && Function.toString.call(Ctor) === objectCtorString;
  }
  function shouldShallowCopy(value) {
      if (!value) return false;
      return isPlainObject(value) || Array.isArray(value) || value instanceof Map || value instanceof Set;
  }
  function shallowCopy(value) {
      if (Array.isArray(value)) return Array.prototype.slice.call(value);
      if (value instanceof Set) return new Set(value);
      if (value instanceof Map) return new Map(value);
      if (typeof value === 'object' && value !== null) {
          return Object.assign({}, value);
      }
      return value;
  }
  function _applyValue(input, path, value) {
      let visitedMapping = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : new Map();
      if (typeof input !== 'object' || input === null) {
          if (path.length !== 0) {
              throw new Error('path is incorrect');
          }
          return value;
      }
      const shouldCopy = shouldShallowCopy(input);
      if (shouldCopy) {
          let copiedInput = visitedMapping.get(input);
          if (!copiedInput) {
              copiedInput = shallowCopy(input);
              visitedMapping.set(input, copiedInput);
          }
          input = copiedInput;
      }
      const [key, ...restPath] = path;
      if (key !== undefined) {
          if (key === '__proto__') {
              throw new TypeError('Modification of prototype is not allowed');
          }
          if (restPath.length > 0) {
              input[key] = _applyValue(input[key], restPath, value, visitedMapping);
          } else {
              input[key] = value;
          }
      }
      return input;
  }
  /**
   * Apply a value to a given path of an object.
   */ function applyValue(input, path, value) {
      return _applyValue(input, path, value);
  }
  /**
   * Delete a value from a given path of an object.
   */ function deleteValue(input, path, value) {
      if (typeof input !== 'object' || input === null) {
          if (path.length !== 0) {
              throw new Error('path is incorrect');
          }
          return value;
      }
      const shouldCopy = shouldShallowCopy(input);
      if (shouldCopy) input = shallowCopy(input);
      const [key, ...restPath] = path;
      if (key !== undefined) {
          if (key === '__proto__') {
              throw new TypeError('Modification of prototype is not allowed');
          }
          if (restPath.length > 0) {
              input[key] = deleteValue(input[key], restPath, value);
          } else {
              if (Array.isArray(input)) {
                  input.splice(Number(key), 1);
              } else {
                  delete input[key];
              }
          }
      }
      return input;
  }
  /**
   * @deprecated use `defineDataType` instead
   */ function createDataType(is, Component, Editor, PreComponent, PostComponent) {
      if (process.env.NODE_ENV !== 'production') {
          console.warn('createDataType is deprecated, please use `defineDataType` instead. See https://viewer.textea.io/migration/migration-v3#use-definedatatype-instead-of-createdatatype for more information.');
      }
      return {
          is,
          Component,
          Editor,
          PreComponent,
          PostComponent
      };
  }
  /**
   * Define custom data types for any data structure
   */ function defineDataType(param) {
      let { is, serialize, deserialize, Component, Editor, PreComponent, PostComponent } = param;
      return {
          is,
          serialize,
          deserialize,
          Component,
          Editor,
          PreComponent,
          PostComponent
      };
  }
  const isCycleReference = (root, path, value)=>{
      if (root === null || value === null) {
          return false;
      }
      if (typeof root !== 'object') {
          return false;
      }
      if (typeof value !== 'object') {
          return false;
      }
      if (Object.is(root, value) && path.length !== 0) {
          return '';
      }
      const currentPath = [];
      const arr = [
          ...path
      ];
      let currentRoot = root;
      while(currentRoot !== value || arr.length !== 0){
          if (typeof currentRoot !== 'object' || currentRoot === null) {
              return false;
          }
          if (Object.is(currentRoot, value)) {
              return currentPath.reduce((path, value, currentIndex)=>{
                  if (typeof value === 'number') {
                      return path + "[".concat(value, "]");
                  }
                  return path + "".concat(currentIndex === 0 ? '' : '.').concat(value);
              }, '');
          }
          const target = arr.shift();
          currentPath.push(target);
          currentRoot = currentRoot[target];
      }
      return false;
  };
  function getValueSize(value) {
      if (value === null || undefined) {
          return 0;
      } else if (Array.isArray(value)) {
          return value.length;
      } else if (value instanceof Map || value instanceof Set) {
          return value.size;
      } else if (value instanceof Date) {
          return 1;
      } else if (typeof value === 'object') {
          return Object.keys(value).length;
      } else if (typeof value === 'string') {
          return value.length;
      }
      return 1;
  }
  function segmentArray(arr, size) {
      const result = [];
      let index = 0;
      while(index < arr.length){
          result.push(arr.slice(index, index + size));
          index += size;
      }
      return result;
  }
  /**
   * A safe version of `JSON.stringify` that handles circular references and BigInts.
   *
   * *This function might be changed in the future to support more types. Use it with caution.*
   *
   * @param obj A JavaScript value, usually an object or array, to be converted.
   * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
   * @returns
   */ function safeStringify(obj, space) {
      const seenValues = [];
      function replacer(key, value) {
          // https://github.com/GoogleChromeLabs/jsbi/issues/30
          if (typeof value === 'bigint') return value.toString();
          // Map and Set are not supported by JSON.stringify
          if (value instanceof Map) {
              if ('toJSON' in value && typeof value.toJSON === 'function') return value.toJSON();
              if (value.size === 0) return {};
              if (seenValues.includes(value)) return '[Circular]';
              seenValues.push(value);
              const entries = Array.from(value.entries());
              if (entries.every((param)=>{
                  let [key] = param;
                  return typeof key === 'string' || typeof key === 'number';
              })) {
                  return Object.fromEntries(entries);
              }
              // if keys are not string or number, we can't convert to object
              // fallback to default behavior
              return {};
          }
          if (value instanceof Set) {
              if ('toJSON' in value && typeof value.toJSON === 'function') return value.toJSON();
              if (seenValues.includes(value)) return '[Circular]';
              seenValues.push(value);
              return Array.from(value.values());
          }
          // https://stackoverflow.com/a/72457899
          if (typeof value === 'object' && value !== null && Object.keys(value).length) {
              const stackSize = seenValues.length;
              if (stackSize) {
                  // clean up expired references
                  for(let n = stackSize - 1; n >= 0 && seenValues[n][key] !== value; --n){
                      seenValues.pop();
                  }
                  if (seenValues.includes(value)) return '[Circular]';
              }
              seenValues.push(value);
          }
          return value;
      }
      return JSON.stringify(obj, replacer, space);
  }
  async function copyString(value) {
      if ('clipboard' in navigator) {
          try {
              await navigator.clipboard.writeText(value);
          } catch  {
          // When navigator.clipboard throws an error, fallback to copy-to-clipboard package
          }
      }
      // fallback to copy-to-clipboard when navigator.clipboard is not available
      copyToClipboard(value);
  }

  /**
   * useClipboard hook accepts one argument options in which copied status timeout duration is defined (defaults to 2000). Hook returns object with properties:
   * - copy – function to copy value to clipboard
   * - copied – value that indicates that copy handler was called less than options.timeout ms ago
   * - reset – function to clear timeout and reset copied to false
   */ function useClipboard() {
      let { timeout = 2000 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const [copied, setCopied] = react.useState(false);
      const copyTimeout = react.useRef(null);
      const handleCopyResult = react.useCallback((value)=>{
          const current = copyTimeout.current;
          if (current) {
              window.clearTimeout(current);
          }
          copyTimeout.current = window.setTimeout(()=>setCopied(false), timeout);
          setCopied(value);
      }, [
          timeout
      ]);
      const onCopy = useJsonViewerStore((store)=>store.onCopy);
      const copy = react.useCallback(async (path, value)=>{
          if (typeof onCopy === 'function') {
              try {
                  await onCopy(path, value, copyString);
                  handleCopyResult(true);
              } catch (error) {
                  console.error("error when copy ".concat(path.length === 0 ? 'src' : "src[".concat(path.join('.')), "]"), error);
              }
          } else {
              try {
                  const valueToCopy = safeStringify(typeof value === 'function' ? value.toString() : value, '  ');
                  await copyString(valueToCopy);
                  handleCopyResult(true);
              } catch (error) {
                  console.error("error when copy ".concat(path.length === 0 ? 'src' : "src[".concat(path.join('.')), "]"), error);
              }
          }
      }, [
          handleCopyResult,
          onCopy
      ]);
      const reset = react.useCallback(()=>{
          setCopied(false);
          if (copyTimeout.current) {
              clearTimeout(copyTimeout.current);
          }
      }, []);
      return {
          copy,
          reset,
          copied
      };
  }

  function useIsCycleReference(path, value) {
      const rootValue = useJsonViewerStore((store)=>store.value);
      return react.useMemo(()=>isCycleReference(rootValue, path, value), [
          path,
          value,
          rootValue
      ]);
  }

  function useInspect(path, value, nestedIndex) {
      const depth = path.length;
      const isTrap = useIsCycleReference(path, value);
      const getInspectCache = useJsonViewerStore((store)=>store.getInspectCache);
      const setInspectCache = useJsonViewerStore((store)=>store.setInspectCache);
      const defaultInspectDepth = useJsonViewerStore((store)=>store.defaultInspectDepth);
      const defaultInspectControl = useJsonViewerStore((store)=>store.defaultInspectControl);
      react.useEffect(()=>{
          const inspect = getInspectCache(path, nestedIndex);
          if (inspect !== undefined) {
              return;
          }
          // item with nestedIndex should not be inspected
          if (nestedIndex !== undefined) {
              setInspectCache(path, false, nestedIndex);
              return;
          }
          // do not inspect when it is a cycle reference, otherwise there will have a loop
          const shouldInspect = isTrap ? false : typeof defaultInspectControl === 'function' ? defaultInspectControl(path, value) : depth < defaultInspectDepth;
          setInspectCache(path, shouldInspect);
      }, [
          defaultInspectDepth,
          defaultInspectControl,
          depth,
          getInspectCache,
          isTrap,
          nestedIndex,
          path,
          value,
          setInspectCache
      ]);
      const [inspect, set] = react.useState(()=>{
          const shouldInspect = getInspectCache(path, nestedIndex);
          if (shouldInspect !== undefined) {
              return shouldInspect;
          }
          if (nestedIndex !== undefined) {
              return false;
          }
          return isTrap ? false : typeof defaultInspectControl === 'function' ? defaultInspectControl(path, value) : depth < defaultInspectDepth;
      });
      const setInspect = react.useCallback((apply)=>{
          set((oldState)=>{
              const newState = typeof apply === 'boolean' ? apply : apply(oldState);
              setInspectCache(path, newState, nestedIndex);
              return newState;
          });
      }, [
          nestedIndex,
          path,
          setInspectCache
      ]);
      return [
          inspect,
          setInspect
      ];
  }

  const DataBox = (props)=>/*#__PURE__*/ jsxRuntime.jsx(material.Box, {
          component: "div",
          ...props,
          sx: {
              display: 'inline-block',
              ...props.sx
          }
      });

  const DataTypeLabel = (param)=>{
      let { dataType, enable = true } = param;
      if (!enable) return null;
      return /*#__PURE__*/ jsxRuntime.jsx(DataBox, {
          className: "data-type-label",
          sx: {
              mx: 0.5,
              fontSize: '0.7rem',
              opacity: 0.8,
              userSelect: 'none'
          },
          children: dataType
      });
  };

  /**
   * Enhanced version of `defineDataType` that creates a `DataType` with editor and a optional type label.
   * It will take care of the color and all the necessary props.
   *
   * *All of the built-in data types are defined with this function.*
   *
   * @param config.type The type name.
   * @param config.colorKey The color key in the colorspace. ('base00' - 'base0F')
   * @param config.displayTypeLabel Whether to display the type label.
   * @param config.Renderer The component to render the value.
   */ function defineEasyType(param) {
      let { is, serialize, deserialize, type, colorKey, displayTypeLabel = true, Renderer } = param;
      const Render = /*#__PURE__*/ react.memo(Renderer);
      const EasyType = (props)=>{
          const storeDisplayDataTypes = useJsonViewerStore((store)=>store.displayDataTypes);
          const color = useJsonViewerStore((store)=>store.colorspace[colorKey]);
          const onSelect = useJsonViewerStore((store)=>store.onSelect);
          return /*#__PURE__*/ jsxRuntime.jsxs(DataBox, {
              onClick: ()=>onSelect === null || onSelect === void 0 ? void 0 : onSelect(props.path, props.value),
              sx: {
                  color
              },
              children: [
                  displayTypeLabel && storeDisplayDataTypes && /*#__PURE__*/ jsxRuntime.jsx(DataTypeLabel, {
                      dataType: type
                  }),
                  /*#__PURE__*/ jsxRuntime.jsx(DataBox, {
                      className: "".concat(type, "-value"),
                      children: /*#__PURE__*/ jsxRuntime.jsx(Render, {
                          path: props.path,
                          inspect: props.inspect,
                          setInspect: props.setInspect,
                          value: props.value,
                          prevValue: props.prevValue
                      })
                  })
              ]
          });
      };
      EasyType.displayName = "easy-".concat(type, "-type");
      if (!serialize || !deserialize) {
          return {
              is,
              Component: EasyType
          };
      }
      const EasyTypeEditor = (param)=>{
          let { value, setValue, abortEditing, commitEditing } = param;
          const color = useJsonViewerStore((store)=>store.colorspace[colorKey]);
          const handleKeyDown = react.useCallback((event)=>{
              if (event.key === 'Enter') {
                  event.preventDefault();
                  commitEditing(value);
              }
              if (event.key === 'Escape') {
                  event.preventDefault();
                  abortEditing();
              }
          }, [
              abortEditing,
              commitEditing,
              value
          ]);
          const handleChange = react.useCallback((event)=>{
              setValue(event.target.value);
          }, [
              setValue
          ]);
          return /*#__PURE__*/ jsxRuntime.jsx(material.InputBase, {
              autoFocus: true,
              value: value,
              onChange: handleChange,
              onKeyDown: handleKeyDown,
              size: "small",
              multiline: true,
              sx: {
                  color,
                  padding: 0.5,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  borderWidth: 1,
                  fontSize: '0.8rem',
                  fontFamily: 'monospace',
                  display: 'inline-flex'
              }
          });
      };
      EasyTypeEditor.displayName = "easy-".concat(type, "-type-editor");
      return {
          is,
          serialize,
          deserialize,
          Component: EasyType,
          Editor: EasyTypeEditor
      };
  }

  const booleanType = defineEasyType({
      is: (value)=>typeof value === 'boolean',
      type: 'bool',
      colorKey: 'base0E',
      serialize: (value)=>value.toString(),
      deserialize: (value)=>{
          if (value === 'true') return true;
          if (value === 'false') return false;
          throw new Error('Invalid boolean value');
      },
      Renderer: (param)=>{
          let { value } = param;
          return /*#__PURE__*/ jsxRuntime.jsx(jsxRuntime.Fragment, {
              children: value ? 'true' : 'false'
          });
      }
  });

  const displayOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
  };
  const dateType = defineEasyType({
      is: (value)=>value instanceof Date,
      type: 'date',
      colorKey: 'base0D',
      Renderer: (param)=>{
          let { value } = param;
          return /*#__PURE__*/ jsxRuntime.jsx(jsxRuntime.Fragment, {
              children: value.toLocaleTimeString('en-us', displayOptions)
          });
      }
  });

  const functionBody = (func)=>{
      const funcString = func.toString();
      let isUsualFunction = true;
      const parenthesisPos = funcString.indexOf(')');
      const arrowPos = funcString.indexOf('=>');
      if (arrowPos !== -1 && arrowPos > parenthesisPos) {
          isUsualFunction = false;
      }
      if (isUsualFunction) {
          return funcString.substring(funcString.indexOf('{', parenthesisPos) + 1, funcString.lastIndexOf('}'));
      }
      return funcString.substring(funcString.indexOf('=>') + 2);
  };
  const functionName = (func)=>{
      const funcString = func.toString();
      const isUsualFunction = funcString.indexOf('function') !== -1;
      if (isUsualFunction) {
          return funcString.substring(8, funcString.indexOf('{')).trim();
      }
      return funcString.substring(0, funcString.indexOf('=>') + 2).trim();
  };
  const lb = '{';
  const rb = '}';
  const PreFunctionType = (props)=>{
      return /*#__PURE__*/ jsxRuntime.jsxs(material.NoSsr, {
          children: [
              /*#__PURE__*/ jsxRuntime.jsx(DataTypeLabel, {
                  dataType: "function"
              }),
              /*#__PURE__*/ jsxRuntime.jsxs(material.Box, {
                  component: "span",
                  className: "data-function-start",
                  sx: {
                      letterSpacing: 0.5
                  },
                  children: [
                      functionName(props.value),
                      ' ',
                      lb
                  ]
              })
          ]
      });
  };
  const PostFunctionType = ()=>{
      return /*#__PURE__*/ jsxRuntime.jsx(material.NoSsr, {
          children: /*#__PURE__*/ jsxRuntime.jsx(material.Box, {
              component: "span",
              className: "data-function-end",
              children: rb
          })
      });
  };
  const FunctionType = (props)=>{
      const functionColor = useJsonViewerStore((store)=>store.colorspace.base05);
      return /*#__PURE__*/ jsxRuntime.jsx(material.NoSsr, {
          children: /*#__PURE__*/ jsxRuntime.jsx(material.Box, {
              className: "data-function",
              sx: {
                  display: props.inspect ? 'block' : 'inline-block',
                  pl: props.inspect ? 2 : 0,
                  color: functionColor
              },
              children: props.inspect ? functionBody(props.value) : /*#__PURE__*/ jsxRuntime.jsx(material.Box, {
                  component: "span",
                  className: "data-function-body",
                  onClick: ()=>props.setInspect(true),
                  sx: {
                      '&:hover': {
                          cursor: 'pointer'
                      },
                      padding: 0.5
                  },
                  children: "…"
              })
          })
      });
  };
  const functionType = {
      is: (value)=>typeof value === 'function',
      Component: FunctionType,
      PreComponent: PreFunctionType,
      PostComponent: PostFunctionType
  };

  const nullType = defineEasyType({
      is: (value)=>value === null,
      type: 'null',
      colorKey: 'base08',
      displayTypeLabel: false,
      Renderer: ()=>{
          const backgroundColor = useJsonViewerStore((store)=>store.colorspace.base02);
          return /*#__PURE__*/ jsxRuntime.jsx(material.Box, {
              sx: {
                  fontSize: '0.8rem',
                  backgroundColor,
                  fontWeight: 'bold',
                  borderRadius: '3px',
                  padding: '0.5px 2px'
              },
              children: "NULL"
          });
      }
  });

  const isInt = (n)=>n % 1 === 0;
  const nanType = defineEasyType({
      is: (value)=>typeof value === 'number' && isNaN(value),
      type: 'NaN',
      colorKey: 'base08',
      displayTypeLabel: false,
      serialize: ()=>'NaN',
      // allow deserialize the value back to number
      deserialize: (value)=>parseFloat(value),
      Renderer: ()=>{
          const backgroundColor = useJsonViewerStore((store)=>store.colorspace.base02);
          return /*#__PURE__*/ jsxRuntime.jsx(material.Box, {
              sx: {
                  backgroundColor,
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  borderRadius: '3px',
                  padding: '0.5px 2px'
              },
              children: "NaN"
          });
      }
  });
  const floatType = defineEasyType({
      is: (value)=>typeof value === 'number' && !isInt(value) && !isNaN(value),
      type: 'float',
      colorKey: 'base0B',
      serialize: (value)=>value.toString(),
      deserialize: (value)=>parseFloat(value),
      Renderer: (param)=>{
          let { value } = param;
          return /*#__PURE__*/ jsxRuntime.jsx(jsxRuntime.Fragment, {
              children: value
          });
      }
  });
  const intType = defineEasyType({
      is: (value)=>typeof value === 'number' && isInt(value),
      type: 'int',
      colorKey: 'base0F',
      serialize: (value)=>value.toString(),
      // allow deserialize the value to float
      deserialize: (value)=>parseFloat(value),
      Renderer: (param)=>{
          let { value } = param;
          return /*#__PURE__*/ jsxRuntime.jsx(jsxRuntime.Fragment, {
              children: value
          });
      }
  });
  const bigIntType = defineEasyType({
      is: (value)=>typeof value === 'bigint',
      type: 'bigint',
      colorKey: 'base0F',
      serialize: (value)=>value.toString(),
      deserialize: (value)=>BigInt(value.replace(/\D/g, '')),
      Renderer: (param)=>{
          let { value } = param;
          return /*#__PURE__*/ jsxRuntime.jsx(jsxRuntime.Fragment, {
              children: "".concat(value, "n")
          });
      }
  });

  const BaseIcon = (param)=>{
      let { d, ...props } = param;
      return /*#__PURE__*/ jsxRuntime.jsx(material.SvgIcon, {
          ...props,
          children: /*#__PURE__*/ jsxRuntime.jsx("path", {
              d: d
          })
      });
  };
  const AddBox = 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z';
  const Check = 'M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z';
  const ChevronRight = 'M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z';
  const CircularArrows = 'M 12 2 C 10.615 1.998 9.214625 2.2867656 7.890625 2.8847656 L 8.9003906 4.6328125 C 9.9043906 4.2098125 10.957 3.998 12 4 C 15.080783 4 17.738521 5.7633175 19.074219 8.3222656 L 17.125 9 L 21.25 11 L 22.875 7 L 20.998047 7.6523438 C 19.377701 4.3110398 15.95585 2 12 2 z M 6.5097656 4.4882812 L 2.2324219 5.0820312 L 3.734375 6.3808594 C 1.6515335 9.4550558 1.3615962 13.574578 3.3398438 17 C 4.0308437 18.201 4.9801562 19.268234 6.1601562 20.115234 L 7.1699219 18.367188 C 6.3019219 17.710187 5.5922656 16.904 5.0722656 16 C 3.5320014 13.332354 3.729203 10.148679 5.2773438 7.7128906 L 6.8398438 9.0625 L 6.5097656 4.4882812 z M 19.929688 13 C 19.794687 14.08 19.450734 15.098 18.927734 16 C 17.386985 18.668487 14.531361 20.090637 11.646484 19.966797 L 12.035156 17.9375 L 8.2402344 20.511719 L 10.892578 23.917969 L 11.265625 21.966797 C 14.968963 22.233766 18.681899 20.426323 20.660156 17 C 21.355156 15.801 21.805219 14.445 21.949219 13 L 19.929688 13 z';
  const Close = 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z';
  const ContentCopy = 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z';
  const Edit = 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z';
  const ExpandMore = 'M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z';
  const Delete = 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z';
  const AddBoxIcon = (props)=>{
      return /*#__PURE__*/ jsxRuntime.jsx(BaseIcon, {
          d: AddBox,
          ...props
      });
  };
  const CheckIcon = (props)=>{
      return /*#__PURE__*/ jsxRuntime.jsx(BaseIcon, {
          d: Check,
          ...props
      });
  };
  const ChevronRightIcon = (props)=>{
      return /*#__PURE__*/ jsxRuntime.jsx(BaseIcon, {
          d: ChevronRight,
          ...props
      });
  };
  const CircularArrowsIcon = (props)=>{
      return /*#__PURE__*/ jsxRuntime.jsx(BaseIcon, {
          d: CircularArrows,
          ...props
      });
  };
  const CloseIcon = (props)=>{
      return /*#__PURE__*/ jsxRuntime.jsx(BaseIcon, {
          d: Close,
          ...props
      });
  };
  const ContentCopyIcon = (props)=>{
      return /*#__PURE__*/ jsxRuntime.jsx(BaseIcon, {
          d: ContentCopy,
          ...props
      });
  };
  const EditIcon = (props)=>{
      return /*#__PURE__*/ jsxRuntime.jsx(BaseIcon, {
          d: Edit,
          ...props
      });
  };
  const ExpandMoreIcon = (props)=>{
      return /*#__PURE__*/ jsxRuntime.jsx(BaseIcon, {
          d: ExpandMore,
          ...props
      });
  };
  const DeleteIcon = (props)=>{
      return /*#__PURE__*/ jsxRuntime.jsx(BaseIcon, {
          d: Delete,
          ...props
      });
  };

  const objectLb = '{';
  const arrayLb = '[';
  const objectRb = '}';
  const arrayRb = ']';
  function inspectMetadata(value) {
      const length = getValueSize(value);
      let name = '';
      if (value instanceof Map || value instanceof Set) {
          name = value[Symbol.toStringTag];
      }
      if (Object.prototype.hasOwnProperty.call(value, Symbol.toStringTag)) {
          name = value[Symbol.toStringTag];
      }
      return "".concat(length, " Items").concat(name ? " (".concat(name, ")") : '');
  }
  const PreObjectType = (props)=>{
      const metadataColor = useJsonViewerStore((store)=>store.colorspace.base04);
      const textColor = useTextColor();
      const isArrayLike = react.useMemo(()=>Array.isArray(props.value) || props.value instanceof Set, [
          props.value
      ]);
      const isEmptyValue = react.useMemo(()=>getValueSize(props.value) === 0, [
          props.value
      ]);
      const sizeOfValue = react.useMemo(()=>inspectMetadata(props.value), [
          props.value
      ]);
      const displaySize = useJsonViewerStore((store)=>store.displaySize);
      const shouldDisplaySize = react.useMemo(()=>typeof displaySize === 'function' ? displaySize(props.path, props.value) : displaySize, [
          displaySize,
          props.path,
          props.value
      ]);
      const isTrap = useIsCycleReference(props.path, props.value);
      return /*#__PURE__*/ jsxRuntime.jsxs(material.Box, {
          component: "span",
          className: "data-object-start",
          sx: {
              letterSpacing: 0.5
          },
          children: [
              isArrayLike ? arrayLb : objectLb,
              shouldDisplaySize && props.inspect && !isEmptyValue && /*#__PURE__*/ jsxRuntime.jsx(material.Box, {
                  component: "span",
                  sx: {
                      pl: 0.5,
                      fontStyle: 'italic',
                      color: metadataColor,
                      userSelect: 'none'
                  },
                  children: sizeOfValue
              }),
              isTrap && !props.inspect && /*#__PURE__*/ jsxRuntime.jsxs(jsxRuntime.Fragment, {
                  children: [
                      /*#__PURE__*/ jsxRuntime.jsx(CircularArrowsIcon, {
                          sx: {
                              fontSize: 12,
                              color: textColor,
                              mx: 0.5
                          }
                      }),
                      /*#__PURE__*/ jsxRuntime.jsx(DataBox, {
                          sx: {
                              cursor: 'pointer',
                              userSelect: 'none'
                          },
                          children: isTrap
                      })
                  ]
              })
          ]
      });
  };
  const PostObjectType = (props)=>{
      const metadataColor = useJsonViewerStore((store)=>store.colorspace.base04);
      const textColor = useTextColor();
      const isArrayLike = react.useMemo(()=>Array.isArray(props.value) || props.value instanceof Set, [
          props.value
      ]);
      const isEmptyValue = react.useMemo(()=>getValueSize(props.value) === 0, [
          props.value
      ]);
      const sizeOfValue = react.useMemo(()=>inspectMetadata(props.value), [
          props.value
      ]);
      const displaySize = useJsonViewerStore((store)=>store.displaySize);
      const shouldDisplaySize = react.useMemo(()=>typeof displaySize === 'function' ? displaySize(props.path, props.value) : displaySize, [
          displaySize,
          props.path,
          props.value
      ]);
      return /*#__PURE__*/ jsxRuntime.jsxs(material.Box, {
          component: "span",
          className: "data-object-end",
          sx: {
              lineHeight: 1.5,
              color: textColor,
              letterSpacing: 0.5,
              opacity: 0.8
          },
          children: [
              isArrayLike ? arrayRb : objectRb,
              shouldDisplaySize && (isEmptyValue || !props.inspect) ? /*#__PURE__*/ jsxRuntime.jsx(material.Box, {
                  component: "span",
                  sx: {
                      pl: 0.5,
                      fontStyle: 'italic',
                      color: metadataColor,
                      userSelect: 'none'
                  },
                  children: sizeOfValue
              }) : null
          ]
      });
  };
  function getIterator(value) {
      return typeof (value === null || value === void 0 ? void 0 : value[Symbol.iterator]) === 'function';
  }
  const ObjectType = (props)=>{
      const keyColor = useTextColor();
      const borderColor = useJsonViewerStore((store)=>store.colorspace.base02);
      const groupArraysAfterLength = useJsonViewerStore((store)=>store.groupArraysAfterLength);
      const isTrap = useIsCycleReference(props.path, props.value);
      const [displayLength, setDisplayLength] = react.useState(useJsonViewerStore((store)=>store.maxDisplayLength));
      const objectSortKeys = useJsonViewerStore((store)=>store.objectSortKeys);
      const elements = react.useMemo(()=>{
          if (!props.inspect) {
              return null;
          }
          const value = props.value;
          const iterator = getIterator(value);
          // Array also has iterator, we skip it and treat it as an array as normal.
          if (iterator && !Array.isArray(value)) {
              const elements = [];
              if (value instanceof Map) {
                  const lastIndex = value.size - 1;
                  let index = 0;
                  value.forEach((value, k)=>{
                      // fixme: key might be a object, array, or any value for the `Map<any, any>`
                      const key = k.toString();
                      const path = [
                          ...props.path,
                          key
                      ];
                      elements.push(/*#__PURE__*/ jsxRuntime.jsx(DataKeyPair, {
                          last: index === lastIndex,
                          path: path,
                          value: value,
                          prevValue: props.prevValue instanceof Map ? props.prevValue.get(k) : undefined,
                          editable: false
                      }, key));
                      index++;
                  });
              } else {
                  // iterate with iterator func
                  const iterator = value[Symbol.iterator]();
                  let result = iterator.next();
                  let count = 0;
                  while(true){
                      const nextResult = iterator.next();
                      var _nextResult_done;
                      elements.push(/*#__PURE__*/ jsxRuntime.jsx(DataKeyPair, {
                          path: [
                              ...props.path,
                              "iterator:".concat(count)
                          ],
                          value: result.value,
                          nestedIndex: count,
                          editable: false,
                          last: (_nextResult_done = nextResult.done) !== null && _nextResult_done !== void 0 ? _nextResult_done : false
                      }, count));
                      count++;
                      result = nextResult;
                  }
              }
              return elements;
          }
          if (Array.isArray(value)) {
              const lastIndex = value.length - 1;
              // unknown[]
              if (value.length <= groupArraysAfterLength) {
                  const elements = value.slice(0, displayLength).map((_value, _index)=>{
                      const index = props.nestedIndex ? props.nestedIndex * groupArraysAfterLength + _index : _index;
                      const path = [
                          ...props.path,
                          index
                      ];
                      return /*#__PURE__*/ jsxRuntime.jsx(DataKeyPair, {
                          path: path,
                          value: _value,
                          prevValue: Array.isArray(props.prevValue) ? props.prevValue[index] : undefined,
                          last: _index === lastIndex
                      }, index);
                  });
                  if (value.length > displayLength) {
                      const rest = value.length - displayLength;
                      elements.push(/*#__PURE__*/ jsxRuntime.jsxs(DataBox, {
                          sx: {
                              cursor: 'pointer',
                              lineHeight: 1.5,
                              color: '#5E7297',
                              letterSpacing: 0.5,
                              opacity: 0.8,
                              userSelect: 'none'
                          },
                          onClick: ()=>setDisplayLength(()=>value.length),
                          children: [
                              "hidden ",
                              rest,
                              " items…"
                          ]
                      }, "last"));
                  }
                  return elements;
              }
              const elements = segmentArray(value, groupArraysAfterLength);
              const prevElements = Array.isArray(props.prevValue) ? segmentArray(props.prevValue, groupArraysAfterLength) : undefined;
              const elementsLastIndex = elements.length - 1;
              return elements.map((list, index)=>{
                  return /*#__PURE__*/ jsxRuntime.jsx(DataKeyPair, {
                      path: props.path,
                      value: list,
                      nestedIndex: index,
                      prevValue: prevElements === null || prevElements === void 0 ? void 0 : prevElements[index],
                      last: index === elementsLastIndex
                  }, index);
              });
          }
          // object
          let entries = Object.entries(value);
          if (objectSortKeys) {
              entries = objectSortKeys === true ? entries.sort((param, param1)=>{
                  let [a] = param, [b] = param1;
                  return a.localeCompare(b);
              }) : entries.sort((param, param1)=>{
                  let [a] = param, [b] = param1;
                  return objectSortKeys(a, b);
              });
          }
          const lastIndex = entries.length - 1;
          const elements = entries.slice(0, displayLength).map((param, index)=>{
              let [key, value] = param;
              var _props_prevValue;
              const path = [
                  ...props.path,
                  key
              ];
              return /*#__PURE__*/ jsxRuntime.jsx(DataKeyPair, {
                  path: path,
                  value: value,
                  prevValue: (_props_prevValue = props.prevValue) === null || _props_prevValue === void 0 ? void 0 : _props_prevValue[key],
                  last: index === lastIndex
              }, key);
          });
          if (entries.length > displayLength) {
              const rest = entries.length - displayLength;
              elements.push(/*#__PURE__*/ jsxRuntime.jsxs(DataBox, {
                  sx: {
                      cursor: 'pointer',
                      lineHeight: 1.5,
                      color: '#5E7297',
                      letterSpacing: 0.5,
                      opacity: 0.8,
                      userSelect: 'none'
                  },
                  onClick: ()=>setDisplayLength((length)=>length + rest),
                  children: [
                      "hidden ",
                      rest,
                      " items…"
                  ]
              }, "last"));
          }
          return elements;
      }, [
          props.inspect,
          props.value,
          props.prevValue,
          props.path,
          props.nestedIndex,
          groupArraysAfterLength,
          displayLength,
          objectSortKeys
      ]);
      const marginLeft = props.inspect ? 0.6 : 0;
      const width = useJsonViewerStore((store)=>store.indentWidth);
      const indentWidth = props.inspect ? width - marginLeft : width;
      const isEmptyValue = react.useMemo(()=>getValueSize(props.value) === 0, [
          props.value
      ]);
      if (isEmptyValue) {
          return null;
      }
      return /*#__PURE__*/ jsxRuntime.jsx(material.Box, {
          className: "data-object",
          sx: {
              display: props.inspect ? 'block' : 'inline-block',
              pl: props.inspect ? indentWidth - 0.6 : 0,
              marginLeft,
              color: keyColor,
              borderLeft: props.inspect ? "1px solid ".concat(borderColor) : 'none'
          },
          children: props.inspect ? elements : !isTrap && /*#__PURE__*/ jsxRuntime.jsx(material.Box, {
              component: "span",
              className: "data-object-body",
              onClick: ()=>props.setInspect(true),
              sx: {
                  '&:hover': {
                      cursor: 'pointer'
                  },
                  padding: 0.5,
                  userSelect: 'none'
              },
              children: "…"
          })
      });
  };
  const objectType = {
      is: (value)=>typeof value === 'object',
      Component: ObjectType,
      PreComponent: PreObjectType,
      PostComponent: PostObjectType
  };

  const stringType = defineEasyType({
      is: (value)=>typeof value === 'string',
      type: 'string',
      colorKey: 'base09',
      serialize: (value)=>value,
      deserialize: (value)=>value,
      Renderer: (props)=>{
          const [showRest, setShowRest] = react.useState(false);
          const collapseStringsAfterLength = useJsonViewerStore((store)=>store.collapseStringsAfterLength);
          const value = showRest ? props.value : props.value.slice(0, collapseStringsAfterLength);
          const hasRest = props.value.length > collapseStringsAfterLength;
          return /*#__PURE__*/ jsxRuntime.jsxs(material.Box, {
              component: "span",
              sx: {
                  overflowWrap: 'anywhere',
                  cursor: hasRest ? 'pointer' : 'inherit'
              },
              onClick: ()=>{
                  var _window_getSelection;
                  if (((_window_getSelection = window.getSelection()) === null || _window_getSelection === void 0 ? void 0 : _window_getSelection.type) === 'Range') {
                      return;
                  }
                  if (hasRest) {
                      setShowRest((value)=>!value);
                  }
              },
              children: [
                  '"',
                  value,
                  hasRest && !showRest && /*#__PURE__*/ jsxRuntime.jsx(material.Box, {
                      component: "span",
                      sx: {
                          padding: 0.5
                      },
                      children: "…"
                  }),
                  '"'
              ]
          });
      }
  });

  const undefinedType = defineEasyType({
      is: (value)=>value === undefined,
      type: 'undefined',
      colorKey: 'base05',
      displayTypeLabel: false,
      Renderer: ()=>{
          const backgroundColor = useJsonViewerStore((store)=>store.colorspace.base02);
          return /*#__PURE__*/ jsxRuntime.jsx(material.Box, {
              sx: {
                  fontSize: '0.7rem',
                  backgroundColor,
                  borderRadius: '3px',
                  padding: '0.5px 2px'
              },
              children: "undefined"
          });
      }
  });

  function memorizeDataType(dataType) {
      function compare(prevProps, nextProps) {
          var _prevProps_path, _nextProps_path;
          return Object.is(prevProps.value, nextProps.value) && prevProps.inspect && nextProps.inspect && ((_prevProps_path = prevProps.path) === null || _prevProps_path === void 0 ? void 0 : _prevProps_path.join('.')) === ((_nextProps_path = nextProps.path) === null || _nextProps_path === void 0 ? void 0 : _nextProps_path.join('.'));
      }
      dataType.Component = /*#__PURE__*/ react.memo(dataType.Component, compare);
      if (dataType.Editor) {
          dataType.Editor = /*#__PURE__*/ react.memo(dataType.Editor, function compare(prevProps, nextProps) {
              return Object.is(prevProps.value, nextProps.value);
          });
      }
      if (dataType.PreComponent) {
          dataType.PreComponent = /*#__PURE__*/ react.memo(dataType.PreComponent, compare);
      }
      if (dataType.PostComponent) {
          dataType.PostComponent = /*#__PURE__*/ react.memo(dataType.PostComponent, compare);
      }
      return dataType;
  }
  const predefinedTypes = [
      memorizeDataType(booleanType),
      memorizeDataType(dateType),
      memorizeDataType(nullType),
      memorizeDataType(undefinedType),
      memorizeDataType(stringType),
      memorizeDataType(functionType),
      memorizeDataType(nanType),
      memorizeDataType(intType),
      memorizeDataType(floatType),
      memorizeDataType(bigIntType)
  ];
  const createTypeRegistryStore = ()=>{
      return zustand.createStore()((set)=>({
              registry: predefinedTypes,
              registerTypes: (setState)=>{
                  set((state)=>({
                          registry: typeof setState === 'function' ? setState(state.registry) : setState
                      }));
              }
          }));
  };
  // @ts-expect-error we intentionally want to pass undefined to the context
  // See https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
  const TypeRegistryStoreContext = /*#__PURE__*/ react.createContext(undefined);
  TypeRegistryStoreContext.Provider;
  const useTypeRegistryStore = (selector, equalityFn)=>{
      const store = react.useContext(TypeRegistryStoreContext);
      return zustand.useStore(store, selector, equalityFn);
  };
  function matchTypeComponents(value, path, registry) {
      let potential;
      for (const T of registry){
          if (T.is(value, path)) {
              potential = T;
          }
      }
      if (potential === undefined) {
          if (typeof value === 'object') {
              return objectType;
          }
          throw new Error("No type matched for value: ".concat(value));
      }
      return potential;
  }
  function useTypeComponents(value, path) {
      const registry = useTypeRegistryStore((store)=>store.registry);
      return react.useMemo(()=>matchTypeComponents(value, path, registry), [
          value,
          path,
          registry
      ]);
  }

  const IconBox = (props)=>/*#__PURE__*/ jsxRuntime.jsx(material.Box, {
          component: "span",
          ...props,
          sx: {
              cursor: 'pointer',
              paddingLeft: '0.7rem',
              ...props.sx
          }
      });
  const DataKeyPair = (props)=>{
      const { value, prevValue, path, nestedIndex, last } = props;
      const { Component, PreComponent, PostComponent, Editor, serialize, deserialize } = useTypeComponents(value, path);
      var _props_editable;
      const propsEditable = (_props_editable = props.editable) !== null && _props_editable !== void 0 ? _props_editable : undefined;
      const storeEditable = useJsonViewerStore((store)=>store.editable);
      const editable = react.useMemo(()=>{
          if (storeEditable === false) {
              return false;
          }
          if (propsEditable === false) {
              // props.editable is false which means we cannot provide the suitable way to edit it
              return false;
          }
          if (typeof storeEditable === 'function') {
              return !!storeEditable(path, value);
          }
          return storeEditable;
      }, [
          path,
          propsEditable,
          storeEditable,
          value
      ]);
      const [tempValue, setTempValue] = react.useState('');
      const depth = path.length;
      const key = path[depth - 1];
      const hoverPath = useJsonViewerStore((store)=>store.hoverPath);
      const isHover = react.useMemo(()=>{
          return hoverPath && path.every((value, index)=>value === hoverPath.path[index] && nestedIndex === hoverPath.nestedIndex);
      }, [
          hoverPath,
          path,
          nestedIndex
      ]);
      const setHover = useJsonViewerStore((store)=>store.setHover);
      const root = useJsonViewerStore((store)=>store.value);
      const [inspect, setInspect] = useInspect(path, value, nestedIndex);
      const [editing, setEditing] = react.useState(false);
      const onChange = useJsonViewerStore((store)=>store.onChange);
      const keyColor = useTextColor();
      const numberKeyColor = useJsonViewerStore((store)=>store.colorspace.base0C);
      const highlightColor = useJsonViewerStore((store)=>store.colorspace.base0A);
      const displayComma = useJsonViewerStore((store)=>store.displayComma);
      const quotesOnKeys = useJsonViewerStore((store)=>store.quotesOnKeys);
      const hideIndex = useJsonViewerStore((store)=>store.hideIndex);
      const rootName = useJsonViewerStore((store)=>store.rootName);
      const isRoot = root === value;
      const isNumberKey = Number.isInteger(Number(key));
      const hideColon = isNumberKey && hideIndex;
      const storeEnableAdd = useJsonViewerStore((store)=>store.enableAdd);
      const onAdd = useJsonViewerStore((store)=>store.onAdd);
      const enableAdd = react.useMemo(()=>{
          if (!onAdd || nestedIndex !== undefined) return false;
          if (storeEnableAdd === false) {
              return false;
          }
          if (propsEditable === false) {
              // props.editable is false which means we cannot provide the suitable way to edit it
              return false;
          }
          if (typeof storeEnableAdd === 'function') {
              return !!storeEnableAdd(path, value);
          }
          if (Array.isArray(value) || isPlainObject(value)) {
              return true;
          }
          return false;
      }, [
          onAdd,
          nestedIndex,
          path,
          storeEnableAdd,
          propsEditable,
          value
      ]);
      const storeEnableDelete = useJsonViewerStore((store)=>store.enableDelete);
      const onDelete = useJsonViewerStore((store)=>store.onDelete);
      const enableDelete = react.useMemo(()=>{
          if (!onDelete || nestedIndex !== undefined) return false;
          if (isRoot) {
              // don't allow delete root
              return false;
          }
          if (storeEnableDelete === false) {
              return false;
          }
          if (propsEditable === false) {
              // props.editable is false which means we cannot provide the suitable way to edit it
              return false;
          }
          if (typeof storeEnableDelete === 'function') {
              return !!storeEnableDelete(path, value);
          }
          return storeEnableDelete;
      }, [
          onDelete,
          nestedIndex,
          isRoot,
          path,
          storeEnableDelete,
          propsEditable,
          value
      ]);
      const enableClipboard = useJsonViewerStore((store)=>store.enableClipboard);
      const { copy, copied } = useClipboard();
      const highlightUpdates = useJsonViewerStore((store)=>store.highlightUpdates);
      const isHighlight = react.useMemo(()=>{
          if (!highlightUpdates || prevValue === undefined) return false;
          // highlight if value type changed
          if (typeof value !== typeof prevValue) {
              return true;
          }
          if (typeof value === 'number') {
              // notice: NaN !== NaN
              if (isNaN(value) && isNaN(prevValue)) return false;
              return value !== prevValue;
          }
          // highlight if isArray changed
          if (Array.isArray(value) !== Array.isArray(prevValue)) {
              return true;
          }
          // not highlight object/function
          // deep compare they will be slow
          if (typeof value === 'object' || typeof value === 'function') {
              return false;
          }
          // highlight if not equal
          if (value !== prevValue) {
              return true;
          }
          return false;
      }, [
          highlightUpdates,
          prevValue,
          value
      ]);
      const highlightContainer = react.useRef();
      react.useEffect(()=>{
          if (highlightContainer.current && isHighlight && 'animate' in highlightContainer.current) {
              highlightContainer.current.animate([
                  {
                      backgroundColor: highlightColor
                  },
                  {
                      backgroundColor: ''
                  }
              ], {
                  duration: 1000,
                  easing: 'ease-in'
              });
          }
      }, [
          highlightColor,
          isHighlight,
          prevValue,
          value
      ]);
      const startEditing = react.useCallback((event)=>{
          event.preventDefault();
          if (serialize) setTempValue(serialize(value));
          setEditing(true);
      }, [
          serialize,
          value
      ]);
      const abortEditing = react.useCallback(()=>{
          setEditing(false);
          setTempValue('');
      }, [
          setEditing,
          setTempValue
      ]);
      const commitEditing = react.useCallback((newValue)=>{
          setEditing(false);
          if (!deserialize) return;
          try {
              onChange(path, value, deserialize(newValue));
          } catch (e) {
          // do nothing when deserialize failed
          }
      }, [
          setEditing,
          deserialize,
          onChange,
          path,
          value
      ]);
      const actionIcons = react.useMemo(()=>{
          if (editing) {
              return /*#__PURE__*/ jsxRuntime.jsxs(jsxRuntime.Fragment, {
                  children: [
                      /*#__PURE__*/ jsxRuntime.jsx(IconBox, {
                          children: /*#__PURE__*/ jsxRuntime.jsx(CloseIcon, {
                              sx: {
                                  fontSize: '.8rem'
                              },
                              onClick: abortEditing
                          })
                      }),
                      /*#__PURE__*/ jsxRuntime.jsx(IconBox, {
                          children: /*#__PURE__*/ jsxRuntime.jsx(CheckIcon, {
                              sx: {
                                  fontSize: '.8rem'
                              },
                              onClick: ()=>commitEditing(tempValue)
                          })
                      })
                  ]
              });
          }
          return /*#__PURE__*/ jsxRuntime.jsxs(jsxRuntime.Fragment, {
              children: [
                  enableClipboard && /*#__PURE__*/ jsxRuntime.jsx(IconBox, {
                      onClick: (event)=>{
                          event.preventDefault();
                          try {
                              copy(path, value, copyString);
                          } catch (e) {
                              // in some case, this will throw error
                              // fixme: `useAlert` hook
                              console.error(e);
                          }
                      },
                      children: copied ? /*#__PURE__*/ jsxRuntime.jsx(CheckIcon, {
                          sx: {
                              fontSize: '.8rem'
                          }
                      }) : /*#__PURE__*/ jsxRuntime.jsx(ContentCopyIcon, {
                          sx: {
                              fontSize: '.8rem'
                          }
                      })
                  }),
                  Editor && editable && serialize && deserialize && /*#__PURE__*/ jsxRuntime.jsx(IconBox, {
                      onClick: startEditing,
                      children: /*#__PURE__*/ jsxRuntime.jsx(EditIcon, {
                          sx: {
                              fontSize: '.8rem'
                          }
                      })
                  }),
                  enableAdd && /*#__PURE__*/ jsxRuntime.jsx(IconBox, {
                      onClick: (event)=>{
                          event.preventDefault();
                          onAdd === null || onAdd === void 0 ? void 0 : onAdd(path);
                      },
                      children: /*#__PURE__*/ jsxRuntime.jsx(AddBoxIcon, {
                          sx: {
                              fontSize: '.8rem'
                          }
                      })
                  }),
                  enableDelete && /*#__PURE__*/ jsxRuntime.jsx(IconBox, {
                      onClick: (event)=>{
                          event.preventDefault();
                          onDelete === null || onDelete === void 0 ? void 0 : onDelete(path, value);
                      },
                      children: /*#__PURE__*/ jsxRuntime.jsx(DeleteIcon, {
                          sx: {
                              fontSize: '.9rem'
                          }
                      })
                  })
              ]
          });
      }, [
          Editor,
          serialize,
          deserialize,
          copied,
          copy,
          editable,
          editing,
          enableClipboard,
          enableAdd,
          enableDelete,
          tempValue,
          path,
          value,
          onAdd,
          onDelete,
          startEditing,
          abortEditing,
          commitEditing
      ]);
      const isEmptyValue = react.useMemo(()=>getValueSize(value) === 0, [
          value
      ]);
      const expandable = !isEmptyValue && !!(PreComponent && PostComponent);
      const KeyRenderer = useJsonViewerStore((store)=>store.keyRenderer);
      const downstreamProps = react.useMemo(()=>({
              path,
              inspect,
              setInspect,
              value,
              prevValue,
              nestedIndex
          }), [
          inspect,
          path,
          setInspect,
          value,
          prevValue,
          nestedIndex
      ]);
      return /*#__PURE__*/ jsxRuntime.jsxs(material.Box, {
          className: "data-key-pair",
          "data-testid": 'data-key-pair' + path.join('.'),
          sx: {
              userSelect: 'text'
          },
          onMouseEnter: react.useCallback(()=>setHover(path, nestedIndex), [
              setHover,
              path,
              nestedIndex
          ]),
          children: [
              /*#__PURE__*/ jsxRuntime.jsxs(DataBox, {
                  component: "span",
                  className: "data-key",
                  sx: {
                      lineHeight: 1.5,
                      color: keyColor,
                      letterSpacing: 0.5,
                      opacity: 0.8
                  },
                  onClick: react.useCallback((event)=>{
                      if (event.isDefaultPrevented()) {
                          return;
                      }
                      if (!isEmptyValue) {
                          setInspect((state)=>!state);
                      }
                  }, [
                      isEmptyValue,
                      setInspect
                  ]),
                  children: [
                      expandable ? inspect ? /*#__PURE__*/ jsxRuntime.jsx(ExpandMoreIcon, {
                          sx: {
                              fontSize: '.8rem',
                              '&:hover': {
                                  cursor: 'pointer'
                              },
                              color: '#5E7297'
                          }
                      }) : /*#__PURE__*/ jsxRuntime.jsx(ChevronRightIcon, {
                          sx: {
                              fontSize: '.8rem',
                              '&:hover': {
                                  cursor: 'pointer'
                              },
                              color: '#5E7297'
                          }
                      }) : null,
                      /*#__PURE__*/ jsxRuntime.jsx(material.Box, {
                          ref: highlightContainer,
                          component: "span",
                          children: isRoot && depth === 0 ? rootName !== false ? quotesOnKeys ? /*#__PURE__*/ jsxRuntime.jsxs(jsxRuntime.Fragment, {
                              children: [
                                  '"',
                                  rootName,
                                  '"'
                              ]
                          }) : /*#__PURE__*/ jsxRuntime.jsx(jsxRuntime.Fragment, {
                              children: rootName
                          }) : null : KeyRenderer.when(downstreamProps) ? /*#__PURE__*/ jsxRuntime.jsx(KeyRenderer, {
                              ...downstreamProps
                          }) : nestedIndex === undefined && (isNumberKey ? hideColon ? null : /*#__PURE__*/ jsxRuntime.jsx(material.Box, {
                              component: "span",
                              style: {
                                  color: numberKeyColor,
                                  userSelect: isNumberKey ? 'none' : 'auto'
                              },
                              children: key
                          }) : quotesOnKeys ? /*#__PURE__*/ jsxRuntime.jsxs(jsxRuntime.Fragment, {
                              children: [
                                  '"',
                                  key,
                                  '"'
                              ]
                          }) : /*#__PURE__*/ jsxRuntime.jsx(jsxRuntime.Fragment, {
                              children: " "
                          }))
                      }),
                      isRoot ? rootName !== false && /*#__PURE__*/ jsxRuntime.jsx(DataBox, {
                          className: "data-key-colon",
                          sx: {
                              mr: 0.5
                          },
                          children: ":"
                      }) : nestedIndex === undefined && /*#__PURE__*/ jsxRuntime.jsx(DataBox, {
                          sx: {
                              mr: 0.5,
                              '.data-key-key:empty + &': {
                                  display: 'none'
                              },
                              userSelect: isNumberKey ? 'none' : 'auto'
                          },
                          children: hideColon ? '' : ':'
                      }),
                      PreComponent && /*#__PURE__*/ jsxRuntime.jsx(PreComponent, {
                          ...downstreamProps
                      }),
                      isHover && expandable && inspect && actionIcons
                  ]
              }),
              editing && editable ? Editor && /*#__PURE__*/ jsxRuntime.jsx(Editor, {
                  value: tempValue,
                  setValue: setTempValue,
                  abortEditing: abortEditing,
                  commitEditing: commitEditing
              }) : Component ? /*#__PURE__*/ jsxRuntime.jsx(jsxRuntime.Fragment, {
                  children: /*#__PURE__*/ jsxRuntime.jsx(Component, {
                      ...downstreamProps
                  })
              }) : /*#__PURE__*/ jsxRuntime.jsx(material.Box, {
                  component: "span",
                  className: "data-value-fallback",
                  children: "fallback: ".concat(value)
              }),
              PostComponent && /*#__PURE__*/ jsxRuntime.jsx(PostComponent, {
                  ...downstreamProps
              }),
              !last && displayComma && /*#__PURE__*/ jsxRuntime.jsx(DataBox, {
                  children: ","
              }),
              isHover && expandable && !inspect && actionIcons,
              isHover && !expandable && actionIcons,
              !isHover && editing && actionIcons
          ]
      });
  };

  const query = '(prefers-color-scheme: dark)';
  function useThemeDetector() {
      const [isDark, setIsDark] = react.useState(false);
      react.useEffect(()=>{
          const listener = (e)=>setIsDark(e.matches);
          setIsDark(window.matchMedia(query).matches);
          const queryMedia = window.matchMedia(query);
          queryMedia.addEventListener('change', listener);
          return ()=>queryMedia.removeEventListener('change', listener);
      }, []);
      return isDark;
  }

  /**
   * @internal
   */ function useSetIfNotUndefinedEffect(key, value) {
      const { setState } = react.useContext(JsonViewerStoreContext);
      react.useEffect(()=>{
          if (value !== undefined) {
              setState({
                  [key]: value
              });
          }
      }, [
          key,
          value,
          setState
      ]);
  }
  /**
   * @internal
   */ const JsonViewerInner = (props)=>{
      const { setState } = react.useContext(JsonViewerStoreContext);
      react.useEffect(()=>{
          setState((state)=>({
                  prevValue: state.value,
                  value: props.value
              }));
      }, [
          props.value,
          setState
      ]);
      useSetIfNotUndefinedEffect('rootName', props.rootName);
      useSetIfNotUndefinedEffect('indentWidth', props.indentWidth);
      useSetIfNotUndefinedEffect('keyRenderer', props.keyRenderer);
      useSetIfNotUndefinedEffect('enableAdd', props.enableAdd);
      useSetIfNotUndefinedEffect('enableDelete', props.enableDelete);
      useSetIfNotUndefinedEffect('enableClipboard', props.enableClipboard);
      useSetIfNotUndefinedEffect('editable', props.editable);
      useSetIfNotUndefinedEffect('onChange', props.onChange);
      useSetIfNotUndefinedEffect('onCopy', props.onCopy);
      useSetIfNotUndefinedEffect('onSelect', props.onSelect);
      useSetIfNotUndefinedEffect('onAdd', props.onAdd);
      useSetIfNotUndefinedEffect('onDelete', props.onDelete);
      useSetIfNotUndefinedEffect('maxDisplayLength', props.maxDisplayLength);
      useSetIfNotUndefinedEffect('groupArraysAfterLength', props.groupArraysAfterLength);
      useSetIfNotUndefinedEffect('displayDataTypes', props.displayDataTypes);
      useSetIfNotUndefinedEffect('quotesOnKeys', props.quotesOnKeys);
      useSetIfNotUndefinedEffect('displaySize', props.displaySize);
      useSetIfNotUndefinedEffect('highlightUpdates', props.highlightUpdates);
      react.useEffect(()=>{
          if (props.theme === 'light') {
              setState({
                  colorspace: lightColorspace
              });
          } else if (props.theme === 'dark') {
              setState({
                  colorspace: darkColorspace
              });
          } else if (typeof props.theme === 'object') {
              setState({
                  colorspace: props.theme
              });
          }
      }, [
          setState,
          props.theme
      ]);
      const themeCls = react.useMemo(()=>{
          if (typeof props.theme === 'object') return 'json-viewer-theme-custom';
          return props.theme === 'dark' ? 'json-viewer-theme-dark' : 'json-viewer-theme-light';
      }, [
          props.theme
      ]);
      const onceRef = react.useRef(true);
      const registerTypes = useTypeRegistryStore((store)=>store.registerTypes);
      if (onceRef.current) {
          const allTypes = props.valueTypes ? [
              ...predefinedTypes,
              ...props.valueTypes
          ] : [
              ...predefinedTypes
          ];
          registerTypes(allTypes);
          onceRef.current = false;
      }
      react.useEffect(()=>{
          const allTypes = props.valueTypes ? [
              ...predefinedTypes,
              ...props.valueTypes
          ] : [
              ...predefinedTypes
          ];
          registerTypes(allTypes);
      }, [
          props.valueTypes,
          registerTypes
      ]);
      const value = useJsonViewerStore((store)=>store.value);
      const prevValue = useJsonViewerStore((store)=>store.prevValue);
      const emptyPath = react.useMemo(()=>[], []);
      const setHover = useJsonViewerStore((store)=>store.setHover);
      const onMouseLeave = react.useCallback(()=>setHover(null), [
          setHover
      ]);
      return /*#__PURE__*/ jsxRuntime.jsx(material.Paper, {
          elevation: 0,
          className: clsx(themeCls, props.className),
          style: props.style,
          sx: {
              fontFamily: 'monospace',
              userSelect: 'none',
              contentVisibility: 'auto',
              ...props.sx
          },
          onMouseLeave: onMouseLeave,
          children: /*#__PURE__*/ jsxRuntime.jsx(DataKeyPair, {
              value: value,
              prevValue: prevValue,
              path: emptyPath,
              last: true
          })
      });
  };
  const JsonViewer = function JsonViewer(props) {
      if (process.env.NODE_ENV !== 'production') {
          if ('displayObjectSize' in props) {
              console.error('`displayObjectSize` is deprecated. Use `displaySize` instead.\nSee https://viewer.textea.io/migration/migration-v3#raname-displayobjectsize-to-displaysize for more information.');
          }
      }
      const isAutoDarkTheme = useThemeDetector();
      const themeType = react.useMemo(()=>{
          var _props_theme;
          return props.theme === 'auto' ? isAutoDarkTheme ? 'dark' : 'light' : (_props_theme = props.theme) !== null && _props_theme !== void 0 ? _props_theme : 'light';
      }, [
          isAutoDarkTheme,
          props.theme
      ]);
      const theme = react.useMemo(()=>{
          const backgroundColor = typeof themeType === 'object' ? themeType.base00 : themeType === 'dark' ? darkColorspace.base00 : lightColorspace.base00;
          const foregroundColor = typeof themeType === 'object' ? themeType.base07 : themeType === 'dark' ? darkColorspace.base07 : lightColorspace.base07;
          return material.createTheme({
              components: {
                  MuiPaper: {
                      styleOverrides: {
                          root: {
                              backgroundColor,
                              color: foregroundColor
                          }
                      }
                  }
              },
              palette: {
                  mode: themeType === 'dark' ? 'dark' : 'light',
                  background: {
                      default: backgroundColor
                  }
              }
          });
      }, [
          themeType
      ]);
      const mixedProps = {
          ...props,
          theme: themeType
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const jsonViewerStore = react.useMemo(()=>createJsonViewerStore(props), []);
      const typeRegistryStore = react.useMemo(()=>createTypeRegistryStore(), []);
      return /*#__PURE__*/ jsxRuntime.jsx(material.ThemeProvider, {
          theme: theme,
          children: /*#__PURE__*/ jsxRuntime.jsx(TypeRegistryStoreContext.Provider, {
              value: typeRegistryStore,
              children: /*#__PURE__*/ jsxRuntime.jsx(JsonViewerStoreContext.Provider, {
                  value: jsonViewerStore,
                  children: /*#__PURE__*/ jsxRuntime.jsx(JsonViewerInner, {
                      ...mixedProps
                  })
              })
          })
      });
  };

  exports.JsonViewer = JsonViewer;
  exports.applyValue = applyValue;
  exports.bigIntType = bigIntType;
  exports.booleanType = booleanType;
  exports.createDataType = createDataType;
  exports.darkColorspace = darkColorspace;
  exports.dateType = dateType;
  exports.defineDataType = defineDataType;
  exports.defineEasyType = defineEasyType;
  exports.deleteValue = deleteValue;
  exports.floatType = floatType;
  exports.functionType = functionType;
  exports.intType = intType;
  exports.isCycleReference = isCycleReference;
  exports.lightColorspace = lightColorspace;
  exports.nanType = nanType;
  exports.nullType = nullType;
  exports.objectType = objectType;
  exports.safeStringify = safeStringify;
  exports.stringType = stringType;
  exports.undefinedType = undefinedType;

}));
