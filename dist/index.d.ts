import { Dispatch, SetStateAction, ComponentType, FC, CSSProperties, ReactElement } from 'react';
import { SxProps, Theme } from '@mui/material/styles';

type NamedColorspace = {
    scheme: string;
    author: string;
} & Colorspace;
type Colorspace = {
    base00: string;
    base01: string;
    base02: string;
    base03: string;
    base04: string;
    base05: string;
    base06: string;
    base07: string;
    base08: string;
    base09: string;
    base0A: string;
    base0B: string;
    base0C: string;
    base0D: string;
    base0E: string;
    base0F: string;
};
declare const lightColorspace: NamedColorspace;
declare const darkColorspace: NamedColorspace;

type Path = (string | number)[];
/**
 * @param path path to the target value
 * @param oldValue
 * @param newValue
 */
type JsonViewerOnChange = <U = unknown>(path: Path, oldValue: U, newValue: U) => void;
/**
 * @param path path to the target value
 * @param value the value to be copied
 * @param copy the function to copy the value to clipboard
 */
type JsonViewerOnCopy = <U = unknown>(path: Path, value: U, copy: (value: string) => Promise<void>) => unknown | Promise<unknown>;
/**
 * @param path path to the target value
 * @param value the value to be selected
 */
type JsonViewerOnSelect = <U = unknown>(path: Path, value: U) => void;
/**
 * @param path path to the parent target where the value will be added
 */
type JsonViewerOnAdd = (path: Path) => void;
/**
 * @param path path to the target value
 * @param value the value to be deleted
 */
type JsonViewerOnDelete = <U = unknown>(path: Path, value: U) => void;
interface DataItemProps<ValueType = unknown> {
    inspect: boolean;
    setInspect: Dispatch<SetStateAction<boolean>>;
    value: ValueType;
    prevValue: ValueType | undefined;
    path: Path;
    nestedIndex?: number;
}
type EditorProps<ValueType = unknown> = {
    value: ValueType;
    setValue: Dispatch<ValueType>;
    abortEditing: () => void;
    commitEditing: (newValue: string) => void;
};
/**
 * A data type definition, including methods for checking, serializing, and deserializing values, as well as components for rendering and editing values.
 *
 * @template ValueType The type of the value represented by this data type
 */
type DataType<ValueType = unknown> = {
    /**
     * Determines whether a given value belongs to this data type.
     *
     * @param value The value to check
     * @param path The path to the value within the input data structure
     * @returns `true` if the value belongs to this data type, `false` otherwise
     */
    is: (value: unknown, path: Path) => boolean;
    /**
     * Convert the value of this data type to a string for editing
     */
    serialize?: (value: ValueType) => string;
    /**
     * Converts a string representation of a value back to a value of this data type.
     *
     * Throws an error if the input is invalid, in which case the editor will ignore the change.
     */
    deserialize?: (value: string) => ValueType;
    /**
     * The main component used to render a value of this data type.
     */
    Component: ComponentType<DataItemProps<ValueType>>;
    /**
     * An optional custom editor component for editing values of this data type.
     *
     * You must also provide a `serialize` and `deserialize` function to enable this feature.
     */
    Editor?: ComponentType<EditorProps<string>>;
    /**
     * An optional component to render before the value.
     *
     * In collapsed mode, it will still be rendered as a prefix.
     */
    PreComponent?: ComponentType<DataItemProps<ValueType>>;
    /**
     * An optional component to render after the value.
     *
     * In collapsed mode, it will still be rendered as a suffix.
     */
    PostComponent?: ComponentType<DataItemProps<ValueType>>;
};
interface JsonViewerKeyRenderer extends FC<DataItemProps> {
    when(props: DataItemProps): boolean;
}
type JsonViewerTheme = 'light' | 'dark' | 'auto' | Colorspace;
type JsonViewerProps<T = unknown> = {
    /**
     * Any value, `object`, `Array`, primitive type, even `Map` or `Set`.
     */
    value: T;
    /**
     * Name of the root value
     *
     * @default "root"
     */
    rootName?: false | string;
    /**
     * Color theme.
     *
     * @default 'light'
     */
    theme?: JsonViewerTheme;
    className?: string;
    style?: CSSProperties;
    /**
     * [The `sx` prop](https://mui.com/system/getting-started/the-sx-prop/) lets you style elements inline, using values from the theme.
     *
     * @see https://mui.com/system/getting-started/the-sx-prop/
     */
    sx?: SxProps<Theme>;
    /**
     * Indent width for nested objects
     *
     * @default 3
     */
    indentWidth?: number;
    /**
     * Customize a key, if `keyRenderer.when` returns `true`.
     */
    keyRenderer?: JsonViewerKeyRenderer;
    /**
     * Customize the definition of data types.
     *
     * @see https://viewer.textea.io/how-to/data-types
     */
    valueTypes?: DataType<any>[];
    /**
     * Whether enable add feature.
     *
     * @default false
     * */
    enableAdd?: boolean | (<U = unknown>(path: Path, currentValue: U) => boolean);
    /**
     * Whether hide the indexes
     *
     * @default false
     */
    hideIndex?: boolean;
    /**
     * Whether enable delete feature.
     *
     * @default false
     * */
    enableDelete?: boolean | (<U = unknown>(path: Path, currentValue: U) => boolean);
    /**
     * Whether enable clipboard feature.
     *
     * @default true
     */
    enableClipboard?: boolean;
    /**
     * Whether this value can be edited.
     *
     * Provide a function to customize this behavior by returning a boolean based on the value and path.
     *
     * @default false
     */
    editable?: boolean | (<U = unknown>(path: Path, currentValue: U) => boolean);
    /** Callback when value changed. */
    onChange?: JsonViewerOnChange;
    /** Callback when value copied, you can use it to customize the copy behavior.<br />\*Note: you will have to write the data to the clipboard by yourself. */
    onCopy?: JsonViewerOnCopy;
    /** Callback when value selected. */
    onSelect?: JsonViewerOnSelect;
    /** Callback when the add button is clicked. This is the function which implements the add feature. Please see the official demo for more details. */
    onAdd?: JsonViewerOnAdd;
    /** Callback when the delete button is clicked. This is the function which implements the delete feature. Please see the official demo for more details. */
    onDelete?: JsonViewerOnDelete;
    /**
     * Default inspect depth for nested objects.
     * _If the number is set too large, it could result in performance issues._
     *
     * @default 5
     */
    defaultInspectDepth?: number;
    /**
     * Default inspect control for nested objects.
     *
     * Provide a function to customize which fields should be expanded by default.
     */
    defaultInspectControl?: (path: Path, value: unknown) => boolean;
    /**
     * Hide items after reaching the count.
     * `Array` and `Object` will be affected.
     *
     * _If the number is set too large, it could result in performance issues._
     *
     * @default 30
     */
    maxDisplayLength?: number;
    /**
     * When an integer value is assigned, arrays will be displayed in groups by count of the value.
     * Groups are displayed with bracket notation and can be expanded and collapsed by clicking on the brackets.
     *
     * @default 100
     */
    groupArraysAfterLength?: number;
    /**
     * Cut off the string after reaching the count.
     * Collapsed strings are followed by an ellipsis.
     *
     * String content can be expanded and collapsed by clicking on the string value.
     *
     * @default 50
     */
    collapseStringsAfterLength?: number | false;
    /**
     * Whether sort keys through `String.prototype.localeCompare()`
     *
     * @default false
     */
    objectSortKeys?: boolean | ((a: string, b: string) => number);
    /**
     * Whether add quotes on keys.
     *
     * @default true
     */
    quotesOnKeys?: boolean;
    /**
     * Whether display data type labels
     *
     * @default true
     */
    displayDataTypes?: boolean;
    /**
     * Whether display comma at the end of items. Just like valid JSON.
     *
     * @default false
     */
    displayComma?: boolean;
    /**
     * Whether display the size of `Object`, `Array`, `Map` and `Set`.
     *
     * Provide a function to customize this behavior by returning a boolean based on the value and path.
     *
     * @default true
     */
    displaySize?: boolean | ((path: Path, value: unknown) => boolean);
    /**
     * Whether to highlight updates.
     *
     * @default false
     */
    highlightUpdates?: boolean;
};

declare const booleanType: DataType<boolean>;

declare const dateType: DataType<Date>;

type EasyTypeConfig<Value> = Pick<DataType<Value>, 'is' | 'serialize' | 'deserialize'> & {
    type: string;
    colorKey: keyof Colorspace;
    displayTypeLabel?: boolean;
    Renderer: ComponentType<DataItemProps<Value>>;
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
 */
declare function defineEasyType<Value>({ is, serialize, deserialize, type, colorKey, displayTypeLabel, Renderer }: EasyTypeConfig<Value>): DataType<Value>;

declare const functionType: DataType<Function>;

declare const nullType: DataType<null>;

declare const nanType: DataType<number>;
declare const floatType: DataType<number>;
declare const intType: DataType<number>;
declare const bigIntType: DataType<bigint>;

declare const objectType: DataType<object>;

declare const stringType: DataType<string>;

declare const undefinedType: DataType<undefined>;

/**
 * Apply a value to a given path of an object.
 */
declare function applyValue(input: any, path: (string | number)[], value: any): any;
/**
 * Delete a value from a given path of an object.
 */
declare function deleteValue(input: any, path: (string | number)[], value: any): any;
/**
 * @deprecated use `defineDataType` instead
 */
declare function createDataType<ValueType = unknown>(is: (value: unknown, path: Path) => boolean, Component: ComponentType<DataItemProps<ValueType>>): {
    is: (value: unknown, path: Path) => boolean;
    Component: ComponentType<DataItemProps<ValueType>>;
};
/**
 * @deprecated use `defineDataType` instead
 */
declare function createDataType<ValueType = unknown>(is: (value: unknown, path: Path) => boolean, Component: ComponentType<DataItemProps<ValueType>>, Editor: ComponentType<EditorProps<ValueType>>): {
    is: (value: unknown, path: Path) => boolean;
    Component: ComponentType<DataItemProps<ValueType>>;
    Editor: ComponentType<DataItemProps<ValueType>>;
};
/**
 * @deprecated use `defineDataType` instead
 */
declare function createDataType<ValueType = unknown>(is: (value: unknown, path: Path) => boolean, Component: ComponentType<DataItemProps<ValueType>>, Editor: undefined, PreComponent: ComponentType<DataItemProps<ValueType>>, PostComponent: ComponentType<DataItemProps<ValueType>>): {
    is: (value: unknown, path: Path) => boolean;
    Component: ComponentType<DataItemProps<ValueType>>;
    PreComponent: ComponentType<DataItemProps<ValueType>>;
    PostComponent: ComponentType<DataItemProps<ValueType>>;
};
/**
 * @deprecated use `defineDataType` instead
 */
declare function createDataType<ValueType = unknown>(is: (value: unknown, path: Path) => boolean, Component: ComponentType<DataItemProps<ValueType>>, Editor: ComponentType<EditorProps<ValueType>>, PreComponent: ComponentType<DataItemProps<ValueType>>, PostComponent: ComponentType<DataItemProps<ValueType>>): {
    is: (value: unknown, path: Path) => boolean;
    Component: ComponentType<DataItemProps<ValueType>>;
    Editor: ComponentType<DataItemProps<ValueType>>;
    PreComponent: ComponentType<DataItemProps<ValueType>>;
    PostComponent: ComponentType<DataItemProps<ValueType>>;
};
/**
 * Define custom data types for any data structure
 */
declare function defineDataType<ValueType = unknown>({ is, serialize, deserialize, Component, Editor, PreComponent, PostComponent }: {
    /**
     * Determines whether a given value belongs to this data type.
     *
     * @param value The value to check
     * @param path The path to the value within the input data structure
     * @returns `true` if the value belongs to this data type, `false` otherwise
     */
    is: (value: unknown, path: Path) => boolean;
    /**
     * Convert the value of this data type to a string for editing
     */
    serialize?: (value: ValueType) => string;
    /**
     * Converts a string representation of a value back to a value of this data type.
     *
     * Throws an error if the input is invalid, in which case the editor will ignore the change.
     */
    deserialize?: (value: string) => ValueType;
    /**
     * The main component used to render a value of this data type.
     */
    Component: ComponentType<DataItemProps<ValueType>>;
    /**
     * An optional custom editor component for editing values of this data type.
     *
     * You must also provide a `serialize` and `deserialize` function to enable this feature.
     */
    Editor?: ComponentType<EditorProps<string>>;
    /**
     * An optional component to render before the value.
     *
     * In collapsed mode, it will still be rendered as a prefix.
     */
    PreComponent?: ComponentType<DataItemProps<ValueType>>;
    /**
     * An optional component to render after the value.
     *
     * In collapsed mode, it will still be rendered as a suffix.
     */
    PostComponent?: ComponentType<DataItemProps<ValueType>>;
}): DataType<ValueType>;
declare const isCycleReference: (root: any, path: (string | number)[], value: unknown) => false | string;
/**
 * A safe version of `JSON.stringify` that handles circular references and BigInts.
 *
 * *This function might be changed in the future to support more types. Use it with caution.*
 *
 * @param obj A JavaScript value, usually an object or array, to be converted.
 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 * @returns
 */
declare function safeStringify(obj: any, space?: string | number): string;

declare const JsonViewer: <Value>(props: JsonViewerProps<Value>) => ReactElement;

export { type Colorspace, type DataItemProps, type DataType, type EasyTypeConfig, type EditorProps, JsonViewer, type JsonViewerKeyRenderer, type JsonViewerOnAdd, type JsonViewerOnChange, type JsonViewerOnCopy, type JsonViewerOnDelete, type JsonViewerOnSelect, type JsonViewerProps, type JsonViewerTheme, type NamedColorspace, type Path, applyValue, bigIntType, booleanType, createDataType, darkColorspace, dateType, defineDataType, defineEasyType, deleteValue, floatType, functionType, intType, isCycleReference, lightColorspace, nanType, nullType, objectType, safeStringify, stringType, undefinedType };
